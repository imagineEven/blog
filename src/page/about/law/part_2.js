import React, {
  Component
} from 'react'

class PagePart extends Component {
  //方法

  //页面跳转
  navigateTo(el) {
    var href = el.currentTarget.getAttribute("href");
    if (!href) {
      alert("服务就快开放啦，敬请期待~");
      el.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps() {
    //props更新
    //约1s 调用一次
  }
  componentWillUnmount() {
    //组件删除    
    return false
  }

  render() {
    return (
      <div className="page_part_2">
        <div className="content_wrap pt_150 pb_100 clearfix">
          <h3 className="my_60 font_size32 color_orange">服务条款</h3>
          <p className='my_30 font_size22 color_80 font_lighter line_height15 text_justify'>“壹路通”是指嘉兴路迅信息科技有限公司创建的用于提供汽车救援，修理和理赔信息服务的互联网技术平台，域名为www.yilutong.com。（技术和服务现已授权给上海路回信息科技有限公司）</p>
          <p className='my_30 font_size22 color_80 font_lighter line_height15 text_justify'>“汽车救援，修理和理赔信息服务”是指壹路通利用电脑、服务器、互联网、电话、移动设备等信息通讯设备，为用户快速寻找符合要求的待救汽车并完成向汽车救援公司、劳务公司的用车服务预定的信息服务过程。壹路通仅联络汽车救援公司和劳务公司，由汽车救援公司和劳务公司提供有合法资质的车辆和有合法第三方劳务派遣手续的驾驶员为客户进行服务。</p>
          <p className='my_30 font_size22 color_80 font_lighter line_height15 text_justify'>壹路通基于互联网、移动互联网技术以“共享加盟+服务平台”的全新商业模式联合汽车救援公司与劳动服务公司共同为企业和个人客户提供专乘约租车服务。</p>
          <p className='my_30 font_size22 color_80 font_lighter line_height15 text_justify'>专业的救援信息服务平台：壹路通利用先进的信息集散技术，构建了专业预约道路救援信息服务平台，致力于为客户提供高效、便捷、高品质的预约用车代理服务。</p>
          <p className='my_30 font_size22 color_80 font_lighter line_height15 text_justify'>快速、灵活的车辆实时调度：壹路通通过车辆实时调度系统，通过装载移动互联终端，即以整合数以千计的丙方车辆，全天候24小时掌握车辆位置、状态信息，并实时调度车辆为用户提供高端专业、快速响应、灵活自主的专乘约租车服务。</p>
          <p className='my_30 font_size22 color_80 font_lighter line_height15 text_justify'>高度一致的服务整合系统：壹路通通过车辆智能匹配系统，统一接受预订、调度派遣、系统计费，实现高度一致性的服务质量。</p>
          <h3 className="my_60 font_size32 color_orange">版权信息</h3>
          <p className='my_30 font_size22 color_80 font_lighter line_height15 text_justify'>本网站的版权包括在但不限于所有的文件、文档、文本、图像、图形、设备及所含编码，以及本网站的综合“外观与感觉”中，以上均归嘉兴路迅信息科技有限公司及其关系企业（保留版权）或其第三方提供者所有。</p>
          <p className='my_30 font_size22 color_80 font_lighter line_height15 text_justify'>如果本网站对相关信息的摘录或打印声明保留一切版权或其它所有权，以及包含任何免责声明，我们授权您可以复印、打印这些摘录或文档（标示为第三方所有的内容除外），用于非商业目的。未提前取得我们的书面允许，嘉兴路迅信息科技有限公司所有的一切标识和商标均不得被使用和复制。</p>
          <p className='my_30 font_size22 color_80 font_lighter line_height15 text_justify'>除以上提出的特别注意事项外，禁止以任何形式复制本网站部分或全部内容，包括根据本网站和其内容设计、制作成任何派生作品 并入到其他网站、电子检索系统或出版物。未提前取得我们的书面允许，不得在任何其他网站设置访问本网站的链接。</p>
          <p className='my_30 font_size22 color_80 font_lighter line_height15 text_justify'>我们无法保证您有权限使用本网站上出现的第三方所有的内容，您必须在使用或下载这些内容之前取得第三方所有者的允许。如无预先获得适当的允许，受版权保护的内容及其上标示的任何著作归属通知或版权信息通知均不会被更改。除以上所标明的有限许可外，本网站的任何内容不得被解释为授予任何其他权利或许可。</p>
          <p className='my_30 font_size22 color_80 font_lighter line_height15 text_justify'>除标明为其他公司所有的标识外，本网站所涉及的所有产品名称均为嘉兴路迅信息科技有限公司所有的商标并保留版权。</p>
          <h3 className="my_60 font_size32 color_orange">隐私条款</h3>
          <p className='my_30 font_size22 color_80 font_lighter line_height15 text_justify'>壹路通承诺尊重您的隐私和您的个人信息安全。</p>
          <p className='my_30 font_size22 color_80 font_lighter line_height15 text_justify'>当您申请为用户或注册为供应商时，我们有权收集到您的相关信息作为身份识别。当您通过移动设备使用壹路通应用程序时，我们会实时追踪您的地理定位信息以提供及时服务。您在使用服务时通过壹路通平台的信息交流或语音通信有可能被电子记录供审核回访使用。以上信息会被用来协助我们提供相关服务（包括但不限于维护服务、数据库管理、分析及完善使用等）。</p>
          <p className='my_30 font_size22 color_80 font_lighter line_height15 text_justify'>壹路通承诺不会向其他人出售或出租以上信息。只在极少数情况下，壹路通可以透露特定的信息，例如，政府机构请求、法院调查令等法律规定的情况，以及为执行本网站的政策或保护他人的权益、财产和安全。壹路通也会和那些协助进行诈骗防范和调查的公司共享信息。下在法律范围内响应法院指令，以便加强本平台的管理政策或保护他人的权利、财产或 保险。壹路通同时与公司分享信息协助保护或调查。壹路通不会提供信息给那些推销和商业目的公司或代理机构行。</p>
          <h3 className="my_60 font_size32 color_orange">安全信息</h3>
          <p className='my_30 font_size22 color_80 font_lighter line_height15 text_justify'>壹路通采取了相应的安全保障措施来确保我们掌握的信息不丢失、不被滥用和变造。例如向其他服务器备份数据和对用户密码加密防火墙和SSL（安全套接层协议）以及对数据存储地的物理保护措施，因此您私人信息将被安全地存储在我们的数据库中。</p>
          <p className='my_30 font_size22 color_80 font_lighter line_height15 text_justify'>尽管我们有这些安全措施，但请注意在因特网上不存在“完善的安全措施”。我们无法保障数据库的绝对安全，仍有第三方通过非法手段在中途截取发送的信息的风险。这在所有互联网使用中都是真实存在的。壹路通将采取所有合理的预防措施来确保您的订购和付款详细信息的安全，但不承担因您提供的信息被非法侵入而造成您和第三方的相应损失。所以在壹路通竭力保护您安全的同时，我们也建议您不要将您的信息及密码披露给任何人。</p>
        </div>
      </div>
    );
  }
}

export default PagePart;