const fs = require('fs')
const path = require('path')

//fs = file system
// Sync - can block streams

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//     if (err) throw new err

//     console.log('Папка создана')
// })

fs.writeFile(
    path.join(__dirname, 'notes' ,'mynotes.txt'),
    'Hell yyeeeaaaah',
    (err) =>{
        if (err) throw err
        console.log('Папка была создана')

        fs.appendFile(path.join(__dirname, 'notes', 'mynotes.txt'),    // add string
            " i'm little better than yesterday",
            (err)=>{
                if (err) throw err
                console.log(' file edited')

                fs.readFile(
                    path.join(__dirname, 'notes' ,'mynotes.txt'),
                    "utf-8",                 
                    (err, data) =>{
                        if(err) throw err
                        console.log(data)    // console.log(Buffer.from(data).toString())   (if no utf-8 param)
                    }
                )
            }
        )  
    }
)

// fs.writeFile(path.join(__dirname, "os_rel.js"),
//     'const os = requare("os")',
//     err =>{
//         if (err) throw err
//         console.log("created os")
//     }
// )

// fs.rename(
//     path.join(__dirname, 'notes', 'notes.txt'),
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     err => {
//         if (err) throw err
//         console.log('Файл переименован')
//     }
// )
