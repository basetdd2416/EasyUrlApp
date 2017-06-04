## Objective
EasyUrlApp is make a url for shorten easy to redirect to another page , this app make for demo inspiration from [bitly](https://bitly.com).


## Technologies

### Front-End
* Pug Template engine for produce html
* Boostrap for css

### Back-End
* Express framework

### Required-Pre-Installation
* node
* mongodb

## security issues what are the solutions idea for solved.
1. if someone man in the middle for modification the value of url to danger url what is happened, we can solve the problem by verify the client with token but we can not use the short url in directly for other client may be need to added some token for verify that.
2. before redirect or save url we need to verify the url if url is danger then we reject otherwise we redirect.


## scalability system  what are the solutions idea for solved.
1. Database , if we use mongodb we can run as a cluster for scalability system.
2. Application ,if we have the million requests, we can also use cluster such as pm2 system for run our app in cluster mode.
3. Nginx can also do load balancing our application.


## Installation
```sh
$ git clone https://github.com/basetdd2416/EasyUrlApp.git
$ npm install
$ npm start
```
____