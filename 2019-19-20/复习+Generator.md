- get
get:url的方式请求(可暴露的)

路径：localhost/1.html || localhost/static/1.html

接口：localhost/api?user=login

- fetch('api?wd=山东')

- xhr.open('get','/api?wd=山东')

$.ajax({
    url:'/api',
    data:{
        wd:'山东'
    }
})

- post
   服务端(不可暴露)

   localhost/api/post
      send(user=huahu&pw=123)

    fetch('/user/',{
        method:"POST",
        headers:{
         'content-type':'application/x-www-form-urlencode'
        },
        body:''+ new URLSearchParmas({
            username:"huahau",
            password:'123',
        })
    })

两种方式得到是get还是post:第一种：接口文档 第二种：自己测

fetch->es6新的api,基于promise

axios -> 基于promise封装的XMLHttpRequest

XMLHttpRequest可以监听细节，监听请求过程1-4，超时处理、abort强制中断，onabort中断监听

XHR(浏览器自带的api)和axios(基于这个XHR来封装的一个js库)

### Generator
  - Generator 函数是一个状态机，封装了多个内部状态。

  - 执行 Generator 函数会返回一个遍历器对象，也就是说，
    Generator 函数除了状态机，还是一个遍历器对象生成函数。
    返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。

  - Generator函数与普通函数的区别
     + 形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态

  - Generator函数的执行
       
       Generator函数执行和普通函数执行一样都是函数名+()执行，但是Generator函数执行返回一个遍历器对象，必须调用遍历器下面的next()函数才能改变内部指针的的指向，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止。
       换言之，Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。

       每次使用next()方法它都会返回一个对象，这个对象中有两个值，{value:XXX,done:false}第一个值为执行到当前yield的值，第二个值是true或false false代表还可以next true代表不能再next


       yield与return的区别

        yield表达式与return语句既有相似之处，也有区别。相似之处在于，都能返回紧跟在语句后面的那个表达式的值。区别在于每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行，而return语句不具备位置记忆的功能。一个函数里面，只能执行一次（或者说一个）return语句，但是可以执行多次（或者说多个）yield表达式。正常函数只能返回一个值，因为只能执行一次return；Generator 函数可以返回一系列的值，因为可以有任意多个yield。

        next()函数的参数
         yield表达式本身没有返回值，或者说总是undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。

         ```
          function* fn(){
            let t=yield 'huahua';
            console.log(t)
          }
            let g = fn()  //g为遍历器对象 下面有next接口

          let f = g.next();
          console.log(f.value)//huahua
          g.next(555) //会返回555
         ```
