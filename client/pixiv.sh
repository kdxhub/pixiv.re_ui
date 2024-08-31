#!/bin/bash

# 发布于https://kdxhub.github.io/blogs/2024/24
# Copyright (C) 2024, kdxiaoyi.
# All right reserved.
# 详见https://kdx233.github.io/licen
# 转载请勿删除此发布声明

# 更新检测
bypassUpdata=false
## 将上方bypassUpdata修改为「true」即可跳过更新检查
if [ "$4" != "" ];then bypassUpdata=true;fi;ver=3
if [ "${bypassUpdata}" == false ];then {
  IFS='§' read -ra updataInfo <<< $(curl -LfsS https://kdxiaoyi.top/pixiv.re_ui/client/pixiv.sh.version)
  if [[ ${updataInfo[0]} =~ ^[0-9]+$ ]];then
      if [ ${ver} -lt ${updataInfo[0]} ];then
        echo [!] 有新版下载喵可用
        echo 当前版本ver.${ver}，最新版本ver.${updataInfo[0]}
        echo ${updataInfo[2]}
        echo 下载地址：${updataInfo[1]}
        echo
      fi
    else
    echo 无法获取本喵的新版本
    echo
  fi
};fi

# 帮助文本
if [ "1$(echo "$1" | grep "h")" != "1" ];then
  echo Pixiv 插画批量下载
  echo ver.${ver}
  echo "
 用法：
 pixiv.sh [id] [proxy] [getM] [updata]
      id - 插画车牌号：懂得都懂
   proxy - 代理模式：快速选择指定序号代理
    getM - 获取模式：存在此参数则下载全部，否则询问
  updata - 忽略更新：存在此参数则跳过更新检查
  
 任何不合适的参数值都会在执行时重新请求
 下载的文件将保存在命令pwd获取到的目录下
 更新检查可以通过编辑脚本来跳过"
  exit 0
fi

# ID获取
id=$1
path=$2
echo Pixiv 插画批量下载喵
if [[ $id =~ ^[0-9]+$ ]];then echo;else
  echo
  read -p "插画编号> " id
  if [[ $id =~ ^[0-9]+$ ]];then echo;else
    echo  → 那个编号…不可用的主人！输一个有效编号吧qaq~
    exit 400
  fi
fi

# 代理模式
if [ "testr$(echo "$2" | tr -cd "[0-9]" )" != "testr" ];then proxy="$(echo "$2" | tr -cd "[0-9]" )"
else 
  echo " [1] re 代理（默认）"
  echo " [2] nl 代理"
  echo " [3] cat 代理"
  read -n 1 -p "主人想选择哪个代理服务呢喵~> " proxy
  echo
fi
if [ 1$proxy -eq 13 ];then proxy=https://pixiv.cat/
  elif [ 1$proxy -eq 12 ];then proxy=https://pixiv.nl/
  else proxy=https://pixiv.re/
fi
  
# 请求插画数据
echo URI: "${proxy}${id}.png"
echo 本喵正在努力请求…
echo
          #可以压缩到一行但是为了维护考虑就不压了
all=$(curl -s -L "${proxy}${id}-2147483649.png")
deleted=$(echo "$all" | grep -Poi "(deleted)|(restricted)")
all=$(echo "$all" | grep -Poi "作品只有[.\s][0-9]*")
all=$(echo "$all" | tr -cd "[0-9]" )

# 判断插画状态
httpcode = $(curl -L -I -m 10 -o /dev/null -s -w %{http_code} "${proxy}${id}-2147483649.png")
if [ ${httpcode} -ne 404 ];then 
  echo  → 主人，坏！${id}不是一个有效的车牌号啊呜~
  exit 400
elif [ ${httpcode} -eq 500 ];then
  echo  → 主人，远程服务器发生了…内部错误啊呜~
  exit 500
elif [ "testr${deleted}" != "testr" ];then
  echo  → 主人真是变态…那里…那个…会…作品${id}不存在、已被删除或无法下载
  exit 404
fi

# 下载模式选择
if [ "testr$3" == "testr" ];then 
      #没有检测到参数3则询问用户
  if [ "a$all" == "a" ];then 
      #单插图询问
    echo " → 作品${id}含有1张插图
 主人是想怎么狠狠的下载呢？
 [1] 下载（默认）
 [0] 取消下载"
    read -n 1 -p "选择下载方式> " choice
    if [ "a$choice" == "a0" ];then exit 0;else mode=all;fi
    echo
    else
      #多插图询问
    echo " → 作品${id}含有${all}张插图
 主人是想怎么狠狠的下载呢？
 [1] 全部下载（默认）
 [2] 指定下载部分(没做)
 [0] 取消"
    read -n 1 -p "选择下载方式> " choice
    if [ "a$choice" == "a0" ];then exit 0;
    elif [ "a$choice" == "a2" ];then mode=part;
    else 
      mode=all
    fi
  fi
    echo
      #问询部分结束
  echo
  else
  mode=all
fi

# 下载
cd $(pwd)
if [ "$mode" == "part" ];then
      #选择部分下载
  echo 目标路径：$(pwd)/${id}/*.png
  echo todo:暂不支持
  elif [ "a$all" == "a" ];then
      #全部下载（单张）
  echo 目标路径：$(pwd)/${id}.png
  curl -L --output "$(pwd)/${id}.png" "${proxy}${id}.png"
  else
      #全部下载（多张）
  echo 目标路径：$(pwd)/${id}/*.png
  echo
  mkdir "$(pwd)/${id}/"
  let i=0
  while true;do
    i=$(($i+1))
    echo ✲ 正在下载第${i}张，共计${all}张…
    curl -L --output "$(pwd)/${id}/$i.png" "${proxy}${id}-$i.png"
    if [ $i -eq $all ];then break;fi
  done
fi
echo
echo 下载已完成了喵~
echo 无论主人是想prpr还是鉴赏细节，都可以准备好纸巾了呢~
echo 记得关注下原作者哦！
echo https://space.bilibili.com/1987247870
exit 0