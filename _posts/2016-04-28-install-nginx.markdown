# Install NGINX YUM

## adding nginx repository
add file `/etc/yum.repos.d/nginx.repo`

add content

[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1

## install nginx
```
yum install nginx
```

## set nginx to start on every boot
```
chkconfig nginx on
```

## start nginx
```
service nginx start
```