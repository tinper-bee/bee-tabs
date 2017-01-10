# bee-tabs
[![npm version](https://img.shields.io/npm/v/bee-tabs.svg)](https://www.npmjs.com/package/bee-tabs)
[![Build Status](https://travis-ci.org/tinper-bee/bee-tabs.svg?branch=master)](https://travis-ci.org/tinper-bee/bee-tabs)[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-tabs.svg)](https://david-dm.org/tinper-bee/bee-tabs#info=devDependencies)


react bee-tabs component for tinper-bee


## 使用方法

```js
<Tabs navtype="turn" contenttype="moveleft" defaultActiveKey="2">
	<TabPanel tab="Tab 1" key="1">测试测试 1</TabPanel>
	<TabPanel tab="Tab 2" key="2">Content of Tab Pane 2</TabPanel>
	<TabPanel tab="Tab 3" key="3">测试测试 3</TabPanel>
	<TabPanel tab="Tab 4" key="4">Content of Tab Pane 4</TabPanel>
</Tabs>
```



## API

|参数|说明|类型|默认值|
|:--|:---|:---|:---|
|navtype|nav变换样式,可选simple、fill、slide、turn、fade、fadeup类型|string|simple|
|contenttype|内容区变换样式，可选simple、moveleft类型|string|simple|
|defaultActiveKey|当前激活 tab 面板的 key|string|1|

#### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-tabs
$ cd bee-tabs
$ npm install
$ npm run dev
```

## TODOS

- [x] [css样式层级问题]
- [x] [动态计算样式]
- [x] [autoprefix] 产出工具集成
- [x] [测试用例]
