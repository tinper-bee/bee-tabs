/**
 *
 * @title 基础tab8
 * @description
 *
 */

import React, { Component } from 'react';
import Tabs, { TabPane } from '../../src';
import TabContent from '../../src';
import ScrollableInkTabBar from '../../src';

const PanelContent = ({ id }) => (
    <div>{[1, 2, 3, 4].map(item => <p key={item}>{id}</p>)}</div>
);
class Demo8 extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            activeKey: '',
            start: 0,
        })
    }
    onChange = (activeKey) => {
        console.log(`onChange ${activeKey}o-^-o`);
        this.setState({
            activeKey,
        });
    }

    onTabClick = (key) => {
        console.log(`onTabClick ${key}o^o`);
        if (key === this.state.activeKey) {
            this.setState({
                activeKey: '',
            });
        }
    }

    tick = () => {
        this.setState({
            start: this.state.start + 10,
        });
    }

    render() {
        const start = this.state.start;
        return (
            <div style={{ margin: 20 }}>
                <h1>Simple Tabs</h1>
                <Tabs
                    renderTabBar={() => <ScrollableInkTabBar onTabClick={this.onTabClick} />}
                    renderTabContent={() => <TabContent animatedWithMargin />}
                    activeKey={this.state.activeKey}
                    onChange={this.onChange}
                >
                    <TabPane tab={`tab ${start}`} key="1" >
                        <PanelContent id={start} />
                    </TabPane>
                    <TabPane tab={`tab ${start + 1}`} key="2">
                        <PanelContent id={start + 1} />
                    </TabPane>
                    <TabPane tab={`tab ${start + 2}`} key="3">
                        <PanelContent id={start + 2} />
                    </TabPane>
                    <TabPane tab={`tab ${start + 3}`} key="4" disabled>
                        <PanelContent id={start + 3} />
                    </TabPane>
                </Tabs>
                <button onClick={this.tick}>add</button>
            </div>
        )
    }
}

export default Demo8;