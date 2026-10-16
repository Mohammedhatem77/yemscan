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
        <div><b>${tr('Supervisor:', 'المشرف:')}</b> <span style="color:var(--teal); font-weight:800;">${tr('Dr. Aisha Al-Hadm', 'د. عائشة الهضم')}</span></div>
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

// 4. Motivation / Significance (الشريحة 4)
addSlide(
  ['Slide 04: Project Significance', 'الشريحة 4: أهمية المشروع'],
  ['Project Significance', 'أهمية المشروع'],
  ['Significance', 'الأهمية والدافع'], 'tag-sec',
  ['Unified and structured approach to assessing externally exposed web assets and services.',
   'نهج موحد ومهيكل لتقييم أصول وخدمات الويب المكشوفة خارجياً ضمن نطاق مصرح به.'],
  () => `<div style="display:flex; flex-direction:column; gap:12px; width:100%; height:100%; justify-content:space-between;">
    ${A(0, `
      <div class="hl">
        <p style="font-size:16px; font-weight:700; text-align:center;">
          ${tr('“YemScan is significant because it provides a unified and structured approach to assessing externally exposed web assets and services within a defined and authorized scope.”',
               '«تكمن أهمية YemScan في توفير نهج موحد ومهيكل لتقييم أصول وخدمات الويب المكشوفة خارجياً ضمن نطاق محدد ومصرح به».')}
        </p>
      </div>
    `)}

    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:14px; width:100%;">
      ${A(1, `
        <div class="card" style="padding:14px 18px; border-color:rgba(45,212,191,0.35);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <h3 style="font-size:18.5px; font-weight:800; color:var(--teal); margin:0;">${tr('1. Security Significance', '1. الأهمية الأمنية')}</h3>
            <span style="font-size:11px; font-weight:800; padding:2px 8px; border-radius:4px; background:rgba(45,212,191,0.15); color:var(--teal); font-family:var(--font-mono);">VISIBILITY</span>
          </div>
          <p style="font-size:14.5px; line-height:1.55; color:#cbd5e1; margin:0;">${tr('“Improves visibility of externally exposed assets, services, ports, subdomains, and relevant API paths.”',
            '«تحسين الرؤية الشاملة للأصول والخدمات والمنافذ والنطاقات الفرعية ومسارات واجهات البرمجة (APIs) المكشوفة خارجياً».')}</p>
        </div>
      `)}

      ${A(2, `
        <div class="card" style="padding:14px 18px; border-color:rgba(56,189,248,0.35);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <h3 style="font-size:18.5px; font-weight:800; color:var(--blue); margin:0;">${tr('2. Technical Significance', '2. الأهمية التقنية')}</h3>
            <span style="font-size:11px; font-weight:800; padding:2px 8px; border-radius:4px; background:rgba(56,189,248,0.15); color:var(--blue); font-family:var(--font-mono);">PIPELINE</span>
          </div>
          <p style="font-size:14.5px; line-height:1.55; color:#cbd5e1; margin:0;">${tr('“Integrates multiple open-source tools within an organized external black-box scanning workflow.”',
            '«دمج وتنسيق أدوات مفتوحة المصدر متعددة ضمن سير عمل منظم لفحص الصندوق الأسود الخارجي».')}</p>
        </div>
      `)}

      ${A(3, `
        <div class="card" style="padding:14px 18px; border-color:rgba(167,139,250,0.35);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <h3 style="font-size:18.5px; font-weight:800; color:var(--violet); margin:0;">${tr('3. Research Significance', '3. الأهمية البحثية')}</h3>
            <span style="font-size:11px; font-weight:800; padding:2px 8px; border-radius:4px; background:rgba(167,139,250,0.15); color:var(--violet); font-family:var(--font-mono);">ENRICHMENT</span>
          </div>
          <p style="font-size:14.5px; line-height:1.55; color:#cbd5e1; margin:0;">${tr('“Supports the processing, enrichment, interpretation, and prioritization of security findings using structured data and AI-assisted analysis.”',
            '«دعم معالجة وإثراء وتفسير وتحديد أولويات النتائج الأمنية باستخدام البيانات المهيكلة والتحليل المعزز بالذكاء الاصطناعي».')}</p>
        </div>
      `)}

      ${A(4, `
        <div class="card" style="padding:14px 18px; border-color:rgba(251,191,36,0.35);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <h3 style="font-size:18.5px; font-weight:800; color:var(--amber); margin:0;">${tr('4. Practical Significance', '4. الأهمية التطبيقية')}</h3>
            <span style="font-size:11px; font-weight:800; padding:2px 8px; border-radius:4px; background:rgba(251,191,36,0.15); color:var(--amber); font-family:var(--font-mono);">REPORTING</span>
          </div>
          <p style="font-size:14.5px; line-height:1.55; color:#cbd5e1; margin:0;">${tr('“Helps reduce the effort required to operate separate tools and supports the preparation of Executive and Technical Reports.”',
            '«المساعدة في تقليص الجهد المبذول لتشغيل الأدوات المنفصلة ودعم إعداد التقارير التنفيذية والفنية».')}</p>
        </div>
      `)}
    </div>

    ${A(5, `
      <div style="background:rgba(15,23,42,0.85); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:10px 18px; font-size:14px; color:#cbd5e1; display:flex; justify-content:space-between; align-items:center;">
        <div><b>${tr('Proposed Protection Control:', 'ضوابط الحماية المقترحة:')}</b> ${tr('AES-256-GCM authenticated encryption is designed to protect sensitive scanning data and reports at rest (decrypted only during authorized access).',
          'تم تصميم النظام لحماية بيانات الفحص والتقارير الحساسة أثناء التخزين (Data at Rest) باستخدام التشفير الموثق AES-256-GCM (ويتم فك التشفير فقط أثناء الوصول المصرح به).')}</div>
        <span style="font-size:11.5px; color:var(--teal); font-family:var(--font-mono); font-weight:700;">NIST SP 800-38D</span>
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
  () => `<div style="display:flex; flex-direction:column; gap:12px; width:100%; height:100%; justify-content:space-between;">
    ${A(0, `
      <div class="hl">
        <p style="font-size:15.5px; line-height:1.6; margin:0;">
          <strong>${tr('Primary Project Objective:', 'الهدف العام للمشروع:')}</strong>
          ${tr(' To design and build the YemScan platform for discovering and inventorying externally exposed digital assets and services, conducting black-box security scans, and processing, enriching, and analyzing results in a structured manner to support remediation recommendations and dual-tier reports.',
               ' تطوير منصة YemScan لاكتشاف وحصر الأصول والخدمات الرقمية المكشوفة خارجياً، وإجراء الفحوصات الأمنية بنهج الصندوق الأسود، ومعالجة وإثراء وتحليل النتائج بأسلوب مهيكل لدعم تقديم التوصيات وإنتاج التقارير التنفيذية والفنية.')}
        </p>
      </div>
    `)}

    <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:12px; width:100%;">
      ${A(1, `
        <div class="card" style="padding:12px 14px; border-color:rgba(45,212,191,0.25);">
          <div style="font-size:12px; font-weight:800; color:var(--teal); font-family:var(--font-mono); margin-bottom:4px;">OBJ 01</div>
          <h4 style="font-size:15px; font-weight:800; color:#fff; margin:0 0 4px 0;">${tr('1. Asset & Service Discovery', '1. اكتشاف الأصول والخدمات')}</h4>
          <p style="font-size:13px; line-height:1.5; color:#cbd5e1; margin:0;">${tr('Discover and inventory external assets, ports, and services via Subfinder, Naabu, httpx, and Kiterunner.', 'حصر النطاقات والمنافذ والخدمات وواجهات API.')}</p>
        </div>
      `)}

      ${A(2, `
        <div class="card" style="padding:12px 14px; border-color:rgba(56,189,248,0.25);">
          <div style="font-size:12px; font-weight:800; color:var(--blue); font-family:var(--font-mono); margin-bottom:4px;">OBJ 02</div>
          <h4 style="font-size:15px; font-weight:800; color:#fff; margin:0 0 4px 0;">${tr('2. Black-Box Scanning Execution', '2. تنفيذ الفحص الخارجي')}</h4>
          <p style="font-size:13px; line-height:1.5; color:#cbd5e1; margin:0;">${tr('Coordinate sequential and independent black-box scans using Nuclei and Wapiti.', 'تنسيق الفحص بنمطي التشغيل المتسلسل والمستقل.')}</p>
        </div>
      `)}

      ${A(3, `
        <div class="card" style="padding:12px 14px; border-color:rgba(167,139,250,0.25);">
          <div style="font-size:12px; font-weight:800; color:var(--violet); font-family:var(--font-mono); margin-bottom:4px;">OBJ 03</div>
          <h4 style="font-size:15px; font-weight:800; color:#fff; margin:0 0 4px 0;">${tr('3. Normalization & Enrichment', '3. التوحيد والإثراء المرجعي')}</h4>
          <p style="font-size:13px; line-height:1.5; color:#cbd5e1; margin:0;">${tr('Normalize findings and associate supported security references (CVE, CWE, CVSS, OWASP) using defined matching criteria.', 'توحيد المخرجات وربط المراجع القياسية وفق معايير مطابقة محددة.')}</p>
        </div>
      `)}

      ${A(4, `
        <div class="card" style="padding:12px 14px; border-color:rgba(251,191,36,0.25);">
          <div style="font-size:12px; font-weight:800; color:var(--amber); font-family:var(--font-mono); margin-bottom:4px;">OBJ 04</div>
          <h4 style="font-size:15px; font-weight:800; color:#fff; margin:0 0 4px 0;">${tr('4. AI Remediation Guidance', '4. التحليل الذكي والإرشاد')}</h4>
          <p style="font-size:13px; line-height:1.5; color:#cbd5e1; margin:0;">${tr('Use AI to explain findings in plain language and suggest remediation priorities.', 'توظيف الذكاء لتفسير النتائج واقتراح أولويات المعالجة.')}</p>
        </div>
      `)}

      ${A(5, `
        <div class="card" style="padding:12px 14px; border-color:rgba(52,211,153,0.25);">
          <div style="font-size:12px; font-weight:800; color:var(--green); font-family:var(--font-mono); margin-bottom:4px;">OBJ 05</div>
          <h4 style="font-size:15px; font-weight:800; color:#fff; margin:0 0 4px 0;">${tr('5. Centralized Dashboard & RBAC', '5. لوحة التحكم والوصول الآمن')}</h4>
          <p style="font-size:13px; line-height:1.5; color:#cbd5e1; margin:0;">${tr('Provide a centralized web dashboard with role-based access control and protected storage.', 'توفير لوحة تحكم ويب مركزية مع التحكم في الوصول المبني على الأدوار والتخزين المحمي.')}</p>
        </div>
      `)}

      ${A(6, `
        <div class="card" style="padding:12px 14px; border-color:rgba(251,113,133,0.25);">
          <div style="font-size:12px; font-weight:800; color:var(--red); font-family:var(--font-mono); margin-bottom:4px;">OBJ 06</div>
          <h4 style="font-size:15px; font-weight:800; color:#fff; margin:0 0 4px 0;">${tr('6. Dual-Tier Report Generation', '6. توليد التقارير المزدوجة')}</h4>
          <p style="font-size:13px; line-height:1.5; color:#cbd5e1; margin:0;">${tr('Generate encrypted executive and technical reports with actionable advice.', 'إنتاج تقارير تنفيذية وفنية مشفرة ومؤتمتة.')}</p>
        </div>
      `)}
    </div>

    ${A(7, `
      <div style="background:rgba(15,23,42,0.85); border:1px solid rgba(45,212,191,0.25); border-radius:10px; padding:8px 18px; font-size:13.5px; color:#cbd5e1; display:flex; justify-content:space-between; align-items:center;">
        <div><b>${tr('Security by Design Control:', 'معيار الأمان التصميمي:')}</b> ${tr('AES-256-GCM data encryption with envelope key protection for telemetry and reports at rest.', 'تشفير البيانات باستخدام AES-256-GCM وحماية المفاتيح بتشفير المغلف (DEK/KEK) للسجلات والتقارير المخزنة.')}</div>
        <span style="font-size:11.5px; color:var(--teal); font-family:var(--font-mono); font-weight:700;">NIST SP 800-38D</span>
      </div>
    `)}
  </div>`
);

