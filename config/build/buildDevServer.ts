<<<<<<< HEAD
import {BuildOptions} from "./types/config";
import {Configuration as DevServerConfiguration} from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration{
=======
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
>>>>>>> c51b3e9 (eslint and styleeslint)
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
<<<<<<< HEAD

    }

}
=======
        hot: true,
    };
}
>>>>>>> c51b3e9 (eslint and styleeslint)
