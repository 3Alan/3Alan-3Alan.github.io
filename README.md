## 左侧菜单
- 首页
- 友链
- 归档

## 头部Head
- 搜索
- 滚动吸顶效果

## 文章卡片
### 包含信息
- [x] 标题
- 简述
- （发布/更新）时间
- [x] 浏览数
- ?评论数
- ?图片
- 顶置
### 样式
- 左图片，右边内容
- 背景图片形式
  - 悬浮显示时间和浏览数等数据
### 组件设计
- layout来区分卡片样式
- title
- description
- releaseTime/updateTime
- viewCount
- headerImg
- pin

## 文章详情页
- [x] code 苹果窗口美化
- [x] highlight
- [ ] 多窗口
- [x] 评论
- [x] 回到顶部
- [ ] 锚点组件
- [ ] 代码一键复制

# 代码、工程方面
## 自动化部署
后面单独新建一个仓库，建立`github actions`实现`build&export`，把生产的内容`push`到`github pages`仓库中，然后在`github pages`仓库下创建同步`gitee`仓库的`actions`。

## 自动化测试
