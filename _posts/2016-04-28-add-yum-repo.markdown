# install epel-releas
---
layout: post
title:  "install epel-releas"
date:   2016-04-28 13:52:24 +0900
categories: post
---
1. 먼저 저장소에 epel repo가 있는지 확인한다.
```
yum repolist
```

2. epel-release 설치 확인
```
rpm -qa epel-release
```

3. 없다면 epel-release.noarch 확인
```
yum list epel-release
```

4. epel-release 설치
```
yum install epel-release
```

5. yum update
```
yum update
```
