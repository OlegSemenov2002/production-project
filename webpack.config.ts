<<<<<<< HEAD
import  webpack  from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";


export default (env: BuildEnv) => {

    const  paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build : path.resolve(__dirname, 'build'),
        html : path.resolve(__dirname, 'public', 'index.html')

    }
=======
import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };
>>>>>>> c51b3e9 (eslint and styleeslint)

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

<<<<<<< HEAD
    const isDev = mode === 'development'

    const config : webpack.Configuration = buildWebpackConfig({
=======
    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
>>>>>>> c51b3e9 (eslint and styleeslint)
        mode,
        paths,
        isDev,
        port: PORT,
<<<<<<< HEAD
    })
    return config
}
=======
    });

    return config;
};
>>>>>>> c51b3e9 (eslint and styleeslint)
