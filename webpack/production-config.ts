import { DefinePlugin } from 'webpack';
import webpackMerge from 'webpack-merge';

import commonConfig from './common-config';
import { Config, ConfigOptions, Environment } from './models';

const defaultOptions: Partial<ConfigOptions> = {
  contentSecurityPolicy: "default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:",
  extractCss: true,
  minimizeCss: true,
  minimizeHtml: true,
  minimizeJs: true
};

const config: Config = (options) => {
  options = { ...defaultOptions, ...options };

  return webpackMerge(commonConfig(options), {
    mode: 'production',
    devtool: 'hidden-source-map',
    plugins: [
      new DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(Environment.Production)
        }
      })
    ]
  });
};

export default config;
