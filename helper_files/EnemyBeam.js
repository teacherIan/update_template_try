export default class EnemyBeam extends Phaser.GameObjects.Sprite {
  constructor(scene, shipX, shipY, angle) {
    var x = shipX;
    var y = shipY;

    super(scene, x, y, 'beam');

    scene.add.existing(this);

    this.play('beam');
    scene.physics.world.enableBody(this);

    this.setScale(2);

    scene.enemyProjectiles.add(this);
  }

  update() {
    if (this.y < 32) {
      this.destroy();
    }
  }
}
