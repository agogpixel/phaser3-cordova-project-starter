import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { resolve } from 'path';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import { DefinePlugin } from 'webpack';
import webpackMerge from 'webpack-merge';

import phaserConfig from './phaser-config';
import { Config, ConfigOptions, Platform } from './models';

const defaultOptions: Partial<ConfigOptions> = {
  contentSecurityPolicy: "default-src 'self'",
  extractCss: false,
  meta: {
    title: 'Default Title',
    version: '0.0.0',
    description: 'Default description.',
    viewport: 'user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
  },
  minimizeCss: false,
  minimizeHtml: false,
  minimizeJs: false,
  phaser: {
    CANVAS_RENDERER: true,
    WEBGL_RENDERER: true,
    EXPERIMENTAL: false,
    PLUGIN_3D: false,
    PLUGIN_CAMERA3D: false,
    PLUGIN_FBINSTANT: false,
    FEATURE_SOUND: true
  }
};

const config: Config = (options) => {
  const { contentSecurityPolicy, extractCss, meta, minimizeCss, minimizeHtml, minimizeJs, phaser, platform } = {
    ...defaultOptions,
    ...options,
    meta: { ...defaultOptions.meta, ...options.meta },
    phaser: { ...defaultOptions.phaser, ...(options.phaser || {}) }
  };

  const srcPath = resolve(`${__dirname}/../src`);
  const dstPath = resolve(`${__dirname}/../www`);

  return webpackMerge(phaserConfig(phaser), {
    mode: 'none',
    entry: {
      index: `${srcPath}/index.ts`
    },
    output: {
      filename: '[name].js',
      path: dstPath
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)$/,
          use: ['ts-loader', 'source-map-loader'],
          include: srcPath,
          exclude: /node_modules/
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: minimizeHtml
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              esModule: false
            }
          }
        },
        {
          test: /\.s?css$/,
          use: [
            extractCss ? { loader: MiniCssExtractPlugin.loader } : { loader: 'style-loader' },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    },
    optimization: {
      minimize: minimizeJs || minimizeCss || undefined,
      minimizer: [
        minimizeJs ? new TerserWebpackPlugin({}) : undefined,
        minimizeCss ? new CssMinimizerPlugin() : undefined
      ].filter(Boolean)
    },
    plugins: [
      new DefinePlugin({
        TITLE: JSON.stringify(meta.title),
        VERSION: JSON.stringify(meta.version),
        'typeof PLATFORM_ANDROID': JSON.stringify(platform === Platform.Android),
        'typeof PLATFORM_BROWSER': JSON.stringify(platform === Platform.Browser),
        'typeof PLATFORM_ELECTRON': JSON.stringify(platform === Platform.Electron),
        'typeof PLATFORM_IOS': JSON.stringify(platform === Platform.Ios),
        'typeof PLATFORM_OSX': JSON.stringify(platform === Platform.Osx),
        'typeof PLATFORM_WINDOWS': JSON.stringify(platform === Platform.Windows)
      }),
      new HtmlWebpackPlugin({
        title: meta.title,
        template: `!!ejs-loader?{"esModule":false}!${srcPath}/index.html`,
        filename: 'index.html',
        inject: 'body',
        templateParameters: {
          contentSecurityPolicy
        },
        minify: {
          minifyCSS: minimizeCss,
          minifyJS: minimizeJs,
          ...(minimizeHtml
            ? {
                collapseWhitespace: true,
                keepClosingSlash: false,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
              }
            : {
                collapseWhitespace: false,
                keepClosingSlash: true,
                removeComments: false,
                removeRedundantAttributes: false,
                removeScriptTypeAttributes: false,
                removeStyleLinkTypeAttributes: false,
                useShortDoctype: false
              })
        },
        meta
      })
    ]
  });
};

export default config;
