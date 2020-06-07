const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const itemsRoutes = require('./routes/items')
const addRoutes = require('./routes/add')


const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',     // основной файл, имя так же любое
    extname: 'hbs'             // default extname
})

app.engine('hbs', hbs.engine)  // регистрируем движок
app.set('view engine', 'hbs')  // начинаем использовать
app.set('views', 'views')      // (переменная, указываем путь(по умолчанию так же views))


app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use('/', homeRoutes)
app.use('/items', itemsRoutes)
app.use('/add', addRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})