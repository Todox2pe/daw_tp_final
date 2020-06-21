#!/bin/bash

if [ ! -d ./db/data ] ; then
docker stop mysql-server
./start_mysql.sh mysql-net "$PWD"/db
sleep 1
docker stop mysql-server
docker-compose up
else
docker-compose up
fi