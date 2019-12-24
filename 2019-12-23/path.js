/* 
 通过全局对象下的__filename能够获取当前文件的绝对路径(包含文件本身)
*/
//console.log(__filename)//F:\JS\Formal-lessons\2019-12-23\path.js  (获取当前路径的绝对路径)

/* 表示当前执行脚本所在的目录(运行文件的根目录)，不包含文件本身   __dirname*/
// console.log(__dirname)//F:\JS\Formal-lessons\2019-12-23

let path = require('path');
// console.log(path)//比较重要的两个方法 resolve join
/* console.log(path.join('/name','/bhbh'))//join拼路径，写啥拼啥
console.log(path.join(__dirname,'/bhbh')) */
console.log(path.resolve('www','./path.js'));//resolve 最后一个参数要加./，不然出不来


