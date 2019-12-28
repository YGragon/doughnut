# 甜甜圈
## 安装说明
0. 在微信小程序客户端创建一个云开发项目

1. 在云开发控制台页面，选择数据库，创建 `topic`,`collect`,`history`,`replay` 四个集合

   ![1577505643270](C:\Users\Aller\AppData\Roaming\Typora\typora-user-images\1577505643270.png)

2. 下载到本地 `git clone https://github.com/dongxi346/doughnut.git `或者 `下载 zip`

3. 将下载下来的项目中的 `miniprogram` 目录下的文件全部复制到你的` miniprogram`目录下

4. 修改 `app.js` 中的 `globalData` 字段修改
  ```
  this.globalData = {
     openid: '你的openid',
     evn: '你的开发环境'
   }
  ```

ps: `openid` 的获取可以参考我之前的文章 [微信小程序开通云开发并利用云函数获取Openid](https://blog.csdn.net/ITxiaodong/article/details/101320816), [全栈项目|小书架|微信小程序-登录及token鉴权](https://blog.csdn.net/ITxiaodong/article/details/103267007)

开发环境可以在`云数据库中查看`：

![1577506164806](C:\Users\Aller\AppData\Roaming\Typora\typora-user-images\1577506164806.png)

## 效果展示

![发布](/screenshots/发布.png)
![广场首页](/screenshots/广场首页.png)
![文章详情](/screenshots/文章详情.png)
![回复](/screenshots/回复.PNG)
![预览图片](/screenshots/预览图片.png)
![我的](/screenshots/我的.png)