
const {Router} = require('express')
const router = Router()
const Item = require('../models/item')

router.get('/', (req, res)=>{
    res.render('add',{
        title: 'Новый продукт',
        isAdd: true
    })    
})

router.post('/', async (req, res)=>{
    const item = new Item(req.body.title, req.body.description, req.body.price, req.body.img)
    await item.save()
    res.redirect('/items')
})

module.exports = router