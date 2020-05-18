const {Router} = require('express')
const Item = require('../models/item')
const router = Router()

router.get('/', async (req, res)=>{
    const items = await Item.getAll()
    console.log(items)
    res.render('items',{
        title: 'Продукты',
        isItems: true,
        items
    })
})

module.exports = router