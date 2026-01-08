function make_goombas () {
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        goomba = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        animation.runImageAnimation(
        goomba,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . f f d d d d d d d d . . . . 
            . f f f f f d d d d d f f . . . 
            . f f f f f f d d d f f f . . . 
            . . f f f f f d d f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f e e e e e e f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f f f f f f 1 e e e . 
            e e e e 1 f 1 e e 1 f 1 e e e e 
            e e e e 1 1 1 e e 1 1 1 e e e e 
            e e e e e e e e e e e e e e e e 
            . e e e e d d d d d d e e e e . 
            . . . . d d d d d d d d . . . . 
            . . . . d d d d d d d d f f . . 
            . . . f f d d d d d f f f f f . 
            . . . f f f d d d f f f f f f . 
            . . . . f f f d d f f f f f . . 
            `],
        200,
        true
        )
    }
}
let goomba: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`1-1`)
let mario = sprites.create(assets.image`mario`, SpriteKind.Player)
controller.moveSprite(mario)
scene.cameraFollowSprite(mario)
mario.ay = 200
