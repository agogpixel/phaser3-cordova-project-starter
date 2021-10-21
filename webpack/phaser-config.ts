import { DefinePlugin } from 'webpack';

import { PhaserConfig, PhaserConfigOptions } from './models';

const defaultOptions: PhaserConfigOptions = {
  CANVAS_RENDERER: true,
  WEBGL_RENDERER: true,
  EXPERIMENTAL: false,
  PLUGIN_3D: false,
  PLUGIN_CAMERA3D: false,
  PLUGIN_FBINSTANT: false,
  FEATURE_SOUND: true
};

const config: PhaserConfig = (options = {}) => {
  const { CANVAS_RENDERER, WEBGL_RENDERER, EXPERIMENTAL, PLUGIN_3D, PLUGIN_CAMERA3D, PLUGIN_FBINSTANT, FEATURE_SOUND } =
    { ...defaultOptions, ...options };

  return {
    plugins: [
      new DefinePlugin({
        'typeof CANVAS_RENDERER': JSON.stringify(CANVAS_RENDERER),
        'typeof WEBGL_RENDERER': JSON.stringify(WEBGL_RENDERER),
        'typeof EXPERIMENTAL': JSON.stringify(EXPERIMENTAL),
        'typeof PLUGIN_3D': JSON.stringify(PLUGIN_3D),
        'typeof PLUGIN_CAMERA3D': JSON.stringify(PLUGIN_CAMERA3D),
        'typeof PLUGIN_FBINSTANT': JSON.stringify(PLUGIN_FBINSTANT),
        'typeof FEATURE_SOUND': JSON.stringify(FEATURE_SOUND)
      })
    ]
  };
};

export default config;
