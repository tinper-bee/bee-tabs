/**
 *
 * @title 卡片式页签
 * @description 另一种样式的页签，不提供对应的垂直样式。
 *
 */

import React, { Component } from 'react';
import Tabs from '../../src';

const {TabPane} = Tabs;

class Demo5 extends Component {
    render() {

        return (
            <div className="Demo5">
                <Tabs
                    tabBarStyle="primary"
                    defaultActiveKey="1"
                    className="Demo5-tabs"
                >
                    <TabPane tab='Tab 1' key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab='Tab 2' key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab='Tab 3' key="3">Content of Tab Pane 3</TabPane>
                    <TabPane tab='Tab 4' key="4">Content of Tab Pane 4</TabPane>
                    <TabPane tab='Tab 5' key="5">Content of Tab Pane 5</TabPane>
                    <TabPane tab='Tab 6' key="6">Content of Tab Pane 6</TabPane>
                    <TabPane tab='Tab 7' key="7">Content of Tab Pane 7</TabPane>
                    <TabPane tab='Tab 8' key="8">Content of Tab Pane 8</TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Demo5;