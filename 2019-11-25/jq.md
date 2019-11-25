# jquery

 - jquery是一个js库，它简化了DOM操作，动画操作，兼容性，数据请求操作.

 - 安装jquery  
    + npm init -y 生成一个package.json文件
    + npm install jquery -D
 - jquery有多个版本
    + 源码版(学习版)：jquery.js
    + 压缩版：jquery.min.js

 - 引入jquery
    + <script src='../node_modules/jquery/dist/jquery.min.js'></script> 

### 选择器

 - $ ->jquery对象
 - $() -> fn() 函数调用
 - css如何去选择，jquery就如何去选择
 ```
//元素选择器
$('元素名')

//id选择器
$('#id名')

//类选择器
$('.类名')

//获取所有的元素
$('*')

//获取当前html的元素
$(this)

//获取class名为 info的p元素
$('p.info')

//获取第一个p元素
$('p:first')

//获取第一个ul元素里的第一个li元素
$('ul li:first')

//选取每一个ul元素的第一个li元素
$('ul li:first-child')

//选取带有herf属性的元素
$('[href]')

//选取所有target值为_blank的a元素
$("a[target='_blank']")

//选取所有target值不为_blank的a元素
$("a[target!=='_blank']")

//选取所有type为button的input元素和button元素
$(:button)

//选取偶数位置的li元素
$('li:even')

//选取奇数位置的li元素
$('li:odd')
 ```
 ### 属性操作
  - attr ->getAttribute,setAttribute 
       + attr   设置/改变属性值。
       ```
       第一种：
       $("button").click(function(){
          $("#runoob").attr("href","http://www.runoob.com/jquery");
         });
        第二种：
        $("button").click(function(){
           $("#runoob").attr({
             "href" : "http://www.runoob.com/jquery",
            "title" : "jQuery 教程"
         });
        });
       ```
  - removeAttr ->removeAttribute
  - prop ->表单的状态布尔值(表单元素用)
  - 获取内容
    + val() ->value
    + html() ->innerHTML
    + text() ->innerText
    + 上面三个方法中都有回调函数，三个方法中第一个参数为所获取元素的属性名，第二个参数可以为一个回调函数，回调函数的第一个参数的为被选元素列表中此元素的下标，第二个参数为原始值，第二个参数也可直接设置为要想设置的属性值
### 样式操作

- css() 设置行间样式 ->style
```
$('#box').css('width')->获取id为box的元素的style宽度

$('div').css('width',200) 设置所有的div的宽度为200

$('#box').css({
    width:200,
    height:200,
    background:'red'
})   ->批量添加

显示：show();
隐藏：hide();
```
### 插入元素

- append() 在被选元素的结尾插入内容

- prepend() 在被选元素的开始插入内容

- after() 在被选元素之后插入元素

- before() 在被选元素之前插入元素

### jquery对象转原生对象，原生对象转jquery对象

```
 原生对象转jquery只需要包$()即可

 box ->$(box) 就变成了jquery对象

 jquery对象转原生对象
 $box -> $box.get(0) 或者 $box[0]
```