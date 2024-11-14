import StyleDictionary from "style-dictionary";
import { register } from '@tokens-studio/sd-transforms';
import ThemesLoader from "sd-themes-loader";

register(StyleDictionary, {
    withSDBuiltins: false,
});

const loader = ThemesLoader(StyleDictionary);

// esto es un comentario

async function main () {
    console.log('Hola mundo');
    const holder = await loader.load("/tokens");

    const config = {
        platforms: {
            web: {
                files: [
                    {
                        destination: 'build/web/global/variables.css',
                        format: 'css/variables'
                    }
                ],
                transforms: [
                    'name/kebab',
                    'ts/resolveMath',
                    'size/pxToRem'
                ]
            },

            android: {
                files: [
                    {
                        destination: 'build/android/global/resources.xml',
                        format: 'android/resources'
                    }
                ],
                transforms: [
                    'name/snake',
                    'ts/resolveMath'
                ]
            }
        }
    };

    holder.getThemeByName('global').addConfig(config).build();

    holder.print();
}

main();