module.exports = {
    name: 'ban',
    code: `
    
    $ban[$mentioned[1]]
    $title[User Banned]
    $description[User: $username[$mentioned[1]]#$discriminator[$mentioned[1]]
    Moderator: $username[$authorID]#$discriminator[$authorID]
    Reason: $noMentionMessage]
    $color[ff0000]
    $addTimestamp
    $onlyPerms[ban;You need \`BAN_MEMBERS\` permission to use this command]
    $onlyIf[$mentioned[1]!=;You need to mention someone to ban]
    $onlyIf[$noMentionMessage!=;You need to give a reason to ban]
    $onlyIf[$mentioned[1]!=$authorID;You can't ban yourself]
    $onlyIf[$mentioned[1]!=$clientID;Bruh you can't ban me]
    $onlyIf[$mentioned[1]!=$ownerID;You can't ban the Guild owner]
    $suppressErrors[An error occurred, please try again later]


    `
}