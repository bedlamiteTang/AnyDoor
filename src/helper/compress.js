const {createGzip, createDeflate} = require('zlib');

module.exports = (rs, req, res) =>{
    const acceptEncoding = req.headers['accept-encoding'];
    if (!acceptEncoding || acceptEncoding.match(/\b(gzip|deflate)\b/)){
        return rs;
    }else if(acceptEncoding.match(/\bgzip\b/)){
        req.setHeader('accept-encoding','gzip');
        return rs.pipe(createGzip());
    }else if(acceptEncoding.match(/\bdeflate\b/)){
        req.setHeader('accept-encoding','deflate');
        return rs.pipe(createDeflate());
    }

};
