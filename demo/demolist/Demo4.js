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
