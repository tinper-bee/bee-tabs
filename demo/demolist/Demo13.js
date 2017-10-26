/**
 *
 * @title 基础tab13
 * @description
 *
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Tabs, { TabPane } from '../../src';
import TabContent from '../../src';
import SwipeableInkTabBar from '../../src';

if (process.env.DEMO_ENV === 'preact') {
    require('preact/devtools');
}

const contentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
    backgroundColor: '#fff',
};

const tabTitle = (key) => (<div data-extra="tab-bar-title">{`选项${key}`}</div>);
const makeTabPane = key => (
    <TabPane tab={tabTitle(key)} data-extra="tabpane" key={`${key}`}>
        <div style={contentStyle}>
            {`选项${key}内容`}
        </div>
    </TabPane>
);

const makeMultiTabPane = (count) => {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(makeTabPane(i));
    }
    return result;
};

const Demo13 = () => (
    <div>
        <h4>pageSize = 5, speed = 5</h4>
        <div>
            <Tabs
                data-extra="tabs"
                renderTabBar={() =>
                    <SwipeableInkTabBar
                        pageSize={5}
                        speed={5}
                        data-extra="tabbar"
                    />
                }
                renderTabContent={() => <TabContent />}
                defaultActiveKey="8"
            >
                {makeMultiTabPane(11)}
            </Tabs>
        </div>
        <h4>pageSize = 3, speed = 10</h4>
        <div>
            <Tabs
                renderTabBar={() =>
                    <SwipeableInkTabBar
                        pageSize={3}
                        speed={10}
                    />
                }
                renderTabContent={() => <TabContent />}
                defaultActiveKey="2"
            >
                {makeMultiTabPane(7)}
            </Tabs>
        </div>
        <h4>pageSize = 3, speed = 10, tabBarPosition='bottom'</h4>
        <div>
            <Tabs
                tabBarPosition="bottom"
                renderTabBar={() =>
                    <SwipeableInkTabBar
                        pageSize={3}
                        speed={10}
                    />
                }
                renderTabContent={() => <TabContent />}
                defaultActiveKey="2"
            >
                {makeMultiTabPane(7)}
            </Tabs>
        </div>

    </div>
);
export default Demo13;