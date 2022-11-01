module.exports ={
    name: ".track minecraft",
    aliases: [".track mc"],
    code: `
    $title[Minecraft Tracker]
 
    $description[
        
Name: $jsonRequest[https://api.mojang.com/users/profiles/minecraft/$message[1];name]
UUID: $jsonRequest[https://api.mojang.com/users/profiles/minecraft/$message[1];id]
    
    ]
    $color[00ff00]
    $thumbnail[https://crafatar.com/avatars/$jsonRequest[https://api.mojang.com/users/profiles/minecraft/$message[1];id]?size=100]
    $suppressErrors[404 - Player does not exist.]
    `

    }