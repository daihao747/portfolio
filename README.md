# 个人作品集网站

这是唐中利的电商视频剪辑个人作品集。视觉参考 Landbook 中 Flex Elite 的深绿、电影感与编辑式排版语言，适合直接部署到 GitHub Pages、Netlify、Vercel 或任意静态网站空间。

## 页面结构

- `index.html`：作品集首页、项目详情浮层和 Showreel 播放浮层
- `styles.css`：完整响应式样式
- `script.js`：导航、筛选、滚动动效、弹窗、复制联系方式
- `assets/hero-starry-loop.mp4`：首页静音循环星空视频
- `assets/videos-full/`：8 条完整作品视频，仅做网页分辨率与码率压缩
- `assets/covers/`：真实视频封面

## 上线前必须替换

1. 如需更新作品，替换 `assets/videos-full/` 和 `assets/covers/` 中的同名文件。
2. 如需更换首页背景，替换 `assets/hero-starry-loop.mp4`，建议使用 16:9、H.264、无音轨素材。
3. 在 `script.js` 的 `projects` 对象中维护项目标题、职责、平台和播放数据。
4. 如后续增加抖音、小红书或 B 站主页，可在页脚中补充对应链接。

## 本地预览

在当前目录启动任意静态文件服务器，例如：

```powershell
python -m http.server 4173
```

然后访问 `http://localhost:4173`。

## 素材说明

网站中的 8 条作品来自唐中利提供的原始视频。原始素材未修改，网站使用 540×960 的完整压缩版本以控制加载体积；播放时不裁剪时长，也不切换成节选片段。

用户已确认：

- 鞋服项目为白牌混剪，平台为抖音。
- 3C 项目品牌为凯诗捷，唐中利负责拍摄剪辑，100W 为单条视频播放量。
- 图书项目为白牌，平台为视频号，播放量约 30W。
- 可以公开展示品牌、商品、出镜人员和原视频声音。

## 公开联系

- GitHub：https://github.com/daihao747

公开展示版本不包含手机号、微信、邮箱、简历页面或简历 PDF。
