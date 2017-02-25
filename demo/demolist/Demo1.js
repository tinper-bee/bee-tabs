/**
 *
 * @title 基础tab
 * @description
 *
 */

class Demo1 extends Component {
    constructor(props) {
        super(props)
        this.state={
            panelActiveKey:1
        }
    }
    handleKey(key) {
        this.setState({panelActiveKey:key})
    }
    render() {
        
        return (
            <Tabs onChange={this.handleKey.bind(this)} navtype="simple" contenttype="" defaultActiveKey="1">
                <TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
                <TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
                <TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
                <TabPanel tab="Tab 4" key="4">测试测试 4</TabPanel>
            </Tabs>
        )
    }
}
