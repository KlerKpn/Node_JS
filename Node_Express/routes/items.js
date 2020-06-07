const {Router} = require('express')
const Item = require('../models/item')
const router = Router()

router.get('/', async (req, res)=>{
    const items = await Item.getAll()
    res.render('items',{
        title: 'Продукты',
        isItems: true,
        items
    })
})



router.get('/:id/edit', async (req, res)=>{
    if(!req.query.allow){
       return res.redirect('/')
    }

    const item = await Item.getById(req.params.id)

    res.render('item-edit', {
        title: `Редактировать ${item.title}`,
        item
        
    })
})

router.post('/edit', async (req,res) => {
    await Item.update(req.body)
    res.redirect('/items')
})

router.get('/:id', async (req, res) => {
    const item = await Item.getById(req.params.id)
    
   
    res.render('item', {
        layout: 'empty',
        title: item.title ,
        item
    })
})


module.exports = router