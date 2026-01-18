<script setup>
import {
  mdiMapMarkerOutline, mdiEmail, mdiSend, mdiGithub, mdiLinkedin, mdiWhatsapp,
  mdiSchoolOutline, mdiCertificateOutline, mdiShieldCheckOutline, mdiCpu64Bit, mdiBankOutline, mdiRocketLaunchOutline, mdiSecurity
} from "@mdi/js"
import Header from "@/component/layout/Header.vue";
import {useTheme} from "vuetify";
import {useI18n} from "vue-i18n";

const { t } = useI18n();

const theme = useTheme();
theme.global.name.value = 'light';
</script>

<template>
  <div class="layout">
    <div class="header" id="header">
      <Header />
    </div>
    <div class="content pb-0">
      <div class="pdf-resume-container">
        <header class="resume-header">
          <div class="header-main">
            <h1 class="name">{{t('l5')}}</h1>
            <div class="target-role" v-html="t('l500')"></div>
          </div>

          <div class="contact-grid">
            <div class="contact-item">
              <v-icon size="14" color="primary">{{ mdiMapMarkerOutline }}</v-icon>
              {{ t('l501') }}
            </div>

            <a href="https://t.me/dance_with_rabbit" target="_blank" class="contact-item link">
              <v-icon size="14" color="primary">{{ mdiSend }}</v-icon>
              @dance_with_rabbit
            </a>

            <a href="https://wa.me/+37493510616" target="_blank" class="contact-item link">
              <v-icon size="14" color="#25D366">{{ mdiWhatsapp }}</v-icon>
              +374 93 510 616
            </a>

            <a href="https://www.linkedin.com/in/mikhail-chuloshnikov-176792286/" target="_blank" class="contact-item link">
              <v-icon size="14" color="#0077B5">{{ mdiLinkedin }}</v-icon>
              {{ t('l502') }}
            </a>

            <a href="mailto:cv@fkitty.com" class="contact-item link">
              <v-icon size="14" color="primary">{{ mdiEmail }}</v-icon>
              cv@fkitty.com
            </a>
          </div>
        </header>

        <div class="main-layout">
          <aside class="sidebar">
            <section class="sidebar-section">
              <h3 class="side-title">{{ t('l503') }}</h3>
              <div class="skill-category">
                <div class="cat-name">{{ t('l504') }}</div>
                <div class="skill-group">
                  <span class="skill-tag">PHP</span>
                  <span class="skill-tag">Go</span>
                  <span class="skill-tag">Python</span>
                  <span class="skill-tag">TypeScript</span>
                </div>
              </div>
              <div class="skill-category">
                <div class="cat-name">{{ t('l505') }}</div>
                <div class="skill-group">
                  <span class="skill-tag">Symfony</span>
                  <span class="skill-tag">Doctrine</span>
                  <span class="skill-tag">Vue</span>
                  <span class="skill-tag">Angular</span>
                  <span class="skill-tag">Capacitor</span>
                  <span class="skill-tag">MySQL</span>
                  <span class="skill-tag">PostgreSQL</span>
                  <span class="skill-tag">Redis</span>
                  <span class="skill-tag">Memcached</span>
                  <span class="skill-tag">RabbitMQ</span>
                  <span class="skill-tag">Kafka</span>
                  <span class="skill-tag">Ansible</span>
                  <span class="skill-tag">Docker</span>
                  <span class="skill-tag">Git</span>
                  <span class="skill-tag">CI/CD</span>
                  <span class="skill-tag">Nginx</span>
                  <span class="skill-tag">Caddy</span>
                  <span class="skill-tag">Raw sockets</span>
                  <span class="skill-tag">Github Actions</span>
                  <span class="skill-tag">Debian</span>
                  <span class="skill-tag">Elasticsearch</span>
                  <span class="skill-tag">Grafana</span>
                  <span class="skill-tag">Loki</span>
                  <span class="skill-tag">Alloy</span>
                  <span class="skill-tag">Sharding</span>
                  <span class="skill-tag">Load Balancing</span>
                  <span class="skill-tag">SOA</span>
                  <span class="skill-tag">Exploit</span>
                  <span class="skill-tag">RCE</span>
                  <span class="skill-tag">Buffer Overflow</span>
                  <span class="skill-tag">OllyDbg</span>
                  <span class="skill-tag">GDB</span>
                  <span class="skill-tag">Deobfuscation</span>
                  <span class="skill-tag">Strace</span>
                </div>
              </div>
            </section>

            <section class="sidebar-section">
              <h3 class="side-title">{{ t('l506') }}</h3>
              <ul class="expert-list">
                <li>{{ t('l507') }}</li>
                <li>{{ t('l508') }}</li>
                <li>{{ t('l509') }}</li>
                <li>{{ t('l510') }}</li>
                <li>{{ t('l511') }}</li>
              </ul>
            </section>

            <section class="sidebar-section">
              <h3 class="side-title">{{ t('l512') }}</h3>

              <div class="cert-item-detailed">
                <div class="cert-name">{{ t('l513') }}</div>
              </div>
            </section>

            <section class="sidebar-section">
              <h3 class="side-title">{{ t('l514') }}</h3>

              <div class="edu-item-compact">
                <div class="edu-uni"><strong>{{ t('l515') }}</strong></div>
                <div class="edu-spec">{{ t('l516') }}</div>
              </div>

              <div class="edu-item-compact mt-3">
                <div class="edu-uni"><strong>{{ t('l517') }}</strong></div>
                <div class="edu-spec">{{ t('l518') }}</div>
              </div>

              <div class="edu-item-compact mt-3">
                <div class="edu-uni"><strong>{{ t('l519') }}</strong></div>
                <div class="edu-spec">{{ t('l520') }}</div>
              </div>
            </section>
          </aside>

          <main class="experience-content">
            <section class="summary-section">
              <div class="experience-badge">
                <span class="exp-years">{{ t('l698') }}</span>
                <span class="exp-text">{{ t('l696') }}</span>
              </div>
              <p class="summary-text">
                {{ t('l697') }}
              </p>
            </section>

            <h3 class="section-heading">{{ t('l521') }}</h3>

            <div class="case-card">
              <div class="job-header">
                <div class="company-info">
                  <v-icon color="primary" class="mr-1" size="18">{{ mdiBankOutline }}</v-icon>
                  <span class="company-name">Silverbird (Theropod LTD)</span>
                  <span class="role-title">{{ t('l522') }}</span>
                </div>
                <span class="period">{{ t('l523') }}</span>
              </div>
              <ul class="achievements">
                <li><strong>{{ t('l524') }}</strong> {{ t('l525') }}</li>
                <li><strong>{{ t('l526') }}</strong> {{ t('l527') }}</li>
                <li><strong>{{ t('l528') }}</strong> {{ t('l529') }}</li>
                <li><strong>{{ t('l530') }}</strong> {{ t('l531') }}</li>
                <li><strong>{{ t('l532') }}</strong> {{ t('l533') }}</li>
                <li><strong>{{ t('l534') }}</strong> {{ t('l535') }}</li>
                <li><strong>{{ t('l536') }}</strong> {{ t('l537') }}</li>
              </ul>
              <div class="tag-row">
                <span class="mini-tag">{{ t('l538') }}</span><span class="mini-tag">{{ t('l539') }}</span><span class="mini-tag">{{ t('l540') }}</span>
              </div>
            </div>

            <div class="case-card mt-4">
              <div class="job-header">
                <div class="company-info">
                  <v-icon color="primary" class="mr-1" size="18">{{ mdiRocketLaunchOutline }}</v-icon>
                  <span class="company-name">TSUM (Mercury Group)</span>
                  <span class="role-title">{{ t('l541') }}</span>
                </div>
                <span class="period">{{ t('l542') }}</span>
              </div>
              <ul class="achievements">
                <li><strong>{{ t('l543') }}</strong> {{ t('l544') }}</li>
                <li><strong>{{ t('l545') }}</strong> {{ t('l546') }}</li>
                <li><strong>{{ t('l547') }}</strong> {{ t('l548') }}</li>
                <li><strong>{{ t('l549') }}</strong> {{ t('l550') }}</li>
                <li><strong>{{ t('l551') }}</strong> {{ t('l552') }}</li>
                <li><strong>{{ t('l553') }}</strong> {{ t('l554') }}</li>
                <li><strong>{{ t('l555') }}</strong> {{ t('l556') }}</li>
              </ul>
              <div class="tag-row">
                <span class="mini-tag">{{ t('l557') }}</span><span class="mini-tag">{{ t('l558') }}</span><span class="mini-tag">{{ t('l559') }}</span>
              </div>
            </div>

            <div class="case-card mt-4">
              <div class="job-header">
                <div class="company-info">
                  <v-icon color="primary" class="mr-1" size="18">{{ mdiSecurity }}</v-icon>
                  <span class="company-name">MIF</span>
                  <span class="role-title">{{ t('l560') }}</span>
                </div>
                <span class="period">{{ t('l561') }}</span>
              </div>
              <ul class="achievements">
                <li><strong>{{ t('l562') }}</strong> {{ t('l563') }}</li>
                <li><strong>{{ t('l564') }}</strong> {{ t('l565') }}</li>
                <li><strong>{{ t('l566') }}</strong> {{ t('l567') }}</li>
                <li><strong>{{ t('l568') }}</strong> {{ t('l569') }}</li>
                <li><strong>{{ t('l570') }}</strong> {{ t('l571') }}</li>
                <li><strong>{{ t('l572') }}</strong> {{ t('l573') }}</li>
              </ul>
              <div class="tag-row">
                <span class="mini-tag">{{ t('l574') }}</span><span class="mini-tag">{{ t('l575') }}</span><span class="mini-tag">{{ t('l576') }}</span>
              </div>
            </div>


            <h3 class="section-heading mt-6">{{ t('l577') }}</h3>
            <div class="alunea-card">
              <div class="job-header">
                <div class="company-info">
                  <v-icon color="primary" class="mr-1" size="18">{{ mdiRocketLaunchOutline }}</v-icon>
                  <span class="company-name">Alunea</span>
                  <span class="role-title">{{ t('l578') }} • <a href="https://alunea.io/" target="_blank">alunea.io</a></span>
                </div>
                <span class="period">{{ t('l579') }}</span>
              </div>

              <p class="job-mini-desc" v-html="t('l580')">

              </p>

              <ul class="achievements">
                <li><strong>{{ t('l581') }}</strong> {{ t('l582') }}</li>
                <li><strong>{{ t('l583') }}</strong> {{ t('l584') }}</li>
                <li><strong>{{ t('l585') }}</strong> {{ t('l586') }}</li>
              </ul>

              <div class="tag-row mt-2">
                <span class="mini-tag">{{ t('l587') }}</span>
                <span class="mini-tag">{{ t('l588') }}</span>
                <span class="mini-tag">{{ t('l589') }}</span>
                <span class="mini-tag">{{ t('l590') }}</span>
              </div>
            </div>




            <h3 class="section-heading mt-6">{{ t('l591') }}</h3>
            <div class="earlier-jobs-list">

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">{{ t('l592') }}</span>
                  <span class="chrono-company"><strong>Aventus IT</strong> | {{ t('l593') }}</span>
                </div>
                <div class="chrono-content">
                  {{ t('l594') }}
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">{{ t('l595') }}</span>
                  <span class="chrono-company"><strong>Silverbird (Theropod LTD)</strong> | {{ t('l596') }}</span>
                </div>
                <div class="chrono-content">
                  {{ t('l597') }}
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">{{ t('l598') }}</span>
                  <span class="chrono-company"><strong>MTS</strong> | {{ t('l599') }}</span>
                </div>
                <div class="chrono-content">
                  {{ t('l600') }}
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">{{ t('l601') }}</span>
                  <span class="chrono-company"><strong>TSUM (Mercury Group)</strong> | {{ t('l602') }}</span>
                </div>
                <div class="chrono-content">
                  {{ t('l603') }}
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">{{ t('l604') }}</span>
                  <span class="chrono-company"><strong>Silverbird</strong> | {{ t('l605') }}</span>
                </div>
                <div class="chrono-content">
                  {{ t('l606') }}
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">{{ t('l607') }}</span>
                  <span class="chrono-company"><strong>Gosuslugi</strong> | {{ t('l608') }}</span>
                </div>
                <div class="chrono-content">
                  {{ t('l609') }}
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">{{ t('l610') }}</span>
                  <span class="chrono-company"><strong>TSUM (Mercury Group)</strong> | {{ t('l611') }}</span>
                </div>
                <div class="chrono-content">
                  {{ t('l612') }}
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">{{ t('l613') }}</span>
                  <span class="chrono-company"><strong>JivoChat (JivoSite)</strong> | {{ t('l614') }}</span>
                </div>
                <div class="chrono-content">
                  {{ t('l615') }}
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">{{ t('l616') }}</span>
                  <span class="chrono-company"><strong>VK</strong> | {{ t('l617') }}</span>
                </div>
                <div class="chrono-content">
                  {{ t('l618') }}
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">{{ t('l619') }}</span>
                  <span class="chrono-company"><strong>Activizm.ru</strong> | {{ t('l620') }}</span>
                </div>
                <div class="chrono-content">
                  {{ t('l621') }}
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">{{ t('l622') }}</span>
                  <span class="chrono-company"><strong>Mamba</strong> | {{ t('l623') }}</span>
                </div>
                <div class="chrono-content">
                  {{ t('l624') }}
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">{{ t('l625') }}</span>
                  <span class="chrono-company"><strong>Enter.ru</strong> | {{ t('l626') }}</span>
                </div>
                <div class="chrono-content">
                  {{ t('l627') }}
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">{{ t('l628') }}</span>
                  <span class="chrono-company"><strong>Wikimart</strong> | {{ t('l629') }}</span>
                </div>
                <div class="chrono-content">
                  {{ t('l630') }}
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">{{ t('l631') }}</span>
                  <span class="chrono-company"><strong>MIF</strong> | {{ t('l632') }}</span>
                </div>
                <div class="chrono-content">
                  {{ t('l633') }}
                </div>
              </div>
            </div>

            <h3 class="section-heading mt-6">{{ t('l634') }}</h3>
            <div class="publications-grid">

              <a href="https://levelup.gitconnected.com/buffer-overflow-for-beginners-edf9f9d593e2" target="_blank" class="pub-item">
                <div class="pub-tag error">{{ t('l635') }}</div>
                <div class="pub-title">{{ t('l636') }}</div>
                <div class="pub-desc">{{ t('l637') }}</div>
              </a>

              <a href="https://levelup.gitconnected.com/the-fundamental-vulnerability-of-networks-arp-spoofing-172d51947872" target="_blank" class="pub-item">
                <div class="pub-tag warning">{{ t('l638') }}</div>
                <div class="pub-title">{{ t('l639') }}</div>
                <div class="pub-desc">{{ t('l640') }}</div>
              </a>

              <a href="https://medium.com/gitconnected/the-power-of-udf-functions-in-mysql-data-encryption-using-c-and-openssl-484f511eff98" target="_blank" class="pub-item">
                <div class="pub-tag info">{{ t('l641') }}</div>
                <div class="pub-title">{{ t('l642') }}</div>
                <div class="pub-desc">{{ t('l643') }}</div>
              </a>

              <a href="https://medium.com/@mikhail.chuloshnikov/file-based-hash-map-using-as-persistent-data-storage-33b849cc8e41" target="_blank" class="pub-item">
                <div class="pub-tag success">{{ t('l644') }}</div>
                <div class="pub-title">{{ t('l645') }}</div>
                <div class="pub-desc">{{ t('l646') }}</div>
              </a>

            </div>

            <h3 class="section-heading mt-6">{{ t('l647') }}</h3>
            <div class="code-portfolio-grid">

              <div class="repo-group">
                <div class="group-label"><v-icon size="10" color="primary">{{ mdiGithub }}</v-icon> {{ t('l648') }}</div>
                <div class="repo-links">
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/alghoritms" target="_blank">{{ t('l649') }}</a>
                  <a href="https://github.com/white-rabbit-1-sketch/mysql-openssl" target="_blank">{{ t('l650') }}</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/arp-spoofer" target="_blank">{{ t('l651') }}</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/shellcode-generator" target="_blank">{{ t('l652') }}</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/yansdb" target="_blank">{{ t('l653') }}</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/broadcasting-server" target="_blank">{{ t('l654') }}</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/lightness-hid" target="_blank">{{ t('l655') }}</a>
                </div>
              </div>

              <div class="repo-group">
                <div class="group-label"><v-icon size="10" color="primary">{{ mdiGithub }}</v-icon> {{ t('l656') }}</div>
                <div class="repo-links">
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/golang-crawler" target="_blank">{{ t('l657') }}</a>
                  <a href="https://github.com/white-rabbit-1-sketch/helicopter" target="_blank">{{ t('l658') }}</a>
                  <a href="https://github.com/white-rabbit-1-sketch/lineage-2-lottery-bot" target="_blank">{{ t('l659') }}</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/web-cryptor" target="_blank">{{ t('l660') }}</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/lightness" target="_blank">{{ t('l661') }}</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/lua-installer" target="_blank">{{ t('l662') }}</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/cute_fox_wild_hunt" target="_blank">{{ t('l663') }}</a>
                </div>
              </div>

              <div class="repo-group">
                <div class="group-label"><v-icon size="10" color="primary">{{ mdiGithub }}</v-icon> {{ t('l664') }}</div>
                <div class="repo-links">
                  <a href="https://github.com/white-rabbit-1-sketch/php-file-hash-map" target="_blank">{{ t('l665') }}</a>
                  <a href="https://github.com/white-rabbit-1-sketch/php-worker-pool" target="_blank">{{ t('l666') }}</a>
                  <a href="https://github.com/white-rabbit-1-sketch/alunea-alias-backend" target="_blank">{{ t('l667') }}</a>
                  <a href="https://github.com/white-rabbit-1-sketch/alunea-alias-frontend" target="_blank">{{ t('l668') }}</a>
                  <a href="https://github.com/white-rabbit-1-sketch/alunea-alias-ansible" target="_blank">{{ t('l669') }}</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/php-snippets" target="_blank">{{ t('l670') }}</a>
                </div>
              </div>

            </div>


            <h3 class="section-heading mt-6">{{ t('l671') }}</h3>
            <p class="eco-note" v-html="t('l672')">
            </p>

            <div class="eco-grid">
              <div class="eco-column">
                <div class="eco-label">{{ t('l673') }}</div>
                <div class="eco-block">
                  <strong>PHP / Go / Java</strong><br /> Symfony • Laravel • Yii • Zend • Custom Extensions (C) • Doctrine • Libs • High-perf Microservices • Concurrency • Spring Security/Boot/Social • Hibernate • Apache JBI/ESB/JMS/Service Mix/ActiveMQ/Camel
                  <br><strong>Python / TypeScript / Lua / Gdscript (Godot)</strong><br /> Django • SQLAlchemy • Vue • Vuetify • Angular • Electron/Ionic/Capacitor • Webpack • Lua Stdl/COM/fs/socket/C API
                  <br><strong>C / C++ / ASM / TCL / Delphi / VBA / Bash</strong><br /> Boost • WinAPI/POSIX • Kernel • Stdl • Raw sockets • COM • Stack • Heap • Registers
                </div>
              </div>

              <div class="eco-column">
                <div class="eco-label">{{ t('l674') }}</div>
                <div class="eco-block">
                  <strong>{{ t('l675') }}</strong><br /> PostgreSQL • MySQL • MS SQL • Redis • Memcached • Interbase • Firebase • Kyoto • Hash • Cardinality • Constraints • Replication • Sharding • Partitioning • Performance Tuning • Profiling • Locks • Indexes • T-SQL-92
                  <br><strong>CI/CD</strong><br /> Docker • Ansible • Github Actions
                  <br><strong>Infrastructure</strong><br /> Debian • Nginx • Caddy • Apache • Tomcat • Jetty • Elasticsearch • Sphinx • Solr • RabbitMQ • Grafana • Loki • Alloy • Git • Svn • Mercurial • Jira • Confluence • Trac • Redmine
                  <br><strong>{{ t('l676') }}</strong><br /> Sharding • Load Balancing • Zero-Downtime Altering • MSOA • Distributed Systems
                </div>
              </div>

              <div class="eco-column">
                <div class="eco-label">{{ t('l677') }}</div>
                <div class="eco-block">
                  <strong>{{ t('l678') }}</strong><br /> 0-day Exploit Dev • RCE • XSS • Buffer Overflow • Cryptors • Shellcode
                  <br><strong>{{ t('l679') }}</strong><br /> OllyDbg • WinDbg • GDB • Binary Patching • Deobfuscation • Import Table Recovery
                  <br><strong>{{ t('l680') }}</strong><br /> Strace Expert • Kernel Module Patching • Raw Sockets • Packet Inspection (TCP/UDP)
                </div>
              </div>
            </div>


            <h3 class="section-heading mt-6">{{ t('l681') }}</h3>
            <div class="backstory-container">

              <div class="story-grid">
                <div class="story-cell">
                  <div class="story-label">{{ t('l682') }}</div>
                  <p v-html="t('l683')">
                  </p>
                </div>

                <div class="story-cell">
                  <div class="story-label">{{ t('l684') }}</div>
                  <p v-html="t('l685')">
                  </p>
                </div>
              </div>

              <div class="philosophy-box mt-4">
                <div class="story-label">{{ t('l686') }}</div>
                <div class="philosophy-content">
                  <div class="phi-column">
                    <div class="phi-item"><strong>{{ t('l687') }}</strong> <span v-html="t('l688')"></span></div>
                    <div class="phi-item"><strong>{{ t('l689') }}</strong> {{ t('l690') }}</div>
                  </div>
                  <div class="phi-column">
                    <div class="phi-item"><strong>{{ t('l691') }}</strong> {{ t('l692') }}</div>
                    <div class="phi-item"><strong>{{ t('l693') }}</strong> {{ t('l694') }}</div>
                  </div>
                </div>
              </div>

              <div class="story-quote mt-3">
                {{ t('l695') }}
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.pdf-resume-container {
  margin: 0 auto;
  padding: 20px 40px;

  color: #2c3e50;
  font-family: 'Inter', sans-serif;
  font-size: 11.5px;
  line-height: 1.3;
}

