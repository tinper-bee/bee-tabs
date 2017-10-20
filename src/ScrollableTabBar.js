import React,{Component} from 'react';
import ScrollableTabBarMixin from './ScrollableTabBarMixin';
import TabBarMixin from './TabBarMixin';
import createClass from 'create-react-class';

<<<<<<< HEAD
class ScrollableTabBar extends Component{

  mixins: [TabBarMixin, ScrollableTabBarMixin]
  
=======
const ScrollableTabBar = createClass({
  mixins: [TabBarMixin, ScrollableTabBarMixin],
>>>>>>> daily/1.0.2
  render() {
    const inkBarNode = this.getInkBarNode();
    const tabs = this.getTabs();
    const scrollbarNode = this.getScrollBarNode([inkBarNode, tabs]);
    return this.getRootNode(scrollbarNode);
  }

}

export default ScrollableTabBar;
