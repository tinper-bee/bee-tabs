import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 基础Tab","code":"/**\n *  @title 基础Tab\n *  @description 通过Tabs和TabPane配合完成Tab功能\n *\n */\n\nimport React, {Component} from 'react';\nimport { Tabs } from 'tinper-bee';\n\nconst {TabPane} = Tabs;\n\nfunction callback() {\n\n}\n\nclass Demo1 extends Component {\n    render() {\n        return (\n            <Tabs\n                defaultActiveKey=\"1\"\n                onChange={callback}\n                tabBarStyle=\"upborder\"\n                className=\"demo1-tabs\"\n            >\n                <TabPane tab='望庐山瀑布' key=\"1\">\n                    <ul>\n                        <li>日照香炉生紫烟，</li>\n                        <li>遥看瀑布挂前川。</li>\n                        <li>飞流直下三千尺，</li>\n                        <li>疑是银河落九天。</li>\n                    </ul>\n\n\n                </TabPane>\n                <TabPane tab='早发白帝城' key=\"2\">\n                    <ul>\n                        <li>朝辞白帝彩云间，</li>\n                        <li>千里江陵一日还。</li>\n                        <li>两岸猿声啼不住，</li>\n                        <li>轻舟已过万重山。</li>\n                    </ul>\n                </TabPane>\n                <TabPane tab='菩萨蛮·平林漠漠烟如织' key=\"3\">\n                    <ul>\n                        <li>平林漠漠烟如织，寒山一带伤心碧。</li>\n                        <li>暝色入高楼，有人楼上愁。</li>\n                        <li>玉阶空伫立，宿鸟归飞急。</li>\n                        <li>何处是归程？长亭连短亭</li>\n                    </ul>\n                </TabPane>\n                <TabPane tab='关山月' key=\"4\">\n                    <ul>\n                        <li>明月出天山，苍茫云海间。</li>\n                        <li>长风几万里，吹度玉门关。</li>\n                        <li>汉下白登道，胡窥青海湾。</li>\n                        <li>由来征战地，不见有人还。</li>\n                    </ul>\n                </TabPane>\n            </Tabs>\n        )\n    }\n}\n\n","desc":" 通过Tabs和TabPane配合完成Tab功能","scss_code":".demo1-tabs{\n  margin-bottom: 40px;\n  width: 600px;\n}"},{"example":<Demo2 />,"title":" 竖向的Tab","code":"/**\n *\n * @title 竖向的Tab\n * @description 通过tabBarPosition属性可以控制Tab做不同方向展示,当设置为`left`和`right`时，要为Tabs设置高度。\n *\n */\n\nimport React, { Component } from 'react';\nimport { Tabs } from 'tinper-bee';\n\nconst {TabPane} = Tabs;\n\nclass Demo2 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = ({\n            activeKey: \"1\",\n            start: 0,\n        })\n    }\n    onChange = (activeKey) => {\n        console.log(`onChange ${activeKey}o-^-o`);\n        this.setState({\n            activeKey,\n        });\n    }\n\n    onTabClick = (key) => {\n        console.log(`onTabClick ${key}o^o`);\n        if (key === this.state.activeKey) {\n            this.setState({\n                activeKey: '',\n            });\n        }\n    }\n\n    render() {\n\n        return (\n            <div style={{ margin: 20 }}>\n                <Tabs\n                    activeKey={this.state.activeKey}\n                    tabBarPosition=\"left\"\n                    defaultActiveKey=\"1\"\n                    onChange={this.onChange}\n                    className=\"demo2-tabs\"\n                >\n                    <TabPane tab=\"望庐山瀑布\" key=\"1\" >\n                        <ul>\n                            <li>日照香炉生紫烟，</li>\n                            <li>遥看瀑布挂前川。</li>\n                            <li>飞流直下三千尺，</li>\n                            <li>疑是银河落九天。</li>\n                        </ul>\n                    </TabPane>\n                    <TabPane tab=\"早发白帝城\" key=\"2\">\n                        <ul>\n                            <li>朝辞白帝彩云间，</li>\n                            <li>千里江陵一日还。</li>\n                            <li>两岸猿声啼不住，</li>\n                            <li>轻舟已过万重山。</li>\n                        </ul>\n                    </TabPane>\n                    <TabPane tab=\"菩萨蛮·平林漠漠烟如织\" key=\"3\">\n                        <ul>\n                            <li>平林漠漠烟如织，寒山一带伤心碧。</li>\n                            <li>暝色入高楼，有人楼上愁。</li>\n                            <li>玉阶空伫立，宿鸟归飞急。</li>\n                            <li>何处是归程？长亭连短亭</li>\n                        </ul>\n                    </TabPane>\n                    <TabPane tab=\"关山月\" key=\"4\">\n                        <ul>\n                            <li>明月出天山，苍茫云海间。</li>\n                            <li>长风几万里，吹度玉门关。</li>\n                            <li>汉下白登道，胡窥青海湾。</li>\n                            <li>由来征战地，不见有人还。</li>\n                        </ul>\n                    </TabPane>\n                </Tabs>\n            </div>\n        )\n    }\n}\n\n","desc":" 通过tabBarPosition属性可以控制Tab做不同方向展示,当设置为`left`和`right`时，要为Tabs设置高度。","scss_code":".demo2-tabs{\n  height: 300px;\n}"},{"example":<Demo3 />,"title":" 页签Tab","code":"/**\n *\n * @title 页签Tab\n * @description 通过扩展TabPane和ScrollableInkTabBar的方式，可以完成模拟页签的效果\n *\n */\n\nimport React, {Component} from 'react';\nimport { Tabs, Icon } from 'tinper-bee';\n\nconst {TabPane} = Tabs;\n\nlet index = 1;\nconst content = `问世间、情为何物，只教生死相许？天南地北双飞客，老翅几回寒暑。欢乐趣，离别苦，\n就中更有痴儿女。君应有语，渺万里层云，千山暮雪，只影向谁去？横汾路，寂寞当年箫鼓，荒烟依旧平楚。招魂楚些何嗟及，\n山鬼暗谛风雨。天也妒，未信与，莺几燕子俱黄土。千秋万古，为留待骚人，狂歌痛饮，来访雁丘处。`;\n\nclass Demo3 extends Component {\n    state = {\n        tabs: [{\n            title: '摸鱼儿',\n            content: content\n        }],\n        activeKey: '摸鱼儿',\n    };\n\n    onTabChange = (activeKey) => {\n        this.setState({\n            activeKey,\n        });\n    }\n\n    construct() {\n        const disabled = true;\n        return this.state.tabs.map((t) => {\n            return (\n                <TabPane\n                tab={<span>{t.title}\n                    <Icon\n                        type=\"uf-close-c\"\n                        className=\"close-icon\"\n                        onClick={this.remove.bind(this, t.title)}\n                    />\n                </span>}\n                key={t.title}\n            >\n                <div style={{padding: 100}}>\n                    {t.content}\n                </div>\n            </TabPane>);\n        }).concat([\n            <TabPane\n                tab={<a style={{color: 'black', cursor: 'pointer'}} onClick={this.add}> + 添加</a>}\n                disabled={disabled}\n                key={'__add'}\n            />,\n        ]);\n    }\n\n    // 删除\n    remove = (title, e) => {\n        e.stopPropagation();\n        if (this.state.tabs.length === 1) {\n            alert('只剩一个，不能删');\n            return;\n        }\n        let foundIndex = 0;\n        const after = this.state.tabs.filter((t, i) => {\n            if (t.title !== title) {\n                return true;\n            }\n            foundIndex = i;\n            return false;\n        });\n        let activeKey = this.state.activeKey;\n        if (activeKey === title) {\n            if (foundIndex) {\n                foundIndex--;\n            }\n            activeKey = after[foundIndex].title;\n        }\n        this.setState({\n            tabs: after,\n            activeKey,\n        });\n    }\n\n    clear = () => {\n        let { tabs } = this.state;\n        this.setState({\n            tabs:  [tabs.shift()],\n            activeKey: '摸鱼儿',\n        })\n    }\n\n    // 增加\n    add = (e) => {\n        e.stopPropagation();\n        index++;\n        const newTab = {\n            title: `名称: ${index}`,\n            content: `内容: ${content}`,\n        };\n        this.setState({\n            tabs: this.state.tabs.concat(newTab),\n            activeKey: `名称: ${index}`,\n        });\n    }\n\n    render() {\n\n        return (\n            <div style={{margin: 20}}>\n\n                <Tabs\n                    activeKey={this.state.activeKey}\n                    onChange={this.onTabChange}\n                    tabBarStyle=\"primary\"\n                    defaultActiveKey=\"摸鱼儿\"\n                    extraContent={\n                        <Icon\n                            type=\"uf-del\"\n                            className=\"clear-icon\"\n                            onClick={this.clear}\n                            title=\"清空\"\n                        />\n                    }\n                >\n                    {this.construct()}\n                </Tabs>\n            </div>\n        );\n    }\n}\n\n\n","desc":" 通过扩展TabPane和ScrollableInkTabBar的方式，可以完成模拟页签的效果","scss_code":".close-icon{\n  position: relative;\n  right: -15px;\n  top: 1px;\n  color: #adaaaa;\n}\n\n.clear-icon{\n  display: inline-block;\n  margin-top: 8px;\n  margin-right: 10px;\n}"}]


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
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
                    { caret }
                    { text }
                </Button>
            </div>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                    { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
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
                        <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
                    )

                })}
            </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
