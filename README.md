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

### 定时任务状态检查

在 CentOS 服务器上检查定时任务状态的常用命令：

1. 查看 crond 服务状态
```bash
systemctl status crond
```

2. 查看当前用户的定时任务
```bash
crontab -l
```

3. 查看系统级定时任务
```bash
cat /etc/crontab
ls -la /etc/cron.d/
ls -la /etc/cron.daily/
ls -la /etc/cron.hourly/
ls -la /etc/cron.monthly/
ls -la /etc/cron.weekly/
```

4. 查看定时任务执行日志
```bash
# 查看最近的 cron 日志
tail -20 /var/log/cron

# 实时监控 cron 日志
tail -f /var/log/cron

# 查看今天的 cron 日志
grep "$(date +%b\ %d)" /var/log/cron
```

5. 检查 crond 服务是否运行
```bash
# 检查服务状态
systemctl is-active crond

# 检查服务是否启用
systemctl is-enabled crond

# 查看服务详细信息
systemctl show crond
```

6. 查看定时任务进程
```bash
# 查看 crond 进程
ps aux | grep crond

# 查看定时任务相关进程
ps aux | grep cron
```

7. 测试定时任务语法
```bash
# 如果有具体的定时任务文件，可以测试语法
crontab -T
```

8. 查看系统时间（定时任务依赖系统时间）
```bash
date
timedatectl status
```

## 许可证

[添加许可证信息]

## 联系方式

[添加联系方式]
