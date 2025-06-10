# fuye.io

个人网站项目，基于现代前端技术栈构建。

## 技术栈

- 包管理工具：pnpm
- 前端框架：Vue.js
- 构建工具：Vite
- Web 服务器：Nginx
- SSL 证书：Let's Encrypt

## 开发环境设置

1. 安装 pnpm
```bash
npm install -g pnpm
```

2. 安装依赖
```bash
pnpm install
```

3. 启动开发服务器
```bash
pnpm dev
```

## 部署指南

### 服务器要求

- Nginx
- Node.js 16+
- pnpm
- Git

### 部署步骤

1. 克隆仓库
```bash
git clone <repository-url> /var/www/fuye.io
```

2. 配置 Nginx
```bash
# 将 nginx.conf 复制到 Nginx 配置目录
sudo cp nginx.conf /etc/nginx/conf.d/fuye.io.conf
```

3. 设置 SSL 证书（使用 Certbot）
```bash
sudo certbot --nginx -d fuye.io
```

4. 部署脚本使用说明

项目提供了自动部署脚本 `deploy.sh`，支持两种部署模式：

- 快速部署（不安装依赖）：
```bash
./deploy.sh
```

- 完整部署（安装依赖）：
```bash
./deploy.sh -i
```

### 部署脚本功能

- 拉取最新代码
- 可选安装依赖
- 构建项目
- 重启 Nginx 配置

## 项目结构

```
fuye.io/
├── src/                # 源代码目录
├── public/            # 静态资源
├── dist/              # 构建输出目录
├── nginx.conf         # Nginx 配置文件
├── deploy.sh          # 部署脚本
└── package.json       # 项目配置
```

## 开发规范

- 使用 ESLint 进行代码规范检查
- 所有方法必须包含 JSDoc 注释
- 变量命名使用完整单词或标准缩写
- 代码注释使用行上注释

## 维护说明

### 日志位置

- 部署日志：`/var/log/fuye.io/deploy.log`
- Nginx 访问日志：`/var/log/nginx/fuye.io.access.log`
- Nginx 错误日志：`/var/log/nginx/fuye.io.error.log`

### 常用维护命令

1. 检查 Nginx 配置
```bash
sudo nginx -t
```

2. 重启 Nginx 配置
```bash
sudo nginx -s reload -c /etc/nginx/conf.d/fuye.io.conf
```

3. 查看部署日志
```bash
tail -f /var/log/fuye.io/deploy.log
```

## 许可证

[添加许可证信息]

## 联系方式

[添加联系方式]
