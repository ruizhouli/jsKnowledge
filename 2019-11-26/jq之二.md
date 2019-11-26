### 操作DOM

- 插入到某个元素的前面  
    ```
    $('#box').before($('<li>2</li>'))
    ```
- 找父级节点
   ```
    parentNode ->parent()  某个元素的所有祖先节点，括号中可以精确匹配
   ```
- 找上一个兄弟
  ```
    previousElementSibling ->prev()
  ```
- 找下一个兄弟
  ```
    nextElementSibling  ->next()
  ```
-  index('button') 方法  顺序默认基于父级，也可以精确匹配 

### 事件三大部分
  - 事件流
  - 有哪些事件，都还是干嘛的 
  - 事件对象

  - hover: 实际上是mouseenter  mouseleave

  - jq中所有的事件都是on来二次封装的，jq中的事件全都是事件绑定   如果真的要拿到原生js事件对象  在jq的ev中有一个originalEvent(原生事件对象)   

  - 在jq的事件中防止冒泡和默认行为，直接使用return false即可

  - delegate 事件监听
       + $('#box').delegate('li','click',function(){
           consoie.log($(this),text());
       })

  ### 动画
  - hide() 隐藏   show() 显示

  - 在做jq动画的时候，记得使用stop(),把前面的动画清掉

  - animate()用于自定义动画
      + 必需的 params 参数定义形成动画的 CSS 属性。放在对象中，可定义一个或多个参数

      + 可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。

      + 可选的 callback 参数是动画完成后所执行的函数名称。
  - toggle 显示被隐藏的元素 隐藏被显示的元素 (开关) 改变宽高透明度

  - fadeToggle 渐隐渐现 

  - slideToggle改变高度

  ### 工具方法

   - 用$. 取引用方法

   - $.each
    ```
    $.each(ary,function(i,item){
       console.log(i,item)
     });
    ``` 
  -  $.ajax() 最简单情况下 可以不加参数使用

  ### extend的用法

   -可以用来拷贝，扩展方法
      +  $.extend(true,{},obj)深度拷贝
      +  $.extend({},obj) 浅拷贝
      + $.extend({
            fn:function(){

            }  
      })  扩展工具方法
      + $.fn.extend({
          fun:function(){

          }
      })  扩展功能方法