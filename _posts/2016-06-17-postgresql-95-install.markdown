---
layout: post
title:  "Postgresql-9.5/PostGIS2.2 Install"
date:   2016-06-01 14:52:24 +0900
categories: postgresql
---

# Postgres And PostGIS Install

```
1. PostgreSQL/PostGIS Install
    1.1 guid URL http://tecadmin.net/install-postgresql-9-5-on-centos/
    1.2
        adding repository PostgreSQL 9.5 

        CentOS/RHEL 7
        # rpm -Uvh http://yum.postgresql.org/9.5/redhat/rhel-7-x86_64/pgdg-centos95-9.5-2.noarch.rpm

        CentOS/RHEL 6
        # rpm -Uvh http://yum.postgresql.org/9.5/redhat/rhel-6-x86_64/pgdg-redhat95-9.5-2.noarch.rpm

        CentOS/RHEL 5
        # rpm -Uvh http://yum.postgresql.org/9.5/redhat/rhel-5-x86_64/pgdg-redhat95-9.5-2.noarch.rpm

        Fedora 23:
        # rpm -Uvh http://yum.postgresql.org/9.5/fedora/fedora-23-x86_64/pgdg-fedora95-9.5-3.noarch.rpm

        Fedora 22
        # rpm -Uvh http://yum.postgresql.org/9.5/fedora/fedora-22-x86_64/pgdg-fedora95-9.5-3.noarch.rpm

        Fedora 21
        # rpm -Uvh http://yum.postgresql.org/9.5/fedora/fedora-21-x86_64/pgdg-fedora95-9.5-2.noarch.rpm
    
    1.3
        Installing PostgreSQL
        # yum install postgresql95 postgresql95-contrib postgresql95-server postgresql95-devel postgresql95-python postgresql95-libs
    
    1.4
        Initializing PGDATA
        # /usr/pgsql-9.5/bin/postgresql95-setup initdb
        
    1.5
        To Start PostgreSQL servie using command as per your opeating systems, enable PostgreSQL service to auto start on system boot.
		
		CentOS/RHEL 7
		# systemctl start postgresl-9.5
		# systemctl enable postgresl-9.5

		CentOS/RHEL 6
		# service postgresql-9.5 start
		# chkconfig postgresql-9.5 on
        
    1.6
        Verify PostgreSQL Installation
        # su postgres
        # psql
        postgres=# ALTER USER "postgres" WITH PASSWORD 'password';
        
    1.7
        Install PostGIS
        # yum install postgis2_95 postgis2_95-client postgis2_95-devel postgis2_95-utils
    
    1.8
        PostGIS Setting
        # su postgres
        # psql
        
        1.8.1
            Enabling PostGIS
            
            -- Enable PostGIS (includes raster)
            CREATE EXTENSION postgis;
            -- Enable Topology
            CREATE EXTENSION postgis_topology;
            -- Enable PostGIS Advanced 3D 
            -- and other geoprocessing algorithms
            -- sfcgal not available with all distributions
            CREATE EXTENSION postgis_sfcgal;
            -- fuzzy matching needed for Tiger
            CREATE EXTENSION fuzzystrmatch;
            -- rule based standardizer
            CREATE EXTENSION address_standardizer;
            -- example rule data set
            CREATE EXTENSION address_standardizer_data_us;
            -- Enable US Tiger Geocoder
            CREATE EXTENSION postgis_tiger_geocoder;

        1.8.2
            Upgrading PostGIS
            
            -- Upgrade PostGIS (includes raster)
            ALTER EXTENSION postgis UPDATE TO "2.2.2";
            -- Upgrade Topology
            ALTER EXTENSION postgis_topology UPDATE TO "2.2.2";
            -- Upgrade US Tiger Geocoder
            ALTER EXTENSION postgis_tiger_geocoder UPDATE TO "2.2.2";
    
        1.8.3
            postgis version check
            
            postgres=# SELECT PostGIS_full_version();
            return "POSTGIS="2.2.2 r14797" GEOS="3.5.0-CAPI-1.9.0 r4084" SFCGAL="1.2.2" PROJ="Rel. 4.8.0, 6 March 2012" GDAL="GDAL 1.11.4, released 2016/01/25" LIBXML="2.9.1" LIBJSON="0.11" TOPOLOGY RASTER"
            Success
```
