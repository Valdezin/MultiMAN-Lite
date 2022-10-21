module.exports = {
    name: 'avatar',
    aliases: ['av'],
    code:`
    $title[Avatar]
    $author[$username[$mentioned[1;yes]]$userTag[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
    $image[$userAvatar[$mentioned[1;yes]]
    `
}