# Linux String Replace
---
layout: post
title:  "Linux String Replace"
date:   2016-06-22 14:52:24 +0900
categories: linux shell
---
```
# 여러파일내 특정 문자열 치환
find ./ -name "*.ext" -exec sed -i 's/old/new/g' {} \;

# 파일내 특정 문자열 치환
find ./ -name "*.txt" | xargs sed -i 's/old/new/g';

# 파일 내 특정 문자열 치환
:%s/old/new/g
```
