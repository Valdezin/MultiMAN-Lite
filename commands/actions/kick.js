module.exports = {
    name: 'kick',
    code:
    `
    <@$authorID> kicked <@$mentioned[1]>!
    $onlyIf[$isMentioned[$mentioned[1]]==true;<@$authorID>, You need to mention someone you want to kick!]
    
    `
}