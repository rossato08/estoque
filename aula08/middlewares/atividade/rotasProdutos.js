const express = require('express');
const router = express.Router();


const logger = (req, res, next)=>{
    const data = new Date();
    console.log(`[${data.toISOString()}] ${req.method} ${req.url}`)
    next()
};

router.use(logger);


router.get('/' , (req,res)=>{
    res.status(200).send('Lista de produtos')
});





module.exports = router