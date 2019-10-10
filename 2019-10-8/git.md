### git 与 github

> git 版本控制工具

    SVN：集中式 弊端：版本控制必须要网络支持 一般SVN都是局域网，只能是公司内部人员使用；外部人员很难使用；但是中央服务器不一定稳定

    git为分布式   不需要网络支持 就能进行版本控制，只要能上网还有开发权限都能参与开发 就算远程仓库出事，本地计算机也有历史记录。

    GITHUB:程序员交友网站 远程仓库 帮助学习

>GIT的三大区域：
-  工作区(本地)

-  暂存区(保护工作区和版本区)

-  版本区(版本库、历史记录)  只有形成版本才能进行版本控制

- 按着tab键可以补全命令
设置用户信息
- git  git config --global  user.name "ruizhouli" 

- 创建版本仓库：git init (想在哪进行版本控制就在哪个文件夹下右击点 git bash here)

- 查看状态 git status 
   如果查看状态有红色区域就说明有部分没有被版本控制

- 工作区到暂存区
   -git add 文件名
   -git add . (快速把工作区所有的文件放到暂存区)

- 暂存区到版本区
    -git commit -m "取个自己能够识别的名字"

- 查看版本 
    - git log   
    - git reflog 查看多有的历史记录（包括历史区回滚）
    出现nothing to commit, working directory clean就说明没有文件没被管理了（都被管理了）

- 回滚
     - git reset --hard commit码(历史ID)

- 快速从工作区到版本区
    - git commit -a -m "版本名"

- 过滤不需要上传的文件
  -touch .gitignore  在gitignore文件中写要过滤的
  在文件中填写过滤的文件或文件夹

*.zip、*.rar、*.via、*.tmp过滤这些后缀名的文件

排除指定文件夹下的文件， /txt/1.txt

排除指定文件夹  \txt2

git rm -r --cached .  如果已经提交过的代码，使用.gitignore是无效的，那么请使用前面这段代码

- 查看各大区域之间的区别
   - 工作区和暂存区 git diff
   - 工作区和版本区 git diff master
   - 暂存区和版本区 git diff --cached
- 把git的版本上传至github
    设置秘钥：SSH-keygen -t rsa -C "邮箱" 
     - 登录github，右边头像下拉列表有个settings，找到SSH and GPG keys，找到new ssh key点击，把秘钥放到文本框中，点击add ssh key。

    - 在github上创建一个项目
        - 加号下拉列表，第一个创建新项目
        - 仓库名称
        - 说明
        - 公开
        - README打钩
- 查看远程仓库
   git remote -v 
- 创建远程仓库
   git remote add 远程仓库名 远程仓库地址
- 同步远程
   git pull origin master
- 提送到远程
   git push origin(远程名) master(远程分支)
- 删除远程仓库
 git remote remove 远程名
- 克隆项目
  git clone 远程地址
### node安装

- 项目初始化
   npm init -y
- 安装程序
   npm install 程序
- 删除程序
   npm uninstall 程序
  npm为目前全球最大的包管理平台
- npm install nrm -g(全局安装)
 nrm test 
 nrm use taobao
- yarn安装
   npm install yarn -g
   yarn add 安装程序
   yarn remove 删除程序
 
