import path from "path";
import webpack from "webpack";
import { isDevelopment, isProduction, mainDir, outDir } from "./src/common/vars";

export default function (): webpack.Configuration {
  return {
    target: "electron-main",
    mode: isProduction ? "production" : "development",
    cache: isDevelopment,
    entry: {
      main: path.resolve(mainDir, "index.ts"),
    },
    output: {
      path: outDir,
    },
    resolve: {
      extensions: ['.json', '.js', '.ts']
    },
    externals: [
      "@kubernetes/client-node",
      "handlebars",
      "node-pty",
      "ws",
    ],
    module: {
      rules: [
        {
          test: /\.node$/,
          use: "node-loader"
        },
        {
          test: /\.ts?$/,
          use: "ts-loader",
        },
      ]
    },
  }
}