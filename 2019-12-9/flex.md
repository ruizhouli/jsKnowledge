### 弹性盒模型
- 使用方便 pc端不一定兼容，移动端基本兼容
- 当父级写了flex之后就等同于左浮动(所有的子集)，之前的浮动就没有效果了
### flex定义主轴的方向
    - 交叉轴就会相应的旋转90度 弹性元素的排列方式也会发生变化，因为 弹性元素永远排列在主轴上

   - flex-direction：row (默认 从左至右) 弹性元素将从左到右排列

   - flex-direction:row-reverse(主轴的方向将变为从右至左)

   - flex-direction:column(主轴将发生变化,从上到下排列)

   - flex-direction:column(主轴将发生变化，从下到上排列)

### 一行内容对齐方式(主轴上的对齐方式)
- 默认方向是左对齐
     ```
     justify-content:flex-start
     ``` 
- 可以设置右对齐
    ```
     justify-content:flex-end
    ```
- 可以设置中间对齐
    ```
     justify-content:center
    ```
- 第一个和最后一个分别顶着父级的边，中间平均分 
     ```
     justify-content:space-between
     ```
- 平均分配剩余的空间：
     ```
     justify-content:space-around
     ```
- 间距平均分配
     ```
     justify-content:space-evenly
     ```
 ### 交叉轴上的对齐方式(自身感觉寻找交叉轴的位置很重要)
  #### 交叉轴上的单行对齐方式(align-items)
   - align-items:stretch(默认值)如果元素未设置高度或设auto，将沾满整个容器的高度

   - 当 align-items的值不为stretch的时候 除了元素的排列方式会发生变化其大小也会将有其大小及自身尺寸决定

   - align-items:flex-start(沿着交叉轴的起点对齐)

   - align-items:flex-end(沿着交叉轴的尾部对齐)

   - align-items:center(沿着交叉轴的中间对齐)

   - align-items:baseline(沿着文字内容的基线对齐)
   
   #### 交叉轴上的多行对齐方式(align-content 只对多行元素有效)
    - align-content:flex-start 
    - align-content:flex-center 
    - align-content:flex-end
    - align-content:flex-space-between 
    - align-content:flex-space-around

   #### align-items与align-content的差异
      - 两者的作用域不同
      - align-items只管一行
      - align-content主要管行与行之间的距离 它以一行为整体

### 强制换行
  - flex-wrap:nowrap(默认不折行)
  - flex-wrap:wrap(折行)
  - flex-wrap:wrap-reverse(两行颠倒)是从容器底部开始的折    行，但每行元素之间的排列仍保留正向。
  

       






