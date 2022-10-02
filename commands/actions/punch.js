module.exports = {
    name: 'slap',
    code:
    `
    <@$authorID> punched <@$mentioned[1]>!
    $onlyIf[$isMentioned[$mentioned[1]]==true;<@$authorID>, You need to mention someone you want to punch!]
    
    `
}