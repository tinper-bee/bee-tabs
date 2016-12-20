
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
    render () {
        return (
            <Tabs navtype="slide" contenttype="" defaultActiveKey="2">
                <TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
                <TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
                <TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
                <TabPanel tab="Tab 4" key="4">测试测试 4</TabPanel>
                <TabPanel tab="Tab 5" key="5">测试测试 5</TabPanel>
                <TabPanel tab="Tab 6" key="6">测试测试 6</TabPanel>
                <TabPanel tab="Tab 7" key="7">测试测试 7</TabPanel>
            </Tabs>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 基础tab","code":"/**\n *\n * @title 基础tab\n * @description \n *\n */\n\nclass Demo1 extends Component {\n    render () {\n        return (\n            <Tabs navtype=\"slide\" contenttype=\"\" defaultActiveKey=\"2\">\n                <TabPanel tab=\"Tab 1\" key=\"1\">测试测试 1</TabPanel>\n                <TabPanel tab=\"Tab 2\" key=\"2\">Content of Tab Pane 2</TabPanel>\n                <TabPanel tab=\"Tab 3\" key=\"3\">测试测试 3</TabPanel>\n                <TabPanel tab=\"Tab 4\" key=\"4\">测试测试 4</TabPanel>\n                <TabPanel tab=\"Tab 5\" key=\"5\">测试测试 5</TabPanel>\n                <TabPanel tab=\"Tab 6\" key=\"6\">测试测试 6</TabPanel>\n                <TabPanel tab=\"Tab 7\" key=\"7\">测试测试 7</TabPanel>\n            </Tabs>\n        )\n    }\n}\n","desc":" "}]


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
