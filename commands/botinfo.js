module.exports = [{

    name: "botinfo",
    code:
    `
    $title[ Bot Info]
    $thumbnail[$userAvatar[$clientID]]
    $description[
    **Server Name:** $serverName
    **Bot Name:** $userTag[$clientID]
    **Bot ID:** $clientID
    **Bot Owner:** $userTag[$botOwnerID]
    **Bot Owner ID:** $botOwnerID
    **Bot Uptime:** $uptime
    **Bot Ping:** $pingms
    **Bot Creation Date:** $creationDate[$clientID]
    **Bot Invite:** $getBotInvite
    **CPU Usage:** $cpu
    **Memory Usage:** $ram MB
    **Bot Status:** $status
    **Bot Avatar:** $userAvatar[$clientID]
    ]
    
    
    
    
    `
}]