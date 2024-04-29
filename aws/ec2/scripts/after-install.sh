#!/bin/bash
set -xe

export RESPATH=/usr/local/codedeployresources

##############################
# INSTALL HTTPD
##############################
yum update -y
yum install httpd -y

##############################
# CONFIGURE HTTPD
##############################
rm -f /etc/httpd/conf/httpd.conf
cp $RESPATH/httpd.conf /etc/httpd/conf/httpd.conf
cp $RESPATH/site.conf /etc/httpd/conf.d/site.conf
cp $RESPATH/site-ssl.conf /etc/httpd/conf.d/site-ssl.conf.disabled


yum install certbot python3-certbot-apache -y
certbot certonly --apache --non-interactive --agree-tos --email support@lernib.com -d dev.lernib.com

mv /etc/httpd/conf.d/site-ssl.conf.disabled /etc/httpd/conf.d/site-ssl.conf
systemctl restart httpd

mv $RESPATH/site.service /etc/systemd/system/site.service

systemctl enable site
systemctl restart site
systemctl start site

systemctl enable httpd
systemctl start httpd
