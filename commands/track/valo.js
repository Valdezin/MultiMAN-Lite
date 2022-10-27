module.exports ={
    name: "track valo",
    aliases: ["track valorant"],
    code: `
    $title[VALORANT Tracker]
 
    $description[
        
    Name: $jsonRequest[https://api.henrikdev.xyz/valorant/v1/account/$splitText[1]/$splitText[2];data.name]
    Tag: $jsonRequest[https://api.henrikdev.xyz/valorant/v1/account/$splitText[1]/$splitText[2];data.tag]
    Account Level: $jsonRequest[https://api.henrikdev.xyz/valorant/v1/account/$splitText[1]/$splitText[2];data.account_level]
    Region: $jsonRequest[https://api.henrikdev.xyz/valorant/v1/account/$splitText[1]/$splitText[2];data.region]

    Rank: $jsonRequest[https://api.henrikdev.xyz/valorant/v1/mmr/ap/$splitText[1]/$splitText[2];data.currenttierpatched]
    ELO: $jsonRequest[https://api.henrikdev.xyz/valorant/v1/mmr/ap/$splitText[1]/$splitText[2];data.elo]

    Player UUID: $jsonRequest[https://api.henrikdev.xyz/valorant/v1/account/$splitText[1]/$splitText[2];data.puuid]
    
    ]
    $color[fa4454]
    $thumbnail[$jsonRequest[https://api.henrikdev.xyz/valorant/v1/account/$splitText[1]/$splitText[2];data.card.small]]

    $textSplit[$message;#] 
    $suppressErrors[404 - Player does not exist.]
    `

    }