import Tabs from '../src/index';
import TabPanel from '../src/TabPanel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Demo extends Component {
	render(){
		return(
			<div>
				<Tabs navtype="slide" contenttype="" defaultActiveKey="2">
					<TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
					<TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
					<TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
					<TabPanel tab="Tab 4" key="4">Content of Tab Pane 4</TabPanel>
				</Tabs>
			</div> 	
		)
	}
}
export default Demo;