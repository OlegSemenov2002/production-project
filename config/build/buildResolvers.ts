<<<<<<< HEAD
import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions{

    return {
        extensions: ['.tsx', '.ts', '.js'],
    }

}
=======
import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
>>>>>>> c51b3e9 (eslint and styleeslint)
