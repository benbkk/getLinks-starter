import path from 'path';

export default {
    appIndexJs: path.resolve('src/index.js'),
    appComponents: path.resolve('src/components'),
    appConfig: path.resolve('config'),
    appStaticComponent: path.resolve('src/components/Static'),
    appSrc: path.resolve('src'),
    appDist: path.resolve('dist'),
    css: path.resolve('src/css'),
    reducers: path.resolve('src/state/reducers'),
    actions: path.resolve('src/state/actions'),
    constants: path.resolve('src/state/constants'),
    public: path.resolve('public'),
    fonts: path.resolve('public/fonts'),
    state: path.resolve('src/state'),
    store: path.resolve('src/state/store'),
    helpers: path.resolve('src/helpers'),
};
