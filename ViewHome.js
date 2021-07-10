import React ,{Component,Fragment} from 'react'
import {Button,Tabs ,Avatar,Row, Col } from 'antd'
import axios from 'axios'
import http from './axios/api'
import { Link } from 'react-router-dom'
import ViewHomeTab from './ViewHomeTab'
import './ViewHomeStyle.css'



class ViewHome extends Component {

	constructor(props){
		super(props);
		this.state={
			post_number:'',
			following_number:'',
			followed_number:'',
			user_name:'',
			portrait:'',
			credit:'',
			is_following:'',
			is_blocked: '',
		}
	}

componentWillMount() {
 this.getData();


}

 getData(){
    http({
      url: '/api/view_profile',
      method: 'post',
      data: {user_id: '1752058',target_id:'111'},
      success: (res)=>{
        this.setState({
          post_number:res.post_number,
          following_number:res.following_number,
          followed_number:res.followed_number,
          name:res.name,
          portrait:res.portrait,
          credit:res.credit,

         
        })
        console.log(res)
      }
    })
  }

  changeFollowBtn(){
  	http({
	      url: '/api/follow',
	      method: 'post',
	      data: {actor_id: '111',object_id:'1752058'},
	      //follower[index].user_id
	      success: (res)=>{
	        this.setState({
	          Data: res
	        })
	        console.log(res)
	      }
	    })
  const{is_following}=this.state;
  this.setState({
  	is_following : !is_following,
  });
}

  changeBlockBtn(){
  	http({
	      url: '/api/block',
	      method: 'post',
	      data: {actor_id: '111',object_id:'1752058'},
	      //follower[index].user_id
	      success: (res)=>{
	        this.setState({
	          Data: res
	        })
	        console.log(res)
	      }
	    })
  const{is_blocked}=this.state;
  this.setState({
  	is_blocked : !is_blocked,
  });
}



  render() {
  	 const {post_number,following_number,followed_number,name,portrait,credit,is_following,is_blocked} = this.state;

    return (
<Fragment >

<div className='header'>
<Row type="flex" justify="space-between">
      
<Col span={8}>
	<div className='dataBar'>
	 <Row type="flex" justify="start">
      <Col span={6}>{post_number} posts</Col>
      <Col span={6}>{following_number} following</Col>
      <Col span={6}>{followed_number} followers</Col>  
      <Col span={6}>{credit} credits</Col>
    </Row>
	</div>
</Col>

<Col span={8}>
	<div className='photo'>
	    <Avatar size ={70} src=  {portrait}/>
	    <p style={{padding: '10px 15px 0px'}} >{name}</p>
	</div>
</Col>

<Col span={8}>
   <Row >
	   <Col span={8}>
			<div className='btn1' style={{ padding: '50px 110px 16px' }}>
			    <Button className={is_following?"a":"b"}
			    onClick={this.changeFollowBtn.bind(this)}>
			    {is_following?"Follow":"Followed"} 
			    </Button> 
			</div>
	   </Col>
	   <Col span={8}>
			<div className='btn2' style={{ padding: '50px 200px 16px' }}>    
			    <Button className={is_blocked?"c":"d"}
			    onClick={this.changeBlockBtn.bind(this)}>
			    {is_blocked?"Block":"Blocked"}   
			    </Button>
			</div>
	   </Col>

   </Row>
</Col>

</Row>
</div>

 <ViewHomeTab />

 </Fragment>
    )
  }



}

export default ViewHome;