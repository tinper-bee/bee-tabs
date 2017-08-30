/**
 *
 * @title 基础tab4
 * @description
 *
 */

import React, { Component } from 'react';
import Tabs, { TabPane } from '../../src';
import TabContent from '../../src/TabContent';
import ScrollableInkTabBar from '../../src/ScrollableInkTabBar';

var callback = function(key){

}


class Demo4 extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Tabs
                defaultActiveKey="2"
                onChange={callback}
                tabBarStyle="trapezoid"
                renderTabBar={()=><ScrollableInkTabBar />}
                renderTabContent={()=><TabContent />}
                >
                <TabPane tab='tab 1' key="1">1</TabPane>
                <TabPane tab='tab 2' key="2">2</TabPane>
                <TabPane tab='tab 3' key="3">3</TabPane>
                <TabPane tab='tab 4' key="4">4</TabPane>
            </Tabs>
        )
    }
}

export default Demo4;