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
// minE(lis)
function rander(){
    fetch('../data.json').then(a=>a.json()).then(data=>{
        // console.log(data)
        data.forEach(item => {
            let {ele}=minE(lis);
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
            ele.appendChild(div);
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