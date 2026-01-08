function make_goombas () {
	
}
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`1-1`)
let mario = sprites.create(assets.image`mario`, SpriteKind.Player)
controller.moveSprite(mario)
scene.cameraFollowSprite(mario)
mario.ay = 200
