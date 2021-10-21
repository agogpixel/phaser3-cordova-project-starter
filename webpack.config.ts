import { version, description } from './package.json';
import developmentConfig from './webpack/development-config';
import productionConfig from './webpack/production-config';
import { Config, ConfigOptions, Platform } from './webpack/models';

const options: ConfigOptions = {
  meta: {
    title: 'Phaser 3 Cordova Project Starter',
    version,
    description
  },
  platform: undefined
};

switch (process.env.PLATFORM) {
  case 'android':
    options.platform = Platform.Android;
    break;
  case 'electron':
    options.platform = Platform.Electron;
    break;
  case 'ios':
    options.platform = Platform.Ios;
    break;
  case 'osx':
    options.platform = Platform.Osx;
    break;
  case 'windows':
    options.platform = Platform.Windows;
    break;
  case 'browser':
  default:
    options.platform = Platform.Browser;
}

let config: Config;

switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    config = productionConfig;
    break;
  case 'dev':
  case 'development':
  default:
    config = developmentConfig;
}

export default config(options);
