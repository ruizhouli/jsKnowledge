- BOM为浏览器对象模型
     + window.innerHeight 浏览器的高度

     + window.innerWidth  浏览器的宽度

     + window.pageYOffset 滚动条的距离，只能读不能写

     + window.scrollTo(x,y) 设置滚动条的距离

 - window.location下的重要属性
       + host->host

       + hostname->当前host的名字

       + href ->url链接

       + origin ->源头

       + pathname->路径名字

       + protocol ->协议

       + port->端口

       + reload->刷新页面
       
       + hash->锚信息，哈希值 #之后的东西 包含#
            hash修改 但它不会刷新页面 ajax最大的缺点是丧失浏览器的历史记录所谓的不安全   ***当hash值发生变化的时候，会触发onhashchange事件**
        
        + search 查询信息 ?到#之间的信息 修改它是会刷新页面的 
          
          不管修改hash值还是修改search都会使浏览器记录用户操作(就可以使用返回前进键了)

          当切换路由的时候会从后端的静态资源中查找需要传资源到前台，后端跳转路由会刷新页面这样会影响用户体验，所以使用hash来充当跳转路由的动作请求资源，这样一来第一能够成功请求资源二来，不刷新页面

          window.navigator.userAgent 用户的内核信息(字符串)(注意的是容易被模拟)
- history
   + 浏览器的历史记录,能够使用前进后退，还可以伪造一个url地址并且不刷新页面

   + back返回

   + forword 前进

   + go(-1) -1表后退 1表示前进

   + pushState 记录url的状态

   + replaceState 替换记录

   pushState(数据，null，伪造的url)

   注意：伪造的url如果没有服务端配合，那么是不能刷新页面的，不然一刷新又去找服务器，最后会报404


        