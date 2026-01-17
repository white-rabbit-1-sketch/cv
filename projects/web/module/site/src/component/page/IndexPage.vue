<script setup>
import {
  mdiConsoleLine,
  mdiShieldBugOutline,
  mdiDatabaseOutline,
  mdiCellphoneLink,
  mdiGithub,
  mdiSend,
  mdiEmail,
  mdiMapMarkerOutline,
  mdiBriefcaseVariantOutline,
  mdiCodeTags,
  mdiChartBar,
  mdiCogs,
  mdiOpenInNew,
  mdiScriptTextOutline,
  mdiFileDocumentOutline,
  mdiCodeBraces,
  mdiServerNetwork,
  mdiBookOpenVariant,
  mdiCodeBrackets,
  mdiCertificate,
  mdiElephant,
  mdiPostOutline,
  mdiArrowRight,
  mdiLanguageCpp,
  mdiLanguagePython,
  mdiShieldCheck,
  mdiAutoFix,
  mdiMicrophone,
  mdiClosedCaption,
  mdiSync,
  mdiBrain,
  mdiApple,
  mdiAndroid,
  mdiGoogleChrome,
  mdiServer,
  mdiDna,
  mdiGraphOutline,
  mdiDatabaseCog,
  mdiCpu64Bit,
  mdiShieldBug,
  mdiHistory,
  mdiXml,
  mdiGhost,
  mdiBugOutline, mdiTrophyVariantOutline, mdiInformationOutline,
  mdiTarget,
  mdiChartTimelineVariant,
  mdiSecurity,
  mdiAccountGroupOutline,
  mdiWall,
  mdiLanguagePhp,
  mdiLanguageGo,
  mdiCheckDecagram,
  mdiTrophyOutline,
  mdiShieldCheckOutline,
  mdiRocketLaunchOutline,
  mdiBankOutline,
  mdiBugCheckOutline,
  mdiSchoolOutline,
  mdiCertificateOutline,
  mdiCounter, mdiWhatsapp, mdiLinkedin,
  mdiChevronDown,
  mdiChevronUp,
} from "@mdi/js"
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import zendImage from '@/public/img/zend.png'
import {useI18n} from "vue-i18n";
import Header from "@/component/layout/Header.vue";

const { t } = useI18n();

const route = useRoute()

const showFullExperience = ref(false)
const showFullStack = ref(false)

onMounted(() => {
  if (route.query.expand !== undefined) {
    showFullExperience.value = true
    showFullStack.value = true
  }
})
</script>

