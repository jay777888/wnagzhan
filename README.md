# HUBTEK — 轮毂单元静态电商站

一个纯静态、纯英文的轮毂单元（Wheel Hub Unit）展示站。没有后端、没有数据库、不需要构建，上传后即可通过 GitHub Pages 直接访问。

## 文件结构

```
.
├── index.html          # 页面结构（导航、页脚、联系方式在这里改）
├── css/style.css       # 全部样式
├── data/products.js    # 所有内容数据：轮播、分类、商品、促销（含图片路径）
├── js/app.js           # 轮播、筛选、商品详情弹窗等交互
├── images/             # 站点图片：轮播场景图 + 你的 6 张型号产品图（已下载到本地，不依赖外链）
├── credits.html        # 图片来源与许可说明
└── .gitignore          # 排除本地内部文件
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

在新仓库页面点 **uploading an existing file**，把本文件夹里的**全部文件和文件夹**（`index.html`、`credits.html`、本 `README.md`、`css/`、`data/`、`js/`、`images/`）拖进去，点 **Commit changes**。`.gitignore` 和 `.workbuddy/` 是隐藏项，不需要上传。

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
- **换成你自己的产品图**：把图片放进 `images/` 文件夹，然后在 `data/products.js` 里改对应商品的 `image` 路径。当前 6 个商品型号（512078、513121、513196、515003、515024、515036）的名称和 OEM 号都取自你「图片」文件夹里的文件名，图片也来自那里。
- **联系方式**：搜索 `index.html` 里的 `info@example.com`，替换成你的邮箱。
- **品牌名**：`data/products.js` 的 `brand` 字段和 `index.html` 里的 `HUBTEK` 文本。

## 上线前需要注意

- 6 个商品的**型号名称和图片**已换成你提供的真实资料；但**价格、适配车型、规格参数、MOQ 仍是演示数据**，请按实际产品核对修改。轮播场景图仍来自 Pexels 和 Wikimedia Commons 免费图库，来源与许可见 `credits.html`。
- 这是一个纯展示站，没有购物车、支付和后台；联系入口只是一个 `mailto:` 邮箱链接。
- 正式商用前请核对产品适配性和商标/OEM 号的使用授权。

