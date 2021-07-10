import React ,{Component,Fragment} from 'react'
import {Button,Tabs ,Avatar,Row, Col } from 'antd'
import axios from 'axios'
import http from './axios/api'
import { Link } from 'react-router-dom'
import PhomeTab from './PhomeTab'
import './PhomeStyle.css'



class Phome extends Component {

	constructor(props){
		super(props);
		this.state={
			post_number:'',
			following_number:'',
			followed_number:'',
			user_name:'',
			portrait:'',
			credit:''
		}
	}

 componentWillMount() {
    this.getPhomeValue();

  }
  
  getPhomeValue(){
    http({
      url: '/api/read_profile',
      method: 'post',
      data: {user_id: '1751924'},
      success: (res)=>{
        this.setState({
         
          post_number:res.post_number,
          following_number:res.following_number,
          followed_number:res.followed_number,
          user_name:res.user_name,
          portrait:res.portrait,
          credit:res.credit,
         
        })
        console.log(res)
      }
    })
  }
 
 


  render() {
    const {post_number,following_number,followed_number,user_name,portrait,credit} = this.state;

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
	    <Avatar size ={70} src={portrait} />
	    <p style={{padding: '10px 15px 0px'}} >{user_name}</p>
	</div>
</Col>

<Col span={8}>
   <Row >
	   <Col span={8}>
			<div className='btn1' style={{ padding: '50px 110px 16px' }}>
			    <Button >EDIT</Button> 
			</div>
	   </Col>
	   <Col span={8}>
			<div className='btn2' style={{ padding: '50px 200px 16px' }}>    
			    <Button >POST</Button>
			</div>
	   </Col>

   </Row>
</Col>

</Row>
</div>

 <PhomeTab />

 </Fragment>
    )
  }



}

export default Phome;