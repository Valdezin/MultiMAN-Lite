module.exports = {
    name: "guildinfo",
    code:`
    $title[Guild Info]
    
    $description[
    **Guild Name:** $guildName
    **Guild ID:** $guildID
    **Guild Owner:** $userTag[$ownerID]
    **Guild Owner ID:** $ownerID
    **Guild Creation Date:** $creationDate[$guildID;date]
    **Guild Boost Level:** $guildBoostLevel
    **Guild Boost Count:** $guildBoostCount
    **Guild Member Count:** $membersCount
    **Guild Role Count:** $roleCount
    **Guild Channel Count:** $channelCount
    **Guild Icon:** $guildIcon
    ]
    `
}