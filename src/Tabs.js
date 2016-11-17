import React, { Component } from 'react';
const propTypesTabs = {
  	cls:React.PropTypes.string,
  	defaultActiveKey:React.PropTypes.string
};
const defaultPropsTabs = {
	cls:'cls',
	defaultActiveKey:"2"
};
class Tabs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content:'',
			activeKey:this.props.defaultActiveKey
		};
		this.formatChildren = this.formatChildren.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
	}
	clickHandler(e){
		console.log(e.currentTarget.dataset.id)
		this.setState({
			activeKey:e.currentTarget.dataset.id
		})
		console.log(this.state.activeKey)
		this.formatChildren(e.currentTarget.dataset.id);
	}
	formatChildren(v){
		let arr = this.props.children;
		let stateActiveKey = v||this.state.activeKey;
		const navArr = [];
		const contentArr = [];
		arr.forEach((e)=>{
			let key  = 	e.key,
				tab = e.props.tab,
				children = e.props.children,
				tab_active = e.key==stateActiveKey?'bee-tabs-tab bee-tabs-tab-active':'bee-tabs-tab',
				cont_active = e.key==stateActiveKey?'bee-content bee-content-active':'bee-content';
			navArr.push(<div onClick={this.clickHandler} className={tab_active} data-id={key} key={key}>{tab}</div>)	
			contentArr.push(<div className={cont_active} data-id={key} key={key}>{children}</div>)
		});
		const content =  (
			<div>
				<div className="bee-tabs-nav">
					{navArr}
				</div>
				<div className="bee-content-list">
					{contentArr}
				</div>
			</div>
		)
		this.setState({
			content:content
		})
	}
	componentDidMount() {
		this.formatChildren();
	}
	render(){
		return(
			<div className={this.props.cls}> 
			{this.state.content}
			</div>
		)
	}
}
Tabs.propTypes = propTypesTabs;
Tabs.defaultProps = defaultPropsTabs;
export default Tabs;