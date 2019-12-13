### AJAX
   - Asynchronous(异步) Javascript(js) And(和) XML(标记语言，数据)

   - 它是一个前后台数据交互的一种技术(找后台拿数据的技术)

   - 难点：如何操作数据(各种数据类型的应用)，异步，参数如何拼接(字段是什么东西?name=zf&age=10),如何开启服务

   - ajax获取数据并不难，难得是拿到数据之后怎么办？(业务逻辑)
   ```

  在工作中我们一般使用：
     fetch('')
     $.ajax({})
     axios.get('')
     wx.request('')
     jsonp_fetch('')
   ```
   ajax:中的x是XML(标记语言，数据) 现在基本上都使用json
   json一般为'[]'或者'{"name":"小明","age":18,"info":"哈哈哈"}'
   
   - ajax最大的优点是：能够实现局部刷新，减轻服务器的压力，提升用户体验

   ### 如何启动服务器？

   - 双击服务器文件夹，进入(文件名不能是中文)
   - 看看文件夹中是否有node_modeules文件如果有继续下一步，如果没有，通过以下两种方法去下载依赖：
       + 第一种：按下shift+鼠标右键选择在此处打开powershell窗口进去查看是否安装npm如果安装了直接输入npm i 下载依赖
       + 第二种：把服务器文件拖到vscode中，点击终端然后npm i安装依赖

    - 运行服务器
        + 输入npm run start 或者输入node app按tab键(自动补齐)
    - 浏览器应输入localhost:端口号/xx.html(打开方式)，千万不要双击运行文件(不要再本地打开，要使用localhost的方式去打开)

    - 代码要放到public文件夹下

### ajax的交互模型
 - 创建一个XMLHttpRequest对象
 - 填写请求方式，和请求地址，是否异步
 - 发送请求
 - 监听数据响应
 - 接受到数据

 ### GET和POST
 ```
 GET是通过url进行请求(4步就发送请求了)
   http://www.baidu.com:88/get?user=huahua#age=18
   http协议 www.baidu.com域名 88端口 get接口 user=huahua查询信息 hash信息

GET的优势是快(用于展示类)

相对不安全 (在请求的时候会显示在地址栏或者历史记录里面查到)

请求的体积是有限的(会根据浏览器的标准来限制) 传大的东西传不了

在低版本IE下有缓存问题(第一次和第二次请求的url是一致的那么第二次会走第一次的缓存)
  解决：第一种：改用post
        第二种：使得每次的url请求不一样这样他就不会去缓存

输入的内容是中文的时候，在IE下回出现错误请求和返回是因为IE的低版本在解析中文的时候会出现问题。

  解决方案：
      把中文转成URI编码
          encodeURI("李") %E6%9D%8E
      URI编码转中文
           decodeURI('%E6%9D%8E') 李

   POST是通过服务器来发送请求的(跟用户相关的信息，发送的体积比较大的文件)(至少六步才能成功发送请求的)

    理论上体积可以是无限大(但是一会后端开发人员都会给予限制)

    POST比GET要慢
    请求时必须要添加请求头
      xhr.setRequestHeader('content-type','appliction/x-www-form-urlencoded')
   
 ``` 