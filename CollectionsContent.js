import React ,{Component,Fragment} from 'react'
import {Button,Tabs ,Avatar,Row, Col,Card } from 'antd'
import axios from 'axios'
import http from './axios/api'
import { Link } from 'react-router-dom'
import './CollectStyle.css'
const { Meta } = Card;



class CollectionsContent extends Component {
  constructor(props) {  
    super(props);
    this.state = {
      collectList: []
    };
  }


  componentDidMount() {
    this.getData();
   
  }


 getData(){
    http({
      url: '/api/show_collection',
      method: 'post',
      data: {user_id: '1751924'},
      success: (res)=>{
        this.setState({
          collectList: res
        })
        console.log(res)
      }
    })
  }
 




  render() {

    const { collectList } = this.state;
    return (
 <Fragment>
        <div className='collect-main-content'>
        <Row gutter={16}  >
        {collectList.map((item, index) => {
          return (

            <div className='collect-item' key={index}>

                  <Col className="gutter-row" span={6}> 
                  <div className="gutter-box">     
                     <Card
                        hoverble

                        style={{ width: 250 }}
                         cover={<img src={item.picture} />}
                        
                     >
                     <h3 className='collect-item-title'>{item.title}</h3>
                     <p className='collect-item-content'>{item.content_1}</p>
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

export default CollectionsContent;