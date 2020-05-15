function consoleToJson(){
    let enemy = {}
    for(let i = 2; i < process.argv.length; i++){
        arg = process.argv[i].split('=')
        enemy[arg[0]] = arg[1] ? arg[1] : true
    }

    return enemy
}

console.log(consoleToJson())