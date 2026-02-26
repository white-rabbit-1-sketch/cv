<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  mdiTranslate,
  mdiSend,
  mdiWhatsapp,
  mdiLinkedin,
  mdiEmail,
  mdiClose,
  mdiDownload
} from '@mdi/js';
import i18n from "../../../../../../common/src/i18n";

const { locale, t } = useI18n();
const isDialogVisible = ref(false);

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'ru' : 'en';
  i18n.global.locale = locale.value;
  localStorage.setItem('user-locale', locale.value);
};

function downloadPdf() {
  // Путь к файлам в папке public (например, public/Chuloshnikov-Mikhail.en.pdf)
  const fileName = `Chuloshnikov-Mikhail-Borisovich.${locale.value}.pdf`;
  const link = document.createElement('a');
  link.href = `/files/${fileName}`;
  link.download = fileName;
  link.click();
}

onMounted(() => {
  locale.value = localStorage.getItem('user-locale') ?? 'en';
});
</script>

<template>
  <v-app-bar
      flat
      class="resume-app-bar"
  >
    <div class="d-flex align-center w-100 px-4">
      <v-spacer />

      <div class="d-flex align-center">
        <v-btn variant="text" class="lang-switcher-btn font-weight-bold" @click="toggleLanguage">
          <v-icon :icon="mdiTranslate" size="18" class="mr-2 text-primary" />
          <span :class="{ 'text-primary': locale === 'en' }">EN</span>
          <span class="mx-1 opacity-30">/</span>
          <span :class="{ 'text-primary': locale === 'ru' }">RU</span>
        </v-btn>

        <v-btn
            variant="outlined"
            size="small"
            class="ml-4 pdf-download-btn font-weight-bold"
            color="primary"
            @click="downloadPdf"
        >
          <v-icon :icon="mdiDownload" size="18" class="mr-1" />
          PDF
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
    <v-card
        class="pa-6 text-center border-primary-modal"
        color="surface"
        rounded="xl"
        variant="flat"
    >
      <div class="d-flex justify-space-between align-center mb-6">
        <h3 class="text-h5 font-weight-black uppercase tracking-widest text-primary">
          {{ t('l467') }}
        </h3>
        <v-btn :icon="mdiClose" variant="text" size="medium" color="primary" @click="isDialogVisible = false" />
      </div>

      <div class="d-flex flex-column gap-4">
        <v-btn variant="flat" color="blue-darken-3" rounded="lg" size="large" href="https://t.me/dance_with_rabbit" target="_blank" class="text-none font-weight-bold">
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
      </div>
    </v-card>
  </v-dialog>
</template>

<style scoped>
/* Адаптивный AppBar */
.resume-app-bar {
  background: rgba(var(--v-theme-surface), 0.8) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.2) !important;
}

/* Кнопка переключения языков */
.lang-switcher-btn {
  letter-spacing: 1px;
  font-size: 0.8rem;
  /* Адаптивная граница Vuetify */
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 8px;
  min-width: auto;
}

/* Эффект свечения текста primary (мягче на светлой теме) */
.text-primary {
  text-shadow: 0 0 12px rgba(var(--v-theme-primary), 0.3);
}

/* Кнопка скачивания PDF */
.pdf-download-btn {
  background: rgba(var(--v-theme-primary), 0.05) !important;
  border: 1px solid rgba(var(--v-theme-primary), 0.4) !important;
  transition: all 0.3s ease;
}

.pdf-download-btn:hover {
  background: rgba(var(--v-theme-primary), 0.1) !important;
  box-shadow: 0 4px 12px rgba(var(--v-theme-primary), 0.2);
  transform: translateY(-1px);
}

/* Контейнер для кнопок в модалке */
.gap-4 {
  gap: 16px;
}

/* Граница модалки */
.border-primary-modal {
  border: 1px solid rgba(var(--v-theme-primary), 0.3) !important;
}

/* Убираем лишние тени для чистоты дизайна на светлой теме */
:deep(.v-toolbar__content) {
  border-bottom: none !important;
}
</style>