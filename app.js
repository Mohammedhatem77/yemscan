/* YemScan — Midterm Graduation Project Presentation Engine
   Follows Official UST Faculty Guidelines for Graduation Project (1)
   21-Slide Standard Academic Template (Cybersecurity & Networking)
   Supervised by: Dr. Aisha Al-Hadm · Academic Year: 2026-2027
   Team: Mohammed Saleh Hatem, Nassar Ahmed Al-Fattahi, Mohammed Abdulwahid Alrubaidi,
         Younes Mohammed Alsarory, Abdulmajid Abulkarim Anqa
   Updated according to Midterm Review Guidelines (10 October 2026)
*/
(function(){
'use strict';

let L = localStorage.getItem('ys_lang') || 'en';
let cur = 0; // 0..20: 21 Slides (Slide 1 is the Title & Team Cover Slide)
let simTimer = null;

const tr = (en, ar) => (L === 'ar' ? ar : en);
const A = (i, html, cls) => `<div class="${cls || ''} anim" style="--i:${i}">${html}</div>`;

const I18N = {
  headerContext: {
    en: 'UST · Cybersecurity & Networking · Midterm Defense 2026-2027',
    ar: 'جامعة العلوم والتكنولوجيا · الأمن السيبراني والشبكات · مناقشة نصفية 2026-2027'
  },
  overview: { en: 'Overview', ar: 'الفهرس' },
  overviewTitle: { en: 'Slide Overview & Navigation (21 Slides)', ar: 'فهرس شرائح العرض والتنقل السريع (21 شريحة)' },
  overviewSub: { en: 'Presentation organized according to UST Guidelines', ar: 'تنظيم العرض وفق محاور دليل الجامعة' },
  close: { en: 'Close', ar: 'إغلاق' },
  prev: { en: 'Prev', ar: 'السابق' },
  next: { en: 'Next', ar: 'التالي' },
  reduceMotion: { en: 'Reduce Motion', ar: 'تقليل الحركة' },
  jumpTo: { en: 'Slide', ar: 'شريحة' },
  shortcutsTitle: { en: 'Keyboard Shortcuts', ar: 'اختصارات لوحة المفاتيح' }
};

/* ============================================================
   21 SLIDES COMPLIANT WITH UST MIDTERM GUIDELINES & REVIEW NOTES
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
  () => `<div class="c-grid-2" style="align-items:stretch;">
    ${A(0, `
      <div class="uni-badge" style="margin-bottom:12px; align-self:stretch;">
        <div class="uni-emblem">🇾🇪 🎓</div>
        <div class="uni-info">
          <div class="uni-name">${tr('University of Science and Technology (UST)', 'جامعة العلوم والتكنولوجيا')}</div>
          <div class="uni-dept">${tr('Faculty of Computing & IT · Computer Science Dept · Cybersecurity & Networking', 'كلية الحاسبات وتكنولوجيا المعلومات · قسم علوم الحاسوب · الأمن السيبراني والشبكات')}</div>
        </div>
      </div>

      <div style="display:flex; align-items:center; gap:14px; margin-bottom:8px;">
        <div class="radar-visual" style="width:72px; height:72px; flex:none;">
          <div class="radar-ring r1" style="width:72px; height:72px;"></div>
          <div class="radar-ring r2" style="width:48px; height:48px;"></div>
          <div class="radar-sweep" style="width:72px; height:72px;"></div>
          <div class="radar-core" style="font-size:18px;">🛡️</div>
        </div>
        <div>
          <h1 style="font-size:40px; font-weight:900; line-height:1; color:var(--teal); letter-spacing:1px; margin:0;">YemScan</h1>
          <h3 style="font-size:15.5px; font-weight:700; color:#e2e8f0; margin-top:4px;">${tr('Yemeni Web Attack and Vulnerability Scanner', 'الماسح اليمني لفحص ثغرات وهجمات الويب')}</h3>
        </div>
      </div>

      <p class="c-card-p" style="font-size:14px; line-height:1.6; margin-bottom:12px;">
        ${tr('An integrated external black-box reconnaissance and security scanning platform combining multi-tool orchestration, security-reference enrichment, data encryption using AES-256-GCM with envelope encryption for key protection, and Gemini AI-assisted remediation analysis.',
             'منصة متكاملة ومؤتمتة لاستطلاع وفحص أمن تطبيقات الويب (Black-Box)، تجمع بين تنسيق الأدوات المتعددة، الإثراء المرجعي للثغرات، تشفير البيانات باستخدام AES-256-GCM وحماية مفاتيحها باستخدام تشفير المغلف، والتحليل المدعوم بذكاء Gemini.')}
      </p>

      <div class="pipeline-badge" style="margin-bottom:10px;">
        <span class="pb-tag">${tr('Pipeline', 'المسار')}</span>
        <div class="pb-steps">
          <span><b>01</b> Discover</span><i>→</i>
          <span><b>02</b> Scan</span><i>→</i>
          <span><b>03</b> Process</span><i>→</i>
          <span><b>04</b> Enrich</span><i>→</i>
          <span><b>05</b> Analyze</span><i>→</i>
          <span><b>06</b> Report</span>
        </div>
      </div>

      <div style="font-size:13.5px; color:var(--text-muted); display:flex; justify-content:space-between; border-top:1px solid rgba(255,255,255,0.08); padding-top:8px;">
        <div><b>${tr('Supervisor:', 'المشرف:')}</b> <span style="color:var(--violet); font-weight:800;">Dr. Aisha Al-Hadm</span></div>
        <div><b>${tr('Academic Year:', 'العام الجامعي:')}</b> <span style="color:#ffffff; font-weight:700;">2026 - 2027</span></div>
      </div>
    `, 'c-card')}

    ${A(1, `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:20px;">👥</span>
          <h3 class="c-card-h" style="color:var(--blue); font-size:18px; margin:0;">${tr('Research & Engineering Team', 'فريق البحث والتطوير')}</h3>
        </div>
        <span class="status-badge badge-sec" style="font-size:11.5px;">Cybersecurity & Networking</span>
      </div>

      <div class="c-col" style="gap:7px;">
        <div class="member"><span class="m-icon">👤</span><span class="m-name">Mohammed Saleh Hatem</span><span class="m-id">202310400368</span></div>
        <div class="member"><span class="m-icon">👤</span><span class="m-name">Nassar Ahmed Al-Fattahi</span><span class="m-id">202310400349</span></div>
        <div class="member"><span class="m-icon">👤</span><span class="m-name">Mohammed Abdulwahid Alrubaidi</span><span class="m-id">202310100273</span></div>
        <div class="member"><span class="m-icon">👤</span><span class="m-name">Younes Mohammed Alsarory</span><span class="m-id">202310102399</span></div>
        <div class="member"><span class="m-icon">👤</span><span class="m-name">Abdulmajid Abulkarim Anqa</span><span class="m-id">202310102081</span></div>
      </div>

      <div class="disclaimer-mini" style="margin-top:10px;">
        ⚠️ ${tr('Midterm Defense Presentation (Project 1) · All security workflows are simulated demonstrations · No active external scanning executed',
                 'عرض مناقشة مشروع تخرج (1) · جميع عمليات الفحص محاكاة تعليمية وتوضيحية للمسار المقترح · لا يتم استهداف أي أهداف حقيقية')}
      </div>
    `, 'c-card c-blue')}
  </div>`
);

// 2. Background / Context (الشريحة 2)
addSlide(
  ['Slide 02: Background', 'الشريحة 2: الخلفية والسياق'],
  ['External Attack Surface and Web Exposure', 'السياق العام: سطح الهجوم الخارجي وتوسع تعرض الويب'],
  ['Background', 'الخلفية'], 'tag-sec',
  ['Accelerated digital migration creates dynamic subdomains, APIs, and services prone to external threats.',
   'التوسع الرقمي المتسارع يفرز أصولاً رقمية ونطاقات وواجهات API معرضة للهجمات الخارجية.'],
  () => `<div class="c-grid-3">
    ${A(0, `<span class="c-card-ic">🌐</span>
      <h3 class="c-card-h">${tr('Dynamic Attack Surface', 'توسع سطح الهجوم الخارجي')}</h3>
      <p class="c-card-p">${tr('Organizations rely heavily on externally exposed subdomains, web services, and APIs to deliver public services, creating an evolving external perimeter that requires ongoing inventorying.',
        'تعتمد المؤسسات والشركات على نطاقات فرعية وخدمات ويب وواجهات API مكشوفة خارجياً، مما يشكل سطح هجوم ديناميكياً يتطلب حصراً ومتابعة مستمرة.')}</p>`, 'c-card')}

    ${A(1, `<span class="c-card-ic">🎯</span>
      <h3 class="c-card-h">${tr('External Black-Box Testing', 'منهج الفحص الصندوق الأسود')}</h3>
      <p class="c-card-p">${tr('External security scanning examines accessible interfaces without source code access, mimicking true adversary perspectives to identify exposed assets and security misconfigurations.',
        'فحص المنظومة من الخارج بنهج الصندوق الأسود ودون الحاجة للكود المصدري يحاكي زاوية المهاجم الفعلي لاكتشاف الأصول المكشوفة واكتشاف أخطاء الإعدادات الأمنية.')}</p>`, 'c-card c-blue')}

    ${A(2, `<span class="c-card-ic">📊</span>
      <h3 class="c-card-h">${tr('Verizon DBIR 2025 Reality', 'واقع تقرير الاختراقات DBIR 2025')}</h3>
      <p class="c-card-p">${tr('Vulnerability exploitation accounted for 20% of analyzed initial breach access vectors (+34% increase relative to prior report).',
        'شكل استغلال الثغرات مدخل الوصول الأولي في 20% من حوادث الاختراق المحللة، بزيادة بلغت 34% مقارنة بالتقرير السابق.')}</p>
      <div class="stat-box">
        <div class="stat-num">20%</div>
        <div class="stat-txt"><b>${tr('Initial Access Vector', 'مدخل الاختراق الأولي')}</b><br>${tr('+34% Year-over-Year', '+34% زيادة سنوية')}</div>
      </div>
      <div style="font-size:11.5px; color:var(--text-dim); margin-top:6px;">
        * ${tr('Source: Verizon DBIR 2025 (concerns analyzed breach sample rather than all web attacks).', 'المصدر: تقرير DBIR 2025 (يخص عينة الاختراقات المحللة في التقرير ولا يعمم على كافة الهجمات).')}
      </div>`, 'c-card c-violet')}
  </div>`
);

// 3. Problem Statement (الشريحة 3)
addSlide(
  ['Slide 03: Problem Statement', 'الشريحة 3: صياغة المشكلة'],
  ['Problem Statement: Fragmented Scanning and Result Interpretation', 'صياغة المشكلة: تشتت الفحص وتحديات تفسير المخرجات'],
  ['Problem Statement', 'صياغة المشكلة'], 'tag-prop',
  ['Addresses tool fragmentation, heterogeneous outputs, and limited analytical context for remediation.',
   'معالجة تشتت أدوات الفحص، تباين المخرجات، ومحدودية السياق التحليلي لإرشاد المعالجة.'],
  () => `<div style="display:flex; flex-direction:column; gap:12px; width:100%;">
    ${A(0, `
      <div style="background:rgba(20,184,166,0.08); border:1px solid rgba(20,184,166,0.3); border-radius:12px; padding:12px 18px; font-size:15px; line-height:1.55; color:#f1f5f9; display:flex; align-items:center; gap:12px;">
        <span style="font-size:20px; flex-shrink:0;">💡</span>
        <span>${tr('“YemScan addresses the fragmented coordination of multiple security tools, heterogeneous scanning outputs, and the effort required to interpret findings and prepare actionable reports.”',
                  '“تعالج منصة YemScan تشتت التنسيق بين أدوات الأمان المتعددة، وتباين مخرجات الفحص، والجهد المطلوب لتفسير النتائج وإعداد تقارير قابلة للتنفيذ.”')}</span>
      </div>
    `)}

    <div class="c-grid-3">
      ${A(1, `
        <span class="c-card-ic">⚙️</span>
        <h3 class="c-card-h" style="font-size:18px;">${tr('1. Fragmented Tool Coordination', '1. تشتت تنسيق الأدوات')}</h3>
        <p class="c-card-p" style="font-size:14.5px; line-height:1.55;">${tr('“Operating several discovery and security scanning tools separately requires manual coordination and repeated transfer of outputs between tools.”',
          '“تشغيل عدة أدوات للاستكشاف والفحص الأمني بشكل منفصل يتطلب تنسيقاً يدوياً ونقلاً متكرراً للمخرجات بين الأدوات.”')}</p>
        <div class="stat-box" style="border-color:rgba(245,158,11,0.25); background:rgba(245,158,11,0.06); padding:8px 12px; margin-top:12px;">
          <span style="font-size:13px; color:var(--amber);"><b>${tr('Challenge:', 'التحدي:')}</b> ${tr('Manual data piping & operational fragmentation.', 'تشتت مسارات العمل واستهلاك الجهد اليدوي.')}</span>
        </div>
      `, 'c-card')}

      ${A(2, `
        <span class="c-card-ic">📑</span>
        <h3 class="c-card-h" style="font-size:18px;">${tr('2. Heterogeneous Scanning Outputs', '2. تباين مخرجات الفحص')}</h3>
        <p class="c-card-p" style="font-size:14.5px; line-height:1.55;">${tr('“Different tools produce outputs with different formats, structures, and levels of detail, which complicates their collection and comparison.”',
          '“تنتج الأدوات المختلفة مخرجات بصيغ وهياكل ومستويات تفصيل متباينة، مما يعقّد تجميعها والمقارنة بينها.”')}</p>
        <div class="stat-box" style="border-color:rgba(56,189,248,0.25); background:rgba(56,189,248,0.06); padding:8px 12px; margin-top:12px;">
          <span style="font-size:13px; color:var(--blue);"><b>${tr('Challenge:', 'التحدي:')}</b> ${tr('Inconsistent schemas & consolidation obstacles.', 'صعوبة دمج النتائج ومقارنتها دون توحيد.')}</span>
        </div>
      `, 'c-card c-blue')}

      ${A(3, `
        <span class="c-card-ic">⚠️</span>
        <h3 class="c-card-h" style="font-size:18px;">${tr('3. Limited Analytical Context', '3. محدودية السياق التحليلي')}</h3>
        <p class="c-card-p" style="font-size:14.5px; line-height:1.55;">${tr('“Raw technical outputs may be difficult to interpret and may not provide sufficient context for prioritizing remediation activities.”',
          '“قد يصعب تفسير المخرجات التقنية الخام، وقد لا توفر سياقاً كافياً لتحديد أولويات المعالجة والإصلاح.”')}</p>
        <div class="stat-box" style="border-color:rgba(244,63,94,0.25); background:rgba(244,63,94,0.06); padding:8px 12px; margin-top:12px;">
          <span style="font-size:13px; color:var(--red);"><b>${tr('Challenge:', 'التحدي:')}</b> ${tr('Lack of actionable remediation prioritization.', 'صعوبة ترتيب أولويات المعالجة واتخاذ القرارات.')}</span>
        </div>
      `, 'c-card c-red')}
    </div>
  </div>`
);

// 4. Motivation / Significance (الشريحة 4)
addSlide(
  ['Slide 04: Project Significance', 'الشريحة 4: أهمية المشروع'],
  ['Project Significance', 'أهمية المشروع'],
  ['Significance', 'الأهمية والدافع'], 'tag-sec',
  ['Unified and structured approach to assessing externally exposed web assets and services.',
   'نهج موحد ومهيكل لتقييم أصول وخدمات الويب المكشوفة خارجياً ضمن نطاق مصرح به.'],
  () => `<div style="display:flex; flex-direction:column; gap:12px; width:100%;">
    ${A(0, `
      <div style="background:rgba(56,189,248,0.08); border:1px solid rgba(56,189,248,0.3); border-radius:12px; padding:12px 18px; font-size:15px; line-height:1.55; color:#f1f5f9; display:flex; align-items:center; gap:12px;">
        <span style="font-size:20px; flex-shrink:0;">🎯</span>
        <span>${tr('“YemScan is significant because it provides a unified and structured approach to assessing externally exposed web assets and services within a defined and authorized scope.”',
                  '“تكمن أهمية YemScan في توفير نهج موحد ومهيكل لتقييم أصول وخدمات الويب المكشوفة خارجياً ضمن نطاق محدد ومصرح به.”')}</span>
      </div>
    `)}

    <div class="c-grid-4">
      ${A(1, `
        <span class="c-card-ic">🛡️</span>
        <h3 class="c-card-h" style="font-size:17px;">${tr('1. Security Significance', '1. الأهمية الأمنية')}</h3>
        <p class="c-card-p" style="font-size:14px; line-height:1.5;">${tr('“Improves visibility of externally exposed assets, services, ports, subdomains, and relevant API paths.”',
          '“تحسين الرؤية الشاملة للأصول والخدمات والمنافذ والنطاقات الفرعية ومسارات واجهات البرمجة (APIs) المكشوفة خارجياً.”')}</p>
      `, 'c-card')}

      ${A(2, `
        <span class="c-card-ic">⚙️</span>
        <h3 class="c-card-h" style="font-size:17px;">${tr('2. Technical Significance', '2. الأهمية التقنية')}</h3>
        <p class="c-card-p" style="font-size:14px; line-height:1.5;">${tr('“Integrates multiple open-source tools within an organized external black-box scanning workflow.”',
          '“دمج وتنسيق أدوات مفتوحة المصدر متعددة ضمن سير عمل منظم لفحص الصندوق الأسود الخارجي.”')}</p>
      `, 'c-card c-blue')}

      ${A(3, `
        <span class="c-card-ic">🔬</span>
        <h3 class="c-card-h" style="font-size:17px;">${tr('3. Research Significance', '3. الأهمية البحثية')}</h3>
        <p class="c-card-p" style="font-size:14px; line-height:1.5;">${tr('“Supports the processing, enrichment, interpretation, and prioritization of security findings using structured data and AI-assisted analysis.”',
          '“دعم معالجة وإثراء وتفسير وتحديد أولويات النتائج الأمنية باستخدام البيانات المهيكلة والتحليل المعزز بالذكاء الاصطناعي.”')}</p>
      `, 'c-card c-violet')}

      ${A(4, `
        <span class="c-card-ic">📋</span>
        <h3 class="c-card-h" style="font-size:17px;">${tr('4. Practical Significance', '4. الأهمية التطبيقية')}</h3>
        <p class="c-card-p" style="font-size:14px; line-height:1.5;">${tr('“Helps reduce the effort required to operate separate tools and supports the preparation of Executive and Technical Reports.”',
          '“المساعدة في تقليص الجهد المبذول لتشغيل الأدوات المنفصلة ودعم إعداد التقارير التنفيذية والفنية.”')}</p>
      `, 'c-card c-amber')}
    </div>

    ${A(5, `
      <div style="background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:8px 16px; font-size:13.5px; color:#cbd5e1; display:flex; align-items:center; gap:10px;">
        <span style="font-size:16px; color:var(--teal);">🔒</span>
        <span><b>${tr('Proposed Protection Control:', 'ضوابط الحماية المقترحة:')}</b> ${tr('AES-256-GCM authenticated encryption is designed to protect sensitive scanning data and reports at rest (decrypted only during authorized access).',
          'تم تصميم النظام لحماية بيانات الفحص والتقارير الحساسة أثناء التخزين (Data at Rest) باستخدام التشفير الموثق AES-256-GCM (ويتم فك التشفير فقط أثناء الوصول المصرح به).')}</span>
      </div>
    `)}
  </div>`
);

// 5. Objectives (الشريحة 5)
addSlide(
  ['Slide 05: Objectives', 'الشريحة 5: أهداف المشروع'],
  ['Main & Specific Project Objectives', 'الهدف العام والأهداف التشغيلية التفصيلية للمشروع'],
  ['Objectives', 'الأهداف'], 'tag-prop',
  ['One primary goal supported by six measurable operational objectives; reference associations depend on available evidence.',
   'هدف رئيسي واحد مدعوم بستة أهداف تشغيلية محددة؛ ربط المراجع القياسية مشروط بوجود أدلة ومراجع مناسبة.'],
  () => `<div class="c-grid-2">
    ${A(0, `<h3 class="c-card-h" style="color:var(--teal); font-size:20px;">🎯 ${tr('Primary Project Objective', 'الهدف العام للمشروع')}</h3>
      <p class="c-card-p" style="font-size:15px; line-height:1.65; margin-bottom:12px;">${tr('To design and build the YemScan platform for discovering and inventorying externally exposed digital assets and services, conducting black-box security scans, and processing, enriching, and analyzing results in a structured manner to support remediation recommendations and dual-tier reports.',
        'تطوير منصة YemScan لاكتشاف وحصر الأصول والخدمات الرقمية المكشوفة خارجياً، وإجراء الفحوصات الأمنية بنهج الصندوق الأسود، ومعالجة وإثراء وتحليل النتائج بأسلوب مهيكل لدعم تقديم التوصيات وإنتاج التقارير التنفيذية والفنية.')}</p>
      <div class="stat-box">
        <span style="font-size:24px;">🔐</span>
         <div class="stat-txt"><b>${tr('Security by Design:', 'الأمان كمعيار تصميمي:')}</b> ${tr('Data encryption using AES-256-GCM, with envelope encryption for key protection, for stored telemetry and reports at rest.', 'تشفير البيانات باستخدام AES-256-GCM، وحماية مفاتيحها باستخدام تشفير المغلف، لحماية السجلات والتقارير أثناء التخزين (Data at Rest).')}</div>
      </div>`, 'c-card')}

    ${A(1, `<h3 class="c-card-h" style="color:var(--blue); font-size:20px;">📋 ${tr('Specific Operational Objectives', 'الأهداف التشغيلية التفصيلية')}</h3>
      <ul class="c-card-list" style="font-size:14px; line-height:1.65;">
        <li><b>1. ${tr('Asset & Service Discovery:', 'اكتشاف الأصول والخدمات:')}</b> ${tr('Discover and inventory external assets, ports, and services.', 'حصر النطاقات والمنافذ والخدمات وواجهات API.')}</li>
        <li><b>2. ${tr('Black-Box Scanning Execution:', 'تنفيذ الفحص الخارجي:')}</b> ${tr('Coordinate sequential and independent black-box scans.', 'تنسيق الفحص بنمطي التشغيل المتسلسل والمستقل.')}</li>
        <li><b>3. ${tr('Normalization & Reference Enrichment:', 'التوحيد والإثراء المرجعي:')}</b> ${tr('Normalize findings and associate supported security references (CVE, CWE, CVSS, OWASP) using defined matching criteria.', 'توحيد المخرجات وربط المراجع القياسية (CVE/CWE/CVSS/OWASP) وفق معايير مطابقة محددة عند توفرها.')}</li>
        <li><b>4. ${tr('AI Remediation Guidance:', 'التحليل الذكي والإرشاد:')}</b> ${tr('Use AI to explain findings and suggest remediation priorities.', 'توظيف الذكاء لتفسير النتائج واقتراح أولويات المعالجة.')}</li>
        <li><b>5. ${tr('Centralized Dashboard & Access Control:', 'لوحة التحكم والوصول الآمن:')}</b> ${tr('Provide a centralized web dashboard for managing scans and viewing findings and reports, with role-based access control and protected storage.', 'توفير لوحة تحكم ويب مركزية لإدارة الفحوصات واستعراض النتائج والتقارير، مع التحكم في الوصول المبني على الأدوار والتخزين المحمي.')}</li>
        <li><b>6. ${tr('Dual-Tier Report Generation:', 'توليد التقارير:')}</b> ${tr('Generate encrypted executive and technical reports.', 'إنتاج تقارير تنفيذية وفنية مشفرة ومؤتمتة.')}</li>
      </ul>`, 'c-card c-blue')}
  </div>`
);

// 6. Project Scope & Delimitations (الشريحة 6)
addSlide(
  ['Slide 06: Scope & Delimitations', 'الشريحة 6: النطاق والمحددات'],
  ['Project Scope and Delimitations', 'نطاق المشروع ومحدداته'],
  ['Scope Boundaries', 'حدود النطاق'], 'tag-sec',
  ['Authorized external black-box scanning only; clear technical and operational boundaries defined.',
   'الفحص الخارجي المصرح به بنهج الصندوق الأسود فقط؛ مع تحديد حدود تقنية وتشغيلية صارمة.'],
  () => `<div style="display:flex; flex-direction:column; gap:10px; width:100%;">
    ${A(0, `
      <div style="background:rgba(20,184,166,0.08); border:1px solid rgba(20,184,166,0.3); border-radius:10px; padding:9px 16px; font-size:14.5px; line-height:1.5; color:#f1f5f9; display:flex; align-items:center; gap:10px;">
        <span style="font-size:18px; color:var(--teal); flex-shrink:0;">🎯</span>
        <span>${tr('“YemScan focuses on authorized external black-box scanning of web assets and services.”',
                  '“يركز مشروع YemScan على الفحص الخارجي بنهج الصندوق الأسود والمصرح به لأصول وخدمات الويب.”')}</span>
      </div>
    `)}

    <div class="c-grid-2">
      ${A(1, `
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
          <span style="color:var(--teal); font-size:18px; font-weight:900;">✔</span>
          <h3 class="c-card-h" style="color:var(--teal); font-size:17.5px; margin:0;">${tr('In Scope (Covered in YemScan)', 'داخل نطاق العمل (In-Scope)')}</h3>
        </div>
        <ul class="c-card-list" style="font-size:13.5px; line-height:1.55; margin-top:4px;">
          <li><b>${tr('External Web Assets:', 'أصول الويب المصرح بها:')}</b> ${tr('Subdomains, accessible IPs, open ports, live HTTP/HTTPS services, and relevant API paths within authorized scope.', 'النطاقات الفرعية، عناوين IP، المنافذ المفتوحة، خدمات الويب، ومسارات API المصرح بها.')}</li>
          <li><b>${tr('Supported Tools (6 Only):', 'الأدوات الست المعتمدة فقط:')}</b> <code>Subfinder</code>, <code>Naabu</code>, <code>httpx</code>, <code>Kiterunner</code>, <code>Nuclei</code>, <code>Wapiti</code>.</li>
          <li><b>${tr('Scanning Approach:', 'نهج الفحص الخارجي:')}</b> ${tr('External black-box scanning without requiring source code or internal network access.', 'فحص الصندوق الأسود الخارجي دون الحاجة لكود مصدري أو وصول داخلي.')}</li>
          <li><b>${tr('Execution Modes:', 'أنماط التشغيل:')}</b> ${tr('Sequential scanning with automated data handover between stages, and independent scanning for individual tools.', 'فحص متسلسل بتمرير آلي للمخرجات أو فحص مستقل لكل أداة منفردة.')}</li>
          <li><b>${tr('Main Outputs:', 'المخرجات الأساسية:')}</b> ${tr('Structured Executive and Technical Reports.', 'تقارير تنفيذية وفنية (Executive & Technical Reports) مهيكلة.')}</li>
          <li><b>${tr('Processing & Analysis:', 'المعالجة والتحليل:')}</b> ${tr('Rule-based processing (deduplication, normalization, references) based on defined matching criteria, followed by AI-assisted analysis.', 'معالجة قائمة على القواعد (توحيد وإلغاء تكرار وربط مراجع) وفق معايير مطابقة محددة، متبوعة بتحليل معزز بالذكاء.')}</li>
          <li><b>${tr('Proposed Protection Controls:', 'ضوابط الحماية المصممة:')}</b> ${tr('Scope validation, RBAC, Docker isolation, HTTPS, password hashing, and AES-256-GCM data at rest.', 'التحقق من النطاق، RBAC، عزل Docker، تأمين HTTPS، وتشفير AES-256-GCM للبيانات المخزنة.')}</li>
        </ul>
      `, 'c-card')}

      ${A(2, `
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
          <span style="color:var(--red); font-size:18px; font-weight:900;">✖</span>
          <h3 class="c-card-h" style="color:var(--red); font-size:17.5px; margin:0;">${tr('Out of Scope (Delimitations)', 'خارج نطاق العمل والمحددات')}</h3>
        </div>
        <ul class="c-card-list" style="font-size:13.5px; line-height:1.55; margin-top:4px;">
          <li><b>${tr('Internal Network Scanning:', 'الشبكات والأنظمة الداخلية:')}</b> ${tr('Does not scan internal LAN/VLANs, local endpoints, or internal host configurations.', 'استبعاد فحص الشبكات الداخلية، الأجهزة المحلية، وإعدادات الأنظمة.')}</li>
          <li><b>${tr('Source Code Analysis:', 'الفحص المصدري:')}</b> ${tr('Excludes static code analysis (SAST) and white-box/gray-box testing.', 'استبعاد الفحص المصدري (White-Box / SAST) كلياً.')}</li>
          <li><b>${tr('Active Exploitation:', 'الاستغلال الهجومي الفعلي:')}</b> ${tr('No penetration, database dumping, destructive payloads, or Denial of Service (DoS/DDoS).', 'لا استغلال هجومي، لا سحب قواعد بيانات، ولا هجمات حجب خدمة.')}</li>
          <li><b>${tr('Social Engineering & Brute-Force:', 'الهندسة الاجتماعية والتخمين:')}</b> ${tr('Excludes phishing, social engineering, credential stuffing, and password cracking.', 'استبعاد هجمات التصيد وتخمين كلمات المرور كلياً.')}</li>
          <li><b>${tr('Protection Bypass Mechanisms:', 'تجاوز أنظمة الحماية:')}</b> ${tr('Does not attempt evasion of WAF, CAPTCHA, or anti-DDoS shields.', 'لا يسعى لتجاوز جدران الحماية WAF أو أنظمة الكابتشا أو مضادات DDoS.')}</li>
          <li><b>${tr('Targets Outside Scope:', 'الأهداف غير المصرح بها:')}</b> ${tr('Scanning targets outside the defined and authorized scope is strictly excluded.', 'حظر تام لفحص أي هدف خارج النطاق المصرح به قانونياً وتقنياً.')}</li>
          <li><b>${tr('Remediation & Ticketing:', 'إدارة التذاكر والإصلاح:')}</b> ${tr('Excludes vulnerability lifecycle tracking, patch management, and developer ticketing.', 'لا يشمل تتبع دورة معالجة الثغرات أو إدارة التذاكر للمطورين.')}</li>
          <li><b>${tr('Other Scanners:', 'أدوات الفحص الأخرى:')}</b> ${tr('No scanner tools supported beyond the six explicitly listed.', 'لا يدعم أدوات فحص أخرى غير الأدوات الست المحددة.')}</li>
        </ul>
        <div style="font-size:12.5px; color:var(--amber); margin-top:6px; border-top:1px dashed rgba(245,158,11,0.25); padding-top:5px;">
          ⚠️ ${tr('Delimitation Note: Any tools not explicitly listed above are outside the current project scope.', 'ملاحظة محددات: أي أدوات لم تُذكر صراحة أعلاه تقع خارج نطاق المشروع الحالي.')}
        </div>
      `, 'c-card c-red')}
    </div>
  </div>`
);

// 7. Existing Systems / Related Work (الشريحة 7)
addSlide(
  ['Slide 07: Related Systems & Tools', 'الشريحة 7: الأنظمة والأدوات ذات الصلة'],
  ['Related Systems and Tools', 'الأنظمة والأدوات ذات الصلة'],
  ['Related Systems & Tools', 'الأنظمة والأدوات ذات الصلة'], 'tag-sec',
  ['Table 2.2: Criterion-based comparison of reviewed systems with the proposed YemScan platform.',
   'جدول 2.2: مقارنة معيارية بين الأنظمة والأدوات المراجعة ومنصة YemScan المقترحة.'],
  () => {
    const headers = [
      tr('Comparison Criterion', 'معيار المقارنة'),
      'Nuclei',
      'Wapiti',
      'reNgine',
      'FortiScan',
      tr('YemScan (Proposed)', 'YemScan (مقترح)')
    ];

    const rows = [
      [
        tr('Centralized web dashboard for managing scans', 'لوحة تحكم ويب مركزية لإدارة الفحوصات'),
        '❌', '❌', '✅', '✅', '✅', false
      ],
      [
        tr('Integrated subdomain and open-port discovery', 'استكشاف مدمج للنطاقات الفرعية والمنافذ المفتوحة'),
        '❌', '❌', '✅', '❌', '✅', false
      ],
      [
        tr('Coordination of multiple discovery and scanning tools', 'تنسيق أدوات استكشاف وفحص أمني متعددة'),
        '❌', '❌', '✅', '❌', '✅', false
      ],
      [
        tr('AI-assisted interpretation of security findings', 'تفسير النتائج الأمنية بمساعدة الذكاء الاصطناعي'),
        '❌', '❌', '✅', '✅', '✅', false
      ],
      [
        tr('Generation of scan outputs or reports', 'توليد مخرجات الفحص أو التقارير'),
        '✅', '✅', '✅', '✅', '✅', false
      ],
      [
        tr('Explicit security-reference enrichment of consolidated findings before AI analysis', 'إثراء صريح للنتائج الموحدة بالمراجع القياسية قبل تحليل الذكاء'),
        '❌', '❌', '❌', '❌', '✅', true
      ]
    ];

    return `<div style="display:flex; flex-direction:column; gap:9px; width:100%;">
      <div style="font-size:14.5px; font-weight:700; color:var(--teal); margin-bottom:-2px;">
        ${tr('Table 2.2: Comparison of Related Systems and Tools with the Proposed YemScan Platform', 'جدول 2.2: مقارنة الأنظمة والأدوات ذات الصلة مع منصة YemScan المقترحة')}
      </div>

      ${A(0, `
        <div style="overflow-x:auto;">
          <table class="comp-table" style="font-size:13.5px;">
            <thead>
              <tr>
                <th style="width:40%;">${headers[0]}</th>
                <th class="center" style="width:11%;">${headers[1]}</th>
                <th class="center" style="width:11%;">${headers[2]}</th>
                <th class="center" style="width:11%;">${headers[3]}</th>
                <th class="center" style="width:11%;">${headers[4]}</th>
                <th class="center" style="width:16%; color:var(--teal); background:rgba(45,212,191,0.18); border-left:1px solid rgba(45,212,191,0.3); border-right:1px solid rgba(45,212,191,0.3);">${headers[5]}</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(r => `
                <tr class="${r[6] ? 'highlight' : ''}" style="${r[6] ? 'background:rgba(45,212,191,0.12);' : ''}">
                  <td style="font-weight:${r[6] ? '800' : '600'}; color:${r[6] ? 'var(--teal)' : '#e2e8f0'}; padding:6px 10px;">
                    ${r[6] ? '⭐ ' : ''}${r[0]}
                  </td>
                  <td class="center" style="font-size:14px; padding:6px 4px;">${r[1]}</td>
                  <td class="center" style="font-size:14px; padding:6px 4px;">${r[2]}</td>
                  <td class="center" style="font-size:14px; padding:6px 4px;">${r[3]}</td>
                  <td class="center" style="font-size:14px; padding:6px 4px;">${r[4]}</td>
                  <td class="center" style="font-size:15px; font-weight:800; background:rgba(45,212,191,0.06); border-left:1px solid rgba(45,212,191,0.2); border-right:1px solid rgba(45,212,191,0.2); color:var(--teal); padding:6px 4px;">${r[5]}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `)}

      ${A(1, `
        <div style="display:flex; flex-direction:column; gap:5px; background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.08); border-radius:10px; padding:8px 14px; font-size:13px; line-height:1.5; color:var(--text-muted);">
          <div>
            <b>${tr('Note:', 'ملاحظة:')}</b>
            ${tr(' (✅) indicates the criterion is documented for a reviewed system or proposed for YemScan; (❌) indicates the complete criterion as defined is not documented in the reviewed source (does not mean the system lacks every related capability). Nuclei and Wapiti are compared as standalone open-source scanners.',
                 ' تشير (✅) إلى أن المعيار موثق في النظام المراجع أو مقترح لمنصة YemScan؛ بينما تشير (❌) إلى أن المعيار بصيغته المحددة غير موثق في المصدر المراجع (ولا يعني بالضرورة انعدام كافة القدرات ذات الصلة). قورن Nuclei وWapiti كأداتي فحص مستقلتين مفتوحتي المصدر.')}
          </div>
          <div style="color:#cbd5e1; border-top:1px dashed rgba(255,255,255,0.08); padding-top:4px;">
            <b style="color:var(--teal);">${tr('Key Takeaway:', 'الاستنتاج الرئيسي:')}</b>
            ${tr('reNgine already supports several shared capabilities (discovery, tool integration, LLMs, reporting). The principal distinction represented in this table is YemScan\'s proposed stage for enriching consolidated findings with relevant security references (CVE, CWE, CVSS, OWASP) before AI-assisted interpretation (subject to verification during testing).',
                 'يدعم reNgine قدرات مشتركة عدة (الاستكشاف، دمج الأدوات، ميزات الذكاء، التقارير). ويتمثل التميز التصميمي لـ YemScan في مرحلة إثراء النتائج الموحدة بالمراجع القياسية المعتمدة (CVE/CWE/CVSS/OWASP) قبل التحليل بالذكاء الاصطناعي (يخضع للتحقق أثناء الاختبار).')}
          </div>
          <div style="font-size:11.5px; color:var(--text-dim); border-top:1px dashed rgba(255,255,255,0.08); padding-top:4px; margin-top:2px;">
            ${tr('FortiScan: unpublished graduation project (ref. per project bibliography). Verizon DBIR 2025 figures cited in Slide 2.',
                 'FortiScan: مشروع تخرج غير منشور (المرجع وفق قائمة مراجع المشروع). أرقام تقرير Verizon DBIR 2025 مُستشهد بها في الشريحة 2.')}
          </div>
        </div>
      `)}
    </div>`;
  }
);

// 8. Gap Analysis / Limitations (الشريحة 8)
addSlide(
  ['Slide 08: Technical Gap', 'الشريحة 8: الفجوة التقنية والبحثية'],
  ['Research and Technical Gap', 'الفجوة التقنية والبحثية'],
  ['Research Gap', 'الفجوة التقنية'], 'tag-prop',
  ['Addressing tool integration variance, output fragmentation, and lack of pre-AI reference enrichment.',
   'معالجة تباين نطاق الأدوات، تشتت المخرجات، وغياب مرحلة الإثراء المرجعي الصريح قبل الذكاء.'],
  () => `<div style="display:flex; flex-direction:column; gap:10px; width:100%;">
    ${A(0, `
      <div style="background:rgba(20,184,166,0.08); border:1px solid rgba(20,184,166,0.3); border-radius:10px; padding:8px 16px; font-size:14.5px; line-height:1.5; color:#f1f5f9; display:flex; align-items:center; gap:10px;">
        <span style="font-size:18px; color:var(--teal); flex-shrink:0;">🎯</span>
        <span>${tr('“Existing solutions differ in functional scope and integration level. Operating multiple tools separately increases scanning complexity, causing fragmented outputs and difficult unified analysis.”',
                  '“تتباين الحلول الحالية في نطاقها الوظيفي ومستوى التكامل؛ حيث يزيد تشغيل الأدوات بشكل منفصل من تعقيد العمليات وتشتت المخرجات وصعوبة تنظيمها وتحليلها بشكل موحد.”')}</span>
      </div>
    `)}

    <div class="c-grid-2">
      ${A(1, `
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
          <span style="font-size:18px; color:var(--teal);">🔄</span>
          <h3 class="c-card-h" style="font-size:17px; margin:0;">${tr('1. Unified Workflow & Dual Modes', '1. سير عمل موحد ونمطان للفحص')}</h3>
        </div>
        <p class="c-card-p" style="font-size:13.5px; line-height:1.55; margin-bottom:6px;">${tr('Integrates external asset & service discovery with multiple vulnerability scanners, supporting both Sequential Scanning (automated stage handover) and Independent Scanning in a unified external black-box workflow.',
          'دمج استكشاف الأصول والخدمات الرقمية مع أدوات فحص الثغرات المتعددة، مع دعم الفحص المتسلسل (تسليم آلي للمخرجات) والفحص المستقل ضمن سير عمل خارجي موحد بنهج الصندوق الأسود.')}</p>
        <div style="font-size:12px; color:var(--teal); background:rgba(45,212,191,0.08); padding:3px 8px; border-radius:6px; display:inline-block;">
          <b>${tr('Pillars:', 'الركائز:')}</b> ${tr('Discovery + Scanning integration · Sequential & Independent modes', 'دمج الاستكشاف والفحص · نمطا الفحص المتسلسل والمستقل')}
        </div>
      `, 'c-card')}

      ${A(2, `
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
          <span style="font-size:18px; color:var(--blue);">📑</span>
          <h3 class="c-card-h" style="font-size:17px; margin:0;">${tr('2. Consolidation & Provenance', '2. توحيد المخرجات وإثبات المصدر')}</h3>
        </div>
        <p class="c-card-p" style="font-size:13.5px; line-height:1.55; margin-bottom:6px;">${tr('Preserves raw tool outputs separately while normalizing and consolidating heterogeneous findings into structured records with full audit traceability back to source evidence.',
          'الاحتفاظ بالمخرجات الخام بشكل منفصل مع توحيد وإلغاء تكرار النتائج المتباينة ضمن سجلات مهيكلة تحتفظ بروابط التدقيق للأدلة ومصادر الفحص الأصلية.')}</p>
        <div style="font-size:12px; color:var(--blue); background:rgba(56,189,248,0.08); padding:3px 8px; border-radius:6px; display:inline-block;">
          <b>${tr('Pillars:', 'الركائز:')}</b> ${tr('Heterogeneous normalization · Raw output preservation & auditability', 'معالجة تباين الصيغ · حفظ المخرجات الخام وقابلية التدقيق')}
        </div>
      `, 'c-card c-blue')}

      ${A(3, `
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
          <span style="font-size:18px; color:var(--violet);">🏷️</span>
          <h3 class="c-card-h" style="font-size:17px; margin:0;">${tr('3. Pre-AI Reference Enrichment', '3. إثراء المراجع القياسية قبل الذكاء')}</h3>
        </div>
        <p class="c-card-p" style="font-size:13.5px; line-height:1.55; margin-bottom:6px;">${tr('When an appropriate match is available, associates consolidated findings with relevant CVE identifiers, CWE classifications, CVSS scores, and OWASP Top 10 categories prior to AI interpretation using defined matching criteria.',
          'ربط النتائج الموحدة بمعرّفات CVE وتصنيفات CWE ودرجات CVSS وفئات OWASP Top 10 عند توفر تطابق ملائم وفق معايير مطابقة محددة، وذلك قبل تقديمها للذكاء الاصطناعي.')}</p>
        <div style="font-size:12px; color:var(--violet); background:rgba(167,139,250,0.08); padding:3px 8px; border-radius:6px; display:inline-block;">
          <b>${tr('Pillars:', 'الركائز:')}</b> ${tr('Rule-based CVE/CWE/CVSS/OWASP association · Explicit pre-AI grounding', 'ربط المراجع القياسية بالقواعد · تثبيت المرجعية قبل الذكاء')}
        </div>
      `, 'c-card c-violet')}

      ${A(4, `
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
          <span style="font-size:18px; color:var(--amber);">🧠</span>
          <h3 class="c-card-h" style="font-size:17px; margin:0;">${tr('4. AI Guidance & Dual Reports', '4. التفسير بالذكاء والتقارير التنفيذية/الفنية')}</h3>
        </div>
        <p class="c-card-p" style="font-size:13.5px; line-height:1.55; margin-bottom:6px;">${tr('Employs AI strictly as a supporting explanatory layer to interpret findings, assist remediation prioritization, and generate structured Executive and Technical Reports.',
          'توظيف الذكاء الاصطناعي كطبقة مساعدة فقط لتفسير النتائج واقتراح أولويات المعالجة ودعم إعداد التقارير التنفيذية والفنية المهيكلة (المحمية أثناء التخزين).')}</p>
        <div style="font-size:12px; color:var(--amber); background:rgba(245,158,11,0.08); padding:3px 8px; border-radius:6px; display:inline-block;">
          <b>${tr('Pillars:', 'الركائز:')}</b> ${tr('AI-assisted remediation context · Executive & Technical Reports', 'إرشاد وتفسير مدعوم بالذكاء · تقارير تنفيذية وفنية')}
        </div>
      `, 'c-card c-amber')}
    </div>

    ${A(5, `
      <div style="background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:6px 14px; font-size:13px; color:#cbd5e1; display:flex; align-items:center; gap:8px;">
        <span style="font-size:14px; color:var(--teal);">🔬</span>
        <span><b>${tr('Academic Verification Note:', 'ملاحظة التحقق الأكاديمي:')}</b> ${tr('These proposed functions represent a design-specific solution to the identified gap; their implementation and effectiveness will be verified during testing.',
          'تمثل هذه الوظائف حلاً تصميمياً للفجوة المحددة؛ وستخضع جميع هذه الميزات المقترحة للتحقق والتقييم التجريبي أثناء مرحلة التنفيذ والاختبار.')}</span>
      </div>
    `)}
  </div>`
);

// 9. Proposed Solution & Workflow (الشريحة 9)
addSlide(
  ['Slide 09: Proposed Workflow', 'الشريحة 9: الحل وسير العمل المقترح'],
  ['Proposed Scanning & Analysis Workflow (Figure 3.3)', 'سير عمل الفحص والتحليل المقترح للمنصة (مخطط 3.3)'],
  ['Workflow Flow', 'سير العمل'], 'tag-demo',
  ['Figure 3.3: Dual-mode workflow (Sequential vs Independent), secure storage, and pre-AI reference enrichment.',
   'مخطط 3.3: مسار الفحص بنمطيه المتسلسل والمستقل، التخزين المشفر، وإثراء المراجع القياسية قبل الذكاء.'],
  () => `<div style="display:grid; grid-template-columns: 370px 1fr; gap:16px; width:100%; align-items:stretch;">
    ${A(0, `
      <div class="diag-card" onclick="openImgModal('./assets/workflow-diagram.png', 'Figure 3.3: YemScan | Proposed Scanning and Analysis Workflow')" title="${tr('Click to view full-screen diagram', 'انقر لتكبير المخطط بحجم الشاشة')}">
        <div class="diag-card-head">
          <span class="diag-badge">Figure 3.3</span>
          <span class="diag-hint">🔍 ${tr('Click to Enlarge', 'انقر للتكبير')}</span>
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
        <div style="background:rgba(20,184,166,0.08); border:1px solid rgba(20,184,166,0.3); border-radius:10px; padding:7px 14px; font-size:13.5px; color:#f1f5f9; display:flex; align-items:center; gap:8px;">
          <span style="color:var(--teal); font-size:16px;">🔄</span>
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

// 10. System Overview / Architecture: 5 Layers (الشريحة 10)
addSlide(
  ['Slide 10: System Architecture', 'الشريحة 10: معمارية النظام والتقنيات'],
  ['5-Layer Modular Architecture & Protected Data Flow (Figure 3.1)', 'معمارية النظام ومخطط تدفق البيانات المحمية (مخطط 3.1)'],
  ['Architecture Flow', 'معمارية النظام'], 'tag-prop',
  ['Figure 3.1: 5-layer modular architecture decoupling presentation, backend orchestration, isolated execution, protected data management, and external AI service integration.',
   'مخطط 3.1: معمارية معيارية من 5 طبقات تفصل العرض، التطبيق، محرك الفحص المعزول، إدارة البيانات المحمية، والتكامل مع خدمة ذكاء اصطناعي خارجية.'],
  () => `<div style="display:grid; grid-template-columns: 460px 1fr; gap:16px; width:100%; align-items:stretch;">
    ${A(0, `
      <div class="diag-card" onclick="openImgModal('./assets/architecture-diagram.png', 'Figure 3.1: YemScan System Architecture and Protected Data Flow')" title="${tr('Click to view full-screen diagram', 'انقر لتكبير المخطط بحجم الشاشة')}">
        <div class="diag-card-head">
          <span class="diag-badge">Figure 3.1</span>
          <span class="diag-hint">🔍 ${tr('Click to Enlarge', 'انقر للتكبير')}</span>
        </div>
        <div class="diag-img-box">
          <img src="./assets/architecture-diagram.png" alt="Figure 3.1: YemScan System Architecture" class="diag-img">
        </div>
        <div style="font-size:12px; color:#475569; text-align:center; margin-top:4px; font-weight:700;">
          ${tr('Figure 3.1: System Architecture & Protected Data Flow', 'مخطط 3.1: معمارية النظام وتدفق البيانات المحمية')}
        </div>
      </div>
    `)}

    ${A(1, `
      <div style="display:flex; flex-direction:column; gap:7px; height:100%; justify-content:space-between;">
        <div class="arch-layer" style="padding:7px 12px; margin:0;">
          <div class="arch-layer-info" style="width:170px;">
            <span class="arch-layer-num">Layer 1</span>
            <div class="arch-layer-name" style="font-size:14px;">${tr('Presentation Layer', 'طبقة العرض والواجهة')}</div>
            <div class="arch-layer-tech">React & TypeScript <span class="badge-plan" style="font-size:11px; padding:2px 6px;">${tr('Planned', 'مخطط')}</span></div>
          </div>
          <div class="arch-boxes">
            <div class="arch-pill" style="font-size:13px; padding:5px 11px;">
              ${tr('Targets, scan selection, live dashboard, authorized report viewing via HTTPS.', 'إدخال الأهداف، اختيار نمط الفحص، لوحة المتابعة، وعرض التقارير عبر HTTPS.')}
            </div>
          </div>
        </div>

        <div class="arch-layer" style="padding:7px 12px; margin:0;">
          <div class="arch-layer-info" style="width:170px;">
            <span class="arch-layer-num">Layer 2</span>
            <div class="arch-layer-name" style="font-size:14px;">${tr('Application Layer', 'طبقة التطبيق والتنسيق')}</div>
            <div class="arch-layer-tech">FastAPI Backend</div>
          </div>
          <div class="arch-boxes">
            <div class="arch-pill blue" style="font-size:13px; padding:5px 11px;">
              ${tr('Authentication, RBAC, ownership checks, scan orchestration, coordinating external AI calls, validating responses, compiling reports.', 'المصادقة، إدارة الأدوار (RBAC)، فحص الملكية، تنسيق الفحص، تنسيق استدعاءات الذكاء الخارجية والتحقق من الردود وتجميع التقارير.')}
            </div>
          </div>
        </div>

        <div class="arch-layer" style="padding:7px 12px; margin:0;">
          <div class="arch-layer-info" style="width:170px;">
            <span class="arch-layer-num">Layer 3</span>
            <div class="arch-layer-name" style="font-size:14px;">${tr('Security Execution Engine', 'محرك الفحص والتنفيذ')}</div>
            <div class="arch-layer-tech">Docker Isolation</div>
          </div>
          <div class="arch-boxes">
            <div class="arch-pill violet" style="font-size:13px; padding:5px 11px;">
              ${tr('Subfinder, Naabu, httpx, Kiterunner, Nuclei, Wapiti (Sequential & Independent execution).', 'تشغيل معزول للأدوات الست: Subfinder وNaabu وhttpx وKiterunner وNuclei وWapiti.')}
            </div>
          </div>
        </div>

        <div class="arch-layer" style="padding:7px 12px; margin:0;">
          <div class="arch-layer-info" style="width:170px;">
            <span class="arch-layer-num">Layer 4</span>
            <div class="arch-layer-name" style="font-size:14px;">${tr('Data Management Layer', 'طبقة إدارة البيانات')}</div>
            <div class="arch-layer-tech">PostgreSQL & File System</div>
          </div>
          <div class="arch-boxes">
            <div class="arch-pill amber" style="font-size:13px; padding:5px 11px;">
              ${tr('Parsing, normalization, deduplication, reference enrichment. Encrypts analyses, reports, and raw data prior to storage via AES-256-GCM.', 'توحيد الصيغ، إلغاء التكرار، إثراء المراجع، وتشفير التحليلات والتقارير والبيانات الخام قبل التخزين بـ AES-256-GCM.')}
            </div>
          </div>
        </div>

        <div class="arch-layer" style="padding:7px 12px; margin:0;">
          <div class="arch-layer-info" style="width:170px;">
            <span class="arch-layer-num">Layer 5</span>
            <div class="arch-layer-name" style="font-size:14px;">${tr('External AI Service', 'خدمة الذكاء الاصطناعي الخارجية')}</div>
            <div class="arch-layer-tech">Gemini 3.8 Flash <span class="badge-plan" style="font-size:11px; padding:2px 6px;">${tr('Planned', 'مخطط')}</span></div>
          </div>
          <div class="arch-boxes">
            <div class="arch-pill" style="font-size:13px; padding:5px 11px;">
              ${tr('Authorized minimized findings via HTTPS; plain-language remediation; Executive & Technical Reports.', 'إرسال بيانات مقتضبة ومصرح بها؛ تفسير المعالجة؛ وتوليد التقارير التنفيذية والفنية.')}
            </div>
          </div>
        </div>

        <div style="background:rgba(15,23,42,0.75); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:6px 12px; font-size:13px; color:#cbd5e1; display:flex; align-items:center; gap:8px;">
          <span style="color:var(--teal); font-size:14px;">🔒</span>
          <span><b>${tr('Cross-Cutting Security Controls:', 'ضوابط الأمان العابرة للطبقات:')}</b> ${tr('Envelope encryption · Controlled key access · Temporary plaintext in memory · No persistent plaintext keys · Platform admin restricted at application level.', 'تشفير المغلف · وصول محكوم للمفاتيح · معالجة مؤقتة في الذاكرة دون حفظ مفاتيح صريحة · قيود مدير المنصة على مستوى التطبيق.')}</span>
        </div>
      </div>
    `)}
  </div>`
);

// 11. Development Methodology: Agile & Sprints (الشريحة 11)
addSlide(
  ['Slide 11: Development Methodology', 'الشريحة 11: منهجية التطوير الهندسية'],
  ['Iterative & Incremental Engineering Methodology (Agile)', 'منهجية التطوير: الهندسة التكرارية والتزايدية (منهجية Agile)'],
  ['Methodology', 'منهجية Agile'], 'tag-prop',
  ['Structured Agile engineering framework: task decomposition, 2-week sprint cadences, and technical Definition of Done.',
   'إطار هندسي لمنهجية Agile: تفكيك المتطلبات إلى مهام، دورات سبرنت من أسبوعين، وتعريف دقيق للإنجاز (DoD).'],
  () => `<div style="display:flex; flex-direction:column; gap:12px; width:100%;">
    <div class="c-grid-2">
      ${A(0, `
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
          <span style="font-size:20px; color:var(--teal);">🔄</span>
          <h3 class="c-card-h" style="color:var(--teal); font-size:18px; margin:0;">${tr('Iterative Engineering Lifecycle', 'مبادئ دورة التطوير التكرارية والتزايدية')}</h3>
        </div>
        <ul class="c-card-list" style="font-size:13.5px; line-height:1.6; margin-top:4px;">
          <li><b>${tr('Requirements Breakdown & Prioritization:', 'تفكيك المتطلبات وترتيب الأولويات:')}</b> ${tr('Decomposing functional and security specifications into structured engineering tasks and prioritizing the product backlog.', 'تفكيك المواصفات الوظيفية والأمنية إلى مهام هندسية محددة وترتيب أولويات قائمة متطلبات المنتج.')}</li>
          <li><b>${tr('Sprint Goal & 2-Week Cadences:', 'أهداف السبرنت والدورات المنتظمة (أسبوعان):')}</b> ${tr('Structuring development into phased 2-week iterations with clear technical goals and bounded scope.', 'تنظيم العمل في دورات زمنية مدتها أسبوعان ذات هدف تقني محدد ونطاق تسليم منضبط.')}</li>
          <li><b>${tr('Incremental Engineering & Review:', 'التطوير التزايدي والمراجعة المستمرة:')}</b> ${tr('Delivering testable components incrementally, verified through testing and supervisor review to adapt subsequent sprints.', 'تسليم زيادات برمجية قابلة للاختبار مع التحقق المستمر ومراجعة الإشراف لإعادة ضبط أولويات السبرنتات اللاحقة.')}</li>
        </ul>
        <div style="font-size:12.5px; color:var(--text-dim); margin-top:10px; border-top:1px dashed rgba(255,255,255,0.08); padding-top:6px;">
          📌 ${tr('Schedule Alignment: 10 planned sprints × 2 weeks = 20 work weeks across Projects (1) and (2) (submitted for supervisor review).', 'التوافق الزمني: 10 سبرنتات مخططة × أسبوعين = 20 أسبوع عمل موزعة على مشروعي (1) و (2) (خاضعة لمراجعة الإشراف).')}
        </div>
      `, 'c-card')}

      ${A(1, `
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
          <span style="font-size:20px; color:var(--blue);">📋</span>
          <h3 class="c-card-h" style="color:var(--blue); font-size:18px; margin:0;">${tr('Work Packages & Acceptance Framework', 'هيكلة حزم العمل وإطار القبول والتحقق')}</h3>
        </div>
        <div style="margin-bottom:8px;">
          <div style="font-size:12.5px; font-weight:700; color:var(--teal); text-transform:uppercase; margin-bottom:4px;">
            ${tr('Product Backlog Work Packages (7 Clusters):', 'حزم عمل قائمة متطلبات المنتج (7 حزم رئيسية):')}
          </div>
          <div style="font-size:12.5px; line-height:1.5; color:#cbd5e1; background:rgba(15,23,42,0.6); padding:6px 10px; border-radius:6px;">
            ${tr(
              '1. Core RBAC & Tenant Isolation · 2. Asynchronous Workers · 3. Reconnaissance Tools · 4. Vulnerability Scanners · 5. Schema Normalization & References · 6. AI Explanatory Pipeline · 7. Encrypted Reports',
              '1. الحسابات والصلاحيات وعزل بيانات المستخدمين · 2. المهام الخلفية والعامل المستقل · 3. اكتشاف الأصول والخدمات · 4. فحص الثغرات · 5. توحيد النتائج والإثراء المرجعي · 6. التحليل المساعد بالذكاء الاصطناعي · 7. التقارير المشفرة'
            )}
          </div>
        </div>
        <div>
          <div style="font-size:12.5px; font-weight:700; color:var(--green); text-transform:uppercase; margin-bottom:4px;">
            ${tr('Examples of Task-Specific Technical Acceptance Criteria:', '«أمثلة لمعايير القبول التقنية بحسب المهمة»:')}
          </div>
          <ul class="c-card-list" style="font-size:13px; line-height:1.55; margin-top:2px;">
            <li><b>${tr('Task Criteria:', 'معايير المهام:')}</b> ${tr('Specific functional criteria defined for individual tasks (examples below).', 'شروط تحقق وظيفية محددة لكل مهمة برمجية (أمثلة مختارة).')}</li>
            <li>✔ <b>${tr('Container Isolation Example:', 'مثال عزل الحاويات:')}</b> ${tr('Container isolation & execution stability verified.', 'عزل بيئة التنفيذ بحاويات Docker والتحقق من الاستقرار.')}</li>
            <li>✔ ${tr('Encryption Example: AES-256-GCM encryption with 128-bit authentication tag validated at rest.', 'مثال التشفير: التحقق من تشفير AES-256-GCM ووسم المصادقة 128 بت أثناء التخزين.')}</li>
            <li>✔ ${tr('Normalization Example: Schema normalization & audit provenance preserved without data loss.', 'مثال التوحيد: اكتمال توحيد الصيغ وحفظ روابط التدقيق للأدلة دون فقدان.')}</li>
          </ul>
        </div>
      `, 'c-card c-blue')}
    </div>

    <div style="background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:6px 14px; font-size:13px; color:#cbd5e1; display:flex; align-items:center; gap:8px;">
      <span style="font-size:14px; color:var(--teal);">💡</span>
      <span><b>${tr('Methodological Focus:', 'التركيز المنهجي:')}</b> ${tr('Agile application in YemScan focuses on systematic engineering progression, modular increments, and empirical verification.',
        'يركز تطبيق منهجية Agile في YemScan على التدرج الهندسي المنضبط، وتطوير زيادات برمجية معيارية قابلة للاختبار والتحقق العلمي.')}</span>
    </div>
  </div>`
);

// 12. First Three Sprints in Draft (الشريحة 12)
addSlide(
  ['Slide 12: Sprint Progress', 'الشريحة 12: التقدم حسب السبرنتات'],
  ['Sprint Progress: Baseline Sprints 1–3', 'التقدم حسب السبرنتات: إنجاز السبرنتات 1 إلى 3'],
  ['Draft Baseline', 'حالة السبرنتات'], 'tag-sec',
  ['Draft status: Sprints 1–3 are provisionally marked complete for presentation planning. Acceptance evidence is pending.',
   'حالة تحريرية مؤقتة: السبرنتات 1-3 مكتملة مبدئياً لأغراض إعداد العرض، وقبول التنفيذ قيد التحقق بالأدلة.'],
  () => {
    const sprints = [
      ['Sprint 1: Backend Foundation & Access Control', 'السبرنت 1: تأسيس الخدمات الخلفية والحسابات والصلاحيات', 'Provisionally Complete', 'badge-draft',
       'FastAPI setup, PostgreSQL migrations, account registration, password hashing, session expiry, role and ownership checks, and owner-linked draft scan records (no real scanning in this sprint).',
       'تهيئة بيئة FastAPI وترحيلات PostgreSQL، التسجيل والدخول، تجزئة كلمات المرور، انتهاء الجلسات، فحص الملكية، وسجلات تجريبية للمالك دون فحص فعلي.'],
      ['Sprint 2: Background Jobs & Encrypted Storage', 'السبرنت 2: العامل الخلفي والتشفير والتخزين', 'Provisionally Complete', 'badge-draft',
       'Independent worker execution with task status, cancellation, and recovery handling. Per-scan DEKs, key wrapping, and authenticated file/field encryption with mock tool validation.',
       'تنفيذ العامل الخلفي المستقل، تتبع الحالة والإلغاء والتعافي. تشفير المغلف بمفاتيح DEK لكل فحص، وتشفير موثق للملفات وقاعدة البيانات مع أداة تجريبية (Mock).'],
      ['Sprint 3: Asset and Service Discovery', 'السبرنت 3: اكتشاف الأصول والخدمات', 'Provisionally Complete', 'badge-draft',
       'Integrate Subfinder, Naabu, and httpx through a consistent tool interface. Normalize discovered domains, ports, and web services with provenance; enforce authorized scope. (Kiterunner, Nuclei, Wapiti not in this sprint).',
       'دمج Subfinder وNaabu وhttpx عبر واجهة موحدة للأدوات. توحيد النطاقات والمنافذ والخدمات مع إثبات المصدر وفرض النطاق المصرح به. (لم تشمل Kiterunner أو Nuclei أو Wapiti).']
    ];
    return `<div class="c-col" style="gap:10px;">
      ${sprints.map((s, idx) => A(idx, `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
          <b style="font-size:16px; color:var(--teal);">${tr(s[0], s[1])}</b>
          <span class="status-badge ${s[3]}">${tr(s[2], s[2] === 'Provisionally Complete' ? 'مكتمل مبدئيًا' : s[2])}</span>
        </div>
        <p class="c-card-p" style="font-size:13.5px; line-height:1.55;">${tr(s[4], s[5])}</p>`, 'c-card')).join('')}
      <div style="font-size:12.5px; color:var(--amber); text-align:center; margin-top:2px;">
        ⚠️ ${tr('Draft status for presentation preparation; operational acceptance evidence is pending and will be attached.',
                 'حالة مسودة تحريرية مؤقتة لأغراض إعداد العرض؛ أدلة القبول التشغيلي قيد المراجعة وسترفق لاحقاً.')}
      </div>
    </div>`;
  }
);

// 13. Requirements Engineering Progress (الشريحة 13)
addSlide(
  ['Slide 13: Requirements Status', 'الشريحة 13: المتطلبات وحالتها'],
  ['Requirements & Verification Status', 'المتطلبات وحالة التحقق وأدلة القبول'],
  ['Requirements Engineering', 'المتطلبات'], 'tag-prop',
  ['Separating requirement definition from implementation verification; ownership checks added to RBAC; post-Sprint 3 features remain planned.',
   'فصل اعتماد المتطلب عن اختباره؛ إضافة فحص الملكية لـ RBAC؛ والميزات بعد السبرنت 3 تظل ضمن المخطط.'],
  () => {
    const reqs = [
      ['Access & Permissions', 'الوصول والصلاحيات',
       'Registration, authentication, sessions, role-based access, and owner-scoped retrieval.',
       'التسجيل والمصادقة، الجلسات، إدارة الصلاحيات (RBAC)، والتحقق من ملكية المورد.',
       'Implemented (Sprint 1) · Acceptance Pending', 'مُنفذ (السبرنت 1) · قيد قبول الأدلة', 'badge-draft'],
      ['Job Execution Lifecycle', 'إدارة دورة تنفيذ المهام',
       'Sequential and independent modes, stage tracking, cancellation, and recovery handling.',
       'نمطا الفحص المتسلسل والمستقل، تتبع المراحل، إلغاء الفحص، ومعالجة التعافي.',
       'Implemented (Sprint 2) · Acceptance Pending', 'مُنفذ (السبرنت 2) · قيد قبول الأدلة', 'badge-draft'],
      ['Asset & Service Discovery', 'اكتشاف الأصول والخدمات',
       'Subdomain, port, and live service enumeration with strict scope enforcement.',
       'استكشاف النطاقات الفرعية والمنافذ والخدمات الحية وفرض حدود النطاق.',
       'Implemented (Sprint 3) · Acceptance Pending', 'مُنفذ (السبرنت 3) · قيد قبول الأدلة', 'badge-draft'],
      ['Sensitive Data Protection', 'حماية وتشفير البيانات',
       'Data encryption using AES-256-GCM, with envelope encryption for key protection, and authorized decryption.',
       'تشفير البيانات باستخدام AES-256-GCM، وحماية مفاتيحها باستخدام تشفير المغلف، وفك التشفير المصرح به فقط.',
       'Implemented (Sprint 2) · Acceptance Pending', 'مُنفذ (السبرنت 2) · قيد قبول الأدلة', 'badge-draft'],
      ['API Discovery & Vulnerability Scanners', 'اكتشاف مسارات API وفحص الثغرات',
       'Kiterunner for API route discovery; Nuclei YAML templates and Wapiti dynamic audits for vulnerability scanning.',
       'أداة Kiterunner لاكتشاف مسارات واجهات API؛ وقوالب Nuclei وفحص Wapiti الديناميكي لاكتشاف الثغرات.',
       'Planned (Sprints 4–5)', 'مخطط (السبرنتات 4–5)', 'badge-plan'],
      ['Reference Enrichment & AI Analysis', 'الإثراء المرجعي والتحليل بالذكاء',
       'Associating findings with CVE identifiers, CWE classifications, and OWASP Top 10 categories, utilizing available CVSS severity scores when supporting evidence exists; Gemini 3.8 Flash remediation explanation.',
       'ربط النتائج بمعرّفات CVE وتصنيفات CWE وفئات OWASP Top 10، والاستفادة من درجات CVSS المتاحة عند توفر أدلة مناسبة؛ وتفسير المعالجة بـ Gemini 3.8 Flash.',
       'Planned (Sprints 6–7)', 'مخطط (السبرنتات 6–7)', 'badge-plan']
    ];
    return `<div class="c-col">
      <table class="comp-table">
        <thead>
          <tr>
            <th style="width:28%;">${tr('Requirement Category', 'فئة المتطلب')}</th>
            <th style="width:48%;">${tr('Specification Description', 'الوصف الوظيفي')}</th>
            <th class="center" style="width:24%;">${tr('Verification Status', 'حالة التحقق')}</th>
          </tr>
        </thead>
        <tbody>
          ${reqs.map(r => `
            <tr>
              <td><b>${tr(r[0], r[1])}</b></td>
              <td>${tr(r[2], r[3])}</td>
              <td class="center"><span class="status-badge ${r[6]}">${tr(r[4], r[5])}</span></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
  }
);

// 14. Database Architecture & Relational Design (الشريحة 14: مخطط قاعدة البيانات والعلاقات ERD)
addSlide(
  ['Slide 14: Database Design', 'الشريحة 14: تصميم قاعدة البيانات والعلاقات'],
  ['Database Design & Relationships (Figure 3.2 ERD)', 'تصميم قاعدة البيانات ومخطط الكيانات والعلاقات (مخطط 3.2 ERD)'],
  ['Database ERD', 'مخطط العلاقات'], 'tag-prop',
  ['PostgreSQL relational schema: scans link to users; findings link via assets; reports link via AI analyses; finding_sources & finding_references resolve M:N.',
   'مخطط علائقي: الفحص يتبع المستخدم؛ الثغرات ترتبط عبر الأصول؛ والتقارير ترتبط عبر التحليل الذكي؛ وجداول الربط تعالج علاقات متعدد إلى متعدد.'],
  () => `<div style="display:grid; grid-template-columns: 480px 1fr; gap:16px; width:100%; align-items:stretch;">
    ${A(0, `
      <div class="diag-card" onclick="openImgModal('./assets/erd-diagram.png', 'Figure 3.2: YemScan Entity Relationship Diagram (ERD)')" title="${tr('Click to view full-screen diagram', 'انقر لتكبير المخطط بحجم الشاشة')}">
        <div class="diag-card-head">
          <span class="diag-badge">Figure 3.2</span>
          <span class="diag-hint">🔍 ${tr('Click to Enlarge', 'انقر للتكبير')}</span>
        </div>
        <div class="diag-img-box">
          <img src="./assets/erd-diagram.png" alt="Figure 3.2: Database ERD Schema" class="diag-img">
        </div>
        <div style="font-size:12px; color:#475569; text-align:center; margin-top:4px; font-weight:700;">
          ${tr('Figure 3.2: Relational Schema & Protected Attributes', 'مخطط 3.2: المخطط العلائقي والحقول المشفرة')}
        </div>
      </div>
    `)}

    ${A(1, `
      <div style="display:flex; flex-direction:column; gap:8px; justify-content:space-between; height:100%;">
        <div class="c-card" style="padding:10px 14px;">
          <h4 class="c-card-h" style="color:var(--teal); font-size:16.5px; margin-bottom:4px;">1. ${tr('Normalized 12-Table Structure', 'الهيكل العلائقي الموحد (12 جدولاً)')}</h4>
          <p class="c-card-p" style="font-size:14px; line-height:1.5; margin:0; color:#f1f5f9;">${tr('Comprehensive schema spanning users, scan jobs, keys, stages, raw outputs, assets, findings, references, AI analyses, and reports.',
            'مخطط علائقي متكامل يشمل: المستخدمين، مهام الفحص، المفاتيح، المراحل، المخرجات الخام، الأصول، الثغرات، المراجع، تحليلات الذكاء، والتقارير.')}</p>
        </div>

        <div class="c-card c-blue" style="padding:10px 14px;">
          <h4 class="c-card-h" style="color:var(--blue); font-size:16.5px; margin-bottom:4px;">2. ${tr('Application-Level Encryption of Sensitive Fields', 'تشفير الحقول الحساسة على مستوى التطبيق قبل التخزين')}</h4>
          <p class="c-card-p" style="font-size:14px; line-height:1.5; margin:0; color:#f1f5f9;">${tr('Sensitive attributes (target_enc, title_enc, description_enc, wrapped_dek) encrypted by application before storage; master KEK resides outside DB in a separate protected store.',
            'الحقول الحساسة (الهدف، عنوان ووصف نتيجة الفحص، مفتاح DEK المحمي) تُشفر على مستوى التطبيق قبل التخزين؛ ومفتاح KEK الرئيسي يُدار خارج قاعدة البيانات.')}</p>
        </div>

        <div class="c-card c-amber" style="padding:10px 14px;">
          <h4 class="c-card-h" style="color:var(--amber); font-size:16.5px; margin-bottom:4px;">3. ${tr('Many-to-Many Audit & Evidence Traceability', 'تتبع نتائج الفحص والأدلة عبر جداول الربط')}</h4>
          <p class="c-card-p" style="font-size:14px; line-height:1.5; margin:0; color:#f1f5f9;">${tr('finding_sources links scan findings to raw output proofs; finding_references maps each finding to authoritative CVE/CWE codes with complete provenance.',
            'جدول finding_sources يربط نتائج الفحص بالأدلة الخام؛ وجدول finding_references يربط كل نتيجة بالمعايير القياسية مع حفظ مصدر الإثبات.')}</p>
        </div>

        <div class="c-card c-violet" style="padding:10px 14px;">
          <h4 class="c-card-h" style="color:var(--violet); font-size:16.5px; margin-bottom:4px;">4. ${tr('Hierarchical Asset Modeling & Acyclic Checks', 'نمذجة الأصول والتحقق البرمجي من البنية الشجرية')}</h4>
          <p class="c-card-p" style="font-size:14px; line-height:1.5; margin:0; color:#f1f5f9;">${tr('Recursive parent_asset_id hierarchy models domains, subdomains, open ports, and web endpoints; application validation enforces an acyclic tree structure in strict scope.',
            'علاقة شجرية ذاتية عبر parent_asset_id لنمذجة النطاقات والمنافذ ونقاط النهاية؛ ويتولى التطبيق التحقق البرمجي لضمان خلو الشجرة من الحلقات (Acyclic Tree).')}</p>
        </div>
      </div>
    `)}
  </div>`
);

// 15. Data Protection & Execution Security: Cryptography & Docker Isolation (الشريحة 15)
addSlide(
  ['Slide 15: Security & Isolation', 'الشريحة 15: حماية البيانات وضبط بيئة التنفيذ'],
  ['Data Protection & Execution Controls: Cryptography & Docker Sandboxing', 'حماية البيانات وضوابط التنفيذ: التشفير وعزل بيئة الفحص بحاويات Docker'],
  ['Security & Docker', 'الأمان والتشفير'], 'tag-sec',
  ['Layered controls: AES-256-GCM encryption with 128-bit authentication tags, protected key wrapping, and containerized sandboxing.',
   'ضوابط متعددة الطبقات: تشفير AES-256-GCM مع وسوم مصادقة 128 بت، حماية مفاتيح التشفير، وعزل بيئة الفحص بالحاويات.'],
  () => `<div class="c-col" style="gap:11px;">
    <div class="c-grid-2" style="gap:16px; align-items:stretch;">
      ${A(0, `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding-bottom:6px; border-bottom:1px solid rgba(45,212,191,0.25);">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-size:22px; color:var(--teal);">🔐</span>
            <h3 class="c-card-h" style="color:var(--teal); font-size:18px; margin:0;">
              ${tr('Data Protection & Cryptography', 'تشفير البيانات والتحقق من سلامتها')}
            </h3>
          </div>
          <span class="status-badge badge-done" style="font-size:12px; padding:2px 8px;">
            ${tr('AES-256-GCM', 'AES-256-GCM')}
          </span>
        </div>

        <div style="display:flex; flex-direction:column; gap:7px;">
          <div style="background:rgba(15,23,42,0.65); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:9px 12px;">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:2px;">
              <span style="font-size:16px;">🛡️</span>
              <b style="font-size:14.5px; color:#ffffff;">${tr('Encryption & Tag Verification:', 'التشفير والتحقق من السلامة:')}</b>
            </div>
            <p class="c-card-p" style="font-size:13.5px; line-height:1.5; margin:0; color:#f1f5f9;">
              ${tr('Raw outputs, reports, and retrievable sensitive fields are encrypted using AES-256-GCM. The 128-bit authentication tag is verified before accepting or using decrypted data, with nonces never reused with the same encryption key; data is rejected upon verification failure without being accepted or used.',
                   'تُشفّر المخرجات الخام والتقارير والحقول الحساسة القابلة للاسترجاع باستخدام AES-256-GCM. يُتحقق من وسم المصادقة بطول 128 بت قبل قبول البيانات المفكوكة أو استخدامها، مع عدم تكرار Nonce مع مفتاح التشفير نفسه، ورفض البيانات عند فشل التحقق وعدم قبولها أو استخدامها.')}
              <span style="font-size:11px; color:var(--text-dim); display:block; margin-top:3px;">(NIST SP 800-38D)</span>
            </p>
          </div>

          <div style="background:rgba(15,23,42,0.65); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:9px 12px;">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:2px;">
              <span style="font-size:16px;">🗝️</span>
              <b style="font-size:14.5px; color:#ffffff;">${tr('Key Management (DEK / KEK):', 'إدارة المفاتيح وتشفير المغلف:')}</b>
            </div>
            <p class="c-card-p" style="font-size:13.5px; line-height:1.5; margin:0; color:#f1f5f9;">
              ${tr('A dedicated DEK encrypts each scan\'s data and is stored in the database wrapped by a KEK. The KEK is managed in a protected secret store separate from the database, with restricted access and no plaintext copies in the application database or logs.',
                   'يُستخدم DEK مستقل لكل فحص لتشفير بياناته، ويُحفظ في قاعدة البيانات بعد حمايته باستخدام KEK. يُدار KEK في مخزن أسرار محمي منفصل عن قاعدة البيانات، مع تقييد الوصول إليه وعدم نسخه بصيغة صريحة إلى قاعدة بيانات التطبيق أو سجلاته.')}
            </p>
          </div>

          <div style="background:rgba(15,23,42,0.65); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:9px 12px;">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:2px;">
              <span style="font-size:16px;">📁</span>
              <b style="font-size:14.5px; color:#ffffff;">${tr('Protected Data Scope:', 'نطاق البيانات المحمية بالتشفير:')}</b>
            </div>
            <p class="c-card-p" style="font-size:13.5px; line-height:1.5; margin:0; color:#f1f5f9;">
              ${tr('Retained raw tool outputs, generated technical and executive report files, and sensitive database columns (target_enc, title_enc, description_enc).',
                   'المخرجات الخام المخزنة في نظام الملفات، ملفات التقارير الفنية والتنفيذية الناتجة، والأعمدة الحساسة في قاعدة البيانات (الهدف، عنوان ووصف نتيجة الفحص).')}
            </p>
          </div>
        </div>
      `, 'c-card')}

      ${A(1, `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; padding-bottom:6px; border-bottom:1px solid rgba(56,189,248,0.25);">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="font-size:22px; color:var(--blue);">🐳</span>
            <h3 class="c-card-h" style="color:var(--blue); font-size:18px; margin:0;">
              ${tr('Execution Isolation & Container Controls', 'عزل بيئة التنفيذ وضوابط الحاويات')}
            </h3>
          </div>
          <span class="status-badge badge-done" style="font-size:12px; padding:2px 8px;">
            ${tr('Docker Sandboxing', 'عزل Docker')}
          </span>
        </div>

        <div style="display:flex; flex-direction:column; gap:7px;">
          <div style="background:rgba(15,23,42,0.65); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:9px 12px;">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:2px;">
              <span style="font-size:16px;">📦</span>
              <b style="font-size:14.5px; color:#ffffff;">${tr('Tool Containment in Docker:', 'تشغيل الأدوات داخل بيئة الحاويات:')}</b>
            </div>
            <p class="c-card-p" style="font-size:13.5px; line-height:1.5; margin:0; color:#f1f5f9;">
              ${tr('The design runs the 6 security tools inside Docker containers with dropped privileges, non-root users, and isolated runtime environments.',
                   'يعتمد التصميم على تشغيل أدوات الفحص الست داخل حاويات Docker بصلاحيات مقلصة ومستخدم غير جذري وبيئات تشغيل معزولة للحد من التداخل.')}
            </p>
          </div>

          <div style="background:rgba(15,23,42,0.65); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:9px 12px;">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:2px;">
              <span style="font-size:16px;">🧱</span>
              <b style="font-size:14.5px; color:#ffffff;">${tr('Host Protection & Privilege Reduction:', 'حماية الخادم وتقليص الصلاحيات:')}</b>
            </div>
            <p class="c-card-p" style="font-size:13.5px; line-height:1.5; margin:0; color:#f1f5f9;">
              ${tr('Non-root execution helps reduce the blast radius if a tool or parser is compromised, though strict input validation remains essential to prevent command injection.',
                   'يساعد التشغيل دون صلاحيات جذرية في تقليص أثر استغلال الأدوات أو مخرجات الفحص، مع بقاء التحقق الصارم من المدخلات ضرورياً لمنع حقن الأوامر.')}
            </p>
          </div>

          <div style="background:rgba(15,23,42,0.65); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:9px 12px;">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:2px;">
              <span style="font-size:16px;">⚙️</span>
              <b style="font-size:14.5px; color:#ffffff;">${tr('Resource Limits & Execution Controls:', 'حدود الموارد وضوابط التنفيذ:')}</b>
            </div>
            <p class="c-card-p" style="font-size:13.5px; line-height:1.5; margin:0; color:#f1f5f9;">
              ${tr('Per-container memory and CPU limits help reduce the risk of host resource exhaustion, alongside execution timeouts and scan cancellation.',
                   'تُحدَّد حدود الذاكرة وحصص المعالج لكل حاوية لتقليل مخاطر استنزاف موارد الخادم، إلى جانب المهل الزمنية وإمكانية إلغاء الفحص.')}
              <span style="font-size:11px; color:var(--text-dim); display:block; margin-top:3px;">(Docker Documentation)</span>
            </p>
          </div>
        </div>
      `, 'c-card c-blue')}
    </div>

    <div class="stat-box" style="margin-top:2px; padding:8px 16px; border-color:var(--teal); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px;">
      <div style="display:flex; align-items:center; gap:10px; flex:1; min-width:300px;">
        <span style="font-size:22px;">ℹ️</span>
        <div class="stat-txt" style="font-size:13.5px; line-height:1.45; color:#f8fafc;">
          <b style="color:var(--teal);">${tr('Trust & Privacy Boundary:', 'حدود الثقة والخصوصية:')}</b>
          ${tr('Platform admin access is restricted at the application level; this design does not provide a zero-knowledge guarantee against an operator with unrestricted host or infrastructure access.',
               'تقتصر قيود وصول مدير المنصة على مستوى التطبيق؛ ولا يوفر هذا التصميم ضمانة المعرفة الصفرية (Zero-Knowledge) في مواجهة مشغل يمتلك وصولاً كاملاً إلى الخادم المضيف أو البنية التحتية.')}
        </div>
      </div>
      <div style="display:flex; gap:6px; flex-shrink:0;">
        <span class="status-badge badge-done" style="font-size:12px; padding:3px 10px;">🔐 ${tr('Data at Rest', 'بيانات التخزين')}</span>
        <span class="status-badge badge-done" style="font-size:12px; padding:3px 10px;">🐳 ${tr('Container Sandbox', 'عزل الحاويات')}</span>
      </div>
    </div>
  </div>`
);

// 16. Threat Model & Architectural Controls (الشريحة 16: نموذج التهديدات وحدود الثقة)
addSlide(
  ['Slide 16: Threat Model', 'الشريحة 16: نموذج التهديدات'],
  ['YemScan Platform Threat Model & Design Controls', 'نموذج التهديدات لمنصة YemScan: حدود الثقة والضوابط المعمارية'],
  ['Threat Model', 'نموذج التهديدات'], 'tag-sec',
  ['Preliminary threat model and architectural design controls; effectiveness remains subject to empirical verification during testing.',
   'نموذج تهديدات أولي وضوابط معمارية مصممة للحد من المخاطر؛ وتخضع فاعليتها للتحقق التجريبي أثناء مرحلة الاختبار.'],
  () => {
    const threats = [
      [
        'User Data & Findings', 'بيانات المستخدمين ونتائج الفحص',
        'Cross-user unauthorized access (IDOR / BOLA) via API.', 'وصول مستخدم غير مصرح به لبيانات أو نتائج فحص مستخدم آخر عبر واجهة API.',
        'Authentication, RBAC, and per-operation resource ownership validation in Application Layer.', 'مصادقة مركزية، تحكم بالوصول مبني على الأدوار (RBAC)، وتحقق صارم من ملكية المورد لكل طلب في طبقة التطبيق.'
      ],
      [
        'Stored Data & Files', 'المخرجات المخزنة وقاعدة البيانات',
        'Exposure or tampering at rest if storage media is compromised.', 'تسريب البيانات الحساسة أو التلاعب بها أثناء التخزين عند الوصول غير المصرح لوسائط التخزين.',
        'Data encryption using AES-256-GCM, 128-bit authentication tag verification, dedicated DEK per scan, and KEK managed separately from DB.', 'تشفير البيانات باستخدام AES-256-GCM، التحقق من وسم المصادقة 128 بت، مفتاح DEK مستقل لكل فحص، وحفظ KEK في مستودع أسرار منفصل عن قاعدة البيانات.'
      ],
      [
        'Worker & Host Execution', 'مشغل المهام وبيئة الخادم المضيف',
        'Malicious target payloads, out-of-scope scanning, or tool exploit attempting host escape.', 'استغلال مخرجات الهدف لاختراق أداة الفحص، الفحص خارج النطاق المصرح، أو محاولة كسر الحاوية.',
        'Strict target/scope validation, executing commands without shell (exec array), non-root container user, and dropped capabilities.', 'تحقق صارم من النطاق والمدخلات، تشغيل الأوامر كقائمة معاملات دون غلاف أوامر، حاويات بمستخدم غير جذري وصلاحيات مقلصة.'
      ],
      [
        'Platform Resources', 'موارد المنصة والحوسبة',
        'Resource exhaustion from concurrent or hanging scans (internal DoS).', 'استنزاف المعالج والذاكرة بفحوصات متزامنة مكثفة أو أدوات فحص عالقة (حجب خدمة داخلي).',
        'Container CPU/memory quotas, concurrency limits, per-tool execution timeouts, and cancellation hooks.', 'حصص صارمة للمعالج والذاكرة للحاويات، قيود على عدد الفحوصات المتزامنة، مهلات زمنية لكل أداة، وإمكانية إلغاء الفحص.'
      ],
      [
        'AI Data & Reporting', 'بيانات الذكاء الاصطناعي والتقارير',
        'Secret leakage in prompt payloads, or untrusted output manipulation.', 'تسريب أسرار أو بيانات حساسة في طلبات الاستدعاء، أو تأثير بيانات غير موثوقة على ردود الذكاء.',
        'Data minimization, automated secret redaction before transit, HTTPS transport, validate response schema; treat scan content as untrusted data, separate from instructions, and validate conclusions and references before accepting report content.', 'تقليل البيانات، تنقيح الأسرار والمفاتيح قبل الإرسال، نقل مشفر عبر HTTPS، التحقق من هيكل ردود الذكاء؛ ومعاملة محتوى الفحص كبيانات غير موثوقة منفصلة عن التعليمات، والتحقق من الاستنتاجات والمراجع قبل قبول محتوى التقرير.'
      ]
    ];

    return `<div style="display:flex; flex-direction:column; gap:9px; width:100%;">
      <div style="background:rgba(20,184,166,0.08); border:1px solid rgba(20,184,166,0.3); border-radius:8px; padding:6px 14px; font-size:13px; color:#f1f5f9; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="color:var(--teal); font-size:16px;">🛡️</span>
          <span><b>${tr('Trust Boundaries:', 'حدود الثقة المعمارية:')}</b> <code>Browser ↔ FastAPI Backend</code> | <code>App ↔ Worker</code> | <code>App ↔ Storage & Keys</code> | <code>Platform ↔ External AI</code></span>
        </div>
        <span class="status-badge badge-sec" style="font-size:11.5px; padding:2px 8px;">${tr('Design Controls', 'ضوابط التصميم')}</span>
      </div>

      <div style="overflow-x:auto;">
        <table class="comp-table" style="font-size:13px;">
          <thead>
            <tr>
              <th style="width:24%;">${tr('Asset & Surface', 'الأصل ونطاق التهديد')}</th>
              <th style="width:36%;">${tr('Identified Threat', 'التهديد المحتمل')}</th>
              <th style="width:40%;">${tr('Architectural Control', 'الضابط المعماري المصمم')}</th>
            </tr>
          </thead>
          <tbody>
            ${threats.map(t => `
              <tr>
                <td style="font-weight:700; color:#e2e8f0; padding:6px 10px;">${tr(t[0], t[1])}</td>
                <td style="color:#cbd5e1; padding:6px 10px;">${tr(t[2], t[3])}</td>
                <td style="color:var(--teal); padding:6px 10px; font-size:12.5px; line-height:1.45;">${tr(t[4], t[5])}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div style="background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:6px 14px; font-size:12.5px; color:var(--amber); display:flex; align-items:center; gap:8px;">
        <span style="font-size:15px;">⚠️</span>
        <span><b>${tr('AI Privacy Boundary Note:', 'تنبيه خصوصية خدمة الذكاء الاصطناعي:')}</b> ${tr('The external AI model processes data submitted in prompt payloads; HTTPS protects transit only. Data minimization and secret redaction prior to transit are critical pre-flight controls.',
          'تعالج خدمة الذكاء الاصطناعي الخارجية البيانات المرفوعة في طلب الاستدعاء؛ ويقتصر تشفير HTTPS على حماية النقل فقط. لذا يعد تقليل البيانات وتنقيح الأسرار قبل الإرسال ضابطاً حاسماً لحماية الخصوصية.')} <span style="font-size:11px; color:var(--amber); opacity:0.8;">(OWASP LLM Top 10)</span></span>
      </div>
    </div>`;
  }
);

// 17. Testing Progress & Verification (الشريحة 17: خطة الاختبارات وسيناريوهاتها)
addSlide(
  ['Slide 17: Testing Verification', 'الشريحة 17: خطة وتقدم الاختبارات'],
  ['Testing Verification: Controlled Test Scenarios', 'خطة وتقدم الاختبارات: سيناريوهات التحقق المخبري'],
  ['Testing Plan', 'خطة الاختبارات'], 'tag-sec',
  ['Focusing on selected test cases with expected vs actual behavior, without unlinked success numbers.',
   'التركيز على سيناريوهات اختبار محددة تقارن النتيجة المتوقعة بالنتيجة الفعلية، دون أرقام نجاح غير مقاسة.'],
  () => {
    const tests = [
      ['API Authentication & Ownership', 'المصادقة وفحص الملكية',
       'Cross-tenant scan retrieval returns HTTP 403 Forbidden.',
       'محاولة استرجاع فحوصات مستخدم آخر تُرجع خطأ 403 Forbidden.',
       'Verified in clean PostgreSQL environment', 'تم التحقق في بيئة PostgreSQL نظيفة', 'badge-done'],
      ['Worker Sandbox Isolation', 'عزل الحاويات في Docker',
       'Worker processes terminate cleanly within assigned CPU/memory bounds.',
       'عمليات الفحص تنتهي بانتظام ضمن حدود المعالج والذاكرة المخصصة.',
       'Verified in local environment', 'تم التحقق في البيئة المحلية', 'badge-done'],
      ['Data Normalization & Dedup', 'توحيد المخرجات وإلغاء التكرار',
       'Mock scanner outputs parse into single consolidated finding with provenance.',
       'تحويل مخرجات الفحص التجريبية إلى نتيجة موحدة مع حفظ أدلة الإثبات.',
       'Sample parser tests passed', 'اجتازت اختبارات عينة المحللات', 'badge-done'],
      ['Cryptographic Tag Verification', 'التحقق من وسم المصادقة',
       'Tampered ciphertext or invalid nonce is rejected upon verification failure without use.',
       'رفض النص المشفر المتلاعب به أو الـ Nonce غير الصالح عند فشل التحقق دون استخدامه.',
       'Verified via Python cryptography tests', 'تم التحقق عبر اختبارات مكتبة التشفير', 'badge-done'],
      ['Data Minimization & Secret Redaction', 'تقليل البيانات وتنقيح الأسرار',
       'Data submitted over HTTPS omits raw secrets, credentials, and unneeded tokens.',
       'البيانات المرسلة عبر HTTPS تستبعد المفاتيح السرية وبيانات الاعتماد والرموز غير الضرورية.',
       'In Progress (Sprints 6–7)', 'قيد التنفيذ (السبرنتات 6–7)', 'badge-wip']
    ];
    return `<div class="c-col">
      <table class="comp-table">
        <thead>
          <tr>
            <th style="width:28%;">${tr('Test Scenario', 'سيناريو الاختبار')}</th>
            <th style="width:44%;">${tr('Expected Behavior / Criterion', 'السلوك المتوقع ومعيار النجاح')}</th>
            <th class="center" style="width:28%;">${tr('Verification Outcome', 'النتيجة')}</th>
          </tr>
        </thead>
        <tbody>
          ${tests.map(t => `
            <tr>
              <td><b>${tr(t[0], t[1])}</b></td>
              <td>${tr(t[2], t[3])}</td>
              <td class="center"><span class="status-badge ${t[6]}">${tr(t[4], t[5])}</span></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
  }
);

// 18. Preliminary Results & Technical Validation (الشريحة 18)
addSlide(
  ['Slide 18: Preliminary Results', 'الشريحة 18: النتائج الأولية والتقييم'],
  ['Preliminary Results & Technical Validation', 'النتائج الأولية والتقييم الفني لمنصة YemScan'],
  ['Technical Validation', 'النتائج الأولية'], 'tag-sec',
  ['Initial laboratory runs confirm automated handover feasibility, schema normalization, and pre-AI reference grounding.',
   'تؤكد التجارب الأولية جدوى التسليم الآلي بين الأدوات، توحيد البيانات، والربط بالمعايير القياسية قبل استدعاء الذكاء.'],
  () => `<div class="c-grid-3">
    ${A(0, `<div class="c-card-ic">🔄</div>
      <h3 class="c-card-h">${tr('Automated Handover Feasibility', 'جدوى التسليم الآلي بين الأدوات')}</h3>
      <p class="c-card-p">${tr('Prototyping confirms that sequential data passing between discovery tools (Subfinder → Naabu → httpx) operates reliably without manual piping.',
        'أكدت التجارب الأولية أن تمرير البيانات المتسلسل بين أدوات الاستكشاف يعمل بسلاسة دون الحاجة لنقل يدوي للمخرجات.')}</p>`, 'c-card')}

    ${A(1, `<div class="c-card-ic" style="color:var(--blue);">📊</div>
      <h3 class="c-card-h" style="color:var(--blue);">${tr('Data Normalization & Hygiene', 'توحيد البيانات وإلغاء التكرار')}</h3>
      <p class="c-card-p">${tr('Sample parser runs verify that overlapping simulated findings are successfully consolidated into structured relational tables with provenance preserved.',
        'أثبتت الاختبارات الأولية للمحللات إمكانية دمج النتائج المتداخلة في جداول علائقية موحدة مع الحفاظ على أدلة الإثبات.')}</p>`, 'c-card c-blue')}

    ${A(2, `<div class="c-card-ic" style="color:var(--violet);">🏷️</div>
      <h3 class="c-card-h" style="color:var(--violet);">${tr('Pre-AI Reference Grounding', 'ربط المراجع القياسية قبل استدعاء الذكاء')}</h3>
      <p class="c-card-p">${tr('Rule-based pre-association with CVE identifiers and CWE classifications reduces reliance on the AI model for identifiers and severity scores; AI responses are validated against defined schemas to limit dependence on the model for conclusions.',
        'الربط المسبق بالقواعد مع معرّفات CVE وتصنيفات CWE يقلل الاعتماد على الذكاء في استنتاج المعرّفات ودرجات الخطورة؛ ويتم التحقق من ردود الذكاء وفق قوالب مهيكلة للحد من الاعتماد على النموذج في الاستنتاج.')}</p>`, 'c-card c-violet')}
  </div>`
);

// 19. Technical Challenges & Mitigation (الشريحة 19)
addSlide(
  ['Slide 19: Challenges & Risks', 'الشريحة 19: التحديات والمخاطر التقنية'],
  ['Technical Challenges Encountered & Mitigation Strategies', 'التحديات والمخاطر التقنية التي واجهت الفريق وكيف تمت معالجتها'],
  ['Risk Management', 'إدارة المخاطر'], 'tag-prop',
  ['Separating potential risks from actual encountered problems, presenting root causes and verified mitigations.',
   'فصل المخاطر المتوقعة عن المشاكل الفعلية، وتوضيح الأسباب الجذرية وإجراءات المعالجة المتخذة.'],
  () => {
    const risks = [
      ['Inconsistent Tool Output Schemas', 'اختلاف تنسيق مخرجات الأدوات',
       'CLI scanners produce divergent JSON, plain text, and XML.',
       'أدوات الفحص تنتج مخرجات متباينة بصيغ JSON ونصوص عادية وXML.',
       'Built custom normalization adapter modules with provenance retention.',
       'تطوير وحدات مهايئة (Adapters) لتوحيد الصيغ مع الحفاظ على مصادر الإثبات.',
       'Resolved', 'تم الحل', 'badge-done'],
      ['Long-Running Scan Execution', 'عمليات الفحص طويلة الأمد',
       'Port and vulnerability scanning may block HTTP request threads if executed synchronously.',
       'فحص المنافذ والثغرات قد يعطل خيوط معالجة طلبات HTTP إذا نُفذ تزامناً داخل واجهة API.',
       'Decoupled execution via an independent background worker with status tracking and cancellation hooks.',
       'فصل التنفيذ عبر مشغل مهام خلفي مستقل عن خادم FastAPI، مع تتبع الحالة وإمكانية إلغاء الفحص.',
       'Resolved', 'تم الحل', 'badge-done'],
      ['AI Token Costs & Grounding', 'تكلفة الـ API وتثبيت مخرجات الذكاء',
       'Submitting large raw logs risks exceeding context windows and unreliable severity rankings.',
       'إرسال سجلات خام ضخمة يستهلك الرموز ويزيد احتمالية تقديم درجات خطورة غير دقيقة.',
       'Minimized submitted payload and restricted AI to remediation explanation based on pre-enriched findings.',
       'تقليل البيانات المرسلة وحصر دور الذكاء في تفسير المعالجة استناداً إلى نتائج تم إثراؤها مسبقاً.',
       'Resolved', 'تم الحل', 'badge-done'],
      ['Cryptographic Key Management Complexity', 'تعقيدات إدارة وتطبيق التشفير',
       'Encrypting each record with an external key service creates network overhead and key exposure risks.',
       'تشفير كل سجل باستدعاء خارجي للمفتاح يضيف عبئاً شبكياً ومخاطر كشف للمفاتيح.',
       'Adopted envelope encryption (per-scan DEK protected by KEK) with temporary plaintext key caching in memory during active jobs.',
       'اعتماد تشفير المغلف (مفتاح DEK مستقل لكل فحص محمي بـ KEK) مع إبقاء المفتاح مؤقتاً في الذاكرة أثناء تنفيذ المهمة فقط.',
       'In Progress', 'قيد التنفيذ', 'badge-wip']
    ];
    return `<div class="c-col">
      <table class="comp-table">
        <thead>
          <tr>
            <th style="width:24%;">${tr('Challenge Encountered', 'التحدي التقني الفعلي')}</th>
            <th style="width:34%;">${tr('Root Cause', 'السبب الجذري')}</th>
            <th style="width:30%;">${tr('Action Taken / Mitigation', 'الإجراء المتخذ والمعالجة')}</th>
            <th class="center" style="width:12%;">${tr('Status', 'الحالة')}</th>
          </tr>
        </thead>
        <tbody>
          ${risks.map(r => `
            <tr>
              <td><b>${tr(r[0], r[1])}</b></td>
              <td>${tr(r[2], r[3])}</td>
              <td>${tr(r[4], r[5])}</td>
              <td class="center"><span class="status-badge ${r[8]}">${tr(r[6], r[7])}</span></td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
  }
);

// 20. Updated Schedule / Gantt Chart (الشريحة 20)
addSlide(
  ['Slide 20: Updated Schedule', 'الشريحة 20: الجدول الزمني المحدث'],
  ['Updated Project Schedule & Milestone Roadmap', 'الجدول الزمني المحدث وخريطة المعالم الرئيسية (Milestones)'],
  ['Project Roadmap', 'الجدول الزمني'], 'tag-sec',
  ['Realistic timeline anchored to current review date (October 2026) through final graduation in mid-2027.',
   'جدول زمني واقعي يبدأ من تاريخ المناقشة الحالية (أكتوبر 2026) وحتى التخرج النهائي في منتصف 2027.'],
  () => {
    const milestones = [
      ['Phase 1: Foundation & Discovery (Sprints 1–3)', 'المرحلة 1: التأسيس والاستكشاف (السبرنتات 1–3)', 'Oct 2026',
       'Current Milestone (Midterm Defense)', 'المعلم الحالي (المناقشة النصفية)', 'badge-done',
       'FastAPI backend, PostgreSQL migrations, worker jobs, AES-256-GCM encryption, Subfinder/Naabu/httpx.',
       'خلفية FastAPI، ترحيلات PostgreSQL، مهام المشغل، تشفير AES-256-GCM، ودمج Subfinder وNaabu وhttpx.'],
      ['Phase 2: API & Vulnerability Scanners (Sprints 4–5)', 'المرحلة 2: فحص الـ APIs والثغرات (السبرنتات 4–5)', 'Nov – Dec 2026',
       'Planned', 'مخطط', 'badge-plan',
       'Kiterunner for API route discovery; Nuclei YAML templates and Wapiti dynamic web probing in Docker containers.',
       'أداة Kiterunner لاكتشاف مسارات واجهات API؛ وقوالب Nuclei وفحص Wapiti الديناميكي داخل حاويات Docker.'],
      ['Phase 3: Reference Enrichment & AI (Sprints 6–7)', 'المرحلة 3: الإثراء المرجعي والذكاء (السبرنتات 6–7)', 'Jan – Feb 2027',
       'Planned', 'مخطط', 'badge-plan',
       'Associating findings with CVE identifiers, CWE classifications, and OWASP Top 10 categories, utilizing available CVSS severity scores; Gemini 3.8 Flash remediation prompt pipeline.',
       'ربط النتائج بمعرّفات CVE وتصنيفات CWE وفئات OWASP Top 10 والاستفادة من درجات CVSS المتاحة؛ ومسار استدعاء Gemini 3.8 Flash لتفسير المعالجة.'],
      ['Phase 4: Reports & Frontend Interface (Sprints 8–9)', 'المرحلة 4: التقارير ولوحة التحكم (السبرنتات 8–9)', 'Mar – Apr 2027',
       'Planned', 'مخطط', 'badge-plan',
       'Encrypted PDF dual-tier report engine and React/TypeScript interactive dashboard.',
       'محرك توليد التقارير المزدوجة المشفرة ولوحة التحكم التفاعلية بتقنيتي React وTypeScript.'],
      ['Phase 5: Laboratory Benchmarking & Defense (Sprint 10)', 'المرحلة 5: التقييم المخبري والمناقشة (السبرنت 10)', 'May – Jun 2027',
       'Planned', 'مخطط', 'badge-plan',
       'Controlled lab testing against benchmark targets, thesis completion, and final graduation defense.',
       'اختبارات مخبرية منضبطة على أهداف معيارية، استكمال كتابة الأطروحة، ومناقشة التخرج النهائية.']
    ];
    return `<div class="c-col" style="gap:9px;">
      ${milestones.map((m, idx) => A(idx, `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-family:var(--font-mono); font-size:13px; color:var(--blue); font-weight:700;">${m[2]}</span>
            <b style="font-size:15.5px; color:#ffffff;">${tr(m[0], m[1])}</b>
          </div>
          <span class="status-badge ${m[5]}">${tr(m[3], m[4])}</span>
        </div>
        <p class="c-card-p" style="font-size:13.5px; line-height:1.5; margin:0;">${tr(m[6], m[7])}</p>`, 'c-card')).join('')}
    </div>`;
  }
);

// 21. Conclusion / Q&A (الشريحة 21)
addSlide(
  ['Slide 21: Conclusion', 'الشريحة 21: الخاتمة والخطوات التالية'],
  ['Conclusion, Project Status & Examination Q&A', 'الخاتمة: خلاصة التقدم والجاهزية لمشروع (2) وأسئلة اللجنة'],
  ['Conclusion & Q&A', 'الخاتمة والمناقشة'], 'tag-sec',
  ['Midterm defense proves sound methodology, clear engineering progress, and a solid roadmap for completion.',
   'يؤكد العرض النصفي سلامة المنهجية، وضوح الإنجاز الهندسي، وجاهزية خطة استكمال المشروع في الفصل القادم.'],
  () => `<div class="c-col" style="align-items:center; gap:16px; text-align:center;">
    <div style="font-size:52px; font-weight:900; letter-spacing:2px; line-height:1; background:linear-gradient(120deg, #ffffff, #2dd4bf, #38bdf8); -webkit-background-clip:text; background-clip:text; color:transparent;">
      YemScan
    </div>
    <div style="font-size:16px; color:#e2e8f0; max-width:920px; line-height:1.55;">
      ${tr('Midterm Evaluation Summary: The team has established a rigorous academic and theoretical foundation, designed the modular layered architecture integrating an external AI service, built the containerized worker and encrypted storage baseline (Sprints 1–3), and formulated a clear roadmap for completion in Graduation Project (2).',
           'خلاصة التقييم النصفي: نجح الفريق في إرساء الأساس النظري والأكاديمي الرصين، وتصميم معمارية النظام المعيارية ذات الطبقات المتكاملة مع خدمة ذكاء اصطناعي خارجية، وبناء بيئة تشغيل العمال المستقلين والتخزين المشفر (السبرنتات 1-3)، وصياغة خطة عمل واضحة لاستكمال المشروع في الفصل القادم.')}
    </div>

    <div class="c-grid-3" style="max-width:1100px; text-align:start;">
      ${A(0, `<h4 class="c-card-h" style="color:var(--teal); font-size:16px;">1. ${tr('Methodological Rigor', 'انضباط المنهجية')}</h4>
        <p class="c-card-p" style="font-size:13.5px; line-height:1.5;">${tr('Agile development with measurable engineering increments, verifiable technical criteria, and traceable progress.', 'تطبيق عملي لمنهجية Agile عبر زيادات برمجية هندسية قابلة للقياس ومعايير قبول فنية محددة.')}</p>`, 'c-card')}
      ${A(1, `<h4 class="c-card-h" style="color:var(--blue); font-size:16px;">2. ${tr('Architectural Feasibility', 'جدوى المعمارية')}</h4>
        <p class="c-card-p" style="font-size:13.5px; line-height:1.5;">${tr('Modular layered design with Docker worker isolation, rule-based security reference grounding, and external AI service integration.', 'معمارية معيارية بطبقات مع عزل بيئات التشغيل بحاويات Docker، ربط المراجع القياسية وفق معايير مطابقة محددة، والتكامل مع خدمة ذكاء اصطناعي خارجية.')}</p>`, 'c-card c-blue')}
      ${A(2, `<h4 class="c-card-h" style="color:var(--violet); font-size:16px;">3. ${tr('Security & Data Protection', 'الأمان وحماية البيانات')}</h4>
        <p class="c-card-p" style="font-size:13.5px; line-height:1.5;">${tr('Data encryption using AES-256-GCM, with envelope encryption for key protection, securing stored findings and reports at rest.', 'تشفير البيانات باستخدام AES-256-GCM، وحماية مفاتيحها باستخدام تشفير المغلف، لحماية نتائج وتقارير الفحص أثناء التخزين (Data at Rest).')}</p>`, 'c-card c-violet')}
    </div>

    <div class="stat-box" style="margin-top:2px; border-color:var(--teal); padding:10px 24px;">
      <span style="font-size:24px;">🎓</span>
      <div class="stat-txt" style="font-size:15.5px;">
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

      <footer class="s-summary">
        <span class="sum-ic">💡</span>
        <div><b>${tr('Key Insight:', 'الخلاصة الجوهرية:')}</b> ${tr(s.note[0], s.note[1])}</div>
      </footer>
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
      ['01', '🔭', 'Discovery', 'الاستكشاف', 'Subfinder · Naabu · httpx · Kiterunner'],
      ['02', '📡', 'Scanning', 'فحص الثغرات', 'Nuclei & Wapiti'],
      ['03', '⚙️', 'Processing', 'المعالجة', 'Normalization & Dedup'],
      ['04', '🏷️', 'Enrichment', 'الإثراء المرجعي', 'CVE · CWE · CVSS Catalogs'],
      ['05', '🧠', 'AI Analysis', 'التحليل الذكي', 'Gemini Remediation Prompt'],
      ['06', '📑', 'Reporting', 'التقارير', 'Executive & Technical PDF (AES-256-GCM)']
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
      ['01', '🎯', 'Target Scope', 'تحديد الهدف', 'Designated URL / Host / API'],
      ['02', '🐳', 'Docker Worker', 'عزل الحاوية', 'Isolated Scanner Sandbox'],
      ['03', '⚙️', 'Processing', 'المعالجة', 'Normalization & PostgreSQL'],
      ['04', '📑', 'Targeted Report', 'التقرير المستقل', 'Technical Report (AES-256-GCM)']
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
      <span class="pn-ic">${s[1]}</span>
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
