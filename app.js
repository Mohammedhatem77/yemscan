/* YemScan — Midterm Graduation Project Presentation Engine
   Follows Official UST Faculty Guidelines for Graduation Project (1)
   20-Slide Standard Academic Template (Cybersecurity & Networking)
   Supervised by: Dr. Aisha Al-Hadm · Academic Year: 2026-2027
   Team: Mohammed Saleh Hatem, Nassar Ahmed Al-Fattahi, Mohammed Abdulwahid Alrubaidi,
         Younes Mohammed Alsarory, Abdulmajid Abulkarim Anqa
   Updated according to Midterm Review Guidelines (10 October 2026)
*/
(function(){
'use strict';

let L = localStorage.getItem('ys_lang') || 'en';
let cur = 0; // 0..19: 20 Slides (Slide 1 is the Title & Team Cover Slide)
let simTimer = null;

const tr = (en, ar) => (L === 'ar' ? ar : en);
const A = (i, html, cls) => `<div class="${cls || ''} anim" style="--i:${i}">${html}</div>`;

const I18N = {
  headerContext: {
    en: 'UST · Cybersecurity & Networking · Midterm Defense 2026-2027',
    ar: 'جامعة العلوم والتكنولوجيا · الأمن السيبراني والشبكات · مناقشة نصفية 2026-2027'
  },
  overview: { en: 'Overview', ar: 'الفهرس' },
  overviewTitle: { en: 'Slide Overview & Navigation (20 Slides)', ar: 'فهرس شرائح العرض والتنقل السريع (20 شريحة)' },
  overviewSub: { en: 'Presentation organized according to UST Guidelines', ar: 'تنظيم العرض وفق محاور دليل الجامعة' },
  close: { en: 'Close', ar: 'إغلاق' },
  prev: { en: 'Prev', ar: 'السابق' },
  next: { en: 'Next', ar: 'التالي' },
  reduceMotion: { en: 'Reduce Motion', ar: 'تقليل الحركة' },
  jumpTo: { en: 'Slide', ar: 'شريحة' },
  shortcutsTitle: { en: 'Keyboard Shortcuts', ar: 'اختصارات لوحة المفاتيح' }
};

/* ============================================================
   20 SLIDES COMPLIANT WITH UST MIDTERM GUIDELINES & REVIEW NOTES
============================================================ */
const S = [];
const addSlide = (kicker, title, tagText, tagClass, note, renderFn) => {
  S.push({ kicker, title, tagText, tagClass, note, renderFn });
};

// 1. Title & Team (الشريحة 1: دمج الغلاف وهوية المشروع وفريق العمل)
addSlide(
  ['Slide 01: Title & Team', 'الشريحة 1: العنوان وفريق العمل'],
  ['Project Identity & Research Team', 'هوية المشروع، فريق العمل والإشراف الأكاديمي'],
  ['Team & Supervision', 'الفريق والإشراف'], 'tag-sec',
  ['YemScan: Graduation Project (1) at UST, Faculty of Computing & IT, Department of Computer Science.',
   'مشروع YemScan: مقرر مشروع التخرج (1) بكلية الحاسبات وتكنولوجيا المعلومات - قسم علوم الحاسوب.'],
  () => `<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; width:100%; height:100%; text-align:center;">
    ${A(0, `
      <div style="display:inline-flex; align-items:center; gap:8px; padding:4px 16px; border-radius:100px; background:rgba(45,212,191,0.12); border:1px solid rgba(45,212,191,0.3); font-size:12px; font-weight:700; color:var(--teal); text-transform:uppercase; letter-spacing:1px; margin-bottom:8px;">
        <span style="width:7px; height:7px; border-radius:50%; background:var(--teal); box-shadow:0 0 8px var(--teal);"></span>
        ${tr('Graduation Project (1) Defense · Chapters 1, 2 & 3', 'مناقشة مشروع التخرج (1) · الفصول 1، 2 و 3')}
      </div>
      <p style="font-size:14.5px; color:#cbd5e1; font-weight:600; margin:0 0 6px 0;">
        ${tr('University of Science and Technology · Faculty of Computing & IT · Department of Computer Science · Cybersecurity & Networking',
             'جامعة العلوم والتكنولوجيا · كلية الحاسبات وتكنولوجيا المعلومات · قسم علوم الحاسوب · الأمن السيبراني والشبكات')}
      </p>
      <h1 style="font-size:clamp(30px, 3.6vw, 42px); font-weight:900; line-height:1.15; color:#ffffff; margin:0 0 4px 0; background:linear-gradient(135deg, #ffffff 20%, var(--teal) 75%, var(--blue) 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">
        YemScan: ${tr('Yemeni Web Attack and Vulnerability Scanner', 'الماسح اليمني لفحص ثغرات وهجمات الويب')}
      </h1>
      <p style="font-size:15px; color:#94a3b8; max-width:940px; line-height:1.6; margin:0 auto 12px auto;">
        ${tr('A proposed platform for authorized external black-box reconnaissance and security scanning, combining multi-tool coordination, security-reference enrichment, data protection design, and AI-assisted remediation analysis.',
             'منصة مقترحة لاستطلاع وفحص أمن تطبيقات الويب (Black-Box) ضمن نطاق مصرح به، تجمع بين تنسيق الأدوات المتعددة، الإثراء المرجعي للثغرات، تصميم حماية البيانات، والتحليل المساعد بالذكاء الاصطناعي.')}
      </p>

      <div class="team-title-grid" style="margin:0 auto 12px auto; max-width:980px;">
        <div class="team-title-card">
          <div class="team-title-av">01</div>
          <div class="team-title-info">
            <div class="team-title-name">${tr('Mohammed Saleh Hatem', 'محمد صالح حاتم')}</div>
            <div class="team-title-id">ID: 202310400368</div>
          </div>
        </div>
        <div class="team-title-card">
          <div class="team-title-av">02</div>
          <div class="team-title-info">
            <div class="team-title-name">${tr('Nassar Ahmed Al-Fattahi', 'نصار أحمد الفتاحي')}</div>
            <div class="team-title-id">ID: 202310400349</div>
          </div>
        </div>
        <div class="team-title-card">
          <div class="team-title-av">03</div>
          <div class="team-title-info">
            <div class="team-title-name">${tr('Mohammed Abdulwahid Alrubaidi', 'محمد عبد الواحد الربيدي')}</div>
            <div class="team-title-id">ID: 202310100273</div>
          </div>
        </div>
        <div class="team-title-card">
          <div class="team-title-av">04</div>
          <div class="team-title-info">
            <div class="team-title-name">${tr('Younes Mohammed Alsarory', 'يونس محمد السروري')}</div>
            <div class="team-title-id">ID: 202310102399</div>
          </div>
        </div>
        <div class="team-title-card" style="grid-column: span 2;">
          <div class="team-title-av">05</div>
          <div class="team-title-info">
            <div class="team-title-name">${tr('Abdulmajid Abulkarim Anqa', 'عبد المجيد عبد الكريم عنقة')}</div>
            <div class="team-title-id">ID: 202310102081</div>
          </div>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:8px 20px; font-size:13.5px; width:100%; max-width:980px; margin:0 auto;">
        <div><b>${tr('Supervisor:', 'المشرفة:')}</b> <span style="color:var(--teal); font-weight:800;">${tr('Dr. Aisha Al-Hadm', 'عائشه الحدم')}</span></div>
        <div><b>${tr('Major:', 'التخصص:')}</b> <span style="color:#ffffff; font-weight:700;">${tr('Cybersecurity & Networking', 'الأمن السيبراني والشبكات')}</span></div>
        <div><b>${tr('Methodology:', 'المنهجية:')}</b> <span style="color:var(--blue); font-weight:700;">${tr('Iterative Agile Lifecycle', 'دورة Agile التكرارية')}</span></div>
        <div><b>${tr('Academic Year:', 'العام الجامعي:')}</b> <span style="color:#ffffff; font-weight:700;">2026 - 2027</span></div>
      </div>
    `)}
  </div>`
);

// 2. Background / Context (الشريحة 2)
addSlide(
  ['Slide 02: Background', 'الشريحة 2: الخلفية والسياق'],
  ['External Attack Surface and Web Exposure', 'السياق العام: سطح الهجوم الخارجي وتوسع تعرض الويب'],
  ['Background', 'الخلفية'], 'tag-sec',
  ['Accelerated digital migration creates dynamic subdomains, APIs, and services prone to external threats.',
   'التوسع الرقمي المتسارع يفرز أصولاً رقمية ونطاقات وواجهات API معرضة للهجمات الخارجية.'],
  () => `<div class="split-ill-grid">
    <!-- Left Column: 3 Operational Cards & Stats Row -->
    <div style="display:flex; flex-direction:column; gap:10px; justify-content:space-between;">
      ${A(0, `
        <div class="card" style="padding:12px 16px;">
          <h3 style="font-size:17.5px; font-weight:800; color:var(--teal); margin:0 0 4px 0;">${tr('Dynamic Attack Surface Expansion', 'توسع سطح الهجوم الخارجي')}</h3>
          <p style="font-size:14.5px; line-height:1.55; color:#cbd5e1; margin:0;">${tr('Organizations rely heavily on externally exposed subdomains, web services, and APIs to deliver public services, creating an evolving external perimeter that requires ongoing inventorying.',
            'تعتمد المؤسسات والشركات على نطاقات فرعية وخدمات ويب وواجهات API مكشوفة خارجياً، مما يشكل سطح هجوم ديناميكياً يتطلب حصراً ومتابعة مستمرة.')}</p>
        </div>
      `)}

      ${A(1, `
        <div class="card" style="padding:12px 16px; border-color:rgba(56,189,248,0.25);">
          <h3 style="font-size:17.5px; font-weight:800; color:var(--blue); margin:0 0 4px 0;">${tr('External Black-Box Testing Methodology', 'منهج الفحص الصندوق الأسود')}</h3>
          <p style="font-size:14.5px; line-height:1.55; color:#cbd5e1; margin:0;">${tr('External security scanning examines accessible interfaces without source code access, mimicking true adversary perspectives to identify exposed assets and security misconfigurations.',
            'فحص المنظومة من الخارج بنهج الصندوق الأسود ودون الحاجة للكود المصدري يحاكي زاوية المهاجم الفعلي لاكتشاف الأصول المكشوفة واكتشاف أخطاء الإعدادات الأمنية.')}</p>
        </div>
      `)}

      ${A(2, `
        <div class="card" style="padding:12px 16px; border-color:rgba(167,139,250,0.25);">
          <h3 style="font-size:17.5px; font-weight:800; color:var(--violet); margin:0 0 4px 0;">${tr('Verizon DBIR 2025 Reality', 'واقع تقرير الاختراقات DBIR 2025')}</h3>
          <p style="font-size:14.5px; line-height:1.55; color:#cbd5e1; margin:0;">${tr('Vulnerability exploitation accounted for 20% of analyzed initial breach access vectors (+34% increase relative to prior report).',
            'شكل استغلال الثغرات مدخل الوصول الأولي في 20% من حوادث الاختراق المحللة، بزيادة بلغت 34% مقارنة بالتقرير السابق.')}</p>
        </div>
      `)}

      ${A(3, `
        <div class="srow">
          <div class="sb">
            <div class="snum">20%</div>
            <div class="slbl">${tr('Initial Breach Vector', 'مدخل الاختراق')}</div>
          </div>
          <div class="sb">
            <div class="snum">+34%</div>
            <div class="slbl">${tr('YoY Exploitation', 'زيادة سنوية')}</div>
          </div>
          <div class="sb">
            <div class="snum">Zero-Code</div>
            <div class="slbl">${tr('Black-Box Testing', 'فحص الصندوق الأسود')}</div>
          </div>
        </div>
      `)}
    </div>

    <!-- Right Column: Illustrated Attack Surface Card -->
    ${A(4, `
      <div class="ill-card">
        <div class="ill-frame" onclick="openImgModal('images/soc_command_center.jpg', '${tr('External Attack Surface & Exposed Web Services Telemetry', 'سطح الهجوم الخارجي ورصد الخدمات والواجهات المكشوفة')}')">
          <img src="images/soc_command_center.jpg" alt="Attack Surface & Security Telemetry" class="ill-img" loading="lazy">
          <div class="ill-zoom-hint">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            <span>ZOOM</span>
          </div>
        </div>
        <div class="ill-caption">
          <div class="ill-title">
            <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--teal);"></span>
            ${tr('External Attack Surface & Threat Monitoring', 'رصد سطح الهجوم والتهديدات الخارجية')}
          </div>
          <div class="ill-sub">CHAPTER 1 §1.1</div>
        </div>
      </div>
    `)}
  </div>`
);

// 3. Problem Statement (الشريحة 3)
addSlide(
  ['Slide 03: Problem Statement', 'الشريحة 3: صياغة المشكلة'],
  ['Problem Statement: Fragmented Scanning and Result Interpretation', 'صياغة المشكلة: تشتت الفحص وتحديات تفسير المخرجات'],
  ['Problem Statement', 'صياغة المشكلة'], 'tag-prop',
  ['Addresses tool fragmentation, heterogeneous outputs, and limited analytical context for remediation.',
   'معالجة تشتت أدوات الفحص، تباين المخرجات، ومحدودية السياق التحليلي لإرشاد المعالجة.'],
  () => `<div class="split-ill-grid">
    <!-- Left Column: 3 Problem Cards & Anchor Quote -->
    <div style="display:flex; flex-direction:column; gap:10px; justify-content:space-between;">
      ${A(0, `
        <div style="border-inline-start:4px solid var(--teal); background:rgba(45,212,191,0.06); padding:8px 16px; border-radius:8px;">
          <p style="font-size:15px; font-weight:600; line-height:1.55; color:#f1f5f9; margin:0;">
            ${tr('“YemScan addresses the fragmented coordination of multiple security tools, heterogeneous scanning outputs, and the effort required to interpret findings and prepare actionable reports.”',
                 '«تعالج منصة YemScan تشتت التنسيق بين أدوات الأمان المتعددة، وتباين مخرجات الفحص، والجهد المطلوب لتفسير النتائج وإعداد تقارير قابلة للتنفيذ».')}
          </p>
        </div>
      `)}

      ${A(1, `
        <div class="card" style="padding:11px 14px; border-color:rgba(251,191,36,0.3);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px;">
            <h3 style="font-size:17px; font-weight:800; color:var(--amber); margin:0;">${tr('1. Fragmented Tool Coordination', '1. تشتت تنسيق الأدوات')}</h3>
            <span style="font-size:12px; font-weight:700; color:var(--amber); font-family:var(--font-mono);">01 / TOOL SILOS</span>
          </div>
          <p style="font-size:14px; line-height:1.5; color:#cbd5e1; margin:0;">
            ${tr('Operating several discovery and security scanning tools separately requires manual coordination and repeated transfer of outputs between tools.',
                 'تشغيل عدة أدوات للاستكشاف والفحص الأمني بشكل منفصل يتطلب تنسيقاً يدوياً ونقلاً متكرراً للمخرجات بين الأدوات.')}
          </p>
        </div>
      `)}

      ${A(2, `
        <div class="card" style="padding:11px 14px; border-color:rgba(56,189,248,0.3);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px;">
            <h3 style="font-size:17px; font-weight:800; color:var(--blue); margin:0;">${tr('2. Heterogeneous Scanning Outputs', '2. تباين مخرجات الفحص')}</h3>
            <span style="font-size:12px; font-weight:700; color:var(--blue); font-family:var(--font-mono);">02 / SCHEMA DISPARITY</span>
          </div>
          <p style="font-size:14px; line-height:1.5; color:#cbd5e1; margin:0;">
            ${tr('Different tools produce outputs with different formats, structures, and levels of detail, which complicates their collection and comparison.',
                 'تنتج الأدوات المختلفة مخرجات بصيغ وهياكل ومستويات تفصيل متباينة، مما يعقّد تجميعها والمقارنة بينها دون توحيد.')}
          </p>
        </div>
      `)}

      ${A(3, `
        <div class="card" style="padding:11px 14px; border-color:rgba(251,113,133,0.3);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px;">
            <h3 style="font-size:17px; font-weight:800; color:var(--red); margin:0;">${tr('3. Limited Analytical Context', '3. محدودية السياق التحليلي')}</h3>
            <span style="font-size:12px; font-weight:700; color:var(--red); font-family:var(--font-mono);">03 / CONTEXT VOID</span>
          </div>
          <p style="font-size:14px; line-height:1.5; color:#cbd5e1; margin:0;">
            ${tr('Raw technical outputs may be difficult to interpret and may not provide sufficient context for prioritizing remediation activities.',
                 'قد يصعب تفسير المخرجات التقنية الخام، وقد لا توفر سياقاً كافياً لتحديد أولويات المعالجة والإصلاح الفعلي.')}
          </p>
        </div>
      `)}
    </div>

    <!-- Right Column: Illustrated Tool Chaos Card -->
    ${A(4, `
      <div class="ill-card">
        <div class="ill-frame" onclick="openImgModal('images/alert_fatigue_chaos.jpg', '${tr('Fragmented Security Tools & Heterogeneous Output Crisis', 'تشتت أدوات الأمان وأزمة تباين المخرجات الفنية')}')">
          <img src="images/alert_fatigue_chaos.jpg" alt="Tool Fragmentation & Heterogeneous Outputs" class="ill-img" loading="lazy">
          <div class="ill-zoom-hint">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            <span>ZOOM</span>
          </div>
        </div>
        <div class="ill-caption">
          <div class="ill-title">
            <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--red);"></span>
            ${tr('Tool Coordination & Output Disparity', 'تشتت الأدوات وتباين المخرجات')}
          </div>
          <div class="ill-sub">CHAPTER 1 §1.2</div>
        </div>
      </div>
    `)}
  </div>`
);

