export default class SceneThree extends Phaser.Scene {
  constructor() {
    //Scene reference name
    super('sceneThree');
  }

  create() {
    this.add.text(100, 100, 'Now in Scene Three \n You are awesome!');
    console.log('Hello from Scene Three');
  }
}
