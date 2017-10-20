import React,{Component} from 'react';
import InkTabBarMixin from './InkTabBarMixin';
import TabBarMixin from './TabBarMixin';
import createClass from 'create-react-class';

<<<<<<< HEAD
class InkTabBar extends Component{

  mixins: [TabBarMixin, InkTabBarMixin]

=======
const InkTabBar = createClass({
  mixins: [TabBarMixin, InkTabBarMixin],
>>>>>>> daily/1.0.2
  render() {
    const inkBarNode = this.getInkBarNode();
    const tabs = this.getTabs();
    return this.getRootNode([inkBarNode, tabs]);
  }

}

export default InkTabBar;
