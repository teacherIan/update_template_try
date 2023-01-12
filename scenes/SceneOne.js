export default class SceneOne extends Phaser.Scene {
  constructor() {
    //Scene reference name
    super('loadGame');
  }

  create() {
    this.add.text(100, 100, 'Loading Game...');
    console.log('Hello from Scene One');

    this.scene.start('playGame');
  }
}
