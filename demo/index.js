
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


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 基础tab1","code":"/**\n *\n * @title 基础tab1\n * @description\n *\n */\n\nimport React, { Component } from 'react';\nimport Tabs, { TabPane } from 'tinper-bee';\nimport TabContent from '../../src/TabContent';\nimport ScrollableInkTabBar from '../../src/ScrollableInkTabBar';\n\nvar callback = function(key){\n\n}\n\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props)\n    }\n\n    render() {\n\n        return (\n            <Tabs\n                defaultActiveKey=\"2\"\n                onChange={callback}\n                tabBarStyle=\"primary\"\n                renderTabBar={()=><ScrollableInkTabBar />}\n                renderTabContent={()=><TabContent />}\n                >\n                <TabPane tab='tab 1' key=\"1\">1</TabPane>\n                <TabPane tab='tab 2' key=\"2\">2</TabPane>\n                <TabPane tab='tab 3' key=\"3\">3</TabPane>\n                <TabPane tab='tab 4' key=\"4\">4</TabPane>\n            </Tabs>\n        )\n    }\n}\n\n\n","desc":""},{"example":<Demo2 />,"title":" 基础tab2","code":"/**\n *\n * @title 基础tab2\n * @description\n *\n */\n\nimport React, { Component } from 'react';\nimport Tabs, { TabPane } from 'tinper-bee';\nimport TabContent from '../../src/TabContent';\nimport ScrollableInkTabBar from '../../src/ScrollableInkTabBar';\n\nvar callback = function(key){\n\n}\n\n\nclass Demo2 extends Component {\n    constructor(props) {\n        super(props)\n    }\n\n    render() {\n\n        return (\n            <Tabs\n                defaultActiveKey=\"2\"\n                onChange={callback}\n                tabBarStyle=\"upborder\"\n                renderTabBar={()=><ScrollableInkTabBar />}\n                renderTabContent={()=><TabContent />}\n                >\n                <TabPane tab='tab 1' key=\"1\">1</TabPane>\n                <TabPane tab='tab 2' key=\"2\">2</TabPane>\n                <TabPane tab='tab 3' key=\"3\">3</TabPane>\n                <TabPane tab='tab 4' key=\"4\">4</TabPane>\n            </Tabs>\n        )\n    }\n}\n\n","desc":""},{"example":<Demo3 />,"title":" 基础tab3","code":"/**\n *\n * @title 基础tab3\n * @description\n *\n */\n\nimport React, { Component } from 'react';\nimport Tabs, { TabPane } from 'tinper-bee';\nimport TabContent from '../../src/TabContent';\nimport ScrollableInkTabBar from '../../src/ScrollableInkTabBar';\n\nvar callback = function(key){\n\n}\n\n\nclass Demo3 extends Component {\n    constructor(props) {\n        super(props)\n    }\n\n    render() {\n\n        return (\n            <Tabs\n                defaultActiveKey=\"2\"\n                onChange={callback}\n                tabBarStyle=\"downborder\"\n                renderTabBar={()=><ScrollableInkTabBar />}\n                renderTabContent={()=><TabContent />}\n                >\n                <TabPane tab='tab 1' key=\"1\">1</TabPane>\n                <TabPane tab='tab 2' key=\"2\">2</TabPane>\n                <TabPane tab='tab 3' key=\"3\">3</TabPane>\n                <TabPane tab='tab 4' key=\"4\">4</TabPane>\n            </Tabs>\n        )\n    }\n}\n\n","desc":""},{"example":<Demo4 />,"title":" 基础tab4","code":"/**\n *\n * @title 基础tab4\n * @description\n *\n */\n\nimport React, { Component } from 'react';\nimport Tabs, { TabPane } from 'tinper-bee';\nimport TabContent from '../../src/TabContent';\nimport ScrollableInkTabBar from '../../src/ScrollableInkTabBar';\n\nvar callback = function(key){\n\n}\n\n\nclass Demo4 extends Component {\n    constructor(props) {\n        super(props)\n    }\n\n    render() {\n\n        return (\n            <Tabs\n                defaultActiveKey=\"2\"\n                onChange={callback}\n                tabBarStyle=\"trapezoid\"\n                renderTabBar={()=><ScrollableInkTabBar />}\n                renderTabContent={()=><TabContent />}\n                >\n                <TabPane tab='tab 1' key=\"1\">1</TabPane>\n                <TabPane tab='tab 2' key=\"2\">2</TabPane>\n                <TabPane tab='tab 3' key=\"3\">3</TabPane>\n                <TabPane tab='tab 4' key=\"4\">4</TabPane>\n            </Tabs>\n        )\n    }\n}\n\n","desc":""}]


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