// 6. Project Scope & Boundaries (الشريحة 6: نطاق المشروع وحدوده)
addSlide(
  ['Slide 06: Scope & Boundaries', 'الشريحة 6: نطاق المشروع وحدوده'],
  ['Project Scope and Boundaries', 'نطاق المشروع وحدوده'],
  ['Scope Boundaries', 'حدود النطاق'], 'tag-sec',
  ['Authorized external black-box scanning within a defined perimeter; out-of-scope activities are strictly excluded.',
   'فحص خارجي مصرح به بنهج الصندوق الأسود ضمن نطاق محدد؛ مع استبعاد كامل للأنشطة الخارجة عن النطاق.'],
  () => `<div style="display:flex; flex-direction:column; gap:12px; width:100%; height:100%; justify-content:space-between;">
    ${A(0, `
      <div class="hl">
        <p style="font-size:16px; font-weight:700; text-align:center; line-height:1.6;">
          ${tr('“The project focuses on discovering and assessing internet-exposed web assets and services using a black-box approach within a defined, authorized scope.”',
               '«يركز المشروع على اكتشاف أصول وخدمات الويب المكشوفة للإنترنت وفحصها أمنيًا بنهج الصندوق الأسود، ضمن نطاق محدد ومصرح به».')}
        </p>
      </div>
    `)}

    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:36px; width:100%; align-items:stretch;">
      ${A(1, `
        <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; border-inline-end: 1.5px solid rgba(255,255,255,0.12); padding-inline-end: 28px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; padding-bottom:6px; border-bottom:1.5px solid rgba(45,212,191,0.35);">
            <h3 style="color:var(--teal); font-size:21px; font-weight:800; margin:0;">
              ${tr('In-Scope (Included)', 'داخل النطاق (مشمول)')}
            </h3>
            <span class="status-badge" style="background:rgba(45,212,191,0.15); color:var(--teal); border:1px solid rgba(45,212,191,0.4); font-size:12.5px; padding:3px 10px; font-family:var(--font-mono);">
              INCLUDED
            </span>
          </div>

          <div style="display:flex; flex-direction:column; gap:12px;">
            <div style="border-bottom:1px dashed rgba(255,255,255,0.08); padding-bottom:10px; display:flex; gap:12px; align-items:flex-start;">
              <span style="color:var(--teal); font-weight:800; font-size:15px; font-family:var(--font-mono); background:rgba(45,212,191,0.1); padding:2px 8px; border-radius:4px; flex-shrink:0;">01</span>
              <div style="font-size:16px; font-weight:600; line-height:1.55; color:#f1f5f9;">
                ${tr('Discovery of external web assets, services, and API endpoints.', 'اكتشاف أصول الويب والخدمات ومسارات API الخارجية.')}
              </div>
            </div>

            <div style="border-bottom:1px dashed rgba(255,255,255,0.08); padding-bottom:10px; display:flex; gap:12px; align-items:flex-start;">
              <span style="color:var(--teal); font-weight:800; font-size:15px; font-family:var(--font-mono); background:rgba(45,212,191,0.1); padding:2px 8px; border-radius:4px; flex-shrink:0;">02</span>
              <div style="font-size:16px; font-weight:600; line-height:1.55; color:#f1f5f9;">
                ${tr('Security scanning using approved tools.', 'فحص أمني باستخدام الأدوات المعتمدة.')}
              </div>
            </div>

            <div style="border-bottom:1px dashed rgba(255,255,255,0.08); padding-bottom:10px; display:flex; gap:12px; align-items:flex-start;">
              <span style="color:var(--teal); font-weight:800; font-size:15px; font-family:var(--font-mono); background:rgba(45,212,191,0.1); padding:2px 8px; border-radius:4px; flex-shrink:0;">03</span>
              <div style="font-size:16px; font-weight:600; line-height:1.55; color:#f1f5f9;">
                ${tr('Sequential or independent scan execution.', 'تشغيل متسلسل أو مستقل.')}
              </div>
            </div>

            <div style="display:flex; gap:12px; align-items:flex-start;">
              <span style="color:var(--teal); font-weight:800; font-size:15px; font-family:var(--font-mono); background:rgba(45,212,191,0.1); padding:2px 8px; border-radius:4px; flex-shrink:0;">04</span>
              <div style="font-size:16px; font-weight:600; line-height:1.55; color:#f1f5f9;">
                ${tr('Findings organization, enrichment, analysis, and reporting.', 'تنظيم النتائج وإثراؤها وتحليلها وإعداد التقارير.')}
              </div>
            </div>
          </div>
        </div>
      `)}

      ${A(2, `
        <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; padding-inline-start: 4px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; padding-bottom:6px; border-bottom:1.5px solid rgba(244,63,94,0.35);">
            <h3 style="color:var(--red); font-size:21px; font-weight:800; margin:0;">
              ${tr('Out-of-Scope (Excluded)', 'خارج النطاق (مستبعد)')}
            </h3>
            <span class="status-badge" style="background:rgba(244,63,94,0.15); color:var(--red); border:1px solid rgba(244,63,94,0.4); font-size:12.5px; padding:3px 10px; font-family:var(--font-mono);">
              EXCLUDED
            </span>
          </div>

          <div style="display:flex; flex-direction:column; gap:12px;">
            <div style="border-bottom:1px dashed rgba(255,255,255,0.08); padding-bottom:10px; display:flex; gap:12px; align-items:flex-start;">
              <span style="color:var(--red); font-weight:800; font-size:15px; font-family:var(--font-mono); background:rgba(244,63,94,0.1); padding:2px 8px; border-radius:4px; flex-shrink:0;">01</span>
              <div style="font-size:16px; font-weight:600; line-height:1.55; color:#cbd5e1;">
                ${tr('Internal network scanning and source code analysis.', 'فحص الشبكات الداخلية وتحليل الشيفرة المصدرية.')}
              </div>
            </div>

            <div style="border-bottom:1px dashed rgba(255,255,255,0.08); padding-bottom:10px; display:flex; gap:12px; align-items:flex-start;">
              <span style="color:var(--red); font-weight:800; font-size:15px; font-family:var(--font-mono); background:rgba(244,63,94,0.1); padding:2px 8px; border-radius:4px; flex-shrink:0;">02</span>
              <div style="font-size:16px; font-weight:600; line-height:1.55; color:#cbd5e1;">
                ${tr('Active exploitation, social engineering, password guessing, and DoS attacks.', 'الاستغلال الفعلي والهندسة الاجتماعية وتخمين كلمات المرور وهجمات حجب الخدمة.')}
              </div>
            </div>

            <div style="border-bottom:1px dashed rgba(255,255,255,0.08); padding-bottom:10px; display:flex; gap:12px; align-items:flex-start;">
              <span style="color:var(--red); font-weight:800; font-size:15px; font-family:var(--font-mono); background:rgba(244,63,94,0.1); padding:2px 8px; border-radius:4px; flex-shrink:0;">03</span>
              <div style="font-size:16px; font-weight:600; line-height:1.55; color:#cbd5e1;">
                ${tr('Bypassing WAF, CAPTCHA, or DDoS protection.', 'تجاوز WAF أو CAPTCHA أو حماية DDoS.')}
              </div>
            </div>

            <div style="display:flex; gap:12px; align-items:flex-start;">
              <span style="color:var(--red); font-weight:800; font-size:15px; font-family:var(--font-mono); background:rgba(244,63,94,0.1); padding:2px 8px; border-radius:4px; flex-shrink:0;">04</span>
              <div style="font-size:16px; font-weight:600; line-height:1.55; color:#cbd5e1;">
                ${tr('Vulnerability remediation lifecycle and ticketing management.', 'إدارة دورة معالجة الثغرات والتذاكر.')}
              </div>
            </div>
          </div>
        </div>
      `)}
    </div>

    ${A(3, `
      <div style="background:rgba(15,23,42,0.8); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:8px 18px; font-size:14px; color:#cbd5e1; display:flex; justify-content:space-between; align-items:center;">
        <div><b>${tr('Documentation Baseline:', 'المرجع التوثيقي:')}</b> ${tr('Chapter 1 §1.5 defines strict black-box boundaries; internal pentesting and active exploitation are strictly excluded.', 'يحدد الفصل الأول (القسم 1.5) حدود الفحص الخارجي الصارم بنهج الصندوق الأسود، مع استبعاد تام لأي فحص داخلي أو استغلال فعلي.')}</div>
        <span style="font-size:11.5px; color:var(--teal); font-family:var(--font-mono); font-weight:700;">CHAPTER 1 §1.5</span>
      </div>
    `)}
  </div>`
);

