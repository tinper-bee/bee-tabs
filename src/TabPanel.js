import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

//nav 
const propTypesNav = {
  
};
const defaultPropsNav = {

};
class Nav extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>{this.props.tab}</div>
    )
  }
}
Nav.propTypes = propTypesNav;
Nav.defaultProps = defaultPropsNav;
//content
const propTypesContent = {
  
};
const defaultPropsContent = {

};
class Content extends Component{
  constructor(props) {
    super(props);
    
  }
  render(){
    return(
      <div>{this.props.content}</div>
    )
  }
}
Content.propTypes = propTypesContent;
Content.defaultProps = defaultPropsContent;
//control
const propTypesTabPanel = {
  
};
const defaultPropsTabPanel = {

};
class TabPanel extends Component {
  constructor(props) {
    super(props);
    
  }
  render(){
    return(
      <div>
         <Nav tab={this.props.tab} key={this.props.key}/><Content content= {this.props.children}/>
      </div>
    )
  }
}
TabPanel.propTypes = propTypesTabPanel;
TabPanel.defaultProps = defaultPropsTabPanel;
export default TabPanel;