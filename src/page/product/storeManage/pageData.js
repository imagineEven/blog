let preface = `
老了脑容量严重溢出，昨天看过的技术文章，今天可能就忘记了，
不知道大家有没有跟我一样的经历，要是有...我心里还能好受些，哈哈！！！
连浏览器里收藏了很多关于技术的文章，种类的增多也无法满足自己的需求，
所以有了下面关于外联的笔记，分类功能等方便以后的查看和管理。
`
let linksName = [
  {category: '文档类', categoryEnglish: 'document'},
  {category: '框架类', categoryEnglish: 'frame'},
  {category: '工具类', categoryEnglish: 'tool'},
  {category: '学习类', categoryEnglish: 'study'},
  {category: '铭人类', categoryEnglish: 'literature'},
  {category: '工作类', categoryEnglish: 'work'},
  {category: '其他类', categoryEnglish: 'other'},
]

// 文档类链接
let links = [
  //文档类
  [
    {title: '百度链接', href:"https://www.baidu.com/", end:"我是注释"},
    {title: '其他链接', href:"https://www.baidu.com/", end:"我是注释"},
  ],
  //框架类
  [
    {title: '百度链接', href:"https://www.baidu.com/", end:"我是注释"},
    {title: '其他链接', href:"https://www.baidu.com/", end:"我是注释"},
  ],
  //工具类
  [
    {title: '百度链接', href:"https://www.baidu.com/", end:"我是注释"},
    {title: '其他链接', href:"https://www.baidu.com/", end:"我是注释"},
  ],
  //学习类
  [
    {title: '小白学股票', href:"https://ke.qq.com/course/211088?taid=1176988543039632", end:"2020.02.22"},
    {title: '其他链接', href:"https://www.baidu.com/", end:"我是注释"},
  ],
  //铭人类
  [
    {title: '百度链接', href:"https://www.baidu.com/", notes:"我是注释"},
    {title: '其他链接', href:"https://www.baidu.com/", notes:"我是注释"},
  ],
  //工作类
  [
    {title: '百度链接', href:"https://www.baidu.com/", notes:"我是注释"},
    {title: '其他链接', href:"https://www.baidu.com/", notes:"我是注释"},
  ],
  //其他类
  [
    {title: '百度链接', href:"https://www.baidu.com/", notes:"我是注释"},
    {title: '其他链接', href:"https://www.baidu.com/", notes:"我是注释"},
  ],
]

export {
  preface,
  links,
  linksName,
}