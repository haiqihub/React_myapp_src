import React ,{Component,Fragment} from 'react'
import {Tabs } from 'antd';
import ViewPost from './ViewPost'
import CollectionsContent from './CollectionsContent'
import './ViewHomeTabStyle.css'

const { TabPane } = Tabs;

class ViewHomeTab extends Component {

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

    <ViewPost />
    </TabPane>
    <TabPane tab="Collections" disabled key="2">

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

export default ViewHomeTab;