const fs = require('fs');
const promisify = require('util').promisify;
const handlebars = require('handlebars');
const path = require('path');
const config = require('../config/defaultConfig');
const stat = promisify(fs.stat);
const readdir = promisify(fs.readdir);

const tplPath = path.join(__dirname,'../template/dir.tpl');
const source = fs.readFileSync(tplPath);
const template = handlebars.compile(source.toString());

module.exports = async function (req,res,filePath) {
    try {
        const stats = await stat(filePath);
        if(stats.isFile()){
            res.statusCode = 200;
            res.setHeader('Content-Type','text/plain');
            fs.createReadStream(filePath).pipe(res);
        }else if(stats.isDirectory()){
            const files = await readdir(filePath);
            res.statusCode = 200;
            res.setHeader('Content-Type','text,plain');
            const data = {
                title: path.basename(filePath),
                dir: path.relative(config.root,filePath),
                files
            };
            res.end(template(data));
        }
    } catch (error) {
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain');
        res.write(error.toString()+'\n');
        res.end(`${filePath} is not a directory or file`);
    }
};
