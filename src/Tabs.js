import React, { Component } from 'react';
import classNames from 'classnames';
const propTypesTabs = {
  	cls:React.PropTypes.string,
  	nav:React.PropTypes.string,
  	cont:React.PropTypes.string,
  	suffix:React.PropTypes.string,
  	defaultActiveKey:React.PropTypes.string
};
const defaultPropsTabs = {
	cls:'cls',
	nav:'simple',
	cont:'simple',
	navsuffix:'-tabs-nav',
	contsuffix:'-tabs-content',
	defaultActiveKey:"1",
	count:null ,//记录子节点个数
	sheet:null
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
		this.ruleSelector = this.ruleSelector.bind(this);
	}
	ruleSelector(n) {
		let count = (n-1)*100+'%';
        document.querySelector('.bee-tabs-tab-child').style.transform=`translate3d(${count},0,0)`
    }
	clickHandler(e){
		console.log("current",e.currentTarget.dataset.id)
		this.setState({
			activeKey:e.currentTarget.dataset.id
		})
		console.log(this.state.activeKey)
		this.ruleSelector(e.currentTarget.dataset.id)
		this.formatChildren(e.currentTarget.dataset.id);
	}
	componentWillUpdate(nextProps, nextState) {
		console.log(nextProps,nextState)
	}
	formatChildren(v){
		let arr = this.props.children;
		let width = 100/Number(this.props.children.length)+'%';
		this.setState({
			count:arr.length
		})
		let stateActiveKey = v||this.state.activeKey;
		let nav = this.props.navtype||this.props.nav,
			cont = this.props.contenttype||this.props.cont,
			clsname = '';
		clsname = `${nav}${this.props.navsuffix} ${cont}${this.props.contsuffix}`;

		const navArr = [];
		const contentArr = [];
		arr.forEach((e)=>{
			let key  = 	e.key,
				tab = e.props.tab,
				children = e.props.children,
				tab_active = e.key==stateActiveKey?'bee-tabs-tab bee-tabs-tab-active':'bee-tabs-tab',
				cont_active = e.key==stateActiveKey?'bee-content bee-content-active':'bee-content';
			navArr.push(<div style={{width:width}} onClick={this.clickHandler} className={tab_active} data-id={key} key={key}>{tab}</div>)	
			contentArr.push(<div className={cont_active} data-id={key} key={key}>{children}</div>)
		});
		const content =  (
			<div className={clsname}>
				<div className="bee-tabs-nav">
					{navArr}
					<div style={{width:width}} className="bee-tabs-tab-child"></div>
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