// 4. Project Objectives (الشريحة 4: أهداف المشروع)
addSlide(
  ['Slide 04: Project Objectives', 'الشريحة 4: أهداف المشروع'],
  ['Main & Specific Project Objectives', 'أهداف المشروع — Project Objectives'],
  ['Objectives', 'أهداف المشروع'], 'tag-prop',
  ['', ''],
  () => {
    const objs = [
      {
        num: '01',
        title: ['1. Automated Asset and Service Discovery', '1. اكتشاف الأصول والخدمات آليًا'],
        desc: ['Discover and inventory target-relevant subdomains, ports, services, and API endpoints using appropriate discovery tools.',
               'اكتشاف وحصر النطاقات الفرعية والمنافذ والخدمات وواجهات API ذات الصلة بالهدف باستخدام أدوات الاكتشاف المناسبة.'],
        color: 'var(--teal)',
        border: 'rgba(45,212,191,0.35)'
      },
      {
        num: '02',
        title: ['2. Automated Black-Box Security Scanning', '2. أتمتة الفحص الأمني بنهج الصندوق الأسود'],
        desc: ['Integrate security scanning tools within a unified execution environment without requiring source code, supporting Sequential Scanning and Independent Scanning based on scope, task requirements, and user selection.',
               'دمج أدوات الفحص في بيئة تنفيذ موحدة، دون الحاجة إلى الشيفرة المصدرية، مع دعم Sequential Scanning وIndependent Scanning وفق نطاق الفحص ومتطلبات المهمة واختيار المستخدم.'],
        color: 'var(--blue)',
        border: 'rgba(56,189,248,0.35)'
      },
      {
        num: '03',
        title: ['3. Security Data Processing and Enrichment', '3. معالجة البيانات الأمنية وإثراؤها'],
        desc: ['Extract, organize, normalize, and deduplicate findings where applicable, and link them to CVE identifiers, CWE classifications, OWASP Top 10 categories, and CVSS scores when suitable reference data is available.',
               'استخراج النتائج وتنظيمها وتوحيدها وإزالة التكرار عند انطباقه، وربطها بمعرّفات CVE وتصنيفات CWE وفئات OWASP Top 10 ودرجات CVSS عند توافر معلومات مرجعية مناسبة تدعم ذلك.'],
        color: 'var(--violet)',
        border: 'rgba(167,139,250,0.35)'
      },
      {
        num: '04',
        title: ['4. AI-Based Analysis & Recommendations', '4. التحليل بالذكاء الاصطناعي وتوصيات المعالجة'],
        desc: ['Interpret and summarize structured and enriched findings and suggest remediation priorities and recommendations, without treating AI as the primary source of CVE identifiers, CWE classifications, OWASP Top 10 categories, or CVSS scores.',
               'تفسير النتائج المهيكلة والمثرية وتلخيصها واقتراح أولويات المعالجة والتوصيات، دون اعتبار الذكاء الاصطناعي المصدر الأساسي لمعرّفات CVE أو تصنيفات CWE أو فئات OWASP Top 10 أو درجات CVSS.'],
        color: 'var(--amber)',
        border: 'rgba(251,191,36,0.35)'
      },
      {
        num: '05',
        title: ['5. Web Dashboard, Access & Data Protection', '5. لوحة ويب تفاعلية وإدارة وصول آمنة وحماية البيانات'],
        desc: ['Develop an interface for registration, login, scan configuration, monitoring, and results review, with role-based access control, ownership verification, user data isolation, and stored data protection using AES-256-GCM and Envelope Encryption.',
               'تطوير واجهة للتسجيل والدخول وإعداد الفحوص ومتابعتها واستعراض النتائج، مع الصلاحيات المبنية على الأدوار والتحقق من الملكية وعزل بيانات المستخدمين، وحماية البيانات المخزنة باستخدام AES-256-GCM وEnvelope Encryption.'],
        color: 'var(--green)',
        border: 'rgba(74,222,128,0.35)'
      },
      {
        num: '06',
        title: ['6. Automated Executive & Technical Reports', '6. توليد التقارير التنفيذية والفنية آليًا'],
        desc: ['Consolidate structured findings, security references, and AI-assisted analysis within a predefined report structure to produce an executive summary and a detailed technical report containing findings, analysis, and remediation recommendations.',
               'دمج النتائج المهيكلة والمراجع الأمنية والتحليل المساعد بالذكاء الاصطناعي ضمن بنية تقرير محددة مسبقًا، لإنتاج ملخص تنفيذي وتقرير فني تفصيلي يتضمن النتائج والتحليل وتوصيات المعالجة.'],
        color: 'var(--red)',
        border: 'rgba(244,63,94,0.35)'
      }
    ];

    return `<div style="display:flex; flex-direction:column; gap:12px; width:100%; height:100%; justify-content:space-between;">
      <!-- General Objective Banner -->
      ${A(0, `
        <div class="hl" style="padding:10px 18px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <b style="font-size:15px; color:var(--teal); font-family:var(--font-mono); text-transform:uppercase;">
              ${tr('Primary Project Objective (Chapter 1 §1.4.1)', 'الهدف العام للمشروع (الفصل الأول §1.4.1)')}
            </b>
            <span class="status-badge" style="background:rgba(45,212,191,0.15); color:var(--teal); font-size:11.5px; padding:2px 8px; font-family:var(--font-mono);">
              OVERALL GOAL
            </span>
          </div>
          <p style="font-size:15.5px; font-weight:700; line-height:1.6; margin:0; color:#f8fafc;">
            ${tr('“To develop the YemScan platform for discovering and inventorying externally exposed digital assets and services, conducting black-box security scanning, and processing, enriching, and analyzing findings in a structured manner to support remediation recommendations and produce executive and technical reports.”',
                 '«تطوير منصة YemScan لاكتشاف وحصر الأصول والخدمات الرقمية المكشوفة خارجيًا، وفحصها أمنيًا بنهج الصندوق الأسود، ومعالجة النتائج وإثرائها وتحليلها بصورة مهيكلة لدعم تقديم التوصيات وإنتاج التقارير التنفيذية والفنية».')}
          </p>
        </div>
      `)}

      <!-- 6 Specific Objectives (3x2 Grid) -->
      <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:12px; width:100%;">
        ${objs.map((o, idx) => A(idx + 1, `
          <div class="c-card" style="padding:11px 14px; border-color:${o.border}; display:flex; flex-direction:column; justify-content:space-between; height:100%;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">
                <span style="font-size:12px; font-weight:800; color:${o.color}; font-family:var(--font-mono); background:rgba(255,255,255,0.06); padding:2px 7px; border-radius:4px;">OBJ ${o.num}</span>
              </div>
              <h4 style="font-size:14.5px; font-weight:800; color:#ffffff; margin:0 0 5px 0; line-height:1.4;">${tr(o.title[0], o.title[1])}</h4>
              <p style="font-size:13px; line-height:1.55; color:#cbd5e1; margin:0;">${tr(o.desc[0], o.desc[1])}</p>
            </div>
          </div>
        `)).join('')}
      </div>

      <!-- Architectural Baseline & Technical Details Button -->
      ${A(7, `
        <div style="background:rgba(15,23,42,0.75); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:8px 16px; font-size:13px; color:#cbd5e1; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
          <span><b>${tr('Objectives Baseline:', 'مرجعية الأهداف:')}</b> ${tr('Defined in Chapter 1 §1.4; these represent complete platform objectives without completion claims.', 'محددة في الفصل الأول §1.4؛ وتمثل أهداف المنصة الشاملة دون ادعاءات اكتمال.')}</span>
          <button type="button" class="pill-btn" onclick="openObjSpecModal()" style="font-size:12px; padding:3px 10px; cursor:pointer;">
            ${tr('View Architectural & Governance Details', 'عرض التفاصيل المعمارية وضوابط الحوكمة')}
          </button>
        </div>
      `)}
    </div>`;
  }
);

