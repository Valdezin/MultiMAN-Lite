module.exports = {
    name: "whois",
    aliases: ["userinfo", "info"],
    code:`
    $author[$userTag[$findUser[$message]];$userAvatar[$findUser[$message]]]
    $description[
    **Username:** $userTag[$findUser[$message]]
    **ID:** $findUser[$message]
    **Account Created:** $creationDate[$findUser[$message];date]
    **Bot:** $replaceText[$replaceText[$checkCondition[$userBot[$findUser[$message]]==true];true;Yes];false;No]

    `
}