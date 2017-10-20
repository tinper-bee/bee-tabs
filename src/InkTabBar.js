import React,{Component} from 'react';
import InkTabBarMixin from './InkTabBarMixin';
import TabBarMixin from './TabBarMixin';
import createClass from 'create-react-class';

const InkTabBar = createClass({
  mixins: [TabBarMixin, InkTabBarMixin], 
  render() {
    const inkBarNode = this.getInkBarNode();
    const tabs = this.getTabs();
    return this.getRootNode([inkBarNode, tabs]);
  }
  
});

export default InkTabBar;
