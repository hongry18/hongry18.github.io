# insatll php

## adding WebTatic repository
```
rpm -Uvh http://mirror.webtatic.com/yum/el6/latest.rpm
```

## install php package
```
yum install php56w php56w-cli php56w-common php56w-mbstring php56w-mcrypt php56w-mysqlnd php56w-pdo php56w-fpm php56w-xml php56w-pecl php56w-pear php56w-ladp php56w-gd php56w-devel php56w-geoip php56w-soap
```

## speedup install php package
```
yum install php56w-pecl-zendopcache
```

## set php-fpm to start on every boot
```
chkconfig php-fpm on
```

## start php-fpm
```
service php-fpm start
```