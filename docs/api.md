
# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

## API

### Tabs

| 参数                     | 说明                                       | 类型                | 默认值     |
| :--------------------- | :--------------------------------------- | :---------------- | :------ |
| activeKey              | 设置当前激活的tabPanel的key                      | String            | -       |
| tabBarPosition         | tab头的定位，可以是['left','right','top','bottom']中选择 | String            | -       |
| defaultActiveKey       | 如果activeKey没有设置的时候，当初始化的时候设置当前激活的tabPanel的key | String            | 默认激活第一个 |
| renderTabBar           | 怎样去渲染tab的头部                              | ():React.Node     | -       |
| renderTabContent       | 怎样去渲染tab的内容区域                            | ():React.Node     | -       |
| onChange               | tabPanel改变的时候的回调函数                       | (key:string):void | -       |
| destroyInactiveTabPane | 是否在更改选项卡时销毁无效标签                          | Boolean           | false   |
| prefixCls              | 添加到table上的style                          | String            | u-tabs  |


### TabPane

#### props:

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>key</td>
          <td>Object</td>
          <th></th>
          <td>corresponding to activeKey</td>
      </tr>
      <tr>
          <td>style</td>
          <td>Object</td>
          <th></th>
          <td></td>
      </tr>
      <tr>
         <td>placeholder</td>
         <td>React.Node</td>
         <th></th>
         <td>lazyrender children</td>
      </tr>
      <tr>
          <td>tab</td>
          <td>React.Node</td>
          <th></th>
          <td>current tab's title corresponding to current tabPane</td>
      </tr>
    </tbody>
</table>

### src/TabBar

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>onTabClick</td>
          <td>(key: string): void</td>
          <th></th>
          <td>callback when tab clicked</td>
      </tr>
      <tr>
          <td>style</td>
          <td></td>
          <th></th>
          <td>bar style</td>
      </tr>
      <tr>
        <td>extraContent</td>
        <td>React Node</td>
        <th></th>
        <td>extra content placed one the right of tab bar</td>
      </tr>
    </tbody>
</table>

### src/InkTabBar

tab bar with ink indicator, in addition to tab bar props, extra props:

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>styles</td>
          <td>{ inkBar }</td>
          <th></th>
          <td>can set inkBar style</td>
      </tr>
    </tbody>
</table>

### src/ScrollableTabBar

scrollable tab bar, in addition to tab bar props, extra props:

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>onPrevClick</td>
          <td>(e: Event): void</td>
          <th></th>
          <td>callback when prev button is clicked</td>
      </tr>
      <tr>
          <td>onNextClick</td>
          <td>(e: Event): void</td>
          <th></th>
          <td>callback when next button is clicked</td>
      </tr>
    </tbody>
</table>

### src/ScrollableInkTabBar

scrollable tab bar with ink indicator, same with tab bar and ink bar and scrollable bar props.

### src/SwipeableInkTabBar (Use for Mobile)

swipeable tab bar with ink indicator, same with tab bar/ink bar props, and below is the additional props.

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>pageSize</td>
          <td>number</td>
          <th>5</th>
          <td>show how many tabs at one page</td>
      </tr>
      <tr>
          <td>speed</td>
          <td>number</td>
          <th>5</th>
          <td>swipe speed, 1 to 10, more bigger more faster</td>
      </tr>
      <tr>
          <td>hammerOptions</td>
          <td>Object</td>
          <td></td>
          <td>options for react-hammerjs</td>
      </tr>
    </tbody>
</table>

### src/TabContent

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>style</td>
          <td>Object</td>
          <td></td>
          <td>tab content style</td>
      </tr>
      <tr>
          <td>animated</td>
          <td>Boolean</td>
          <td>true</td>
          <td>whether tabpane change with animation</td>
      </tr>
      <tr>
          <td>animatedWithMargin</td>
          <td>Boolean</td>
          <td>false</td>
          <td>whether animate tabpane with css margin</td>
      </tr>
      <tr>
          <td>forceRender</td>
          <td>Boolean</td>
          <td>false</td>
          <td>forced render of content in tabs,  not lazy render after clicking on tabs</td>
      </tr>
    </tbody>
</table>

### src/SwipeableTabContent

swipeable tab panes, in addition to lib/TabContent props, extra props:

<table class="table table-bordered table-striped">
    <thead>
      <tr>
          <th style="width: 100px;">name</th>
          <th style="width: 50px;">type</th>
          <th>default</th>
          <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
          <td>hammerOptions</td>
          <td>Object</td>
          <td></td>
          <td>options for react-hammerjs</td>
      </tr>
    </tbody>
</table>
