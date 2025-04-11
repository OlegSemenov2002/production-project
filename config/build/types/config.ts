<<<<<<< HEAD

export  type BuildMode = "production" | 'development';

export interface  BuildPaths {
    entry: string;
    build: string;
    html: string;
}
=======
export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

>>>>>>> c51b3e9 (eslint and styleeslint)
export interface BuildEnv {
    mode: BuildMode;
    port: number;
}
<<<<<<< HEAD
=======

>>>>>>> c51b3e9 (eslint and styleeslint)
export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
<<<<<<< HEAD
}
=======
}
>>>>>>> c51b3e9 (eslint and styleeslint)
