# readme文档
- 项目说明文档
- 一般都与项目放在一起

# Git操作
初始化

##初始化版本库
- Git init
- 初始化成功后，当前目录后面有（master）

## 工作区
- 持有实际文件
- 我们平时增删改查的文件都是工作区内容
- 也是存在与用户电脑中的
 

## 暂存区
- 可以理解为我们看不到的一个地方
- 本地仓库的一个主要组成部分

## 本地仓库的一个主要组成部分
- 可以理解为我们看不到的一个地方
- 也是存在与用户电脑中的
- 用于存储项目代码以及版本项目记录等信息

## 提交到暂存区
- git add 文件名
- 将工作区的变动提交到暂存区
- git add . 将所有变动提交到暂存区

## 查看工作区和暂存区的状态
- git status
- 查看工作区和暂存区的状态（增删改）

## 本地操作的关键步骤
1. git init
2. git add.
3. git commit -m '提示文字'
4. git status 查看状态

## 提交到本地仓库
- git commit -m '提交注释'（注释对后面查询版本很有帮助）
- 将代码从暂存区提交到本地仓库
- git status 查看状态提示：工作区是干净的，没有任何东西要提交

## 查看日志
- git log     完整版日志
- git relfog  简单版日志

## 版本回退
- git reset --hard HEAD^  回退到上一个版本
- git reset --hard 版本号(查看日志的版本号)

## 查看变动
- git diff 文件名
- 会列出该文件前后的差异

## 创建远程仓库
- 进入 github官网
- 创建一个新的远程从仓库

## 将本地仓库与远程仓库关联
- git remote add origin https://github.com/HeJiaYue520/GP5.git (你的远程仓库地址)
- git remote -v 查看本地仓库关联的远程仓库地址
水电费活泼isad换房

##其和他说 

。。。。。
