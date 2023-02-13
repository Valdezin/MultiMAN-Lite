module.exports = {
    name: 'jail',
    code:
    `
    $description[
        <@$authorID> jailed <@$mentioned[1]>! :oncoming_police_car: 
            $image[1;https://some-random-api.ml/canvas/overlay/jail?avatar=$replaceText[$userAvatar[$mentioned[1]];webp;png];jailed.png]
    ]
        $onlyIf[$mentioned[1]!=$authorID;You need to mention someone to jail, also you obviously can't jail yourself!]
        
        
    `
}