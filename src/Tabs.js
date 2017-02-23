import React, { Component } from 'react';
import classNames from 'classnames';
const propTypesTabs = {
  	clsPrefix:React.PropTypes.string,
  	nav:React.PropTypes.string,
  	cont:React.PropTypes.string,
  	suffix:React.PropTypes.string,
  	defaultActiveKey:React.PropTypes.string
};
const defaultPropsTabs = {
	clsPrefix:'u-tabs',
	nav:'simple',
	cont:'simple',
	navsuffix:'-tabs-nav',
	contsuffix:'-tabs-content',
	defaultActiveKey:"1",
	count:null
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
        document.querySelector('.u-tabs-tab-child').style.transform=`translate3d(${count},0,0)`
    }
	clickHandler(e){
		this.setState({
			activeKey:e.currentTarget.dataset.id
		})
		this.ruleSelector(e.currentTarget.dataset.id)
		this.formatChildren(e.currentTarget.dataset.id);
	}
	formatChildren(v){
		let arr = []
		if(!this.props.children[0]) {
			arr.push(this.props.children);
		}else{
			arr = this.props.children;
		}

		//let width = 100/Number(this.props.children.length)+'%';
		let minWidth = "90px";
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
				tab_active =classNames('u-tabs-tab',{['u-tabs-tab-active']:(e.key==stateActiveKey)}),
				cont_active =classNames('u-content',{['u-content-active']:(e.key==stateActiveKey)});
			navArr.push(<div style={{minWidth:minWidth}} onClick={this.clickHandler} className={tab_active} data-id={key} key={key}>{tab}</div>)
			contentArr.push(<div className={cont_active} data-id={key} key={key}>{children}</div>)
		});
		const content =  (
			<div className={clsname}>
				<div className="u-tabs-nav">
					{navArr}
					<div style={{minWidth:minWidth}} className="u-tabs-tab-child"></div>
				</div>
				<div className="u-content-list">
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
			<div className={this.props.clsPrefix}>
			{this.state.content}
			</div>
		)
	}
}
Tabs.propTypes = propTypesTabs;
Tabs.defaultProps = defaultPropsTabs;
export default Tabs;
