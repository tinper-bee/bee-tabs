
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import { Tabs, TabPanel } from '../src';

const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 *
 * @title 基础tab
 * @description
 *
 */

class Demo1 extends Component {
    render() {
        return (
            <Tabs navtype="simple" contenttype="" defaultActiveKey="2">
                <TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
                <TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
                <TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
                <TabPanel tab="Tab 4" key="4">测试测试 4</TabPanel>
            </Tabs>
        )
    }
}
/**
 *
 * @title 基础tab带有上划线
 * @description
 *
 */

class Demo2 extends Component {
    render() {
        return (
            <Tabs navtype="fadeup" contenttype="" defaultActiveKey="2">
                <TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
                <TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
                <TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
                <TabPanel tab="Tab 4" key="4">测试测试 4</TabPanel>
            </Tabs>
        )
    }
}
/**
 *
 * @title 基础tab带有下划线
 * @description
 *
 */

class Demo3 extends Component {
    render() {
        return (
            <Tabs navtype="fill" contenttype="" defaultActiveKey="2">
                <TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
                <TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
                <TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
                <TabPanel tab="Tab 4" key="4">测试测试 4</TabPanel>
            </Tabs>
        )
    }
}
/**
 *
 * @title 基础tab背景梯形
 * @description
 *
 */

class Demo4 extends Component {
    render() {
        return (
            <Tabs navtype="turn" contenttype="moveleft" defaultActiveKey="2">
                <TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
                <TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
                <TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
                <TabPanel tab="Tab 4" key="4">测试测试 4</TabPanel>
            </Tabs>
        )
    }
}
/**
 *
 * @title 基础tab选中后背景白色
 * @description
 *
 */

class Demo5 extends Component {
    render() {
        return (
            <Tabs navtype="fade" contenttype="" defaultActiveKey="2">
                <TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
                <TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
                <TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
                <TabPanel tab="Tab 4" key="4">测试测试 4</TabPanel>
            </Tabs>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 基础tab","code":"/**\r\n *\r\n * @title 基础tab\r\n * @description\r\n *\r\n */\r\n\r\nclass Demo1 extends Component {\r\n    render() {\r\n        return (\r\n            <Tabs navtype=\"simple\" contenttype=\"\" defaultActiveKey=\"2\">\r\n                <TabPanel tab=\"Tab 1\" key=\"1\">测试测试 1</TabPanel>\r\n                <TabPanel tab=\"Tab 2\" key=\"2\">Content of Tab Pane 2</TabPanel>\r\n                <TabPanel tab=\"Tab 3\" key=\"3\">测试测试 3</TabPanel>\r\n                <TabPanel tab=\"Tab 4\" key=\"4\">测试测试 4</TabPanel>\r\n            </Tabs>\r\n        )\r\n    }\r\n}\r\n","desc":""},{"example":<Demo2 />,"title":" 基础tab带有上划线","code":"/**\r\n *\r\n * @title 基础tab带有上划线\r\n * @description\r\n *\r\n */\r\n\r\nclass Demo2 extends Component {\r\n    render() {\r\n        return (\r\n            <Tabs navtype=\"fadeup\" contenttype=\"\" defaultActiveKey=\"2\">\r\n                <TabPanel tab=\"Tab 1\" key=\"1\">测试测试 1</TabPanel>\r\n                <TabPanel tab=\"Tab 2\" key=\"2\">Content of Tab Pane 2</TabPanel>\r\n                <TabPanel tab=\"Tab 3\" key=\"3\">测试测试 3</TabPanel>\r\n                <TabPanel tab=\"Tab 4\" key=\"4\">测试测试 4</TabPanel>\r\n            </Tabs>\r\n        )\r\n    }\r\n}\r\n","desc":""},{"example":<Demo3 />,"title":" 基础tab带有下划线","code":"/**\r\n *\r\n * @title 基础tab带有下划线\r\n * @description\r\n *\r\n */\r\n\r\nclass Demo3 extends Component {\r\n    render() {\r\n        return (\r\n            <Tabs navtype=\"fill\" contenttype=\"\" defaultActiveKey=\"2\">\r\n                <TabPanel tab=\"Tab 1\" key=\"1\">测试测试 1</TabPanel>\r\n                <TabPanel tab=\"Tab 2\" key=\"2\">Content of Tab Pane 2</TabPanel>\r\n                <TabPanel tab=\"Tab 3\" key=\"3\">测试测试 3</TabPanel>\r\n                <TabPanel tab=\"Tab 4\" key=\"4\">测试测试 4</TabPanel>\r\n            </Tabs>\r\n        )\r\n    }\r\n}\r\n","desc":""},{"example":<Demo4 />,"title":" 基础tab背景梯形","code":"/**\r\n *\r\n * @title 基础tab背景梯形\r\n * @description\r\n *\r\n */\r\n\r\nclass Demo4 extends Component {\r\n    render() {\r\n        return (\r\n            <Tabs navtype=\"turn\" contenttype=\"moveleft\" defaultActiveKey=\"2\">\r\n                <TabPanel tab=\"Tab 1\" key=\"1\">测试测试 1</TabPanel>\r\n                <TabPanel tab=\"Tab 2\" key=\"2\">Content of Tab Pane 2</TabPanel>\r\n                <TabPanel tab=\"Tab 3\" key=\"3\">测试测试 3</TabPanel>\r\n                <TabPanel tab=\"Tab 4\" key=\"4\">测试测试 4</TabPanel>\r\n            </Tabs>\r\n        )\r\n    }\r\n}\r\n","desc":""},{"example":<Demo5 />,"title":" 基础tab选中后背景白色","code":"/**\r\n *\r\n * @title 基础tab选中后背景白色\r\n * @description\r\n *\r\n */\r\n\r\nclass Demo5 extends Component {\r\n    render() {\r\n        return (\r\n            <Tabs navtype=\"fade\" contenttype=\"\" defaultActiveKey=\"2\">\r\n                <TabPanel tab=\"Tab 1\" key=\"1\">测试测试 1</TabPanel>\r\n                <TabPanel tab=\"Tab 2\" key=\"2\">Content of Tab Pane 2</TabPanel>\r\n                <TabPanel tab=\"Tab 3\" key=\"3\">测试测试 3</TabPanel>\r\n                <TabPanel tab=\"Tab 4\" key=\"4\">测试测试 4</TabPanel>\r\n            </Tabs>\r\n        )\r\n    }\r\n}\r\n","desc":""}]


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
