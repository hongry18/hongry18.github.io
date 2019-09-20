# install mariadb repo
# adding mariadb 10 YUM repository

add file path `/etc/yum.repos.d/MariaDB.repo`

```
[mariadb]
name = MariaDB
baseurl = http://yum.mariadb.org/10.1/centos6-amd64
gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
gpgcheck=1
```

<!--more-->

## Manually Importing the MariaDB Signing Key
```
rpm --import https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
```

## yum install MariaDB-server MariaDB-client
```
yum install MariaDB-server MariaDB-client
```

## set MariaDB to start on every boot
```
chkconfig mysql on
```

## start MariaDB
```
service mysql start
```

## Secure your MariaDB installation. The following checklist shows the steps that will be performed.
```
mysql_secure_installation
```

## restart MariaDB
```
service mysql restart
```