/* Header */
.resume-header { border-bottom: 2px solid #1976D2; padding-bottom: 10px; margin-bottom: 15px; }
.name { font-size: 26px; font-weight: 800; color: #1a1a1a; text-transform: uppercase; margin: 0; }
.target-role { font-size: 14px; color: #1976D2; font-weight: 600; }
.contact-grid { display: flex; gap: 12px; margin-top: 8px; font-size: 9.5px; color: #64748b; }

/* Layout */
.main-layout { display: flex; gap: 25px; }
.sidebar { flex: 0 0 165px; }
.experience-content { flex: 1; }

/* Sidebar */
.side-title { font-size: 8.5px; font-weight: 900; color: #94a3b8; letter-spacing: 1px; margin-bottom: 6px; border-bottom: 1px solid #f1f5f9; text-transform: uppercase; }
.skill-tag { display: inline-block; background: #f1f5f9; padding: 1px 5px; margin: 1px; border-radius: 3px; font-size: 9px; font-weight: 700; color: #475569; }
.expert-list { padding-left: 12px; font-size: 10px; margin-bottom: 15px; }

/* Case Cards */
.section-heading { font-size: 11px; font-weight: 800; color: #1976D2; margin-bottom: 12px; text-transform: uppercase; border-bottom: 1px solid #eee; padding-bottom: 3px; }
.case-card {
  background: #fcfdfe;
  border: 1px solid #eef2f7;
  border-left: 4px solid #1976D2;
  padding: 12px;
  border-radius: 0 4px 4px 0;
}
.accent-case { border-left-color: #334155; background: #fafbfc; }

.job-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px; }
.company-name { font-size: 12.5px; font-weight: 800; color: #1e293b; }
.role-title { font-size: 11px; color: #1976D2; font-weight: 700; display: block; }
.period { font-size: 9.5px; font-weight: 700; color: #94a3b8; white-space: nowrap; }

.achievements { padding-left: 15px; font-size: 11px; }
.achievements li { margin-bottom: 3px; }

.tag-row { margin-top: 8px; display: flex; gap: 6px; }
.mini-tag { font-size: 8.5px; font-weight: 700; color: #1976D2; background: #e3f2fd; padding: 1px 6px; border-radius: 10px; text-transform: uppercase; }

/* Chronology */
.chrono-item { font-size: 10.5px; margin-bottom: 5px; color: #475569; display: flex; gap: 10px; }
.chrono-period { flex: 0 0 75px; font-weight: 700; color: #94a3b8; }

@media print {
  .pdf-resume-container { padding: 30; width: 100%; }
  .case-card { page-break-inside: avoid; }
  #header {
    display: none;
  }
  .content {
    padding-top: 0 !important;
  }
}

.earlier-jobs-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.chrono-item-detailed {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 6px;
}
.chrono-header {
  display: flex;
  justify-content: flex-start;
  gap: 15px;
  margin-bottom: 2px;
}
.chrono-period {
  flex: 0 0 130px;
  font-size: 9px;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
}
.chrono-company {
  font-size: 11px;
}
.chrono-content {
  font-size: 10px;
  color: #555;
  padding-left: 145px; /* Совпадает с отступом после периода */
  line-height: 1.3;
}
@media print {
  .chrono-item-detailed { page-break-inside: avoid; }
}

.education-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.edu-item-detailed {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 8px;
}
.edu-item-detailed:last-child {
  border-bottom: none;
}
.edu-header {
  display: flex;
  justify-content: flex-start;
  gap: 15px;
}
.edu-period {
  flex: 0 0 130px;
  font-size: 9px;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  padding-top: 2px;
}
.edu-university {
  font-size: 11px;
  color: #1e293b;
  line-height: 1.2;
}
.edu-degree {
  font-size: 10px;
  color: #64748b;
  margin-top: 2px;
}
@media print {
  .edu-item-detailed { page-break-inside: avoid; }
}

.contact-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 10px;
  font-size: 10.5px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #64748b;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-item.link:hover {
  color: #1976D2;
}

/* Убираем стандартное подчеркивание ссылок */
a.contact-item {
  text-decoration: none;
}

.side-subtitle {
  font-size: 8px;
  color: #64748b;
  margin-top: -4px;
  margin-bottom: 10px;
  font-style: italic;
}

.cert-item-detailed {
  margin-bottom: 12px;
}

.cert-org {
  font-size: 8px;
  font-weight: 800;
  color: #1976D2;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.cert-name {
  font-size: 10px;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.2;
}

.cert-desc {
  font-size: 8.5px;
  color: #64748b;
  margin-top: 2px;
  line-height: 1.1;
}

.cert-skills {
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cert-tag {
  font-size: 8.5px;
  color: #475569;
  padding-left: 8px;
  position: relative;
}

.cert-tag::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #1976D2;
}

.edu-item-compact {
  line-height: 1.2;
}
.edu-uni {
  font-size: 10px;
  color: #1e293b;
}
.edu-spec {
  font-size: 9px;
  color: #64748b;
  margin-top: 1px;
}

.publications-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.pub-item {
  display: block;
  text-decoration: none;
  border: 1px solid #f0f0f0;
  padding: 8px;
  border-radius: 4px;
  background: #fafbfc;
  transition: border-color 0.2s;
}

.pub-item:hover {
  border-color: #1976D2;
}

.pub-tag {
  font-size: 7px;
  font-weight: 900;
  text-transform: uppercase;
  display: inline-block;
  padding: 1px 4px;
  border-radius: 2px;
  margin-bottom: 4px;
  color: white;
}

.pub-tag.error { background: #ff5252; }
.pub-tag.warning { background: #fb8c00; }
.pub-tag.info { background: #2196f3; }
.pub-tag.success { background: #4caf50; }

.pub-title {
  font-size: 10px;
  font-weight: 800;
  color: #1e293b;
  line-height: 1.2;
}

.pub-desc {
  font-size: 9px;
  color: #64748b;
  margin-top: 2px;
  line-height: 1.2;
}

@media print {
  .pub-item { break-inside: avoid; }
}

.code-portfolio-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
}

.repo-group {
  display: flex;
  flex-direction: column;
}

.group-label {
  font-size: 8.5px;
  font-weight: 900;
  color: #1976D2;
  margin-bottom: 6px;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.repo-links {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.repo-links a {
  font-size: 9.5px;
  color: #475569;
  text-decoration: none;
  border-left: 1px solid #e2e8f0;
  padding-left: 8px;
  line-height: 1.2;
}

.repo-links a:hover {
  color: #1976D2;
  border-left-color: #1976D2;
  background: #f8fafc;
}

@media print {
  .code-portfolio-grid { gap: 10px; }
}

.alunea-card {
  background: #fdfdfd;
  border: 1px dashed #cbd5e1;
  border-left: 4px solid #1976D2; /* Фиолетовый акцент для Alunea */
  padding: 12px;
  border-radius: 0 4px 4px 0;
}

.alunea-features {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  margin-top: 8px;
  padding-left: 12px;
}

.feat-item {
  font-size: 10px;
  color: #475569;
  position: relative;
}

.feat-item::before {
  content: "→";
  position: absolute;
  left: -12px;
  color: #8b5cf6;
  font-weight: bold;
}

/* Переиспользование тегов из предыдущих блоков */
.mini-tag {
  font-size: 8px;
  font-weight: 700;
  color: #8b5cf6;
  background: #f5f3ff;
  padding: 1px 6px;
  border-radius: 10px;
  text-transform: uppercase;
}

.eco-note {
  font-size: 8.5px;
  color: #64748b;
  font-style: italic;
  margin-bottom: 8px;
  line-height: 1.2;
}

.eco-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  background: #f8fafc;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
}

.eco-column {
  display: flex;
  flex-direction: column;
}

.eco-label {
  font-size: 8px;
  font-weight: 900;
  color: #1976D2;
  margin-bottom: 4px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.eco-block {
  font-size: 9px;
  color: #334155;
  line-height: 1.4;
}

.eco-block strong {
  color: #1e293b;
}

@media print {
  .eco-grid { gap: 8px; padding: 8px; }
}

.backstory-container {
  background: #fcfdfe;
  border: 1px solid #e2e8f0;

  padding: 15px;
  border-radius: 0 4px 4px 0;
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.story-label {
  font-size: 8.5px;
  font-weight: 900;
  color: #1976D2;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 6px;
}

.story-cell p {
  font-size: 10px;
  line-height: 1.4;
  margin: 0;
  color: #334155;
}

.philosophy-box {
  border-top: 1px solid #e2e8f0;
  padding-top: 10px;
}

.philosophy-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.phi-item {
  font-size: 9.5px;
  line-height: 1.3;
  color: #475569;
  margin-bottom: 4px;
  position: relative;
  padding-left: 10px;
}

.phi-item::before {
  content: "›";
  position: absolute;
  left: 0;
  color: #1976D2;
  font-weight: bold;
}

.story-quote {
  font-size: 11px;
  font-weight: 700;
  color: #1976D2;
  text-align: center;
  border-top: 1px solid #e2e8f0;
  padding-top: 8px;
  font-style: italic;
}

.summary-section {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(var(--v-theme-primary), 0.05); /* Легкий акцентный фон */
  border-left: 4px solid #1976D2; /* Цвет primary */
  border-radius: 4px;
}

.experience-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
}

.exp-years {
  font-size: 2.5rem;
  font-weight: 900;
  color: #1976D2;
}

.exp-text {
  font-size: 0.7rem;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
}

.summary-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  color: #2c3e50;
}
</style>