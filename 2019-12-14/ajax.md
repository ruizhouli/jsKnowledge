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
 - fetch的post
  ```
    fetch(url,{
      method:'post',
      headers:{
        'content-type':"application/x-www-form-urlencoded"
      },
      body:'key=val&key2=val2'
      也可写成
        body:''+new urlSearchParmas({
          key:val,
          key2:val2
          如果val为中文它还可以将中文帮我们转成URI编码
        })
    })

  ```

  - 请求头和响应头

  General

  > Request URL 请求的地址

  > Request Method 请求的方式 GET POST HEAD DELETE PUT...

  > Status Code 状态码

  > Remote Address 当前页面的端口号

  Response Headers (响应头) ->服务器发给你的东西(接收到的)

  Request Headers(请求头) -> 发给服务器的东西的(发给别人的东西的)

  Query String Parmeters(请求体)

- http状态码 1-6开头的

> 100 服务器已经接收到请求，希望客户端继续发送请求

> 200-207都是成功

> 301 永久重定向

> 302 暂时重定向

> 304 一种缓存

> 400 就是有误的意思(也不告诉哪里有问题)

> 401 当前请求需要用户验证

> 403 服务器已经理解请求，但是拒绝执行他

> 404 请求失败，请求所希望得到的资源未被在服务器上发现

> 5字开头的是服务器的错误

  - 500 服务器端出错了

  - 501 服务器不支持当前请求所需要的某个功能

  - 502 作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到的无效回应

  - 503 由于临时的服务器维护或者过载，服务器当前无法处理请求

- onreadystatechange 是可以监听发送请求状态
   5次状态 code码是0-4 但是0永远也监听不到
    0：代表请求初始化
    1：代表服务器连接已建立
    2：代表请求已接收
    3：代表请求处理中
    4：代表请求已经完成，且响应已就绪

  如果把onreadystatechange放到send之前能够多监听一次
  放到send之后就是少监听一次