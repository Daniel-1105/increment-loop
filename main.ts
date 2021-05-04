let increase = 0
let mySprite = sprites.create(img`
    . . . . . . . 3 3 3 . . . . . . 
    . . . . . . 3 b 5 3 . . . . . . 
    . . . . 3 3 3 5 5 3 3 3 . . . . 
    . . 3 3 b 3 5 5 5 5 3 3 3 3 . . 
    . 3 b b 5 b 5 5 5 5 b 5 b b 3 . 
    . 3 b 5 5 b b 5 5 b b 5 5 b 3 . 
    . . e 5 5 5 b b b b 5 5 5 3 . . 
    . . e e 5 5 5 5 5 5 5 5 e e . . 
    . . e e e 3 f d d f 3 e e e . . 
    . . e e e 1 f 3 3 f 1 e e e . . 
    . . . e e 3 3 3 3 3 3 e e . . . 
    . . . d d f d d d d f d d . . . 
    . . d 3 3 3 5 3 3 5 3 f 3 d . . 
    . . d d f 5 5 5 5 5 5 f d d . . 
    . . . . 3 3 5 5 5 5 3 3 . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
for (let index = 0; index < 10; index++) {
    pause(200)
    mySprite.x += 1 + increase
    pause(200)
    mySprite.y += -2 - increase
    pause(200)
    mySprite.x += -3 - increase
    pause(200)
    mySprite.y += 4 + increase
    increase += 4
}
