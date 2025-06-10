#!/bin/bash

# 设置日志文件路径
LOG_FILE="/var/log/fuye.io/deploy.log"
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")

# 创建日志目录（如果不存在）
mkdir -p /var/log/fuye.io

# 记录日志的函数
log() {
    echo "[$TIMESTAMP] $1" | tee -a "$LOG_FILE"
}

# 错误处理函数
handle_error() {
    log "错误: $1"
    exit 1
}

# 显示使用说明
show_usage() {
    echo "使用方法: $0 [-i]"
    echo "选项:"
    echo "  -i    安装依赖（可选）"
    exit 1
}

# 解析命令行参数
INSTALL_DEPS=false
while getopts "i" opt; do
    case $opt in
        i) INSTALL_DEPS=true ;;
        *) show_usage ;;
    esac
done

# 开始部署
log "开始部署流程..."

# 1. 拉取代码
log "正在拉取最新代码..."
cd /var/www/fuye.io || handle_error "无法进入项目目录"
git pull origin master || handle_error "git pull 失败"

# 2. 安装依赖（如果需要）
if [ "$INSTALL_DEPS" = true ]; then
    log "正在安装依赖..."
    pnpm install || handle_error "依赖安装失败"
else
    log "跳过依赖安装..."
fi

# 3. 构建项目
log "正在构建项目..."
pnpm build || handle_error "项目构建失败"

# 4. 重启 nginx 配置
log "正在重启 nginx 配置..."
if ! sudo nginx -t; then
    handle_error "nginx 配置检查失败"
fi
sudo systemctl reload nginx || handle_error "nginx 配置重启失败"

# 部署完成
log "部署完成！" 