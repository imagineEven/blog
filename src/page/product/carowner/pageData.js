let containerData = `
import Author from '@/component/author.js';

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
import Author from '@/component/author.js';

<Author createdTime="2020年2月2日"/>
`

let blockData = `
import BlockQuote from '@/component/blockquote.js';

// structureName属性值：list css null
<BlockQuote structureName="" content={authorData}/>
`

let prefaceData = `
import Preface from '@/component/Even/preface.js';

<Preface content=content/>
`
let headerData = `
import CommonHeader from '@/component/header';

<CommonHeader model="2"  position="1" />
`

let footerData = `
import CommonFooter from '@/component/footer';

<CommonFooter />
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
        preface: '我总能在深夜清醒，温暖如太阳亦不可及，纯真于世俗却不可触碰，我是流浪的人.....  后续会将《南常》这首歌插入这篇文章',
        content: [
          {
            text: '既然是日记，就应该用最普通的话来记录自己的点点滴滴，留给以后的自己一个回忆，并不会像文学著作那样反复斟酌，接下来请欣赏我的大白话！！！ 哈哈 非喜误喷'
          },
          {
            text: '2020年注定是不平凡的一年-我的新婚年，以后也有了陪我白头到老的伴侣，也是我将要做爸爸，改变人身地位的一年。'
          },
          {
            text: '我的结婚日订到的了2020年1月16号， 今年的春节稍微提早了一些，1月24号就过年了，19年的我换公司比较频繁，导致我入职的新公司只有三天的婚假，自己也是痛苦加班三个月换来了5天的调休。',
          },
          {
            text: '为了我的新婚，早早的请假回家了，2020年10号我的飞机之旅，按照计划能够在家呆20天，是我工作以来能够在家呆的时间最长的一次。',
            endImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582298130149&di=b778518fd5df61286c2dfc2c6d3e9474&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F2s%2F0x%2FQJ8732491803.jpg'
          },
          {
            text: '突变的是：在我结婚过后大概一俩周的样子，中国爆发“新冠肺炎” 武汉封城，数以万计的同胞被影响，正好也是过年时间人流量巨大，传播速度也可想而知，飞机、高铁、火车、客车停运，工人不能及时返工，所有的小型企业相继倒闭。',
            endImage: 'https://inews.gtimg.com/newsapp_bt/0/11355513582/1000',
          },
          {
            endImage: 'https://inews.gtimg.com/newsapp_bt/0/11352988317/1000',
            text: '无法复工，给了我很大的时间来搭建我的博客，博客还没有用到后台的技术，后期慢慢会跟上！加油我的博客，加油武汉，加油中国！！！'
          },
          {
            text: '从2020.01.10待到了2002.02.21，算算有一个多月了，在家办公真的是很嗨皮，有活就干着，没活可以陪家人打打扑克，待在老婆身边，也很喜欢家里起码人多，没有什么压力除了工作以外，开销也小，蛮好的。（后期会换上自己的结婚照片）',
            endImage: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1247630245,2876692437&fm=26&gp=0.jpg'
          },
          {
            text: '这几天娃娃的胎动也比较频繁，昨晚第一次感知到娃娃跟我的互动，不知道是拿头顶了我一下，还是踢了我，但是很怕我的手挤压到他。预产期是2020年七月，还没有做好当爸爸的准备，感觉自己还是个孩子，心智不成熟，人到山前必有路，为自己续杯。',
            endImage: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582297228389&di=049f86d1cf861089241693af504e4b3d&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20191015%2F15%2F1571124562-MlnukNpQcO.jpg'
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
  headerData,
  footerData,
}