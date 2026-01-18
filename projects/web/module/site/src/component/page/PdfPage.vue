<script setup>
import {
  mdiMapMarkerOutline, mdiEmail, mdiSend, mdiGithub, mdiLinkedin, mdiWhatsapp,
  mdiSchoolOutline, mdiCertificateOutline, mdiShieldCheckOutline, mdiCpu64Bit, mdiBankOutline, mdiRocketLaunchOutline, mdiSecurity
} from "@mdi/js"
import Header from "@/component/layout/Header.vue";
</script>

<template>
  <div class="layout">
    <div class="content pt-0 pb-0">
      <div class="pdf-resume-container">
        <header class="resume-header">
          <div class="header-main">
            <h1 class="name">Mikhail Chuloshnikov</h1>
            <div class="target-role">Senior Backend Engineer | Principal Architect | Team Lead | CTO | High-Load & Systems Researcher</div>
          </div>

          <div class="contact-grid">
            <div class="contact-item">
              <v-icon size="14" color="primary">{{ mdiMapMarkerOutline }}</v-icon>
              Yerevan, Armenia
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
              LinkedIn Profile
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
              <h3 class="side-title">TECHNICAL STACK</h3>
              <div class="skill-category">
                <div class="cat-name">Languages</div>
                <div class="skill-group">
                  <span class="skill-tag">PHP</span>
                  <span class="skill-tag">Go</span>
                  <span class="skill-tag">Python</span>
                  <span class="skill-tag">TypeScript</span>
                </div>
              </div>
              <div class="skill-category">
                <div class="cat-name">Common</div>
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
              <h3 class="side-title">EXPERTISE</h3>
              <ul class="expert-list">
                <li>Core Banking & Payments</li>
                <li>High-Load</li>
                <li>Reverse Engineering</li>
                <li>Vulnerability Research</li>
                <li>Team Leadership</li>
              </ul>
            </section>

            <section class="sidebar-section">
              <h3 class="side-title">Certifications</h3>

              <div class="cert-item-detailed">
                <div class="cert-name">Zend PHP Certified Engineer</div>
              </div>
            </section>

            <section class="sidebar-section">
              <h3 class="side-title">EDUCATION</h3>

              <div class="edu-item-compact">
                <div class="edu-uni"><strong>Synergy University</strong></div>
                <div class="edu-spec">Fullstack Dev • 2026</div>
              </div>

              <div class="edu-item-compact mt-3">
                <div class="edu-uni"><strong>Modern Technical Inst.</strong></div>
                <div class="edu-spec">Service • 2015</div>
              </div>

              <div class="edu-item-compact mt-3">
                <div class="edu-uni"><strong>Moscow College of Math</strong></div>
                <div class="edu-spec">Programming & AS • 2008</div>
              </div>
            </section>
          </aside>

          <main class="experience-content">
            <h3 class="section-heading">SELECTED IMPACT CASES</h3>

            <div class="case-card">
              <div class="job-header">
                <div class="company-info">
                  <v-icon color="primary" class="mr-1" size="18">{{ mdiBankOutline }}</v-icon>
                  <span class="company-name">Silverbird (Theropod LTD)</span>
                  <span class="role-title">Project Lead / Senior Developer</span>
                </div>
                <span class="period">Oct 2022 — March 2024</span>
              </div>
              <ul class="achievements">
                <li><strong>Core Banking Development:</strong> Engineering of core banking engines and all related financial infrastructure.</li>
                <li><strong>Multi-PSP Integration:</strong> Design and development of systems for seamless multi-PSP (Payment Service Provider) integration.</li>
                <li><strong>Payment Processing Core:</strong> Architecture and development of the core engine for Inbound/Outbound payments, FX transactions, and intelligent payment routing.</li>
                <li><strong>Leadership & Stakeholding:</strong> Acting as Team Lead and Stakeholder for the core banking and payment modules.</li>
                <li><strong>External Ecosystems:</strong> Integration of external PSPs and development of specialized Beneficiary Modules.</li>
                <li><strong>Security Auditing:</strong> Conducting comprehensive security audits for financial components.</li>
                <li><strong>Banking Domain Expertise:</strong> Full-cycle implementation of payments, FX, and transactions. Deep integration with payment schemes: SWIFT, SEPA, Faster Payments, T2, and platforms like TUUM / Integrated Finance.</li>

              </ul>
              <div class="tag-row">
                <span class="mini-tag">Fintech Infrastructure</span><span class="mini-tag">Payments Processing</span><span class="mini-tag">Security Audit</span>
              </div>
            </div>

            <div class="case-card mt-4">
              <div class="job-header">
                <div class="company-info">
                  <v-icon color="primary" class="mr-1" size="18">{{ mdiRocketLaunchOutline }}</v-icon>
                  <span class="company-name">TSUM (Mercury Group)</span>
                  <span class="role-title">Team Lead</span>
                </div>
                <span class="period">April 2021 — April 2022</span>
              </div>
              <ul class="achievements">
                <li><strong>Cross-functional Leadership:</strong> Managed a complete product cell including Developers, QA, Product Managers, and Business Analysts.</li>
                <li><strong>Massive Scale:</strong> Managed High-Load systems handling nearly 1 Billion data records.</li>
                <li><strong>Service Ownership:</strong> Full accountability for 6+ mission-critical services within the e-commerce ecosystem.</li>
                <li><strong>Marketing-Tech Strategy:</strong> Spearheaded the Marketing product-engineering bridge, acting as a primary Stakeholder.</li>
                <li><strong>Team Transformation:</strong> Completely rebuilt and upskilled the team to align with modern product requirements and tech standards.</li>
                <li><strong>Innovation Driver:</strong> Initiated and oversaw the development of new services using cutting-edge technologies to solve specific business needs.</li>
                <li><strong>Process Excellence:</strong> Built internal development workflows from scratch and streamlined interaction protocols between business units and external teams.</li>
              </ul>
              <div class="tag-row">
                <span class="mini-tag">High-Load (1B+ Records)</span><span class="mini-tag">Management</span><span class="mini-tag">Strategic Planning</span>
              </div>
            </div>

            <div class="case-card mt-4">
              <div class="job-header">
                <div class="company-info">
                  <v-icon color="primary" class="mr-1" size="18">{{ mdiSecurity }}</v-icon>
                  <span class="company-name">MIF</span>
                  <span class="role-title">Security & Low-Level Systems Researcher</span>
                </div>
                <span class="period">Sept 2008 — Aug 2009</span>
              </div>
              <ul class="achievements">
                <li><strong>Full-Chain Vulnerability Analysis:</strong> Conducted end-to-end security research on major browser engines and Adobe Reader. Developed functional RCE (Remote Code Execution) exploits (Only Proof-of-Concept) to demonstrate critical memory corruption flaws using WinDbg, x86 Assembly, and advanced heap-spraying techniques.</li>
                <li><strong>High-Concurrency C&C Architecture:</strong> Engineered ultra-lightweight remote management agents (4KB binaries) and command-and-control (C2) infrastructures using C (WinAPI) and Lua. Focus on extreme binary optimization and stealthy network communication.</li>
                <li><strong>Polymorphic Code Protection:</strong> Developed a sophisticated machine-based obfuscator. It featured a custom code translator (Python/JS to pseudocode) designed to bypass heuristic analysis and static signature detection engines.</li>
                <li><strong>Algorithmic Network Topology:</strong> Designed and implemented automated systems for large-scale content generation and inter-linked network structures (Ring & Pyramid topologies). Optimized link-graph algorithms to maximize search engine indexing efficiency.</li>
                <li><strong>Infrastructure Monetization:</strong> Developed specialized platforms for client hardware resource acquisition and satellite site generation systems.</li>
                <li><strong>Systems Mindset:</strong> This era defined my "low-level first" approach. Understanding memory corruption and CPU-level execution is what allows me today to build high-load systems that are inherently secure.</li>
              </ul>
              <div class="tag-row">
                <span class="mini-tag">Reverse Engineering</span><span class="mini-tag">x86 Assembler</span><span class="mini-tag">Memory Corruption</span>
              </div>
            </div>


            <h3 class="section-heading mt-6">CURRENT VENTURE</h3>
            <div class="alunea-card">
              <div class="job-header">
                <div class="company-info">
                  <v-icon color="primary" class="mr-1" size="18">{{ mdiRocketLaunchOutline }}</v-icon>
                  <span class="company-name">Alunea</span>
                  <span class="role-title">Founder & Lead Architect • <a href="https://alunea.io/" target="_blank">alunea.io</a></span>
                </div>
                <span class="period">2025 — Present</span>
              </div>

              <p class="job-mini-desc">
                An AI-driven language learning ecosystem that bridges passive content consumption with active speaking practice using <strong>Voice-Interactive Tutors</strong> and real-time subtitle processing.
              </p>

              <ul class="achievements">
                <li><strong>AI Tutor "Violet":</strong> Interactive voice calls for active recall using context-aware vocabulary.</li>
                <li><strong>Smart Subtitles:</strong> Contextual dual subtitles for Netflix & YouTube with on-the-fly generation.</li>
                <li><strong>Unified Sync:</strong> Real-time word-sync across Browser Extensions, iOS/Android apps, and Backend.</li>
              </ul>

              <div class="tag-row mt-2">
                <span class="mini-tag">LLM Integration</span>
                <span class="mini-tag">Voice AI</span>
                <span class="mini-tag">Adaptive Learning</span>
                <span class="mini-tag">Cross-Platform Sync</span>
              </div>
            </div>




            <h3 class="section-heading mt-6">PROFESSIONAL CHRONOLOGY</h3>
            <div class="earlier-jobs-list">

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">July 2024 — Oct 2025</span>
                  <span class="chrono-company"><strong>Aventus IT</strong> | Team Lead</span>
                </div>
                <div class="chrono-content">
                  Leading/mentoring 7 backend devs. Streamlining internal workflows and cross-departmental operations. Designing robust architectures for high-performance services. CI/CD optimization. Direct contribution to flagship microservices.
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">Oct 2022 — March 2024</span>
                  <span class="chrono-company"><strong>Silverbird (Theropod LTD)</strong> | Project Lead / Senior Dev</span>
                </div>
                <div class="chrono-content">
                  Engineering of core banking engines, multi-PSP integration, and FX payment processing. Leadership for payment modules. Integration with SWIFT, SEPA, Faster Payments, T2, TUUM. Comprehensive security auditing.
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">July 2022 — Sept 2022</span>
                  <span class="chrono-company"><strong>MTS</strong> | Senior Developer</span>
                </div>
                <div class="chrono-content">
                  Engineering and implementation of new functional modules within the Bitrix framework. Architectural migration of legacy Bitrix functionality to modern microservices.
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">April 2021 — April 2022</span>
                  <span class="chrono-company"><strong>TSUM (Mercury Group)</strong> | Team Lead</span>
                </div>
                <div class="chrono-content">
                  Managed product cell (Dev, QA, PM, BA). Ownership of 6+ mission-critical services handling 1B+ records. Spearheaded Marketing-Tech strategy. Rebuilt and upskilled the team.
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">Sept 2020 — April 2021</span>
                  <span class="chrono-company"><strong>Silverbird</strong> | Head of Development</span>
                </div>
                <div class="chrono-content">
                  Orchestrated end-to-end creation of banking platform. Assembled engineering team from scratch. Designed and launched ~10 projects (API, microservices, infra). Managed technical governance and global architecture.
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">Sept 2020 — April 2021</span>
                  <span class="chrono-company"><strong>Gosuslugi</strong> | Tech Analyst / Senior Dev</span>
                </div>
                <div class="chrono-content">
                  Development of core feedback subsystem. Profiling and optimization for extreme high-load. Complex integration with ESIA (National SSO) and ROI analytical systems. Data normalization.
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">Feb 2018 — July 2020</span>
                  <span class="chrono-company"><strong>TSUM (Mercury Group)</strong> | Senior Developer</span>
                </div>
                <div class="chrono-content">
                  Engineering of core internal ecosystem. Debugging complex data synchronization. Implementation of high-performance search and MarTech services (feed generators, QR engines).
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">April 2016 — Nov 2017</span>
                  <span class="chrono-company"><strong>JivoChat (JivoSite)</strong> | Team Lead</span>
                </div>
                <div class="chrono-content">
                  Managed team of 6. Implemented Scrum, boosting productivity from 70% to 120%. Automated systems for transparency. Owned full release management cycle.
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">Jan 2016 — March 2016</span>
                  <span class="chrono-company"><strong>VK</strong> | Senior Developer</span>
                </div>
                <div class="chrono-content">
                  High-load specialized projects (NDA).
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">Aug 2014 — Dec 2015</span>
                  <span class="chrono-company"><strong>Activizm.ru</strong> | Senior Developer</span>
                </div>
                <div class="chrono-content">
                  AdTech integration (Google AdWords/Yandex.Direct API), large-scale data exports to Merchant Centers, and system profiling.
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">Nov 2013 — July 2014</span>
                  <span class="chrono-company"><strong>Mamba</strong> | Senior Developer</span>
                </div>
                <div class="chrono-content">
                  Developed notification engine for tens of millions of users. Integration with custom C-based daemons. Refactoring of mail gateway protocols. Database optimization (SQL, RRDtool).
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">May 2012 — Aug 2013</span>
                  <span class="chrono-company"><strong>Enter.ru</strong> | Senior Developer</span>
                </div>
                <div class="chrono-content">
                  Fintech integration for online credit purchases, 1C integration, Symfony migration.
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">Aug 2009 — Apr 2012</span>
                  <span class="chrono-company"><strong>Wikimart</strong> | Senior Developer</span>
                </div>
                <div class="chrono-content">
                  Billing system from scratch, high-throughput ETL for massive product feeds.
                </div>
              </div>

              <div class="chrono-item-detailed">
                <div class="chrono-header">
                  <span class="chrono-period">Sept 2008 — Aug 2009</span>
                  <span class="chrono-company"><strong>MIF</strong> | Systems Researcher</span>
                </div>
                <div class="chrono-content">
                  Vulnerability research (RCE PoCs), WinDbg, x86 Assembly. Engineering 4KB C/WinAPI remote agents. Polymorphic code obfuscation. Algorithmic network topology optimization.
                </div>
              </div>
            </div>

            <h3 class="section-heading mt-6">PUBLICATIONS</h3>
            <div class="publications-grid">

              <a href="https://levelup.gitconnected.com/buffer-overflow-for-beginners-edf9f9d593e2" target="_blank" class="pub-item">
                <div class="pub-tag error">Security</div>
                <div class="pub-title">Buffer Overflow for Beginners</div>
                <div class="pub-desc">An in-depth look at memory corruption and stack smashing.</div>
              </a>

              <a href="https://levelup.gitconnected.com/the-fundamental-vulnerability-of-networks-arp-spoofing-172d51947872" target="_blank" class="pub-item">
                <div class="pub-tag warning">Networks</div>
                <div class="pub-title">The Fundamental Vulnerability: ARP Spoofing</div>
                <div class="pub-desc">Analyzing low-level network protocol flaws and mitm attacks.</div>
              </a>

              <a href="https://medium.com/gitconnected/the-power-of-udf-functions-in-mysql-data-encryption-using-c-and-openssl-484f511eff98" target="_blank" class="pub-item">
                <div class="pub-tag info">Systems</div>
                <div class="pub-title">The Power of UDF Functions in MySQL: Data Encryption Using C++ and OpenSSL</div>
                <div class="pub-desc">Implementing custom UDF functions for high-performance crypto.</div>
              </a>

              <a href="https://medium.com/@mikhail.chuloshnikov/file-based-hash-map-using-as-persistent-data-storage-33b849cc8e41" target="_blank" class="pub-item">
                <div class="pub-tag success">Storage</div>
                <div class="pub-title">File-based hash map — using as persistent data storage</div>
                <div class="pub-desc">Designing a high-performance hash map for disk-based data.</div>
              </a>

            </div>


            <h3 class="section-heading mt-6">CODE</h3>
            <div class="code-portfolio-grid">

              <div class="repo-group">
                <div class="group-label"><v-icon size="10" color="primary">{{ mdiGithub }}</v-icon> C / C++ (Systems & Security)</div>
                <div class="repo-links">
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/alghoritms" target="_blank">Algorithms</a>
                  <a href="https://github.com/white-rabbit-1-sketch/mysql-openssl" target="_blank">MySQL OpenSSL Plugin</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/arp-spoofer" target="_blank">ARP Spoofer (Security)</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/shellcode-generator" target="_blank">Shellcode Generator</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/yansdb" target="_blank">YansDB (NoSQL Storage)</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/broadcasting-server" target="_blank">TCP/IP Broadcast Server</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/lightness-hid" target="_blank">Lightness HID Tool</a>
                </div>
              </div>

              <div class="repo-group">
                <div class="group-label"><v-icon size="10" color="primary">{{ mdiGithub }}</v-icon> Python, Go, Lua</div>
                <div class="repo-links">
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/golang-crawler" target="_blank">Go: Concurrent Crawler</a>
                  <a href="https://github.com/white-rabbit-1-sketch/helicopter" target="_blank">Python: Helicopter Game</a>
                  <a href="https://github.com/white-rabbit-1-sketch/lineage-2-lottery-bot" target="_blank">L2 Lottery Bot</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/web-cryptor" target="_blank">Python: Web Cryptor</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/lightness" target="_blank">Python: Lightness Monitor</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/lua-installer" target="_blank">Lua: Simple Installer</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/cute_fox_wild_hunt" target="_blank">Godot: Fox Wild Hunt</a>
                </div>
              </div>

              <div class="repo-group">
                <div class="group-label"><v-icon size="10" color="primary">{{ mdiGithub }}</v-icon> PHP, Java, TypeScript</div>
                <div class="repo-links">
                  <a href="https://github.com/white-rabbit-1-sketch/php-file-hash-map" target="_blank">PHP: File Hash Map</a>
                  <a href="https://github.com/white-rabbit-1-sketch/php-worker-pool" target="_blank">PHP: Worker Pool (System V)</a>
                  <a href="https://github.com/white-rabbit-1-sketch/alunea-alias-backend" target="_blank">Email Alias: Java Backend</a>
                  <a href="https://github.com/white-rabbit-1-sketch/alunea-alias-frontend" target="_blank">Email Alias: Angular front</a>
                  <a href="https://github.com/white-rabbit-1-sketch/alunea-alias-ansible" target="_blank">Email Alias: Ansible CI/CD</a>
                  <a href="https://github.com/white-rabbit-1-sketch/snippets/tree/master/php-snippets" target="_blank">Various PHP Snippets</a>
                </div>
              </div>

            </div>


            <h3 class="section-heading mt-6">BROAD STACK</h3>
            <p class="eco-note">
              <strong>Note:</strong> While not all of these are daily drivers, I possess the practical experience to implement, debug, or lead projects using this broader ecosystem.
            </p>

            <div class="eco-grid">
              <div class="eco-column">
                <div class="eco-label">LANGUAGES & CORE</div>
                <div class="eco-block">
                  <strong>PHP / Go / Java</strong><br /> Symfony • Laravel • Yii • Zend • Custom Extensions (C) • Doctrine • Libs • High-perf Microservices • Concurrency • Spring Security/Boot/Social • Hibernate • Apache JBI/ESB/JMS/Service Mix/ActiveMQ/Camel
                  <br><strong>Python / TypeScript / Lua / Gdscript (Godot)</strong><br /> Django • SQLAlchemy • Vue • Vuetify • Angular • Electron/Ionic/Capacitor • Webpack • Lua Stdl/COM/fs/socket/C API
                  <br><strong>C / C++ / ASM / TCL / Delphi / VBA / Bash</strong><br /> Boost • WinAPI/POSIX • Kernel • Stdl • Raw sockets • COM • Stack • Heap • Registers
                </div>
              </div>

              <div class="eco-column">
                <div class="eco-label">SYSTEMS & HIGH-LOAD</div>
                <div class="eco-block">
                  <strong>Databases</strong><br /> PostgreSQL • MySQL • MS SQL • Redis • Memcached • Interbase • Firebase • Kyoto • Hash • Cardinality • Constraints • Replication • Sharding • Partitioning • Performance Tuning • Profiling • Locks • Indexes • T-SQL-92
                  <br><strong>CI/CD</strong><br /> Docker • Ansible • Github Actions
                  <br><strong>Infrastructure</strong><br /> Debian • Nginx • Caddy • Apache • Tomcat • Jetty • Elasticsearch • Sphinx • Solr • RabbitMQ • Grafana • Loki • Alloy • Git • Svn • Mercurial • Jira • Confluence • Trac • Redmine
                  <br><strong>Architecture</strong><br /> Sharding • Load Balancing • Zero-Downtime Altering • MSOA • Distributed Systems
                </div>
              </div>

              <div class="eco-column">
                <div class="eco-label">Security & Low-Level</div>
                <div class="eco-block">
                  <strong>Sec Research & Audits</strong><br /> 0-day Exploit Dev • RCE • XSS • Buffer Overflow • Cryptors • Shellcode
                  <br><strong>Reverse Engineering</strong><br /> OllyDbg • WinDbg • GDB • Binary Patching • Deobfuscation • Import Table Recovery
                  <br><strong>Deep Debugging</strong><br /> Strace Expert • Kernel Module Patching • Raw Sockets • Packet Inspection (TCP/UDP)
                </div>
              </div>
            </div>


            <h3 class="section-heading mt-6">THE BACKSTORY: FROM DELPHI TO ARCHITECT</h3>
            <div class="backstory-container">

              <div class="story-grid">
                <div class="story-cell">
                  <div class="story-label">GENESIS & EARLY EXPLOITS</div>
                  <p>
                    Started at 14 with a Delphi book and no internet. By college, I was hacking WinServer networks and maintaining <strong>WoW servers (MaNGOS)</strong> on C++, learning the grit of binary patching.
                    In the <strong>Lineage 2</strong> era, I built a custom Socks4/5 proxy layer for on-the-fly packet modification — pure raw socket magic invisible to anti-cheats.
                  </p>
                </div>

                <div class="story-cell">
                  <div class="story-label">THE "GREY" ERA & OPTIMIZATION</div>
                  <p>
                    Building botnets taught me extreme optimization: I integrated a <strong>Lua interpreter into a C-core</strong>, feeding it raw bytecode to achieve a <strong>4KB binary</strong>.
                    Developed custom cryptors using Python-to-Pseudocode translators and bypassed top-tier AVs by shifting from standard WinAPI to CMD/FTP shellcode injection.
                  </p>
                </div>
              </div>

              <div class="philosophy-box mt-4">
                <div class="story-label">ARCHITECTURAL PHILOSOPHY & "RELIGION"</div>
                <div class="philosophy-content">
                  <div class="phi-column">
                    <div class="phi-item"><strong>Infra:</strong> Debian only. Use <strong>UDP</strong> instead of TCP for real-time performance.</div>
                    <div class="phi-item"><strong>DB:</strong> Foreign Keys are for billing only. Stop the subquery madness and DB-trash-can approach.</div>
                  </div>
                  <div class="phi-column">
                    <div class="phi-item"><strong>Arch:</strong> Thin clients (PHP) → High-speed Microservices (Go/Java). Decentralized P2P trust rings.</div>
                    <div class="phi-item"><strong>Logic:</strong> Debugged Pinba stack corruption for 24h. I don't trust "magic" monitoring tools anymore.</div>
                  </div>
                </div>
              </div>

              <div class="story-quote mt-3">
                "I love computers, I understand them, and they understand me."
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
  background: white;
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
  @page { size: A4; margin: 10mm; }
  .pdf-resume-container { padding: 0; width: 100%; }
  .case-card { page-break-inside: avoid; }
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
</style>