#!/bin/bash

if [ ! -d ./db/data ] ; then
docker stop mysql-server
docker rm mysql-server
docker stop phpadmin
docker rm phpadmin
docker stop nodejs-container
docker rm nodejs-container
docker-compose down
./start_mysql.sh mysql-net "$PWD"/db
sleep 1
docker stop mysql-server
docker-compose up
else
docker-compose down
docker-compose up
fi