import {createVuetify, ThemeDefinition} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { VPullToRefresh } from 'vuetify/labs/VPullToRefresh'

const dark: ThemeDefinition = {
    dark: true,
}

export default createVuetify({
    theme: {
        defaultTheme: 'dark',
        themes: {
            dark: dark,
        },
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    components: {
        ...components,
        VPullToRefresh,
    },
    directives,
});