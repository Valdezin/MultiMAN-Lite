module.exports = {

    name: 'kick',
    code: `
    
    $kick[$mentioned[1]]
    $title[User Kicked]
    $description[User: $username[$mentioned[1]]#$discriminator[$mentioned[1]]
    Moderator: $username[$authorID]#$discriminator[$authorID]
    Reason: $noMentionMessage]
    $color[ff0000]
    $addTimestamp
    $onlyPerms[kick;You need \`KICK_MEMBERS\` permission to use this command]
    $onlyIf[$mentioned[1]!=;You need to mention someone to kick]
    $onlyIf[$noMentionMessage!=;You need to give a reason to kick]
    $onlyIf[$mentioned[1]!=$authorID;You can't kick yourself]
    $onlyIf[$mentioned[1]!=$clientID;Bruh you can't kick me]
    $onlyIf[$mentioned[1]!=$ownerID;You can't kick the Guild owner]
    $suppressErrors[An error occurred, please try again later]



    `
}