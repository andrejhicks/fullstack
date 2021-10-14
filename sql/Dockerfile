#Create MySQL Image for Contact List
FROM mysql

ENV MYSQL_ROOT_PASSWORD mydbpassword
ADD createdb.sql /docker-entrypoint-initdb.d

EXPOSE 3306