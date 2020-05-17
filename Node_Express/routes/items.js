const {Router} = require('express')
const router = Router()

router.get('/', (req, res)=>{
    res.render('items',{
        title: 'Продукты',
        isItems: true
    })
})

module.exports = router