import React ,{Component,Fragment} from 'react'
import { Link } from 'react-router-dom';
import {Button,Tabs ,Avatar,Row, Col ,Card} from 'antd'
import axios from 'axios'
import http from './axios/api'
import './ViewPostStyle.css';
const { Meta } = Card;

class ViewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData :[]
    };
  }

  componentWillMount() {
    this.getPostData();
    
  }

  
 
 getPostData(){
    http({
      url: '/api/view_profile',
      method: 'post',
      data: {user_id: '111',target_id:'1752058'},
      success: (res)=>{
        this.setState({
          postData: res.posts
        })
        console.log(res)
      }
    })
  }



  render() {
    const { postData } = this.state;
    return (
 <Fragment>
        <div className='post-main-content'>
        <Row gutter={16}  >
        {postData.map((item, index) => {
          return (
            <div className='post-item' key={index}>

                  <Col className="gutter-row" span={6}> 
                  <div className="gutter-box">     
                     <Card
                        hoverble

                        style={{ width: 250 }}
                         cover={<img  src={item.picture} />}
                        
                     >
                     <h3 className='post-item-title'>{item.title}</h3>
                     <p className='post-item-content'>{item.content_1}</p>
                        <Meta   
                          avatar={<Avatar src={item.portrait} />}
                          title={item.user_name}
                          description={item.time_1}
                        />
                     </Card> 
                  </div> 
              </Col>
              </div>
          );
        })}
      </Row>
      </div>
 </Fragment>
    )
  }



}

export default ViewPost;