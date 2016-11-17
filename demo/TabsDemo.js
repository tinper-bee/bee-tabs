import Tabs from '../src/index';
import TabPanel from '../src/TabPanel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Demo extends Component {
	render(){
		return( 
			<Tabs>
				<TabPanel tab="Tab 1" key="1">Content of Tab Pane 1</TabPanel>
				<TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
				<TabPanel tab="Tab 3" key="3">Content of Tab Pane 3</TabPanel>
				<TabPanel tab="Tab 4" key="4">Content of Tab Pane 4</TabPanel>
			</Tabs>
		)
	}
}
export default Demo;