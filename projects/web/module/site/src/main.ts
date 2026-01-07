/// <reference path="../../../../../env.d.ts" />

import "../assets/style/global.css";
import "../../../../../node_modules/flag-icons/css/flag-icons.min.css";

import { createApp } from 'vue'
import App from '@/App.vue'
import router from "@/router";
import 'vuetify/styles'
import vuetify from "../../../../common/src/vuetify";
import i18n from "../../../../common/src/i18n";

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(i18n);

app.mount('#app');