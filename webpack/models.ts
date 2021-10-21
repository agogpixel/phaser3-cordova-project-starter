import { Configuration } from 'webpack';

export enum Platform {
  Android = 'android',
  Browser = 'browser',
  Electron = 'electron',
  Ios = 'ios',
  Osx = 'osx',
  Windows = 'windows'
}

export enum Environment {
  Development = 'development',
  Production = 'production'
}

export interface Metadata extends Record<string, string> {
  title: string;
  version: string;
}

export interface PhaserConfigOptions {
  CANVAS_RENDERER?: boolean;
  WEBGL_RENDERER?: boolean;
  EXPERIMENTAL?: boolean;
  PLUGIN_3D?: boolean;
  PLUGIN_CAMERA3D?: boolean;
  PLUGIN_FBINSTANT?: boolean;
  FEATURE_SOUND?: boolean;
}

export type PhaserConfig = (options: PhaserConfigOptions) => Configuration;

export interface ConfigOptions {
  contentSecurityPolicy?: string;
  extractCss?: boolean;
  meta: Metadata;
  minimizeCss?: boolean;
  minimizeHtml?: boolean;
  minimizeJs?: boolean;
  phaser?: PhaserConfigOptions;
  platform: Platform;
}

export type Config = (options: ConfigOptions) => Configuration;
