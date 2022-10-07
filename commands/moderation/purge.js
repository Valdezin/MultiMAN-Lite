module.exports = {
    name: "purge",
    code:
    `
    
    $clear[$message[1]]
    $onlyPerms[managemessages;You need \`MANAGE_MESSAGES\` permission to use this command]
    $onlyIf[$message[1]!=;You need to specify the amount of messages to delete]
    $onlyIf[$message[1]<=100;You can only delete up to 100 messages]
    
    `

}