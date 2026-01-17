<script setup>
import {onActivated, onMounted, ref} from 'vue';
import { useI18n } from 'vue-i18n';
import {
  mdiTranslate,
  mdiSend,
  mdiWhatsapp,
  mdiLinkedin,
  mdiEmail,
  mdiClose
} from '@mdi/js';
import i18n from "../../../../../../common/src/i18n";

const { locale, t } = useI18n();
const isDialogVisible = ref(false); // Состояние попапа

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'ru' : 'en';
  i18n.global.locale = locale.value;
  localStorage.setItem('user-locale', locale.value);
  console.log(locale.value);
};

onMounted(() => {
  locale.value = localStorage.getItem('user-locale') ?? 'en';
  console.log(locale.value);
});
</script>

<template>
  <v-app-bar
      flat
      color="rgba(18, 18, 18, 0.8)"
      style="backdrop-filter: blur(10px); border-bottom: 1px solid rgba(var(--v-theme-primary), 0.2) !important;"
  >
    <div class="d-flex align-center w-100 px-10">

      <v-spacer />

      <div class="d-flex align-center">
        <v-btn variant="text" class="lang-switcher-btn font-weight-bold" @click="toggleLanguage">
          <v-icon :icon="mdiTranslate" size="18" class="mr-2 text-primary" />
          <span :class="{ 'text-primary': locale === 'en' }">EN</span>
          <span class="mx-1 opacity-30">/</span>
          <span :class="{ 'text-primary': locale === 'ru' }">RU</span>
        </v-btn>

        <v-btn
            color="primary"
            variant="flat"
            size="small"
            class="ml-4 font-weight-bold"
            @click="isDialogVisible = true"
        >
          {{ t('l471') }}
        </v-btn>
      </div>
    </div>
  </v-app-bar>

  <v-dialog v-model="isDialogVisible" max-width="450">
    <v-card class="pa-6 text-center border-primary" color="grey-darken-4" theme="dark" rounded="xl" variant="outlined" style="background: #121212 !important;">
      <div class="d-flex justify-space-between align-center mb-6">
        <h3 class="text-h5 font-weight-black uppercase tracking-widest text-primary">{{t('l467')}}</h3>
        <v-btn :icon="mdiClose" variant="text" size="medium" color="primary" @click="isDialogVisible = false" />
      </div>

      <div class="d-flex flex-column gap-4">
        <v-btn variant="flat" color="white" rounded="lg" size="large" href="https://t.me/dance_with_rabbit" target="_blank" class="text-none font-weight-bold text-black">
          <template v-slot:prepend><v-icon :icon="mdiSend" /></template>
          {{ t('l8') }}
        </v-btn>

        <v-btn variant="flat" color="#25D366" rounded="lg" size="large" href="https://wa.me/+37493510616" target="_blank" class="text-none font-weight-bold text-white">
          <template v-slot:prepend><v-icon :icon="mdiWhatsapp" /></template>
          {{ t('l9') }}
        </v-btn>

        <v-btn variant="flat" color="#0077B5" rounded="lg" size="large" href="https://www.linkedin.com/in/mikhail-chuloshnikov-176792286/" target="_blank" class="text-none font-weight-bold text-white">
          <template v-slot:prepend><v-icon :icon="mdiLinkedin" /></template>
          {{ t('l10') }}
        </v-btn>

        <v-btn variant="outlined" rounded="lg" size="large" href="mailto:cv@fkitty.com" class="text-none border-white text-white mt-2">
          <template v-slot:prepend><v-icon :icon="mdiEmail" /></template>
          {{ t('l11') }}
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.gap-4 {
  gap: 16px;
}

.lang-switcher-btn {
  letter-spacing: 1px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  min-width: auto;
}

.text-primary {
  text-shadow: 0 0 8px rgba(var(--v-theme-primary), 0.5);
}

/* Сделаем бордер модалки чуть ярче в стиле киберпанка */
.border-primary {
  border: 1px solid rgba(var(--v-theme-primary), 0.5) !important;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
</style>