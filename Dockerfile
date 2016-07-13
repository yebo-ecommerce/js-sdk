FROM node:4.0.0

# Define User
ENV USER root

# Note: npm is v2.7.6
RUN npm install -g gulp

RUN echo "deb http://us.archive.ubuntu.com/ubuntu/ precise-updates main restricted" | tee -a /etc/apt/sources.list.d/precise-updates.list
RUN apt-get update -qq
RUN apt-get install -y python2.7-dev

# install watchman
RUN \
	git clone https://github.com/facebook/watchman.git &&\
	cd watchman &&\
	git checkout v3.7.0 &&\
	./autogen.sh &&\
	./configure &&\
	make &&\
	make install

# Define APP NAME
ENV APP_HOME /yebo_sdk

# Create folder
RUN mkdir /$APP_HOME

# Define workdir
WORKDIR /$APP_HOME

ADD package.json $APP_HOME
RUN npm install

# Add files
ADD . /$APP_HOME
