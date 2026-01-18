import path from 'path';
import {fileURLToPath, URL} from 'node:url'
import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import {viteStaticCopy} from "vite-plugin-static-copy";

export default defineConfig(({mode}) => {
    const envDir = path.resolve(__dirname, './../../../../');
    const env = loadEnv(mode, envDir);
    const releaseVersion = JSON.stringify(require('./../../../../package.json').version);
    const outDir = './../../../../../dist/web/site';

    return {
        define: {
            'import.meta.env': env,
            'import.meta.env.VITE_APP_VERSION': releaseVersion,
        },
        envDir,
        root: path.resolve(__dirname, 'src'),
        publicDir: path.resolve(__dirname, 'public'),
        plugins: [
            vue(),
            vueJsx(),
            viteStaticCopy({
                targets: [
                    {
                        src: './../src/public/img/logo/transparent/logo-1024.png',
                        dest: './../../../dist/web/site/img/'
                    },
                    {
                        src: './../src/public/files/Chuloshnikov-Mikhail-Borisovich.en.pdf',
                        dest: './../../../dist/web/site/files/'
                    },
                    {
                        src: './../src/public/files/Chuloshnikov-Mikhail-Borisovich.ru.pdf',
                        dest: './../../../dist/web/site/files/'
                    },
                ]
            }),
            {
                name: 'postprocess-html',
                enforce: 'post',
                generateBundle(_, bundle) {
                    for (const [fileName, asset] of Object.entries(bundle)) {
                        if (fileName.endsWith('index.html') && typeof asset.source === 'string') {
                            const timestamp = Date.now();

                            asset.source = asset.source
                                .replaceAll('/main.js', `main.js?t=${timestamp}`)
                                .replaceAll('/main.css', `main.css?t=${timestamp}`)
                            console.log('✔ modified in-memory bundle:', fileName);
                        }
                    }
                },
            }
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            },
        },
        build: {
            sourcemap: true,
            outDir: outDir,
            emptyOutDir: true,
            rollupOptions: {
                output: {
                    entryFileNames: 'main.js',
                    assetFileNames: (assetInfo) => {
                        if (/\.(png|jpe?g|svg)$/.test(assetInfo.name ?? '')) {
                            return 'img/[name][extname]';
                        }
                        if (assetInfo.name === 'index.css') {
                            return 'main.css';
                        }
                        return '[name].[extname]';
                    },
                    inlineDynamicImports: true
                },
            },
        },
        server: {
            host: '0.0.0.0',
            port: 5173,
            allowedHosts: ['cv.local'],
            watch: {
                usePolling: true,
                interval: 100,
            },
            https: {
                key: env.VITE_SSL_PRIVATE_KEY,
                cert: env.VITE_SSL_CERTIFICATE,
            },
        }
    };
});