// 7. Existing Systems / Related Work (الشريحة 7)
addSlide(
  ['Slide 07: Related Systems & Tools', 'الشريحة 7: الأنظمة والأدوات ذات الصلة'],
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
          <div style="font-size:12.5px; color:var(--text-dim); border-top:1px dashed rgba(255,255,255,0.08); padding-top:5px; display:flex; justify-content:space-between; flex-wrap:wrap; gap:6px;">
            <span>${tr('Note: Lack of documentation in the reviewed source does not imply absence of capability.', 'تنبيه: عدم التوثيق في المصدر المراجع لا يعني بالضرورة غياب القدرة.')}</span>
            <span>${tr('FortiScan: unpublished bachelor\'s graduation project, UST (Al-Sharaf et al., 2024).', 'FortiScan: مشروع تخرج بكالوريوس غير منشور، جامعة العلوم والتكنولوجيا (Al-Sharaf et al., 2024).')}</span>
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

// 10. System Overview / Architecture (الشريحة 10)
addSlide(
  ['Slide 10: System Architecture', 'الشريحة 10: معمارية النظام وتدفق البيانات'],
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

// 11. Development Methodology (الشريحة 11)
addSlide(
  ['Slide 11: Development Methodology', 'الشريحة 11: منهجية التطوير الهندسية'],
  ['Iterative & Incremental Development (Agile Principles)', 'التطوير التكراري والتزايدي وفق مبادئ Agile'],
  ['Methodology', 'منهجية Agile'], 'tag-prop',
  ['Iterative and incremental progression: requirements decomposition, engineering tasks, and planned technical acceptance criteria.',
   'تطوير تكراري وتزايدي: تفكيك المتطلبات إلى مهام هندسية، والتحقق وفق معايير قبول تقنية مخططة.'],
  () => `<div style="display:flex; flex-direction:column; gap:12px; width:100%; height:100%; justify-content:space-between;">
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:36px; width:100%; align-items:stretch;">
      ${A(0, `
        <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; border-inline-end: 1.5px solid rgba(255,255,255,0.12); padding-inline-end: 28px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding-bottom:6px; border-bottom:1.5px solid rgba(45,212,191,0.35);">
            <h3 style="color:var(--teal); font-size:19.5px; font-weight:800; margin:0;">
              ${tr('1. What Methodology is Used?', '1. ما المنهجية المستخدمة في تطوير المشروع؟')}
            </h3>
            <span class="status-badge" style="background:rgba(45,212,191,0.15); color:var(--teal); border:1px solid rgba(45,212,191,0.4); font-size:12px; padding:2px 8px; font-family:var(--font-mono);">
              AGILE LIFECYCLE
            </span>
          </div>

          <div style="background:rgba(45,212,191,0.06); border:1px solid rgba(45,212,191,0.2); border-radius:8px; padding:8px 12px; margin-bottom:10px;">
            <div style="font-size:14.5px; font-weight:700; color:var(--teal); margin-bottom:2px;">
              ${tr('Iterative & Incremental Agile Development:', 'التطوير التكراري والتزايدي وفق مبادئ Agile:')}
            </div>
            <p style="font-size:13.5px; line-height:1.5; color:#cbd5e1; margin:0;">
              ${tr('Progressive development cycles decomposing engineering requirements into discrete tasks and integration modules.',
                   'تطوير منصة YemScan عبر دورات تكرارية تزايدية تفكك المتطلبات إلى مهام برمجية ومحولات تكامل مستقلة.')}
            </p>
          </div>

          <div style="display:flex; flex-direction:column; gap:8px;">
            <div style="background:rgba(15,23,42,0.6); padding:8px 12px; border-radius:8px; border-left:3px solid var(--teal);">
              <b style="font-size:14.5px; color:#fff;">1. ${tr('Requirements & Task Breakdown:', 'ترتيب المتطلبات وتفكيك المهام:')}</b>
              <div style="font-size:13.5px; color:#cbd5e1; margin-top:2px; line-height:1.45;">${tr('Decomposing functional requirements into discrete technical engineering tasks.', 'تحليل المتطلبات الوظيفية إلى مهام برمجية وهندسية محددة.')}</div>
            </div>
            <div style="background:rgba(15,23,42,0.6); padding:8px 12px; border-radius:8px; border-left:3px solid var(--blue);">
              <b style="font-size:14.5px; color:#fff;">2. ${tr('Design & Incremental Development:', 'التصميم والتطوير التزايدي:')}</b>
              <div style="font-size:13.5px; color:#cbd5e1; margin-top:2px; line-height:1.45;">${tr('Developing tool integration adapters and pipeline logic incrementally.', 'تطوير وحدات تكامل الأدوات ومسار الفحص تدريجياً.')}</div>
            </div>
            <div style="background:rgba(15,23,42,0.6); padding:8px 12px; border-radius:8px; border-left:3px solid var(--amber);">
              <b style="font-size:14.5px; color:#fff;">3. ${tr('Testing & Integration:', 'الاختبار والتكامل:')}</b>
              <div style="font-size:13.5px; color:#cbd5e1; margin-top:2px; line-height:1.45;">${tr('Verifying data handover between tools and container sandbox boundaries.', 'اختبار تسليم البيانات بين الأدوات وضوابط بيئة التنفيذ.')}</div>
            </div>
            <div style="background:rgba(15,23,42,0.6); padding:8px 12px; border-radius:8px; border-left:3px solid var(--violet);">
              <b style="font-size:14.5px; color:#fff;">4. ${tr('Review & Refinement:', 'المراجعة والتحسين:')}</b>
              <div style="font-size:13.5px; color:#cbd5e1; margin-top:2px; line-height:1.45;">${tr('Reviewing test findings and refining implementation for subsequent stages.', 'تقييم نتائج الاختبارات ومراجعة الإشراف لإعادة ضبط العمل.')}</div>
            </div>
          </div>
        </div>
      `)}

      ${A(1, `
        <div style="display:flex; flex-direction:column; justify-content:space-between; height:100%; padding-inline-start: 4px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding-bottom:6px; border-bottom:1.5px solid rgba(56,189,248,0.35);">
            <h3 style="color:var(--blue); font-size:19.5px; font-weight:800; margin:0;">
              ${tr('2. Why Was It Chosen for YemScan?', '2. لماذا تم اختيار هذه المنهجية؟')}
            </h3>
            <span class="status-badge" style="background:rgba(56,189,248,0.15); color:var(--blue); border:1px solid rgba(56,189,248,0.4); font-size:12px; padding:2px 8px; font-family:var(--font-mono);">
              RATIONALE
            </span>
          </div>

          <div style="display:flex; flex-direction:column; gap:8px;">
            <div style="border-bottom:1px dashed rgba(255,255,255,0.08); padding-bottom:8px;">
              <b style="font-size:14.5px; color:#ffffff; display:block; margin-bottom:3px;">
                ${tr('Tool Diversity & Phased Integration:', 'تعدد الأدوات وتكاملها التدريجي:')}
              </b>
              <p style="font-size:13.5px; line-height:1.5; margin:0; color:#cbd5e1;">
                ${tr('Integrating 6 diverse tools requires phased unit testing for each tool adapter before orchestrating the full pipeline.',
                     'دمج 6 أدوات فحص متباينة يتطلب بناء واختبار تكامل كل أداة تدريجياً والتأكد من سلامة مخرجاتها قبل ربطها بالمسار المتسلسل.')}
              </p>
            </div>

            <div style="border-bottom:1px dashed rgba(255,255,255,0.08); padding-bottom:8px;">
              <b style="font-size:14.5px; color:#ffffff; display:block; margin-bottom:3px;">
                ${tr('Adapting to Empirical Test Results:', 'الاستجابة لنتائج الاختبارات التجريبية:')}
              </b>
              <p style="font-size:13.5px; line-height:1.5; margin:0; color:#cbd5e1;">
                ${tr('Refining parsers and output normalizers iteratively based on live tool testing rather than static upfront assumptions.',
                     'مراجعة وتعديل معالجات البيانات ومحللات المخرجات بناءً على ما تظهره الاختبارات التجريبية الفعلية.')}
              </p>
            </div>

            <div>
              <b style="font-size:14.5px; color:#ffffff; display:block; margin-bottom:3px;">
                ${tr('Partial Failure Risk Mitigation:', 'تقليل المخاطر ومعالجة الفشل الجزئي:')}
              </b>
              <p style="font-size:13.5px; line-height:1.5; margin:0; color:#cbd5e1;">
                ${tr('Isolating potential faults per tool without breaking the whole workflow, ensuring preserved progress at each step.',
                     'إتاحة عزل المشكلات البرمجية لكل أداة دون تعطيل النظام ككل، وضمان استمرار حفظ مخرجات المراحل السابقة.')}
              </p>
            </div>
          </div>

          <div style="background:rgba(15,23,42,0.7); border:1px solid rgba(251,191,36,0.3); border-radius:8px; padding:9px 12px; margin-top:8px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px;">
              <span style="font-size:12.5px; font-weight:800; color:var(--amber); font-family:var(--font-mono); text-transform:uppercase;">
                ${tr('Planned Acceptance Criterion Example', 'مثال معيار قبول تقني مخطط')}
              </span>
              <span class="status-badge badge-plan" style="font-size:11px; padding:2px 7px;">${tr('Planned (No Pass Mark)', 'مخطط (غير مختوم باجتياز)')}</span>
            </div>
            <div style="font-size:14px; color:#f1f5f9; line-height:1.5;">
              ${tr('“Completed stage results remain accessible and preserved if a subsequent tool fails.”',
                   '«تبقى نتائج المراحل المكتملة متاحة ومحفوظة عند فشل أداة لاحقة».')}
            </div>
          </div>
        </div>
      `)}
    </div>

    ${A(2, `
      <div style="background:rgba(15,23,42,0.8); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:8px 18px; font-size:14px; color:#cbd5e1; display:flex; justify-content:space-between; align-items:center;">
        <div><b>${tr('Academic Documentation Note (Chapter 1 §1.6):', 'الملاحظة التوثيقية (الفصل الأول §1.6):')}</b> ${tr('The team operates on direct engineering requirements and tasks aligned with Agile principles, without formal User Stories.',
          'يعتمد الفريق على تفكيك المتطلبات والمهام الهندسية المباشرة وفق مبادئ Agile، دون صياغة قصص مستخدمين (User Stories).')}</div>
        <span style="font-size:11.5px; color:var(--teal); font-family:var(--font-mono); font-weight:700;">CHAPTER 1 §1.6</span>
      </div>
    `)}
  </div>`
);

// 12. Initial Engine Implementation Progress (الشريحة 12: التنفيذ الأولي لمحرك الفحص)
addSlide(
  ['Slide 12: Engine Progress', 'الشريحة 12: تقدم محرك الفحص'],
  ['Initial Engine Implementation Progress', 'التنفيذ الأولي لمحرك الفحص'],
  ['Engine Progress', 'تقدم التنفيذ'], 'tag-wip',
  ['Initial implementation of the scan orchestration engine, with verification of tool integrations and result normalization currently ongoing.',
   'تنفيذ أولي لمحرك تنسيق الفحص، مع استمرار التحقق من تكامل الأدوات وتوحيد النتائج.'],
  () => {
    const items = [
      ['1. API Services & Scan Management', '1. خدمات API وتنظيم الفحوص', 'In Codebase · Scope WIP', 'موجود كودياً · النطاق قيد الاستكمال', 'badge-done',
       'FastAPI endpoints for target submission, scan job creation, and status inspection; authorization and scope controls are ongoing.',
       'واجهات FastAPI لاستقبال الهدف وإنشاء مهام الفحص ومتابعة حالتها؛ وضوابط الصلاحيات وفحص النطاق قيد الاستكمال.'],
      ['2. Sequential Coordinator & Tool Integrations', '2. منسق التنفيذ المتسلسل وتكاملات الأدوات', 'Partial · In Progress', 'جزئي · قيد الاستكمال', 'badge-wip',
       'Sequential coordination pipeline passing targets between discovery tools (Subfinder, Naabu, httpx); verifying CLI executions and completing Kiterunner.',
       'مسار تنسيق متسلسل لتمرير الأهداف بين أدوات الاستكشاف (Subfinder وNaabu وhttpx)؛ مع التحقق من استدعاء الأدوات واستكمال Kiterunner.'],
      ['3. Output Collection, Retrieval & Initial Parsing', '3. جمع المخرجات واسترجاعها ومعالجتها الأولية', 'Initial · Needs Fixes', 'أولي · يحتاج تصحيحاً', 'badge-draft',
       'Raw output persistence and initial parsers implemented; addressing deduplication, merge consistency, and partial failure handling.',
       'حفظ المخرجات الخام ومحللات أولية في الكود؛ مع معالجة ملاحظات إلغاء التكرار والدمج وحالات الفشل الجزئي.']
    ];
    return `<div class="c-col" style="gap:12px;">
      <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(20,184,166,0.08); border:1px solid rgba(20,184,166,0.25); border-radius:8px; padding:8px 16px; font-size:15px; color:#f1f5f9;">
        <span><b>${tr('Status Assessment:', 'توصيف الحالة البرمجية:')}</b> ${tr('Initial implementation with verification of tool integrations and result validity ongoing.', 'تنفيذ أولي، مع استكمال التحقق من تكامل الأدوات وصحة النتائج.')}</span>
        <span class="status-badge badge-wip" style="font-size:13px; padding:3px 10px;">${tr('In Progress', 'قيد الاستكمال')}</span>
      </div>

      ${items.map((s, idx) => A(idx, `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">
          <b style="font-size:18px; color:var(--teal);">${tr(s[0], s[1])}</b>
          <span class="status-badge ${s[4]}" style="font-size:13px; padding:3px 10px;">${tr(s[2], s[3])}</span>
        </div>
        <p class="c-card-p" style="font-size:15.5px; line-height:1.6; margin:0;">${tr(s[5], s[6])}</p>`, 'c-card')).join('')}

      <div style="background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:8px 16px; font-size:14px; color:var(--amber); text-align:center;">
        <b>${tr('Status Notice:', 'إشعار الحالة:')}</b> ${tr('Initial implementation progress; operational sprint artifacts and acceptance evidence will be attached following verification.',
                 'تقدم أولي في التنفيذ قيد التحقق؛ وستُرفق وثائق وأدلة السبرنتات التشغيلية المفصلة لاحقاً بعد التحقق منها.')}
      </div>
    </div>`;
  }
);

// 13. Functional & Non-Functional Requirements Status (الشريحة 13)
addSlide(
  ['Slide 13: Requirements Status', 'الشريحة 13: حالة المتطلبات'],
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

// 17. Engine Testing Scenarios & Verification (الشريحة 17: سيناريوهات اختبار المحرك وحالة التحقق)
addSlide(
  ['Slide 17: Testing Scenarios', 'الشريحة 17: سيناريوهات الاختبار وحالة التحقق'],
  ['Engine Testing Scenarios & Verification Status', 'سيناريوهات اختبار المحرك وحالة التحقق المخبري'],
  ['Engine Testing', 'اختبارات المحرك'], 'tag-sec',
  ['Controlled engine test scenarios: distinguishing planned cases from local prototype tests, with operational verification ongoing.',
   'سيناريوهات اختبار المحرك المنضبطة: تمييز الحالات المخططة عما تم في النموذج الأولي محلياً، مع استمرار التحقق التشغيلي.'],
  () => {
    const tests = [
      ['Input Handover Between Tools', 'تسليم المدخلات بين الأدوات',
       'Passing discovered subdomains and open ports to subsequent tools without data loss.',
       'تمرير النطاقات الفرعية والمنافذ المكتشفة إلى الأدوات التالية في المسار دون فقد للبيانات.',
       'Executed with Issues · Local Prototype', 'أُجري محلياً مع وجود مشكلات مسارات', 'badge-draft'],
      ['Output Normalization & Data Retention', 'توحيد المخرجات وعدم فقد البيانات',
       'Parsing raw CLI tool outputs into unified findings schema without dropping proof artifacts.',
       'تحويل مخرجات الأدوات إلى بنية موحدة دون فقدان أدلة الإثبات ومصادر الاستخراج.',
       'Executed with Issues · Fixes Needed', 'أُجري مع وجود مشكلة · يلزم تصحيح الدمج', 'badge-draft'],
      ['Partial Tool Failure Handling', 'معالجة الفشل الجزئي للأداة',
       'Failure of a single tool allows completed stages to remain accessible without total pipeline crash.',
       'فشل أداة معينة يتيح بقاء نتائج المراحل المكتملة متاحة دون توقف المسار كاملاً.',
       'Executed with Issues · Traps Ongoing', 'أُجري مع وجود مشكلة · استكمال المعالجة', 'badge-wip'],
      ['Scan Cancellation & Timeout Hooks', 'إلغاء الفحص والمهل الزمنية',
       'User cancellation halts active scanner processes promptly and records state cleanly.',
       'إلغاء الفحص من المستخدم يوقف عمليات الأدوات النشطة بانتظام ويسجل الحالة بدقة.',
       'Planned · Integration in Progress', 'مخطط · قيد التكامل البرمجي', 'badge-plan']
    ];
    return `<div class="c-col" style="gap:10px;">
      <table class="comp-table" style="font-size:14.5px;">
        <thead>
          <tr>
            <th style="width:28%; padding:9px 12px;">${tr('Test Scenario', 'سيناريو الاختبار')}</th>
            <th style="width:44%; padding:9px 12px;">${tr('Expected Behavior / Success Criterion', 'السلوك المتوقع ومعيار النجاح')}</th>
            <th class="center" style="width:28%; padding:9px 8px;">${tr('Verification Outcome', 'النتيجة وحالة التحقق')}</th>
          </tr>
        </thead>
        <tbody>
          ${tests.map(t => `
            <tr>
              <td style="padding:8px 12px;"><b style="font-size:15px; color:#ffffff;">${tr(t[0], t[1])}</b></td>
              <td style="padding:8px 12px; font-size:14px; line-height:1.5;">${tr(t[2], t[3])}</td>
              <td class="center" style="padding:8px 6px;"><span class="status-badge ${t[6]}" style="font-size:12.5px; padding:3px 8px;">${tr(t[4], t[5])}</span></td>
            </tr>`).join('')}
        </tbody>
      </table>

      <div style="background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.08); border-radius:8px; padding:8px 16px; font-size:14px; color:#cbd5e1; display:flex; align-items:center; gap:8px;">
        <span><b>${tr('Testing Scope Note:', 'ملاحظة نطاق الاختبارات:')}</b> ${tr('Testing reflects local engine script validation with sample data, not full black-box external scans. Code review notes identify specific areas for deduplication and error-handling remediation.',
          'تعكس الاختبارات تحققاً محلياً لنصوص المحرك باستخدام بيانات تجريبية، وليست فحوصات خارجية كاملة. وملاحظات المراجعة الكودية تحدد مواضع التصحيح للدمج ومعالجة الأخطاء.')}</span>
      </div>
    </div>`;
  }
);

// 18. Preliminary Results & Technical Validation (الشريحة 18)
addSlide(
  ['Slide 18: Prototype Outputs', 'الشريحة 18: مخرجات النموذج الأولي والتحقق الفني'],
  ['Prototype Outputs & Technical Verification', 'مخرجات النموذج الأولي والتحقق الفني'],
  ['Technical Verification', 'التحقق الفني'], 'tag-sec',
  ['Observations from local prototype execution: validating sequential pipeline feasibility while identifying parser and state management refinements.',
   'ملاحظات تشغيل النموذج الأولي محلياً: تأكيد جدوى التسلسل البرمجي مع تحديد متطلبات تحسين المحللات وإدارة الحالة.'],
  () => `<div class="c-grid-3">
    ${A(0, `<h3 class="c-card-h" style="font-size:20px; color:var(--teal);">${tr('Automated Pipeline Handover', 'جدوى التسليم الآلي بين الأدوات')}</h3>
      <p class="c-card-p" style="font-size:15.5px; line-height:1.6;">${tr('Local prototype execution confirms the feasibility of passing discovery targets (Subfinder → Naabu → httpx) programmatically without manual operator intervention.',
        'أكدت تجارب النموذج الأولي محلياً جدوى تمرير أهداف الاستكشاف برمجياً (Subfinder ثم Naabu ثم httpx) بسلاسة دون تدخل يدوي من المشغل.')}</p>`, 'c-card')}

    ${A(1, `<h3 class="c-card-h" style="font-size:20px; color:var(--blue);">${tr('Normalization & Parsing Challenges', 'مخرجات التوحيد والتحديات الحالية')}</h3>
      <p class="c-card-p" style="font-size:15.5px; line-height:1.6;">${tr('Prototype parsers successfully extract assets and findings from tool outputs, while highlighting the need for refined deduplication and merge consistency algorithms.',
        'نجحت المحللات التجريبية في استخراج الأصول والنتائج، مع إظهار الحاجة لمعالجة أخطاء الدمج وإلغاء التكرار بين مخرجات الأدوات المتعددة.')}</p>`, 'c-card c-blue')}

    ${A(2, `<h3 class="c-card-h" style="font-size:20px; color:var(--violet);">${tr('AI Response Validation Design', 'تصميم التحقق من مخرجات الذكاء')}</h3>
      <p class="c-card-p" style="font-size:15.5px; line-height:1.6;">${tr('The proposed design enforces structural response validation and requires verifying conclusions and security references (CVE/CWE) against scan evidence prior to report inclusion.',
        'يعتمد التصميم المقترح التحقق البنيوي من مخرجات النموذج، واشتراط مطابقة الاستنتاجات والمراجع القياسية (CVE/CWE) مع أدلة الفحص قبل إدراجها في التقرير.')}</p>`, 'c-card c-violet')}
  </div>`
);

// 19. Technical Challenges & Mitigation (الشريحة 19)
addSlide(
  ['Slide 19: Challenges & Mitigations', 'الشريحة 19: التحديات والمعالجات'],
  ['Encountered Challenges & Mitigation Status', 'التحديات والمعالجات وحالتها في الكود البرمجي'],
  ['Risk & Issue Management', 'إدارة المشكلات'], 'tag-prop',
  ['Concrete technical challenges encountered during engine development, root causes, and current mitigation status in codebase.',
   'تحديات تقنية فعلية واجهت تطوير المحرك، أسبابها الجذرية، وحالة المعالجة البرمجية في الكود.'],
  () => {
    const risks = [
      ['Divergent Scanner Output Schemas', 'اختلاف تنسيق مخرجات الأدوات',
       'CLI tools output varying formats (raw JSON, JSONL, plain text).',
       'أدوات الفحص تنتج مخرجات متباينة بصيغ JSON ونصوص عادية وسجلات أسطر.',
       'Custom parsing adapter functions with source provenance tracking.',
       'تطوير دوال مهايئة (Adapters) لمعالجة التنسيقات وتتبع مصدر كل نتيجة.',
       'Partial · Refinement Needed', 'جزئي · يحتاج تحسيناً', 'badge-wip'],
      ['Cross-Platform Execution Paths', 'مسارات التنفيذ عبر المنصات',
       'Differences in binary paths, environment vars, and Docker socket between Windows host and Linux containers.',
       'تباين مسارات الأدوات ومتغيرات البيئة ومقبس Docker بين خادم التطوير وبيئة الحاويات.',
       'Path normalization helpers and environment-aware execution wrappers in engine config.',
       'دوال مساعدة لتوحيد المسارات ومغلفات تنفيذ تراعي بيئة التشغيل في إعدادات المحرك.',
       'In Codebase · Testing Ongoing', 'موجود كودياً · قيد الاختبار', 'badge-wip'],
      ['Long-Running Scan Execution', 'إدارة المهام طويلة الأمد',
       'Synchronous tool runs block HTTP threads; standalone Celery/Redis worker not yet configured.',
       'التشغيل المتزامن يعطل خيوط HTTP؛ ومشغل المهام المستقل (Celery/Redis) لم يُهيأ بعد.',
       'FastAPI BackgroundTasks used as an in-process workaround; standalone queue planned for production.',
       'استخدام FastAPI BackgroundTasks كمعالجة داخلية مؤقتة؛ والمشغل المستقل مخطط للإنتاج.',
       'In-Process Workaround · Worker Planned', 'معالجة داخلية مؤقتة · المشغل مخطط', 'badge-draft']
    ];
    return `<div class="c-col">
      <table class="comp-table" style="font-size:14.5px;">
        <thead>
          <tr>
            <th style="width:24%; padding:9px 12px;">${tr('Challenge Encountered', 'التحدي التقني الفعلي')}</th>
            <th style="width:30%; padding:9px 12px;">${tr('Root Cause', 'السبب الجذري')}</th>
            <th style="width:30%; padding:9px 12px;">${tr('Codebase Action / Mitigation', 'الإجراء والمعالجة البرمجية')}</th>
            <th class="center" style="width:16%; padding:9px 8px;">${tr('Status', 'الحالة')}</th>
          </tr>
        </thead>
        <tbody>
          ${risks.map(r => `
            <tr>
              <td style="padding:8px 12px;"><b style="font-size:15px; color:#ffffff;">${tr(r[0], r[1])}</b></td>
              <td style="padding:8px 12px; font-size:14px; line-height:1.5;">${tr(r[2], r[3])}</td>
              <td style="padding:8px 12px; font-size:14px; line-height:1.5;">${tr(r[4], r[5])}</td>
              <td class="center" style="padding:8px 6px;"><span class="status-badge ${r[8]}" style="font-size:12.5px; padding:3px 8px;">${tr(r[6], r[7])}</span></td>
            </tr>`).join('')}
        </tbody>
      </table>
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
      ['Cluster 1: Engine Remediation & Tool Integration', 'المجموعة 1: تصحيح المحرك واستكمال تكامل الأدوات',
       'Priority 1', 'أولوية 1', 'badge-wip',
       'Fix normalization deduplication and merge issues; complete Kiterunner integration; verify native tool executions in isolated container environment.',
       'تصحيح أخطاء إلغاء التكرار والدمج في المحللات؛ استكمال تكامل Kiterunner؛ والتحقق من تشغيل الأدوات الأصلية داخل بيئة الحاويات المعزولة.'],
      ['Cluster 2: Core Services, Database & Security Controls', 'المجموعة 2: الخدمات الأساسية وقاعدة البيانات وضوابط الحماية',
       'Priority 2', 'أولوية 2', 'badge-plan',
       'Implement PostgreSQL database schema; build authentication, RBAC, and ownership checks; implement AES-256-GCM data encryption and KEK secret store separation.',
       'تنفيذ مخطط قاعدة بيانات PostgreSQL؛ بناء منظومة المصادقة والصلاحيات وفحص الملكية؛ وتطبيق تشفير AES-256-GCM وإدارة KEK في مخزن أسرار منفصل.'],
      ['Cluster 3: Reference Enrichment, AI Analysis & Dual Reports', 'المجموعة 3: الإثراء المرجعي وتحليل الذكاء والتقارير المزدوجة',
       'Priority 3', 'أولوية 3', 'badge-plan',
       'Automate CVE/CWE and OWASP reference enrichment; integrate Gemini 3.8 Flash remediation pipeline with prompt minimization; build executive and technical report generators.',
       'أتمتة الإثراء المرجعي بمعايير CVE/CWE وOWASP؛ دمج مسار استدعاء Gemini 3.8 Flash لتفسير المعالجة مع تقليل البيانات؛ وتطوير مولد التقارير المزدوجة.'],
      ['Cluster 4: Frontend Dashboard, Benchmarking & Documentation', 'المجموعة 4: الواجهة التفاعلية والتقييم المخبري والتوثيق',
       'Priority 4', 'أولوية 4', 'badge-plan',
       'Develop interactive web dashboard; conduct laboratory evaluation against benchmark targets; complete graduation thesis and project defense preparation.',
       'تطوير لوحة التحكم التفاعلية؛ إجراء التقييم المخبري المنضبط على أهداف معيارية؛ واستكمال وثيقة الأطروحة والاستعداد للمناقشة النهائية.']
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

// 21. Conclusion / Q&A (الشريحة 21)
addSlide(
  ['Slide 21: Conclusion & Readiness', 'الشريحة 21: الخاتمة والجاهزية لمشروع (2)'],
  ['Conclusion & Graduation Project (2) Readiness', 'الخاتمة: خلاصة التقدم والجاهزية لمشروع التخرج (2)'],
  ['Conclusion & Readiness', 'الخاتمة والجاهزية'], 'tag-sec',
  ['Midterm defense summary: solid theoretical foundation and architectural design, initial engine progress, and a structured roadmap for completion in Project (2).',
   'خلاصة المناقشة النصفية: أساس نظري وتصميم معماري رصين، تقدم أولي في محرك الفحص، وخطة واضحة للاستكمال في مشروع التخرج (2).'],
  () => `<div class="c-col" style="align-items:center; gap:14px; text-align:center;">
    <div style="font-size:52px; font-weight:900; letter-spacing:2px; line-height:1; background:linear-gradient(120deg, #ffffff, #2dd4bf, #38bdf8); -webkit-background-clip:text; background-clip:text; color:transparent;">
      YemScan
    </div>
    <div style="font-size:16.5px; color:#e2e8f0; max-width:960px; line-height:1.6;">
      ${tr('Midterm Evaluation Summary: The team has established a rigorous academic and theoretical foundation, designed the modular architecture integrating with an external AI service, achieved initial implementation progress on the scanning engine, and defined a clear technical roadmap for completion in Graduation Project (2).',
           'خلاصة التقييم النصفي: نجح الفريق في إرساء الأساس النظري والأكاديمي الرصين، وتصميم المعمارية المعيارية المتكاملة مع خدمة الذكاء الاصطناعي الخارجية، وتحقيق تقدم أولي في برمجة محرك الفحص، مع تحديد خارطة طريق فنية واضحة للاستكمال في مشروع التخرج (2).')}
    </div>

    <div class="c-grid-3" style="max-width:1120px; text-align:start;">
      ${A(0, `<h4 class="c-card-h" style="color:var(--teal); font-size:17.5px;">1. ${tr('Academic & Design Progress', 'التقدم الأكاديمي والتصميمي')}</h4>
        <p class="c-card-p" style="font-size:14.5px; line-height:1.55;">${tr('Comprehensive literature review, problem formulation, and modular architectural design with defined trust boundaries and cryptographic specifications.', 'دراسة مرجعية شاملة، صياغة دقيقة للمشكلة، وتصميم معماري معياري بحدود ثقة واضحة ومواصفات تشفير محددة.')}</p>`, 'c-card')}
      ${A(1, `<h4 class="c-card-h" style="color:var(--blue); font-size:17.5px;">2. ${tr('Initial Engine Implementation', 'التنفيذ الأولي لمحرك الفحص')}</h4>
        <p class="c-card-p" style="font-size:14.5px; line-height:1.55;">${tr('Initial codebase integrating discovery tools, sequential execution logic, and raw output parsing; undergoing refinement and empirical verification.', 'كود برمجي أولي يدمج أدوات الاستكشاف ومنطق التنفيذ المتسلسل ومحللات المخرجات؛ ويخضع حالياً للتحسين والتحقق المخبري.')}</p>`, 'c-card c-blue')}
      ${A(2, `<h4 class="c-card-h" style="color:var(--violet); font-size:17.5px;">3. ${tr('Next Steps & Completion', 'الخطوات التالية والاستكمال')}</h4>
        <p class="c-card-p" style="font-size:14.5px; line-height:1.55;">${tr('Structured 4-cluster roadmap covering engine fixes, core authentication/storage, reference enrichment with AI, and lab evaluation for final defense.', 'خطة عمل محددة في 4 مجموعات تشمل تصحيح المحرك، بناء الحسابات والتخزين، الإثراء بالذكاء، والتقييم المخبري للمناقشة النهائية.')}</p>`, 'c-card c-violet')}
    </div>

    <div class="stat-box" style="margin-top:2px; border-color:var(--teal); padding:12px 28px;">
      <div class="stat-txt" style="font-size:17px; line-height:1.5;">
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
        <div style="font-size:12.5px; color:#94a3b8; border-top:1px dashed rgba(255,255,255,0.08); padding-top:6px; display:flex; justify-content:space-between; flex-wrap:wrap; gap:6px;">
          <span>${isAr ? 'مرجع التوثيق: جدول 2.2 من وثيقة الفصل الثاني.' : 'Citation: Table 2.2 from Chapter 2 documentation.'}</span>
          <span>${isAr ? 'FortiScan: مشروع تخرج بكالوريوس غير منشور، جامعة العلوم والتكنولوجيا (الشرف وآخرون، 2024).' : 'FortiScan: unpublished bachelor\'s graduation project, UST (Al-Sharaf et al., 2024).'}</span>
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
