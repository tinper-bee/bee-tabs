/**
 *
 * @title 基础tab
 * @description
 *
 */

 var callback = function(key){

 }


class Demo5 extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Tabs
      defaultActiveKey="2"
      tabBarStyle ="fadeup"
      onChange={callback}
      renderTabBar={()=><ScrollableInkTabBar />}
      renderTabContent={()=><TabContent />}
    >
      <TabPane tab='tab 1' key="1">first</TabPane>
      <TabPane tab='tab 2' key="2">second</TabPane>
      <TabPane tab='tab 3' key="3">third</TabPane>
    </Tabs>
        )
    }
}
