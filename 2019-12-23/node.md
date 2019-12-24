- express框架中的app.use和express.static
    + 静态资源文件：对于不同用户都不会发生变化的文件，因为不管是张三李四访问百度，他们所接收到的看到的图片、css文件和前端javascript文件都是一样的，我们称这类文件为静态资源文件。

    + app.use()
         app.use:是用来给path注册中间函数的，这个path默认为'/',也就是处理任何请求的时候，同时会注意他会处理path下的子路径，如果设置path为'/hello',那么请求路径就会为'/hello/',像/hello/nihao,/hello/haha,这样的请求都会交给中间函数去处理
    
    + express.static()
        为了提供静态资源文件(图片，css,js)的服务，请使用express内置的中间函数express.static   传递一个包含静态资源的目录给express.static中间件用于立即开始提供文件 

        我们可以通过多次使用express.static的中间件来添加多个静态资源目录
        express 将会按照你设置的静态资源目录的顺序来查看静态资源文件 
        为了给静态资源文件创建一个虚拟的文件前缀（文件系统中不存在），可以使用express.static函数指定一个虚拟的静态目录：app.use('/static',express.static('public'))
- __filename和__dirname
   + __filename表示能够获取当前文件的绝对路径(包含文件本身)

   + __dirname 表示正在指向脚本所在的目录(运行文件的根目录)

- path
   下面有join  resolve方法
      join拼路径，写啥拼啥

      resolve 可自动的为你找到当前正在执行的脚本的路径,但是第二个参数前面必须是./不然出不来


- 解决跨域请求头的问题

 response.setHeader("Access-Control-Allow-Origin", "*"); // 解决请求头跨域问题
   