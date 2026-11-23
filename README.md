# HUBTEK — 轮毂单元静态电商站

一个纯静态、纯英文的轮毂单元（Wheel Hub Unit）展示站。没有后端、没有数据库、不需要构建，上传后即可通过 GitHub Pages 直接访问。

## 文件结构

```
.
├── index.html          # 页面结构（导航、页脚、联系方式在这里改）
├── css/style.css       # 全部样式
├── data/products.js    # 所有内容数据：轮播、分类、商品、促销
└── js/app.js           # 轮播、筛选、商品详情弹窗等交互
```

## 本地预览

直接双击 `index.html` 即可打开。也可以在本目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 发布到 GitHub Pages（最简单的方式）

### 1. 新建仓库

1. 登录 GitHub，点右上角 **+** → **New repository**。
2. **Repository name** 填一个名字，例如 `hubtek-store`。
3. 选择 **Public**，其他选项保持默认，点 **Create repository**。

> 重要：仓库名决定网址形式，见下方「访问地址」说明。

### 2. 上传文件

在新仓库页面点 **uploading an existing file**，把本文件夹里的 **4 个文件和 3 个子文件夹**（`index.html`、`css`、`data`、`js`、本 `README.md`）拖进去，点 **Commit changes**。

注意：拖的是文件夹**里面的内容**，不要把最外层的 `wnagzhan` 文件夹整个拖进去。

也可以用命令行（在 `wnagzhan` 目录执行）：

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/hubtek-store.git
git branch -M main
git push -u origin main
```

### 3. 开启 Pages

1. 进入仓库 → **Settings** → 左侧 **Pages**。
2. **Build and deployment** 里：
   - **Source** 选 **Deploy from a branch**
   - **Branch** 选 **main**，目录选 **/(root)**
3. 点 **Save**。
4. 等 1–2 分钟，刷新该页面，顶部会显示绿色的访问链接。

### 4. 访问地址

| 仓库名                                    | 访问地址                                    |
| -------------------------------------- | --------------------------------------- |
| `hubtek-store`                         | `https://你的用户名.github.io/hubtek-store/` |
| `你的用户名.github.io`（用户名必须完全一致，每个账号只能建一个） | `https://你的用户名.github.io/`              |

如果想用第二种「根域名」形式，把仓库改名为 `你的用户名.github.io` 即可，其余步骤不变。

以后要更新网站，重新上传/推送文件即可，Pages 会自动更新，一般几十秒内生效。

## 改成你自己的内容

- **商品、轮播、分类、促销**：编辑 `data/products.js`，保持字段名不变，改文字、价格、OEM 号和 `accent` 颜色即可。商品数量不限，页面自动渲染。
- **联系方式**：搜索 `index.html` 里的 `info@example.com`，替换成你的邮箱。
- **品牌名**：`data/products.js` 的 `brand` 字段和 `index.html` 里的 `HUBTEK` 文本。

## 上线前需要注意

- 当前商品型号、价格、适配车型都是**演示数据**，图片是 SVG 技术示意图，请替换为真实信息。
- 这是一个纯展示站，没有购物车、支付和后台；联系入口只是一个 `mailto:` 邮箱链接。
- 正式商用前请核对产品适配性和商标/OEM 号的使用授权。

