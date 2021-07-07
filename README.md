# 甜甜圈

## 使用说明

0. 在微信小程序客户端创建一个云开发项目

1. 在云开发控制台页面，选择数据库，创建 `topic`,`collect`,`history`,`replay` 四个集合

   ![开发环境](/screenshots/创建数据.png)

2. 下载到本地 `git clone https://github.com/dongxi346/doughnut.git `或者 `下载 zip`

3. 将下载下来的项目中的 `miniprogram` 目录下的文件全部复制到你的` miniprogram`目录下

4. 修改 `app.js` 中的 `globalData` 字段修改

```
this.globalData = {
   openid: '你的openid',
   evn: '你的开发环境'
 }
```

ps: `openid` 的获取可以参考我之前的文章：

[微信小程序开通云开发并利用云函数获取 Openid](https://blog.csdn.net/ITxiaodong/article/details/101320816)

[全栈项目|小书架|微信小程序-登录及 token 鉴权](https://blog.csdn.net/ITxiaodong/article/details/103267007)

开发环境可以在`云数据库中查看`：

![开发环境](/screenshots/开发环境.png)

## 效果展示

![发布](/screenshots/发布.png)
![广场首页](/screenshots/广场首页.png)
![文章详情](/screenshots/文章详情.png)
![回复](/screenshots/回复.PNG)
![预览图片](/screenshots/预览图片.png)
![我的](/screenshots/我的.png)

## 更多信息

- 更多小程序文章可查看我的专栏：**[小程序之旅](https://blog.csdn.net/ITxiaodong/category_9274001.html)**，专栏中有小程序云开发项目，也有使用`NodeJS+Koa2`开发的小程序后台服务器。
- 如还有问题，加我微信（weixin1105894953）发 1.68 红包可解答小程序相关问题
