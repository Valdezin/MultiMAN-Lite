module.exports = {
    name: 'roundhouse',
    code:
    `
    <@$authorID> roundhoused <@$mentioned[1]>!
    $onlyIf[$isMentioned[$mentioned[1]]==true;<@$authorID>, You need to mention someone you want to roundhouse!]
    
    `
}