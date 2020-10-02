#!/bin/bash

# Update EC2 and install java, git, maven
sudo yum -y update
sudo yum remove -y java
sudo yum install -y java-1.8.0-openjdk-devel
java -version
echo $JAVA_HOME

sudo yum -y install git
whereis git

sudo wget http://repos.fedorapeople.org/repos/dchen/apache-maven/epel-apache-maven.repo -O /etc/yum.repos.d/epel-apache-maven.repo
sudo sed -i s/\$releasever/6/g /etc/yum.repos.d/epel-apache-maven.repo
sudo yum install -y apache-maven
mvn --version

# Download Jenkins
wget https://updates.jenkins-ci.org/stable/latest/jenkins.war

# Configure Tomcat
wget https://mirrors.gigenet.com/apache/tomcat/tomcat-8/v8.5.58/bin/apache-tomcat-8.5.58.tar.gz
tar -zxvf apache-tomcat-8.5.58.tar.gz 
cp jenkins.war apache-tomcat-8.5.58/webapps/
sh apache-tomcat-8.5.58/bin/startup.sh
