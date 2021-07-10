import React ,{Component,Fragment} from 'react'
import { Avatar ,Card, Icon,Row, Col, Button} from 'antd'
import axios from 'axios'
import http from './axios/api'
import { Link } from 'react-router-dom'
import './ViewFollowingStyle.css' 

const { Meta } = Card;

class ViewFollowing extends Component {


	constructor(props){
		super(props);
		this.state={
			
			following : [],  
			
		}
	}

componentWillMount(){
  this.getFollowing();
{/*
  const { following,is_following} = this.state;
  const followings = following.map(item=>({...item,is_following})); 
  this.setState({followings})
*/}
}

getFollowing(){
    http({
      url: '/api/show_user_relation_list',
      method: 'post',
      data: {relation_type:'1',user_id: '111',target_id:'1752058'},
      success: (res)=>{
        this.setState({
          following: res
         
        })
        console.log(res)
      }
    })
  }





		
changeBtn(index){
  const { following } = this.state;

  	http({
	      url: '/api/follow',
	      method: 'post',
	      data: {actor_id: '111',object_id:following[index].user_id},
	      //following[index].user_id
	      success: (res)=>{
	        this.setState({
	          is_following: res
	        })
	        console.log(res)
	      }
	    })
  
  following[index].is_following = !following[index].is_following;
  this.setState({following});
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
  	const {following} = this.state;
    return (
<Fragment >
 <div className='eachfollowings'>
 	<Row gutter={16}  justify="center">
 
        {following.map((item, index) => {
          return (
            	<div className='followings-item' key={index} > 
	            
	            	<Col className="gutter-row" span={12}> 
	            		<div className="gutter-box"> 
				            <Card
									    style={{ width: 300 }}
									    actions={
									    	[
										    	<div 
										    		className={item.is_following?"a":"b"}  
									        	    onClick={this.changeBtn.bind(this,index)}>
									        		<Button >{item.is_following?"Followed":"Follow"}</Button>
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
 


export default ViewFollowing;
