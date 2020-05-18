const uuid = require('uuid').v4
const fs = require('fs')
const path = require('path')

class Item {
    constructor(title, description, price, img){
        this.title = title
        this.description = description
        this.price = price
        this.img = img
        this.id = uuid()
    }

    toJson(){
        return {
        title:  this.title ,
        description: this.description,
        price: this.price,
        img: this.img,
        id: this.id
        }
    }

    async save(){
        const items = await Item.getAll()
        items.push(this.toJson())
        return new Promise((resolve, reject)=>{
            fs.writeFile(
                path.join(__dirname, '..', 'data', 'items.json'),
                JSON.stringify(items),
                (err)=>{
                    if(err){
                        reject(err)
                    } else{
                        resolve()
                    }
                
                }
            )
        })
    }

    static getAll(){
        return new Promise ((resolve, reject)=>{
            fs.readFile(
                path.join(__dirname, '..', 'data', 'items.json'),
                'utf-8',
                (err, content)=>{
                    if(err) {
                        reject(err)
                    }else{
                        resolve(JSON.parse(content))
                    }
                }
            ) 
        })
    }
}

module.exports = Item