<template>
  <div class="layout">
    <div class="header">
      <Header />
    </div>
    <div class="content pl-10 pr-10 pb-10">
      <div class="glow-bg"></div>
      <section class="hero-section mb-16 animate-up">
        <v-row align="center">
          <v-col cols="12" md="8">
            <div class="d-flex flex-wrap align-center mb-4 gap-2">
              <v-chip
                  color="#FF9800"
                  variant="flat"
                  size="small"
                  class="text-uppercase font-weight-bold tracking-widest px-4"
              >
                {{ t('l1') }}
              </v-chip>

              <v-chip
                  color="#00C853"
                  variant="flat"
                  size="small"
                  class="text-uppercase font-weight-bold tracking-widest px-4"
              >
                {{ t('l2') }}
              </v-chip>



              <v-chip
                  color="primary"
                  variant="flat"
                  size="small"
                  class="text-uppercase font-weight-bold tracking-widest px-4"
              >
                {{ t('l3') }}
              </v-chip>

              <v-chip
                  color="#7C4DFF"
                  variant="flat"
                  size="small"
                  class="text-uppercase font-weight-bold tracking-widest px-4"
              >
                {{ t('l4') }}
              </v-chip>

              <span class="ml-2 text-grey text-caption d-none d-sm-inline opacity-60">
        </span>
            </div>

            <h1 class="name-title mb-4">{{ t('l5') }}</h1>

            <h2 class="text-h4 font-weight-bold text-white mb-6">
              <span v-html="t('l6')"></span>
            </h2>

            <p class="hero-desc mb-6 text-grey-lighten-1" style="max-width: 650px; font-size: 1.1rem; line-height: 1.6;">
              <span v-html="t('l7')"></span>
            </p>

            <div class="d-flex flex-wrap gap-4">
              <div class="d-flex flex-wrap gap-4">
                <v-btn variant="flat" color="white" rounded="lg" size="large" href="https://t.me/dance_with_rabbit" target="_blank" class="text-none font-weight-bold black-text">
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

                <v-btn variant="outlined" rounded="lg" size="large" href="mailto:cv@fkitty.com" class="text-none border-white">
                  <template v-slot:prepend><v-icon :icon="mdiEmail" /></template>
                  {{ t('l11') }}
                </v-btn>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="4" class="d-flex justify-md-end">
            <div class="status-box pa-6 w-100" style="max-width: 320px;">
              <div class="text-overline text-grey-darken-1 mb-4 tracking-widest text-uppercase" style="font-size: 0.65rem;">Candidate Status</div>

              <div class="d-flex align-center mb-3">
                <v-icon :icon="mdiMapMarkerOutline" size="small" class="mr-3 text-primary" />
                <span class="text-body-2 text-grey-lighten-2">{{ t('l12') }}</span>
              </div>

              <div class="d-flex align-center mb-3">
                <v-icon :icon="mdiBriefcaseVariantOutline" size="small" class="mr-3 text-primary" />
                <span class="text-h6 text-white font-weight-black">6,000+ € <span class="text-body-2 text-grey font-weight-medium">{{t('l468')}}</span></span>
              </div>

              <div class="d-flex align-center mb-3">
                <v-icon :icon="mdiFileDocumentOutline" size="small" class="mr-3 text-primary" />
                <span class="text-body-2 text-grey-lighten-2">{{ t('l13') }}</span>
              </div>

              <v-divider class="my-4" opacity="0.1" />

              <div class="d-flex justify-space-between align-center">
                <span class="text-caption text-grey">{{t('l469')}}</span>
                <v-chip size="x-small" variant="tonal" color="success" class="font-weight-bold px-2">{{ t('l14') }}</v-chip>
              </div>
            </div>
          </v-col>
        </v-row>
      </section>

      <section class="mb-16 animate-up" style="animation-delay: 0.1s;">

        <v-row>
          <v-col cols="12">
            <v-card variant="outlined" class="role-focus-card pa-8">
              <v-row>
                <v-col cols="12" md="6">
                  <h2 class="text-h4 font-weight-black mb-6 d-flex align-center">
                    <v-icon :icon="mdiTarget" color="primary" class="mr-3" />
                    {{ t('l15') }}
                  </h2>
                  <p class="text-body-1 text-grey-lighten-1 mb-6" style="line-height: 1.8;">
                    {{ t('l16') }}
                  </p>

                  <div class="d-flex flex-column gap-3">
                    <div class=" d-flex align-center">
                      <v-icon :icon="mdiChartTimelineVariant" size="small" color="primary" class="mr-3" />
                      <span v-html="t('l17')"></span>
                    </div>
                    <div class="d-flex align-center mt-4">
                      <v-icon :icon="mdiWall" size="small" color="primary" class="mr-3" />
                      <span v-html="t('l18')"></span>
                    </div>
                    <div class="d-flex align-center mt-4">
                      <v-icon :icon="mdiSecurity" size="small" color="primary" class="mr-3" />
                      <span v-html="t('l19')"></span>
                    </div>
                  </div>


                </v-col>

                <v-col cols="12" md="6" class="border-left-md px-md-8">
                  <h2 class="text-h4 font-weight-black mb-6">{{t('l470')}}</h2>
                  <v-list bg-color="transparent" class="pa-0">
                    <v-list-item class="px-0 mb-4">
                      <template v-slot:prepend>
                        <v-avatar color="rgba(255, 152, 0, 0.1)" rounded="lg" class="mr-4">
                          <v-icon :icon="mdiCodeBraces" color="#FF9800" />
                        </v-avatar>
                      </template>
                      <v-list-item-title class="text-h6 font-weight-bold">{{ t('l20') }}</v-list-item-title>
                      <v-list-item-subtitle class="text-grey">{{ t('l21') }}</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item class="px-0 mb-4">
                      <template v-slot:prepend>
                        <v-avatar color="rgba(0, 200, 83, 0.1)" rounded="lg" class="mr-4">
                          <v-icon :icon="mdiServerNetwork" color="#00C853" />
                        </v-avatar>
                      </template>
                      <v-list-item-title class="text-h6 font-weight-bold">{{ t('l22') }}</v-list-item-title>
                      <v-list-item-subtitle class="text-grey">{{ t('l23') }}</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item class="px-0 mb-4">
                      <template v-slot:prepend>
                        <v-avatar color="rgba(33, 150, 243, 0.1)" rounded="lg" class="mr-4">
                          <v-icon :icon="mdiAccountGroupOutline" color="primary" />
                        </v-avatar>
                      </template>
                      <v-list-item-title class="text-h6 font-weight-bold">{{ t('l24') }}</v-list-item-title>
                      <v-list-item-subtitle class="text-grey">{{ t('l25') }}</v-list-item-subtitle>
                    </v-list-item>

                    <v-list-item class="px-0">
                      <template v-slot:prepend>
                        <v-avatar color="rgba(124, 77, 255, 0.1)" rounded="lg" class="mr-4">
                          <v-icon :icon="mdiCogs" color="#7C4DFF" />
                        </v-avatar>
                      </template>
                      <v-list-item-title class="text-h6 font-weight-bold">{{ t('l26') }}</v-list-item-title>
                      <v-list-item-subtitle class="text-grey">{{ t('l27') }}</v-list-item-subtitle>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <section class="mb-16 animate-up" style="animation-delay: 0.2s;">

        <div class="d-flex align-center mb-4">
          <div class="section-icon-wrap mr-4">
            <v-icon :icon="mdiCpu64Bit" color="primary" size="32" />
          </div>
          <div>
            <h2 class="text-h3 font-weight-black text-uppercase tracking-widest mb-1">{{ t('l28') }}</h2>
            <div class="text-subtitle-2 text-primary opacity-70">{{ t('l29') }}</div>
          </div>
          <v-divider class="ml-6 border-opacity-25" />
        </div>

        <v-row>
          <v-col cols="12" md="4">
            <v-card variant="outlined" class="stack-card h-100 pa-6">
              <div class="d-flex align-center mb-4">
                <v-avatar color="rgba(119, 123, 180, 0.1)" rounded="lg" size="48" class="mr-4">
                  <v-icon :icon="mdiLanguagePhp" color="#777BB4" size="32" />
                </v-avatar>
                <div>
                  <div class="text-h6 font-weight-black">{{ t('l30') }}</div>
                  <div class="text-caption text-primary font-weight-bold uppercase">{{ t('l31') }}</div>
                </div>
              </div>
              <p class="text-body-2 text-grey-lighten-1 mb-4">{{ t('l32') }}</p>
              <div class="d-flex flex-wrap gap-2">
                <v-chip size="x-small" variant="outlined" color="primary">{{ t('l33') }}</v-chip>
                <v-chip size="x-small" variant="outlined" color="primary">{{ t('l34') }}</v-chip>
                <v-chip size="x-small" variant="outlined" color="primary">{{ t('l35') }}</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card variant="outlined" class="stack-card h-100 pa-6">
              <div class="d-flex align-center mb-4">
                <v-avatar color="rgba(0, 173, 216, 0.1)" rounded="lg" size="48" class="mr-4">
                  <v-icon :icon="mdiLanguageGo" color="#00ADD8" size="32" />
                </v-avatar>
                <div>
                  <div class="text-h6 font-weight-black">{{ t('l36') }}</div>
                  <div class="text-caption text-blue font-weight-bold uppercase">{{ t('l37') }}</div>
                </div>
              </div>
              <p class="text-body-2 text-grey-lighten-1 mb-4">{{ t('l38') }}</p>
              <div class="d-flex flex-wrap gap-2">
                <v-chip size="x-small" variant="outlined" color="blue">{{ t('l39') }}</v-chip>
                <v-chip size="x-small" variant="outlined" color="blue">{{ t('l40') }}</v-chip>
                <v-chip size="x-small" variant="outlined" color="blue">{{ t('l41') }}</v-chip>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card variant="outlined" class="stack-card h-100 pa-6">
              <div class="d-flex align-center mb-4">
                <v-avatar color="rgba(55, 118, 171, 0.1)" rounded="lg" size="48" class="mr-4">
                  <v-icon :icon="mdiLanguagePython" color="#3776AB" size="32" />
                </v-avatar>
                <div>
                  <div class="text-h6 font-weight-black">{{ t('l42') }}</div>
                  <div class="text-caption text-blue font-weight-bold uppercase">{{ t('l37') }}</div>
                </div>
              </div>
              <p class="text-body-2 text-grey-lighten-1 mb-4">{{ t('l44') }}</p>
              <div class="d-flex flex-wrap gap-2">
                <v-chip size="x-small" variant="outlined" color="blue">{{ t('l45') }}</v-chip>
                <v-chip size="x-small" variant="outlined" color="blue">{{ t('l46') }}</v-chip>
                <v-chip size="x-small" variant="outlined" color="blue">{{ t('l47') }}</v-chip>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <section class="mb-16 animate-up">
        <div class="d-flex justify-center mb-8">
          <v-btn
              variant="outlined"
              color="primary"
              size="large"
              class="full-stack-btn"
              @click="showFullStack = !showFullStack"
              :prepend-icon="showFullStack ? mdiMenuUp : mdiMenuDown"
          >
            {{ showFullStack ? t('l48') : t('l49') }}
          </v-btn>
        </div>

        <v-expand-transition>
          <div v-show="showFullStack">
            <div class="d-flex align-center mb-8 info-banner pa-4">
              <v-icon :icon="mdiInformationOutline" color="primary" class="mr-3" />
              <span class="text-body-2 text-grey-lighten-1">
            <strong>{{ t('l50') }}</strong> {{ t('l51') }}
          </span>
            </div>

            <div class="full-stack-content">
              <v-row class="g-4">
                <v-col cols="12" lg="4">
                  <v-card variant="outlined" class="tech-card h-100 pa-6">
                    <div class="d-flex align-center mb-6">
                      <v-icon :icon="mdiCodeBraces" color="#7C4DFF" class="mr-3" />
                      <span class="text-overline tracking-widest font-weight-bold">{{ t('l52') }}</span>
                    </div>

                    <div class="tech-group mb-6">
                      <div class="d-flex justify-space-between align-center mb-2">
                        <span class="group-title">{{ t('l53') }}</span>
                      </div>
                      <div class="tech-tags">
                        {{ t('l54') }}
                      </div>
                    </div>

                    <div class="tech-group mb-6">
                      <span class="group-title">{{ t('l55') }}</span>
                      <div class="tech-tags">
                        {{ t('l56') }}
                      </div>
                    </div>

                    <div class="tech-group">
                      <span class="group-title">{{ t('l57') }}</span>
                      <div class="tech-tags">
                        {{ t('l58') }}
                      </div>
                    </div>
                  </v-card>
                </v-col>

                <v-col cols="12" lg="4">
                  <v-card variant="outlined" class="tech-card h-100 pa-6">
                    <div class="d-flex align-center mb-6">
                      <v-icon :icon="mdiServerNetwork" color="#00C853" class="mr-3" />
                      <span class="text-overline tracking-widest font-weight-bold">{{ t('l59') }}</span>
                    </div>

                    <div class="tech-group mb-6">
                      <span class="group-title">{{ t('l60') }}</span>
                      <div class="tech-tags">
                        {{ t('l61') }}
                      </div>
                    </div>

                    <div class="tech-group mb-6">
                      <span class="group-title">{{ t('l62') }}</span>
                      <div class="tech-tags">
                        {{ t('l63') }}
                      </div>
                    </div>

                    <div class="tech-group mb-6">
                      <span class="group-title">{{ t('l64') }}</span>
                      <div class="tech-tags">
                        {{ t('l65') }}
                      </div>
                    </div>

                    <div class="tech-group">
                      <span class="group-title">{{ t('l66') }}</span>
                      <div class="tech-tags">
                        {{ t('l67') }}
                      </div>
                    </div>
                  </v-card>
                </v-col>

                <v-col cols="12" lg="4">
                  <v-card variant="outlined" class="tech-card h-100 pa-6">
                    <div class="d-flex align-center mb-6">
                      <v-icon :icon="mdiShieldBugOutline" color="#FF5252" class="mr-3" />
                      <span class="text-overline tracking-widest font-weight-bold">{{ t('l68') }}</span>
                    </div>

                    <div class="tech-group mb-6">
                      <span class="group-title">{{ t('l69') }}</span>
                      <div class="tech-tags">
                        {{ t('l70') }}
                      </div>
                    </div>

                    <div class="tech-group mb-6">
                      <span class="group-title">{{ t('l71') }}</span>
                      <div class="tech-tags">
                        {{ t('l72') }}
                      </div>
                    </div>

                    <div class="tech-group">
                      <span class="group-title">{{ t('l73') }}</span>
                      <div class="tech-tags">
                        {{ t('l74') }}
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>

              <v-card variant="flat" class="fundamentals-bar mt-4 pa-4 d-flex flex-wrap justify-center align-center">
                <span class="text-caption text-mono mx-4 opacity-60">{{ t('l75') }}</span>
                <v-divider vertical class="mx-2 d-none d-md-block" opacity="0.1" />
                <span class="text-caption text-mono mx-4 opacity-60">{{ t('l76') }}</span>
              </v-card>
            </div>
          </div>
        </v-expand-transition>
      </section>


      <section class="mb-16 animate-up">
        <div class="d-flex align-center mb-4">
          <div class="section-icon-wrap mr-4">
            <v-icon :icon="mdiCheckDecagram" color="primary" size="32" />
          </div>
          <div>
            <h2 class="text-h3 font-weight-black text-uppercase tracking-widest mb-1">{{ t('l77') }}</h2>
            <div class="text-subtitle-2 text-primary opacity-70">{{ t('l78') }}</div>
          </div>
          <v-divider class="ml-6 border-opacity-25" />
        </div>

        <v-row>
          <v-col cols="12" md="6">
            <v-card variant="outlined" class="achievement-card pa-6 h-100">
              <div class="d-flex align-center mb-4">
                <v-avatar color="rgba(0, 200, 83, 0.1)" rounded="lg" class="mr-4">
                  <v-icon :icon="mdiBankOutline" color="success" />
                </v-avatar>
                <h3 class="text-h6 font-weight-bold">{{ t('l79') }}</h3>
              </div>
              <ul class="achievement-list text-body-2 text-grey-lighten-1">
                <li>
                  <strong>{{ t('l80') }}</strong> {{ t('l81') }}
                </li>
                <li>
                  <strong>{{ t('l82') }}</strong> {{ t('l83') }}
                </li>
                <li>
                  <strong>{{ t('l84') }}</strong> {{ t('l85') }}
                </li>
              </ul>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card variant="outlined" class="achievement-card pa-6 h-100">
              <div class="d-flex align-center mb-4">
                <v-avatar color="rgba(33, 150, 243, 0.1)" rounded="lg" class="mr-4">
                  <v-icon :icon="mdiRocketLaunchOutline" color="blue" />
                </v-avatar>
                <h3 class="text-h6 font-weight-bold">{{ t('l86') }}</h3>
              </div>
              <ul class="achievement-list text-body-2 text-grey-lighten-1">
                <li v-html="`<strong>${t('l87')}</strong> ${t('l88')}`"></li>
                <li v-html="`<strong>${t('l89')}</strong> ${t('l90')}`"></li>
                <li v-html="`<strong>${t('l91')}</strong> ${t('l92')}`"></li>
              </ul>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card variant="outlined" class="achievement-card pa-6 h-100">
              <div class="d-flex align-center mb-4">
                <v-avatar color="rgba(244, 67, 54, 0.1)" rounded="lg" class="mr-4">
                  <v-icon :icon="mdiShieldCheckOutline" color="error" />
                </v-avatar>
                <h3 class="text-h6 font-weight-bold">{{ t('l93') }}</h3>
              </div>
              <ul class="achievement-list text-body-2 text-grey-lighten-1">
                <li v-html="`<strong>${t('l94')}</strong> ${t('l95')}`"></li>
                <li v-html="`<strong>${t('l96')}</strong> ${t('l97')}`"></li>
                <li v-html="`<strong>${t('l98')}</strong> ${t('l99')}`"></li>
              </ul>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card variant="outlined" class="achievement-card pa-6 h-100">
              <div class="d-flex align-center mb-4">
                <v-avatar color="rgba(124, 77, 255, 0.1)" rounded="lg" class="mr-4">
                  <v-icon :icon="mdiTrophyOutline" color="#7C4DFF" />
                </v-avatar>
                <h3 class="text-h6 font-weight-bold">{{ t('l100') }}</h3>
              </div>
              <ul class="achievement-list text-body-2 text-grey-lighten-1">
                <li>
                  <strong>{{ t('l101') }}</strong> {{ t('l102') }}
                </li>
                <li>
                  <strong>{{ t('l103') }}</strong> {{ t('l104') }}
                </li>
                <li>{{ t('l105') }}</li>
              </ul>
            </v-card>
          </v-col>
        </v-row>
      </section>


      <section class="experience-section mt-16 mb-12">
        <div class="d-flex flex-column mb-10">
          <div class="d-flex align-center mb-4">
            <div class="section-icon-wrap mr-4">
              <v-icon :icon="mdiBriefcaseVariantOutline" color="primary" size="32" />
            </div>
            <div>
              <h2 class="text-h3 font-weight-black text-uppercase tracking-widest mb-1">{{ t('l106') }}</h2>
              <div class="text-subtitle-2 text-primary opacity-70">{{ t('l107') }}</div>
            </div>
            <v-divider class="ml-6 border-opacity-25" />
          </div>

          <v-alert
              density="compact"
              variant="tonal"
              color="warning"
              class="text-caption border-opacity-25 py-2 px-4"
              style="max-width: fit-content; border-left: 4px solid !important;"
          >
            <v-icon :icon="mdiInformationOutline" size="14" class="mr-2" />
            <strong>{{ t('l108') }}</strong> {{ t('l109') }}
          </v-alert>
        </div>

        <div class="featured-works-path">
          <v-card class="experience-card position-relative overflow-hidden mb-6" variant="outlined">
            <v-card-text class="pa-6">
              <div class="exp-item mb-12">
                <div class="exp-dot"></div>
                <div class="exp-header d-flex justify-space-between align-start flex-wrap gap-2 mb-4">
                  <div>
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <h3 class="text-h4 font-weight-black">{{ t('l110') }}</h3>
                      <v-chip color="primary" size="small" variant="flat" class="font-weight-bold uppercase">{{ t('l111') }}</v-chip>
                      <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">{{ t('l112') }}</v-chip>
                    </div>
                    <div class="text-subtitle-2 text-primary opacity-80">{{ t('l113') }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-body-2 font-weight-bold text-white">{{ t('l114') }}</div>
                  </div>
                </div>

                <div class="exp-content pl-6">
                  <ul class="custom-list">
                    <li><strong>{{ t('l115') }}</strong> {{ t('l116') }}</li>
                    <li><strong>{{ t('l117') }}</strong> {{ t('l118') }}</li>
                    <li><strong>{{ t('l119') }}</strong> {{ t('l120') }}</li>
                    <li><strong>{{ t('l121') }}</strong> {{ t('l122') }}</li>
                    <li><strong>{{ t('l123') }}</strong> {{ t('l124') }}</li>
                    <li><strong>{{ t('l125') }}</strong> {{ t('l126') }}</li>
                    <li v-html="`<strong>${t('l127')}</strong> ${t('l128')}`"></li>
                  </ul>

                  <div class="mt-4 d-flex align-center">
                    <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                    <div class="tech-stack-mini">{{ t('l129') }}</div>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>


          <v-card class="experience-card position-relative overflow-hidden mb-6" variant="outlined">
            <v-card-text class="pa-6">
              <div class="exp-item mb-12">
                <div class="exp-dot"></div>
                <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                  <div>
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <h3 class="text-h4 font-weight-black">{{ t('l130') }}</h3>
                      <v-chip color="primary" size="small" variant="flat" class="font-weight-bold uppercase">{{ t('l131') }}</v-chip>
                    </div>
                    <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">{{ t('l132') }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-body-2 font-weight-bold text-white">{{ t('l133') }}</div>
                  </div>
                </div>

                <div class="exp-content pl-6">
                  <ul class="custom-list">
                    <li><strong>{{ t('l134') }}</strong> {{ t('l135') }}</li>
                    <li v-html="`<strong>${t('l136')}</strong> ${t('l137')}`"></li>
                    <li v-html="`<strong>${t('l138')}</strong> ${t('l139')}`"></li>
                    <li><strong>{{ t('l140') }}</strong> {{ t('l141') }}</li>
                    <li><strong>{{ t('l142') }}</strong> {{ t('l143') }}</li>
                    <li><strong>{{ t('l144') }}</strong> {{ t('l145') }}</li>
                    <li><strong>{{ t('l146') }}</strong> {{ t('l147') }}</li>
                  </ul>

                  <div class="mt-4 d-flex align-center">
                    <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                    <div class="tech-stack-mini">{{ t('l148') }}</div>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>

          <v-card class="experience-card position-relative overflow-hidden mb-6" variant="outlined">

            <v-card-text class="pa-6">
              <div class="exp-item mb-12">
                <div class="exp-dot"></div>
                <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                  <div>
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <h3 class="text-h4 font-weight-black">{{ t('l149') }}</h3>
                      <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">{{ t('l112') }}</v-chip>
                    </div>
                    <div class="text-subtitle-2 text-blue">{{ t('l150') }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-body-2 font-weight-bold text-white">{{ t('l151') }}</div>
                  </div>
                </div>

                <div class="exp-content pl-6">
                  <ul class="custom-list">
                    <li v-html="`<strong>${t('l152')}</strong> ${t('l153')}`"></li>
                    <li v-html="`<strong>${t('l154')}</strong> ${t('l155')}`"></li>
                    <li v-html="`<strong>${t('l156')}</strong> ${t('l157')}`"></li>
                    <li v-html="`<strong>${t('l158')}</strong> ${t('l159')}`"></li>
                    <li v-html="`<strong>${t('l160')}</strong> ${t('l161')}`"></li>
                    <li v-html="`<strong>${t('l162')}</strong> ${t('l163')}`"></li>
                  </ul>

                  <div class="mt-4 d-flex align-center">
                    <v-icon :icon="mdiShieldBug" size="14" color="error" class="mr-2" />
                    <div class="tech-stack-mini">{{ t('l164') }}</div>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>

        </div>

        <div class="d-flex justify-center my-8">
          <v-btn
              variant="outlined"
              color="primary"
              size="large"
              :append-icon="showFullExperience ? mdiChevronUp : mdiChevronDown"
              @click="showFullExperience = !showFullExperience"
              class="full-exp-btn"
          >
            {{ showFullExperience ? t('l165') : t('l166') }}
          </v-btn>
        </div>

        <v-expand-transition>
          <div v-show="showFullExperience" class="full-experience-path">
            <div class="experience-timeline pl-2">

              <div class="exp-item mb-12">
                <div class="exp-dot"></div>
                <div class="exp-header d-flex justify-space-between align-start flex-wrap gap-2 mb-4">
                  <div>
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <h3 class="text-h4 font-weight-black">{{ t('l167') }}</h3>
                      <v-chip color="primary" size="small" variant="flat" class="font-weight-bold uppercase">{{ t('l168') }}</v-chip>
                    </div>
                    <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">{{ t('l169') }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-body-2 font-weight-bold text-white">{{ t('l170') }}</div>
                  </div>
                </div>

                <div class="exp-content pl-6">
                  <ul class="custom-list">
                    <li><strong>{{ t('l171') }}</strong> {{ t('l172') }}</li>
                    <li><strong>{{ t('l173') }}</strong> {{ t('l174') }}</li>
                    <li><strong>{{ t('l175') }}</strong> {{ t('l176') }}</li>
                    <li><strong>{{ t('l177') }}</strong> {{ t('l178') }}</li>
                    <li><strong>{{ t('l179') }}</strong> {{ t('l180') }}</li>
                  </ul>

                  <div class="mt-4 d-flex align-center">
                    <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                    <div class="tech-stack-mini">{{ t('l181') }}</div>
                  </div>
                </div>
              </div>

              <div class="exp-item mb-12">
                <div class="exp-dot"></div>
                <div class="exp-header d-flex justify-space-between align-start flex-wrap gap-2 mb-4">
                  <div>
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <h3 class="text-h4 font-weight-black">{{ t('l183') }}</h3>
                      <v-chip color="primary" size="small" variant="flat" class="font-weight-bold uppercase">{{ t('l184') }}</v-chip>
                      <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">{{ t('l185') }}</v-chip>
                    </div>
                    <div class="text-subtitle-2 text-primary opacity-80">{{ t('l186') }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-body-2 font-weight-bold text-white">{{ t('l187') }}</div>
                  </div>
                </div>

                <div class="exp-content pl-6">
                  <ul class="custom-list">
                    <li><strong>{{ t('l188') }}</strong> {{ t('l189') }}</li>
                    <li><strong>{{ t('l190') }}</strong> {{ t('l191') }}</li>
                    <li><strong>{{ t('l192') }}</strong> {{ t('l193') }}</li>
                    <li><strong>{{ t('l194') }}</strong> {{ t('l195') }}</li>
                    <li><strong>{{ t('l196') }}</strong> {{ t('l197') }}</li>
                    <li><strong>{{ t('l198') }}</strong> {{ t('l199') }}</li>
                    <li v-html="`<strong>${t('l200')}</strong> ${t('l201')}`"></li>
                  </ul>

                  <div class="mt-4 d-flex align-center">
                    <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                    <div class="tech-stack-mini">{{ t('l202') }}</div>
                  </div>
                </div>
              </div>

              <div class="exp-item mb-12">
                <div class="exp-dot"></div>
                <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                  <div>
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <h3 class="text-h4 font-weight-black">{{ t('l203') }}</h3>
                      <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">{{ t('l112') }}</v-chip>
                    </div>
                    <div class="text-subtitle-2 text-primary opacity-80">{{ t('l204') }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-body-2 font-weight-bold text-white">{{ t('l205') }}</div>
                  </div>
                </div>

                <div class="exp-content pl-6">
                  <ul class="custom-list">
                    <li><strong>{{ t('l206') }}</strong> {{ t('l207') }}</li>
                    <li><strong>{{ t('l208') }}</strong> {{ t('l209') }}</li>
                  </ul>

                  <div class="mt-4 d-flex align-center">
                    <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                    <div class="tech-stack-mini">{{ t('l210') }}</div>
                  </div>
                </div>
              </div>

              <div class="exp-item mb-12">
                <div class="exp-dot"></div>
                <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                  <div>
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <h3 class="text-h4 font-weight-black">{{ t('l211') }}</h3>
                      <v-chip color="primary" size="small" variant="flat" class="font-weight-bold uppercase">{{ t('l131') }}</v-chip>
                    </div>
                    <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">{{ t('l212') }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-body-2 font-weight-bold text-white">{{ t('l213') }}</div>
                  </div>
                </div>

                <div class="exp-content pl-6">
                  <ul class="custom-list">
                    <li><strong>{{ t('l214') }}</strong> {{ t('l215') }}</li>
                    <li v-html="`<strong>${t('l216')}</strong> ${t('l217')}`"></li>
                    <li v-html="`<strong>${t('l218')}</strong> ${t('l219')}`"></li>
                    <li><strong>{{ t('l220') }}</strong> {{ t('l221') }}</li>
                    <li><strong>{{ t('l222') }}</strong> {{ t('l223') }}</li>
                    <li><strong>{{ t('l224') }}</strong> {{ t('l225') }}</li>
                    <li><strong>{{ t('l226') }}</strong> {{ t('l227') }}</li>
                  </ul>

                  <div class="mt-4 d-flex align-center">
                    <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                    <div class="tech-stack-mini">{{ t('l228') }}</div>
                  </div>
                </div>
              </div>

              <div class="exp-item mb-12">
                <div class="exp-dot"></div>
                <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                  <div>
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <h3 class="text-h4 font-weight-black">{{ t('l229') }}</h3>
                      <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">{{ t('l230') }}</v-chip>
                    </div>
                    <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">{{ t('l231') }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-body-2 font-weight-bold text-white">{{ t('l232') }}</div>
                  </div>
                </div>

                <div class="exp-content pl-6">
                  <ul class="custom-list">
                    <li><strong>{{ t('l233') }}</strong> {{ t('l234') }}</li>
                    <li><strong>{{ t('l235') }}</strong> {{ t('l236') }}</li>
                    <li><strong>{{ t('l237') }}</strong> {{ t('l238') }}</li>
                    <li><strong>{{ t('l239') }}</strong> {{ t('l240') }}</li>
                    <li><strong>{{ t('l241') }}</strong> {{ t('l242') }}</li>
                    <li><strong>{{ t('l243') }}</strong> {{ t('l244') }}</li>
                    <li><strong>{{ t('l245') }}</strong> {{ t('l246') }}</li>
                  </ul>

                  <div class="mt-4 d-flex align-center">
                    <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                    <div class="tech-stack-mini">{{ t('l247') }}</div>
                  </div>
                </div>
              </div>

              <div class="exp-item mb-12">
                <div class="exp-dot"></div>
                <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                  <div>
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <h3 class="text-h4 font-weight-black">{{ t('l248') }}</h3>
                      <v-chip color="primary" size="small" variant="flat" class="font-weight-bold uppercase">{{ t('l249') }}</v-chip>
                      <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">{{ t('l112') }}</v-chip>
                    </div>
                    <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">{{ t('l250') }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-body-2 font-weight-bold text-white">{{ t('l232') }}</div>
                  </div>
                </div>

                <div class="exp-content pl-6">
                  <ul class="custom-list">
                    <li><strong>{{ t('l251') }}</strong> {{ t('l252') }}</li>
                    <li><strong>{{ t('l253') }}</strong> {{ t('l254') }}</li>
                    <li><strong>{{ t('l255') }}</strong> {{ t('l256') }}</li>
                    <li><strong>{{ t('l257') }}</strong> {{ t('l258') }}</li>
                    <li><strong>{{ t('l259') }}</strong> {{ t('l260') }}</li>
                    <li><strong>{{ t('l261') }}</strong> {{ t('l262') }}</li>
                    <li><strong>{{ t('l263') }}</strong> {{ t('l264') }}</li>
                  </ul>

                  <div class="mt-4 d-flex align-center">
                    <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                    <div class="tech-stack-mini">{{ t('l265') }}</div>
                  </div>
                </div>
              </div>

              <div class="exp-item mb-12">
                <div class="exp-dot"></div>
                <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                  <div>
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <h3 class="text-h4 font-weight-black">{{ t('l211') }}</h3>
                      <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">{{ t('l112') }}</v-chip>
                    </div>
                    <div class="text-subtitle-2 text-primary opacity-80">{{ t('l266') }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-body-2 font-weight-bold text-white">{{ t('l267') }}</div>
                  </div>
                </div>

                <div class="exp-content pl-6">
                  <ul class="custom-list">
                    <li><strong>{{ t('l268') }}</strong> {{ t('l269') }}</li>
                    <li><strong>{{ t('l270') }}</strong> {{ t('l271') }}</li>
                    <li><strong>{{ t('l272') }}</strong> {{ t('l273') }}</li>
                    <li><strong>{{ t('l274') }}</strong> {{ t('l275') }}</li>
                    <li><strong>{{ t('l276') }}</strong> {{ t('l277') }}</li>
                  </ul>

                  <div class="mt-4 d-flex align-center">
                    <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                    <div class="tech-stack-mini">{{ t('l278') }}</div>
                  </div>
                </div>
              </div>

              <div class="exp-item mb-12">
                <div class="exp-dot"></div>
                <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                  <div>
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <h3 class="text-h4 font-weight-black">{{ t('l279') }}</h3>
                      <v-chip color="primary" size="small" variant="flat" class="font-weight-bold uppercase">{{ t('l131') }}</v-chip>
                    </div>
                    <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">{{ t('l280') }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-body-2 font-weight-bold text-white">{{ t('l281') }}</div>
                  </div>
                </div>

                <div class="exp-content pl-6">
                  <ul class="custom-list">
                    <li><strong>{{ t('l282') }}</strong> {{ t('l283') }}</li>
                    <li><strong>{{ t('l284') }}</strong> {{ t('l285') }}</li>
                    <li><strong>{{ t('l286') }}</strong> {{ t('l287') }}</li>
                    <li><strong>{{ t('l288') }}</strong> {{ t('l289') }}</li>
                    <li><strong>{{ t('l290') }}</strong> {{ t('l291') }}</li>
                    <li><strong>{{ t('l292') }}</strong> {{ t('l293') }}</li>
                    <li><strong>{{ t('l294') }}</strong> {{ t('l295') }}</li>
                  </ul>

                  <div class="mt-4 d-flex align-center">
                    <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                    <div class="tech-stack-mini">{{ t('l296') }}</div>
                  </div>
                </div>
              </div>

              <div class="exp-item mb-12">
                <div class="exp-dot"></div>
                <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                  <div>
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <h3 class="text-h4 font-weight-black">{{ t('l297') }}</h3>
                      <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">{{ t('l112') }}</v-chip>
                    </div>
                    <v-chip size="x-small" color="grey" variant="outlined">{{ t('l298') }}</v-chip>
                  </div>
                  <div class="text-body-2 font-weight-bold text-white">{{ t('l299') }}</div>
                </div>
                <div class="exp-content pl-6">
                  <p class="text-body-2 text-grey-lighten-1">{{ t('l300') }}</p>
                </div>
              </div>

              <div class="exp-item mb-12">
                <div class="exp-dot"></div>
                <div class="exp-header d-flex justify-space-between align-start flex-wrap gap-2 mb-4">
                  <div>
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <h3 class="text-h4 font-weight-black">{{ t('l301') }}</h3>
                      <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">{{ t('l112') }}</v-chip>
                    </div>
                    <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">{{ t('l302') }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-body-2 font-weight-bold text-white">{{ t('l303') }}</div>
                  </div>
                </div>

                <div class="exp-content pl-6">
                  <ul class="custom-list">
                    <li><strong>{{ t('l304') }}</strong> {{ t('l305') }}</li>
                    <li><strong>{{ t('l306') }}</strong> {{ t('l307') }}</li>
                    <li><strong>{{ t('l308') }}</strong> {{ t('l309') }}</li>
                    <li><strong>{{ t('l310') }}</strong> {{ t('l311') }}</li>
                    <li><strong>{{ t('l312') }}</strong> {{ t('l313') }}</li>
                  </ul>

                  <div class="mt-4 d-flex align-center">
                    <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                    <div class="tech-stack-mini">{{ t('l314') }}</div>
                  </div>
                </div>
              </div>

              <div class="exp-item mb-12">
                <div class="exp-dot"></div>
                <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                  <div>
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <h3 class="text-h4 font-weight-black">{{ t('l315') }}</h3>
                      <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">{{ t('l112') }}</v-chip>
                    </div>
                    <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">{{ t('l316') }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-body-2 font-weight-bold text-white">{{ t('l317') }}</div>
                  </div>
                </div>

                <div class="exp-content pl-6">
                  <ul class="custom-list">
                    <li><strong>{{ t('l318') }}</strong> {{ t('l319') }}</li>
                    <li><strong>{{ t('l320') }}</strong> {{ t('l321') }}</li>
                    <li><strong>{{ t('l322') }}</strong> {{ t('l323') }}</li>
                    <li><strong>{{ t('l324') }}</strong> {{ t('l325') }}</li>
                    <li><strong>{{ t('l326') }}</strong> {{ t('l327') }}</li>
                    <li><strong>{{ t('l328') }}</strong> {{ t('l329') }}</li>
                  </ul>

                  <div class="mt-4 d-flex align-center">
                    <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                    <div class="tech-stack-mini">{{ t('l330') }}</div>
                  </div>
                </div>
              </div>

              <div class="exp-item mb-12">
                <div class="exp-dot"></div>
                <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                  <div>
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <h3 class="text-h4 font-weight-black">{{ t('l331') }}</h3>
                      <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">{{ t('l112') }}</v-chip>
                    </div>
                    <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">{{ t('l332') }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-body-2 font-weight-bold text-white">{{ t('l333') }}</div>
                  </div>
                </div>

                <div class="exp-content pl-6">
                  <ul class="custom-list">
                    <li><strong>{{ t('l334') }}</strong> {{ t('l335') }}</li>
                    <li><strong>{{ t('l336') }}</strong> {{ t('l337') }}</li>
                    <li><strong>{{ t('l338') }}</strong> {{ t('l339') }}</li>
                    <li><strong>{{ t('l340') }}</strong> {{ t('l341') }}</li>
                    <li><strong>{{ t('l342') }}</strong> {{ t('l343') }}</li>
                    <li><strong>{{ t('l344') }}</strong> {{ t('l345') }}</li>
                  </ul>

                  <div class="mt-4 d-flex align-center">
                    <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                    <div class="tech-stack-mini">{{ t('l346') }}</div>
                  </div>
                </div>
              </div>

              <div class="exp-item mb-12">
                <div class="exp-dot"></div>
                <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                  <div>
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <h3 class="text-h4 font-weight-black">{{ t('l347') }}</h3>
                      <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">{{ t('l112') }}</v-chip>
                    </div>
                    <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">{{ t('l348') }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-body-2 font-weight-bold text-white">{{ t('l349') }}</div>
                  </div>
                </div>

                <div class="exp-content pl-6">
                  <ul class="custom-list">
                    <li><strong>{{ t('l350') }}</strong> {{ t('l351') }}</li>
                    <li><strong>{{ t('l352') }}</strong> {{ t('l353') }}</li>
                    <li v-html="`<strong>${t('l354')}</strong> ${t('l355')}`"></li>
                    <li><strong>{{ t('l356') }}</strong> {{ t('l357') }}</li>
                    <li v-html="`<strong>${t('l358')}</strong> ${t('l359')}`"></li>
                    <li><strong>{{ t('l360') }}</strong> {{ t('l361') }}</li>
                  </ul>

                  <div class="mt-4 d-flex align-center">
                    <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                    <div class="tech-stack-mini">{{ t('l362') }}</div>
                  </div>
                </div>
              </div>

              <div class="exp-item mb-12">
                <div class="exp-dot"></div>
                <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                  <div>
                    <div class="d-flex align-center flex-wrap gap-2 mb-1">
                      <h3 class="text-h4 font-weight-black">{{ t('l363') }}</h3>
                      <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">{{ t('l112') }}</v-chip>
                    </div>
                    <div class="text-subtitle-2 text-blue font-weight-bold">{{ t('l364') }}</div>
                  </div>
                  <div class="text-right">
                    <div class="text-body-2 font-weight-bold text-white">{{ t('l365') }}</div>
                  </div>
                </div>

                <div class="exp-content pl-6">
                  <ul class="custom-list">
                    <li v-html="`<strong>${t('l366')}</strong> ${t('l367')}`"></li>
                    <li v-html="`<strong>${t('l368')}</strong> ${t('l369')}`"></li>
                    <li v-html="`<strong>${t('l370')}</strong> ${t('l371')}`"></li>
                    <li v-html="`<strong>${t('l372')}</strong> ${t('l373')}`"></li>
                    <li v-html="`<strong>${t('l374')}</strong> ${t('l375')}`"></li>
                    <li v-html="`<strong>${t('l376')}</strong> ${t('l377')}`"></li>
                  </ul>

                  <div class="mt-4 d-flex align-center">
                    <v-icon :icon="mdiShieldBug" size="14" color="error" class="mr-2" />
                    <div class="tech-stack-mini">{{ t('l378') }}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </v-expand-transition>
      </section>

      <section class="publications-section mt-16 mb-12">
        <div class="d-flex align-center mb-8">
          <div class="section-icon-wrap mr-4">
            <v-icon :icon="mdiBookOpenVariant" color="primary" size="32" />
          </div>
          <div>
            <h2 class="text-h3 font-weight-black text-uppercase tracking-widest mb-1">{{ t('l379') }}</h2>
            <div class="text-subtitle-2 text-primary opacity-70">{{ t('l380') }}</div>
          </div>
          <v-divider class="ml-6 border-opacity-25" />
        </div>

        <v-row>
          <v-col cols="12" lg="4" md="6">
            <v-card
                href="https://levelup.gitconnected.com/buffer-overflow-for-beginners-edf9f9d593e2"
                target="_blank"
                class="pub-card h-100 pa-6 d-flex flex-column"
                variant="outlined"
            >
              <div class="d-flex justify-space-between align-start mb-4">
                <v-chip color="error" size="x-small" variant="flat" class="font-weight-bold">{{ t('l381') }}</v-chip>
                <v-icon :icon="mdiPostOutline" size="24" class="opacity-50" />
              </div>
              <h3 class="text-h5 font-weight-bold mb-3 line-height-tight">{{ t('l382') }}</h3>
              <p class="text-body-2 text-grey-lighten-1 mb-6 flex-grow-1">
                {{ t('l383') }}
              </p>
              <div class="text-button text-primary d-flex align-center">
                {{ t('l384') }} <v-icon :icon="mdiArrowRight" size="16" class="ml-2" />
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" lg="4" md="6">
            <v-card
                href="https://levelup.gitconnected.com/the-fundamental-vulnerability-of-networks-arp-spoofing-172d51947872"
                target="_blank"
                class="pub-card h-100 pa-6 d-flex flex-column"
                variant="outlined"
            >
              <div class="d-flex justify-space-between align-start mb-4">
                <v-chip color="warning" size="x-small" variant="flat" class="font-weight-bold">{{ t('l385') }}</v-chip>
                <v-icon :icon="mdiPostOutline" size="24" class="opacity-50" />
              </div>
              <h3 class="text-h5 font-weight-bold mb-3 line-height-tight">{{ t('l386') }}</h3>
              <p class="text-body-2 text-grey-lighten-1 mb-6 flex-grow-1">
                {{ t('l387') }}
              </p>
              <div class="text-button text-primary d-flex align-center">
                {{ t('l384') }} <v-icon :icon="mdiArrowRight" size="16" class="ml-2" />
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" lg="4" md="6">
            <v-card
                href="https://medium.com/gitconnected/the-power-of-udf-functions-in-mysql-data-encryption-using-c-and-openssl-484f511eff98"
                target="_blank"
                class="pub-card h-100 pa-6 d-flex flex-column"
                variant="outlined"
            >
              <div class="d-flex justify-space-between align-start mb-4">
                <v-chip color="info" size="x-small" variant="flat" class="font-weight-bold">{{ t('l388') }}</v-chip>
                <v-icon :icon="mdiPostOutline" size="24" class="opacity-50" />
              </div>
              <h3 class="text-h5 font-weight-bold mb-3 line-height-tight">{{ t('l389') }}</h3>
              <p class="text-body-2 text-grey-lighten-1 mb-6 flex-grow-1">
                {{ t('l390') }}
              </p>
              <div class="text-button text-primary d-flex align-center">
                {{ t('l384') }} <v-icon :icon="mdiArrowRight" size="16" class="ml-2" />
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" lg="4" md="6">
            <v-card
                href="https://medium.com/@mikhail.chuloshnikov/file-based-hash-map-using-as-persistent-data-storage-33b849cc8e41"
                target="_blank"
                class="pub-card h-100 pa-6 d-flex flex-column"
                variant="outlined"
            >
              <div class="d-flex justify-space-between align-start mb-4">
                <v-chip color="green" size="x-small" variant="flat" class="font-weight-bold">{{ t('l391') }}</v-chip>
                <v-icon :icon="mdiPostOutline" size="24" class="opacity-50" />
              </div>
              <h3 class="text-h5 font-weight-bold mb-3 line-height-tight">{{ t('l392') }}</h3>
              <p class="text-body-2 text-grey-lighten-1 mb-6 flex-grow-1">
                {{ t('l393') }}
              </p>
              <div class="text-button text-primary d-flex align-center">
                {{ t('l384') }} <v-icon :icon="mdiArrowRight" size="16" class="ml-2" />
              </div>
            </v-card>
          </v-col>
        </v-row>
      </section>


      <section class="code-portfolio-section mt-16 mb-12">
        <div class="d-flex align-center mb-8">
          <div class="section-icon-wrap mr-4">
            <v-icon :icon="mdiCodeBrackets" color="primary" size="32" />
          </div>
          <div>
            <h2 class="text-h3 font-weight-black text-uppercase tracking-widest mb-1">{{ t('l394') }}</h2>
            <div class="text-subtitle-2 text-primary opacity-70">{{ t('l395') }}</div>
          </div>
          <v-divider class="ml-6 border-opacity-25" />
        </div>

        <v-row>
          <v-col cols="12" md="6" lg="4">
            <div class="repo-group-label mb-4 d-flex align-center">
              <v-icon :icon="mdiLanguageCpp" color="blue" class="mr-2" />
              <span class="font-weight-bold uppercase">{{ t('l396') }}</span>
            </div>
            <div class="repo-list">
              <a
                  v-for="repo in [
              { name: t('l399'), link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/alghoritms' },
              { name: t('l400'), link: 'https://github.com/white-rabbit-1-sketch/mysql-openssl' },
              { name: t('l401'), link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/arp-spoofer' },
              { name: t('l402'), link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/shellcode-generator' },
              { name: t('l403'), link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/yansdb' },
              { name: t('l404'), link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/broadcasting-server' },
              { name: t('l405'), link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/lightness-hid' },
            ]"
                  :key="repo.link" :href="repo.link" target="_blank" class="repo-item d-flex align-center pa-3 mb-2"
              >
                <v-icon :icon="mdiGithub" size="18" class="mr-3 opacity-50" />
                <span class="text-body-2">{{ repo.name }}</span>
                <v-spacer />
                <v-icon :icon="mdiOpenInNew" size="14" class="repo-external-icon" />
              </a>
            </div>
          </v-col>

          <v-col cols="12" md="6" lg="4">
            <div class="repo-group-label mb-4 d-flex align-center">
              <v-icon :icon="mdiLanguagePython" color="yellow-darken-2" class="mr-2" />
              <span class="font-weight-bold uppercase">{{ t('l397') }}</span>
            </div>
            <div class="repo-list">
              <a
                  v-for="repo in [
              { name: t('l406'), link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/golang-crawler' },
              { name: t('l407'), link: 'https://github.com/white-rabbit-1-sketch/helicopter' },
              { name: t('l408'), link: 'https://github.com/white-rabbit-1-sketch/lineage-2-lottery-bot' },
              { name: t('l409'), link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/web-cryptor' },
              { name: t('l410'), link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/lightness' },
              { name: t('l411'), link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/lua-installer' },
              { name: t('l412'), link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/cute_fox_wild_hunt' }
            ]"
                  :key="repo.link" :href="repo.link" target="_blank" class="repo-item d-flex align-center pa-3 mb-2"
              >
                <v-icon :icon="mdiGithub" size="18" class="mr-3 opacity-50" />
                <span class="text-body-2">{{ repo.name }}</span>
                <v-spacer />
                <v-icon :icon="mdiOpenInNew" size="14" class="repo-external-icon" />
              </a>
            </div>
          </v-col>

          <v-col cols="12" md="6" lg="4">
            <div class="repo-group-label mb-4 d-flex align-center">
              <v-icon :icon="mdiElephant" color="indigo-lighten-2" class="mr-2" />
              <span class="font-weight-bold uppercase">{{ t('l398') }}</span>
            </div>
            <div class="repo-list">
              <a
                  v-for="repo in [
              { name: t('l413'), link: 'https://github.com/white-rabbit-1-sketch/php-file-hash-map' },
              { name: t('l414'), link: 'https://github.com/white-rabbit-1-sketch/php-worker-pool' },
              { name: t('l415'), link: 'https://github.com/white-rabbit-1-sketch/alunea-alias-backend' },
              { name: t('l416'), link: 'https://github.com/white-rabbit-1-sketch/alunea-alias-frontend' },
              { name: t('l417'), link: 'https://github.com/white-rabbit-1-sketch/alunea-alias-ansible' },
              { name: t('l418'), link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/php-snippets' }
            ]"
                  :key="repo.link" :href="repo.link" target="_blank" class="repo-item d-flex align-center pa-3 mb-2"
              >
                <v-icon :icon="mdiGithub" size="18" class="mr-3 opacity-50" />
                <span class="text-body-2">{{ repo.name }}</span>
                <v-spacer />
                <v-icon :icon="mdiOpenInNew" size="14" class="repo-external-icon" />
              </a>
            </div>
          </v-col>
        </v-row>
      </section>

      <section class="featured-project-section mt-16 mb-12">
        <div class="d-flex align-center mb-8">
          <div class="section-icon-wrap mr-4">
            <v-icon :icon="mdiAutoFix" color="primary" size="32" />
          </div>
          <div>
            <h2 class="text-h3 font-weight-black text-uppercase tracking-widest mb-1">{{ t('l419') }}</h2>
            <div class="text-subtitle-2 text-primary opacity-70">{{ t('l420') }} • <a href="https://alunea.io" target="_blank" class="text-primary text-decoration-none">alunea.io</a></div>
          </div>
          <v-divider class="ml-6 border-opacity-25" />
        </div>

        <v-card class="project-main-card pa-8" variant="flat" color="grey-darken-4">
          <v-row>
            <v-col cols="12" lg="8">
              <div class="d-flex align-center mb-4">
                <h3 class="text-h4 font-weight-black mr-4">Alunea</h3>
                <v-chip color="primary" size="small" variant="flat" class="font-weight-bold">{{ t('l421') }}</v-chip>
              </div>

              <p class="text-body-1 text-grey-lighten-2 mb-6 line-height-relaxed" v-html="t('l422')"></p>

              <v-row class="mb-6">
                <v-col cols="12" sm="6">
                  <div class="feature-item mb-4">
                    <div class="d-flex align-center mb-1">
                      <v-icon :icon="mdiMicrophone" color="primary" size="20" class="mr-2" />
                      <span class="text-h6 font-weight-bold">{{ t('l423') }}</span>
                    </div>
                    <p class="text-caption text-grey">{{ t('l424') }}</p>
                  </div>
                  <div class="feature-item">
                    <div class="d-flex align-center mb-1">
                      <v-icon :icon="mdiClosedCaption" color="primary" size="20" class="mr-2" />
                      <span class="text-h6 font-weight-bold">{{ t('l425') }}</span>
                    </div>
                    <p class="text-caption text-grey">{{ t('l426') }}</p>
                  </div>
                </v-col>
                <v-col cols="12" sm="6">
                  <div class="feature-item mb-4">
                    <div class="d-flex align-center mb-1">
                      <v-icon :icon="mdiSync" color="primary" size="20" class="mr-2" />
                      <span class="text-h6 font-weight-bold">{{ t('l427') }}</span>
                    </div>
                    <p class="text-caption text-grey">{{ t('l428') }}</p>
                  </div>
                  <div class="feature-item">
                    <div class="d-flex align-center mb-1">
                      <v-icon :icon="mdiBrain" color="primary" size="20" class="mr-2" />
                      <span class="text-h6 font-weight-bold">{{ t('l429') }}</span>
                    </div>
                    <p class="text-caption text-grey">{{ t('l430') }}</p>
                  </div>
                </v-col>
              </v-row>

              <div class="d-flex flex-wrap gap-2 mt-4">
                <v-chip size="small" variant="outlined" color="primary">LLM Integration</v-chip>
                <v-chip size="small" variant="outlined" color="primary">PHP</v-chip>
                <v-chip size="small" variant="outlined" color="primary">Python</v-chip>
                <v-chip size="small" variant="outlined" color="primary">Go</v-chip>
                <v-chip size="small" variant="outlined" color="primary">TypeScript</v-chip>
                <v-chip size="small" variant="outlined" color="primary">Ansible</v-chip>
                <v-chip size="small" variant="outlined" color="primary">MySQL</v-chip>
              </div>
            </v-col>

            <v-col cols="12" lg="4" class="d-flex flex-column justify-center border-left-lg">
              <div class="pa-4">
                <v-img src="https://alunea.io/assets/logo-white.png" height="80" contain class="mb-6 opacity-80" />
                <v-btn block color="primary" size="large" variant="flat" href="https://alunea.io" target="_blank" class="mb-4 font-weight-bold">
                  {{ t('l431') }}
                </v-btn>
                <div class="text-center">
                  <div class="text-overline mb-2 text-grey">{{ t('l432') }}</div>
                  <div class="d-flex justify-center gap-3">
                    <v-icon :icon="mdiApple" size="20" color="grey" />
                    <v-icon :icon="mdiAndroid" size="20" color="grey" />
                    <v-icon :icon="mdiGoogleChrome" size="20" color="grey" />
                    <v-icon :icon="mdiServer" size="20" color="grey" />
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </section>

      <section class="mb-16 animate-up">
        <div class="d-flex align-center mb-8">
          <div class="section-icon-wrap mr-4">
            <v-icon :icon="mdiSchoolOutline" color="primary" size="32" />
          </div>
          <div>
            <h2 class="text-h3 font-weight-black text-uppercase tracking-widest mb-1">{{ t('l433') }}</h2>
          </div>
          <v-divider class="ml-6 border-opacity-25" />
        </div>

        <v-row>
          <v-col cols="12" md="12">
            <v-card variant="outlined" class="education-card pa-6">
              <div class="education-item mb-6 pl-4 border-left">
                <div class="d-flex justify-space-between align-start flex-wrap">
                  <div>
                    <div class="text-subtitle-1 font-weight-bold text-white">{{ t('l434') }}</div>
                    <div class="text-body-2 text-grey-lighten-1 mb-1">{{ t('l435') }}</div>
                  </div>
                  <v-chip size="small" variant="tonal" color="grey">2026</v-chip>
                </div>
              </div>

              <div class="education-item mb-6 pl-4 border-left">
                <div class="d-flex justify-space-between align-start flex-wrap">
                  <div>
                    <div class="text-subtitle-1 font-weight-bold text-white">{{ t('l436') }}</div>
                    <div class="text-body-2 text-grey-lighten-1 mb-1">{{ t('l437') }}</div>
                  </div>
                  <v-chip size="small" variant="tonal" color="grey">2015</v-chip>
                </div>
              </div>

              <div class="education-item pl-4 border-left">
                <div class="d-flex justify-space-between align-start flex-wrap">
                  <div>
                    <div class="text-subtitle-1 font-weight-bold text-white">{{ t('l438') }}</div>
                    <div class="text-body-2 text-grey-lighten-1 mb-1">{{ t('l439') }}</div>
                  </div>
                  <v-chip size="small" variant="tonal" color="grey">2008</v-chip>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </section>


      <section class="certifications-section mt-16 mb-12">
        <div class="d-flex align-center mb-8">
          <div class="section-icon-wrap mr-4">
            <v-icon :icon="mdiCertificate" color="primary" size="32" />
          </div>
          <div>
            <h2 class="text-h3 font-weight-black text-uppercase tracking-widest mb-1">{{ t('l440') }}</h2>
            <div class="text-subtitle-2 text-primary opacity-70">{{ t('l441') }}</div>
          </div>
          <v-divider class="ml-6 border-opacity-25" />
        </div>

        <v-row justify="start">
          <v-col cols="12" md="10" lg="8">
            <v-card class="cert-card-full overflow-hidden" variant="outlined" border="primary">
              <div class="cert-image-container">
                <v-img :src="zendImage" alt="Zend PHP Certification" class="cert-img-full" width="100%">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="primary" />
                    </v-row>
                  </template>
                </v-img>
              </div>
              <v-divider class="border-opacity-25"></v-divider>
              <v-card-item class="pa-6">
                <v-row align="center" no-gutters>
                  <v-col>
                    <div class="text-overline font-weight-bold text-primary mb-1">Zend Technologies</div>
                    <h3 class="text-h5 font-weight-black mb-1">{{ t('l442') }}</h3>
                    <div class="text-body-2 text-grey-lighten-1 d-flex align-center mt-2">
                      <v-icon :icon="mdiShieldCheck" size="16" class="mr-2 text-success" />
                      {{ t('l443') }}
                    </div>
                  </v-col>
                </v-row>
                <div class="d-flex flex-wrap gap-2 mt-4">
                  <v-chip size="small" color="primary" variant="outlined">{{ t('l444') }}</v-chip>
                  <v-chip size="small" color="primary" variant="outlined">{{ t('l445') }}</v-chip>
                  <v-chip size="small" color="primary" variant="outlined">{{ t('l446') }}</v-chip>
                </div>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </section>

      <section class="backstory-section mt-16 mb-12">
        <div class="d-flex align-center mb-8">
          <div class="section-icon-wrap mr-4">
            <v-icon :icon="mdiHistory" color="primary" size="32" />
          </div>
          <div>
            <h2 class="text-h3 font-weight-black text-uppercase tracking-widest mb-1">{{ t('l447') }}</h2>
            <div class="text-subtitle-2 text-primary opacity-70">{{ t('l448') }}</div>
          </div>
          <v-divider class="ml-6 border-opacity-25" />
        </div>

        <v-card class="pa-8 backstory-card" variant="outlined" color="grey-darken-4">
          <v-row>
            <v-col cols="12" md="6" class="mb-6">
              <h4 class="text-h6 font-weight-bold text-white mb-4 d-flex align-center">
                <v-icon :icon="mdiXml" size="20" class="mr-2 text-primary" />
                {{ t('l449') }}
              </h4>
              <div class="text-body-2 text-grey-lighten-1 line-height-relaxed">
                <p class="mb-3" v-html="t('l450')"></p>
                <p v-html="t('l451')"></p>
              </div>
            </v-col>

            <v-col cols="12" md="6" class="mb-6">
              <h4 class="text-h6 font-weight-bold text-white mb-4 d-flex align-center">
                <v-icon :icon="mdiGhost" size="20" class="mr-2 text-primary" />
                {{ t('l452') }}
              </h4>
              <div class="text-body-2 text-grey-lighten-1 line-height-relaxed">
                <p class="mb-3" v-html="t('l453')"></p>
                <p v-html="t('l454')"></p>
              </div>
            </v-col>

            <v-col cols="12">
              <v-divider class="mb-8 border-opacity-25" />
              <h4 class="text-h6 font-weight-bold text-primary mb-6 text-center text-uppercase">{{ t('l455') }}</h4>
              <v-row>
                <v-col cols="12" md="4">
                  <div class="manifesto-item">
                    <span class="font-weight-bold text-white d-block mb-1">{{ t('l456') }}</span>
                    <p class="text-caption text-grey" v-html="t('l457')"></p>
                  </div>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="manifesto-item">
                    <span class="font-weight-bold text-white d-block mb-1">{{ t('l458') }}</span>
                    <p class="text-caption text-grey" v-html="t('l459')"></p>
                  </div>
                </v-col>
                <v-col cols="12" md="4">
                  <div class="manifesto-item">
                    <span class="font-weight-bold text-white d-block mb-1">{{ t('l460') }}</span>
                    <p class="text-caption text-grey" v-html="t('l461')"></p>
                  </div>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" class="mt-4">
              <div class="pinba-box pa-4 rounded-lg">
                <v-icon :icon="mdiBugOutline" size="18" class="mr-2 text-warning" />
                <span class="text-caption font-italic text-grey-lighten-1">
                    <strong>{{ t('l462') }}</strong> <span v-html="t('l463')"></span>
          </span>
              </div>
            </v-col>
          </v-row>

          <div class="mt-8 text-center">
            <div class="text-h5 font-weight-black text-primary italic-quote">
              {{ t('l464') }}
            </div>
          </div>
        </v-card>
      </section>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;800&family=JetBrains+Mono&display=swap');

.site-wrapper {
  background-color: #050505 !important;
  font-family: 'Plus Jakarta Sans', sans-serif !important;
  color: #fff;
}

.max-container { max-width: 1100px; }

/* ТИПОГРАФИКА */
.name-title {
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
}
.hero-desc {
  font-size: 1.35rem;
  color: #aaa;
  line-height: 1.6;
}
.section-label {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.75rem;
  color: #58A6FF;
  font-weight: 700;
}

/* CARDS */
.bento-card {
  background: rgba(255, 255, 255, 0.03) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 24px !important;
}
.bento-card.highlight {
  background: linear-gradient(145deg, rgba(88, 166, 255, 0.1), rgba(0,0,0,0)) !important;
  border-color: rgba(88, 166, 255, 0.3) !important;
}
.status-box {
  background: #111;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.05);
}

/* EXPERIENCE */
.border-l { border-left: 1px solid rgba(88, 166, 255, 0.3); }
.exp-header h3 { font-size: 1.8rem; }
.exp-content li { margin-bottom: 8px; position: relative; list-style: none; }
.exp-content li::before { content: "—"; color: #58A6FF; margin-right: 10px; position: absolute; left: -20px; }

/* MANIFESTO */
.manifesto-card {
  background: #0A0A0A !important;
  border-radius: 32px !important;
  border: 1px solid rgba(255,255,255,0.05) !important;
}

/* BACKGROUND */
.glow-bg {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(circle at 80% 20%, rgba(88, 166, 255, 0.08), transparent 40%),
  radial-gradient(circle at 20% 80%, rgba(88, 166, 255, 0.05), transparent 40%);
  pointer-events: none;
}

.black-text { color: #000 !important; }
.gap-4 { gap: 16px; }
.gap-2 { gap: 8px; }

/* ANIMATION */
.animate-up {
  animation: fadeInUp 0.8s ease-out;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.legacy-panels :deep(.v-expansion-panel-title__overlay) { display: none; }

.tech-card {
  border-radius: 16px !important;
  background: rgba(255, 255, 255, 0.02) !important;
  transition: all 0.3s ease;
}

.tech-card:hover {
  background: rgba(var(--v-theme-primary), 0.05) !important;
}

.tech-card {
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
  background: linear-gradient(145deg, rgba(var(--v-theme-primary), 0.05) 0%, rgba(0,0,0,0) 100%) !important;
}

.border-primary-low {
  border-color: rgba(0, 200, 83, 0.2) !important;
}

.tech-group {
  position: relative;
}

.group-title {
  display: block;
  font-size: 0.75rem;
  font-weight: 900;
  color: #58A6FF;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
}

.tech-tags {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  color: #ccc;
  word-spacing: -2px;
}

.fundamentals-bar {
  background: rgba(0, 0, 0, 0.3) !important;
  border: 1px dashed rgba(255, 255, 255, 0.1) !important;
  border-radius: 12px !important;
}

.text-mono {
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.5px;
}

.experience-timeline {
  border-left: 1px solid rgba(88, 166, 255, 0.15);
  position: relative;
}

.exp-item {
  position: relative;
}



.custom-list {
  padding-left: 0;
  list-style: none;
}

.custom-list li {
  color: #ccc;
  font-size: 0.95rem;
  margin-bottom: 8px;
  line-height: 1.5;
  position: relative;
  padding-left: 20px;
}

.custom-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #58A6FF;
  font-weight: bold;
}

.tech-stack-mini {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8rem;
  color: #58A6FF;
  opacity: 0.8;
}

.text-h4 {
  letter-spacing: -0.02em;
}

.gap-2 { gap: 8px; }

.section-icon-wrap {
  background: rgba(var(--v-theme-primary), 0.1);
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
}

.pub-card {
  border-radius: 16px !important;
  background: rgba(255, 255, 255, 0.02) !important;
  transition: all 0.3s ease;
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
  background: linear-gradient(145deg, rgba(var(--v-theme-primary), 0.05) 0%, rgba(0,0,0,0) 100%) !important;
}

.pub-card:hover {
  background: rgba(var(--v-theme-primary), 0.05) !important;
}

.line-height-tight {
  line-height: 1.25;
}

.tracking-widest {
  letter-spacing: 0.1em;
}

.section-icon-wrap {
  background: rgba(var(--v-theme-primary), 0.1);
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
}

.repo-group-label {
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 8px;
}

.repo-item {
  text-decoration: none;
  color: #e0e0e0;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
}

.repo-item:hover {
  background: rgba(var(--v-theme-primary), 0.12) !important;
  border-color: rgba(var(--v-theme-primary), 0.4);
  color: rgb(var(--v-theme-primary));
  transform: translateX(4px);
}

.repo-external-icon {
  opacity: 0;
}

.repo-item:hover .repo-external-icon {
  opacity: 1;
}

.tracking-widest {
  letter-spacing: 0.2em;
}

.cert-card {
  background: linear-gradient(145deg, rgba(var(--v-theme-primary), 0.05) 0%, rgba(0,0,0,0) 100%) !important;
  border-radius: 16px !important;
  border-width: 1px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.cert-card:hover {
  transform: translateY(-4px);
  background: rgba(var(--v-theme-primary), 0.12) !important;
  box-shadow: 0 8px 24px rgba(var(--v-theme-primary), 0.15);
}

.cert-logo-wrap {
  background: rgba(var(--v-theme-primary), 0.1);
  padding: 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-icon-wrap {
  background: rgba(var(--v-theme-primary), 0.1);
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
}

.line-height-tight {
  line-height: 1.2;
}

.tracking-widest {
  letter-spacing: 0.15em;
}

.project-main-card {
  border: 1px solid rgba(var(--v-theme-primary), 0.3) !important;
  border-radius: 24px !important;
  background: linear-gradient(165deg, rgba(var(--v-theme-primary), 0.1) 0%, rgba(18,18,18,1) 100%) !important;
  box-shadow: 0 20px 40px rgba(0,0,0,0.4) !important;
}

.border-left-lg {
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 1264px) {
  .border-left-lg {
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 24px;
  }
}

.line-height-relaxed {
  line-height: 1.7;
}

.section-icon-wrap {
  background: rgba(var(--v-theme-primary), 0.1);
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
}

.feature-item p {
  margin-top: 4px;
  line-height: 1.4;
}

.dna-card {
  background: rgba(var(--v-theme-primary), 0.03) !important;
  border: 1px solid rgba(var(--v-theme-primary), 0.1) !important;
  border-radius: 16px !important;
  transition: all 0.3s ease;
}

.dna-card:hover {
  background: rgba(var(--v-theme-primary), 0.07) !important;
  border-color: rgba(var(--v-theme-primary), 0.4) !important;
}

.historical-card {
  background: rgba(255, 255, 255, 0.02) !important;
  border: 1px dashed rgba(255, 255, 255, 0.1) !important;
}

.tech-cloud {
  font-size: 0.75rem;
  line-height: 2;
  color: rgba(255, 255, 255, 0.5);
}

.tech-cloud span {
  white-space: nowrap;
}

.section-icon-wrap {
  background: rgba(var(--v-theme-primary), 0.1);
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
}

.tracking-widest {
  letter-spacing: 0.2em;
}

.backstory-card {
  border-radius: 16px !important;
  background: rgba(255, 255, 255, 0.02) !important;
  transition: all 0.3s ease;
}

.backstory-card:hover {
  background: rgba(var(--v-theme-primary), 0.05) !important;
}

.backstory-card {
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
  background: linear-gradient(145deg, rgba(var(--v-theme-primary), 0.05) 0%, rgba(0,0,0,0) 100%) !important;
}



.pinba-box {
  background: rgba(255, 152, 0, 0.05);
  border: 1px dashed rgba(255, 152, 0, 0.2);
}

.manifesto-item {
  height: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
}

.line-height-relaxed {
  line-height: 1.7;
}

.italic-quote {
  font-family: 'Georgia', serif;
  font-style: italic;
}

.section-icon-wrap {
  background: rgba(var(--v-theme-primary), 0.1);
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
}

.cert-card-full {
  border-radius: 16px !important;
  background: rgba(255, 255, 255, 0.02) !important;
  transition: all 0.3s ease;
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
  background: linear-gradient(145deg, rgba(var(--v-theme-primary), 0.05) 0%, rgba(0,0,0,0) 100%) !important;
}

.cert-card-full:hover {
  background: rgba(var(--v-theme-primary), 0.05) !important;
}

.cert-image-container {
  width: 100%;
  /* Устанавливаем минимальную высоту, чтобы в PDF картинка занимала место */
  min-height: 400px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px; /* Немного падинга, чтобы края сертификата не прилипали */
}

.cert-img-full {
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.4);
  /* Вместо cover используем contain, чтобы сертификат НЕ ОБРЕЗАЛСЯ */
  object-fit: contain !important;
}

/* Для PDF: гарантируем, что карточка не разрежется пополам */
@media print {
  .cert-card-full {
    page-break-inside: avoid;
    break-inside: avoid;
  }
}

.experience-card {
  border-radius: 16px !important;
  background: rgba(255, 255, 255, 0.02) !important;
  transition: all 0.3s ease;
}

.experience-card:hover {
  background: rgba(var(--v-theme-primary), 0.05) !important;
}

.full-exp-btn {
  border-radius: 12px !important;
  text-transform: none !important;
  letter-spacing: 1px !important;
  font-weight: 700 !important;
  border-width: 2px !important;
}

.section-icon-wrap {
  background: rgba(var(--v-theme-primary), 0.1);
  padding: 12px;
  border-radius: 12px;
  border: 1px solid rgba(var(--v-theme-primary), 0.2);
}

/* Стилизация для печати PDF: разворачиваем всё автоматически */
@media print {
  .full-experience-path {
    display: block !important;
  }
  .full-exp-btn {
    display: none !important;
  }
}

.card-badge {
  position: absolute;
  top: 35px;
  right: -30px;
  background: rgb(var(--v-theme-primary));
  color: black;
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
  padding: 2px 30px;
  transform: rotate(45deg);
  letter-spacing: 1px;
  z-index: 1;
}

.experience-card {
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
  background: linear-gradient(145deg, rgba(var(--v-theme-primary), 0.05) 0%, rgba(0,0,0,0) 100%) !important;
}

.role-focus-card {
  border-radius: 16px !important;
  background: rgba(255, 255, 255, 0.02) !important;
  transition: all 0.3s ease;
}

.role-focus-card:hover {
  background: rgba(var(--v-theme-primary), 0.05) !important;
}

.role-focus-card {
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
  background: linear-gradient(145deg, rgba(var(--v-theme-primary), 0.05) 0%, rgba(0,0,0,0) 100%) !important;
}

.focus-item {
  background: rgba(255, 255, 255, 0.02);
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.95rem;
}

@media (min-width: 960px) {
  .border-left-md {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
}

.text-mono {
  font-family: 'Fira Code', monospace !important;
}

:deep(.v-list-item-subtitle .v-list-item__content) {
  overflow: initial !important;
}

:deep(.v-list-item--one-line .v-list-item-subtitle) {
  -webkit-line-clamp: initial !important;
}


.stack-card {
  border-radius: 16px !important;
  background: rgba(255, 255, 255, 0.02) !important;
  transition: all 0.3s ease;
}

.stack-card:hover {
  background: rgba(var(--v-theme-primary), 0.05) !important;
}

.stack-card {
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
  background: linear-gradient(145deg, rgba(var(--v-theme-primary), 0.05) 0%, rgba(0,0,0,0) 100%) !important;
}

.gap-2 { gap: 8px; }

.full-stack-btn {
  border-radius: 16px !important;
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  font-weight: 700 !important;
  border-width: 2px !important;
  padding: 0 40px !important;
  height: 56px !important;
}

.secondary-stack-card {
  background: rgba(255, 255, 255, 0.01) !important;
  border: 1px dashed rgba(255, 255, 255, 0.1) !important;
  border-radius: 24px !important;
}

.info-banner {
  background: rgba(var(--v-theme-primary), 0.05);
  border-radius: 12px;
  border-left: 4px solid rgba(var(--v-theme-primary), 0.5);
}

/* Эффект для кнопки при наведении */
.full-stack-btn:hover {
  background: rgba(var(--v-theme-primary), 0.1) !important;
  box-shadow: 0 0 20px rgba(var(--v-theme-primary), 0.2);
}

.achievement-card {
  border-radius: 16px !important;
  background: rgba(255, 255, 255, 0.02) !important;
  transition: all 0.3s ease;
}

.achievement-card:hover {
  background: rgba(var(--v-theme-primary), 0.05) !important;
}

.achievement-card {
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
  background: linear-gradient(145deg, rgba(var(--v-theme-primary), 0.05) 0%, rgba(0,0,0,0) 100%) !important;
}

.achievement-list {
  padding-left: 20px;
}

.achievement-list li {
  margin-bottom: 12px;
  position: relative;
  list-style: none;
}

.achievement-list li::before {
  content: "→";
  position: absolute;
  left: -20px;
  color: rgba(var(--v-theme-primary), 0.7);
  font-weight: bold;
}

.education-card {
  border-radius: 16px !important;
  background: rgba(255, 255, 255, 0.02) !important;
  transition: all 0.3s ease;
}

.education-card:hover {
  background: rgba(var(--v-theme-primary), 0.05) !important;
}

.education-card {
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
  background: linear-gradient(145deg, rgba(var(--v-theme-primary), 0.05) 0%, rgba(0,0,0,0) 100%) !important;
}

.border-left {
  border-left: 2px solid rgba(var(--v-theme-primary), 0.2);
  transition: border-color 0.3s ease;
}

.education-item:hover {
  border-left-color: rgba(var(--v-theme-primary), 1);
}

.text-h3 {
  font-size: clamp(1.8rem, 1rem, 3rem) !important;
}

:deep(.v-list-item-title) {
  white-space: initial !important;
}
</style>