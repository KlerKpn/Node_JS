const http =  require("http")
const fs = require("fs")
const path = require('path')

const server = http.createServer((req, res)=>{                           //req -запрос  res-ответ
    if(req.method === "GET"){                                            //при загрузке страницы вызвается get
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        })

        if(req.url === '/'){                                            //если без конкретной страницы, присваиваем сюда index.html
            fs.readFile(
                path.join(__dirname, 'views', './index.html'),          // а вот и атрибут присваивания
                 'utf-8',
                (err, content) =>{
                    if(err){
                        throw err
                    }
                    res.end(content)                                    //выстраивает контент из файла
                }
            )
        } else if(req.url === '/about'){                                // все аналогично
            fs.readFile(
                path.join(__dirname, 'views', './about.html'),
                 'utf-8',
                (err, content) =>{
                    if(err){
                        throw err
                    }
                    res.end(content)
                }
            )
        } else if(req.url === '/api/users'){
            res.writeHead(200,{
                "Content-Type": "text/html; charset=utf-8"  
            })

            const users = [
                {name: 'KlerKpn', age: '21'},
                {name: 'Margarita', age: '19'}
            ]

            res.end(JSON.stringify(users))
        }

        
    } else if (req.method === "POST"){                                  // если вызван метод пост, делаем троллинг, пока не обрабатывается кириллица
        const body = []
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        })
        req.on('data', data => {
            body.push(Buffer.from(data))
        })

        req.on('end', ()=>{
            const message = (body.toString().split("=")[1])

                res.end(`
            <h1>Жопа: ${message} </h1>                                             
            
            `)
        })
        
        
    }
    
})
server.listen(3000, ()=>{
    console.log("server is running")
})