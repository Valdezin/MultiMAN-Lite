module.exports = {
    name: "serverinfo",
    code:`
    $title[Server Info]
    $description[
    **Server Name:** $serverName
    **Server ID:** $guildID
    **Server Owner:** $userTag[$ownerID]
    **Server Owner ID:** $ownerID
    **Server Creation Date:** $creationDate[$guildID;date]
    **Server Boost Level:** $serverBoostLevel
    **Server Boost Count:** $serverBoostCount
    **Server Member Count:** $membersCount
    **Server Role Count:** $roleCount
    **Server Channel Count:** $channelCount
    **Server Icon:** $serverIcon
    ]
    `
}