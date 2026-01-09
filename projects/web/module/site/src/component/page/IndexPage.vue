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
  mdiCounter
} from "@mdi/js"
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import zendImage from '@/public/img/zend.png'

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
  <v-app theme="dark" class="site-wrapper">
    <v-main>
      <div class="glow-bg"></div>

      <v-container class="max-container py-16">

        <section class="hero-section mb-16 animate-up">
          <v-row align="center">
            <v-col cols="12" md="8">
              <div class="d-flex flex-wrap align-center mb-4 gap-2">
                <v-chip
                    color="#00C853"
                    variant="flat"
                    size="small"
                    class="text-uppercase font-weight-bold tracking-widest px-4"
                >
                  Principal Architect
                </v-chip>

                <v-chip
                    color="#FF9800"
                    variant="flat"
                    size="small"
                    class="text-uppercase font-weight-bold tracking-widest px-4"
                >
                  Senior Developer
                </v-chip>

                <v-chip
                    color="primary"
                    variant="flat"
                    size="small"
                    class="text-uppercase font-weight-bold tracking-widest px-4"
                >
                  Team Lead
                </v-chip>

                <v-chip
                    color="#7C4DFF"
                    variant="flat"
                    size="small"
                    class="text-uppercase font-weight-bold tracking-widest px-4"
                >
                  CTO
                </v-chip>

                <span class="ml-2 text-grey text-caption d-none d-sm-inline opacity-60">
          // 17+ years of expertise
        </span>
              </div>

              <h1 class="name-title mb-4">Mikhail Chuloshnikov</h1>

              <h2 class="text-h4 font-weight-bold text-white mb-6">
                Engineering Resilience for <span class="text-primary">High-Load Web Platforms</span>.
              </h2>

              <p class="hero-desc mb-6 text-grey-lighten-1" style="max-width: 650px; font-size: 1.1rem; line-height: 1.6;">
                I bridge the gap between low-level system engineering and scalable web architecture.
                Leveraging 17+ years of experience, I build mission-critical backend ecosystems
                where performance, security, and stability are solved at the foundation.
              </p>

              <div class="dna-block mb-8 py-3 px-4" style="border-left: 3px solid #64ffda; background: rgba(100, 255, 218, 0.05); max-width: 650px;">
                <p class="text-white mb-0" style="font-size: 0.95rem; font-style: italic;">
                  My career began with reverse engineering and 0-day vulnerability research (WinDbg, x86 Assembly). This "under-the-hood" foundation allows me to master any stack within weeks and build architectures that are secure and performant by design.
                </p>
              </div>

              <div class="d-flex flex-wrap gap-4">
                <v-btn variant="flat" color="white" rounded="lg" size="large" href="https://t.me/dance_with_rabbit" target="_blank" class="text-none font-weight-bold black-text">
                  <template v-slot:prepend><v-icon :icon="mdiSend" /></template>
                  Message on Telegram
                </v-btn>
                <v-btn variant="outlined" rounded="lg" size="large" href="mailto:cv@fkitty.com" class="text-none border-white">
                  <template v-slot:prepend><v-icon :icon="mdiEmail" /></template>
                  Email Me
                </v-btn>
              </div>
            </v-col>

            <v-col cols="12" md="4" class="d-flex justify-md-end">
              <div class="status-box pa-6 w-100" style="max-width: 320px;">
                <div class="text-overline text-grey-darken-1 mb-4 tracking-widest text-uppercase" style="font-size: 0.65rem;">Candidate Status</div>

                <div class="d-flex align-center mb-3">
                  <v-icon :icon="mdiMapMarkerOutline" size="small" class="mr-3 text-primary" />
                  <span class="text-body-2 text-grey-lighten-2">Yerevan, Armenia / Remote OK</span>
                </div>

                <div class="d-flex align-center mb-3">
                  <v-icon :icon="mdiBriefcaseVariantOutline" size="small" class="mr-3 text-primary" />
                  <span class="text-h6 text-white font-weight-black">6,000+ € <span class="text-body-2 text-grey font-weight-medium">net</span></span>
                </div>

                <div class="d-flex align-center mb-3">
                  <v-icon :icon="mdiFileDocumentOutline" size="small" class="mr-3 text-primary" />
                  <span class="text-body-2 text-grey-lighten-2">B2B Contract</span>
                </div>

                <v-divider class="my-4" opacity="0.1" />

                <div class="d-flex justify-space-between align-center">
                  <span class="text-caption text-grey">English Level:</span>
                  <v-chip size="x-small" variant="tonal" color="success" class="font-weight-bold px-2">B2 Upper-Intermediate</v-chip>
                </div>
              </div>
            </v-col>
          </v-row>
        </section>

        <section class="mb-16 animate-up" style="animation-delay: 0.1s;">
          <div class="section-label mb-8">Role & Strategic Focus</div>

          <v-row>
            <v-col cols="12">
              <v-card variant="flat" class="role-focus-card pa-8">
                <v-row>
                  <v-col cols="12" md="6">
                    <h2 class="text-h4 font-weight-black mb-6 d-flex align-center">
                      <v-icon :icon="mdiTarget" color="primary" class="mr-3" />
                      What I Solve
                    </h2>
                    <p class="text-body-1 text-grey-lighten-1 mb-6" style="line-height: 1.8;">
                      I specialize in designing and implementing fault-tolerant high-load web services from scratch. My key advantage is absolute independence: I can single-handedly design and implement systems capable of handling 1M+ RPS, covering every layer of the technology stack.

                    </p>
                    <div class="d-flex flex-column gap-3">
                      <div class="focus-item d-flex align-center">
                        <v-icon :icon="mdiChartTimelineVariant" size="small" color="primary" class="mr-3" />
                        <span><strong>Zero-to-One:</strong> Building core infrastructure from scratch for startups.</span>
                      </div>
                      <div class="focus-item d-flex align-center">
                        <v-icon :icon="mdiWall" size="small" color="primary" class="mr-3" />
                        <span><strong>Legacy-to-Modern:</strong> High-risk migrations and architectural refactoring.</span>
                      </div>
                      <div class="focus-item d-flex align-center">
                        <v-icon :icon="mdiSecurity" size="small" color="primary" class="mr-3" />
                        <span><strong>System Hardening:</strong> Deep security audits and performance tuning.</span>
                      </div>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6" class="border-left-md px-md-8">
                    <h2 class="text-h4 font-weight-black mb-6">Roles I'm Open To</h2>
                    <v-list bg-color="transparent" class="pa-0">
                      <v-list-item class="px-0 mb-4">
                        <template v-slot:prepend>
                          <v-avatar color="rgba(0, 200, 83, 0.1)" rounded="lg" class="mr-4">
                            <v-icon :icon="mdiServerNetwork" color="#00C853" />
                          </v-avatar>
                        </template>
                        <v-list-item-title class="text-h6 font-weight-bold">Principal Architect</v-list-item-title>
                        <v-list-item-subtitle class="text-grey">Designing complex distributed systems & high-load backends.</v-list-item-subtitle>
                      </v-list-item>

                      <v-list-item class="px-0 mb-4">
                        <template v-slot:prepend>
                          <v-avatar color="rgba(255, 152, 0, 0.1)" rounded="lg" class="mr-4">
                            <v-icon :icon="mdiCodeBraces" color="#FF9800" />
                          </v-avatar>
                        </template>
                        <v-list-item-title class="text-h6 font-weight-bold">Senior Developer</v-list-item-title>
                        <v-list-item-subtitle class="text-grey">Hands-on development of mission-critical core modules.</v-list-item-subtitle>
                      </v-list-item>

                      <v-list-item class="px-0 mb-4">
                        <template v-slot:prepend>
                          <v-avatar color="rgba(33, 150, 243, 0.1)" rounded="lg" class="mr-4">
                            <v-icon :icon="mdiAccountGroupOutline" color="primary" />
                          </v-avatar>
                        </template>
                        <v-list-item-title class="text-h6 font-weight-bold">Head of Engineering / Team Lead</v-list-item-title>
                        <v-list-item-subtitle class="text-grey">Mentoring, process excellence, and team scaling.</v-list-item-subtitle>
                      </v-list-item>

                      <v-list-item class="px-0">
                        <template v-slot:prepend>
                          <v-avatar color="rgba(124, 77, 255, 0.1)" rounded="lg" class="mr-4">
                            <v-icon :icon="mdiCogs" color="#7C4DFF" />
                          </v-avatar>
                        </template>
                        <v-list-item-title class="text-h6 font-weight-bold">CTO / Technical Founder</v-list-item-title>
                        <v-list-item-subtitle class="text-grey">Tech strategy, hiring, and 0-to-1 execution.</v-list-item-subtitle>
                      </v-list-item>
                    </v-list>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </section>

        <section class="mb-16 animate-up" style="animation-delay: 0.2s;">
          <div class="section-label mb-8">Primary Tech Stack</div>

          <v-row>
            <v-col cols="12" md="4">
              <v-card variant="flat" class="stack-card h-100 pa-6">
                <div class="d-flex align-center mb-4">
                  <v-avatar color="rgba(119, 123, 180, 0.1)" rounded="lg" size="48" class="mr-4">
                    <v-icon :icon="mdiLanguagePhp" color="#777BB4" size="32" />
                  </v-avatar>
                  <div>
                    <div class="text-h6 font-weight-black">PHP</div>
                    <div class="text-caption text-primary font-weight-bold uppercase">Expert Level</div>
                  </div>
                </div>
                <p class="text-body-2 text-grey-lighten-1 mb-4">
                  17+ years of experience. High-load architecture, Symfony, and custom core engines.
                </p>
                <div class="d-flex flex-wrap gap-2">
                  <v-chip size="x-small" variant="outlined" color="primary">High-Load</v-chip>
                  <v-chip size="x-small" variant="outlined" color="primary">Symfony</v-chip>
                  <v-chip size="x-small" variant="outlined" color="primary">Architecture</v-chip>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" md="4">
              <v-card variant="flat" class="stack-card h-100 pa-6">
                <div class="d-flex align-center mb-4">
                  <v-avatar color="rgba(0, 173, 216, 0.1)" rounded="lg" size="48" class="mr-4">
                    <v-icon :icon="mdiLanguageGo" color="#00ADD8" size="32" />
                  </v-avatar>
                  <div>
                    <div class="text-h6 font-weight-black">Golang</div>
                    <div class="text-caption text-blue font-weight-bold uppercase">Proficient level</div>
                  </div>
                </div>
                <p class="text-body-2 text-grey-lighten-1 mb-4">
                  Building ultra-fast microservices, concurrent processing, and networking tools.
                  Focus on performance and memory efficiency in distributed systems.
                </p>
                <div class="d-flex flex-wrap gap-2">
                  <v-chip size="x-small" variant="outlined" color="blue">Microservices</v-chip>
                  <v-chip size="x-small" variant="outlined" color="blue">Concurrency</v-chip>
                  <v-chip size="x-small" variant="outlined" color="blue">gRPC</v-chip>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" md="4">
              <v-card variant="flat" class="stack-card h-100 pa-6">
                <div class="d-flex align-center mb-4">
                  <v-avatar color="rgba(55, 118, 171, 0.1)" rounded="lg" size="48" class="mr-4">
                    <v-icon :icon="mdiLanguagePython" color="#3776AB" size="32" />
                  </v-avatar>
                  <div>
                    <div class="text-h6 font-weight-black">Python</div>
                    <div class="text-caption text-green font-weight-bold uppercase">Proficient level</div>
                  </div>
                </div>
                <p class="text-body-2 text-grey-lighten-1 mb-4">
                  Data processing pipelines, automation scripts, and integration layers.
                  Used for rapid prototyping and complex backend utility services.
                </p>
                <div class="d-flex flex-wrap gap-2">
                  <v-chip size="x-small" variant="outlined" color="green">Scripting</v-chip>
                  <v-chip size="x-small" variant="outlined" color="green">Data Pipelines</v-chip>
                  <v-chip size="x-small" variant="outlined" color="green">DevOps</v-chip>
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
              {{ showFullStack ? 'Hide Broad Stack' : 'View Broad Stack & Tools' }}
            </v-btn>
          </div>

          <v-expand-transition>
            <div v-show="showFullStack">
              <v-card variant="flat" class="secondary-stack-card pa-8">
                <div class="d-flex align-center mb-8 info-banner pa-4">
                  <v-icon :icon="mdiInformationOutline" color="primary" class="mr-3" />
                  <span class="text-body-2 text-grey-lighten-1">
                    <strong>Note:</strong> The technologies below represent my broader ecosystem. While not my primary daily drivers,
                    I have practical experience with them and can effectively implement, debug, or lead projects using these tools as needed.
                  </span>
                </div>

                <div class="full-stack-content">
                  <div class="section-label mb-8">Expertise & Technical DNA</div>

                  <v-row class="g-4">
                    <v-col cols="12" lg="4">
                      <v-card variant="flat" class="tech-card h-100 pa-6">
                        <div class="d-flex align-center mb-6">
                          <v-icon :icon="mdiCodeBraces" color="#7C4DFF" class="mr-3" />
                          <span class="text-overline tracking-widest font-weight-bold">Languages & Core</span>
                        </div>

                        <div class="tech-group mb-6">
                          <div class="d-flex justify-space-between align-center mb-2">
                            <span class="group-title">PHP / Go / Java</span>
                            <v-chip size="x-small" color="primary" variant="tonal" class="font-weight-black">ZEND CERTIFIED</v-chip>
                          </div>
                          <div class="tech-tags">
                            Symfony • Laravel • Yii • Zend • Custom Extensions (C) • Doctrine • Libs •
                            High-perf Microservices • Concurrency • Spring Security/Boot/Social • Hibernate •
                            Apache JBI/ESB/JMS/Service Mix/ActiveMQ/Camel
                          </div>
                        </div>

                        <div class="tech-group mb-6">
                          <span class="group-title">Python / TypeScript / Lua / Gdscript (Godot)</span>
                          <div class="tech-tags">
                            Django • SQLAlchemy • Vue • Vuetify • Angular • Electron/Ionic/Capacitor •  Webpack • Lua Stdl/COM/fs/socket/C API
                          </div>
                        </div>

                        <div class="tech-group">
                          <span class="group-title">C / C++ / ASM / TCL / Delphi / VBA / Bash</span>
                          <div class="tech-tags">
                            Boost • WinAPI/POSIX • Kernel • Stdl • Raw sockets • COM • Stack • Heap • Registers
                          </div>
                        </div>
                      </v-card>
                    </v-col>

                    <v-col cols="12" lg="4">
                      <v-card variant="flat" class="tech-card h-100 pa-6 border-primary-low">
                        <div class="d-flex align-center mb-6">
                          <v-icon :icon="mdiServerNetwork" color="#00C853" class="mr-3" />
                          <span class="text-overline tracking-widest font-weight-bold">Systems & High Load</span>
                        </div>

                        <div class="tech-group mb-6">
                          <span class="group-title">Databases (1B+ Records)</span>
                          <div class="tech-tags">
                            PostgreSQL • MySQL • MS SQL • Redis • Memcached • Interbase • Firebase • Kyoto
                            • Hash • Cardinality • Constraints • Replication • Sharding
                            • Partitioning • Performance Tuning • Profiling • Locks • Indexes • T-SQL-92
                          </div>
                        </div>

                        <div class="tech-group mb-6">
                          <span class="group-title">CI/CD</span>
                          <div class="tech-tags">
                            Docker • Ansible • Github Actions
                          </div>
                        </div>

                        <div class="tech-group mb-6">
                          <span class="group-title">Infrastructure</span>
                          <div class="tech-tags">
                            Debian • Nginx • Caddy • Apache • Tomcat • Jetty • Elasticsearch • Sphinx • Solr • RabbitMQ • Grafana • Loki • Alloy
                            • Git • Svn • Mercurial • Jira • Confluence • Trac • Redmine
                          </div>
                        </div>

                        <div class="tech-group">
                          <span class="group-title">Architecture</span>
                          <div class="tech-tags">
                            Sharding • Load Balancing • Zero-Downtime Altering • MSOA • Distributed Systems
                          </div>
                        </div>
                      </v-card>
                    </v-col>

                    <v-col cols="12" lg="4">
                      <v-card variant="flat" class="tech-card h-100 pa-6">
                        <div class="d-flex align-center mb-6">
                          <v-icon :icon="mdiShieldBugOutline" color="#FF5252" class="mr-3" />
                          <span class="text-overline tracking-widest font-weight-bold">Security & Low-Level</span>
                        </div>

                        <div class="tech-group mb-6">
                          <span class="group-title">Sec Research & Audits</span>
                          <div class="tech-tags">
                            0-day Exploit Dev • RCE • XSS • Buffer Overflow • Cryptors • Shellcode
                          </div>
                        </div>

                        <div class="tech-group mb-6">
                          <span class="group-title">Reverse Engineering</span>
                          <div class="tech-tags text-blue-lighten-3">
                            OllyDbg • WinDbg • GDB • Binary Patching • Deobfuscation • Import Table Recovery
                          </div>
                        </div>

                        <div class="tech-group">
                          <span class="group-title">Deep Debugging</span>
                          <div class="tech-tags">
                            Strace Expert • Kernel Module Patching • Raw Sockets • Packet Inspection (TCP/UDP)
                          </div>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>

                  <v-card variant="flat" class="fundamentals-bar mt-4 pa-4 d-flex flex-wrap justify-center align-center">
                    <span class="text-caption text-mono mx-4 opacity-60">ALGORITHMS & STRUCTURES: B-Tree, Red-Black Tree, Binary Search Tree, QuickSort, Bubble Sort, Shaker Sort, Binary Search, Hash Tables, Queue, Deque, Stack, Singly Linked List, Doubly Linked List, System V IPC: Shared Memory, Multithreading, Graph Theory</span>
                    <v-divider vertical class="mx-2 d-none d-md-block" opacity="0.1" />
                    <span class="text-caption text-mono mx-4 opacity-60">PATTERNS & OTHER: SOLID, GoF, Undetermined State Machines, Trust Ring Architecture, Game/World Physics, Decorator, Singleton, Proxy, Outbox, Factory, Abstract Factory, Registry, Command, MVC, Prototype, Adapter, Facade, Workflow, KIS, Threads, Fork, UML, Late Static Binding, FIFO, LIFO</span>
                  </v-card>
                </div>
              </v-card>
            </div>
          </v-expand-transition>
        </section>


        <section class="mb-16 animate-up">
          <div class="section-label mb-8">Selected Achievements & Impact</div>

          <v-row>
            <v-col cols="12" md="6">
              <v-card variant="flat" class="achievement-card pa-6 h-100">
                <div class="d-flex align-center mb-4">
                  <v-avatar color="rgba(0, 200, 83, 0.1)" rounded="lg" class="mr-4">
                    <v-icon :icon="mdiBankOutline" color="success" />
                  </v-avatar>
                  <h3 class="text-h6 font-weight-bold">Fintech & Core Banking</h3>
                </div>
                <ul class="achievement-list text-body-2 text-grey-lighten-1">
                  <li>
                    <strong>Silverbird:</strong> Architected and built the core processing engine for FX, multi-currency routing, and high-load payment gateways from scratch.
                  </li>
                  <li>
                    <strong>Banking Platform Launch:</strong> Led the end-to-end creation of a banking infrastructure, including team assembly, business process automation, and core service design.
                  </li>
                  <li>
                    <strong>Compliance & Security:</strong> Implemented high-security payment schemes (SWIFT, SEPA).
                  </li>
                </ul>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card variant="flat" class="achievement-card pa-6 h-100">
                <div class="d-flex align-center mb-4">
                  <v-avatar color="rgba(33, 150, 243, 0.1)" rounded="lg" class="mr-4">
                    <v-icon :icon="mdiRocketLaunchOutline" color="blue" />
                  </v-avatar>
                  <h3 class="text-h6 font-weight-bold">Scale & Performance</h3>
                </div>
                <ul class="achievement-list text-body-2 text-grey-lighten-1">
                  <li><strong>TSUM (High-Load):</strong> Managed a cluster of 6+ services handling <strong>1 Billion+ data records</strong>.</li>
                  <li><strong>JivoSite:</strong> Reorganized the dev team and processes, increasing team velocity from 70% to <strong>120% efficiency</strong> using modified Scrum.</li>
                  <li><strong>Mamba:</strong> Optimized notification systems and database interactions for a platform with <strong>tens of millions of active users</strong>.</li>
                </ul>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card variant="flat" class="achievement-card pa-6 h-100">
                <div class="d-flex align-center mb-4">
                  <v-avatar color="rgba(244, 67, 54, 0.1)" rounded="lg" class="mr-4">
                    <v-icon :icon="mdiShieldCheckOutline" color="error" />
                  </v-avatar>
                  <h3 class="text-h6 font-weight-bold">Security & Research</h3>
                </div>
                <ul class="achievement-list text-body-2 text-grey-lighten-1">
                  <li><strong>0-Day Research:</strong> History of discovering remote code execution (RCE) vulnerabilities in browsers and PDF readers (purely for research).</li>
                  <li><strong>Low-Level Debugging:</strong> Custom kernel patching for Linux Wi-Fi modules and binary patching for legacy engines.</li>
                  <li>Implemented transparent authentication with ESIA (GosUslugi) for government-scale banking infrastructure.</li>
                </ul>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card variant="flat" class="achievement-card pa-6 h-100">
                <div class="d-flex align-center mb-4">
                  <v-avatar color="rgba(124, 77, 255, 0.1)" rounded="lg" class="mr-4">
                    <v-icon :icon="mdiTrophyOutline" color="#7C4DFF" />
                  </v-avatar>
                  <h3 class="text-h6 font-weight-bold">Zero-to-One Launch</h3>
                </div>
                <ul class="achievement-list text-body-2 text-grey-lighten-1">
                  <li><strong>Infrastructure from Scratch:</strong> Built the entire IT department and business processes for a banking platform (team, environments, CI/CD, documentation).</li>
                  <li><strong>Wikimart:</strong> Developed the billing system and search engine architecture during the platform's hyper-growth phase.</li>
                  <li>Expertise in building decentralized trust-ring networks and anti-censorship systems.</li>
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
                <h2 class="text-h3 font-weight-black text-uppercase tracking-widest mb-1">Experience</h2>
                <div class="d-flex align-center">
                  <v-chip
                      color="primary"
                      size="x-small"
                      variant="flat"
                      class="mr-2 font-weight-black"
                      label
                  >FEATURED</v-chip>
                  <div class="text-subtitle-2 text-grey-lighten-1">Focusing on technical complexity, not timeline</div>
                </div>
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
              <strong>Note:</strong> This section highlights roles with the highest architectural impact. For full chronology, see the full experience below.
            </v-alert>
          </div>

          <div class="featured-works-path">
            <v-card class="experience-card mb-6 highlight-border" variant="flat">

              <v-card class="experience-card position-relative overflow-hidden mb-6" variant="outlined">
                <div class="card-badge">Selected Case</div>

                <v-card-text class="pa-6">
                  <div class="exp-item mb-12">
                    <div class="exp-dot"></div>
                    <div class="exp-header d-flex justify-space-between align-start flex-wrap gap-2 mb-4">
                      <div>
                        <div class="d-flex align-center flex-wrap gap-2 mb-1">
                          <h3 class="text-h4 font-weight-black">Silverbird (Theropod LTD)</h3>
                          <v-chip color="primary" size="small" variant="flat" class="font-weight-bold uppercase">PROJECT LEAD</v-chip>
                          <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">SENIOR DEV</v-chip>
                        </div>
                        <div class="text-subtitle-2 text-primary opacity-80">Fintech / Banking / Payments</div>
                      </div>
                      <div class="text-right">
                        <div class="text-body-2 font-weight-bold text-white">Oct 2022 — March 2024</div>
                      </div>
                    </div>

                    <div class="exp-content pl-6">
                      <ul class="custom-list">
                        <li><strong>Core Banking Development:</strong> Engineering of core banking engines and all related financial infrastructure.</li>
                        <li><strong>Multi-PSP Integration:</strong> Design and development of systems for seamless multi-PSP (Payment Service Provider) integration.</li>
                        <li><strong>Payment Processing Core:</strong> Architecture and development of the core engine for Inbound/Outbound payments, FX transactions, and intelligent payment routing.</li>
                        <li><strong>Leadership & Stakeholding:</strong> Acting as Team Lead and Stakeholder for the core banking and payment modules.</li>
                        <li><strong>External Ecosystems:</strong> Integration of external PSPs and development of specialized Beneficiary Modules.</li>
                        <li><strong>Security Auditing:</strong> Conducting comprehensive security audits for financial components.</li>
                        <li><strong>Banking Domain Expertise:</strong> Full-cycle implementation of payments, FX, and transactions. Deep integration with payment schemes: <strong>SWIFT, SEPA, Faster Payments, T2</strong>, and platforms like <strong>TUUM / Integrated Finance</strong>.</li>
                      </ul>

                      <div class="mt-4 d-flex align-center">
                        <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                        <div class="tech-stack-mini">Fintech Infrastructure • FX Processing • SWIFT/SEPA • Security Audit</div>
                      </div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>


              <v-card class="experience-card position-relative overflow-hidden mb-6" variant="outlined">
                <div class="card-badge">Selected Case</div>

                <v-card-text class="pa-6">
                  <div class="exp-item mb-12">
                    <div class="exp-dot"></div>
                    <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                      <div>
                        <div class="d-flex align-center flex-wrap gap-2 mb-1">
                          <h3 class="text-h4 font-weight-black">TSUM (Mercury Group)</h3>
                          <v-chip color="primary" size="small" variant="flat" class="font-weight-bold uppercase">TEAM LEAD</v-chip>
                        </div>
                        <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">High-Load E-commerce / Fashion Retail</div>
                      </div>
                      <div class="text-right">
                        <div class="text-body-2 font-weight-bold text-white">April 2021 — April 2022</div>
                      </div>
                    </div>

                    <div class="exp-content pl-6">
                      <ul class="custom-list">
                        <li><strong>Cross-functional Leadership:</strong> Managed a complete product cell including Developers, QA, Product Managers, and Business Analysts.</li>
                        <li><strong>Massive Scale:</strong> Managed High-Load systems handling nearly <strong>1 Billion data records</strong>.</li>
                        <li><strong>Service Ownership:</strong> Full accountability for <strong>6+ mission-critical services</strong> within the e-commerce ecosystem.</li>
                        <li><strong>Marketing-Tech Strategy:</strong> Spearheaded the Marketing product-engineering bridge, acting as a primary Stakeholder.</li>
                        <li><strong>Team Transformation:</strong> Completely rebuilt and upskilled the team to align with modern product requirements and tech standards.</li>
                        <li><strong>Innovation Driver:</strong> Initiated and oversaw the development of new services using cutting-edge technologies to solve specific business needs.</li>
                        <li><strong>Process Excellence:</strong> Built internal development workflows from scratch and streamlined interaction protocols between business units and external teams.</li>
                      </ul>

                      <div class="mt-4 d-flex align-center">
                        <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                        <div class="tech-stack-mini">High-Load (1B+ Records) • Management • MarTech • Strategic Planning</div>
                      </div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>

              <v-card class="experience-card position-relative overflow-hidden mb-6" variant="outlined">
                <div class="card-badge">Selected Case</div>

                <v-card-text class="pa-6">
                  <div class="exp-item mb-12">
                    <div class="exp-dot"></div>
                    <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                      <div>
                        <div class="d-flex align-center flex-wrap gap-2 mb-1">
                          <h3 class="text-h4 font-weight-black">MIF</h3>
                          <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">SENIOR DEV</v-chip>
                        </div>
                        <div class="text-subtitle-2 text-error font-weight-bold">Security & Low-Level Systems Researcher</div>
                      </div>
                      <div class="text-right">
                        <div class="text-body-2 font-weight-bold text-white">Sept 2008 — Aug 2009</div>
                      </div>
                    </div>

                    <div class="exp-content pl-6">
                      <ul class="custom-list">
                        <li><strong>Full-Chain Vulnerability Analysis:</strong> Conducted end-to-end security research on major browser engines and Adobe Reader. Developed <strong>functional RCE (Remote Code Execution) exploits (Only Proof-of-Concept)</strong> to demonstrate critical memory corruption flaws using <strong>WinDbg, x86 Assembly</strong>, and advanced heap-spraying techniques.</li>
                        <li><strong>High-Concurrency C&C Architecture:</strong> Engineered ultra-lightweight remote management agents (4KB binaries) and command-and-control (C2) infrastructures using <strong>C (WinAPI) and Lua</strong>. Focus on extreme binary optimization and stealthy network communication.</li>
                        <li><strong>Polymorphic Code Protection:</strong> Developed a sophisticated machine-based obfuscator. It featured a custom code translator (Python/JS to pseudocode) designed to bypass heuristic analysis and static signature detection engines.</li>
                        <li><strong>Algorithmic Network Topology:</strong> Designed and implemented automated systems for large-scale content generation and inter-linked network structures (Ring & Pyramid topologies). Optimized link-graph algorithms to maximize search engine indexing efficiency.</li>
                        <li><strong>Infrastructure Monetization:</strong> Developed specialized platforms for client hardware resource acquisition and satellite site generation systems.</li>
                        <li><strong>Systems Mindset:</strong> This era defined my "low-level first" approach. Understanding memory corruption and CPU-level execution is what allows me today to build high-load systems that are inherently secure.</li>
                      </ul>

                      <div class="mt-4 d-flex align-center">
                        <v-icon :icon="mdiShieldBug" size="14" color="error" class="mr-2" />
                        <div class="tech-stack-mini">Reverse Engineering • RCE • WinDbg • Assembler • Crypto • C/C++</div>
                      </div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>








            </v-card>
          </div>

          <div class="d-flex justify-center my-8">
            <v-btn
                variant="outlined"
                color="primary"
                size="large"
                :append-icon="showFullExperience ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="showFullExperience = !showFullExperience"
                class="full-exp-btn"
            >
              {{ showFullExperience ? 'Hide Detailed History' : 'Show Full Experience' }}
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
                        <h3 class="text-h4 font-weight-black">Aventus IT</h3>
                        <v-chip color="primary" size="small" variant="flat" class="font-weight-bold uppercase">TEAM LEAD</v-chip>
                      </div>
                      <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">Fintech</div>
                    </div>
                    <div class="text-right">
                      <div class="text-body-2 font-weight-bold text-white">July 2024 — October 2025</div>
                    </div>
                  </div>

                  <div class="exp-content pl-6">
                    <ul class="custom-list">
                      <li><strong>Engineering Management:</strong> Leading and mentoring a backend development team of 7 people.</li>
                      <li><strong>Business Process Organization:</strong> Establishing and streamlining internal workflows and cross-departmental operations.</li>
                      <li><strong>System Architecture:</strong> Designing robust architectures for complex projects and high-performance services.</li>
                      <li><strong>CI/CD Excellence:</strong> Integrating and optimizing continuous integration and delivery pipelines to accelerate deployment.</li>
                      <li><strong>Core Development:</strong> Direct contribution to large-scale flagship projects and their interconnected microservices ecosystem.</li>
                    </ul>

                    <div class="mt-4 d-flex align-center">
                      <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                      <div class="tech-stack-mini">PHP • MySQL • Microservices • CI/CD</div>
                    </div>
                  </div>
                </div>

                <div class="exp-item mb-12">
                  <div class="exp-dot"></div>
                  <div class="exp-header d-flex justify-space-between align-start flex-wrap gap-2 mb-4">
                    <div>
                      <div class="d-flex align-center flex-wrap gap-2 mb-1">
                        <h3 class="text-h4 font-weight-black">Silverbird (Theropod LTD)</h3>
                        <v-chip color="primary" size="small" variant="flat" class="font-weight-bold uppercase">PROJECT LEAD</v-chip>
                        <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">SENIOR DEV</v-chip>
                      </div>
                      <div class="text-subtitle-2 text-primary opacity-80">Fintech / Banking / Payments</div>
                    </div>
                    <div class="text-right">
                      <div class="text-body-2 font-weight-bold text-white">Oct 2022 — March 2024</div>
                    </div>
                  </div>

                  <div class="exp-content pl-6">
                    <ul class="custom-list">
                      <li><strong>Core Banking Development:</strong> Engineering of core banking engines and all related financial infrastructure.</li>
                      <li><strong>Multi-PSP Integration:</strong> Design and development of systems for seamless multi-PSP (Payment Service Provider) integration.</li>
                      <li><strong>Payment Processing Core:</strong> Architecture and development of the core engine for Inbound/Outbound payments, FX transactions, and intelligent payment routing.</li>
                      <li><strong>Leadership & Stakeholding:</strong> Acting as Team Lead and Stakeholder for the core banking and payment modules.</li>
                      <li><strong>External Ecosystems:</strong> Integration of external PSPs and development of specialized Beneficiary Modules.</li>
                      <li><strong>Security Auditing:</strong> Conducting comprehensive security audits for financial components.</li>
                      <li><strong>Banking Domain Expertise:</strong> Full-cycle implementation of payments, FX, and transactions. Deep integration with payment schemes: <strong>SWIFT, SEPA, Faster Payments, T2</strong>, and platforms like <strong>TUUM / Integrated Finance</strong>.</li>
                    </ul>

                    <div class="mt-4 d-flex align-center">
                      <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                      <div class="tech-stack-mini">Fintech Infrastructure • FX Processing • SWIFT/SEPA • Security Audit</div>
                    </div>
                  </div>
                </div>

                <div class="exp-item mb-12">
                  <div class="exp-dot"></div>
                  <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                    <div>
                      <div class="d-flex align-center flex-wrap gap-2 mb-1">
                        <h3 class="text-h4 font-weight-black">MTS (Mobile TeleSystems)</h3>
                        <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">SENIOR DEV</v-chip>
                      </div>
                      <div class="text-subtitle-2 text-primary opacity-80">Telecom / ISP / Internet Services</div>
                    </div>
                    <div class="text-right">
                      <div class="text-body-2 font-weight-bold text-white">July 2022 — Sept 2022</div>
                    </div>
                  </div>

                  <div class="exp-content pl-6">
                    <ul class="custom-list">
                      <li><strong>Bitrix Development:</strong> Engineering and implementation of new functional modules within the Bitrix framework.</li>
                      <li><strong>Legacy Migration:</strong> Architectural transition and migration of legacy Bitrix functionality to new microservices using a modern technology stack.</li>
                    </ul>

                    <div class="mt-4 d-flex align-center">
                      <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                      <div class="tech-stack-mini">Bitrix • Legacy Migration • Microservices Refactoring</div>
                    </div>
                  </div>
                </div>

                <div class="exp-item mb-12">
                  <div class="exp-dot"></div>
                  <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                    <div>
                      <div class="d-flex align-center flex-wrap gap-2 mb-1">
                        <h3 class="text-h4 font-weight-black">TSUM (Mercury Group)</h3>
                        <v-chip color="primary" size="small" variant="flat" class="font-weight-bold uppercase">TEAM LEAD</v-chip>
                      </div>
                      <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">High-Load E-commerce / Fashion Retail</div>
                    </div>
                    <div class="text-right">
                      <div class="text-body-2 font-weight-bold text-white">April 2021 — April 2022</div>
                    </div>
                  </div>

                  <div class="exp-content pl-6">
                    <ul class="custom-list">
                      <li><strong>Cross-functional Leadership:</strong> Managed a complete product cell including Developers, QA, Product Managers, and Business Analysts.</li>
                      <li><strong>Massive Scale:</strong> Managed High-Load systems handling nearly <strong>1 Billion data records</strong>.</li>
                      <li><strong>Service Ownership:</strong> Full accountability for <strong>6+ mission-critical services</strong> within the e-commerce ecosystem.</li>
                      <li><strong>Marketing-Tech Strategy:</strong> Spearheaded the Marketing product-engineering bridge, acting as a primary Stakeholder.</li>
                      <li><strong>Team Transformation:</strong> Completely rebuilt and upskilled the team to align with modern product requirements and tech standards.</li>
                      <li><strong>Innovation Driver:</strong> Initiated and oversaw the development of new services using cutting-edge technologies to solve specific business needs.</li>
                      <li><strong>Process Excellence:</strong> Built internal development workflows from scratch and streamlined interaction protocols between business units and external teams.</li>
                    </ul>

                    <div class="mt-4 d-flex align-center">
                      <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                      <div class="tech-stack-mini">High-Load (1B+ Records) • Management • MarTech • Strategic Planning</div>
                    </div>
                  </div>
                </div>

                <div class="exp-item mb-12">
                  <div class="exp-dot"></div>
                  <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                    <div>
                      <div class="d-flex align-center flex-wrap gap-2 mb-1">
                        <h3 class="text-h4 font-weight-black">Silverbird</h3>
                        <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">HEAD OF DEVELOPMENT</v-chip>
                      </div>
                      <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">Fintech / Banking Infrastructure</div>
                    </div>
                    <div class="text-right">
                      <div class="text-body-2 font-weight-bold text-white">Sept 2020 — April 2021</div>
                    </div>
                  </div>

                  <div class="exp-content pl-6">
                    <ul class="custom-list">
                      <li><strong>Banking Platform:</strong> Orchestrated the end-to-end creation and implementation of the core banking platform, infrastructure, and essential services.</li>
                      <li><strong>Operational Leadership:</strong> Assembled the engineering team from scratch; established business processes, administration protocols, and organizational workflows.</li>
                      <li><strong>Strategic Partnership:</strong> Managed cross-company interactions with partners, including joint strategic planning, training, and deep integration.</li>
                      <li><strong>Project Launch:</strong> Designed and launched ~10 mission-critical projects from the ground up, including API services, microservices, and integration layers.</li>
                      <li><strong>Macro-Banking Integration:</strong> Audited and deployed multi-level macro-banking platforms across diverse technology stacks, ensuring seamless platform enhancements.</li>
                      <li><strong>Update Architecture:</strong> Designed complex technical update flows and global architecture for application components and infrastructure.</li>
                      <li><strong>Technical Governance:</strong> Developed comprehensive technical documentation and administered both staging and production environments.</li>
                    </ul>

                    <div class="mt-4 d-flex align-center">
                      <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                      <div class="tech-stack-mini">Macro-Banking • Infrastructure Design • Team Leadership • API Architecture</div>
                    </div>
                  </div>
                </div>

                <div class="exp-item mb-12">
                  <div class="exp-dot"></div>
                  <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                    <div>
                      <div class="d-flex align-center flex-wrap gap-2 mb-1">
                        <h3 class="text-h4 font-weight-black">Gosuslugi</h3>
                        <v-chip color="primary" size="small" variant="flat" class="font-weight-bold">TECH ANALYST</v-chip>
                        <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">SENIOR DEV</v-chip>
                      </div>
                      <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">Digital Government Services</div>
                    </div>
                    <div class="text-right">
                      <div class="text-body-2 font-weight-bold text-white">Sept 2020 — April 2021</div>
                    </div>
                  </div>

                  <div class="exp-content pl-6">
                    <ul class="custom-list">
                      <li><strong>Feedback System:</strong> Development of the core feedback subsystem and related services.</li>
                      <li><strong>Fault Tolerance:</strong> Deep optimization and profiling to ensure system stability under extreme high-load conditions.</li>
                      <li><strong>System Refactoring:</strong> Structural refactoring of core system components for better maintainability and performance.</li>
                      <li><strong>System Integration:</strong> Orchestrating complex integrations with both internal and external third-party systems.</li>
                      <li><strong>State Auth Integration:</strong> Implementation of transparent SSO and authorization via ESIA (National Auth System).</li>
                      <li><strong>Data Normalization:</strong> Bringing complex data schemas to normal forms to ensure data integrity and performance.</li>
                      <li><strong>ROI Integration:</strong> Integration with ROI (Return on Investment) tracking and analytical systems.</li>
                    </ul>

                    <div class="mt-4 d-flex align-center">
                      <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                      <div class="tech-stack-mini">ESIA • High-Load Profiling • Data Normalization • System Integration</div>
                    </div>
                  </div>
                </div>

                <div class="exp-item mb-12">
                  <div class="exp-dot"></div>
                  <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                    <div>
                      <div class="d-flex align-center flex-wrap gap-2 mb-1">
                        <h3 class="text-h4 font-weight-black">TSUM (Mercury Group)</h3>
                        <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">SENIOR DEV</v-chip>
                      </div>
                      <div class="text-subtitle-2 text-primary opacity-80">Senior Software Engineer</div>
                    </div>
                    <div class="text-right">
                      <div class="text-body-2 font-weight-bold text-white">Feb 2018 — July 2020</div>
                    </div>
                  </div>

                  <div class="exp-content pl-6">
                    <ul class="custom-list">
                      <li><strong>Internal Product Development:</strong> Engineering and maintenance of the company's core internal ecosystem and software products.</li>
                      <li><strong>Data Synchronization:</strong> Debugging and fine-tuning complex data synchronization processes between various system components.</li>
                      <li><strong>Search Engineering:</strong> Implementation of high-performance search functionality and all related search-driven features.</li>
                      <li><strong>Service Innovation:</strong> Developed and launched several new services, including product feed generators, analytical monitoring systems, link shorteners, and QR-code generation engines.</li>
                      <li><strong>MarTech Evolution:</strong> Continuous development and scaling of marketing-focused services and promotional tools.</li>
                    </ul>

                    <div class="mt-4 d-flex align-center">
                      <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                      <div class="tech-stack-mini">Backend Development • Data Sync • Search Engines • MarTech Services</div>
                    </div>
                  </div>
                </div>

                <div class="exp-item mb-12">
                  <div class="exp-dot"></div>
                  <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                    <div>
                      <div class="d-flex align-center flex-wrap gap-2 mb-1">
                        <h3 class="text-h4 font-weight-black">JivoChat (JivoSite)</h3>
                        <v-chip color="primary" size="small" variant="flat" class="font-weight-bold">TEAM LEAD</v-chip>
                      </div>
                      <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">SaaS / Real-time Communication</div>
                    </div>
                    <div class="text-right">
                      <div class="text-body-2 font-weight-bold text-white">April 2016 — Nov 2017</div>
                    </div>
                  </div>

                  <div class="exp-content pl-6">
                    <ul class="custom-list">
                      <li><strong>Engineering Leadership:</strong> Managed a team of 6 people, overseeing architectural planning, code quality, and hands-on development for mission-critical business projects.</li>
                      <li><strong>Process Transformation:</strong> Implemented Scrum (tailored to team needs) including estimation, forecasting, and retrospectives. Automated major parts of the system to increase operational transparency.</li>
                      <li><strong>Efficiency Breakthrough:</strong> Boosted team productivity from 70% (missed deadlines) to 120% (over-delivery) through process optimization and workflow alignment.</li>
                      <li><strong>Stakeholder Management:</strong> Orchestrated communication between IT and other departments, ensuring a unified information field across all teams and stakeholders.</li>
                      <li><strong>Release Engineering:</strong> Owned the full release management cycle and deployment processes.</li>
                      <li><strong>Team Growth & Mentorship:</strong> Reorganized the team structure, leading to a significant increase in both individual and collective competencies. </li>
                      <li><strong>Knowledge Sharing:</strong> Achieved team interchangeability through cross-training; organized and led internal seminars, conferences, and technical workshops.</li>
                    </ul>

                    <div class="mt-4 d-flex align-center">
                      <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                      <div class="tech-stack-mini">Scrum Implementation • Team Reorganization • Release Management • High-Performance Culture</div>
                    </div>
                  </div>
                </div>

                <div class="exp-item mb-12">
                  <div class="exp-dot"></div>
                  <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                    <div>
                      <div class="d-flex align-center flex-wrap gap-2 mb-1">
                        <h3 class="text-h4 font-weight-black">VK (Vkontakte)</h3>
                        <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">SENIOR DEV</v-chip>
                      </div>
                      <v-chip size="x-small" color="grey" variant="outlined">NDA PROJECTS</v-chip>
                    </div>
                    <div class="text-body-2 font-weight-bold text-white">Jan 2016 — March 2016</div>
                  </div>
                  <div class="exp-content pl-6">
                    <p class="text-body-2 text-grey-lighten-1">PHP Development for high-load specialized projects under strict NDA.</p>
                  </div>
                </div>

                <div class="exp-item mb-12">
                  <div class="exp-dot"></div>
                  <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                    <div>
                      <div class="d-flex align-center flex-wrap gap-2 mb-1">
                        <h3 class="text-h4 font-weight-black">Activizm.ru</h3>
                        <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">SENIOR DEV</v-chip>
                      </div>
                      <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">E-commerce</div>
                    </div>
                    <div class="text-right">
                      <div class="text-body-2 font-weight-bold text-white">Aug 2014 — Dec 2015</div>
                    </div>
                  </div>

                  <div class="exp-content pl-6">
                    <ul class="custom-list">
                      <li><strong>Feature Engineering:</strong> Developed new core features and provided comprehensive support for the existing platform functionality.</li>
                      <li><strong>AdTech Integration:</strong> Seamlessly integrated Google AdWords and Yandex.Direct APIs for automated marketing management.</li>
                      <li><strong>Data Syndication:</strong> Managed large-scale data exports to Google Merchant Center (Content Center) for product listing ads.</li>
                      <li><strong>Marketing Ecosystem:</strong> Engineered product feed generation systems and integrated them with various external marketing services.</li>
                      <li><strong>Performance Engineering:</strong> Conducted deep code refactoring, system profiling, and database optimization to improve platform stability.</li>
                    </ul>

                    <div class="mt-4 d-flex align-center">
                      <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                      <div class="tech-stack-mini">PHP • Google AdWords API • Data Feed Engineering • Profiling & Optimization</div>
                    </div>
                  </div>
                </div>

                <div class="exp-item mb-12">
                  <div class="exp-dot"></div>
                  <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                    <div>
                      <div class="d-flex align-center flex-wrap gap-2 mb-1">
                        <h3 class="text-h4 font-weight-black">Mamba</h3>
                        <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">SENIOR DEV</v-chip>
                      </div>
                      <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">Social Discovery</div>
                    </div>
                    <div class="text-right">
                      <div class="text-body-2 font-weight-bold text-white">Nov 2013 — July 2014</div>
                    </div>
                  </div>

                  <div class="exp-content pl-6">
                    <ul class="custom-list">
                      <li><strong>High-Load Engineering:</strong> Developed features and core functionality for a massive social platform serving tens of millions of active users.</li>
                      <li><strong>Notification Engine:</strong> Designed and implemented a high-performance notification delivery system.</li>
                      <li><strong>Low-Level Integration:</strong> Integrated and debugged system interactions with custom-built C-based daemons to ensure low-latency processing.</li>
                      <li><strong>Mail Service Refactoring:</strong> Architected a complete refactor of the email interaction system and mail gateway protocols.</li>
                      <li><strong>Abuse & Subscription Logic:</strong> Enhanced the processing systems for user complaints, reports, and automated unsubscription flows.</li>
                      <li><strong>Database Performance:</strong> Optimized complex database operations utilizing both SQL and RRDtool (Round Robin Database) for time-series data.</li>
                    </ul>

                    <div class="mt-4 d-flex align-center">
                      <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                      <div class="tech-stack-mini">High-Load • C Daemons • RRDtool • SQL Optimization • Notification Systems</div>
                    </div>
                  </div>
                </div>

                <div class="exp-item mb-12">
                  <div class="exp-dot"></div>
                  <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                    <div>
                      <div class="d-flex align-center flex-wrap gap-2 mb-1">
                        <h3 class="text-h4 font-weight-black">Enter.ru</h3>
                        <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">SENIOR DEV</v-chip>
                      </div>
                      <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">Multi-channel Retailer</div>
                    </div>
                    <div class="text-right">
                      <div class="text-body-2 font-weight-bold text-white">May 2012 — Aug 2013</div>
                    </div>
                  </div>

                  <div class="exp-content pl-6">
                    <ul class="custom-list">
                      <li><strong>Core Architecture:</strong> Development of the core information infrastructure and engineering of external APIs.</li>
                      <li><strong>Fintech Integration:</strong> Integrated credit brokerage systems to enable real-time online installment and credit purchases.</li>
                      <li><strong>Enterprise Systems:</strong> Orchestrated deep integration with 1C enterprise management systems.</li>
                      <li><strong>Marketing Automation:</strong> Integrated the Ofsys mailing system for automated customer communications.</li>
                      <li><strong>CMS & Extensions:</strong> Deployed WordPress as a CMS solution, integrated it into the main site, and developed numerous custom plugins.</li>
                      <li><strong>Legacy Decommissioning:</strong> Performed a comprehensive site refactoring, including the architectural migration to remove Symfony dependencies.</li>
                    </ul>

                    <div class="mt-4 d-flex align-center">
                      <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                      <div class="tech-stack-mini">Core Engineering • Fintech API • 1C Integration • Symfony Migration</div>
                    </div>
                  </div>
                </div>

                <div class="exp-item mb-12">
                  <div class="exp-dot"></div>
                  <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                    <div>
                      <div class="d-flex align-center flex-wrap gap-2 mb-1">
                        <h3 class="text-h4 font-weight-black">Wikimart</h3>
                        <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">SENIOR DEV</v-chip>
                      </div>
                      <div class="text-subtitle-2 text-primary opacity-80 tracking-wide">E-commerce Marketplace</div>
                    </div>
                    <div class="text-right">
                      <div class="text-body-2 font-weight-bold text-white">Aug 2009 — April 2012</div>
                    </div>
                  </div>

                  <div class="exp-content pl-6">
                    <ul class="custom-list">
                      <li><strong>Billing Infrastructure:</strong> Designed and developed the core billing system from the ground up.</li>
                      <li><strong>Database Engineering:</strong> Performed comprehensive refactoring of database trigger systems and complex stored procedures.</li>
                      <li><strong>Data Ingestion Services:</strong> Engineered high-throughput services for importing <strong>YML and CSV</strong> data feeds containing massive product catalogs from various merchants.</li>
                      <li><strong>Search & Merchandising:</strong> Developed the site-wide search engine and built merchandising systems (promotions, special offers, and virtual storefronts).</li>
                      <li><strong>Growth Tools:</strong> Developed the affiliate program platform and contributed to the internal <strong>CRM system</strong> development.</li>
                      <li><strong>Full-Stack Evolution:</strong> Led the total site redesign and participated in global system architecture planning, delivering numerous full-stack features.</li>
                    </ul>

                    <div class="mt-4 d-flex align-center">
                      <v-icon :icon="mdiCodeTags" size="14" color="primary" class="mr-2" />
                      <div class="tech-stack-mini">Billing Systems • DB Optimization • Search Engines • ETL / Data Import</div>
                    </div>
                  </div>
                </div>

                <div class="exp-item mb-12">
                  <div class="exp-dot"></div>
                  <div class="exp-header d-flex justify-space-between align-start flex-wrap mb-4">
                    <div>
                      <div class="d-flex align-center flex-wrap gap-2 mb-1">
                        <h3 class="text-h4 font-weight-black">MIF</h3>
                        <v-chip color="secondary" size="small" variant="flat" class="font-weight-bold">SENIOR DEV</v-chip>
                      </div>
                      <div class="text-subtitle-2 text-error font-weight-bold">Security & Low-Level Systems Researcher</div>
                    </div>
                    <div class="text-right">
                      <div class="text-body-2 font-weight-bold text-white">Sept 2008 — Aug 2009</div>
                    </div>
                  </div>

                  <div class="exp-content pl-6">
                      <ul class="custom-list">
                        <li><strong>Full-Chain Vulnerability Analysis:</strong> Conducted end-to-end security research on major browser engines and Adobe Reader. Developed <strong>functional RCE (Remote Code Execution) exploits (Only Proof-of-Concept)</strong> to demonstrate critical memory corruption flaws using <strong>WinDbg, x86 Assembly</strong>, and advanced heap-spraying techniques.</li>
                        <li><strong>High-Concurrency C&C Architecture:</strong> Engineered ultra-lightweight remote management agents (4KB binaries) and command-and-control (C2) infrastructures using <strong>C (WinAPI) and Lua</strong>. Focus on extreme binary optimization and stealthy network communication.</li>
                        <li><strong>Polymorphic Code Protection:</strong> Developed a sophisticated machine-based obfuscator. It featured a custom code translator (Python/JS to pseudocode) designed to bypass heuristic analysis and static signature detection engines.</li>
                        <li><strong>Algorithmic Network Topology:</strong> Designed and implemented automated systems for large-scale content generation and inter-linked network structures (Ring & Pyramid topologies). Optimized link-graph algorithms to maximize search engine indexing efficiency.</li>
                        <li><strong>Infrastructure Monetization:</strong> Developed specialized platforms for client hardware resource acquisition and satellite site generation systems.</li>
                        <li><strong>Systems Mindset:</strong> This era defined my "low-level first" approach. Understanding memory corruption and CPU-level execution is what allows me today to build high-load systems that are inherently secure.</li>
                      </ul>

                    <div class="mt-4 d-flex align-center">
                      <v-icon :icon="mdiShieldBug" size="14" color="error" class="mr-2" />
                      <div class="tech-stack-mini">Reverse Engineering • RCE • WinDbg • Assembler • Crypto • C/C++</div>
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
              <h2 class="text-h3 font-weight-black text-uppercase tracking-widest mb-1">Publications</h2>
              <div class="text-subtitle-2 text-primary opacity-70">Deep Tech & Security Research</div>
            </div>
            <v-divider class="ml-6 border-opacity-25" />
          </div>

          <v-row>
            <v-col cols="12" lg="4" md="6">
              <v-card
                  href="https://levelup.gitconnected.com/buffer-overflow-for-beginners-edf9f9d593e2"
                  target="_blank"
                  class="pub-card h-100 pa-6 d-flex flex-column"
                  variant="flat"
                  color="grey-darken-4"
              >
                <div class="d-flex justify-space-between align-start mb-4">
                  <v-chip color="error" size="x-small" variant="flat" class="font-weight-bold">EXPLOIT DEV</v-chip>
                  <v-icon :icon="mdiPostOutline" size="24" class="opacity-50" />
                </div>
                <h3 class="text-h5 font-weight-bold mb-3 line-height-tight">Buffer Overflow for Beginners</h3>
                <p class="text-body-2 text-grey-lighten-1 mb-6 flex-grow-1">
                  Technical deep-dive into memory corruption, stack smashing, and the fundamentals of writing exploit code.
                </p>
                <div class="text-button text-primary d-flex align-center">
                  Read Article <v-icon :icon="mdiArrowRight" size="16" class="ml-2" />
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" lg="4" md="6">
              <v-card
                  href="https://levelup.gitconnected.com/the-fundamental-vulnerability-of-networks-arp-spoofing-172d51947872"
                  target="_blank"
                  class="pub-card h-100 pa-6 d-flex flex-column"
                  variant="flat"
                  color="grey-darken-4"
              >
                <div class="d-flex justify-space-between align-start mb-4">
                  <v-chip color="warning" size="x-small" variant="flat" class="font-weight-bold">NETWORK SECURITY</v-chip>
                  <v-icon :icon="mdiPostOutline" size="24" class="opacity-50" />
                </div>
                <h3 class="text-h5 font-weight-bold mb-3 line-height-tight">ARP Spoofing: Network Vulnerability</h3>
                <p class="text-body-2 text-grey-lighten-1 mb-6 flex-grow-1">
                  Analysis of fundamental local network weaknesses and practical demonstration of MITM (Man-in-the-Middle) concepts.
                </p>
                <div class="text-button text-primary d-flex align-center">
                  Read Article <v-icon :icon="mdiArrowRight" size="16" class="ml-2" />
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" lg="4" md="6">
              <v-card
                  href="https://medium.com/gitconnected/the-power-of-udf-functions-in-mysql-data-encryption-using-c-and-openssl-484f511eff98"
                  target="_blank"
                  class="pub-card h-100 pa-6 d-flex flex-column"
                  variant="flat"
                  color="grey-darken-4"
              >
                <div class="d-flex justify-space-between align-start mb-4">
                  <v-chip color="info" size="x-small" variant="flat" class="font-weight-bold">DATABASE CRYPTO</v-chip>
                  <v-icon :icon="mdiPostOutline" size="24" class="opacity-50" />
                </div>
                <h3 class="text-h5 font-weight-bold mb-3 line-height-tight">The Power of UDF in MySQL</h3>
                <p class="text-body-2 text-grey-lighten-1 mb-6 flex-grow-1">
                  Extending MySQL capabilities with C and OpenSSL to implement robust field-level data encryption.
                </p>
                <div class="text-button text-primary d-flex align-center">
                  Read Article <v-icon :icon="mdiArrowRight" size="16" class="ml-2" />
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
              <h2 class="text-h3 font-weight-black text-uppercase tracking-widest mb-1">Code Portfolio</h2>
              <div class="text-subtitle-2 text-primary opacity-70">Open Source Projects & Technical Snippets</div>
            </div>
            <v-divider class="ml-6 border-opacity-25" />
          </div>

          <v-row>
            <v-col cols="12" md="6" lg="4">
              <div class="repo-group-label mb-4 d-flex align-center">
                <v-icon :icon="mdiLanguageCpp" color="blue" class="mr-2" />
                <span class="font-weight-bold uppercase">C / C++ (Systems & Security)</span>
              </div>
              <div class="repo-list">
                <a
                    v-for="repo in [
                        { name: 'Algorithms', link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/alghoritms' },
            { name: 'MySQL OpenSSL Plugin', link: 'https://github.com/white-rabbit-1-sketch/mysql-openssl' },
            { name: 'ARP Spoofer (Security)', link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/arp-spoofer' },
            { name: 'Shellcode Generator', link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/shellcode-generator' },
            { name: 'YansDB (NoSQL Storage)', link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/yansdb' },
            { name: 'TCP/IP Broadcast Server', link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/broadcasting-server' },
            { name: 'Lightness HID Tool', link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/lightness-hid' },
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
                <span class="font-weight-bold uppercase">Python, Go, Lua</span>
              </div>
              <div class="repo-list">
                <a
                    v-for="repo in [
            { name: 'Go: Concurrent Crawler', link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/golang-crawler' },
             { name: 'Python: Helicopter Game', link: 'https://github.com/white-rabbit-1-sketch/helicopter' },
             { name: 'L2 Lottery Bot', link: 'https://github.com/white-rabbit-1-sketch/lineage-2-lottery-bot' },
             { name: 'Python: Web Cryptor', link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/web-cryptor' },
            { name: 'Python: Lightness Monitor', link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/lightness' },

            { name: 'Lua: Simple Installer', link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/lua-installer' },
            { name: 'Godot: Fox Wild Hunt', link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/cute_fox_wild_hunt' }
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
                <span class="font-weight-bold uppercase">PHP, Java, TypeScript</span>
              </div>
              <div class="repo-list">
                <a
                    v-for="repo in [
                         { name: 'PHP: File Hash Map', link: 'https://github.com/white-rabbit-1-sketch/php-file-hash-map' },
            { name: 'PHP: Worker Pool (System V)', link: 'https://github.com/white-rabbit-1-sketch/php-worker-pool' },
            { name: 'Email alias: Java Backend', link: 'https://github.com/white-rabbit-1-sketch/alunea-alias-backend' },
            { name: 'Email alias: Angular Front', link: 'https://github.com/white-rabbit-1-sketch/alunea-alias-frontend' },
            { name: 'Email alias: Ansible CI/CD', link: 'https://github.com/white-rabbit-1-sketch/alunea-alias-ansible' },
            { name: 'Various PHP Snippets', link: 'https://github.com/white-rabbit-1-sketch/snippets/tree/master/php-snippets' }
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
              <h2 class="text-h3 font-weight-black text-uppercase tracking-widest mb-1">Current Venture</h2>
              <div class="text-subtitle-2 text-primary opacity-70">Founder & Lead Architect • <a href="https://alunea.io" target="_blank" class="text-primary text-decoration-none">alunea.io</a></div>
            </div>
            <v-divider class="ml-6 border-opacity-25" />
          </div>

          <v-card class="project-main-card pa-8" variant="flat" color="grey-darken-4">
            <v-row>
              <v-col cols="12" lg="8">
                <div class="d-flex align-center mb-4">
                  <h3 class="text-h4 font-weight-black mr-4">Alunea</h3>
                  <v-chip color="primary" size="small" variant="flat" class="font-weight-bold">AI LANGUAGE LEARNING</v-chip>
                </div>

                <p class="text-body-1 text-grey-lighten-2 mb-6 line-height-relaxed">
                  An advanced learning ecosystem that bridges the gap between passive content consumption and active speaking.
                  Alunea transforms streaming platforms into personal classrooms using <strong>AI-driven subtitles</strong> and
                  <strong>voice-interactive tutors</strong>.
                </p>

                <v-row class="mb-6">
                  <v-col cols="12" sm="6">
                    <div class="feature-item mb-4">
                      <div class="d-flex align-center mb-1">
                        <v-icon :icon="mdiMicrophone" color="primary" size="20" class="mr-2" />
                        <span class="text-h6 font-weight-bold">AI Voice Tutor "Violet"</span>
                      </div>
                      <p class="text-caption text-grey">Interactive AI calls for speaking practice, utilizing saved vocabulary from shows for active recall.</p>
                    </div>
                    <div class="feature-item">
                      <div class="d-flex align-center mb-1">
                        <v-icon :icon="mdiClosedCaption" color="primary" size="20" class="mr-2" />
                        <span class="text-h6 font-weight-bold">Real-time AI Subtitles</span>
                      </div>
                      <p class="text-caption text-grey">Context-aware dual subtitles and on-the-fly generation for Netflix, YouTube, and Disney+.</p>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <div class="feature-item mb-4">
                      <div class="d-flex align-center mb-1">
                        <v-icon :icon="mdiSync" color="primary" size="20" class="mr-2" />
                        <span class="text-h6 font-weight-bold">Unified Ecosystem</span>
                      </div>
                      <p class="text-caption text-grey">Instant word-sync between browser extension, mobile apps (iOS/Android), and AI backend.</p>
                    </div>
                    <div class="feature-item">
                      <div class="d-flex align-center mb-1">
                        <v-icon :icon="mdiBrain" color="primary" size="20" class="mr-2" />
                        <span class="text-h6 font-weight-bold">Adaptive Learning</span>
                      </div>
                      <p class="text-caption text-grey">System analyzes skill levels to tailor conversation difficulty and recommendation logic.</p>
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
                    Visit alunea.io
                  </v-btn>
                  <div class="text-center">
                    <div class="text-overline mb-2 text-grey">Infrastructure</div>
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
          <div class="section-label mb-8">Education</div>

          <v-row>
            <v-col cols="12" md="12">
              <v-card variant="flat" class="education-card pa-6">
                <div class="d-flex align-center mb-6">
                  <v-avatar color="rgba(var(--v-theme-primary), 0.1)" rounded="lg" class="mr-4">
                    <v-icon :icon="mdiSchoolOutline" color="primary" />
                  </v-avatar>
                  <h3 class="text-h6 font-weight-bold">Academic Background</h3>
                </div>

                <div class="education-item mb-6 pl-4 border-left">
                  <div class="d-flex justify-space-between align-start flex-wrap">
                    <div>
                      <div class="text-subtitle-1 font-weight-bold text-white">Moscow University of Industry and Finance "Synergy"</div>
                      <div class="text-body-2 text-primary mb-1">Software Engineering & Information Systems Administration</div>
                    </div>
                    <v-chip size="small" variant="tonal" color="primary">2026 (Expected)</v-chip>
                  </div>
                  <div class="text-caption text-grey">Specialization: Fullstack Development</div>
                </div>

                <div class="education-item mb-6 pl-4 border-left">
                  <div class="d-flex justify-space-between align-start flex-wrap">
                    <div>
                      <div class="text-subtitle-1 font-weight-bold text-white">Modern Technical Institute</div>
                      <div class="text-body-2 text-grey-lighten-1 mb-1">Service</div>
                    </div>
                    <v-chip size="small" variant="tonal" color="grey">2015</v-chip>
                  </div>
                </div>

                <div class="education-item pl-4 border-left">
                  <div class="d-flex justify-space-between align-start flex-wrap">
                    <div>
                      <div class="text-subtitle-1 font-weight-bold text-white">Moscow College of Mathematics</div>
                      <div class="text-body-2 text-grey-lighten-1 mb-1">Computer Programming & Automated Systems</div>
                    </div>
                    <v-chip size="small" variant="tonal" color="grey">2008</v-chip>
                  </div>
                  <div class="text-caption text-grey">The foundation of my CS background, algorithms, and low-level logic.</div>
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
              <h2 class="text-h3 font-weight-black text-uppercase tracking-widest mb-1">Certifications</h2>
              <div class="text-subtitle-2 text-primary opacity-70">Industry-Recognized Professional Credentials</div>
            </div>
            <v-divider class="ml-6 border-opacity-25" />
          </div>

          <v-row justify="start">
            <v-col cols="12" md="10" lg="8">
              <v-card
                  class="cert-card-full overflow-hidden"
                  variant="outlined"
                  border="primary"
              >
                <div class="cert-image-container bg-grey-darken-4">
                  <v-img
                      :src="zendImage"
                      alt="Zend PHP Certification"
                      class="cert-img-full"
                      width="100%"
                  >
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
                      <h3 class="text-h5 font-weight-black mb-1">Zend PHP Certified Engineer</h3>

                      <div class="text-body-2 text-grey-lighten-1 d-flex align-center mt-2">
                        <v-icon :icon="mdiShieldCheck" size="16" class="mr-2 text-success" />
                        Verified Professional Certification • Industry Standard for PHP Engineering
                      </div>
                    </v-col>

                  </v-row>

                  <div class="d-flex flex-wrap gap-2 mt-4">
                    <v-chip size="small" color="primary" variant="outlined">Zend Framework Mastery</v-chip>
                    <v-chip size="small" color="primary" variant="outlined">Core PHP Internals</v-chip>
                    <v-chip size="small" color="primary" variant="outlined">Security Best Practices</v-chip>
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
              <h2 class="text-h3 font-weight-black text-uppercase tracking-widest mb-1">The Backstory</h2>
              <div class="text-subtitle-2 text-primary opacity-70">From Delphi to High-Load Architect</div>
            </div>
            <v-divider class="ml-6 border-opacity-25" />
          </div>

          <v-card class="pa-8 backstory-card" variant="flat" color="grey-darken-4">
            <v-row>
              <v-col cols="12" md="6" class="mb-6">
                <h4 class="text-h6 font-weight-bold text-white mb-4 d-flex align-center">
                  <v-icon :icon="mdiXml" size="20" class="mr-2 text-primary" />
                  Genesis & Early Exploits
                </h4>
                <div class="text-body-2 text-grey-lighten-1 line-height-relaxed">
                  <p class="mb-3">Started at 14 with a <strong>Delphi</strong> book and no internet. By college, I was neck-deep in <strong>Pascal, VBA, Firebird</strong>, and hacking the lab's WinServer 2x network. My first big project? A <strong>WoW server (MaNGOS)</strong> on C++ where I learned the pain of patching binary files.</p>
                  <p>The real fun started with <strong>Lineage 2</strong>. I built a custom <strong>Socks4/5 proxy layer</strong> to intercept and modify packets on-the-fly. It was pure raw socket magic—completely invisible to anti-cheat systems. Later, I built <strong>0-day exploits</strong> for Firefox and Adobe Reader by finding crashes via Google and spending nights in <strong>WinDbg/OllyDbg</strong>.</p>
                </div>
              </v-col>

              <v-col cols="12" md="6" class="mb-6">
                <h4 class="text-h6 font-weight-bold text-white mb-4 d-flex align-center">
                  <v-icon :icon="mdiGhost" size="20" class="mr-2 text-primary" />
                  The "Grey" Era & Lua Mastery
                </h4>
                <div class="text-body-2 text-grey-lighten-1 line-height-relaxed">
                  <p class="mb-3">Developing botnets taught me extreme optimization. I integrated a <strong>Lua</strong> interpreter into a C-core, stripped the parser, and fed it raw bytecode—the result was a <strong>4KB binary</strong>. Try doing that with Python or PHP!</p>
                  <p>I built my own <strong>custom cryptor</strong> based on a Python-to-Pseudocode translator with binary tree algorithms and heavy obfuscation. I even discovered that bypassing <strong>Kaspersky</strong> back then was possible just by using <strong>CMD/FTP</strong> for shellcode instead of standard WinAPI—it simply didn't hook the command line the same way.</p>
                </div>
              </v-col>

              <v-col cols="12">
                <v-divider class="mb-8 border-opacity-25" />
                <h4 class="text-h6 font-weight-bold text-primary mb-6 text-center text-uppercase">Architectural Philosophy & "Religion"</h4>
                <v-row>
                  <v-col cols="12" md="4">
                    <div class="manifesto-item">
                      <span class="font-weight-bold text-white d-block mb-1">Infrastructure:</span>
                      <p class="text-caption text-grey"><strong>Debian</strong> is the only stable choice. Use <strong>UDP</strong> instead of TCP wherever real-time performance matters.</p>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <div class="manifesto-item">
                      <span class="font-weight-bold text-white d-block mb-1">Databases:</span>
                      <p class="text-caption text-grey"><strong>Foreign Keys are evil</strong> (except for billing). Stop the subquery madness and stop treating the DB like a trash can. Use <strong>Redis/Memcached</strong> and proper composite indexes.</p>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <div class="manifesto-item">
                      <span class="font-weight-bold text-white d-block mb-1">Architecture:</span>
                      <p class="text-caption text-grey">Thin clients (PHP) => High-speed Microservices (Go/Java Spring). No monoliths. I even designed a <strong>fully decentralized P2P trust ring</strong> that is impossible to shut down.</p>
                    </div>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="12" class="mt-4">
                <div class="pinba-box pa-4 rounded-lg">
                  <v-icon :icon="mdiBugOutline" size="18" class="mr-2 text-warning" />
                  <span class="text-caption font-italic text-grey-lighten-1">
            <strong>The "Pinba" Incident:</strong> Once spent 24 hours debugging a broken auth system. It turned out <strong>Pinba</strong> was corrupting the virtual function stack, shifting it by a few bytes. The interpreter was literally calling random methods. That’s why I don’t trust "magic" monitoring tools anymore.
          </span>
                </div>
              </v-col>
            </v-row>

            <div class="mt-8 text-center">
              <div class="text-h5 font-weight-black text-primary italic-quote">
                "I love computers, I understand them, and they understand me."
              </div>
            </div>
          </v-card>
        </section>


      </v-container>
    </v-main>
  </v-app>
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
  background: rgba(255, 255, 255, 0.02) !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  border-radius: 16px !important;
  transition: all 0.3s ease;
}

.tech-card:hover {
  background: rgba(255, 255, 255, 0.04) !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
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
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  border-radius: 16px !important;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.pub-card:hover {
  transform: translateY(-8px);
  background: rgba(var(--v-theme-primary), 0.08) !important;
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
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
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  border-radius: 24px !important;
  background: linear-gradient(165deg, rgba(30,30,30,1) 0%, rgba(10,10,10,1) 100%) !important;
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
  border-radius: 24px !important;
  background: rgba(var(--v-theme-primary), 0.02) !important;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.cert-card-full:hover {
  transform: translateY(-8px);
  border-color: rgba(var(--v-theme-primary), 0.8) !important;
  box-shadow: 0 12px 30px rgba(0,0,0,0.5) !important;
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
  background: rgba(255, 255, 255, 0.03) !important;
  border: 1px solid rgba(var(--v-theme-primary), 0.1) !important;
  border-radius: 24px !important;
  backdrop-filter: blur(10px);
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
  background: rgba(255, 255, 255, 0.02) !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  border-radius: 20px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.stack-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.04) !important;
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4) !important;
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
  background: rgba(255, 255, 255, 0.02) !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  border-radius: 20px !important;
  transition: transform 0.3s ease;
}

.achievement-card:hover {
  background: rgba(255, 255, 255, 0.04) !important;
  border-color: rgba(var(--v-theme-primary), 0.2) !important;
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
  background: rgba(255, 255, 255, 0.02) !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  border-radius: 24px !important;
}

.border-left {
  border-left: 2px solid rgba(var(--v-theme-primary), 0.2);
  transition: border-color 0.3s ease;
}

.education-item:hover {
  border-left-color: rgba(var(--v-theme-primary), 1);
}
</style>