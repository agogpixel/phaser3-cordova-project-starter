/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * Preload scene.
 *
 * Loads main assets & resources required for the game. Create & update load
 * progress graphics here.
 */
export class PreloadScene extends Phaser.Scene {
  /**
   * Instantiate preload scene.
   */
  public constructor() {
    super('Preload');
  }

  /**
   * Lifecycle method called before all others.
   */
  public init(): void {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  }

  /**
   * Lifecycle method called after init & before create. Ensures all assets load
   * before create is invoked.
   */
  public preload(): void {
    this.load.image('phaser3', require('../../assets/textures/phaser3.png'));
  }

  /**
   * Lifecycle method called after init & preload.
   */
  public create(): void {
    this.scene.transition({
      target: 'Main',
      duration: 500,
      sleep: false,
      allowInput: false,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onUpdate: (progress: number) => {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
      }
    });
  }
}
