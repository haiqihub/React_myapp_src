import React ,{Component,Fragment} from 'react'
import { Avatar ,Card, Icon,Row, Col, Button} from 'antd'
import axios from 'axios'
import http from './axios/api'
import { Link } from 'react-router-dom'
import './FollowingStyle.css'

const { Meta } = Card;

class FollowingList extends Component {

	constructor(props){
		super(props);
		this.state={
			following:[],
		
		}
	}

 componentWillMount() {
    this.getFollowing();
 
  }

  getFollowing(){
    http({
      url: '/api/show_user_relation_list',
      method: 'post',
      data: {relation_type:'1',user_id: '111',target_id:'111'},
      success: (res)=>{
        this.setState({
         following: res
        })
        console.log(res)
      }
    })
  }

removeCard(index){
  const list = [...this.state.following];
  http({
        url: '/api/follow',
        method: 'post',
        data: {actor_id: '111',object_id:list[index].user_id },  
        // list[index].user_id
        success: (res)=>{
          this.setState({
            is_following: res
          })
          console.log(res)
        }
      }); 
  
   
   list.splice(index,1);
    this.setState({
   following : list
    });
    this.setState({
       refresh:'refresh'
    });
  }
 

  render() {
    const {following} = this.state;

    return (
<Fragment >

 <div className='eachfollowing'>
 	<Row gutter={16}  justify="center">
        {following.map((item, index) => {
          return (
          	
            	<div className='following-item' key={index} > 
	            
	            	<Col className="gutter-row" span={12}> 
	            		 <div className="gutter-box">     
				             <Card
							    style={{ width: 300 }}
							    actions={[<Icon type="check-circle" theme="twoTone"></Icon>,
							   	<span className='btn' onClick={this.removeCard.bind(this,index)}>
							   	<Icon type="close-circle" ></Icon>
							    </span>
							    ]}>
						

							    <Meta
							      avatar={<Avatar src={item.portrait} />}
							      title={item.name}
							      description={item.school}
							    />
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


export default FollowingList;
