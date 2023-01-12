import * as Phaser from 'phaser';

export default class SceneTwo extends Phaser.Scene {
  constructor() {
    //Scene reference name
    super('playGame');
  }

  create() {
    this.add.text(100, 100, 'Playing Game...');
    console.log('Hello from Scene Two');

    setTimeout(() => {
      this.scene.start('sceneThree');
    }, 5000);
  }
}
