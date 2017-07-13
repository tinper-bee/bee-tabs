/**
 *
 * @title 基础tab2
 * @description
 *
 */

var callback = function(key){

}


class Demo02 extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Tabs
                defaultActiveKey="2"
                onChange={callback}
                tabBarStyle="upborder"
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
