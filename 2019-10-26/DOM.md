### js
 - 组成部分：ECMAScript  DOM    BOM

 ### DOM
-  document  object  model  

- 它的出现就是通过document提供的api(接口文档)，赋予开发者操作页面

- 如果要操作某个元素，必须要先获取出来：document      

- 获取出来的元素是个对象  在js中标签和对象是映射的关系，修改对象下的属性可能会改变标签

- DOM树  把页面中所有的节点组织在一个树形结构中，方便我们通过他们的关系来操作

- 界面中所有的内容都由不同的节点组成

- 查看节点类型nodeType    元素节点(标签)1       属性节点：2       文本节点3       注释节点8       文档节点9

- 查找当前元素下的所有子节点：childNodes   获取node的名字 nodeName   

- 获取某个元素下的元素节点：children

- firstElementChild  找父级的第一个元素

- lastElementChild   找父级的最后一个元素

- previousElementSibling 上一个兄弟节点  nextElementSibling 下一个兄弟节点

- parentNode 查找父级元素的节点

- 回流 当某个元素发生了几何和坐标...的变化，会使页面局部刷新，或者导致整个页面刷新   重绘：元素几何、坐标不发生变化，只是外观、颜色、风格发生变化，导致某个样式发生变化