// 5. Project Scope & Delimitations (الشريحة 5: نطاق المشروع وحدوده)
addSlide(
  ['Slide 05: Scope & Boundaries', 'الشريحة 5: نطاق المشروع وحدوده'],
  ['Project Scope and Delimitations', 'نطاق المشروع وحدوده — Project Scope and Delimitations'],
  ['Scope Boundaries', 'حدود النطاق'], 'tag-sec',
  ['', ''],
  () => {
    const inScope = [
      ['Asset & Service Discovery', 'اكتشاف الأصول والخدمات', 'Subdomains, ports, services, and related API paths.', 'النطاقات الفرعية والمنافذ والخدمات ومسارات API ذات الصلة.'],
      ['External Black-Box Scanning', 'الفحص الخارجي بالصندوق الأسود', 'Scanning targets without access to internal source code or databases.', 'فحص النطاقات أو الروابط دون الوصول إلى الشيفرة أو قواعد البيانات الداخلية.'],
      ['Automated Security Scanning', 'الفحص الأمني الآلي', 'Identifying potential vulnerabilities and misconfigurations using approved tools.', 'تحديد الثغرات المحتملة وأخطاء الإعدادات باستخدام الأدوات والقوالب المناسبة.'],
      ['Sequential & Independent Modes', 'الفحص المتسلسل والمستقل', 'Prepared stage handover or standalone execution of selected tools.', 'تجهيز المدخلات بين المراحل أو تنفيذ الأدوات المختارة بصورة مستقلة.'],
      ['Data Processing & Enrichment', 'معالجة البيانات وإثراؤها', 'Retaining raw outputs, normalizing schemas, and linking CVE/CWE/CVSS references.', 'الاحتفاظ بالمخرجات الخام وتوحيد النتائج وربط المراجع الأمنية عند توافر تطابق مدعوم.'],
      ['Auth, Access Control & Privacy', 'المصادقة والتحكم والخصوصية', 'System Administrator and User roles with RBAC and ownership checks.', 'دورا System Administrator وUser، مع RBAC والتحقق من الملكية.'],
      ['Cryptographic Storage Protection', 'التشفير الموثّق وحماية البيانات', 'AES-256-GCM, key management, 128-bit tag verification, password hashing.', 'AES-256-GCM، وضبط المفاتيح والتحقق من الوسم، وتجزئة كلمات المرور.'],
      ['AI Analysis & Recommendations', 'التحليل بالذكاء الاصطناعي', 'Interpreting enriched findings with prompt minimization over HTTPS.', 'تفسير النتائج المثرية، مع تقليل البيانات المرسلة وحماية نقلها عبر HTTPS.'],
      ['Dashboard & Dual Reports', 'لوحة التحكم والتقارير', 'Orchestration, tracking, and generating encrypted Executive & Technical Reports.', 'إدارة الفحوص ومتابعتها وتوليد Executive and Technical Reports وحفظها مشفرة.']
    ];

    const outScope = [
      ['Active Exploitation', 'الاستغلال الفعلي للثغرات', 'Exploiting found vulnerabilities, payload execution, or compromise.', 'استغلال الثغرات عملياً أو تنفيذ حمولات خبيثة لاختراق الهدف.'],
      ['Internal Network Scanning', 'فحص الشبكات الداخلية والأجهزة', 'Scanning internal subnets, hosts, or endpoints behind perimeter.', 'فحص الشبكات الداخلية والأجهزة الطرفية وخوادم الإنترانت.'],
      ['Vulnerability Lifecycle & Ticketing', 'إدارة دورة معالجة الثغرات والتذاكر', 'Ticketing, remediation lifecycle, or patch management workflows.', 'إدارة التذاكر وتتبع الإصلاح ودورة معالجة الثغرات المؤسسية.'],
      ['WAF / DDoS / CAPTCHA Bypass', 'تجاوز WAF وحماية DDoS وCAPTCHA', 'Evading web application firewalls, CAPTCHA, or DDoS protection.', 'تقنيات التخفي لتجاوز جدران حماية الويب أو CAPTCHA أو حماية DDoS.'],
      ['Social Engineering & Brute-Force', 'الهندسة الاجتماعية والتخمين', 'Phishing, human deception, credential stuffing, or brute force.', 'الهندسة الاجتماعية، التصيد، وتخمين كلمات المرور بالقوة الغاشمة.']
    ];

    return `<div style="display:flex; flex-direction:column; gap:10px; width:100%; height:100%; justify-content:space-between;">
      <!-- Introductory Definition Banner -->
      ${A(0, `
        <div class="hl" style="padding:9px 16px;">
          <p style="font-size:15px; font-weight:700; text-align:center; line-height:1.55; margin:0;">
            ${tr('“The scope of YemScan defines the included capabilities and boundaries of external black-box security scanning within a defined, authorized scope.”',
                 '«يحدد نطاق YemScan الوظائف المشمولة وحدود الفحص الأمني الخارجي بنهج الصندوق الأسود، ضمن نطاق محدد ومصرح به».')}
          </p>
        </div>
      `)}

      <!-- Asymmetrical Two Columns: In-Scope (9 items) vs Out-of-Scope (5 items) -->
      <div style="display:grid; grid-template-columns: 1.35fr 1fr; gap:16px; width:100%; align-items:stretch;">
        <!-- In-Scope Column -->
        ${A(1, `
          <div class="c-card" style="padding:10px 14px; border-color:rgba(45,212,191,0.35); display:flex; flex-direction:column; justify-content:space-between; height:100%;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding-bottom:5px; border-bottom:1px solid rgba(45,212,191,0.25);">
                <h3 style="color:var(--teal); font-size:16px; font-weight:800; margin:0;">
                  ${tr('In-Scope (Section 1.5.1 — 9 Categories)', 'داخل النطاق (القسم 1.5.1 — 9 فئات مشمولة)')}
                </h3>
                <span class="status-badge" style="background:rgba(45,212,191,0.15); color:var(--teal); font-size:11px; padding:2px 7px; font-family:var(--font-mono);">
                  INCLUDED
                </span>
              </div>

              <div style="display:grid; grid-template-columns: 1fr 1fr; gap:6px 10px;">
                ${inScope.map((item, idx) => `
                  <div style="background:rgba(20,184,166,0.06); border:1px solid rgba(45,212,191,0.18); border-radius:6px; padding:5px 8px; font-size:12px; line-height:1.35; ${idx === 8 ? 'grid-column: span 2;' : ''}">
                    <div style="display:flex; align-items:center; gap:5px; margin-bottom:2px;">
                      <span style="color:var(--teal); font-weight:800; font-family:var(--font-mono); font-size:10.5px;">${String(idx + 1).padStart(2, '0')}</span>
                      <b style="color:#ffffff; font-size:12.5px;">${tr(item[0], item[1])}</b>
                    </div>
                    <div style="color:#cbd5e1; font-size:11.5px;">${tr(item[2], item[3])}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `)}

        <!-- Out-of-Scope Column -->
        ${A(2, `
          <div class="c-card" style="padding:10px 14px; border-color:rgba(244,63,94,0.35); display:flex; flex-direction:column; justify-content:space-between; height:100%;">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding-bottom:5px; border-bottom:1px solid rgba(244,63,94,0.25);">
                <h3 style="color:var(--red); font-size:16px; font-weight:800; margin:0;">
                  ${tr('Out-of-Scope (Section 1.5.2 — 5 Exclusions)', 'خارج النطاق (القسم 1.5.2 — 5 محددات مستبعدة)')}
                </h3>
                <span class="status-badge" style="background:rgba(244,63,94,0.15); color:var(--red); font-size:11px; padding:2px 7px; font-family:var(--font-mono);">
                  EXCLUDED
                </span>
              </div>

              <div style="display:flex; flex-direction:column; gap:6px;">
                ${outScope.map((item, idx) => `
                  <div style="background:rgba(244,63,94,0.06); border:1px solid rgba(244,63,94,0.18); border-radius:6px; padding:5px 8px; font-size:12px; line-height:1.35;">
                    <div style="display:flex; align-items:center; gap:5px; margin-bottom:2px;">
                      <span style="color:var(--red); font-weight:800; font-family:var(--font-mono); font-size:10.5px;">${String(idx + 1).padStart(2, '0')}</span>
                      <b style="color:#ffffff; font-size:12.5px;">${tr(item[0], item[1])}</b>
                    </div>
                    <div style="color:#cbd5e1; font-size:11.5px;">${tr(item[2], item[3])}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `)}
      </div>

      <!-- Item 6 of Delimitations: Privacy and Cryptographic Boundaries Prominent Banner -->
      ${A(3, `
        <div style="background:rgba(15,23,42,0.85); border:1px solid rgba(251,191,36,0.35); border-radius:8px; padding:8px 14px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
          <div style="flex:1; min-width:320px; font-size:13px; line-height:1.5; color:#cbd5e1;">
            <b style="color:var(--amber); font-size:13.5px; display:inline-block; margin-inline-end:6px;">
              ${tr('Privacy & Cryptographic Boundaries:', 'حدود الخصوصية والتشفير:')}
            </b>
            ${tr('Isolation and admin controls operate at application level; design provides no zero-knowledge guarantee against host root compromise. Authorized processing requires transient plaintext, and external AI processes submitted prompt payloads.',
                 'العزل وصلاحيات المدير على مستوى التطبيق؛ ولا يقدم التصميم ضمان Zero-Knowledge ضد مشغل يملك سيطرة كاملة على الخادم. تتطلب المعالجة المصرح بها وصولًا مؤقتًا إلى البيانات الصريحة، وتعالج خدمة AI الخارجية المعلومات المرسلة إليها.')}
          </div>
          <button type="button" class="pill-btn" onclick="openScopeNotesModal()" style="font-size:12px; padding:3px 10px; cursor:pointer; flex-shrink:0;">
            ${tr('View Scope & Security Notes', 'عرض الملاحظات وضوابط الأمان')}
          </button>
        </div>
      `)}
    </div>`;
  }
);

// 6. Existing Systems / Related Work (الشريحة 6)
addSlide(
  ['Slide 06: Related Systems & Tools', 'الشريحة 6: الأنظمة والأدوات ذات الصلة'],
  ['Related Systems and Tools', 'الأنظمة والأدوات ذات الصلة'],
  ['Related Systems & Tools', 'الأنظمة والأدوات ذات الصلة'], 'tag-sec',
  ['Criterion-based comparison of reviewed systems with the proposed YemScan platform (Table 2.2 summary).',
   'مقارنة معيارية موجزة بين الأنظمة المراجعة ومنصة YemScan المقترحة (ملخص جدول 2.2).'],
  () => {
    const headers = [
      tr('Comparison criterion \\ Tool or System', 'معيار المقارنة \\ الأداة أو النظام'),
      'Nuclei',
      'Wapiti',
      'reNgine',
      'FortiScan',
      'YemScan'
    ];

    const rows = [
      [
        tr('Integrated subdomain and open-port discovery', 'اكتشاف مدمج للنطاقات الفرعية والمنافذ المفتوحة'),
        '❌', '❌', '✅', '❌', '✅'
      ],
      [
        tr('Coordination of multiple discovery and scanning tools', 'تنسيق مسار متعدد الأدوات للاستكشاف والفحص'),
        '❌', '❌', '✅', '❌', '✅'
      ],
      [
        tr('AI-assisted interpretation of security findings', 'تفسير نتائج الفحص بمساعدة الذكاء الاصطناعي'),
        '❌', '❌', '✅', '✅', '✅'
      ],
      [
        tr('Explicit security-reference enrichment of consolidated findings before AI analysis', 'إثراء مرجعي قياسي صريح للنتائج الموحدة قبل التحليل بالذكاء الاصطناعي'),
        '❌', '❌', '❌', '❌', '✅'
      ]
    ];

    return `<div style="display:flex; flex-direction:column; gap:10px; width:100%;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div style="font-size:16.5px; font-weight:700; color:var(--teal);">
          ${tr('Criterion-Based Comparison with Reviewed Systems and Tools', 'مقارنة معيارية مع الأنظمة والأدوات المراجعة')}
        </div>
        <button class="pill-btn" onclick="openTable22Modal()" style="font-size:13.5px; padding:5px 14px; cursor:pointer;">
          ${tr('View Full Table 2.2', 'عرض جدول 2.2 الكامل')}
        </button>
      </div>

      ${A(0, `
        <div style="overflow-x:auto;">
          <table class="comp-table" style="font-size:15px; width:100%;">
            <thead>
              <tr>
                <th style="width:38%; padding:10px 14px;">${headers[0]}</th>
                <th class="center" style="width:12%; padding:10px 8px;">${headers[1]}</th>
                <th class="center" style="width:12%; padding:10px 8px;">${headers[2]}</th>
                <th class="center" style="width:12%; padding:10px 8px;">${headers[3]}</th>
                <th class="center" style="width:12%; padding:10px 8px;">${headers[4]}</th>
                <th class="center" style="width:14%; padding:10px 8px; color:var(--teal); background:rgba(45,212,191,0.18); border-left:1px solid rgba(45,212,191,0.3); border-right:1px solid rgba(45,212,191,0.3);">${headers[5]}</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map((r, idx) => `
                <tr style="${idx === 3 ? 'background:rgba(45,212,191,0.08);' : ''}">
                  <td style="font-weight:${idx === 3 ? '800' : '600'}; color:${idx === 3 ? 'var(--teal)' : '#e2e8f0'}; padding:10px 14px;">
                    ${r[0]}
                  </td>
                  <td class="center" style="font-size:18px; padding:9px 6px;">${r[1]}</td>
                  <td class="center" style="font-size:18px; padding:9px 6px;">${r[2]}</td>
                  <td class="center" style="font-size:18px; padding:9px 6px;">${r[3]}</td>
                  <td class="center" style="font-size:18px; padding:9px 6px;">${r[4]}</td>
                  <td class="center" style="font-size:18px; font-weight:800; background:rgba(45,212,191,0.06); border-left:1px solid rgba(45,212,191,0.2); border-right:1px solid rgba(45,212,191,0.2); padding:9px 6px;">
                    ${r[5]}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `)}

      ${A(1, `
        <div style="display:flex; flex-direction:column; gap:6px; background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:10px 16px; font-size:14px; line-height:1.55; color:var(--text-muted);">
          <div style="color:#cbd5e1;">
            <b style="color:var(--teal);">${tr('Symbol Note:', 'ملاحظة الرموز:')}</b>
            ${tr('✅ Feature supported or documented in reviewed source; ❌ Feature not supported or not documented in reviewed source.',
                 '✅ الميزة مدعومة أو موثقة في المصدر المراجع؛ ❌ الميزة غير مدعومة أو غير موثقة في المصدر المراجع.')}
          </div>
          <div style="font-size:12.5px; color:var(--text-dim); border-top:1px dashed rgba(255,255,255,0.08); padding-top:5px; display:flex; flex-direction:column; gap:4px;">
            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:6px;">
              <span>${tr('Note: Lack of documentation in the reviewed source does not imply absence of capability.', 'تنبيه: عدم التوثيق في المصدر المراجع لا يعني بالضرورة غياب القدرة.')}</span>
              <span>${tr('FortiScan: unpublished bachelor\'s graduation project, UST (Al-Sharaf et al., 2024).', 'FortiScan: مشروع تخرج بكالوريوس غير منشور، جامعة العلوم والتكنولوجيا (Al-Sharaf et al., 2024).')}</span>
            </div>
            <div style="color:var(--teal); font-size:12px;">
              ${tr('YemScan Features Note: Features indicated for YemScan represent the proposed platform design documented in Chapter 3; their implementation status (Sprint 1 done, Sprint 2 in progress, remainder planned) is detailed in subsequent slides.',
                   'ملاحظة ميزات YemScan: الميزات الموضحة لـ YemScan تمثل التصميم المعماري المقترح الموثق في الفصل الثالث؛ وتفصيل حالة تنفيذها (Sprint 1 مكتمل، Sprint 2 قيد التنفيذ، والباقي مخطط) موضح في الشرائح اللاحقة.')}
            </div>
          </div>
        </div>
      `)}
    </div>`;
  }
);

// 7. Gap Analysis / Limitations (الشريحة 7)
addSlide(
  ['Slide 07: Technical Gap', 'الشريحة 7: الفجوة التقنية والبحثية'],
  ['Research and Technical Gap', 'الفجوة التقنية والبحثية'],
  ['Research Gap', 'الفجوة التقنية'], 'tag-prop',
  ['Addressing tool integration variance, output fragmentation, and lack of pre-AI reference enrichment.',
   'معالجة تباين نطاق الأدوات، تشتت المخرجات، وغياب مرحلة الإثراء المرجعي الصريح قبل الذكاء.'],
  () => `<div class="split-ill-grid">
    <!-- Left Column: Top Quote Banner + 3 Pillars & Verification Note -->
    <div style="display:flex; flex-direction:column; gap:10px; justify-content:space-between;">
      ${A(0, `
        <div style="border-inline-start:4px solid var(--teal); background:rgba(45,212,191,0.06); padding:8px 16px; border-radius:8px;">
          <p style="font-size:14px; font-weight:600; line-height:1.55; color:#f1f5f9; margin:0;">
            ${tr('“Existing solutions differ in functional scope and integration level. Operating multiple tools separately increases scanning complexity, causing fragmented outputs and difficult unified analysis.”',
                 '“تتباين الحلول الحالية في نطاقها الوظيفي ومستوى التكامل؛ حيث يزيد تشغيل الأدوات بشكل منفصل من تعقيد العمليات وتشتت المخرجات وصعوبة تنظيمها وتحليلها بشكل موحد.”')}
          </p>
        </div>
      `)}

      <div style="display:flex; flex-direction:column; gap:8px;">
        ${A(1, `
          <div class="card" style="padding:10px 14px; border-color:rgba(45,212,191,0.3);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2px;">
              <h4 style="font-size:15.5px; font-weight:800; color:var(--teal); margin:0;">${tr('1. Unified Workflow & Dual Modes', '1. سير عمل موحد ونمطان للفحص')}</h4>
              <span style="font-size:11px; font-weight:700; color:var(--teal); font-family:var(--font-mono);">PIPELINE DUALITY</span>
            </div>
            <p style="font-size:13.5px; line-height:1.5; color:#cbd5e1; margin:0;">${tr('Integrates external discovery with multiple scanners, supporting both Sequential and Independent modes in a unified black-box workflow.',
              'دمج استكشاف الأصول مع أدوات فحص الثغرات المتعددة، مع دعم الفحص المتسلسل والفحص المستقل ضمن سير عمل خارجي موحد.')}</p>
          </div>
        `)}

        ${A(2, `
          <div class="card" style="padding:10px 14px; border-color:rgba(56,189,248,0.3);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2px;">
              <h4 style="font-size:15.5px; font-weight:800; color:var(--blue); margin:0;">${tr('2. Consolidation & Provenance', '2. توحيد المخرجات وإثبات المصدر')}</h4>
              <span style="font-size:11px; font-weight:700; color:var(--blue); font-family:var(--font-mono);">AUDIT TRAIL</span>
            </div>
            <p style="font-size:13.5px; line-height:1.5; color:#cbd5e1; margin:0;">${tr('Preserves raw tool outputs separately while consolidating heterogeneous findings into structured records with full audit traceability.',
              'الاحتفاظ بالمخرجات الخام بشكل منفصل مع توحيد وإلغاء تكرار النتائج المتباينة ضمن سجلات مهيكلة تحتفظ بروابط التدقيق للأدلة ومصادر الفحص الأصلية.')}</p>
          </div>
        `)}

        ${A(3, `
          <div class="card" style="padding:10px 14px; border-color:rgba(167,139,250,0.3);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2px;">
              <h4 style="font-size:15.5px; font-weight:800; color:var(--violet); margin:0;">${tr('3. Pre-AI Reference Enrichment', '3. إثراء المراجع القياسية قبل الذكاء')}</h4>
              <span style="font-size:11px; font-weight:700; color:var(--violet); font-family:var(--font-mono);">GROUNDING</span>
            </div>
            <p style="font-size:13.5px; line-height:1.5; color:#cbd5e1; margin:0;">${tr('Associates consolidated findings with relevant CVE, CWE, CVSS, and OWASP categories prior to AI interpretation using defined matching criteria.',
              'ربط النتائج الموحدة بمعرّفات CVE وتصنيفات CWE ودرجات CVSS وفئات OWASP Top 10 عند توفر تطابق ملائم وفق معايير مطابقة محددة، وذلك قبل تقديمها للذكاء الاصطناعي.')}</p>
          </div>
        `)}
      </div>

      ${A(4, `
        <div style="background:rgba(15,23,42,0.85); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:6px 14px; font-size:13px; color:#cbd5e1;">
          <b>${tr('Verification Note:', 'ملاحظة التحقق:')}</b> ${tr('These functions represent design-specific solutions to the identified gap, verified during prototype testing.', 'تمثل هذه الوظائف حلاً تصميمياً للفجوة المحددة؛ وتخضع للتحقق والتقييم أثناء مرحلة التنفيذ والاختبار.')}
        </div>
      `)}
    </div>

    <!-- Right Column: Illustrated Research Gap Card -->
    ${A(5, `
      <div class="ill-card">
        <div class="ill-frame" onclick="openImgModal('images/prior_work_benchmark.jpg', '${tr('Comparative Gap Analysis: Tool Coordination & Pre-AI Reference Grounding', 'تحليل الفجوة المقارنة: تنسيق الأدوات والإثراء المرجعي الصريح قبل الذكاء')}')">
          <img src="images/prior_work_benchmark.jpg" alt="Comparative Literature Benchmark" class="ill-img" loading="lazy">
          <div class="ill-zoom-hint">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            <span>BENCHMARK ZOOM</span>
          </div>
        </div>
        <div class="ill-caption">
          <div class="ill-title">
            <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--violet);"></span>
            ${tr('Comparative Gap in Prior Tools', 'الفجوة المقارنة في الأدوات السابقة')}
          </div>
          <div class="ill-sub">CHAPTER 2 §2.3</div>
        </div>
      </div>
    `)}
  </div>`
);

// 8. Proposed Solution & Workflow (الشريحة 8)
addSlide(
  ['Slide 08: Proposed Workflow', 'الشريحة 8: الحل وسير العمل المقترح'],
  ['Proposed Scanning & Analysis Workflow (Figure 3.3)', 'سير عمل الفحص والتحليل المقترح للمنصة (مخطط 3.3)'],
  ['Workflow Flow', 'سير العمل'], 'tag-demo',
  ['Figure 3.3: Dual-mode workflow (Sequential vs Independent), secure storage, and pre-AI reference enrichment.',
   'مخطط 3.3: مسار الفحص بنمطيه المتسلسل والمستقل، التخزين المشفر، وإثراء المراجع القياسية قبل الذكاء.'],
  () => `<div style="display:grid; grid-template-columns: 370px 1fr; gap:16px; width:100%; align-items:stretch;">
    ${A(0, `
      <div class="diag-card" onclick="openImgModal('./assets/workflow-diagram.png', 'Figure 3.3: YemScan | Proposed Scanning and Analysis Workflow')" title="${tr('Click to view full-screen diagram', 'انقر لتكبير المخطط بحجم الشاشة')}">
        <div class="diag-card-head">
          <span class="diag-badge">Figure 3.3</span>
          <span class="diag-hint">${tr('Click to Enlarge', 'انقر للتكبير')}</span>
        </div>
        <div class="diag-img-box">
          <img src="./assets/workflow-diagram.png" alt="Figure 3.3: Proposed Scanning & Analysis Workflow" class="diag-img">
        </div>
        <div style="font-size:12px; color:#475569; text-align:center; margin-top:4px; font-weight:700;">
          ${tr('Figure 3.3: Proposed Scanning & Analysis Workflow', 'مخطط 3.3: سير عمل الفحص والتحليل المقترح')}
        </div>
      </div>
    `)}

    ${A(1, `
      <div style="display:flex; flex-direction:column; gap:8px; height:100%; justify-content:space-between;">
        <div style="background:rgba(20,184,166,0.08); border:1px solid rgba(20,184,166,0.3); border-radius:10px; padding:7px 14px; font-size:13.5px; color:#f1f5f9; display:flex; align-items:center;">
          <span><b>${tr('Workflow Stages (Chapter 3):', 'مراحل سير العمل (الفصل الثالث):')}</b> ${tr('From authorized target input and scope validation to report generation, encrypted storage, and authorized delivery via HTTPS.', 'من إدخال الهدف والتحقق من النطاق إلى إنشاء التقارير وحفظها مشفرة وإتاحتها للمستخدم المصرح له عبر HTTPS.')}</span>
        </div>

        <div class="c-card" style="padding:10px 14px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:3px;">
            <span style="color:var(--teal); font-weight:800; font-size:13px; font-family:var(--font-mono);">01</span>
            <h4 class="c-card-h" style="font-size:15.5px; margin:0;">${tr('Target Input & Scope Validation', 'إدخال الهدف والتحقق من النطاق')}</h4>
          </div>
          <p class="c-card-p" style="font-size:13.5px; line-height:1.5; margin:0;">${tr('Receives target domain or URL and scan settings; strictly verifies authorized scope boundaries before scheduling.',
            'استقبال نطاق أو رابط URL الهدف وإعدادات الفحص مع التحقق الصارم من حدود النطاق المصرح به قبل الجدولة والتنفيذ.')}</p>
        </div>

        <div class="c-card c-blue" style="padding:10px 14px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:3px;">
            <span style="color:var(--blue); font-weight:800; font-size:13px; font-family:var(--font-mono);">02</span>
            <h4 class="c-card-h" style="font-size:15.5px; margin:0;">${tr('Dual Scanning Modes (Decision)', 'نمطا الفحص (متسلسل ومستقل)')}</h4>
          </div>
          <div style="font-size:13px; line-height:1.5; color:var(--text-muted);">
            <div><b>• ${tr('Sequential:', 'الفحص المتسلسل:')}</b> ${tr('Prepared inputs passed between successive stages: Subfinder ➜ Naabu ➜ httpx ➜ Kiterunner ➜ Nuclei / Wapiti (scanners receive prepared inputs from suitable web targets and discovery findings).', 'تمرير المدخلات المجهزة بين المراحل المتعاقبة: Subfinder ➜ Naabu ➜ httpx ➜ Kiterunner ➜ Nuclei / Wapiti (تتلقى أدوات فحص الثغرات مدخلات مجهزة من أهداف الويب ونتائج الاستكشاف).')}</div>
            <div><b>• ${tr('Independent:', 'الفحص المستقل:')}</b> ${tr('Independent execution of selected tools following dedicated input and scope validation.', 'تنفيذ مستقل للأدوات المختارة بعد التحقق المخصص من صحة المدخلات والنطاق المصرح به.')}</div>
          </div>
        </div>

        <div class="c-card c-amber" style="padding:10px 14px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:3px;">
            <span style="color:var(--amber); font-weight:800; font-size:13px; font-family:var(--font-mono);">03</span>
            <h4 class="c-card-h" style="font-size:15.5px; margin:0;">${tr('Output Collection & Encrypted Storage', 'جمع المخرجات والتخزين المشفر')}</h4>
          </div>
          <p class="c-card-p" style="font-size:13.5px; line-height:1.5; margin:0;">${tr('Platform components parse, validate, normalize schema, and deduplicate; raw outputs encrypted at rest in File System; sensitive fields encrypted before PostgreSQL persistence via AES-256-GCM.',
            'تتولى مكونات المنصة استيعاب المخرجات والتحقق منها وتوحيد بنيتها وإلغاء التكرار؛ تُحفظ المخرجات الخام مشفرة في نظام الملفات، وتُشفر الحقول الحساسة قبل حفظها في PostgreSQL بـ AES-256-GCM.')}</p>
        </div>

        <div class="c-card c-violet" style="padding:10px 14px;">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:3px;">
            <span style="color:var(--violet); font-weight:800; font-size:13px; font-family:var(--font-mono);">04</span>
            <h4 class="c-card-h" style="font-size:15.5px; margin:0;">${tr('Reference Enrichment & AI Reporting', 'إثراء المراجع القياسية والتحليل بالذكاء')}</h4>
          </div>
          <p class="c-card-p" style="font-size:13.5px; line-height:1.5; margin:0;">${tr('Rule-based association with CVE, CWE, and OWASP Top 10, utilizing CVSS scores when evidence matches exist; Gemini 3.8 Flash assists with interpretation, summarization, and remediation advice; reports compiled per approved template and stored encrypted.',
            'ربط النتائج بالقواعد بمراجع CVE وCWE وOWASP Top 10 والاستفادة من درجات CVSS عند توفر تطابق مع الأدلة؛ يتولى Gemini 3.8 Flash المساعدة في تفسير النتائج وتلخيصها وتقديم نصائح المعالجة؛ وتُنشأ التقارير وفق قوالب معتمدة وتُخزن مشفرة.')}</p>
        </div>
      </div>
    `)}
  </div>`
);

// 9. System Overview / Architecture (الشريحة 9)
addSlide(
  ['Slide 09: System Architecture', 'الشريحة 9: معمارية النظام وتدفق البيانات'],
  ['System Architecture and Protected Data Flow (Figure 3.1)', 'معمارية النظام وتدفق البيانات المحمية (مخطط 3.1)'],
  ['Architecture Flow', 'معمارية النظام'], 'tag-prop',
  ['', ''],
  () => `<div style="display:grid; grid-template-columns: 480px 1fr; gap:16px; width:100%; height:100%; align-items:center;">
    ${A(0, `
      <div class="diag-card" onclick="openImgModal('./assets/architecture-diagram.png', 'Figure 3.1: YemScan System Architecture and Protected Data Flow')" title="${tr('Click to view full-screen diagram', 'انقر لتكبير المخطط بحجم الشاشة')}">
        <div class="diag-card-head">
          <span class="diag-badge">Figure 3.1</span>
          <span class="diag-hint">${tr('Click to Enlarge', 'انقر للتكبير')}</span>
        </div>
        <div class="diag-img-box">
          <img src="./assets/architecture-diagram.png" alt="Figure 3.1: YemScan System Architecture" class="diag-img">
        </div>
        <div style="font-size:13px; color:#475569; text-align:center; margin-top:5px; font-weight:700;">
          ${tr('Figure 3.1: System Architecture & Protected Data Flow', 'مخطط 3.1: معمارية النظام وتدفق البيانات المحمية')}
        </div>
      </div>
    `)}

    ${A(1, `
      <div style="display:flex; flex-direction:column; gap:10px; height:100%; justify-content:center;">
        <div class="arch-layer" style="padding:10px 16px; margin:0;">
          <div class="arch-layer-info" style="width:190px;">
            <span class="arch-layer-num">Layer 1</span>
            <div class="arch-layer-name" style="font-size:16px;">${tr('Presentation Layer', 'طبقة العرض والواجهة')}</div>
            <div class="arch-layer-tech">React & TypeScript <span class="badge-plan" style="font-size:12px; padding:2px 8px;">${tr('Planned', 'مخطط')}</span></div>
          </div>
          <div class="arch-boxes">
            <div class="arch-pill" style="font-size:15px; padding:7px 14px;">
              ${tr('Targets, scan selection, live dashboard, authorized report viewing via HTTPS.', 'إدخال الأهداف، اختيار نمط الفحص، لوحة المتابعة، وعرض التقارير عبر HTTPS.')}
            </div>
          </div>
        </div>

        <div class="arch-layer" style="padding:10px 16px; margin:0;">
          <div class="arch-layer-info" style="width:190px;">
            <span class="arch-layer-num">Layer 2</span>
            <div class="arch-layer-name" style="font-size:16px;">${tr('Application Layer', 'طبقة التطبيق والتنسيق')}</div>
            <div class="arch-layer-tech">FastAPI Backend</div>
          </div>
          <div class="arch-boxes">
            <div class="arch-pill blue" style="font-size:15px; padding:7px 14px;">
              ${tr('Authentication, RBAC, ownership checks, scan orchestration, coordinating external AI calls, validating responses, compiling reports.', 'المصادقة، إدارة الأدوار (RBAC)، فحص الملكية، تنسيق الفحص، تنسيق استدعاءات الذكاء الخارجية والتحقق من الردود وتجميع التقارير.')}
            </div>
          </div>
        </div>

        <div class="arch-layer" style="padding:10px 16px; margin:0;">
          <div class="arch-layer-info" style="width:190px;">
            <span class="arch-layer-num">Layer 3</span>
            <div class="arch-layer-name" style="font-size:16px;">${tr('Security Execution Engine', 'محرك الفحص والتنفيذ')}</div>
            <div class="arch-layer-tech">Docker Isolation</div>
          </div>
          <div class="arch-boxes">
            <div class="arch-pill violet" style="font-size:15px; padding:7px 14px;">
              ${tr('Subfinder, Naabu, httpx, Kiterunner, Nuclei, Wapiti (Sequential & Independent execution).', 'تشغيل معزول للأدوات الست: Subfinder وNaabu وhttpx وKiterunner وNuclei وWapiti.')}
            </div>
          </div>
        </div>

        <div class="arch-layer" style="padding:10px 16px; margin:0;">
          <div class="arch-layer-info" style="width:190px;">
            <span class="arch-layer-num">Layer 4</span>
            <div class="arch-layer-name" style="font-size:16px;">${tr('Data Management Layer', 'طبقة إدارة البيانات')}</div>
            <div class="arch-layer-tech">PostgreSQL & File System</div>
          </div>
          <div class="arch-boxes">
            <div class="arch-pill amber" style="font-size:15px; padding:7px 14px;">
              ${tr('Parsing, normalization, deduplication, reference enrichment. Encrypts analyses, reports, and raw data prior to storage via AES-256-GCM.', 'توحيد الصيغ، إلغاء التكرار، إثراء المراجع، وتشفير التحليلات والتقارير والبيانات الخام قبل التخزين بـ AES-256-GCM.')}
            </div>
          </div>
        </div>

        <div class="arch-layer" style="padding:10px 16px; margin:0;">
          <div class="arch-layer-info" style="width:190px;">
            <span class="arch-layer-num" style="background:rgba(168,85,247,0.25); color:#d8b4fe; font-size:12px; padding:2px 8px;">${tr('External Service', 'خدمة خارجية')}</span>
            <div class="arch-layer-name" style="font-size:16px;">${tr('External AI Service', 'خدمة الذكاء الاصطناعي الخارجية')}</div>
            <div class="arch-layer-tech">Gemini 3.8 Flash <span class="badge-plan" style="font-size:12px; padding:2px 8px;">${tr('Planned', 'مخطط')}</span></div>
          </div>
          <div class="arch-boxes">
            <div class="arch-pill" style="font-size:15px; padding:7px 14px;">
              ${tr('Authorized minimized findings via HTTPS; plain-language remediation; Executive & Technical Reports.', 'إرسال بيانات مقتضبة ومصرح بها؛ تفسير المعالجة؛ وتوليد التقارير التنفيذية والفنية.')}
            </div>
          </div>
        </div>
      </div>
    `)}
  </div>`
);

// 10. Development Methodology (الشريحة 10: منهجية التطوير)
addSlide(
  ['Slide 10: Development Methodology', 'الشريحة 10: منهجية التطوير — Development Methodology'],
  ['Development Methodology (Agile Principles)', 'منهجية التطوير — Development Methodology'],
  ['Methodology', 'منهجية Agile'], 'tag-prop',
  ['Iterative and incremental progression based on Agile principles across six core engineering activities.',
   'نهج تطوير تكراري وتدريجي قائم على مبادئ Agile يغطي ستة أنشطة هندسية رئيسية.'],
  () => `<div style="display:flex; flex-direction:column; gap:12px; width:100%; height:100%; justify-content:space-between;">
    ${A(0, `
      <div class="hl" style="padding:10px 18px;">
        <p style="font-size:15.5px; font-weight:700; text-align:center; line-height:1.6; margin:0;">
          ${tr('“YemScan adopts an iterative and incremental development approach based on Agile principles, enabling components to be developed, integrated, tested, and refined progressively.”',
               '«يعتمد YemScan نهج تطوير تكراري وتدريجي قائمًا على مبادئ Agile، يتيح تطوير المكونات ودمجها واختبارها وتحسينها عبر دورات قصيرة».')}
        </p>
      </div>
    `)}

    <!-- Six Core Activities Cyclical Workflow -->
    ${A(1, `
      <div style="background:rgba(15,23,42,0.7); border:1px solid rgba(45,212,191,0.25); border-radius:10px; padding:12px 16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <span style="font-size:14px; font-weight:800; color:var(--teal); font-family:var(--font-mono); text-transform:uppercase;">
            ${tr('Six Core Methodology Activities (Chapter 1 §1.6)', 'الأنشطة الستة الرئيسية للمنهجية (الفصل الأول §1.6)')}
          </span>
          <span style="font-size:12px; font-weight:700; color:var(--blue); background:rgba(56,189,248,0.12); padding:2px 8px; border-radius:4px; font-family:var(--font-mono);">
            ${tr('ITERATIVE CYCLE', 'دورة تكرارية')}
          </span>
        </div>

        <div style="display:grid; grid-template-columns: repeat(6, 1fr); gap:10px;">
          <div style="background:rgba(20,184,166,0.08); border:1px solid rgba(45,212,191,0.3); border-radius:8px; padding:10px 8px; text-align:center;">
            <div style="font-size:12px; font-weight:800; color:var(--teal); font-family:var(--font-mono);">01</div>
            <div style="font-size:13px; font-weight:700; color:#fff; margin-top:3px; line-height:1.35;">${tr('Planning & Requirements Definition', 'التخطيط وتحديد المتطلبات')}</div>
          </div>
          <div style="background:rgba(56,189,248,0.08); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:10px 8px; text-align:center;">
            <div style="font-size:12px; font-weight:800; color:var(--blue); font-family:var(--font-mono);">02</div>
            <div style="font-size:13px; font-weight:700; color:#fff; margin-top:3px; line-height:1.35;">${tr('System Design', 'تصميم النظام')}</div>
          </div>
          <div style="background:rgba(167,139,250,0.08); border:1px solid rgba(167,139,250,0.3); border-radius:8px; padding:10px 8px; text-align:center;">
            <div style="font-size:12px; font-weight:800; color:var(--violet); font-family:var(--font-mono);">03</div>
            <div style="font-size:13px; font-weight:700; color:#fff; margin-top:3px; line-height:1.35;">${tr('Iterative Development', 'التطوير التكراري')}</div>
          </div>
          <div style="background:rgba(251,191,36,0.08); border:1px solid rgba(251,191,36,0.3); border-radius:8px; padding:10px 8px; text-align:center;">
            <div style="font-size:12px; font-weight:800; color:var(--amber); font-family:var(--font-mono);">04</div>
            <div style="font-size:13px; font-weight:700; color:#fff; margin-top:3px; line-height:1.35;">${tr('Testing & Integration', 'الاختبار والتكامل')}</div>
          </div>
          <div style="background:rgba(52,211,153,0.08); border:1px solid rgba(52,211,153,0.3); border-radius:8px; padding:10px 8px; text-align:center;">
            <div style="font-size:12px; font-weight:800; color:var(--green); font-family:var(--font-mono);">05</div>
            <div style="font-size:13px; font-weight:700; color:#fff; margin-top:3px; line-height:1.35;">${tr('Deployment & Operation', 'النشر والتشغيل')}</div>
          </div>
          <div style="background:rgba(251,113,133,0.08); border:1px solid rgba(251,113,133,0.3); border-radius:8px; padding:10px 8px; text-align:center;">
            <div style="font-size:12px; font-weight:800; color:var(--red); font-family:var(--font-mono);">06</div>
            <div style="font-size:13px; font-weight:700; color:#fff; margin-top:3px; line-height:1.35;">${tr('Review, Evaluation & Refinement', 'المراجعة والتقييم والتحسين')}</div>
          </div>
        </div>

        <!-- Return Loop Indicator -->
        <div style="margin-top:8px; display:flex; justify-content:center; align-items:center; gap:8px; font-size:12.5px; color:var(--text-muted); border-top:1px dashed rgba(255,255,255,0.08); padding-top:6px;">
          <span style="color:var(--teal); font-weight:800; font-size:15px;">⟲</span>
          <span>${tr('Continuous Return Loop: Activities iterate cyclically as needed based on testing findings and supervision feedback, avoiding rigid linear waterfall delivery.',
                     'سهم رجوع تكراري: تتكرر الأنشطة حسب الحاجة بناءً على نتائج الاختبار وتوجيهات الإشراف، دون جمود خطي أو تنفيذ لمرة واحدة.')}</span>
        </div>
      </div>
    `)}

    <!-- Selection Rationale & Work Organization -->
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; width:100%;">
      ${A(2, `
        <div class="card" style="padding:14px 18px; border-color:rgba(56,189,248,0.35); height:100%; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <h4 style="font-size:16.5px; font-weight:800; color:var(--blue); margin:0;">
                ${tr('Selection Rationale', 'سبب الاختيار')}
              </h4>
              <span class="status-badge" style="background:rgba(56,189,248,0.15); color:var(--blue); font-size:11.5px; padding:2px 8px; font-family:var(--font-mono);">RATIONALE</span>
            </div>
            <p style="font-size:15px; font-weight:600; line-height:1.6; color:#f1f5f9; margin:0 0 10px 0;">
              ${tr('“Selected to support incremental tool integration and refinement based on testing findings.”',
                   '«اختير هذا النهج لدعم التكامل التدريجي للأدوات وتعديل التنفيذ بناءً على نتائج الاختبار».')}
            </p>
          </div>
          <div style="font-size:13px; color:#cbd5e1; border-top:1px dashed rgba(255,255,255,0.08); padding-top:8px; line-height:1.5;">
            ${tr('Enables testing individual security tools in isolation, identifying integration bugs early, and adapting parameters before chaining subsequent tools in the scanning pipeline.',
                 'يتيح فحص كل أداة أمنية واختبار تكاملها بشكل منفصل، واكتشاف أخطاء التشغيل مبكراً، وضبط المعاملات قبل ربطها في مسار الفحص المتتابع.')}
          </div>
        </div>
      `)}

      ${A(3, `
        <div class="card" style="padding:14px 18px; border-color:rgba(45,212,191,0.35); height:100%; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <h4 style="font-size:16.5px; font-weight:800; color:var(--teal); margin:0;">
                ${tr('Work Organization & Sprint Progression', 'تنظيم العمل وتسلسل السبرنتات')}
              </h4>
              <span class="status-badge" style="background:rgba(45,212,191,0.15); color:var(--teal); font-size:11.5px; padding:2px 8px; font-family:var(--font-mono);">ENGINEERING ALIGNMENT</span>
            </div>
            <p style="font-size:14.5px; line-height:1.55; color:#f1f5f9; margin:0 0 10px 0;">
              ${tr('Work was organized around direct engineering requirements and integration tasks; the team did not adopt formal User Stories, Epics, or fixed Scrum sprint durations.',
                   'نُظّم العمل وفق المتطلبات والمهام الهندسية المباشرة؛ ولم يعتمد الفريق قصص مستخدمين (User Stories) أو Epics أو اجتماعات Scrum أو مدة ثابتة للسبرنتات.')}
            </p>
          </div>
          <div style="font-size:13px; color:var(--teal); background:rgba(45,212,191,0.08); border:1px solid rgba(45,212,191,0.25); border-radius:6px; padding:8px 12px; line-height:1.5;">
            <b>${tr('Procedural Progression Note:', 'ملاحظة التسلسل الإجرائي:')}</b>
            ${tr('Detailed procedural sprint status (Sprint 1 Completed vs. Sprint 2 In Progress) and operational proof are detailed in the subsequent progress and verification slides.',
                 'تفاصيل الإنجاز الإجرائي للسبرنتات (Sprint 1 المكتمل وSprint 2 قيد التنفيذ) والأدلة التشغيلية معروضة ومفصلة في شريحة التقدم والتحقق اللاحقة.')}
          </div>
        </div>
      `)}
    </div>
  </div>`
);

// 11. Initial Engine Implementation & Sprint Status (الشريحة 11: التنفيذ الأولي لمحرك الفحص وحالة السبرنتات)
addSlide(
  ['Slide 11: Engine & Sprint Status', 'الشريحة 11: محرك الفحص وحالة السبرنتات'],
  ['Initial Engine Implementation & Sprint Status', 'التنفيذ الأولي لمحرك الفحص وحالة السبرنتات'],
  ['Sprint Progress', 'حالة السبرنتات'], 'tag-wip',
  ['Clear distinction between runtime execution stages (Stage 1..6) and development sprints (Sprint 1 done, Sprint 2 WIP); core database, auth, and cryptography remain in planned scope.',
   'تمييز حاسم بين مراحل التشغيل (المرحلة 1..6) وسبرنتات التطوير (Sprint 1 منجز، وSprint 2 قيد التنفيذ)؛ وتبقى خدمات الحسابات والتشفير وقاعدة البيانات ضمن التصميم المخطط.'],
  () => `<div style="display:flex; flex-direction:column; gap:12px; width:100%; height:100%; justify-content:space-between;">
    <!-- Distinction Callout Banner -->
    ${A(0, `
      <div style="background:rgba(20,184,166,0.08); border:1px solid rgba(45,212,191,0.3); border-radius:8px; padding:9px 16px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
        <div style="font-size:14.5px; line-height:1.55; color:#f1f5f9; flex:1; min-width:320px;">
          <b style="color:var(--teal);">${tr('Stage vs Sprint Distinction:', 'التمييز بين مراحل التشغيل ودورات التطوير:')}</b>
          ${tr('Tool execution stages (Stage 1..6) represent the sequential execution workflow inside the scanning engine; they are not development sprint numbers. Current progress: Sprint 1 is completed and empirically verified; Sprint 2 is in progress.',
               'أرقام المراحل (Stage 1..6) الظاهرة في المخرجات تمثل تسلسل تشغيل الأدوات داخل المحرك وليست أرقام السبرنتات. تطوير النظام مقسم لسبرنتات هندسية: Sprint 1 مكتمل ومتحقق منه مخبريًا، وSprint 2 قيد التنفيذ.')}
        </div>
        <div style="display:flex; gap:6px; flex-shrink:0;">
          <span class="status-badge badge-done" style="font-size:12px; padding:3px 8px;">Sprint 1: Completed</span>
          <span class="status-badge badge-wip" style="font-size:12px; padding:3px 8px;">Sprint 2: In Progress</span>
        </div>
      </div>
    `)}

    <!-- 3 Core Sprint / Scope Columns -->
    <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:14px; width:100%; align-items:stretch;">
      ${A(1, `
        <div class="c-card" style="padding:12px 14px; display:flex; flex-direction:column; justify-content:space-between; height:100%; border-color:rgba(74,222,128,0.35);">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding-bottom:6px; border-bottom:1px solid rgba(74,222,128,0.25);">
              <h4 style="font-size:16.5px; font-weight:800; color:var(--green); margin:0;">
                ${tr('Sprint 1 — Discovery Pipeline', 'Sprint 1 — مسار الاستكشاف')}
              </h4>
              <span class="status-badge badge-done" style="font-size:11.5px; padding:2px 7px;">
                ${tr('COMPLETED', 'مكتمل')}
              </span>
            </div>

            <ul style="margin:0; padding-inline-start:18px; font-size:13.5px; line-height:1.55; color:#cbd5e1; display:flex; flex-direction:column; gap:6px;">
              <li><b style="color:#fff;">${tr('Integrated Tools:', 'الأدوات المتكاملة:')}</b> Subfinder, Naabu, httpx.</li>
              <li><b style="color:#fff;">${tr('Automated Handover:', 'التسليم الآلي:')}</b> ${tr('Passing discovered subdomains and ports between tools programmatically.', 'تمرير النطاقات الفرعية والمنافذ بين الأدوات برمجياً دون تدخل يدوي.')}</li>
              <li><b style="color:#fff;">${tr('File Persistence:', 'حفظ الملفات:')}</b> ${tr('Raw scan outputs successfully written to disk per scan directory.', 'حفظ مخرجات الأدوات الخام بنجاح على القرص في مجلدات الفحص.')}</li>
              <li><b style="color:#fff;">${tr('Verification:', 'التحقق المخبري:')}</b> ${tr('Empirically verified by the team via FastAPI endpoints and local runs.', 'تحقق مخبري أجراه الفريق عبر واجهات FastAPI وتشغيل الأدوات.')}</li>
            </ul>
          </div>

          <div style="margin-top:10px; padding:5px 8px; background:rgba(74,222,128,0.08); border-radius:4px; font-size:12px; color:var(--green); text-align:center; font-weight:700;">
            ${tr('Scope: External Asset & Port Discovery Verified', 'النطاق: استكشاف الأصول وفحص المنافذ مكتمل ومتحقق منه')}
          </div>
        </div>
      `)}

      ${A(2, `
        <div class="c-card c-blue" style="padding:12px 14px; display:flex; flex-direction:column; justify-content:space-between; height:100%; border-color:rgba(251,191,36,0.35);">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding-bottom:6px; border-bottom:1px solid rgba(251,191,36,0.25);">
              <h4 style="font-size:16.5px; font-weight:800; color:var(--amber); margin:0;">
                ${tr('Sprint 2 — Scanning & Parsers', 'Sprint 2 — فحص الثغرات والمحللات')}
              </h4>
              <span class="status-badge badge-wip" style="font-size:11.5px; padding:2px 7px;">
                ${tr('IN PROGRESS', 'قيد التنفيذ')}
              </span>
            </div>

            <ul style="margin:0; padding-inline-start:18px; font-size:13.5px; line-height:1.55; color:#cbd5e1; display:flex; flex-direction:column; gap:6px;">
              <li><b style="color:#fff;">${tr('Active Tools:', 'الأدوات الجاري تكاملها:')}</b> Kiterunner, Nuclei, Wapiti.</li>
              <li><b style="color:#fff;">${tr('Normalization Adapters:', 'محولات التوحيد:')}</b> ${tr('Developing unified schema parsers for disparate CLI outputs.', 'تطوير محللات موحدة لتحويل المخرجات المتباينة إلى بنية قياسية.')}</li>
              <li><b style="color:#fff;">${tr('Parser Refinements:', 'تحسين المعالجة:')}</b> ${tr('Refining cross-tool deduplication and merge consistency.', 'معالجة إلغاء التكرار واتساق دمج نتائج الأدوات المتعددة.')}</li>
              <li><b style="color:#fff;">${tr('Error Handling:', 'معالجة الأخطاء:')}</b> ${tr('Partial tool failure handling and timeout hooks in progress.', 'استكمال معالجة الفشل الجزئي والمهل الزمنية للأدوات.')}</li>
            </ul>
          </div>

          <div style="margin-top:10px; padding:5px 8px; background:rgba(251,191,36,0.08); border-radius:4px; font-size:12px; color:var(--amber); text-align:center; font-weight:700;">
            ${tr('Scope: Vulnerability Scanning Integration & Verification Ongoing', 'النطاق: استكمال تكامل فحص الثغرات والتحقق من نتائجها')}
          </div>
        </div>
      `)}

      ${A(3, `
        <div class="c-card c-violet" style="padding:12px 14px; display:flex; flex-direction:column; justify-content:space-between; height:100%; border-color:rgba(167,139,250,0.35);">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding-bottom:6px; border-bottom:1px solid rgba(167,139,250,0.25);">
              <h4 style="font-size:16.5px; font-weight:800; color:var(--violet); margin:0;">
                ${tr('Planned Design & Remaining', 'ضمن التصميم والأعمال المتبقية')}
              </h4>
              <span class="status-badge badge-plan" style="font-size:11.5px; padding:2px 7px;">
                ${tr('PLANNED', 'تصميم مخطط')}
              </span>
            </div>

            <ul style="margin:0; padding-inline-start:18px; font-size:13.5px; line-line-height:1.55; color:#cbd5e1; display:flex; flex-direction:column; gap:6px;">
              <li><b style="color:#fff;">${tr('Auth & RBAC:', 'الحسابات والصلاحيات:')}</b> ${tr('Role-based access control and resource ownership checks.', 'المصادقة وإدارة الأدوار (RBAC) وفحص ملكية المورد.')}</li>
              <li><b style="color:#fff;">${tr('Data Protection:', 'تشفير التخزين:')}</b> ${tr('AES-256-GCM field encryption, per-scan DEK, external KEK store.', 'تشفير الحقول بـ AES-256-GCM، ومفتاح DEK مستقل، وحفظ KEK منفصل.')}</li>
              <li><b style="color:#fff;">${tr('PostgreSQL Database:', 'قاعدة البيانات:')}</b> ${tr('12-entity relational persistence schema for jobs and findings.', 'المخطط العلائقي لـ 12 كياناً لحفظ الفحوص والنتائج.')}</li>
              <li><b style="color:#fff;">${tr('AI Remediation & Reports:', 'الذكاء والتقارير:')}</b> ${tr('Gemini 3.8 Flash interpretation and dual-tier reports.', 'تفسير المعالجة بـ Gemini 3.8 Flash وتوليد التقارير المزدوجة.')}</li>
            </ul>
          </div>

          <div style="margin-top:10px; padding:5px 8px; background:rgba(167,139,250,0.08); border-radius:4px; font-size:12px; color:var(--violet); text-align:center; font-weight:700;">
            ${tr('Scope: Architectural Design Ready for Project (2) Implementation', 'النطاق: مواصفات معمارية جاهزة للتنفيذ في مشروع التخرج (2)')}
          </div>
        </div>
      `)}
    </div>

    <!-- Bottom Engineering Organization Note -->
    ${A(4, `
      <div style="background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:8px 16px; font-size:13px; color:#cbd5e1; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
        <span><b>${tr('Engineering Organization:', 'تنظيم العمل الهندسي:')}</b> ${tr('Work was organized around direct engineering requirements and integration tasks without formal User Stories, Epics, or fixed Scrum sprint durations.',
             'نُظّم العمل وفق المتطلبات والمهام الهندسية المباشرة؛ ولم يعتمد الفريق قصص مستخدمين (User Stories) أو Epics أو اجتماعات Scrum أو مدة ثابتة للسبرنتات.')}</span>
        <span style="color:var(--text-dim); font-size:12px;">(Chapter 1 §1.6 & Chapter 3 §3.3)</span>
      </div>
    `)}
  </div>`
);

// 12. Functional & Non-Functional Requirements Status (الشريحة 12)
addSlide(
  ['Slide 12: Requirements Status', 'الشريحة 12: حالة المتطلبات'],
  ['Functional & Non-Functional Requirements Status', 'حالة تنفيذ المتطلبات الوظيفية وغير الوظيفية'],
  ['Requirements Status', 'حالة المتطلبات'], 'tag-prop',
  ['Status of functional and non-functional requirements: separating codebase presence from empirical verification, with post-discovery features planned.',
   'حالة المتطلبات الوظيفية وغير الوظيفية: تمييز الموجود كودياً عما تم التحقق منه، وبقاء الميزات اللاحقة ضمن المخطط.'],
  () => {
    const reqs = [
      ['Target Input & Output Retrieval', 'إدخال الهدف واسترجاع المخرجات',
       'Receiving target, initiating scans, and inspecting tool outputs (Functional §3.3.1).',
       'استقبال الهدف وبدء الفحص واسترجاع مخرجاته (وظيفي §3.3.1).',
       'In Progress · Initial API', 'قيد الاستكمال · واجهات أولية', 'badge-wip',
       'Initial endpoints exist; scope validation & ownership controls in progress.',
       'واجهات أولية موجودة؛ ضوابط النطاق والملكية غير مكتملة.'],
      ['Scan Orchestration & Tools', 'تنسيق الفحص وتكامل الأدوات',
       'Coordinating discovery workflow and external security tools execution (Functional §3.3.1).',
       'تنسيق مسار الفحص وتكامل الأدوات الأمنية المعتمدة (وظيفي §3.3.1).',
       'Partial · Tools in Progress', 'تنفيذ جزئي · قيد الاستكمال', 'badge-wip',
       'Sequential pipeline in progress; completing Kiterunner and native CLI tool runs.',
       'تنفيذ جزئي؛ استكمال Kiterunner والتحقق من الأدوات الأصلية.'],
      ['Collection & Normalization', 'جمع النتائج وتوحيدها',
       'Parsing raw CLI outputs into normalized schema and persistence (Functional §3.3.1).',
       'جمع النتائج وتوحيد مخرجات الأدوات وتخزينها (وظيفي §3.3.1).',
       'Initial · Fixes Needed', 'أولي يحتاج تصحيحاً', 'badge-draft',
       'Initial parsers in code; deduplication fixes needed; DB storage planned.',
       'تنفيذ أولي يحتاج تصحيحاً؛ والحفظ المشفر وPostgreSQL لم ينفذا.'],
      ['Modular Architecture', 'التنظيم المعياري للكود',
       'Decoupling API, engine, parsers, and adapter layers (Non-Functional §3.3.2).',
       'فصل طبقات الواجهات البرمجية والمحرك والمحللات معيارياً (غير وظيفي §3.3.2).',
       'In Codebase', 'موجود كودياً', 'badge-done',
       'Codebase follows modular packages; empirical extensibility audit pending.',
       'تقسيم برمجي موجود؛ قابلية الصيانة والامتداد لم تُقيّم تجريبياً.'],
      ['Reliability & Error Handling', 'الاعتمادية ومعالجة الأخطاء',
       'Graceful failure handling, timeouts, and cancellation hooks (Non-Functional §3.3.2).',
       'معالجة الفشل الجزئي والمهل الزمنية وإلغاء الفحص (غير وظيفي §3.3.2).',
       'In Progress · Fixes Needed', 'قيد الاستكمال · يلزم تصحيح', 'badge-wip',
       'Partial error traps exist; failure recovery and cancellation require refinement.',
       'معالجة جزئية؛ يلزم تصحيح حالات الفشل والإلغاء.'],
      ['Security, RBAC & Encryption', 'الحسابات والصلاحيات والتشفير',
       'Authentication, RBAC, ownership checks, AES-256-GCM encryption (Non-Functional §3.3.2).',
       'المصادقة والصلاحيات وفحص الملكية وتشفير AES-256-GCM (أمني §3.3.2).',
       'Planned Design', 'تصميم مقترح', 'badge-plan',
       'Architectural design documented; backend implementation not yet started.',
       'تصميم مقترح موثق؛ لم يبدأ التنفيذ البرمجي بعد.']
    ];
    return `<div class="c-col">
      <table class="comp-table" style="font-size:14.5px;">
        <thead>
          <tr>
            <th style="width:25%; padding:9px 12px;">${tr('Requirement Category', 'فئة المتطلب')}</th>
            <th style="width:38%; padding:9px 12px;">${tr('Specification Description', 'الوصف الوظيفي')}</th>
            <th class="center" style="width:17%; padding:9px 8px;">${tr('Status', 'الحالة')}</th>
            <th style="width:20%; padding:9px 12px;">${tr('Codebase Evidence / Note', 'الدليل والقيد')}</th>
          </tr>
        </thead>
        <tbody>
          ${reqs.map(r => `
            <tr>
              <td style="padding:8px 12px;"><b style="font-size:15px; color:#ffffff;">${tr(r[0], r[1])}</b></td>
              <td style="padding:8px 12px; font-size:14px; line-height:1.5;">${tr(r[2], r[3])}</td>
              <td class="center" style="padding:8px 6px;"><span class="status-badge ${r[6]}" style="font-size:12.5px; padding:3px 8px;">${tr(r[4], r[5])}</span></td>
              <td style="font-size:13.5px; color:#cbd5e1; padding:8px 12px; line-height:1.45;">${tr(r[7], r[8])}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
  }
);

// 14. Database Architecture & Relational Design (الشريحة 14: مخطط قاعدة البيانات والعلاقات ERD)
addSlide(
  ['Slide 14: Database Design', 'الشريحة 14: تصميم قاعدة البيانات والعلاقات'],
  ['Database Design & Relational Schema (Figure 3.2 ERD)', 'تصميم قاعدة البيانات ومخطط الكيانات والعلاقات (مخطط 3.2 ERD)'],
  ['Database Design', 'تصميم قاعدة البيانات'], 'tag-prop',
  ['Proposed PostgreSQL relational design: users link to scans; findings link via assets; reports link via AI analyses; M:N tables resolve provenance.',
   'تصميم علائقي مقترح لقاعدة البيانات: الفحوص تتبع المستخدمين؛ النتائج تتبع الأصول؛ التقارير تتبع التحليلات؛ وجداول الربط توثق المصادر والمراجع.'],
  () => `<div style="display:grid; grid-template-columns: 420px 1fr; gap:16px; width:100%; align-items:stretch;">
    ${A(0, `
      <div class="diag-card" onclick="openImgModal('./assets/erd-diagram.png', 'Figure 3.2: YemScan Entity Relationship Diagram (ERD) — 12 Entities / مخطط الكيانات والعلاقات (12 كيانًا)')" title="${tr('Click to view full-screen diagram', 'انقر لتكبير المخطط بحجم الشاشة')}">
        <div class="diag-card-head">
          <span class="diag-badge">Figure 3.2 ERD</span>
          <span class="diag-hint">${tr('Click to Enlarge', 'انقر للتكبير')}</span>
        </div>
        <div class="diag-img-box">
          <img src="./assets/erd-diagram.png" alt="Figure 3.2: Database ERD Schema" class="diag-img">
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px;">
          <span style="font-size:13.5px; color:#475569; font-weight:700;">
            ${tr('12 Normalized Relational Entities', '12 كياناً علائقياً موحداً')}
          </span>
          <button type="button" class="action-btn" style="padding:3px 10px; font-size:12.5px; background:rgba(45,212,191,0.12); border:1px solid var(--teal); color:var(--teal); border-radius:5px; cursor:pointer;" onclick="event.stopPropagation(); openImgModal('./assets/erd-diagram.png', 'Figure 3.2: YemScan Entity Relationship Diagram (ERD) — 12 Entities / مخطط الكيانات والعلاقات (12 كيانًا)')">
            ${tr('View Full ERD — 12 Entities', 'عرض ERD الكامل — 12 كيانًا')}
          </button>
        </div>
      </div>
    `)}

    ${A(1, `
      <div style="display:flex; flex-direction:column; gap:9px; justify-content:space-between; height:100%;">
        <!-- Relational Perspective Card -->
        <div class="c-card" style="padding:11px 16px; background:rgba(15,23,42,0.85); border-color:rgba(56,189,248,0.3);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <b style="color:var(--blue); font-size:16px;">${tr('Core Relational Perspective (Cardinalities):', 'المنظور العلائقي الأساسي (الكاردينالية):')}</b>
            <span class="status-badge badge-plan" style="font-size:12px; padding:3px 8px;">${tr('Proposed Design — Implementation Not Started', 'تصميم مقترح — لم يبدأ التنفيذ')}</span>
          </div>
          <div style="font-family:var(--font-mono); font-size:14px; line-height:1.7; color:#e2e8f0; direction:ltr; text-align:start; background:rgba(0,0,0,0.3); padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.06);">
            <div>users (1) ─────── (0..*) scan_jobs</div>
            <div style="margin-top:3px;">scan_jobs (1) ─── (0..*) assets (1) ─── (0..*) findings</div>
            <div style="margin-top:3px;">scan_jobs (1) ─── (0..*) ai_analyses (1) ── (0..*) reports</div>
          </div>
        </div>

        <!-- 3 Concise Statements -->
        <div class="c-card" style="padding:10px 14px;">
          <h4 class="c-card-h" style="color:var(--teal); font-size:16.5px; margin-bottom:4px;">1. ${tr('Traceability & Evidence Provenance', 'تتبع مصادر نتائج الفحص ومراجعها')}</h4>
          <p class="c-card-p" style="font-size:14.5px; line-height:1.55; margin:0; color:#f1f5f9;">${tr('Many-to-many linking tables (finding_sources & finding_references) map each scan finding to raw tool outputs and authoritative standard references (CVE/CWE).',
            'جداول ربط متعدد-إلى-متعدد (finding_sources وfinding_references) لربط نتائج الفحص بمصادر الأدلة الخام والمراجع القياسية (CVE/CWE).')}</p>
        </div>

        <div class="c-card c-blue" style="padding:10px 14px;">
          <h4 class="c-card-h" style="color:var(--blue); font-size:16.5px; margin-bottom:4px;">2. ${tr('Application-Level Sensitive Field Encryption', 'تشفير الحقول الحساسة قبل الحفظ')}</h4>
          <p class="c-card-p" style="font-size:14.5px; line-height:1.55; margin:0; color:#f1f5f9;">${tr('Retrievable sensitive fields (target_enc, title_enc, description_enc) are encrypted with AES-256-GCM at application level prior to database persistence.',
            'تُشفّر الحقول الحساسة القابلة للاسترجاع (الهدف، عنوان ووصف نتيجة الفحص) باستخدام AES-256-GCM على مستوى التطبيق قبل الحفظ في قاعدة البيانات.')}</p>
        </div>

        <div class="c-card c-amber" style="padding:10px 14px;">
          <h4 class="c-card-h" style="color:var(--amber); font-size:16.5px; margin-bottom:4px;">3. ${tr('Per-Scan DEK Wrapped by KEK', 'DEK مستقل لكل فحص، محفوظ ملفوفاً')}</h4>
          <p class="c-card-p" style="font-size:14.5px; line-height:1.55; margin:0; color:#f1f5f9;">${tr('A dedicated per-scan Data Encryption Key (DEK) encrypts job data, stored wrapped (wrapped_dek) by a KEK managed in a separate protected secret store.',
            'يُستخدم DEK مستقل لكل فحص لتشفير بياناته، ويُحفظ في قاعدة البيانات ملفوفاً (wrapped_dek) بواسطة KEK يُدار في مخزن أسرار محمي منفصل.')}</p>
        </div>
      </div>
    `)}
  </div>`
);

// 15. Data Protection & Execution Security: Cryptography & Docker Isolation (الشريحة 15)
addSlide(
  ['Slide 15: Security & Isolation Design', 'الشريحة 15: تصميم حماية البيانات والتنفيذ'],
  ['Data Protection & Execution Environment Design', 'تصميم حماية البيانات وبيئة التنفيذ'],
  ['Security & Isolation Design', 'حماية البيانات والتنفيذ'], 'tag-sec',
  ['Design controls for data protection at rest and containerized execution; cryptographic storage is planned, and runtime controls are being completed.',
   'ضوابط التصميم لحماية البيانات أثناء التخزين وضبط بيئة التنفيذ بالحاويات؛ التشفير مخطط وضوابط التشغيل قيد الاستكمال.'],
  () => `<div style="display:flex; flex-direction:column; gap:12px; width:100%; height:100%; justify-content:space-between;">
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:36px; width:100%; align-items:stretch;">
      ${A(0, `
        <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; border-inline-end: 1.5px solid rgba(255,255,255,0.12); padding-inline-end: 28px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; padding-bottom:6px; border-bottom:1.5px solid rgba(45,212,191,0.35);">
            <h3 style="color:var(--teal); font-size:20.5px; font-weight:800; margin:0;">
              ${tr('Storage Protection (Design)', 'حماية التخزين (تصميم مقترح)')}
            </h3>
            <span class="status-badge badge-plan" style="font-size:12.5px; padding:3px 10px;">
              ${tr('Planned Design', 'تصميم مقترح')}
            </span>
          </div>

          <div style="display:flex; flex-direction:column; gap:11px;">
            <div style="border-bottom:1px dashed rgba(255,255,255,0.08); padding-bottom:9px;">
              <b style="font-size:16px; color:#ffffff; display:block; margin-bottom:4px;">
                ${tr('AES-256-GCM & Tag Verification:', 'تشفير البيانات والتحقق من سلامتها:')}
              </b>
              <p style="font-size:15px; line-height:1.6; margin:0; color:#cbd5e1;">
                ${tr('Raw outputs, reports, and sensitive retrievable fields are encrypted using AES-256-GCM. The 128-bit authentication tag is verified before accepting or using decrypted data, with nonces never reused with the same encryption key; data is rejected upon verification failure.',
                     'تُشفّر المخرجات الخام والتقارير والحقول الحساسة القابلة للاسترجاع باستخدام AES-256-GCM. يُتحقق من وسم المصادقة بطول 128 بت قبل قبول البيانات المفكوكة أو استخدامها، مع عدم تكرار Nonce مع مفتاح التشفير نفسه، ورفض البيانات عند فشل التحقق.')}
                <span style="font-size:12px; color:var(--text-dim); display:inline-block; margin-inline-start:4px;">(NIST SP 800-38D)</span>
              </p>
            </div>

            <div style="border-bottom:1px dashed rgba(255,255,255,0.08); padding-bottom:9px;">
              <b style="font-size:16px; color:#ffffff; display:block; margin-bottom:4px;">
                ${tr('Key Management (Wrapped DEK / KEK):', 'إدارة المفاتيح وتشفير المغلف:')}
              </b>
              <p style="font-size:15px; line-height:1.6; margin:0; color:#cbd5e1;">
                ${tr('A dedicated DEK encrypts each scan\'s data and is stored in the database wrapped by a KEK. The KEK is managed in a protected secret store separate from the database, with restricted access and no plaintext copies in application database or logs.',
                     'يُستخدم DEK مستقل لكل فحص لتشفير بياناته، ويُحفظ في قاعدة البيانات بعد حمايته باستخدام KEK. يُدار KEK في مخزن أسرار محمي منفصل عن قاعدة البيانات، مع تقييد الوصول إليه وعدم نسخه بصيغة صريحة إلى قاعدة بيانات التطبيق أو سجلاته.')}
              </p>
            </div>

            <div>
              <b style="font-size:16px; color:#ffffff; display:block; margin-bottom:4px;">
                ${tr('Protected Data Scope:', 'نطاق البيانات المحمية:')}
              </b>
              <p style="font-size:15px; line-height:1.6; margin:0; color:#cbd5e1;">
                ${tr('Retained raw tool outputs, generated technical and executive report files, and sensitive database columns (target_enc, title_enc, description_enc).',
                     'المخرجات الخام المخزنة في نظام الملفات، ملفات التقارير الفنية والتنفيذية الناتجة، والأعمدة الحساسة في قاعدة البيانات (الهدف، عنوان ووصف نتيجة الفحص).')}
              </p>
            </div>
          </div>
        </div>
      `)}

      ${A(1, `
        <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; padding-inline-start: 4px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; padding-bottom:6px; border-bottom:1.5px solid rgba(56,189,248,0.35);">
            <h3 style="color:var(--blue); font-size:20.5px; font-weight:800; margin:0;">
              ${tr('Execution Protection (Design)', 'حماية التنفيذ (ضوابط تشغيل الأدوات)')}
            </h3>
            <span class="status-badge badge-wip" style="font-size:12.5px; padding:3px 10px;">
              ${tr('Controls in Progress', 'ضوابط قيد الاستكمال')}
            </span>
          </div>

          <div style="display:flex; flex-direction:column; gap:11px;">
            <div style="border-bottom:1px dashed rgba(255,255,255,0.08); padding-bottom:9px;">
              <b style="font-size:16px; color:#ffffff; display:block; margin-bottom:4px;">
                ${tr('Tool Containment in Docker:', 'تشغيل الأدوات داخل بيئة الحاويات:')}
              </b>
              <p style="font-size:15px; line-height:1.6; margin:0; color:#cbd5e1;">
                ${tr('The design runs security tools inside Docker containers with dropped privileges, non-root users, and isolated runtime environments to limit lateral impact.',
                     'يعتمد التصميم على تشغيل أدوات الفحص الست داخل حاويات Docker بصلاحيات مقلصة ومستخدم غير جذري وبيئات تشغيل معزولة للحد من التداخل.')}
              </p>
            </div>

            <div style="border-bottom:1px dashed rgba(255,255,255,0.08); padding-bottom:9px;">
              <b style="font-size:16px; color:#ffffff; display:block; margin-bottom:4px;">
                ${tr('Host Attack Surface & Execution Safety:', 'تقليص أثر الاستغلال وتشغيل الأوامر:')}
              </b>
              <p style="font-size:15px; line-height:1.6; margin:0; color:#cbd5e1;">
                ${tr('Non-root execution helps reduce the blast radius if a tool or parser is compromised; commands are executed as argument arrays without shell invocation, with strict input validation.',
                     'يساعد التشغيل دون صلاحيات جذرية في تقليص أثر استغلال الأدوات؛ مع استدعاء الأوامر كقائمة معاملات دون غلاف أوامر (No Shell) والتحقق الصارم لمنع حقن الأوامر.')}
              </p>
            </div>

            <div>
              <b style="font-size:16px; color:#ffffff; display:block; margin-bottom:4px;">
                ${tr('Resource Limits & Execution Controls:', 'حدود الموارد وضوابط التنفيذ:')}
              </b>
              <p style="font-size:15px; line-height:1.6; margin:0; color:#cbd5e1;">
                ${tr('Per-container memory and CPU limits help reduce the risk of host resource exhaustion, alongside execution timeouts and scan cancellation.',
                     'تُحدَّد حدود الذاكرة وحصص المعالج لكل حاوية لتقليل مخاطر استنزاف موارد الخادم، إلى جانب المهل الزمنية وإمكانية إلغاء الفحص.')}
                <span style="font-size:12px; color:var(--text-dim); display:inline-block; margin-inline-start:4px;">(Docker Documentation)</span>
              </p>
            </div>
          </div>
        </div>
      `)}
    </div>

    <div class="stat-box" style="margin-top:4px; padding:10px 20px; border-color:var(--teal); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px;">
      <div style="display:flex; align-items:center; gap:10px; flex:1; min-width:300px;">
        <div class="stat-txt" style="font-size:14.5px; line-height:1.55; color:#f8fafc;">
          <b style="color:var(--teal);">${tr('Trust & Privacy Boundary:', 'حدود الثقة والخصوصية:')}</b>
          ${tr('Platform admin access is restricted at the application level; this design does not provide a zero-knowledge guarantee against an operator with unrestricted host access. Cryptographic persistence remains planned.',
               'تقتصر قيود وصول مدير المنصة على مستوى التطبيق؛ ولا يوفر هذا التصميم ضمانة المعرفة الصفرية (Zero-Knowledge) في مواجهة مشغل يمتلك وصولاً كاملاً إلى الخادم المضيف. وتشفير التخزين يظل تصميماً مخططاً.')}
        </div>
      </div>
      <div style="display:flex; gap:6px; flex-shrink:0;">
        <span class="status-badge badge-plan" style="font-size:12.5px; padding:3px 10px;">${tr('Storage: Planned', 'التخزين: مخطط')}</span>
        <span class="status-badge badge-wip" style="font-size:12.5px; padding:3px 10px;">${tr('Execution: In Progress', 'التنفيذ: قيد الاستكمال')}</span>
      </div>
    </div>
  </div>`
);

// 16. Threat Model & Architectural Controls (الشريحة 16: نموذج التهديدات وحدود الثقة)
addSlide(
  ['Slide 16: Threat Model', 'الشريحة 16: نموذج التهديدات'],
  ['Core Threats & Architectural Design Controls', 'التهديدات الأساسية وضوابط التصميم المعماري'],
  ['Threat Model', 'نموذج التهديدات'], 'tag-sec',
  ['Core threats and architectural design controls; effectiveness remains subject to empirical verification during testing.',
   'التهديدات الأساسية والضوابط المعمارية المصممة للحد من المخاطر؛ وتخضع فاعليتها للتحقق التجريبي أثناء مرحلة الاختبار.'],
  () => {
    const threats = [
      [
        'Cross-User Access (API)', 'الوصول لبيانات مستخدم آخر',
        'Unauthorized retrieval of another user\'s scans or findings (IDOR / BOLA).', 'استرجاع غير مصرح لفحوصات أو نتائج مستخدم آخر عبر API (IDOR / BOLA).',
        'Authentication, RBAC, and per-operation resource ownership checks in application layer.', 'المصادقة المركزية، إدارة الصلاحيات (RBAC)، وفحص ملكية المورد لكل طلب في طبقة التطبيق.'
      ],
      [
        'Storage Exposure or Tampering', 'تسريب التخزين أو العبث به',
        'Exposure or tampering with stored findings and reports at rest if storage media is compromised.', 'تسريب البيانات الحساسة أو التلاعب بها أثناء التخزين عند الوصول غير المصرح لوسائط التخزين.',
        'Data encryption using AES-256-GCM, 128-bit tag verification, per-scan DEK, and KEK in separate secret store.', 'تشفير البيانات باستخدام AES-256-GCM، التحقق من وسم المصادقة 128 بت، مفتاح DEK مستقل، وحفظ KEK في مخزن أسرار منفصل.'
      ],
      [
        'Unsafe Execution & Out-of-Scope', 'التنفيذ غير الآمن أو الخروج عن النطاق',
        'Malicious target payloads, out-of-scope scanning, or tool exploit attempting container breakout.', 'مدخلات خبيثة من الهدف، فحص خارج النطاق المصرح، أو محاولة كسر الحاوية عبر استغلال أداة.',
        'Strict target/scope validation, argument array execution (no shell), non-root container, and dropped capabilities.', 'تحقق صارم من النطاق والمدخلات، تشغيل دون shell (قائمة معاملات)، ومستخدم غير جذري وصلاحيات مقلصة.'
      ],
      [
        'Resource Exhaustion (Internal DoS)', 'استنزاف موارد الخادم (حجب خدمة داخلي)',
        'Host CPU/memory exhaustion from heavy concurrent scans or hanging scanner processes.', 'استنزاف المعالج والذاكرة بفحوصات متزامنة مكثفة أو أدوات فحص عالقة في النظام.',
        'Per-container CPU/memory quotas, concurrency limits, execution timeouts, and cancellation hooks.', 'حصص معالج وذاكرة لكل حاوية، حدود التزامن، مهل زمنية لكل أداة، وإمكانية إلغاء الفحص.'
      ],
      [
        'AI Data Leakage & Output Tampering', 'تسريب بيانات AI أو تضليل التحليل',
        'Secret leakage in prompt payloads, or untrusted findings manipulating AI report output.', 'تسريب أسرار في طلبات الاستدعاء، أو تأثير بيانات غير موثوقة على استنتاجات الذكاء.',
        'Data minimization, secret redaction before transit, prompt-data separation, and validating structure, conclusions, and references.', 'تقليل البيانات وتنقيح الأسرار، فصل البيانات عن التعليمات، والتحقق من البنية والاستنتاجات والمراجع القياسية.'
      ]
    ];

    return `<div style="display:flex; flex-direction:column; gap:10px; width:100%;">
      <div style="background:rgba(20,184,166,0.08); border:1px solid rgba(20,184,166,0.3); border-radius:8px; padding:8px 16px; font-size:14.5px; color:#f1f5f9; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span><b>${tr('Design Controls Focus:', 'تركيز ضوابط التصميم:')}</b> ${tr('Architectural design controls; effectiveness is validated during implementation and testing.', 'ضوابط تصميمية؛ يجري التحقق من فاعليتها أثناء التنفيذ والاختبار.')}</span>
        </div>
        <span class="status-badge badge-sec" style="font-size:12.5px; padding:3px 9px;">${tr('Design Controls', 'ضوابط التصميم')}</span>
      </div>

      <div style="overflow-x:auto;">
        <table class="comp-table" style="font-size:14.5px;">
          <thead>
            <tr>
              <th style="width:48%; padding:9px 12px;">${tr('Threat Surface & Potential Scenario', 'الأصل وسيناريو التهديد المحتمل')}</th>
              <th style="width:52%; padding:9px 12px;">${tr('Architectural Design Control', 'الضابط المعماري المصمم')}</th>
            </tr>
          </thead>
          <tbody>
            ${threats.map(t => `
              <tr>
                <td style="padding:8px 12px;">
                  <b style="color:#ffffff; font-size:15px; display:block; margin-bottom:3px;">${tr(t[0], t[1])}</b>
                  <span style="color:#cbd5e1; font-size:13.5px; line-height:1.5;">${tr(t[2], t[3])}</span>
                </td>
                <td style="color:var(--teal); padding:8px 12px; font-size:14px; line-height:1.5;">${tr(t[4], t[5])}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div style="background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:8px 16px; font-size:14px; color:var(--amber); display:flex; align-items:center;">
        <span><b>${tr('AI Transit & Processing Boundary:', 'تنبيه خصوصية خدمة الذكاء الاصطناعي:')}</b> ${tr('HTTPS protects transit; the external AI service processes data submitted in prompt payloads. Pre-transit minimization and secret redaction are essential controls.',
          'HTTPS يحمي النقل؛ وخدمة AI تعالج البيانات المرسلة في طلب الاستدعاء. لذا يعد تقليل البيانات وتنقيح الأسرار قبل الإرسال ضابطاً أساسياً.')} <span style="font-size:12px; color:var(--amber); opacity:0.85;">(OWASP LLM Top 10)</span></span>
      </div>
    </div>`;
  }
);

// 17. Engine Testing & Operational Verification Evidence (الشريحة 17: سيناريوهات اختبار المحرك وأدلة التحقق)
addSlide(
  ['Slide 17: Operational Verification', 'الشريحة 17: أدلة التحقق التشغيلية'],
  ['Engine Testing & Operational Verification Evidence', 'اختبارات محرك الفحص وأدلة التحقق المخبري التشغيلية'],
  ['Sprint 1 Evidence', 'أدلة سبرنت 1'], 'tag-sec',
  ['Operational proof: Empirically verified Swagger UI endpoints, Subfinder subdomains, Naabu ports, httpx HTTP services, and raw directory persistence; unintegrated tools and cryptographic DB remain in remaining scope.',
   'أدلة تشغيلية مثبتة تشمل واجهات Swagger، نطاقات Subfinder، منافذ Naabu، خدمات httpx، وحفظ المجلدات الخام؛ وتبقى الأدوات غير المستكملة والتخزين المشفر ضمن الأعمال المتبقية.'],
  () => {
    const evidenceItems = [
      {
        id: 'swagger',
        img: 'images/evidence/swagger_ui.png',
        title: ['FastAPI Swagger UI', 'واجهات Swagger UI'],
        badge: ['VERIFIED · SPRINT 1', 'متحقق منه · سبرنت 1'],
        badgeClass: 'badge-done',
        desc: [
          'Operational REST API endpoints (/api/v1/scans) for target submission, scan job execution, and tool output inspection.',
          'واجهات REST API تشغيلية لاستقبال الأهداف، إنشاء مهام الفحص، ومتابعة مخرجات الأدوات عبر المتصفح.'
        ]
      },
      {
        id: 'subfinder',
        img: 'images/evidence/subfinder_output.png',
        title: ['Subfinder Output', 'استرجاع مخرجات Subfinder'],
        badge: ['VERIFIED · STAGE 1', 'متحقق منه · مرحلة 1'],
        badgeClass: 'badge-done',
        desc: [
          'Passive DNS enumeration executed programmatically; subdomains discovered and returned via API response.',
          'تنفيذ استكشاف النطاقات السلبي برمجياً؛ واسترجاع النطاقات الفرعية المكتشفة بنجاح عبر الـ API.'
        ]
      },
      {
        id: 'naabu',
        img: 'images/evidence/naabu_output.png',
        title: ['Naabu Port Scan', 'استرجاع منافذ Naabu'],
        badge: ['VERIFIED · STAGE 2', 'متحقق منه · مرحلة 2'],
        badgeClass: 'badge-done',
        desc: [
          'Port scanning conducted over discovered assets; open network ports (e.g. 80, 443) identified and persisted.',
          'إجراء فحص المنافذ السريع للأصول المكتشفة؛ وتحديد المنافذ النشطة (مثل 80 و443) واسترجاعها.'
        ]
      },
      {
        id: 'httpx',
        img: 'images/evidence/httpx_output.png',
        title: ['httpx Probe Output', 'استرجاع خدمات httpx'],
        badge: ['VERIFIED · STAGE 3', 'متحقق منه · مرحلة 3'],
        badgeClass: 'badge-done',
        desc: [
          'Active HTTP/HTTPS web services verified; server status codes (200, 301) and web page titles retrieved cleanly.',
          'التحقق من خدمات الويب النشطة؛ واسترجاع رموز الاستجابة (200، 301) وعناوين الصفحات بدقة.'
        ]
      },
      {
        id: 'folder',
        img: 'images/evidence/scan_output_folder.png',
        title: ['Scan Output Folders', 'مجلدات حفظ الفحص'],
        badge: ['VERIFIED · STORAGE', 'متحقق منه · التخزين'],
        badgeClass: 'badge-done',
        desc: [
          'Raw tool CLI outputs persisted into structured filesystem directories under scans/<scan_id>/ for audit provenance.',
          'حفظ مخرجات الأدوات الخام في مجلدات منظمة على القرص تتبع معرف الفحص لضمان تتبع مصدر الأدلة.'
        ]
      }
    ];

    return `<div style="display:flex; flex-direction:column; gap:10px; width:100%; height:100%; justify-content:space-between;">
      <!-- 5 Evidence Cards Row -->
      <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:10px; width:100%; align-items:stretch;">
        ${evidenceItems.map((item, idx) => A(idx, `
          <div class="c-card" style="padding:8px 10px; display:flex; flex-direction:column; justify-content:space-between; height:100%; border-color:rgba(45,212,191,0.3);">
            <div>
              <div style="position:relative; width:100%; height:96px; border-radius:6px; overflow:hidden; border:1px solid rgba(255,255,255,0.1); background:#020617; cursor:pointer;" onclick="openImgModal('${item.img}', '${item.title[0]} — Operational Verification Evidence')">
                <img src="${item.img}" alt="${item.title[0]}" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                <div style="position:absolute; bottom:3px; right:4px; background:rgba(0,0,0,0.7); font-size:10px; color:#38bdf8; padding:1px 5px; border-radius:3px; font-family:var(--font-mono);">
                  ${tr('Click to Zoom', 'انقر للتكبير')}
                </div>
              </div>

              <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px; margin-bottom:4px;">
                <b style="font-size:14px; color:#ffffff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${tr(item.title[0], item.title[1])}</b>
              </div>
              <div style="margin-bottom:5px;">
                <span class="status-badge ${item.badgeClass}" style="font-size:10.5px; padding:1px 6px;">${tr(item.badge[0], item.badge[1])}</span>
              </div>
              <p style="font-size:12px; line-height:1.4; margin:0; color:#cbd5e1;">${tr(item.desc[0], item.desc[1])}</p>
            </div>

            <button type="button" class="action-btn" style="width:100%; margin-top:8px; padding:3px 6px; font-size:11.5px; background:rgba(45,212,191,0.12); border:1px solid var(--teal); color:var(--teal); border-radius:4px; cursor:pointer;" onclick="openImgModal('${item.img}', '${item.title[0]} — Operational Verification Evidence')">
              ${tr('Enlarge Evidence', 'تكبير الدليل')}
            </button>
          </div>
        `)).join('')}
      </div>

      <!-- Strict Evidence Boundaries Box -->
      ${A(5, `
        <div style="background:rgba(15,23,42,0.75); border:1px solid rgba(251,191,36,0.3); border-radius:8px; padding:9px 16px; font-size:13.5px; color:#f1f5f9; display:flex; flex-direction:column; gap:4px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <b style="color:var(--amber); font-size:14px;">${tr('Strict Evidence Boundaries & Scope Notice:', 'تنبيه حدود دلالة الأدلة والنطاق:')}</b>
            <span class="status-badge badge-wip" style="font-size:11.5px; padding:2px 8px;">${tr('Laboratory Scope', 'نطاق مخبري')}</span>
          </div>
          <div style="line-height:1.55; color:#cbd5e1;">
            ${tr('The empirical evidence above verifies the local prototype execution of discovery tools (Sprint 1) and raw file persistence. It does NOT prove unintegrated tools (Sprint 2: Kiterunner, Nuclei, Wapiti), PostgreSQL storage, or AES-256-GCM encryption. Discovered subdomains and open ports represent attack surface reconnaissance data, not confirmed security vulnerabilities.',
                 'تثبت الأدلة التشغيلية أعلاه التشغيل المخبري للنموذج الأولي لأدوات مسار الاستكشاف (Sprint 1) وحفظ ملفاتها الخام على القرص. ولا تثبت الأدلة تكامل الأدوات التي لم تستكمل (Sprint 2: Kiterunner وNuclei وWapiti)، ولا التخزين في PostgreSQL أو التشفير بـ AES-256-GCM. وتعتبر النطاقات والمنافذ المكتشفة بيانات استكشاف لسطح الهجوم وليست ثغرات أمنية مؤكدة.')}
          </div>
        </div>
      `)}
    </div>`;
  }
);

// 18. Prototype Outputs & Technical Verification (الشريحة 18: مخرجات النموذج الأولي والتحقق الفني)
addSlide(
  ['Slide 18: Prototype Outputs', 'الشريحة 18: مخرجات النموذج الأولي والتحقق الفني'],
  ['Prototype Outputs & Technical Verification', 'مخرجات النموذج الأولي والتحقق الفني'],
  ['Technical Verification', 'التحقق الفني'], 'tag-sec',
  ['Empirical outputs currently produced by the prototype engine: validating automated discovery and file persistence, while distinguishing reconnaissance from confirmed vulnerabilities.',
   'المخرجات الفعلية التي ينتجها النموذج الأولي لمحرك الفحص: تأكيد نجاح الاستكشاف وحفظ الملفات، مع التمييز الدقيق بين بيانات الاستكشاف والثغرات المؤكدة.'],
  () => `<div style="display:flex; flex-direction:column; gap:12px; width:100%; height:100%; justify-content:space-between;">
    <div class="c-grid-3">
      ${A(0, `
        <div class="c-card" style="padding:14px 16px; height:100%; display:flex; flex-direction:column; justify-content:space-between; border-color:rgba(74,222,128,0.35);">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding-bottom:6px; border-bottom:1px solid rgba(74,222,128,0.25);">
              <h3 class="c-card-h" style="font-size:18px; color:var(--green); margin:0;">
                ${tr('1. Discovered Attack Surface', '1. استكشاف سطح الهجوم والأصول')}
              </h3>
              <span class="status-badge badge-done" style="font-size:11.5px; padding:2px 7px;">${tr('Sprint 1 Verified', 'سبرنت 1 مكتمل')}</span>
            </div>
            <ul style="margin:0; padding-inline-start:18px; font-size:14px; line-height:1.6; color:#cbd5e1; display:flex; flex-direction:column; gap:6px;">
              <li><b style="color:#fff;">Subfinder:</b> ${tr('Passive enumeration of external subdomains.', 'استكشاف النطاقات الفرعية الخارجية سلبياً.')}</li>
              <li><b style="color:#fff;">Naabu:</b> ${tr('Active TCP port mapping on identified targets (ports 80, 443).', 'فحص المنافذ المفتوحة عبر الشبكة (مثل 80 و443).')}</li>
              <li><b style="color:#fff;">httpx:</b> ${tr('Active HTTP/HTTPS web service probing, status codes, and server banners.', 'التحقق من خدمات الويب النشطة ورموز الاستجابة وعناوين الخوادم.')}</li>
            </ul>
          </div>
          <div style="margin-top:10px; font-size:12.5px; color:var(--green); background:rgba(74,222,128,0.08); padding:5px 8px; border-radius:4px;">
            ${tr('Automated programmatic handover between tools confirmed without data loss.', 'تأكيد التسليم البرمجي الآلي بين الأدوات بنجاح دون فقد للبيانات.')}
          </div>
        </div>
      `)}

      ${A(1, `
        <div class="c-card c-blue" style="padding:14px 16px; height:100%; display:flex; flex-direction:column; justify-content:space-between; border-color:rgba(56,189,248,0.35);">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding-bottom:6px; border-bottom:1px solid rgba(56,189,248,0.25);">
              <h3 class="c-card-h" style="font-size:18px; color:var(--blue); margin:0;">
                ${tr('2. Raw Output Persistence', '2. حفظ المخرجات الخام على القرص')}
              </h3>
              <span class="status-badge badge-done" style="font-size:11.5px; padding:2px 7px;">${tr('Filesystem Verified', 'حفظ القرص محقق')}</span>
            </div>
            <ul style="margin:0; padding-inline-start:18px; font-size:14px; line-height:1.6; color:#cbd5e1; display:flex; flex-direction:column; gap:6px;">
              <li><b style="color:#fff;">${tr('Directory Trees:', 'هيكل المجلدات:')}</b> ${tr('Outputs written to structured paths: scans/<scan_id>/<tool_output>.', 'كتابة المخرجات في مسارات مخصصة لكل فحص.')}</li>
              <li><b style="color:#fff;">${tr('Audit Provenance:', 'إثبات المصدر:')}</b> ${tr('Preserving raw execution logs for compliance and verification.', 'الاحتفاظ بسجلات الأداة الأصلية للتحقق والامتثال.')}</li>
              <li><b style="color:#fff;">${tr('API Retrieval:', 'الاسترجاع عبر API:')}</b> ${tr('Outputs inspectable via dedicated REST endpoints.', 'إمكانية استعراض مخرجات كل أداة عبر نقاط نهاية REST.')}</li>
            </ul>
          </div>
          <div style="margin-top:10px; font-size:12.5px; color:var(--blue); background:rgba(56,189,248,0.08); padding:5px 8px; border-radius:4px;">
            ${tr('Raw filesystem storage operational; PostgreSQL schema planned.', 'التخزين الخام في نظام الملفات يعمل؛ وقاعدة البيانات مخططة.')}
          </div>
        </div>
      `)}

      ${A(2, `
        <div class="c-card c-amber" style="padding:14px 16px; height:100%; display:flex; flex-direction:column; justify-content:space-between; border-color:rgba(251,191,36,0.35);">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding-bottom:6px; border-bottom:1px solid rgba(251,191,36,0.25);">
              <h3 class="c-card-h" style="font-size:18px; color:var(--amber); margin:0;">
                ${tr('3. Normalization & Scanning', '3. التوحيد وفحص الثغرات')}
              </h3>
              <span class="status-badge badge-wip" style="font-size:11.5px; padding:2px 7px;">${tr('Sprint 2 WIP', 'سبرنت 2 قيد التنفيذ')}</span>
            </div>
            <ul style="margin:0; padding-inline-start:18px; font-size:14px; line-height:1.6; color:#cbd5e1; display:flex; flex-direction:column; gap:6px;">
              <li><b style="color:#fff;">${tr('Initial Parsers:', 'المحللات الأولية:')}</b> ${tr('Ingesting tool outputs into structured dictionaries.', 'استخراج الأصول والنتائج في قواميس برمجية مهيكلة.')}</li>
              <li><b style="color:#fff;">${tr('Merge Refinement:', 'معالجة الدمج:')}</b> ${tr('Refining cross-tool deduplication and data consistency.', 'معالجة إلغاء التكرار وضمان اتساق دمج البيانات.')}</li>
              <li><b style="color:#fff;">${tr('Vulnerability Tools:', 'أدوات الثغرات:')}</b> ${tr('Nuclei and Wapiti integrations undergoing verification.', 'استكمال التحقق من استدعاء Nuclei وWapiti.')}</li>
            </ul>
          </div>
          <div style="margin-top:10px; font-size:12.5px; color:var(--amber); background:rgba(251,191,36,0.08); padding:5px 8px; border-radius:4px;">
            ${tr('Scanners being completed; partial failure recovery traps in progress.', 'استكمال أدوات الفحص ومعالجة مصائد الفشل الجزئي قيد العمل.')}
          </div>
        </div>
      `)}
    </div>

    <!-- Critical Reconnaissance vs Vulnerability Distinction Banner -->
    ${A(3, `
      <div style="background:rgba(15,23,42,0.7); border:1px solid rgba(20,184,166,0.25); border-radius:8px; padding:9px 18px; font-size:13.5px; color:#cbd5e1; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <b style="color:var(--teal); font-size:14px;">${tr('Critical Technical Distinction:', 'تمييز تقني جوهري:')}</b>
          <span>${tr('Discovered subdomains, open ports, and live web services map exposed assets; they are NOT confirmed vulnerabilities. Vulnerability scanning (Sprint 2), CVE/CWE reference enrichment, and AI remediation remain in active development and planned scope.',
                    'النطاقات المكتشفة والمنافذ المفتوحة وخدمات الويب الحية تمثل استكشافاً للأصول وليست ثغرات أمنية مؤكدة. فحص الثغرات (Sprint 2)، وإثراء مراجع الأمان (CVE/CWE)، وتحليل الذكاء تظل ضمن التطوير والتصميم المخطط.')}</span>
        </div>
        <span class="status-badge badge-sec" style="font-size:11.5px; padding:2px 8px;">${tr('Scope Distinction', 'تمييز النطاق')}</span>
      </div>
    `)}
  </div>`
);

// 19. Technical Challenges, Mitigations & Codebase Evidence (الشريحة 19: التحديات والمعالجات)
addSlide(
  ['Slide 19: Challenges & Mitigations', 'الشريحة 19: التحديات والمعالجات'],
  ['Encountered Challenges & Mitigation Status', 'التحديات التقنية والمعالجات وحالتها في الكود البرمجي'],
  ['Risk & Issue Management', 'إدارة المشكلات'], 'tag-prop',
  ['Concrete technical challenges encountered during engine development, root causes, codebase mitigations, and evidence links.',
   'تحديات تقنية فعلية واجهت تطوير المحرك، أسبابها الجذرية، المعالجات البرمجية في الكود، وروابط أدلة الشيفرة المصدرية.'],
  () => {
    const risks = [
      {
        name: ['Base Domain Omission from Discovery Handover', 'إغفال النطاق الأساسي في المراحل اللاحقة'],
        root: ['Subfinder returns only subdomains; when passing this list to subsequent tools (Naabu & httpx), the root target domain itself was omitted from scanning.',
               'أداة Subfinder تكتشف النطاقات الفرعية فقط؛ وعند تمرير القائمة للمراحل التالية، كان النطاق الأساسي يُغفل من فحص المنافذ والخدمات.'],
        fix: ['Added coordinator logic to verify and automatically prepend the base domain into the target list before handing over to subsequent discovery stages.',
              'إضافة معالجة برمجية في المنسق للتحقق من وجود النطاق الأساسي وإدراجه تلقائياً ضمن قائمة الأهداف قبل تمريرها للمراحل اللاحقة.'],
        codeImg: 'images/evidence/code_base_domain_fallback.png',
        codeTitle: 'Code Evidence: Base Domain Fallback Logic / كود إضافة النطاق الأساسي تلقائياً',
        status: ['Resolved in Codebase', 'تمت المعالجة في الكود'],
        statusClass: 'badge-done'
      },
      {
        name: ['Windows Host vs Linux Container Path Syntax', 'اختلاف مسارات الملفات بين Windows وDocker'],
        root: ['Executing CLI tools inside Docker containers from a Windows host generated backslash paths (C:\\...), causing volume mount and execution errors.',
               'تشغيل أدوات الحاويات من بيئة تطوير Windows أنتج مسارات بشرطات مائلة عكسية (C:\\...) مما سبب فشل ربط المجلدات وتشغيل الأدوات.'],
        fix: ['Implemented a dedicated normalize_docker_path helper function to standardize host paths into POSIX container-compatible paths.',
              'تطوير دالة مساعدة مخصصة (normalize_docker_path) لتحويل مسارات النظام المضيف إلى مسارات POSIX متوافقة مع حاويات لينكس.'],
        codeImg: 'images/evidence/code_docker_path_unification.png',
        codeTitle: 'Code Evidence: Docker Path Normalization Helper / كود دالة توحيد مسارات الحاويات',
        status: ['Resolved in Codebase', 'تمت المعالجة في الكود'],
        statusClass: 'badge-done'
      },
      {
        name: ['Long-Running Scans & Worker Architecture', 'إدارة المهام طويلة الأمد وبنية المشغل'],
        root: ['Sequential multi-tool scans block HTTP request threads and risk timeouts; standalone worker queue (Celery/Redis) not yet deployed.',
               'التشغيل المتسلسل للأدوات المتعددة يستغرق وقتاً طويلاً ويعطل خيوط الـ HTTP؛ ومشغل المهام المستقل (Celery/Redis) لم يُنشر بعد.'],
        fix: ['FastAPI BackgroundTasks utilized as an in-process workaround; standalone task queue and worker architecture planned for production in Project (2).',
              'استخدام FastAPI BackgroundTasks كمعالجة داخلية مؤقتة للمهام غير المتزامنة؛ مع التخطيط لمشغل مستقل (Celery/Redis) في مشروع (2).'],
        codeImg: null,
        codeTitle: null,
        status: ['Interim Workaround · Queue Planned', 'معالجة مؤقتة · مشغل مستقل مخطط'],
        statusClass: 'badge-wip'
      },
      {
        name: ['Divergent Scanner Output Schemas & Parsing', 'اختلاف هياكل مخرجات الأدوات وتوحيد البيانات'],
        root: ['Security tools output varying formats (plain text, JSONL, nested JSON); vulnerability scanners in Sprint 2 have complex output structures.',
               'أدوات الفحص تنتج مخرجات متباينة (نصوص، JSONL، وJSON متداخل)؛ وتتطلب أدوات الثغرات في سبرنت 2 محللات دقيقة للأدلة.'],
        fix: ['Developing modular parser adapters with source provenance tracking; completing template mappings for Nuclei and Wapiti in Sprint 2.',
              'تطوير محللات مهايئة معيارية تحفظ مصدر الأدلة الخام؛ واستكمال مطابقة قوالب Nuclei ومخرجات Wapiti ضمن أعمال سبرنت 2.'],
        codeImg: null,
        codeTitle: null,
        status: ['In Progress (Sprint 2)', 'قيد الاستكمال ضمن سبرنت 2'],
        statusClass: 'badge-wip'
      }
    ];

    return `<div class="c-col" style="gap:10px;">
      <table class="comp-table" style="font-size:14px;">
        <thead>
          <tr>
            <th style="width:23%; padding:9px 12px;">${tr('Challenge Encountered', 'التحدي التقني الفعلي')}</th>
            <th style="width:28%; padding:9px 12px;">${tr('Root Cause', 'السبب الجذري')}</th>
            <th style="width:31%; padding:9px 12px;">${tr('Mitigation & Evidence', 'المعالجة البرمجية والدليل')}</th>
            <th class="center" style="width:18%; padding:9px 8px;">${tr('Status', 'الحالة')}</th>
          </tr>
        </thead>
        <tbody>
          ${risks.map(r => `
            <tr>
              <td style="padding:8px 12px;">
                <b style="font-size:14.5px; color:#ffffff; display:block; margin-bottom:3px;">${tr(r.name[0], r.name[1])}</b>
              </td>
              <td style="padding:8px 12px; font-size:13.5px; line-height:1.45; color:#cbd5e1;">${tr(r.root[0], r.root[1])}</td>
              <td style="padding:8px 12px; font-size:13.5px; line-height:1.45;">
                <div style="color:var(--teal); margin-bottom:4px;">${tr(r.fix[0], r.fix[1])}</div>
                ${r.codeImg ? `
                  <button type="button" class="action-btn" style="padding:2px 8px; font-size:11.5px; background:rgba(56,189,248,0.12); border:1px solid var(--blue); color:var(--blue); border-radius:4px; cursor:pointer;" onclick="openImgModal('${r.codeImg}', '${r.codeTitle}')">
                    ${tr('View Code Evidence', 'عرض كود المعالجة')}
                  </button>
                ` : ''}
              </td>
              <td class="center" style="padding:8px 6px;">
                <span class="status-badge ${r.statusClass}" style="font-size:12px; padding:3px 8px;">${tr(r.status[0], r.status[1])}</span>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div style="background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:8px 16px; font-size:13px; color:#cbd5e1; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
        <span><b>${tr('Codebase Transparency:', 'الشفافية البرمجية:')}</b> ${tr('All challenges represent real engineering hurdles encountered and documented directly with codebase mitigations and screenshots.',
             'تمثل كافة التحديات عقبات هندسية واقعية واجهت الفريق وجرى توثيقها ومعالجتها برمجياً مع إرفاق لقطات الكود المعتمدة.')}</span>
        <span style="color:var(--text-dim); font-size:12px;">(Chapter 3 Engineering Review)</span>
      </div>
    </div>`;
  }
);

// 20. Remaining Work & Completion Roadmap (الشريحة 20: الأعمال المتبقية وخطة الاستكمال)
addSlide(
  ['Slide 20: Completion Roadmap', 'الشريحة 20: الأعمال المتبقية وخطة الاستكمال'],
  ['Remaining Work & Completion Roadmap', 'الأعمال المتبقية وخطة الاستكمال لمشروع التخرج (2)'],
  ['Project Roadmap', 'خطة الاستكمال'], 'tag-sec',
  ['Remaining engineering packages for Graduation Project (2), structured into 4 work clusters pending academic supervisor timeline approval.',
   'حزم العمل الهندسية المتبقية لمشروع التخرج (2)، مقسمة إلى 4 مجموعات عمل بانتظار اعتماد الجدول الزمني من المشرف الأكاديمي.'],
  () => {
    const clusters = [
      ['Cluster 1: Engine Remediation & Tool Integration', 'المجموعة 1: استكمال محرك الفحص وسبرنت 2',
       'Priority 1', 'أولوية 1', 'badge-wip',
       'Complete Sprint 2 integration of Kiterunner, Nuclei, and Wapiti; finalize normalization parsers and deduplication; verify isolated execution in Docker containers.',
       'استكمال سبرنت 2 وتكامل Kiterunner وNuclei وWapiti؛ إنهاء محللات التوحيد وإلغاء التكرار؛ والتحقق من التشغيل المعزول داخل حاويات Docker.'],
      ['Cluster 2: Core Services, Database & Security Controls', 'المجموعة 2: الخدمات الأساسية وقاعدة البيانات وتشفير التخزين',
       'Priority 2', 'أولوية 2', 'badge-plan',
       'Deploy PostgreSQL 12-entity relational schema; implement AES-256-GCM data encryption with wrapped DEK and KEK secret store separation; implement authentication and RBAC with resource ownership checks.',
       'تنفيذ مخطط قاعدة بيانات PostgreSQL لـ 12 كياناً؛ تطبيق تشفير AES-256-GCM بـ DEK مستقل وحفظ KEK منفصل؛ وبناء منظومة المصادقة والصلاحيات (RBAC) وفحص ملكية المورد.'],
      ['Cluster 3: Reference Enrichment, AI Analysis & Dual Reports', 'المجموعة 3: الإثراء المرجعي الصريح والتحليل بالذكاء والتقارير',
       'Priority 3', 'أولوية 3', 'badge-plan',
       'Automate CVE/CWE and OWASP reference enrichment; integrate Gemini 3.8 Flash remediation pipeline with prompt minimization and response validation; build executive and technical PDF report generators.',
       'أتمتة الإثراء المرجعي بمعايير CVE/CWE وOWASP؛ دمج مسار Gemini 3.8 Flash لتفسير المعالجة مع تقليل البيانات والتحقق من الاستجابة؛ وتطوير مولد التقارير المزدوجة (تنفيذي وفني).'],
      ['Cluster 4: Frontend Dashboard, Benchmarking & Documentation', 'المجموعة 4: لوحة التحكم التفاعلية والتقييم المخبري والمناقشة',
       'Priority 4', 'أولوية 4', 'badge-plan',
       'Develop interactive React/TypeScript web dashboard; conduct controlled black-box laboratory evaluation against benchmark targets; complete graduation thesis and prepare for final defense.',
       'تطوير لوحة التحكم التفاعلية بـ React وTypeScript؛ إجراء التقييم المخبري المنضبط على أهداف معيارية؛ واستكمال وثيقة الأطروحة والاستعداد للمناقشة النهائية.']
    ];
    return `<div class="c-col" style="gap:10px;">
      ${clusters.map((c, idx) => A(idx, `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
          <b style="font-size:17px; color:#ffffff;">${tr(c[0], c[1])}</b>
          <span class="status-badge ${c[4]}" style="font-size:12.5px; padding:3px 8px;">${tr(c[2], c[3])}</span>
        </div>
        <p class="c-card-p" style="font-size:15px; line-height:1.55; margin:0;">${tr(c[5], c[6])}</p>`, 'c-card')).join('')}

      <div style="background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:8px 16px; font-size:14px; color:var(--amber); text-align:center;">
        <b>${tr('Timeline Approval Note:', 'تنبيه اعتماد الجدول:')}</b> ${tr('Work clusters define technical scope for Project (2). Calendar dates and duration allocations are subject to academic supervisor approval.',
                 'مجموعات العمل تمثل النطاق الفني المتبقي لمشروع (2)؛ والجدول الزمني المحدث وتوزيع الفترات معلقان بانتظار اعتماد المشرف الأكاديمي.')}
      </div>
    </div>`;
  }
);

// 21. Conclusion / Q&A (الشريحة 21: الخاتمة والجاهزية)
addSlide(
  ['Slide 21: Conclusion & Readiness', 'الشريحة 21: الخاتمة والجاهزية لمشروع (2)'],
  ['Conclusion & Graduation Project (2) Readiness', 'الخاتمة: خلاصة التقدم والجاهزية لمشروع التخرج (2)'],
  ['Conclusion & Readiness', 'الخاتمة والجاهزية'], 'tag-sec',
  ['Midterm defense summary: solid theoretical foundation and architectural design, verified Sprint 1 engine progress, and a structured roadmap for completion in Project (2).',
   'خلاصة المناقشة النصفية: أساس نظري وتصميم معماري رصين، إنجاز وتحقق مخبري لسبرنت 1، وخطة عمل محددة للاستكمال في مشروع التخرج (2).'],
  () => `<div class="c-col" style="align-items:center; gap:14px; text-align:center;">
    <div style="font-size:50px; font-weight:900; letter-spacing:2px; line-height:1; background:linear-gradient(120deg, #ffffff, #2dd4bf, #38bdf8); -webkit-background-clip:text; background-clip:text; color:transparent;">
      YemScan
    </div>
    <div style="font-size:16px; color:#e2e8f0; max-width:980px; line-height:1.6;">
      ${tr('Midterm Evaluation Summary: The team has established a rigorous academic foundation, completed the modular 5-layer architecture with explicit trust boundaries, empirically verified Sprint 1 discovery execution (Subfinder, Naabu, httpx), advanced Sprint 2 vulnerability tooling, and structured 4 engineering clusters for completion in Graduation Project (2).',
           'خلاصة التقييم النصفي: نجح الفريق في إرساء الأساس الأكاديمي الرصين، وإنجاز التصميم المعماري الخماسي الطبقات بحدود ثقة واضحة، والتحقق المخبري من تنفيذ سبرنت 1 للاستكشاف (Subfinder وNaabu وhttpx)، والمضي في سبرنت 2 لفحص الثغرات، مع تحديد 4 مجموعات عمل هندسية للاستكمال في مشروع التخرج (2).')}
    </div>

    <div class="c-grid-3" style="max-width:1120px; text-align:start;">
      ${A(0, `<h4 class="c-card-h" style="color:var(--teal); font-size:17.5px;">1. ${tr('Academic & Architectural Rigor', 'الأساس الأكاديمي والمعماري')}</h4>
        <p class="c-card-p" style="font-size:14.5px; line-height:1.55;">${tr('Comprehensive literature review, rigorous problem formulation, and modular architectural design with defined trust boundaries and cryptographic specifications.', 'دراسة مرجعية شاملة، صياغة دقيقة للمشكلة، وتصميم معماري معياري بحدود ثقة واضحة ومواصفات تشفير محددة.')}</p>`, 'c-card')}
      ${A(1, `<h4 class="c-card-h" style="color:var(--blue); font-size:17.5px;">2. ${tr('Engine Verification & Status', 'التحقق المخبري وحالة المحرك')}</h4>
        <p class="c-card-p" style="font-size:14.5px; line-height:1.55;">${tr('Sprint 1 discovery pipeline completed and empirically verified with raw outputs on disk; Sprint 2 vulnerability tooling and parsers actively in progress.', 'اكتمال سبرنت 1 لمسار الاستكشاف والتحقق منه مخبرياً بحفظ المخرجات الخام؛ مع استمرار العمل في سبرنت 2 لأدوات فحص الثغرات والمحللات.')}</p>`, 'c-card c-blue')}
      ${A(2, `<h4 class="c-card-h" style="color:var(--violet); font-size:17.5px;">3. ${tr('Structured Project (2) Roadmap', 'خطة الاستكمال لمشروع (2)')}</h4>
        <p class="c-card-p" style="font-size:14.5px; line-height:1.55;">${tr('Structured 4-cluster roadmap covering engine completion, PostgreSQL & AES-256-GCM storage, reference enrichment with Gemini AI, and lab evaluation for final defense.', 'خطة عمل محددة في 4 مجموعات تشمل استكمال المحرك، قاعدة بيانات PostgreSQL وتشفير التخزين، الإثراء بالذكاء، والتقييم المخبري للمناقشة النهائية.')}</p>`, 'c-card c-violet')}
    </div>

    <div class="stat-box" style="margin-top:2px; border-color:var(--teal); padding:10px 24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; width:100%; max-width:1120px;">
      <div style="font-size:14.5px; color:#cbd5e1; text-align:start;">
        <b>${tr('Project Supervisor:', 'مشرفة المشروع:')}</b>
        <span style="color:var(--teal); font-weight:800; margin-inline-start:6px;">${tr('Dr. Aisha Al-Hadm', 'عائشه الحدم')}</span>
      </div>
      <div class="stat-txt" style="font-size:16px; line-height:1.4;">
        <b>${tr('Thank you! We welcome all questions and constructive feedback from the examination committee.', 'شكراً لحسن استماعكم! نرحب بكافة أسئلة وملاحظات لجنة المناقشة والتقييم الكريمة.')}</b>
      </div>
    </div>
  </div>`
);

/* ============================================================
   ENGINE & STATE MANAGEMENT
=========================================================== */
const $ = id => document.getElementById(id);

function updateStaticUI(){
  document.documentElement.lang = L;
  document.documentElement.dir = (L === 'ar') ? 'rtl' : 'ltr';
  document.body.dir = (L === 'ar') ? 'rtl' : 'ltr';

  // Translate all [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if(I18N[k] && I18N[k][L]) el.textContent = I18N[k][L];
  });

  // Top Language Pill
  const topLangBtn = $('topLangBtn');
  if(topLangBtn){
    topLangBtn.querySelector('.l-en').classList.toggle('active-l', L === 'en');
    topLangBtn.querySelector('.l-ar').classList.toggle('active-l', L === 'ar');
  }

  $('jumpInput').max = S.length;
}

function renderAllSlides(){
  stopSimulator();
  $('slides').innerHTML = S.map((s, idx) => `
    <section class="slide" data-slide-idx="${idx}">
      <header class="s-head">
        <div class="s-meta">
          <div class="s-kicker">
            <span class="s-num-badge">${String(idx + 1).padStart(2, '0')}</span>
            <span>${tr(s.kicker[0], s.kicker[1])}</span>
          </div>
          <h2 class="s-title">${tr(s.title[0], s.title[1])}</h2>
        </div>
        <div class="s-tag ${s.tagClass}">${tr(s.tagText[0], s.tagText[1])}</div>
      </header>

      <div class="s-body">
        ${s.renderFn()}
      </div>

      ${(s.note && s.note[0] && s.note[0].trim()) ? `
      <footer class="s-summary">
        ${idx === 0 ? '<span class="sum-ic">💡</span>' : ''}
        <div><b>${tr('Key Insight:', 'الخلاصة الجوهرية:')}</b> ${tr(s.note[0], s.note[1])}</div>
      </footer>` : ''}
    </section>
  `).join('');

  // Overview Grid
  $('ovGrid').innerHTML = S.map((s, idx) => `
    <div class="ov-card" data-jump="${idx}">
      <div class="ov-card-num">SLIDE ${String(idx + 1).padStart(2, '0')} · ${tr(s.kicker[0], s.kicker[1])}</div>
      <div class="ov-card-title">${tr(s.title[0], s.title[1])}</div>
    </div>
  `).join('');

  // Help Modal Grid
  $('helpContent').innerHTML = (L === 'ar')
    ? `<div class="help-item"><kbd>→</kbd> / <kbd>Space</kbd> <span>الشريحة التالية</span></div>
       <div class="help-item"><kbd>←</kbd> <span>الشريحة السابقة</span></div>
       <div class="help-item"><kbd>Home</kbd> <span>الشريحة الأولى</span></div>
       <div class="help-item"><kbd>End</kbd> <span>الشريحة الأخيرة</span></div>
       <div class="help-item"><kbd>F</kbd> <span>ملء الشاشة</span></div>
       <div class="help-item"><kbd>O</kbd> <span>فهرس الشرائح (21 شريحة)</span></div>
       <div class="help-item"><kbd>L</kbd> <span>تبديل اللغة (EN / AR)</span></div>
       <div class="help-item"><kbd>M</kbd> <span>تقليل الحركة</span></div>
       <div class="help-item"><kbd>Esc</kbd> <span>إغلاق النوافذ</span></div>
       <div class="help-item"><kbd>?</kbd> <span>المساعدة</span></div>`
    : `<div class="help-item"><kbd>→</kbd> / <kbd>Space</kbd> <span>Next Slide</span></div>
       <div class="help-item"><kbd>←</kbd> <span>Previous Slide</span></div>
       <div class="help-item"><kbd>Home</kbd> <span>First Slide</span></div>
       <div class="help-item"><kbd>End</kbd> <span>Last Slide</span></div>
       <div class="help-item"><kbd>F</kbd> <span>Toggle Fullscreen</span></div>
       <div class="help-item"><kbd>O</kbd> <span>Toggle Overview (21 Slides)</span></div>
       <div class="help-item"><kbd>L</kbd> <span>Switch Language</span></div>
       <div class="help-item"><kbd>M</kbd> <span>Reduce Motion</span></div>
       <div class="help-item"><kbd>Esc</kbd> <span>Close Modals</span></div>
       <div class="help-item"><kbd>?</kbd> <span>Help</span></div>`;

  updateStaticUI();
  displaySlide(cur);
}

function displaySlide(index){
  stopSimulator();
  cur = Math.max(0, Math.min(S.length - 1, index));

  document.querySelectorAll('.slide').forEach(sl => {
    const isActive = (+sl.dataset.slideIdx === cur);
    sl.classList.toggle('active', isActive);
  });

  document.querySelectorAll('.ov-card').forEach(c => {
    c.classList.toggle('active', +c.dataset.jump === cur);
  });

  const currentNum = String(cur + 1).padStart(2, '0');
  const totalNum = String(S.length).padStart(2, '0');
  $('slideCounter').textContent = `${currentNum} / ${totalNum}`;
  $('progFill').style.width = `${((cur + 1) / S.length) * 100}%`;
  $('jumpInput').value = cur + 1;

  // Initialize workflow simulator if on Slide 16
  if($('wfSimPipe')){
    renderSimPipeNodes();
    const playBtn = $('simPlayBtn');
    if(playBtn) playBtn.onclick = runWorkflowSimulator;
  }
}

function nextSlide(){ if(cur < S.length - 1) displaySlide(cur + 1); }
function prevSlide(){ if(cur > 0) displaySlide(cur - 1); }

/* ============================================================
   WORKFLOW SIMULATOR (Figure 3.3 Dual-Mode Simulation)
============================================================ */
let simMode = 'seq'; // 'seq' | 'indep'

const simDefs = {
  seq: {
    title: ['YEMSCAN WORKFLOW SIMULATOR — SEQUENTIAL MODE (END-TO-END)', 'محاكي سير عمل YEMSCAN — النمط المتسلسل الشامل'],
    readyMsg: [
      '[SEQUENTIAL DEMO] Ready. Click "Simulate Workflow Execution" to observe automated handover across all stages.',
      '[محاكاة متسلسلة] جاهز. انقر على "محاكاة تنفيذ سير العمل" لمشاهدة التسليم الآلي عبر جميع مراحل الفحص.'
    ],
    steps: [
      ['01', '', 'Discovery', 'الاستكشاف', 'Subfinder · Naabu · httpx · Kiterunner'],
      ['02', '', 'Scanning', 'فحص الثغرات', 'Nuclei & Wapiti'],
      ['03', '', 'Processing', 'المعالجة', 'Normalization & Dedup'],
      ['04', '', 'Enrichment', 'الإثراء المرجعي', 'CVE · CWE · CVSS Catalogs'],
      ['05', '', 'AI Analysis', 'التحليل الذكي', 'Gemini Remediation Prompt'],
      ['06', '', 'Reporting', 'التقارير', 'Executive & Technical PDF (AES-256-GCM)']
    ],
    logs: [
      ['[STEP 1] Asset Discovery: Subfinder gathers passive subdomains; Naabu sweeps open ports; httpx verifies live web servers; Kiterunner maps API endpoints.',
       '[المرحلة 1] استكشاف الأصول: يجمع Subfinder النطاقات السلبية، ويفحص Naabu المنافذ، ويتحقق httpx من الخوادم الحية، ويكتشف Kiterunner مسارات الـ APIs.'],
      ['[STEP 2] Vulnerability Scanning: Passing verified endpoints to Nuclei for YAML template checks and Wapiti for dynamic web probing.',
       '[المرحلة 2] فحص الثغرات: تسليم نقاط النهاية المحققة لـ Nuclei لفحص القوالب وWapiti للفحص الديناميكي لتطبيقات الويب.'],
      ['[STEP 3] Output Processing: Raw scanner outputs ingested; normalization adapter unifies heterogeneous schemas into deduplicated PostgreSQL records.',
       '[المرحلة 3] معالجة المخرجات: استيعاب النتائج الخام وتوحيد التنسيقات وإلغاء التكرار في جداول علائقية بقاعدة البيانات مع إثبات المصدر.'],
      ['[STEP 4] Reference Enrichment: Associating normalized findings with authoritative CVE, CWE, CVSS, and OWASP Top 10 security references.',
       '[المرحلة 4] الإثراء المرجعي الصريح: ربط النتائج الموحدة بالقواعد بمراجع الأمان القياسية المعتمدة CVE وCWE وCVSS وOWASP Top 10.'],
      ['[STEP 5] AI-Assisted Interpretation: Context-grounded finding sent over HTTPS to Gemini 3.8 Flash for root cause remediation guidance with schema validation.',
       '[المرحلة 5] التحليل الذكي: إرسال السياق المصرح به عبر HTTPS لنموذج Gemini لتوليد إرشادات المعالجة الدقيقة والتحقق من الاستجابة.'],
      ['[STEP 6] Dual-Tier Reporting: Generating Executive and Technical Reports; all report artifacts encrypted at rest with AES-256-GCM.',
       '[المرحلة 6] إصدار التقارير المزدوجة: إنشاء التقرير التنفيذي والتقرير الفني مع حماية الملفات المخزنة بتشفير AES-256-GCM.']
    ],
    completeMsg: [
      '[COMPLETE] Sequential pipeline finished successfully. Data handover verified across all 6 phases as documented in Figure 3.3.',
      '[اكتمل الفحص] انتهى المسار المتسلسل بنجاح. تم التحقق من تسلسل تدفق البيانات عبر المراحل الست كما هو موثق في شكل 3.3.'
    ]
  },
  indep: {
    title: ['YEMSCAN WORKFLOW SIMULATOR — INDEPENDENT MODE (DIRECT TOOL)', 'محاكي سير عمل YEMSCAN — نمط الفحص المستقل المباشر'],
    readyMsg: [
      '[INDEPENDENT DEMO] Ready. Click "Simulate Workflow Execution" to observe direct tool container execution bypassing discovery.',
      '[محاكاة مستقلة] جاهز. انقر على "محاكاة تنفيذ سير العمل" لمشاهدة التنفيذ المباشر للأداة داخل الحاوية متجاوزاً الاستكشاف.'
    ],
    steps: [
      ['01', '', 'Target Scope', 'تحديد الهدف', 'Designated URL / Host / API'],
      ['02', '', 'Docker Worker', 'عزل الحاوية', 'Isolated Scanner Sandbox'],
      ['03', '', 'Processing', 'المعالجة', 'Normalization & PostgreSQL'],
      ['04', '', 'Targeted Report', 'التقرير المستقل', 'Technical Report (AES-256-GCM)']
    ],
    logs: [
      ['[STEP 1] Direct Target Selection: Operator specifies an isolated target (e.g. specific API or domain) and chooses a standalone scanner.',
       '[المرحلة 1] تحديد الهدف المباشر: يحدد المستخدم هدفاً محدداً (مثل API معين أو نطاق مفرد) ويختار أداة الفحص المستقلة.'],
      ['[STEP 2] Sandboxed Container Execution: Scanner launches immediately inside an isolated Docker container with strict CPU/memory limits.',
       '[المرحلة 2] التنفيذ المعزول بالحاوية: تشغيل الأداة فوراً داخل حاوية Docker معزولة ومقيدة الموارد دون الحاجة لمرحلة استكشاف.'],
      ['[STEP 3] Output Ingestion & Normalization: Scanner JSON/XML output parsed into canonical schema and saved to PostgreSQL with provenance.',
       '[المرحلة 3] استيعاب المخرجات وتوحيدها: تحويل مخرجات الأداة إلى المخطط الموحد وحفظها في قاعدة البيانات مع الاحتفاظ بالأدلة الأصلية.'],
      ['[STEP 4] Targeted Technical Report: Compiling technical vulnerability report for the designated asset with AES-256-GCM encrypted storage.',
       '[المرحلة 4] إصدار التقرير الفني المباشر: إنشاء التقرير الفني للهدف المحدد مع تأمين الملف المشفر بتشفير AES-256-GCM.']
    ],
    completeMsg: [
      '[COMPLETE] Independent tool scan finished successfully. Direct execution verified inside Docker container as documented in Figure 3.3.',
      '[اكتمل الفحص] انتهى الفحص المستقل بنجاح. تم التحقق من التنفيذ المباشر داخل حاوية Docker كما هو موثق في شكل 3.3.'
    ]
  }
};

function renderSimPipeNodes(){
  const pipe = $('wfSimPipe');
  if(!pipe) return;
  const def = simDefs[simMode];
  pipe.innerHTML = def.steps.map((s, idx) => (idx ? '<div class="pipe-conn">➜</div>' : '') +
    `<div class="pipe-node" data-sim-idx="${idx}">
      <div class="pn-step">STEP ${s[0]}</div>
      ${s[1] ? `<span class="pn-ic">${s[1]}</span>` : ''}
      <div class="pn-title">${tr(s[2], s[3])}</div>
      <div class="pn-sub">${s[4]}</div>
    </div>`).join('');
}

window.setSimMode = function(mode){
  stopSimulator();
  simMode = mode;
  const btnSeq = $('btnModeSeq');
  const btnIndep = $('btnModeIndep');
  if(btnSeq) btnSeq.classList.toggle('active', mode === 'seq');
  if(btnIndep) btnIndep.classList.toggle('active', mode === 'indep');

  const titleEl = $('simModeTitle');
  if(titleEl) titleEl.textContent = tr(simDefs[mode].title[0], simDefs[mode].title[1]);

  const out = $('simOutput');
  if(out) out.textContent = tr(simDefs[mode].readyMsg[0], simDefs[mode].readyMsg[1]);

  const barFill = $('simBarFill');
  if(barFill) barFill.style.width = '0%';

  const status = $('simStatus');
  if(status){ status.textContent = 'IDLE'; status.style.color = '#94a3b8'; }

  renderSimPipeNodes();
};

function stopSimulator(){
  if(simTimer){ clearInterval(simTimer); simTimer = null; }
}

function runWorkflowSimulator(){
  stopSimulator();
  const def = simDefs[simMode];
  const nodes = document.querySelectorAll('#wfSimPipe .pipe-node');
  const barFill = $('simBarFill');
  const out = $('simOutput');
  const status = $('simStatus');
  if(!nodes.length) return;

  let step = 0;
  if(status){ status.textContent = 'RUNNING'; status.style.color = 'var(--teal)'; }

  const tick = () => {
    nodes.forEach((n, idx) => n.classList.toggle('on', idx === step));
    if(barFill) barFill.style.width = `${((step + 1) / nodes.length) * 100}%`;
    if(out && def.logs[step]) out.textContent = tr(def.logs[step][0], def.logs[step][1]);
    step++;

    if(step >= nodes.length){
      stopSimulator();
      setTimeout(() => {
        nodes.forEach(n => n.classList.remove('on'));
        if(out) out.textContent = tr(def.completeMsg[0], def.completeMsg[1]);
        if(status){ status.textContent = 'COMPLETED'; status.style.color = 'var(--green)'; }
      }, 1200);
    }
  };

  tick();
  simTimer = setInterval(tick, 1400);
}

/* ============================================================
   RESPONSIVE 16:9 AUTO-SCALING
============================================================ */
function fitStage(){
  const baseW = 1366, baseH = 768;
  const scale = Math.min(window.innerWidth / baseW, window.innerHeight / baseH);
  $('stage').style.transform = `scale(${scale})`;
  $('stage').style.margin = `${-(baseH * (1 - scale)) / 2}px ${-(baseW * (1 - scale)) / 2}px`;
}

function toggleFullscreen(){
  if(!document.fullscreenElement){
    (document.documentElement.requestFullscreen || (() => {})).call(document.documentElement).catch(() => {});
  } else {
    document.exitFullscreen();
  }
}

function switchLanguage(){
  L = (L === 'en') ? 'ar' : 'en';
  localStorage.setItem('ys_lang', L);
  renderAllSlides();
}

function toggleReduceMotion(enable){
  document.body.classList.toggle('reduce-motion', enable);
  $('modeBtn').classList.toggle('f-btn-primary', enable);
  localStorage.setItem('ys_rm', enable ? '1' : '0');
}

/* ============================================================
   EVENT BINDINGS
============================================================ */
$('nextBtn').onclick = nextSlide;
$('prevBtn').onclick = prevSlide;

$('topLangBtn').onclick = switchLanguage;
$('topFsBtn').onclick = toggleFullscreen;
$('topOvBtn').onclick = () => $('overview').classList.toggle('hidden');
$('ovClose').onclick = () => $('overview').classList.add('hidden');

$('modeBtn').onclick = () => toggleReduceMotion(!document.body.classList.contains('reduce-motion'));
$('helpBtn').onclick = () => $('helpModal').classList.toggle('hidden');
$('helpClose').onclick = () => $('helpModal').classList.add('hidden');

$('jumpInput').onchange = e => {
  const v = parseInt(e.target.value, 10);
  if(v >= 1 && v <= S.length) displaySlide(v - 1);
  e.target.blur();
};

$('ovGrid').onclick = e => {
  const card = e.target.closest('.ov-card');
  if(card){
    displaySlide(+card.dataset.jump);
    $('overview').classList.add('hidden');
  }
};

// Diagram Lightbox Functions
window.openImgModal = (src, caption) => {
  const m = $('imgModal');
  const img = $('imgModalSrc');
  const cap = $('imgModalCaption');
  if(m && img){
    img.src = src;
    if(cap) cap.textContent = caption || '';
    m.classList.add('open');
  }
};
window.closeImgModal = () => {
  const m = $('imgModal');
  if(m) m.classList.remove('open');
};

// Full Table 2.2 Comparison Modal Function
window.openTable22Modal = () => {
  let m = $('table22Modal');
  if(!m){
    m = document.createElement('div');
    m.id = 'table22Modal';
    m.className = 'img-modal';
    m.onclick = window.closeTable22Modal;
    m.setAttribute('role', 'dialog');
    m.setAttribute('aria-modal', 'true');
    m.setAttribute('aria-label', 'Table 2.2 Modal');
    document.body.appendChild(m);
  }
  
  const isAr = (L === 'ar');
  const headers = [
    isAr ? 'معيار المقارنة \\ الأداة أو النظام' : 'Comparison criterion \\ Tool or System',
    'Nuclei', 'Wapiti', 'reNgine', 'FortiScan', 'YemScan'
  ];
  const rows = [
    [
      isAr ? 'لوحة تحكم ويب مركزية لإدارة الفحوصات' : 'Centralized web dashboard for managing scans',
      '❌', '❌', '✅', '✅', '✅'
    ],
    [
      isAr ? 'استكشاف النطاقات الفرعية والمنافذ المفتوحة بصورة مدمجة' : 'Integrated subdomain and open-port discovery',
      '❌', '❌', '✅', '❌', '✅'
    ],
    [
      isAr ? 'تنسيق وتشغيل أدوات استكشاف وفحص متعددة' : 'Coordination of multiple discovery and scanning tools',
      '❌', '❌', '✅', '❌', '✅'
    ],
    [
      isAr ? 'تفسير نتائج الفحص بمساعدة الذكاء الاصطناعي' : 'AI-assisted interpretation of security findings',
      '❌', '❌', '✅', '✅', '✅'
    ],
    [
      isAr ? 'توليد مخرجات أو تقارير الفحص' : 'Generation of scan outputs or reports',
      '✅', '✅', '✅', '✅', '✅'
    ],
    [
      isAr ? 'الإثراء المرجعي الأمني الصريح للنتائج الموحدة قبل تحليل الذكاء الاصطناعي' : 'Explicit security-reference enrichment of consolidated findings before AI analysis',
      '❌', '❌', '❌', '❌', '✅'
    ]
  ];

  m.innerHTML = `
    <div class="img-modal-content" onclick="event.stopPropagation()" style="max-width:1120px; max-height:88vh; overflow-y:auto; padding:22px 26px; background:#0f172a; color:#f8fafc; border:1px solid rgba(45,212,191,0.3); border-radius:14px; direction:${isAr ? 'rtl' : 'ltr'}; text-align:start;">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:12px; margin-bottom:14px;">
        <div>
          <span style="font-family:var(--font-mono); font-size:13px; color:var(--teal); font-weight:700;">${isAr ? 'الفصل الثاني: دراسة مرجعية ومقارنة تفصيلية' : 'Chapter 2: Literature Review & Detailed Comparison'}</span>
          <h3 style="font-size:20px; color:#ffffff; margin:3px 0 0 0;">${isAr ? 'جدول 2.2 الكامل: مقارنة معيارية شاملة بين الأنظمة والأدوات المراجعة' : 'Table 2.2: Full Comparison Matrix of Reviewed Systems and Tools'}</h3>
        </div>
        <button class="img-modal-close" onclick="closeTable22Modal()" title="${isAr ? 'إغلاق (Esc)' : 'Close (Esc)'}" style="position:static; font-size:18px;">✕</button>
      </div>

      <div style="overflow-x:auto;">
        <table class="comp-table" style="font-size:15px; width:100%;">
          <thead>
            <tr>
              <th style="width:40%; padding:11px 14px;">${headers[0]}</th>
              <th class="center" style="width:11%; padding:11px 8px;">${headers[1]}</th>
              <th class="center" style="width:11%; padding:11px 8px;">${headers[2]}</th>
              <th class="center" style="width:12%; padding:11px 8px;">${headers[3]}</th>
              <th class="center" style="width:12%; padding:11px 8px;">${headers[4]}</th>
              <th class="center" style="width:14%; padding:11px 8px; color:var(--teal); background:rgba(45,212,191,0.18); border-left:1px solid rgba(45,212,191,0.3); border-right:1px solid rgba(45,212,191,0.3);">${headers[5]}</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map((r, idx) => `
              <tr style="${idx === 5 ? 'background:rgba(45,212,191,0.08);' : ''}">
                <td style="font-weight:${idx === 5 ? '800' : '600'}; color:${idx === 5 ? 'var(--teal)' : '#e2e8f0'}; padding:10px 14px;">
                  ${r[0]}
                </td>
                <td class="center" style="font-size:18px; padding:9px 6px;">${r[1]}</td>
                <td class="center" style="font-size:18px; padding:9px 6px;">${r[2]}</td>
                <td class="center" style="font-size:18px; padding:9px 6px;">${r[3]}</td>
                <td class="center" style="font-size:18px; padding:9px 6px;">${r[4]}</td>
                <td class="center" style="font-size:18px; font-weight:800; background:rgba(45,212,191,0.06); border-left:1px solid rgba(45,212,191,0.2); border-right:1px solid rgba(45,212,191,0.2); padding:9px 6px;">
                  ${r[5]}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div style="display:flex; flex-direction:column; gap:6px; background:rgba(15,23,42,0.85); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:12px 16px; font-size:13.5px; line-height:1.6; color:#cbd5e1; margin-top:14px;">
        <div>
          <b style="color:var(--teal);">${isAr ? 'ملاحظة الرموز:' : 'Symbol Note:'}</b>
          ${isAr ? '✅ الميزة مدعومة أو موثقة في المصدر المراجع؛ ❌ الميزة غير مدعومة أو غير موثقة في المصدر المراجع.' : '✅ Feature supported or documented in reviewed source; ❌ Feature not supported or not documented in reviewed source.'}
        </div>
        <div style="font-size:12.5px; color:#94a3b8; border-top:1px dashed rgba(255,255,255,0.08); padding-top:6px; display:flex; flex-direction:column; gap:4px;">
          <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:6px;">
            <span>${isAr ? 'مرجع التوثيق: جدول 2.2 من وثيقة الفصل الثاني.' : 'Citation: Table 2.2 from Chapter 2 documentation.'}</span>
            <span>${isAr ? 'FortiScan: مشروع تخرج بكالوريوس غير منشور، جامعة العلوم والتكنولوجيا (الشرف وآخرون، 2024).' : 'FortiScan: unpublished bachelor\'s graduation project, UST (Al-Sharaf et al., 2024).'}</span>
          </div>
          <div style="color:var(--teal); font-size:12px;">
            ${isAr ? 'ملاحظة ميزات YemScan: الميزات الموضحة لـ YemScan تمثل التصميم المعماري المقترح الموثق في الفصل الثالث؛ وتفصيل حالة تنفيذها (سبرنت 1 مكتمل، وسبرنت 2 قيد التنفيذ، والباقي مخطط) موضح في الشرائح اللاحقة.' : 'YemScan Features Note: Features indicated for YemScan represent the proposed platform design documented in Chapter 3; their implementation status (Sprint 1 done, Sprint 2 WIP, remainder planned) is detailed in subsequent slides.'}
          </div>
        </div>
      </div>
    </div>
  `;
  m.classList.add('open');
};

window.closeTable22Modal = () => {
  const m = $('table22Modal');
  if(m) m.classList.remove('open');
};

// Stage click navigation (Right half = Next, Left half = Prev, flipped in RTL)
$('stage').addEventListener('click', e => {
  if(e.target.closest('button, input, .sim-console, .ov-card, .help-inner, table, .diag-card, .img-modal')) return;
  const rect = $('stage').getBoundingClientRect();
  const isRight = (e.clientX - rect.left) > (rect.width / 2);
  const rtl = (L === 'ar');
  (isRight !== rtl) ? nextSlide() : prevSlide();
});

// Comprehensive Keyboard Navigation
window.addEventListener('keydown', e => {
  if(e.target.tagName === 'INPUT') return;
  const k = e.key;
  const rtl = (L === 'ar');

  if(k === 'Escape'){
    $('overview').classList.add('hidden');
    $('helpModal').classList.add('hidden');
    window.closeImgModal();
    window.closeTable22Modal();
    return;
  }
  if(k === 'ArrowRight' || k === 'PageDown' || k === ' '){
    e.preventDefault();
    (k === 'ArrowRight' && rtl) ? prevSlide() : nextSlide();
  } else if(k === 'ArrowLeft' || k === 'PageUp'){
    e.preventDefault();
    (k === 'ArrowLeft' && rtl) ? nextSlide() : prevSlide();
  } else if(k === 'Home'){
    displaySlide(0);
  } else if(k === 'End'){
    displaySlide(S.length - 1);
  } else if(/^f$/i.test(k)){
    toggleFullscreen();
  } else if(/^o$/i.test(k)){
    $('overview').classList.toggle('hidden');
  } else if(/^l$/i.test(k)){
    switchLanguage();
  } else if(/^m$/i.test(k)){
    toggleReduceMotion(!document.body.classList.contains('reduce-motion'));
  } else if(k === '?'){
    $('helpModal').classList.toggle('hidden');
  }
});

window.addEventListener('resize', fitStage);
document.addEventListener('fullscreenchange', fitStage);

// Initial bootstrap
toggleReduceMotion(localStorage.getItem('ys_rm') === '1');
renderAllSlides();
fitStage();

})();
