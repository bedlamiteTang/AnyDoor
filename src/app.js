const http = require('http');
const path = require('path');
const chalk = require('chalk').default;
const conf = require('./config/defaultConfig');
const route = require('./helper/route');


const server = http.createServer((req,res)=>{
    const url = req.url;
    const filePath = path.join(conf.root,url);
    route(req,res,filePath);
});

server.listen(conf.port,conf.hostname,()=>{
    const addr = `http://${conf.hostname}:${conf.port}`;
    console.info(chalk.green('server:'),chalk.red(addr));
});
