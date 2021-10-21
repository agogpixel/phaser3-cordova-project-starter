import { DefinePlugin } from 'webpack';
import 'webpack-dev-server';
import webpackMerge from 'webpack-merge';

import commonConfig from './common-config';
import { Config, ConfigOptions, Environment } from './models';

const defaultOptions: Partial<ConfigOptions> = {
  contentSecurityPolicy: "default-src 'self' blob: data: gap: 'unsafe-eval'; style-src 'self' 'unsafe-inline'",
  extractCss: false,
  minimizeCss: false,
  minimizeHtml: false,
  minimizeJs: false
};

const config: Config = (options) => {
  options = { ...defaultOptions, ...options };
  options.meta.title += ` [${Environment.Development}]`;

  return webpackMerge(commonConfig(options), {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
      new DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(Environment.Development)
        }
      })
    ],
    devServer: {
      contentBase: './src',
      host: 'localhost',
      port: 4200,
      compress: true,
      hot: true
    }
  });
};

export default config;
