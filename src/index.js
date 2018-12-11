// export default from './Tabs';
// 20181211animated，scrollAnimated（ScrollableTabBarMixin），inkBarAnimated（InkTabBarMixin）都是默认为true的
// 针对ie9等不支持transform等需要animated，scrollAnimated,inkBarAnimated设置为false
import createClass from 'create-react-class';
import React from "react";
import {Tabs as TabsInner} from './Tabs';
import { isTransformSupported } from './utils';

const Tabs = createClass({
    render() {
        const disableProps = {
            animated: false,
            scrollAnimated: false,
            inkBarAnimated: false
        };
        if (isTransformSupported(document.documentElement.style)) {
            return (
                <div><TabsInner  {...this.props}/></div>
            )
        } else {
            // 不支持transform和translate3d的就讓animated是false
            return (
                <div><TabsInner  {...this.props} {...disableProps} /></div>
            )
        }

    }
});
Tabs.TabPane = TabsInner.TabPane ;
export default Tabs;

