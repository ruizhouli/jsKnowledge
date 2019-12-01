class  Drag {
    constructor(id,cls) {
        this.disX = this.disY = 0;
        this.box = document.getElementById(id);
        this.flod = document.getElementById(cls)
    }
    init(){
        this.flod.addEventListener('mousedown',this.d = this.down.bind(this));
    }
    down(ev){
        // let {left,top} = this.box.getBoundingClientRect();
        this.disX = ev.pageX;
        this.disY = ev.pageY;
       
        //按下的时候让box等于鼠标按下的位置
        this.box.style.top = this.disY + 'px';
        this.box.style.left = this.disX + 'px';
 this.box.style.display = 'block';
        this.flod.addEventListener('mousemove',this.mv = this.move.bind(this));

        document.addEventListener('mouseup',this.u = this.up.bind(this));
        document.addEventListener('click',this.click())
        console.log(123456489797797979)
        ev.preventDefault();
    }
    move(ev){
        console.log('move')
        this.box.style.top = Math.min(ev.pageY,this.disY) + 'px';
        this.box.style.left = Math.min(ev.pageX,this.disX) + 'px';

        for(let i = 0;i<b.length;i++){
                if(bong(box,b[i])){
                        b[i].style.background = 'pink';
                }
                // else{
                //     b[i].style.background = '#fff';
                // }
        }

          

        //移动的距离 - 按下的距离 = 移动了多少距离
        this.box.style.width = Math.abs(ev.pageX - this.disX) + 'px';
        this.box.style.height = Math.abs(ev.pageY - this.disY) + 'px';
        console.log('到尾部了')

    }
    up(){
        console.log('抬起来啦')
        this.box.style.height = this.box.style.width = 0;
        this.box.style.display = 'none';
        this.box.removeEventListener('mousemove',this.mv);
        this.flod.removeEventListener('mouseup',this.u);
    }
    click(){
        // console.log(111)
               for(let i =0;i<b.length;i++){
                    b[i].style.background='white'
               }
  
   }
}