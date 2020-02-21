let containerData = `
<div id="container">
  <div id="container-inner">

    <div id="title">
      标题
    </div>

    <Author createdTime="2020年2月10日"/>

    <p>内容区域1</p>
    <p>内容区域2</p>

  </div>
</div>
`

let authorData = `
import Author from '../../component/author.js';

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

let preface = `
第一个博客，想了很久css代码块该怎么展示才能让读者看的更舒服美观，
也借鉴了阮一峰大神的博客样式表，才有了现在的灵感，
自己封装的组件感觉还是比较繁琐，先对付着用吧，
后面如果想到简化版的在去更新，还是要给自己写一个关于样式表组件的使用说明，
一是为了怕自己鱼的记忆，还要翻原来的代码一点点的看，
二是博客确实需要花费很大的时间和经历，所以也是留给以后的自己在续写博客的时候方便一些。
确实随着年龄的增长记忆是越来越差了。
`

let notesType0 = [
  {time: '2020年',content: [
    {
      title: '居家隔离(八五三)', 
      notes: {
        header: '将漂泊下一座城',
        preface: '我总能在深夜清醒，温暖如太阳亦不可及，纯真于世俗却不可触碰，我是流浪的人.....',
        content: [
          {
            startImge: '',
            text: '2020年注定是不平凡的一年，新冠肺炎的爆发给了自己更多时间陪父母。',
            endiImage: '',
          },
          {
            text: '作为儿女，大学毕业之后为了工作、生活，原理他乡在外打工，很难有时间在家久居。'
          },
          {
            text: '每当了解到身边亲属，为了孩子一直陪伴上学到高中真的很羡慕，时长跟他们聊起能陪孩子的时间也就这么一段。'
          },
          {
            text: '不管做出多大的牺牲都是值得的，哪怕是金钱的牺牲，写到这自己也是得好好反思一下，未来孩子的到来，我该如何做抉择。'
          },
          {
            text: '刚结完婚病情就开始迅速蔓延，想到其他朋友结婚订到年后的被影响到推迟，不仅的咩嘴一笑。'
          },
          {
            text: '娃娃的预产期也是七月份，昨晚第一次感知到娃娃跟我的互动，很怕挤压到他。'
          },
          {
            text: ''
          }
        ]
      },
      end: '2020.02.21'
    },
    {
      title: '我是第二篇文章', 
      notes: ['今天天气格外的好，好心情'],
      end: '我是结尾'
    }
  ]}
]

export {
  containerData,
  authorData,
  blockData,
  prefaceData,
  flagData,
  cssData,
  cssJsonData,
  preface,
  notesType0,
}