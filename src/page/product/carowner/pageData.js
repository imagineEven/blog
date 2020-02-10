let containerData = `
<div id="container">
  <div id="container-inner">

    <div id="title">
      标题
    </div>

    <Auto createdTime="2020年2月10日"/>

    <p>内容区域1</p>
    <p>内容区域2</p>

  </div>
</div>
`

let authorData = `
<Author createdTime="2020年2月2日"/>
`

let blockData = `
// structureName属性值：list css null
<BlockQuote structureName="" content={authorData}/>
`

let prefaceData = `
<Preface content=content/>
`
let flagData = `
<code id="flag">我是高亮区域</code>
`

let cssJsonData = `
[
  {selector: '.box1', key: 'display', value: 'none', start: '//我是第一个注释', end: '/#/我是第二个注释'},
  {selector: '.box1',key: 'font-size', value: '12px', start: '字体属性', end: '/字体值/'},
]
`

let cssData = [
  {selector: '.box1', key: 'display', value: 'none', start: '//我是第一个注释', end: '/#/我是第二个注释'},
  {selector: '.box1',key: 'font-size', value: '12px', start: '字体属性', end: '/字体值/'},
]

export {
  containerData,
  authorData,
  blockData,
  prefaceData,
  flagData,
  cssData,
  cssJsonData,
}