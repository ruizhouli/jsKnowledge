### git 与 github
- git：版本控制工具

    + 新的版本挂了，但是老的可以运行，那么可以让新的版本回滚成原来的老版本，等新的版本bug处理完了，测试正常了，再换成新的版本.

- github:远程代码管理仓库、 交流学习平台。


### 集中式 vs 分布式

- 集中式缺点：必须联网、比较慢、都使用一个中央服务器，中央服务器可能会挂。有可能会丢失数据。

- 分布式 ：每个电脑就是一个服务器、不用联网就可以进行版本控制、速度快

### git命令

- 找到要控制的文件目录，鼠标右键 点击git bash here

- git init 初始化

- 查看状态：git status

- 版本控制都是基于.git文件的 如果把.git删了那么就不能进行版本控制

- 将工作区的内容添加到暂存区：git add  文件名 只能将一个文件放进暂存区  git add . 将工作区的全部文件放进暂存区

- 可以通过Tab键补全文件   通过ll或者ls查看目录文件   通过上下键切换刚输入的命令

- 将暂存区的内容添加到版本区：git commit -m '备注' （你能直接识别的名字即可）

- 将工作区的内容直接添加到版本区：git commit -a -m '备注' 注意：(使用这个命令是文件提交过一次才可以使用)

- git创建分支：git branch 创建新分支的名字  切换分支： git checkout 分支名  

- 直接创建进入新分支：git checkout -b 新分支名

- 忽略不上传的文件：首先git rm -r --cashed 然后通过touch .gitignore 生成.gitignore文件

- 在.gitignore文件中
    + 过滤掉指定文件用 /文件名 

    + 过滤掉指定的文件夹用  文件夹名/

- 查看版本：git log   git reflog    如果版本操作的多使用git reflog

- 如果配置不起作用 可以将之前的操作清除一下 再过滤操作 操作的命令：git rm -r --cached .

- 撤销回滚  git reset --hard '版本号'

#### 查看每个区域的不同点

- 工作区与暂存区：git diff 

- 工作区与版本区：git diff master

- 暂存区与版本区：git diff --cached

### 设置作者信息
   - 设置用户名 git config --global user.name '你的名字'

   - 设置邮箱  git config --global user.email '你的邮箱'


### github
- 其实是代码托管平台    诸如： 码云  coding 

- 第一种方式

    + github上创建一个项目

    + 绑定秘钥 ssh-keygen -t rsa -C '邮箱名'（绑定一次即可）

    + 确定版本库是最新的

    + 查看远程仓库 git remote -v

    + 创建远程仓库 git remote add origin(这个名字可以改变)  路径

    + git pull origin master (保证能够成功上传，进行远程与本地合并)

    + git push prigin master(上传第一次会上输入用户名和密码)

- 第二种方式

    + 先在远程仓库创建一个项目

    + git clone 项目地址

    + git status

    + git add .

    + git commit -m '备注'

    + git push origin master

### node 

- 创建项目 npm init -y 会生成一个package.json的文件
- npm跟着node安装一起安装下来的模块

- npm是目前世界上最大的资源管理平台

- 如何下载资源

    + npm install 资源名   -g 全局安装  -s 项目依赖

    + 下载下来的时候会自动生成一个node_modules文件夹 文件夹中放的就是你下载的资源

- 卸载资源
    + npm uninstall

- yarn 最快的资源管理平台
     + 下载资源 yarn install 资源名
         





