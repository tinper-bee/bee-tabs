
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';

import Tabs, { TabPane } from '../src';
import TabContent from '../src/TabContent';
import ScrollableInkTabBar from '../src/ScrollableInkTabBar';

const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 *
 * @title 基础tab
 * @description
 *
 */

 var callback = function(key){

 }


class Demo1 extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Tabs
      defaultActiveKey="2"
      onChange={callback}
      renderTabBar={()=><ScrollableInkTabBar />}
      renderTabContent={()=><TabContent />}
    >
      <TabPane tab='tab 1' key="1">first</TabPane>
      <TabPane tab='tab 2' key="2">second</TabPane>
      <TabPane tab='tab 3' key="3">third</TabPane>
    </Tabs>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 基础tab","code":"/**\r\n *\r\n * @title 基础tab\r\n * @description\r\n *\r\n */\r\n\r\n var callback = function(key){\r\n\r\n }\r\n\r\n\r\nclass Demo1 extends Component {\r\n    constructor(props) {\r\n        super(props)\r\n    }\r\n\r\n    render() {\r\n\r\n        return (\r\n            <Tabs\r\n      defaultActiveKey=\"2\"\r\n      onChange={callback}\r\n      renderTabBar={()=><ScrollableInkTabBar />}\r\n      renderTabContent={()=><TabContent />}\r\n    >\r\n      <TabPane tab='tab 1' key=\"1\">first</TabPane>\r\n      <TabPane tab='tab 2' key=\"2\">second</TabPane>\r\n      <TabPane tab='tab 3' key=\"3\">third</TabPane>\r\n    </Tabs>\r\n        )\r\n    }\r\n}\r\n","desc":""}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );


        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
