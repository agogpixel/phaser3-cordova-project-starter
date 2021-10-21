// See DefinePlugin in webpack configs.
declare const TITLE: string;
declare const VERSION: string;
declare const PLATFORM_ANDROID: boolean;
declare const PLATFORM_BROWSER: boolean;
declare const PLATFORM_ELECTRON: boolean;
declare const PLATFORM_IOS: boolean;
declare const PLATFORM_OSX: boolean;
declare const PLATFORM_WINDOWS: boolean;

(async function bootstrap() {
  const { phaserFactory } = await import(/* webpackChunkName: "phaser" */ './phaser');
  await phaserFactory();

  const { app, gameConfig } = await import(/* webpackChunkName: "app" */ './app');

  if (typeof PLATFORM_ANDROID) {
    //
  }

  if (typeof PLATFORM_BROWSER) {
    //
  }

  if (typeof PLATFORM_ELECTRON) {
    //
  }

  if (typeof PLATFORM_IOS) {
    //
  }

  if (typeof PLATFORM_OSX) {
    //
  }

  if (typeof PLATFORM_WINDOWS) {
    //
  }

  await app({ ...gameConfig, title: TITLE, version: VERSION });
})();
