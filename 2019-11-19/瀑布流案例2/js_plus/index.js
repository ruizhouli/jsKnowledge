const box = document.getElementById('box');
console.log(box);
const body = box.querySelector('.body');
console.log(body)
let lis = body.querySelectorAll('li');
console.log(lis);


function minE(arg){
    let ary = [...arg].map(item=>item.scrollHeight);
    // console.log(ary)
    let min = Math.min(...ary)
    // console.log(min)

   let index= ary.findIndex(item=>{
        return item===min
    })
    return{
        min,
        index,
        ele:arg[index]
    }
}
const picw = 236;
const ml = 10;
const boxt = 66;
let clientW = document.documentElement.clientWidth;
let len = Math.floor(clientW/(picw+ml));
//ul的宽度
box.style.width = (len*(picw+ml))-ml+'px';

let aryx=[];
let aryy=[];
for(let i = 0;i<len;i++){
    aryx[i] = i * (picw+ml);
    aryy[i]=0;
}
// minE(lis)
function rander(){
    fetch('../data.json').then(a=>a.json()).then(data=>{
        // console.log(data)
        data.forEach(item => {
            // let {ele}=minE(lis);
            let {index} = minIndex(aryy);//找出数组中top最小的
            console.log(ele)
            let div = document.createElement('div');
            div.className='img_box'
            let img = document.createElement('img');
            img.src=item.pic;
            let p1 = document.createElement('p');
            p1.className='desc';
            p1.innerText=item.desc;
            let p2 = document.createElement('p');
            p2.className='author';
            p2.innerText=item.author;
            div.append(img);
            div.append(p1);
            div.append(p2);
            ele.append(div);
            setTimeout(() => {
                img.style.opacity = 1;
            });
        });
       
    })
}
rander();

let ih = window.innerHeight;
console.log(ih);
onscroll = jl(fn,200)
function fn(){
    if(box.scrollHeight<ih){
        return
    }
    let m= minE(lis);
    let {min}=m;
    console.log(min)
    let sch = window.pageYOffset;
    console.dir(sch);
    if(ih+sch>=min){
        rander();
    }


}


//防抖

function fd(callback,time){
    let timer;
    return function(...arg){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            callback.call(this,...arg)
        },time)
    }
}

//节流

function jl(callback,time){
    let pervious = 0;
    return function(...arg){
        let now = +new Date;
        if(now-pervious>time){
            callback.call(this,...arg)
            pervious = now;
        }
        
    }
}

window.onresize = function(){
clientW = document.documentElement.clientWidth;
 len = Math.floor(clientW/(picw+ml));
//ul的宽度
box.style.width = (len*(picw+ml))-ml+'px';

 aryx.length=0;
 aryy.length=0;
for(let i = 0;i<len;i++){
    aryx[i] = i * (picw+ml);
    aryy[i]=0;
}
//获取所有的li,然后重新安排位置；
const lis = box.querySelectorAll('li')
lis.forEach((ele,i)=>{
    let {index} = minIndex(aryy);
    ele.style.cssText = `top:${aryy[index]}px;left:${aryx[index]}px`;
    aryy[index] += (ele.scrollHeight + 10); 
});

}