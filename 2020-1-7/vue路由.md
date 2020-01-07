- $route
    获取路由的信息(属性)  this.$route.params

- $router
     获取路由的方法(方法)

- 动态路由
     主体一样，但是部分内容不一样,可以使用动态路由写法：
          /about/:id 匹配下面几种路由(这个id是自定义的)
           /about/1   /about/2

           /about/:username/id/:id

      + 使用： $route.params.id  切换的时候不会触发一些钩子函数,可以使用watch监听  watch:{
          '$route'(){

          }
      }

- 嵌套路由:
      在路由配置中使用children:[{path:'x'}] 匹配的是 /parent/x
       
      要注意的是parent组件中需要写上router-view 要不然子组件渲染不出来

      如果进入parent下没有指定的children，又要默认添加一个组件，可以在parth上写上''

- 编程导航：
       $router.push()
       $router.replace()
       $router.go()

       括号中可以传入字符串和对象：'/' 或
               {
                   path:'/',
                   name:'home',
                   query:{
                       name:'xxx' ->?name=xxx  查询信息
                   },
                   params:{
                       nn:'xxx' 注意的是路由上不会显示nn，但是可以通过$route.params.nn获取
                   }
               }

- 重定向:   {
    path:'/a', redirect:{name:'foo'}
}

- 路由传参:
     可以在路由配置项中配置一个 props:true,那么子组件就可以通过props去接受parmas参数

- 切换路由触发

  next(); 执行之后的路由跳转
  next(false) 中断路由跳转
  next('/') 等同于push  或者使用  next({ path: '/' })

  如果有全局和局部，那么全局优先级大
  全局的beforeEach(要切换路由的时候触发)
  组件中的beforeRouteLeave 离开组件的时候触发
  复用组件使用beforeRouteUpdate去进行监听
  路由中的beforeEnter 进入路由前触发