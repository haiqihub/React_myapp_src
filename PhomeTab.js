import React ,{Component,Fragment} from 'react'
import {Tabs } from 'antd';
import PostsContent from './PostsContent'
import CollectionsContent from './CollectionsContent'
import './PhomeTabStyle.css'

const { TabPane } = Tabs;

class PhomeTab extends Component {

	constructor(props){
		super(props);
		this.state={
      
		}
	}


  render() {
    return (
<Fragment >

<div className='tabs'>
 <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
    <TabPane tab="Posts" key="1">

    <PostsContent />
    </TabPane>
    <TabPane tab="Collections" key="2">

    <CollectionsContent />
    </TabPane>
  </Tabs>
 </div>

 </Fragment>
    )
  }

callback(key) {
  console.log(key);
}

}

export default PhomeTab;