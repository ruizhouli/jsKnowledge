class tools{
    //求被撑开高度最小的li
    minE(obj){
        if(!Array.isArray(obj)){
            obj = Array.from(obj);
        }
      let ary= obj.map(item=>{
            return item.scrollHeight;
        })
     let min = Math.min(...ary);
     let minIndex = ary.findIndex(item=>{return item===min})
     return{
         min,minIndex,ele:obj[minIndex],
     }
    }
    //防抖
   fd (callback,time){
        let timer;
        return function(){
            if(timer){
                clearTimeout(timer)
            }
            timer=setTimeout(()=>{
                callback.call(this)
            },time)
        }
    }
}

class waterFull extends tools{
    constructor(){
        super()
        this.box = document.getElementById('box')
        this.body = this.box.querySelector('.body');
        this.obj = this.body.getElementsByTagName('li')
        console.log(this.obj)
        this.h = document.documentElement.clientHeight;
        this.loading = document.getElementById('loading')
    }
    getData(url,cb){
        let _this = this;
        fetch(url).then(a=>a.json()).then(data=>{
            cb.call(_this,data)
        })
    }

    rander(){
        this.onLd();
        this.changeLoading()
        this.getData('../data.json',function(data){
            this.offLd();
            this.changeLoading()
            console.log(data)
            data.forEach((item,i)=>{
                let o=this.minE(this.obj);
                let div = this.creat(item);
                o.ele.appendChild(div)
                setTimeout(()=>{
                    div.children[0].style.opacity = 1;
                },200*i)

            })  
        })
    }


    creat({ pic,author,desc,height}){
        let div = document.createElement('div');
        div.className = 'img_box';
        let img = document.createElement('img');
        img.src = pic;
        // img.style.opacity=1
        let p = document.createElement('p');
        p.className='author';
        p.innerText = author;
        let p1 = document.createElement('p');
        p1.className = 'desc';
        p1.innerText = desc;
        div.append(img);
        div.append(p);
        div.append(p1);
        return div;
    }
    scroll(){
        let _this = this;
        window.onscroll=this.fd(fn,200)
        function fn(){
            let sc = document.documentElement.scrollTop;
            let o= _this.minE(_this.obj);
            if(_this.h+sc>=o.min){
                _this.rander();
            }
        }
    }
    changeLoading(){
        this.loading.style.display = this.onoff?'block':'none';
    }
    onLd(){
        this.onoff = true;
    }
    offLd(){
        this.onoff = false;
    }
}
 

let t = new waterFull();
t.rander();
t.scroll();
   