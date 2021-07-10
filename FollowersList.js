import React ,{Component,Fragment} from 'react'
import { Avatar ,Card, Row, Col, Button} from 'antd'
import axios from 'axios'
import http from './axios/api'
import { Link } from 'react-router-dom'
import './FollowersStyle.css'

const { Meta } = Card;

class FollowersList extends Component {


	constructor(props){
		super(props);
		this.state={

			
			
			follower : [],  
			
		}
	}
	
componentWillMount(){
	this.getFollower();

{/*
	const { follower ,is_following} = this.state;
	const followers = follower.map(item=>({...item,is_following})); 
	this.setState({followers})
*/}
}

getFollower(){
    http({
      url: '/api/show_user_relation_list',
      method: 'post',
      data: {relation_type:'3',user_id: '111',target_id:'111'},
      success: (res)=>{
        this.setState({
          follower: res
        })
        console.log(res)
      }
    })
  }
 




		
changeBtn(index){
       const { follower } = this.state;
	http({
	      url: '/api/follow',
	      method: 'post',
	      data: {actor_id: '111',object_id:follower[index].user_id},
	      //follower[index].user_id
	      success: (res)=>{
	        this.setState({
	          is_following: res
	        })
	        console.log(res)
	      }
	    })
  
  
  follower[index].is_following = !follower[index].is_following;
  this.setState({follower});
 // 	const list=[...this.state.followers];
 // 	list[index].active=false;
	// { const list = [...this.state.followers,this.state.inputValue];
	// 	 inputValue:"as"
	// }
 //   this.setState({
	   
 //   	   followers: list,
 //       refresh:'refresh'
 //    });
 //  } 

}
  
 

  render() {
  	const {follower} = this.state;
    return (
<Fragment >
 <div className='eachfollowers'>
 	<Row gutter={16}  justify="center">
 
        {follower.map((item, index) => {
          return (
            	<div className='followers-item' key={index} > 
	            
	            	<Col className="gutter-row" span={12}> 
	            		<div className="gutter-box"> 
				            <Card
									    style={{ width: 300 }}
									    actions={
									    	[
										    	<div 
										    		className={item.is_following?"a":"b"}  
									        	    onClick={this.changeBtn.bind(this,index)}>
									        		<Button >{item.is_following?"followed":"follow"}</Button>
			                    </div>
						             ]}
				             		>
	    									 <Meta
	    								      avatar={<Avatar src={item.portrait} />}
	    								      title={item.name}
	    								      description={item.school}/> 
								    </Card>
				             
			            </div> 
			        	</Col>
			      
            	</div>
             
          		);
        	})
    	}
    </Row>
</div>
 </Fragment>
    )
  }
}
 


export default FollowersList;
