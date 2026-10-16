/* YemScan — Midterm Graduation Project Presentation Engine
   Follows Official UST Faculty Guidelines for Graduation Project (1)
   20-Slide Standard Academic Template (Cybersecurity & Networking)
   Supervised by: Dr. Aisha Al-Hadm · Academic Year: 2026-2027
   Team: Mohammed Saleh Hatem, Nassar Ahmed Al-Fattahi, Mohammed Abdulwahid Alrubaidi,
         Younes Mohammed Alsarory, Abdulmajid Abulkarim Anqa
*/
(function(){
'use strict';

let L = localStorage.getItem('ys_lang') || 'en';
let cur = 0; // 0..19: 20 Slides

const tr = (en, ar) => (L === 'ar' ? ar : en);
const A = (i, html, cls) => `<div class="${cls || ''} anim" style="--i:${i}">${html}</div>`;

const I18N = {
  headerContext: {
    en: 'UST · Cybersecurity & Networking · Midterm Defense 2026-2027',
    ar: 'جامعة العلوم والتكنولوجيا · الأمن السيبراني والشبكات · مناقشة نصفية 2026-2027'
  },
  overview: { en: 'Overview', ar: 'الفهرس' },
  overviewTitle: { en: 'Slide Overview & Navigation (19 Slides)', ar: 'فهرس شرائح العرض والتنقل السريع (19 شريحة)' },
  overviewSub: { en: 'Presentation organized according to UST Guidelines', ar: 'تنظيم العرض وفق محاور دليل الجامعة' },
  close: { en: 'Close', ar: 'إغلاق' },
  prev: { en: 'Prev', ar: 'السابق' },
  next: { en: 'Next', ar: 'التالي' },
  reduceMotion: { en: 'Reduce Motion', ar: 'تقليل الحركة' },
  jumpTo: { en: 'Slide', ar: 'شريحة' },
  shortcutsTitle: { en: 'Keyboard Shortcuts', ar: 'اختصارات لوحة المفاتيح' }
};

/* ============================================================
   19 SLIDES — CLEAN, CONCISE & COMPLIANT WITH UST GUIDELINES
============================================================ */
const S = [];
const addSlide = (kicker, title, tagText, tagClass, renderFn) => {
  S.push({ kicker, title, tagText, tagClass, renderFn });
};

// 1. Title & Team
addSlide(
  ['Slide 01: Title & Team', 'الشريحة 1: العنوان وفريق العمل'],
  ['Project Identity & Research Team', 'هوية المشروع وفريق العمل والإشراف'],
  ['Team & Supervision', 'الفريق والإشراف'], 'tag-sec',
  () => `<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; width:100%; height:100%; text-align:center;">
    ${A(0, `
      <div style="display:inline-flex; align-items:center; gap:8px; padding:4px 16px; border-radius:100px; background:rgba(45,212,191,0.12); border:1px solid rgba(45,212,191,0.3); font-size:12px; font-weight:700; color:var(--teal); text-transform:uppercase; letter-spacing:1px; margin-bottom:10px;">
        <span style="width:7px; height:7px; border-radius:50%; background:var(--teal); box-shadow:0 0 8px var(--teal);"></span>
        ${tr('Graduation Project (1) Defense · Chapters 1, 2 & 3', 'مناقشة مشروع التخرج (1) · الفصول 1، 2 و 3')}
      </div>
      <p style="font-size:15px; color:#cbd5e1; font-weight:600; margin:0 0 8px 0;">
        ${tr('University of Science and Technology · Faculty of Computing & IT · Department of Computer Science',
             'جامعة العلوم والتكنولوجيا · كلية الحاسبات وتكنولوجيا المعلومات · قسم علوم الحاسوب')}
      </p>
      <h1 style="font-size:clamp(32px, 3.8vw, 44px); font-weight:900; line-height:1.2; color:#ffffff; margin:0 0 8px 0; background:linear-gradient(135deg, #ffffff 20%, var(--teal) 75%, var(--blue) 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">
        YemScan: ${tr('Yemeni Web Attack and Vulnerability Scanner', 'الماسح اليمني لفحص ثغرات وهجمات الويب')}
      </h1>
      <p style="font-size:15.5px; color:#94a3b8; max-width:900px; line-height:1.6; margin:0 auto 16px auto;">
        ${tr('An integrated platform for authorized external black-box asset discovery, security scanning, reference enrichment, and AI-assisted reporting.',
             'منصة متكاملة لاكتشاف الأصول وفحصها أمنياً بأسلوب الصندوق الأسود، مع الإثراء المرجعي والتقارير المدعومة بالذكاء الاصطناعي.')}
      </p>

      <div class="team-title-grid" style="margin:0 auto 16px auto; max-width:980px;">
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

      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; background:rgba(15,23,42,0.7); border:1px solid rgba(255,255,255,0.1); border-radius:10px; padding:10px 24px; font-size:14px; width:100%; max-width:980px; margin:0 auto;">
        <div><b>${tr('Supervisor:', 'المشرفة:')}</b> <span style="color:var(--teal); font-weight:800;">${tr('Dr. Aisha Al-Hadm', 'د. عائشة الحدم')}</span></div>
        <div><b>${tr('Major:', 'التخصص:')}</b> <span style="color:#ffffff; font-weight:700;">${tr('Cybersecurity & Networking', 'الأمن السيبراني والشبكات')}</span></div>
        <div><b>${tr('Methodology:', 'المنهجية:')}</b> <span style="color:var(--blue); font-weight:700;">${tr('Iterative Agile', 'منهجية Agile التكرارية')}</span></div>
        <div><b>${tr('Academic Year:', 'العام الجامعي:')}</b> <span style="color:#ffffff; font-weight:700;">2026 - 2027</span></div>
      </div>
    `)}
  </div>`
);

// 2. Background & Context
addSlide(
  ['Slide 02: Background', 'الشريحة 2: الخلفية والسياق'],
  ['External Attack Surface & Web Exposure', 'الخلفية: سطح الهجوم الخارجي وتعرض الويب'],
  ['Background', 'الخلفية'], 'tag-sec',
  () => `<div class="split-ill-grid">
    <div style="display:flex; flex-direction:column; gap:12px; justify-content:space-between;">
      ${A(0, `
        <div class="c-card" style="padding:14px 18px;">
          <h3 style="font-size:18px; font-weight:800; color:var(--teal); margin:0 0 6px 0;">${tr('1. Expanding External Attack Surface', '1. توسع سطح الهجوم الخارجي')}</h3>
          <p style="font-size:15px; line-height:1.55; color:#cbd5e1; margin:0;">${tr('Web applications rely on subdomains, ports, web services, and APIs that require continuous discovery and inventorying.',
            'تعتمد المنظومات الرقمية على نطاقات فرعية ومنافذ وواجهات API مكشوفة تتطلب حصراً وفحصاً مستمراً.')}</p>
        </div>
      `)}

      ${A(1, `
        <div class="c-card c-blue" style="padding:14px 18px;">
          <h3 style="font-size:18px; font-weight:800; color:var(--blue); margin:0 0 6px 0;">${tr('2. External Black-Box Assessment', '2. الفحص الخارجي بنهج الصندوق الأسود')}</h3>
          <p style="font-size:15px; line-height:1.55; color:#cbd5e1; margin:0;">${tr('Examines externally accessible interfaces within an authorized scope without requiring source code access.',
            'يقيّم الواجهات والخدمات المتاحة من الخارج ضمن نطاق مصرح به دون الحاجة للوصول إلى الشيفرة المصدرية.')}</p>
        </div>
      `)}

      ${A(2, `
        <div class="c-card c-violet" style="padding:14px 18px;">
          <h3 style="font-size:18px; font-weight:800; color:var(--violet); margin:0 0 6px 0;">${tr('3. Vulnerability Exploitation (Verizon DBIR 2025)', '3. استغلال الثغرات (تقرير Verizon DBIR 2025)')}</h3>
          <p style="font-size:15px; line-height:1.55; color:#cbd5e1; margin:0;">${tr('Vulnerability exploitation was an initial access vector in 20% of analyzed breaches (+34% over the previous report).',
            'شكّل استغلال الثغرات مدخل الوصول الأولي في 20% من الاختراقات المحللة، بزيادة 34% عن التقرير السابق.')}</p>
        </div>
      `)}

      ${A(3, `
        <div class="srow">
          <div class="sb">
            <div class="snum">20%</div>
            <div class="slbl">${tr('Initial Breach Vector', 'مدخل اختراق أولي')}</div>
          </div>
          <div class="sb">
            <div class="snum">+34%</div>
            <div class="slbl">${tr('vs. Previous Report', 'عن التقرير السابق')}</div>
          </div>
          <div class="sb">
            <div class="snum">Black-Box</div>
            <div class="slbl">${tr('Authorized Scope', 'ضمن نطاق مصرح به')}</div>
          </div>
        </div>
      `)}
    </div>

    ${A(4, `
      <div class="ill-card">
        <div class="ill-frame" onclick="openImgModal('images/soc_command_center.jpg', '${tr('External Attack Surface & Exposed Web Services', 'سطح الهجوم الخارجي والخدمات المكشوفة')}')">
          <img src="images/soc_command_center.jpg" alt="Attack Surface" class="ill-img" loading="lazy">
          <div class="ill-zoom-hint"><span>ZOOM</span></div>
        </div>
        <div class="ill-caption">
          <div class="ill-title">${tr('External Attack Surface', 'سطح الهجوم الخارجي')}</div>
          <div class="ill-sub">${tr('EXPOSED ASSETS & SERVICES', 'الأصول والخدمات المكشوفة')}</div>
        </div>
      </div>
    `)}
  </div>`
);

// 3. Problem Statement & Significance
addSlide(
  ['Slide 03: Problem Statement', 'الشريحة 3: مشكلة البحث وأهميته'],
  ['Problem Statement & Project Significance', 'صياغة المشكلة وأهمية المشروع'],
  ['Problem & Value', 'المشكلة والأهمية'], 'tag-prop',
  () => `<div class="split-ill-grid">
    <div style="display:flex; flex-direction:column; gap:12px; justify-content:space-between;">
      ${A(0, `
        <div class="c-card c-amber" style="padding:13px 16px;">
          <h3 style="font-size:17.5px; font-weight:800; color:var(--amber); margin:0 0 4px 0;">${tr('1. Fragmented Tool Execution', '1. تشتت تشغيل الأدوات')}</h3>
          <p style="font-size:14.5px; line-height:1.5; color:#cbd5e1; margin:0;">
            ${tr('Operating discovery and scanning tools separately requires manual effort to transfer inputs and manage tasks.',
                 'تشغيل أدوات الاستكشاف والفحص بشكل منفصل يتطلب جهداً يدوياً لنقل المدخلات وإدارة المهام.')}
          </p>
        </div>
      `)}

      ${A(1, `
        <div class="c-card c-blue" style="padding:13px 16px;">
          <h3 style="font-size:17.5px; font-weight:800; color:var(--blue); margin:0 0 4px 0;">${tr('2. Heterogeneous Scanner Outputs', '2. تباين صيغ وهياكل المخرجات')}</h3>
          <p style="font-size:14.5px; line-height:1.5; color:#cbd5e1; margin:0;">
            ${tr('Different tools produce varied formats and detail levels, complicating deduplication and comparison.',
                 'تنتج الأدوات مخرجات بصيغ وتفاصيل مختلفة، مما يصعّب إزالة التكرار والمقارنة الموحدة.')}
          </p>
        </div>
      `)}

      ${A(2, `
        <div class="c-card c-red" style="padding:13px 16px;">
          <h3 style="font-size:17.5px; font-weight:800; color:var(--red); margin:0 0 4px 0;">${tr('3. Difficulty Interpreting Raw Findings', '3. صعوبة تفسير النتائج الخام')}</h3>
          <p style="font-size:14.5px; line-height:1.5; color:#cbd5e1; margin:0;">
            ${tr('Raw outputs lack unified security reference mapping (CVE/CWE/OWASP/CVSS) and clear remediation priorities.',
                 'تفتقر المخرجات الخام للربط المرجعي الموحد (CVE/CWE/OWASP/CVSS) وتوضيح أولويات المعالجة.')}
          </p>
        </div>
      `)}

      ${A(3, `
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:8px;">
          <div class="sb" style="padding:8px;"><div style="font-size:13px; font-weight:800; color:var(--teal);">${tr('Security', 'أمنية')}</div><div style="font-size:11.5px; color:#cbd5e1;">${tr('Surface Visibility', 'وضوح الأصول')}</div></div>
          <div class="sb" style="padding:8px;"><div style="font-size:13px; font-weight:800; color:var(--blue);">${tr('Technical', 'تقنية')}</div><div style="font-size:11.5px; color:#cbd5e1;">${tr('Unified & Encrypted', 'أتمتة وتشفير')}</div></div>
          <div class="sb" style="padding:8px;"><div style="font-size:13px; font-weight:800; color:var(--violet);">${tr('Research', 'بحثية')}</div><div style="font-size:11.5px; color:#cbd5e1;">${tr('Applied Model', 'نموذج تطبيقي')}</div></div>
          <div class="sb" style="padding:8px;"><div style="font-size:13px; font-weight:800; color:var(--amber);">${tr('Practical', 'عملية')}</div><div style="font-size:11.5px; color:#cbd5e1;">${tr('Dual Reports', 'تقارير مزدوجة')}</div></div>
        </div>
      `)}
    </div>

    ${A(4, `
      <div class="ill-card">
        <div class="ill-frame" onclick="openImgModal('images/alert_fatigue_chaos.jpg', '${tr('Fragmented Security Tools & Heterogeneous Outputs', 'تشتت أدوات الفحص وتباين المخرجات')}')">
          <img src="images/alert_fatigue_chaos.jpg" alt="Tool Fragmentation" class="ill-img" loading="lazy">
          <div class="ill-zoom-hint"><span>ZOOM</span></div>
        </div>
        <div class="ill-caption">
          <div class="ill-title">${tr('Problem & 4 Significance Pillars', 'المشكلة وأبعاد الأهمية الأربعة')}</div>
          <div class="ill-sub">${tr('PROBLEM & SIGNIFICANCE', 'المشكلة والأهمية')}</div>
        </div>
      </div>
    `)}
  </div>`
);

// 4. Project Objectives
addSlide(
  ['Slide 04: Project Objectives', 'الشريحة 4: أهداف المشروع'],
  ['Main & Specific Project Objectives', 'الهدف العام والأهداف التفصيلية للمشروع'],
  ['Objectives', 'الأهداف'], 'tag-prop',
  () => {
    const objs = [
      ['1. Asset & Service Discovery', '1. اكتشاف الأصول والخدمات آلياً',
       'Inventory subdomains, open ports, live web services, and API paths.',
       'حصر النطاقات الفرعية والمنافذ والخدمات الحية ومسارات API.', 'var(--teal)'],
      ['2. Black-Box Security Scanning', '2. الفحص الأمني بالصندوق الأسود',
       'Integrate scanning tools supporting Sequential and Independent modes.',
       'دمج أدوات الفحص مع دعم النمطين التسلسلي والمستقل.', 'var(--blue)'],
      ['3. Processing & Enrichment', '3. معالجة البيانات وإثراؤها مرجعياً',
       'Normalize, deduplicate, and link findings to CVE, CWE, OWASP Top 10, and CVSS.',
       'توحيد النتائج وإزالة التكرار وربطها بـ CVE وCWE وOWASP وCVSS.', 'var(--violet)'],
      ['4. AI-Assisted Analysis', '4. التحليل والتوصيات بالذكاء الاصطناعي',
       'Summarize enriched findings and propose remediation without guessing references.',
       'تلخيص النتائج واقتراح أولويات المعالجة دون اعتماده مصدراً للتصنيفات.', 'var(--amber)'],
      ['5. Dashboard & Data Protection', '5. لوحة التحكم وحماية البيانات',
       'Web dashboard with RBAC, ownership isolation, and AES-256-GCM encryption.',
       'واجهة ويب مع صلاحيات RBAC وعزل الملكية وتشفير AES-256-GCM.', 'var(--green)'],
      ['6. Dual Report Generation', '6. توليد التقارير التنفيذية والفنية',
       'Automatically generate Executive and Technical Reports from structured templates.',
       'إنتاج تقارير تنفيذية وفنية آلياً وفق قوالب منظمة ومعتمدة.', 'var(--red)']
    ];

    return `<div style="display:flex; flex-direction:column; gap:14px; width:100%; height:100%; justify-content:space-between;">
      ${A(0, `
        <div class="hl" style="padding:12px 18px; display:flex; justify-content:space-between; align-items:center; gap:16px;">
          <p style="font-size:15.5px; font-weight:700; line-height:1.55; margin:0; color:#f8fafc;">
            <b style="color:var(--teal);">${tr('Main Objective:', 'الهدف الرئيسي:')}</b>
            ${tr('Develop YemScan for external asset discovery, black-box scanning, structured reference enrichment, and AI-supported Executive & Technical reporting.',
                 'تطوير منصة YemScan لاكتشاف الأصول الخارجية وفحصها بالصندوق الأسود، وإثرائها مرجعياً وتحليلها لإصدار تقارير تنفيذية وفنية.')}
          </p>
          <button type="button" class="pill-btn" onclick="openObjSpecModal()" style="font-size:12px; padding:5px 12px; flex-shrink:0;">
            ${tr('Details', 'تفاصيل إضافية')}
          </button>
        </div>
      `)}

      <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:14px; width:100%; flex:1;">
        ${objs.map((o, idx) => A(idx + 1, `
          <div class="c-card" style="padding:16px 18px; display:flex; flex-direction:column; justify-content:center; height:100%;">
            <h4 style="font-size:16.5px; font-weight:800; color:${o[4]}; margin:0 0 8px 0;">${tr(o[0], o[1])}</h4>
            <p style="font-size:14.5px; line-height:1.55; color:#cbd5e1; margin:0;">${tr(o[2], o[3])}</p>
          </div>
        `)).join('')}
      </div>
    </div>`;
  }
);

// 5. Project Scope & Delimitations
addSlide(
  ['Slide 05: Scope & Delimitations', 'الشريحة 5: نطاق المشروع وحدوده'],
  ['Project Scope and Delimitations', 'نطاق المشروع ومحدداته'],
  ['Scope Boundaries', 'حدود النطاق'], 'tag-sec',
  () => {
    const inScope = [
      ['Asset & Service Discovery', 'اكتشاف الأصول والخدمات (نطاقات، منافذ، API)'],
      ['External Black-Box Scanning', 'الفحص الخارجي بالصندوق الأسود ضمن نطاق مصرح'],
      ['Automated Vulnerability Scanning', 'الفحص الآلي للثغرات وأخطاء الإعدادات'],
      ['Sequential & Independent Modes', 'دعم نمطي الفحص المتسلسل والمستقل'],
      ['Data Normalization & Enrichment', 'توحيد المخرجات وربطها بـ CVE / CWE / OWASP / CVSS'],
      ['RBAC & User Data Isolation', 'صلاحيات RBAC وعزل بيانات الفحص عن مدير النظام'],
      ['AES-256-GCM & Envelope Encryption', 'تشفير AES-256-GCM للمخرجات والتقارير والحقول الحساسة'],
      ['AI-Assisted Interpretation', 'التحليل المساعد بالذكاء الاصطناعي عبر HTTPS'],
      ['Web Dashboard & Dual Reports', 'لوحة تحكم وتوليد تقارير تنفيذية وفنية مشفرة']
    ];

    const outScope = [
      ['1. Active Exploitation', '1. الاستغلال الفعلي للثغرات أو اختراق الخوادم'],
      ['2. Internal Network Scanning', '2. فحص الشبكات الداخلية أو الأجهزة الطرفية'],
      ['3. Vulnerability Ticketing', '3. إدارة دورة حياة التذاكر وتتبع الإغلاق'],
      ['4. DDoS  Protection Bypass:', '4. تجاوز حماية هجمات حجب الخدمة (DDoS):'],
      ['5. Social Engineering & Brute-Force', '5. الهندسة الاجتماعية أو تخمين كلمات المرور'],
      ['6. Cryptographic Boundaries', '6. حدود الخصوصية (ليس Zero-Knowledge ضد مالك الخادم)']
    ];

    return `<div style="display:grid; grid-template-columns: 1.25fr 1fr; gap:18px; width:100%; height:100%; align-items:stretch;">
      ${A(0, `
        <div class="c-card" style="padding:16px 18px; border-color:rgba(45,212,191,0.35); display:flex; flex-direction:column; justify-content:space-between; height:100%;">
          <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:8px; border-bottom:1px solid rgba(45,212,191,0.25);">
            <h3 style="color:var(--teal); font-size:18px; font-weight:800; margin:0;">
              ${tr('In-Scope (9 Included Capabilities)', 'داخل النطاق (9 وظائف مشمولة)')}
            </h3>
            <button type="button" class="pill-btn" onclick="openScopeNotesModal()" style="font-size:11.5px; padding:3px 10px;">
              ${tr('Security Notes', 'ملاحظات الأمان')}
            </button>
          </div>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px; flex:1; align-content:center;">
            ${inScope.map((item, idx) => `
              <div style="background:rgba(20,184,166,0.07); border:1px solid rgba(45,212,191,0.2); border-radius:6px; padding:8px 10px; font-size:13.5px; font-weight:600; color:#f1f5f9; ${idx === 8 ? 'grid-column: span 2;' : ''}">
                <span style="color:var(--teal); font-family:var(--font-mono); font-weight:800; margin-inline-end:6px;">0${idx + 1}</span>
                ${tr(item[0], item[1])}
              </div>
            `).join('')}
          </div>
        </div>
      `)}

      ${A(1, `
        <div class="c-card" style="padding:16px 18px; border-color:rgba(244,63,94,0.35); display:flex; flex-direction:column; justify-content:space-between; height:100%;">
          <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:8px; border-bottom:1px solid rgba(244,63,94,0.25);">
            <h3 style="color:var(--red); font-size:18px; font-weight:800; margin:0;">
              ${tr('Out-of-Scope (6 Delimitations)', 'خارج النطاق (6 محددات مستبعدة)')}
            </h3>
            <span class="status-badge" style="background:rgba(244,63,94,0.15); color:var(--red); font-size:11px; padding:2px 8px;">EXCLUDED</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px; flex:1; justify-content:center;">
            ${outScope.map(item => `
              <div style="background:rgba(244,63,94,0.07); border:1px solid rgba(244,63,94,0.2); border-radius:6px; padding:9px 12px; font-size:14px; font-weight:600; color:#f1f5f9;">
                ${tr(item[0], item[1])}
              </div>
            `).join('')}
          </div>
        </div>
      `)}
    </div>`;
  }
);

// 6. Related Systems, Comparison & Technical Gap (Merged Slide 6 & 7)
addSlide(
  ['Slide 06: Related Systems & Gap', 'الشريحة 6: مقارنة الأنظمة والفجوة التقنية'],
  ['Comparison of Related Systems & Technical Gap', 'مقارنة الأنظمة ذات الصلة والفجوة التقنية'],
  ['Related Work & Gap', 'المقارنة والفجوة'], 'tag-sec',
  () => {
    const rows = [
      [tr('Centralized web dashboard for managing scans', 'لوحة تحكم ويب مركزية لإدارة الفحوصات'), '❌', '❌', '✅', '✅', '✅'],
      [tr('Integrated subdomain and open-port discovery', 'اكتشاف مدمج للنطاقات الفرعية والمنافذ المفتوحة'), '❌', '❌', '✅', '❌', '✅'],
      [tr('Coordination of multiple discovery and scanning tools', 'تنسيق وتشغيل أدوات استكشاف وفحص متعددة'), '❌', '❌', '✅', '❌', '✅'],
      [tr('AI-assisted interpretation of security findings', 'تفسير نتائج الفحص بمساعدة الذكاء الاصطناعي'), '❌', '❌', '✅', '✅', '✅'],
      [tr('Generation of scan outputs or reports', 'توليد مخرجات أو تقارير الفحص'), '✅', '✅', '✅', '✅', '✅'],
      [tr('Explicit security-reference enrichment of consolidated findings before AI analysis', 'إثراء مرجعي أمني صريح للنتائج الموحدة قبل تحليل الذكاء الاصطناعي'), '❌', '❌', '❌', '❌', '✅']
    ];

    return `<div style="display:flex; flex-direction:column; gap:10px; width:100%; height:100%; justify-content:space-between;">
      ${A(0, `
        <table class="comp-table" style="font-size:14.5px; width:100%;">
          <thead>
            <tr>
              <th style="width:44%; padding:8px 14px;">${tr('Comparison Criterion \\ Tool or System', 'معيار المقارنة \\ الأداة أو النظام')}</th>
              <th class="center" style="padding:8px;">Nuclei</th>
              <th class="center" style="padding:8px;">Wapiti</th>
              <th class="center" style="padding:8px;">reNgine</th>
              <th class="center" style="padding:8px;">FortiScan</th>
              <th class="center" style="padding:8px; color:var(--teal); background:rgba(45,212,191,0.18);">YemScan</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map((r, idx) => `
              <tr style="${idx === 5 ? 'background:rgba(45,212,191,0.08);' : ''}">
                <td style="font-weight:${idx === 5 ? '800' : '600'}; color:${idx === 5 ? 'var(--teal)' : '#e2e8f0'}; padding:7px 14px;">${r[0]}</td>
                <td class="center" style="font-size:16px; padding:7px;">${r[1]}</td>
                <td class="center" style="font-size:16px; padding:7px;">${r[2]}</td>
                <td class="center" style="font-size:16px; padding:7px;">${r[3]}</td>
                <td class="center" style="font-size:16px; padding:7px;">${r[4]}</td>
                <td class="center" style="font-size:16px; font-weight:800; background:rgba(45,212,191,0.06); padding:7px;">${r[5]}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `)}

      ${A(1, `
        <div class="c-grid-2" style="gap:14px;">
          <div class="c-card c-amber" style="padding:11px 16px;">
            <h4 style="font-size:15.5px; font-weight:800; color:var(--amber); margin:0 0 4px 0;">
              ⚠ ${tr('Limitations of Reviewed Solutions:', 'حدود الحلول:')}
            </h4>
            <p style="font-size:13.5px; line-height:1.55; color:#cbd5e1; margin:0;">
              ${tr('Standalone tools do not coordinate the full discovery-and-scanning workflow. FortiScan documentation focuses on Wapiti, AI analysis, and reporting, while reNgine does not separate pre-AI consolidated reference enrichment.',
                   'الأدوات المستقلة لا تنسق مسار الاكتشاف والفحص كاملاً. يركز توثيق FortiScan على Wapiti والتحليل والتقارير، ولا يفصل reNgine مرحلة الإثراء المرجعي الموحد قبل الذكاء الاصطناعي.')}
            </p>
          </div>

          <div class="c-card" style="padding:11px 16px; border-color:rgba(45,212,191,0.35);">
            <h4 style="font-size:15.5px; font-weight:800; color:var(--teal); margin:0 0 4px 0;">
              ✦ ${tr('Proposed YemScan Contribution:', 'مساهمة YemScan المقترحة:')}
            </h4>
            <p style="font-size:13.5px; line-height:1.55; color:#cbd5e1; margin:0;">
              ${tr('Integrates sequential and independent scanning with user data protection (AES-256-GCM & RBAC), finding provenance tracking, and separating verified security references from AI interpretation.',
                   'دمج سير الفحص (المتسلسل والمستقل) مع حماية بيانات المستخدمين وتتبع مصادر النتائج، وفصل المراجع الأمنية المدعومة عن تفسير الذكاء الاصطناعي.')}
            </p>
          </div>
        </div>
      `)}
    </div>`;
  }
);

// 7. Proposed Solution & Workflow
addSlide(
  ['Slide 07: Proposed Workflow', 'الشريحة 7: الحل المقترح وسير العمل'],
  ['Proposed Scanning & Analysis Workflow', 'طريقة العمل المقترحة ومسار الفحص والتحليل'],
  ['Workflow', 'سير العمل'], 'tag-demo',
  () => `<div style="display:grid; grid-template-columns: 380px 1fr; gap:18px; width:100%; align-items:stretch;">
    ${A(0, `
      <div class="diag-card" onclick="openImgModal('./assets/workflow-diagram.png', 'Proposed Scanning and Analysis Workflow of YemScan')">
        <div class="diag-card-head">
          <span class="diag-badge">${tr('Workflow', 'سير العمل')}</span>
          <span class="diag-hint">${tr('Click to Enlarge', 'انقر للتكبير')}</span>
        </div>
        <div class="diag-img-box">
          <img src="./assets/workflow-diagram.png" alt="Workflow" class="diag-img">
        </div>
        <div style="font-size:12.5px; color:#475569; text-align:center; margin-top:4px; font-weight:700;">
          ${tr('Proposed Scanning & Analysis Workflow', 'سير عمل الفحص والتحليل المقترح')}
        </div>
      </div>
    `)}

    ${A(1, `
      <div style="display:flex; flex-direction:column; gap:10px; justify-content:space-between; height:100%;">
        <div class="c-card" style="padding:12px 16px;">
          <h4 style="font-size:16px; color:var(--teal); margin:0 0 4px 0;">1. ${tr('Target Input & Scope Validation', 'إدخال الهدف والتحقق من النطاق')}</h4>
          <p style="font-size:14px; color:#cbd5e1; margin:0;">${tr('Validates target format and authorized scope, associates job with user, and generates a wrapped per-scan DEK.',
            'التحقق من صيغة الهدف والنطاق المصرح به، وربط العملية بالمستخدم، وتوليد مفتاح تشفير DEK مغلف للعملية.')}</p>
        </div>

        <div class="c-card c-blue" style="padding:12px 16px;">
          <h4 style="font-size:16px; color:var(--blue); margin:0 0 4px 0;">2. ${tr('Sequential or Independent Scanning', 'التنفيذ التسلسلي أو المستقل')}</h4>
          <p style="font-size:14px; color:#cbd5e1; margin:0;">${tr('Sequential passes filtered outputs across Subfinder → Naabu → httpx → Kiterunner → Nuclei/Wapiti. Independent runs selected tools directly.',
            'التسلسلي يمرر المخرجات المصفاة عبر Subfinder → Naabu → httpx → Kiterunner → Nuclei/Wapiti، والمستقل يشغّل الأدوات المختارة مباشرة.')}</p>
        </div>

        <div class="c-card c-amber" style="padding:12px 16px;">
          <h4 style="font-size:16px; color:var(--amber); margin:0 0 4px 0;">3. ${tr('Output Processing & Reference Enrichment', 'معالجة المخرجات والإثراء المرجعي')}</h4>
          <p style="font-size:14px; color:#cbd5e1; margin:0;">${tr('Encrypts raw outputs in File System, normalizes findings in PostgreSQL, and links supported CVE, CWE, OWASP Top 10, and CVSS references.',
            'حفظ المخرجات الخام مشفرة، وتوحيد النتائج في PostgreSQL، وربطها بمراجع CVE وCWE وOWASP Top 10 وCVSS المدعومة.')}</p>
        </div>

        <div class="c-card c-violet" style="padding:12px 16px;">
          <h4 style="font-size:16px; color:var(--violet); margin:0 0 4px 0;">4. ${tr('AI-Assisted Analysis & Dual Reports', 'التحليل بالذكاء الاصطناعي وإصدار التقارير')}</h4>
          <p style="font-size:14px; color:#cbd5e1; margin:0;">${tr('Gemini 3.8 Flash summarizes findings and prioritizes remediation; platform generates encrypted Executive & Technical Reports.',
            'يلخص Gemini 3.8 Flash النتائج ويرتب أولويات المعالجة، ثم تُنشئ المنصة التقريرين التنفيذي والتقني وتخزنهما مشفرين.')}</p>
        </div>
      </div>
    `)}
  </div>`
);

// 8. System Architecture
addSlide(
  ['Slide 08: System Architecture', 'الشريحة 8: معمارية النظام'],
  ['Five-Layer System Architecture', 'المعمارية الخماسية الطبقات للنظام'],
  ['Architecture', 'المعمارية'], 'tag-prop',
  () => `<div style="display:grid; grid-template-columns: 460px 1fr; gap:18px; width:100%; height:100%; align-items:center;">
    ${A(0, `
      <div class="diag-card" onclick="openImgModal('./assets/architecture-diagram.png', 'YemScan Architecture Layer')">
        <div class="diag-card-head">
          <span class="diag-badge">${tr('Architecture', 'المعمارية')}</span>
          <span class="diag-hint">${tr('Click to Enlarge', 'انقر للتكبير')}</span>
        </div>
        <div class="diag-img-box">
          <img src="./assets/architecture-diagram.png" alt="Architecture" class="diag-img">
        </div>
        <div style="font-size:12.5px; color:#475569; text-align:center; margin-top:5px; font-weight:700;">
          ${tr('Five-Layer Architecture', 'طبقات معمارية النظام')}
        </div>
      </div>
    `)}

    ${A(1, `
      <div style="display:flex; flex-direction:column; gap:10px; height:100%; justify-content:center;">
        <div class="arch-layer" style="padding:10px 16px;">
          <div class="arch-layer-info" style="width:200px;">
            <span class="arch-layer-num">01</span>
            <div class="arch-layer-name" style="font-size:15.5px;">${tr('Presentation Layer', 'طبقة العرض')}</div>
            <div class="arch-layer-tech">React & TypeScript</div>
          </div>
          <div class="arch-pill" style="font-size:14px;">${tr('Web dashboard for targets, scan modes, status monitoring, and viewing reports.', 'واجهة إدخال الأهداف واختيار نمط الفحص ومتابعة الحالة وعرض التقارير.')}</div>
        </div>

        <div class="arch-layer" style="padding:10px 16px;">
          <div class="arch-layer-info" style="width:200px;">
            <span class="arch-layer-num">02</span>
            <div class="arch-layer-name" style="font-size:15.5px;">${tr('Application Layer', 'طبقة التطبيق')}</div>
            <div class="arch-layer-tech">Python & FastAPI</div>
          </div>
          <div class="arch-pill blue" style="font-size:14px;">${tr('Scope validation, workflow orchestration, authentication, RBAC, and ownership checks.', 'التحقق من النطاق، تنسيق مراحل الفحص، المصادقة، صلاحيات RBAC وفحص الملكية.')}</div>
        </div>

        <div class="arch-layer" style="padding:10px 16px;">
          <div class="arch-layer-info" style="width:200px;">
            <span class="arch-layer-num">03</span>
            <div class="arch-layer-name" style="font-size:15.5px;">${tr('Security Execution Engine', 'محرك التنفيذ الأمني')}</div>
            <div class="arch-layer-tech">Docker Isolation</div>
          </div>
          <div class="arch-pill violet" style="font-size:14px;">${tr('Isolated execution of Subfinder, Naabu, httpx, Kiterunner, Nuclei, and Wapiti.', 'تشغيل معزول لأدوات Subfinder وNaabu وhttpx وKiterunner وNuclei وWapiti.')}</div>
        </div>

        <div class="arch-layer" style="padding:10px 16px;">
          <div class="arch-layer-info" style="width:200px;">
            <span class="arch-layer-num">04</span>
            <div class="arch-layer-name" style="font-size:15.5px;">${tr('Data Management Layer', 'طبقة إدارة البيانات')}</div>
            <div class="arch-layer-tech">PostgreSQL & File System</div>
          </div>
          <div class="arch-pill amber" style="font-size:14px;">${tr('Hybrid storage, normalization, AES-256-GCM encryption, and DEK/KEK envelope management.', 'تخزين هجين، توحيد النتائج، تشفير AES-256-GCM وإدارة مفاتيح DEK/KEK.')}</div>
        </div>

        <div class="arch-layer" style="padding:10px 16px;">
          <div class="arch-layer-info" style="width:200px;">
            <span class="arch-layer-num">05</span>
            <div class="arch-layer-name" style="font-size:15.5px;">${tr('AI and Reporting Layer', 'طبقة الذكاء والتقارير')}</div>
            <div class="arch-layer-tech">Gemini 3.8 Flash</div>
          </div>
          <div class="arch-pill" style="font-size:14px;">${tr('Reference-enriched interpretation, remediation prioritization, and Executive & Technical Reports.', 'تفسير النتائج المثرية وترتيب أولويات المعالجة وتوليد التقارير التنفيذية والفنية.')}</div>
        </div>
      </div>
    `)}
  </div>`
);

// 9. Development Methodology
addSlide(
  ['Slide 09: Development Methodology', 'الشريحة 9: منهجية التطوير'],
  ['Development Methodology', 'منهجية التطوير'],
  ['Agile Methodology', 'منهجية Agile'], 'tag-prop',
  () => `<div style="display:flex; flex-direction:column; gap:12px; width:100%; height:100%; justify-content:space-between;">
    ${A(0, `
      <div class="hl" style="padding:10px 18px;">
        <p style="font-size:15.5px; font-weight:700; text-align:center; line-height:1.6; margin:0;">
          ${tr('“YemScan adopts an iterative and incremental development approach based on Agile principles, enabling components to be developed, integrated, tested, and refined progressively.”',
               '«يعتمد YemScan نهج تطوير تكراري وتدريجي قائمًا على مبادئ Agile، يتيح تطوير المكونات ودمجها واختبارها وتحسينها عبر دورات قصيرة».')}
        </p>
      </div>
    `)}

    ${A(1, `
      <div style="background:rgba(15,23,42,0.7); border:1px solid rgba(45,212,191,0.25); border-radius:10px; padding:12px 16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <span style="font-size:14px; font-weight:800; color:var(--teal); font-family:var(--font-mono); text-transform:uppercase;">
            ${tr('Six Core Methodology Activities', 'الأنشطة الستة الرئيسية للمنهجية')}
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

        <div style="margin-top:8px; display:flex; justify-content:center; align-items:center; gap:8px; font-size:12.5px; color:var(--text-muted); border-top:1px dashed rgba(255,255,255,0.08); padding-top:6px;">
          <span style="color:var(--teal); font-weight:800; font-size:15px;">⟲</span>
          <span>${tr('Continuous Return Loop: Activities iterate cyclically as needed based on testing findings and supervision feedback, avoiding rigid linear execution.',
                     'سهم رجوع تكراري: تتكرر الأنشطة حسب الحاجة بناءً على نتائج الاختبار وتوجيهات الإشراف، دون جمود خطي أو تنفيذ لمرة واحدة.')}</span>
        </div>
      </div>
    `)}

    ${A(2, `
      <div class="c-card" style="padding:14px 20px; border-color:rgba(56,189,248,0.35); width:100%; display:flex; flex-direction:column; gap:6px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h4 style="font-size:17.5px; font-weight:800; color:var(--blue); margin:0;">
            ${tr('Selection Rationale', 'سبب اختيار المنهجية')}
          </h4>
          <span class="status-badge" style="background:rgba(56,189,248,0.15); color:var(--blue); font-size:12px; padding:3px 10px; font-family:var(--font-mono);">RATIONALE</span>
        </div>
        <p style="font-size:15.5px; font-weight:700; line-height:1.55; color:#f1f5f9; margin:0;">
          ${tr('“Selected to support incremental tool integration and refinement based on testing findings.”',
               '«اختير هذا النهج لدعم التكامل التدريجي للأدوات وتعديل التنفيذ بناءً على نتائج الاختبار».')}
        </p>
        <div style="font-size:14px; color:#cbd5e1; border-top:1px dashed rgba(255,255,255,0.08); padding-top:6px; line-height:1.55;">
          ${tr('Enables testing each security tool in isolation, catching integration issues early, and organizing remaining Product Backlog items into adaptive sprints.',
               'يتيح فحص كل أداة أمنية واختبار تكاملها بشكل منفصل، واكتشاف أخطاء التشغيل مبكراً، وضبط المعاملات وسبرنتات الـ Backlog قبل ربطها في مسار الفحص المتتابع.')}
        </div>
      </div>
    `)}
  </div>`
);

// 10. Agile Sprints & Working Increment Progress
addSlide(
  ['Slide 10: Sprint Progress', 'الشريحة 10: تقدم السبرنتات'],
  ['Agile Sprint Progress & Product Backlog', 'حالة السبرنتات الحالية وسجل المنتج المتبقي'],
  ['Sprint Status', 'حالة السبرنتات'], 'tag-wip',
  () => `<div style="display:flex; flex-direction:column; gap:14px; width:100%; height:100%; justify-content:space-between;">
    <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:16px; width:100%; flex:1; align-items:stretch;">
      ${A(0, `
        <div class="c-card" style="padding:16px 18px; border-color:rgba(74,222,128,0.35); display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding-bottom:8px; border-bottom:1px solid rgba(74,222,128,0.25);">
              <h4 style="font-size:17.5px; font-weight:800; color:var(--green); margin:0;">Sprint 1: Discovery</h4>
              <span class="status-badge badge-done" style="font-size:11.5px;">COMPLETED</span>
            </div>
            <ul style="margin:0; padding-inline-start:18px; font-size:14.5px; line-height:1.65; color:#cbd5e1; display:flex; flex-direction:column; gap:6px;">
              <li>${tr('Integrated Subfinder, Naabu, and httpx.', 'دمج أدوات Subfinder وNaabu وhttpx.')}</li>
              <li>${tr('Automated input handover between stages.', 'التمرير البرمجي الآلي للمخرجات بين المراحل.')}</li>
              <li>${tr('Persisted raw tool outputs per scan folder.', 'حفظ المخرجات الخام لكل فحص في نظام الملفات.')}</li>
              <li>${tr('Verified via FastAPI Swagger UI endpoints.', 'تم التحقق عبر واجهات FastAPI Swagger UI.')}</li>
            </ul>
          </div>
          <div style="padding:6px 10px; background:rgba(74,222,128,0.1); border-radius:6px; font-size:12.5px; color:var(--green); font-weight:700; text-align:center;">
            ${tr('Working Increment 1 Delivered', 'تم تسليم الزيادة العاملة الأولى')}
          </div>
        </div>
      `)}

      ${A(1, `
        <div class="c-card c-amber" style="padding:16px 18px; border-color:rgba(251,191,36,0.35); display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding-bottom:8px; border-bottom:1px solid rgba(251,191,36,0.25);">
              <h4 style="font-size:17.5px; font-weight:800; color:var(--amber); margin:0;">Sprint 2: Scanners</h4>
              <span class="status-badge badge-wip" style="font-size:11.5px;">IN PROGRESS</span>
            </div>
            <ul style="margin:0; padding-inline-start:18px; font-size:14.5px; line-height:1.65; color:#cbd5e1; display:flex; flex-direction:column; gap:6px;">
              <li>${tr('Completing Kiterunner, Nuclei, and Wapiti integration.', 'استكمال تكامل Kiterunner وNuclei وWapiti.')}</li>
              <li>${tr('Building normalization & deduplication parsers.', 'بناء محللات توحيد الصيغ وإزالة التكرار.')}</li>
              <li>${tr('Refining timeout and partial-failure handling.', 'تحسين معالجة المهل الزمنية والفشل الجزئي.')}</li>
            </ul>
          </div>
          <div style="padding:6px 10px; background:rgba(251,191,36,0.1); border-radius:6px; font-size:12.5px; color:var(--amber); font-weight:700; text-align:center;">
            ${tr('Current Active Sprint', 'السبرنت النشط حالياً')}
          </div>
        </div>
      `)}

      ${A(2, `
        <div class="c-card c-violet" style="padding:16px 18px; border-color:rgba(167,139,250,0.35); display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding-bottom:8px; border-bottom:1px solid rgba(167,139,250,0.25);">
              <h4 style="font-size:17.5px; font-weight:800; color:var(--violet); margin:0;">${tr('Product Backlog Epics', 'حزم سجل المنتج')}</h4>
              <span class="status-badge badge-plan" style="font-size:11.5px;">UPCOMING SPRINTS</span>
            </div>
            <ul style="margin:0; padding-inline-start:18px; font-size:14.5px; line-height:1.65; color:#cbd5e1; display:flex; flex-direction:column; gap:6px;">
              <li><b>Epic A:</b> ${tr('PostgreSQL, RBAC, and AES-256-GCM.', 'قاعدة بيانات PostgreSQL وRBAC وتشفير AES-256-GCM.')}</li>
              <li><b>Epic B:</b> ${tr('CVE/CWE/OWASP enrichment, Gemini AI & Reports.', 'الإثراء المرجعي وتحليل Gemini والتقارير.')}</li>
              <li><b>Epic C:</b> ${tr('React/TS Dashboard & End-to-End Evaluation.', 'واجهة React/TS والتقييم الشامل.')}</li>
            </ul>
          </div>
          <div style="padding:6px 10px; background:rgba(167,139,250,0.1); border-radius:6px; font-size:12.5px; color:var(--violet); font-weight:700; text-align:center;">
            ${tr('Scheduled Iteratively in Project (2)', 'تُنفذ عبر سبرنتات متتالية في مشروع (2)')}
          </div>
        </div>
      `)}
    </div>
  </div>`
);

// 11. System Requirements Analysis
addSlide(
  ['Slide 11: Analysis Progress', 'الشريحة 11: تقدم التحليل'],
  ['System Requirements Analysis', 'تحليل متطلبات النظام'],
  ['Requirements', 'تحليل المتطلبات'], 'tag-prop',
  () => {
    const fr = [
      ['Target Input & Scan Management', 'إدخال الأهداف وإدارة عمليات الفحص', 'Validate target formats (Domain, Subdomain, IP, URL) and manage scan execution states.', 'التحقق من صيغ الأهداف (Domain, Subdomain, IP, URL) وإدارة حالات الفحص.'],
      ['Sequential & Independent Scanning', 'الفحص المتسلسل والمستقل', 'Run the 6 integrated tools in a chained pipeline or execute a single selected tool independently.', 'تشغيل الأدوات الست ضمن مسار مترابط أو تشغيل أداة محددة بشكل مستقل.'],
      ['Processing, Enrichment, AI & Reporting', 'معالجة النتائج والإثراء والتحليل والتقارير', 'Normalize outputs, deduplicate findings, enrich with CVE/CWE/OWASP/CVSS, run Gemini AI analysis, and generate Executive & Technical reports.', 'توحيد المخرجات، إزالة التكرار، ربط المراجع الأمنية، تحليل Gemini AI، وإصدار التقريرين التنفيذي والفني.'],
      ['Account Management & Data Access Control', 'إدارة الحسابات والصلاحيات والوصول إلى البيانات', 'Manage user sessions and restrict scan data access strictly to the owning user.', 'إدارة الجلسات والصلاحيات وقصر الوصول لنتائج الفحص على المستخدم المالك فقط.']
    ];
    const nfr = [
      ['Performance & System Responsiveness', 'الأداء واستجابة النظام', 'Execute scans asynchronously in the background with real-time status tracking.', 'تنفيذ الفحوصات بشكل غير متزامن في الخلفية مع تحديث فوري لحالة التقدم.'],
      ['Reliability & Fault Isolation', 'الاعتمادية ومعالجة الأخطاء', 'Isolate tool failures so a single tool error does not halt the platform or lose prior stage results.', 'عزل أعطال الأدوات بحيث لا يؤدي تعطل أداة واحدة إلى توقف النظام أو فقدان نتائج المراحل السابقة.'],
      ['Data Security & Privacy', 'أمن البيانات وخصوصيتها', 'Enforce Docker execution isolation, AES-256-GCM encryption, and automatic secret redaction.', 'عزل التنفيذ داخل Docker، وتشفير البيانات بـ AES-256-GCM، وإخفاء الأسرار في التقارير.'],
      ['Usability, Maintainability & Scalability', 'سهولة الاستخدام والصيانة والتوسع', 'Provide a clear bilingual interface and modular architecture that supports adding future scanning tools.', 'توفير واجهة واضحة وبنية معيارية تسمح بصيانة النظام وإضافة أدوات فحص جديدة مستقبلًا.']
    ];
    return `<div class="c-grid-2" style="gap:18px; align-items:stretch;">
      ${A(0, `
        <div class="c-card c-cyan" style="padding:16px 20px; border-color:rgba(56,189,248,0.35);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; padding-bottom:8px; border-bottom:1px solid rgba(56,189,248,0.22);">
            <span style="font-size:18px; font-weight:800; color:var(--cyan);">⚙️ ${tr('Functional Requirements', 'المتطلبات الوظيفية')}</span>
            <span class="status-badge badge-done" style="font-size:11.5px;">FR</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:10px;">
            ${fr.map((item, i) => `
              <div style="padding:10px 12px; background:rgba(15,23,42,0.65); border-radius:8px; border-inline-start:3px solid var(--cyan);">
                <div style="font-size:15.5px; font-weight:800; color:#ffffff; margin-bottom:3px;">${i + 1}. ${tr(item[0], item[1])}</div>
                <div style="font-size:13.8px; color:#cbd5e1; line-height:1.45;">${tr(item[2], item[3])}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `)}
      ${A(1, `
        <div class="c-card c-emerald" style="padding:16px 20px; border-color:rgba(52,211,153,0.35);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; padding-bottom:8px; border-bottom:1px solid rgba(52,211,153,0.22);">
            <span style="font-size:18px; font-weight:800; color:var(--emerald);">🛡️ ${tr('Non-Functional Requirements', 'المتطلبات غير الوظيفية')}</span>
            <span class="status-badge badge-done" style="font-size:11.5px;">NFR</span>
          </div>
          <div style="display:flex; flex-direction:column; gap:10px;">
            ${nfr.map((item, i) => `
              <div style="padding:10px 12px; background:rgba(15,23,42,0.65); border-radius:8px; border-inline-start:3px solid var(--emerald);">
                <div style="font-size:15.5px; font-weight:800; color:#ffffff; margin-bottom:3px;">${i + 1}. ${tr(item[0], item[1])}</div>
                <div style="font-size:13.8px; color:#cbd5e1; line-height:1.45;">${tr(item[2], item[3])}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `)}
    </div>`;
  }
);

// 12. Database Design & ERD
addSlide(
  ['Slide 12: Database Design', 'الشريحة 12: تصميم قاعدة البيانات'],
  ['Database Design & ERD', 'تصميم قاعدة البيانات ومخطط العلاقات ERD'],
  ['Database ERD', 'قاعدة البيانات'], 'tag-prop',
  () => `<div style="display:grid; grid-template-columns: 430px 1fr; gap:18px; width:100%; align-items:stretch;">
    ${A(0, `
      <div class="diag-card" onclick="openImgModal('./assets/erd-diagram.png', 'YemScan Entity-Relationship Diagram (12 Entities)')">
        <div class="diag-card-head">
          <span class="diag-badge">ERD</span>
          <span class="diag-hint">${tr('Click to Enlarge', 'انقر للتكبير')}</span>
        </div>
        <div class="diag-img-box">
          <img src="./assets/erd-diagram.png" alt="ERD" class="diag-img">
        </div>
        <div style="font-size:13px; color:#475569; font-weight:700; text-align:center; margin-top:6px;">
          ${tr('12 Normalized PostgreSQL Entities', '12 كياناً علائقياً في PostgreSQL')}
        </div>
      </div>
    `)}

    ${A(1, `
      <div style="display:flex; flex-direction:column; gap:12px; justify-content:space-between; height:100%;">
        <div class="c-card" style="padding:14px 18px; border-color:rgba(56,189,248,0.3);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <b style="color:var(--blue); font-size:16.5px;">${tr('Core Entity Relationships', 'العلاقات الأساسية بين الكيانات')}</b>
            <span class="status-badge badge-plan" style="font-size:11.5px;">${tr('Design Completed · Planned', 'تصميم مكتمل · مخطط للتنفيذ')}</span>
          </div>
          <div style="font-family:var(--font-mono); font-size:14px; line-height:1.75; color:#e2e8f0; direction:ltr; text-align:start; background:rgba(0,0,0,0.35); padding:10px 14px; border-radius:8px;">
            <div>users (1) ────── (0..*) scan_jobs (1) ── (1) scan_keys</div>
            <div>scan_jobs (1) ── (0..*) scan_stages (1) ─ (0..*) raw_outputs</div>
            <div>scan_jobs (1) ── (0..*) assets (1) ────── (0..*) findings</div>
            <div>scan_jobs (1) ── (0..*) ai_analyses (1) ─ (0..*) reports</div>
          </div>
        </div>

        <div class="c-card" style="padding:14px 18px;">
          <h4 style="color:var(--teal); font-size:16.5px; margin:0 0 4px 0;">1. ${tr('Provenance & Reference Linking Tables', 'جداول ربط المصادر والمراجع القياسية')}</h4>
          <p style="font-size:14.5px; color:#cbd5e1; margin:0;">${tr('finding_sources links consolidated findings to raw_outputs; finding_references links findings to security_references (CVE, CWE, OWASP, CVSS).',
            'يربط جدول finding_sources النتائج بالمخرجات الخام، ويربط finding_references النتائج بجدول المراجع القياسية.')}</p>
        </div>

        <div class="c-card c-amber" style="padding:14px 18px;">
          <h4 style="color:var(--amber); font-size:16.5px; margin:0 0 4px 0;">2. ${tr('Envelope Encryption Key Metadata (scan_keys)', 'بيانات مفاتيح التشفير المغلفة (scan_keys)')}</h4>
          <p style="font-size:14.5px; color:#cbd5e1; margin:0;">${tr('Stores wrapped DEK, KEK version identifier, and cryptographic metadata per scan operation without storing plaintext keys.',
            'يحفظ مفتاح DEK المغلف ومعرف إصدار KEK وبيانات التشفير لكل عملية فحص دون تخزين أي مفاتيح نصية صريحة.')}</p>
        </div>
      </div>
    `)}
  </div>`
);

// 13. Data Protection & Execution Isolation Design
addSlide(
  ['Slide 13: Security & Isolation', 'الشريحة 13: حماية البيانات وعزل التنفيذ'],
  ['Data Protection & Execution Isolation Design', 'تصميم حماية البيانات وعزل بيئة التنفيذ'],
  ['Security Design', 'تصميم الأمان'], 'tag-sec',
  () => `<div class="c-grid-2" style="height:100%; align-items:stretch;">
    ${A(0, `
      <div class="c-card" style="padding:18px 22px; display:flex; flex-direction:column; justify-content:space-between;">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:10px; margin-bottom:14px; border-bottom:1px solid rgba(45,212,191,0.3);">
            <h3 style="color:var(--teal); font-size:20px; font-weight:800; margin:0;">${tr('1. Data Protection at Rest', '1. حماية البيانات المخزنة')}</h3>
            <span class="status-badge badge-plan" style="font-size:12px;">${tr('Planned Design', 'تصميم مخطط')}</span>
          </div>
          <ul style="padding-inline-start:18px; font-size:15px; line-height:1.75; color:#cbd5e1; display:flex; flex-direction:column; gap:10px;">
            <li><b style="color:#fff;">AES-256-GCM:</b> ${tr('Encrypts raw outputs, generated reports, and sensitive database fields with unique nonces and authentication-tag verification.', 'تشفير المخرجات الخام والتقارير والحقول الحساسة مع التحقق من وسم المصادقة (Authentication Tag) قبل قبول البيانات.')}</li>
            <li><b style="color:#fff;">Envelope Encryption:</b> ${tr('Per-scan Data Encryption Key (DEK) wrapped by a Key Encryption Key (KEK) stored in a separate secrets store.', 'مفتاح DEK عشوائي لكل فحص، يُحفظ مغلفاً بمفتاح KEK مخزن في مستودع أسرار منفصل عن قاعدة البيانات.')}</li>
            <li><b style="color:#fff;">Session-Independent Processing:</b> ${tr('Authorized backend services can complete background AI analysis and report encryption even after user logout.', 'تستطيع خدمات الخلفية المصرح لها إكمال التحليل وتشفير التقارير حتى بعد تسجيل خروج المستخدم.')}</li>
          </ul>
        </div>
      </div>
    `)}

    ${A(1, `
      <div class="c-card c-blue" style="padding:18px 22px; display:flex; flex-direction:column; justify-content:space-between;">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; padding-bottom:10px; margin-bottom:14px; border-bottom:1px solid rgba(56,189,248,0.3);">
            <h3 style="color:var(--blue); font-size:20px; font-weight:800; margin:0;">${tr('2. Access Control & Docker Isolation', '2. التحكم بالوصول وعزل الحاويات')}</h3>
            <span class="status-badge badge-wip" style="font-size:12px;">${tr('In Progress', 'قيد الاستكمال')}</span>
          </div>
          <ul style="padding-inline-start:18px; font-size:15px; line-height:1.75; color:#cbd5e1; display:flex; flex-direction:column; gap:10px;">
            <li><b style="color:#fff;">RBAC & Ownership Isolation:</b> ${tr('Users access only their own targets, findings, and reports. System Administrator manages accounts/settings without access to scan data.', 'يصل المستخدم لبياناته فقط، بينما يدير مدير النظام الحسابات والإعدادات دون صلاحية الوصول لبيانات الفحص أو فك تشفيرها.')}</li>
            <li><b style="color:#fff;">Docker Execution Environment:</b> ${tr('Scanning tools run inside an isolated Docker environment separated from the main FastAPI application.', 'تعمل أدوات الفحص الست داخل بيئة Docker معزولة عن مكونات التطبيق الرئيسية.')}</li>
            <li><b style="color:#fff;">Protected Transit & Passwords:</b> ${tr('HTTPS/TLS for user and Gemini API traffic (with data minimization), and dedicated password hashing.', 'تأمين الاتصال مع المستخدم وGemini API عبر HTTPS مع تقليل البيانات المرسلة، وتجزئة كلمات المرور.')}</li>
          </ul>
        </div>
      </div>
    `)}
  </div>`
);

// 14. Threat Model & Security Controls
addSlide(
  ['Slide 14: Threat Model', 'الشريحة 14: نموذج التهديدات والضوابط'],
  ['Cybersecurity Threat Model & Design Controls', 'نموذج التهديدات الأمنية والضوابط المعمارية المقابلة'],
  ['Threat Model', 'نموذج التهديدات'], 'tag-sec',
  () => {
    const threats = [
      ['1. Unauthorized Cross-User Data Access', '1. الوصول غير المصرح لبيانات مستخدم آخر',
       'RBAC, strict per-request ownership verification, and isolating System Administrator from scan data.',
       'تطبيق صلاحيات RBAC، والتحقق من ملكية المورد في كل طلب، وعزل مدير النظام عن بيانات الفحص.'],
      ['2. Storage Compromise or Ciphertext Tampering', '2. كشف وسائط التخزين أو التلاعب بالبيانات المشفرة',
       'AES-256-GCM encryption, authentication-tag verification before decryption, and separate KEK secrets store.',
       'تشفير AES-256-GCM، والتحقق الإجباري من وسم المصادقة قبل القبول، وفصل مخزن مفتاح KEK عن قاعدة البيانات.'],
      ['3. Out-of-Scope Scanning or Tool Runtime Risk', '3. الفحص خارج النطاق أو مخاطر تشغيل الأدوات',
       'Target format & scope validation prior to execution, and isolating scanning tools in Docker containers.',
       'التحقق المسبق من صيغة الهدف والنطاق المصرح به، وعزل تشغيل الأدوات داخل حاويات Docker.'],
      ['4. AI Hallucination or Sensitive Data Exposure', '4. هلوسة الذكاء الاصطناعي أو تسريب بيانات حساسة',
       'Deterministic CVE/CWE/OWASP enrichment before AI, HTTPS transit, and minimizing data sent to Gemini API.',
       'إثراء مرجعي موثق قبل الذكاء الاصطناعي، ونقل محمي بـ HTTPS، وإرسال البيانات اللازمة للتحليل فقط.']
    ];

    return `<div class="c-col">
      <table class="comp-table" style="font-size:15px;">
        <thead>
          <tr>
            <th style="width:42%; padding:12px 16px;">${tr('Threat Scenario', 'سيناريو التهديد الأمني')}</th>
            <th style="width:58%; padding:12px 16px;">${tr('Architectural Security Control in YemScan', 'الضابط المعماري المصمم في YemScan')}</th>
          </tr>
        </thead>
        <tbody>
          ${threats.map(t => `
            <tr>
              <td style="padding:12px 16px; font-weight:800; color:#ffffff;">${tr(t[0], t[1])}</td>
              <td style="padding:12px 16px; color:var(--teal); line-height:1.55;">${tr(t[2], t[3])}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>`;
  }
);

// 15. Working Prototype & Sprint 1 Operational Evidence
addSlide(
  ['Slide 15: Working Prototype', 'الشريحة 15: النموذج الأولي وأدلة التشغيل'],
  ['Working Prototype & Operational Evidence', 'النموذج الأولي العامل وأدلة التشغيل الفعلية'],
  ['Prototype Evidence', 'أدلة النموذج العامل'], 'tag-demo',
  () => {
    const evidenceItems = [
      {
        img: 'images/evidence/swagger_ui.png',
        title: ['FastAPI Swagger UI', 'واجهة FastAPI Swagger'],
        desc: ['REST API endpoints for initiating scans and retrieving outputs.', 'نقاط نهاية REST لبدء الفحص واسترجاع المخرجات.']
      },
      {
        img: 'images/evidence/subfinder_output.png',
        title: ['Subfinder Discovery', 'مخرجات أداة Subfinder'],
        desc: ['Automated subdomain enumeration returned via API.', 'اكتشاف النطاقات الفرعية آلياً واسترجاعها.']
      },
      {
        img: 'images/evidence/naabu_output.png',
        title: ['Naabu Port Scan', 'مخرجات فحص المنافذ Naabu'],
        desc: ['Open ports (80, 443) identified on discovered hosts.', 'تحديد المنافذ المفتوحة على الأصول المكتشفة.']
      },
      {
        img: 'images/evidence/httpx_output.png',
        title: ['httpx Live Probing', 'مخرجات التحقق httpx'],
        desc: ['Live web services verified with status codes and titles.', 'التحقق من خدمات الويب الحية ورموز الاستجابة.']
      },
      {
        img: 'images/evidence/scan_output_folder.png',
        title: ['Raw File Persistence', 'حفظ الملفات الخام على القرص'],
        desc: ['Raw tool outputs saved in dedicated scan directories.', 'حفظ المخرجات الخام لكل أداة في مجلد الفحص.']
      }
    ];

    return `<div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:12px; width:100%; height:100%; align-items:stretch;">
      ${evidenceItems.map((item, idx) => A(idx, `
        <div class="c-card" style="padding:12px; display:flex; flex-direction:column; justify-content:space-between; height:100%;">
          <div>
            <div style="position:relative; width:100%; height:150px; border-radius:8px; overflow:hidden; border:1px solid rgba(255,255,255,0.12); background:#020617; cursor:pointer;" onclick="openImgModal('${item.img}', '${item.title[0]}')">
              <img src="${item.img}" alt="${item.title[0]}" style="width:100%; height:100%; object-fit:cover; display:block;">
            </div>
            <div style="margin-top:10px; margin-bottom:6px;">
              <span class="status-badge badge-done" style="font-size:10.5px; padding:2px 7px;">VERIFIED · SPRINT 1</span>
            </div>
            <h4 style="font-size:15.5px; color:#ffffff; margin:0 0 6px 0;">${tr(item.title[0], item.title[1])}</h4>
            <p style="font-size:13.5px; line-height:1.5; margin:0; color:#cbd5e1;">${tr(item.desc[0], item.desc[1])}</p>
          </div>
          <button type="button" class="action-btn" style="width:100%; margin-top:10px; padding:6px; font-size:12.5px; background:rgba(45,212,191,0.12); border:1px solid var(--teal); color:var(--teal); border-radius:6px; cursor:pointer;" onclick="openImgModal('${item.img}', '${item.title[0]}')">
            ${tr('Zoom Screenshot', 'تكبير الصورة')}
          </button>
        </div>
      `)).join('')}
    </div>`;
  }
);

// 16. Testing Plan & Preliminary Evaluation
addSlide(
  ['Slide 16: Testing & Evaluation', 'الشريحة 16: خطة الاختبار والتقييم الأولي'],
  ['Testing Plan & Preliminary Evaluation Cases', 'خطة الاختبار وحالات التحقق الأولية'],
  ['Testing Progress', 'الاختبار والتقييم'], 'tag-sec',
  () => {
    const tests = [
      ['TC-01 · Functional Testing', 'TC-01 · اختبار وظيفي (Functional)',
       'Target input, scan initiation, and raw output file creation per tool.',
       'إدخال الهدف، بدء عملية الفحص، وحفظ ملفات المخرجات الخام لكل أداة.',
       'Passed (Sprint 1)', 'ناجح (سبرنت 1)', 'badge-done'],
      ['TC-02 · Integration Testing', 'TC-02 · اختبار تكامل (Integration)',
       'Sequential handover: Subfinder subdomains → Naabu ports → httpx live web services.',
       'التسليم المتسلسل: نطاقات Subfinder ← منافذ Naabu ← خدمات الويب الحية في httpx.',
       'Passed (Sprint 1)', 'ناجح (سبرنت 1)', 'badge-done'],
      ['TC-03 · Parser & Scanner Testing', 'TC-03 · اختبار المحللات وأدوات الفحص',
       'Kiterunner, Nuclei, and Wapiti execution and JSON/XML normalization.',
       'تشغيل Kiterunner وNuclei وWapiti وتوحيد مخرجاتها وإزالة التكرار.',
       'In Progress (Sprint 2)', 'قيد الاختبار (سبرنت 2)', 'badge-wip'],
      ['TC-04 · Security & Crypto Testing', 'TC-04 · اختبار الأمان والتشفير (Security)',
       'RBAC ownership isolation, AES-256-GCM tag verification, and tampered ciphertext rejection.',
       'عزل الملكية RBAC، والتحقق من وسم AES-256-GCM، ورفض النصوص المشفرة المتلاعب بها.',
       'Planned (Upcoming Sprints)', 'مخطط (السبرنتات القادمة)', 'badge-plan']
    ];

    return `<div class="c-col">
      <table class="comp-table" style="font-size:15px;">
        <thead>
          <tr>
            <th style="width:28%; padding:11px 14px;">${tr('Test Case & Category', 'حالة ونوع الاختبار')}</th>
            <th style="width:48%; padding:11px 14px;">${tr('Test Scenario & Verification Scope', 'سيناريو الاختبار والتحقق')}</th>
            <th class="center" style="width:24%; padding:11px 10px;">${tr('Result / Status', 'النتيجة / الحالة')}</th>
          </tr>
        </thead>
        <tbody>
          ${tests.map(t => `
            <tr>
              <td style="padding:11px 14px; font-weight:800; color:#ffffff;">${tr(t[0], t[1])}</td>
              <td style="padding:11px 14px; color:#cbd5e1; line-height:1.5;">${tr(t[2], t[3])}</td>
              <td class="center" style="padding:11px 10px;"><span class="status-badge ${t[6]}" style="font-size:12.5px; padding:4px 10px;">${tr(t[4], t[5])}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>`;
  }
);

// 17. Challenges, Risks & Actions Taken
addSlide(
  ['Slide 17: Challenges & Risks', 'الشريحة 17: التحديات والمخاطر'],
  ['Encountered Challenges, Causes & Actions Taken', 'التحديات التقنية التي ظهرت وكيف تمت معالجتها'],
  ['Challenges & Risks', 'التحديات والمخاطر'], 'tag-prop',
  () => {
    const risks = [
      {
        name: ['Base Domain Omitted in Handover', 'إغفال النطاق الأساسي أثناء التسليم'],
        cause: ['Subfinder enumerates subdomains only, skipping the root domain.', 'أداة Subfinder ترجع النطاقات الفرعية فقط وتغفل النطاق الرئيسي.'],
        action: ['Prepend base domain automatically before Naabu/httpx stages.', 'إضافة النطاق الأساسي برمجياً قبل تمرير القائمة إلى Naabu وhttpx.'],
        codeImg: 'images/evidence/code_base_domain_fallback.png',
        codeTitle: 'Code Evidence: Base Domain Fallback Logic',
        status: ['Resolved', 'تم الحل'],
        statusClass: 'badge-done'
      },
      {
        name: ['Windows vs. Docker Path Mismatch', 'اختلاف مسارات Windows وحاويات Docker'],
        cause: ['Windows backslashes (C:\\...) broke Linux container volume mounts.', 'مسارات Windows سببت فشل ربط المجلدات مع حاويات Linux.'],
        action: ['Implemented normalize_docker_path helper for POSIX paths.', 'بناء دالة normalize_docker_path لتحويل المسارات إلى صيغة POSIX.'],
        codeImg: 'images/evidence/code_docker_path_unification.png',
        codeTitle: 'Code Evidence: Docker Path Normalization',
        status: ['Resolved', 'تم الحل'],
        statusClass: 'badge-done'
      },
      {
        name: ['Heterogeneous Scanner Output Schemas', 'تباين هياكل مخرجات أدوات الفحص'],
        cause: ['Tools output different formats (plain text, JSONL, nested JSON).', 'اختلاف صيغ المخرجات بين النصوص وJSONL وJSON المتداخل.'],
        action: ['Building modular parser adapters per tool in Sprint 2.', 'تطوير محللات معيارية (Adapters) لكل أداة ضمن Sprint 2.'],
        codeImg: null,
        status: ['In Progress', 'قيد التنفيذ'],
        statusClass: 'badge-wip'
      },
      {
        name: ['Long-Running Scans Blocking Requests', 'طول زمن الفحص وتعليق الطلبات'],
        cause: ['Sequential scans take minutes and cannot run synchronously.', 'الفحص المتسلسل يستغرق وقتاً ولا يمكن تنفيذه بشكل متزامن مع الطلب.'],
        action: ['Isolated background task execution decoupled from API requests.', 'فصل تنفيذ الفحص في الخلفية بشكل مستقل عن معالجة طلبات الواجهة.'],
        codeImg: null,
        status: ['In Progress', 'قيد التنفيذ'],
        statusClass: 'badge-wip'
      }
    ];

    return `<div class="c-col">
      <table class="comp-table" style="font-size:14.5px;">
        <thead>
          <tr>
            <th style="width:24%; padding:10px 12px;">${tr('Challenge / Risk', 'التحدي / المخاطرة')}</th>
            <th style="width:26%; padding:10px 12px;">${tr('Cause', 'السبب')}</th>
            <th style="width:34%; padding:10px 12px;">${tr('Action Taken', 'الإجراء المتخذ')}</th>
            <th class="center" style="width:16%; padding:10px 8px;">${tr('Status', 'الحالة')}</th>
          </tr>
        </thead>
        <tbody>
          ${risks.map(r => `
            <tr>
              <td style="padding:10px 12px; font-weight:800; color:#ffffff;">${tr(r.name[0], r.name[1])}</td>
              <td style="padding:10px 12px; color:#cbd5e1;">${tr(r.cause[0], r.cause[1])}</td>
              <td style="padding:10px 12px;">
                <span style="color:var(--teal);">${tr(r.action[0], r.action[1])}</span>
                ${r.codeImg ? `
                  <button type="button" class="action-btn" style="margin-inline-start:8px; padding:2px 8px; font-size:11.5px; background:rgba(56,189,248,0.15); border:1px solid var(--blue); color:var(--blue); border-radius:4px; cursor:pointer;" onclick="openImgModal('${r.codeImg}', '${r.codeTitle}')">
                    ${tr('Code Proof', 'دليل الكود')}
                  </button>
                ` : ''}
              </td>
              <td class="center" style="padding:10px 8px;">
                <span class="status-badge ${r.statusClass}" style="font-size:12px;">${tr(r.status[0], r.status[1])}</span>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>`;
  }
);

// 18. Remaining Work & Adaptive Product Backlog Roadmap
addSlide(
  ['Slide 18: Remaining Work & Backlog', 'الشريحة 18: الأعمال المتبقية وسجل المنتج'],
  ['Remaining Work & Product Backlog Roadmap', 'الأعمال المتبقية وخارطة سجل المنتج'],
  ['Backlog Roadmap', 'خارطة الاستكمال'], 'tag-sec',
  () => {
    const schedule = [
      ['Sprint 2', 'سبرنت 2',
       'Current Cycle', 'الدورة الحالية',
       'Complete Kiterunner, Nuclei, and Wapiti integration, normalization parsers, and deduplication.',
       'استكمال دمج Kiterunner وNuclei وWapiti، ومحللات توحيد النتائج وإزالة التكرار.',
       'In Progress', 'قيد التنفيذ', 'badge-wip'],
      ['Backlog Epic A', 'الحزمة A',
       'Priority 1 · Next Sprints', 'أولوية 1 · السبرنتات القادمة',
       'Implement 12-entity PostgreSQL database, RBAC & ownership isolation, and AES-256-GCM envelope encryption (DEK/KEK).',
       'تنفيذ قاعدة بيانات PostgreSQL (12 كياناً)، وصلاحيات RBAC وعزل الملكية، وتشفير AES-256-GCM المغلف.',
       'Planned in Backlog', 'مخطط في Backlog', 'badge-plan'],
      ['Backlog Epic B', 'الحزمة B',
       'Priority 2 · Next Sprints', 'أولوية 2 · السبرنتات القادمة',
       'Implement CVE/CWE/OWASP/CVSS enrichment, Gemini 3.8 Flash analysis over HTTPS, and Executive & Technical Reports.',
       'تنفيذ الإثراء المرجعي (CVE/CWE/OWASP/CVSS)، وتحليل Gemini 3.8 Flash، وتوليد التقريرين التنفيذي والتقني.',
       'Planned in Backlog', 'مخطط في Backlog', 'badge-plan'],
      ['Backlog Epic C', 'الحزمة C',
       'Priority 3 · Final Sprints', 'أولوية 3 · السبرنتات الختامية',
       'Build React/TypeScript web dashboard, conduct end-to-end security & functional testing, and finalize Chapters 4 & 5.',
       'بناء واجهة الويب بـ React/TypeScript، وإجراء الاختبارات الشاملة، وإتمام الفصلين الرابع والخامس للمناقشة النهائية.',
       'Planned in Backlog', 'مخطط في Backlog', 'badge-plan']
    ];

    return `<div class="c-col">
      <table class="comp-table" style="font-size:15px;">
        <thead>
          <tr>
            <th style="width:16%; padding:11px 14px;">${tr('Sprint / Epic', 'السبرنت / الحزمة')}</th>
            <th style="width:20%; padding:11px 12px;">${tr('Execution Order', 'ترتيب التنفيذ والأولوية')}</th>
            <th style="width:48%; padding:11px 14px;">${tr('Target Increment & Deliverables', 'المخرجات والزيادة الوظيفية المستهدفة')}</th>
            <th class="center" style="width:16%; padding:11px 10px;">${tr('Status', 'الحالة')}</th>
          </tr>
        </thead>
        <tbody>
          ${schedule.map(s => `
            <tr>
              <td style="padding:12px 14px; font-weight:800; color:var(--teal); font-family:var(--font-mono);">${tr(s[0], s[1])}</td>
              <td style="padding:12px 12px; font-weight:700; color:#ffffff;">${tr(s[2], s[3])}</td>
              <td style="padding:12px 14px; color:#cbd5e1; line-height:1.5;">${tr(s[4], s[5])}</td>
              <td class="center" style="padding:12px 10px;"><span class="status-badge ${s[8]}" style="font-size:12px;">${tr(s[6], s[7])}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>`;
  }
);

// 19. Conclusion / Thank You (Simple & Clean)
addSlide(
  ['Slide 19: Thank You', 'الشريحة 19: الخاتمة'],
  ['Thank You & Questions', 'شكراً لكم — نرحب بأسئلتكم'],
  ['Q & A', 'الأسئلة والمناقشة'], 'tag-sec',
  () => `<div style="display:flex; flex-direction:column; align-items:center; justify-content:center; width:100%; height:100%; text-align:center; gap:20px;">
    ${A(0, `
      <div style="font-size:68px; font-weight:900; letter-spacing:2px; line-height:1.1; background:linear-gradient(120deg, #ffffff, #2dd4bf, #38bdf8); -webkit-background-clip:text; background-clip:text; color:transparent;">
        ${tr('Thank You!', 'شكراً لحسن استماعكم')}
      </div>
      <p style="font-size:22px; color:#e2e8f0; font-weight:600; margin-top:8px;">
        ${tr('We welcome your questions and feedback.', 'نرحب بأسئلة وملاحظات لجنة المناقشة الكريمة.')}
      </p>
      <div style="margin-top:24px; display:inline-flex; gap:24px; flex-wrap:wrap; justify-content:center; background:rgba(15,23,42,0.75); border:1px solid rgba(45,212,191,0.3); border-radius:12px; padding:12px 28px; font-size:15px; color:#cbd5e1;">
        <div><b style="color:var(--teal);">YemScan</b> · ${tr('Yemeni Web Attack and Vulnerability Scanner', 'الماسح اليمني لفحص ثغرات وهجمات الويب')}</div>
        <div><b>${tr('Supervisor:', 'إشراف:')}</b> <span style="color:#ffffff;">${tr('Dr. Aisha Al-Hadm', 'د. عائشة الحدم')}</span></div>
      </div>
    `)}
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

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if(I18N[k] && I18N[k][L]) el.textContent = I18N[k][L];
  });

  const topLangBtn = $('topLangBtn');
  if(topLangBtn){
    topLangBtn.querySelector('.l-en').classList.toggle('active-l', L === 'en');
    topLangBtn.querySelector('.l-ar').classList.toggle('active-l', L === 'ar');
  }

  $('jumpInput').max = S.length;
}

function renderAllSlides(){
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
    </section>
  `).join('');

  $('ovGrid').innerHTML = S.map((s, idx) => `
    <div class="ov-card" data-jump="${idx}">
      <div class="ov-card-num">SLIDE ${String(idx + 1).padStart(2, '0')} · ${tr(s.kicker[0], s.kicker[1])}</div>
      <div class="ov-card-title">${tr(s.title[0], s.title[1])}</div>
    </div>
  `).join('');

  $('helpContent').innerHTML = (L === 'ar')
    ? `<div class="help-item"><kbd>→</kbd> / <kbd>Space</kbd> <span>الشريحة التالية</span></div>
       <div class="help-item"><kbd>←</kbd> <span>الشريحة السابقة</span></div>
       <div class="help-item"><kbd>Home</kbd> <span>الشريحة الأولى</span></div>
       <div class="help-item"><kbd>End</kbd> <span>الشريحة الأخيرة</span></div>
       <div class="help-item"><kbd>F</kbd> <span>ملء الشاشة</span></div>
       <div class="help-item"><kbd>O</kbd> <span>فهرس الشرائح (19 شريحة)</span></div>
       <div class="help-item"><kbd>L</kbd> <span>تبديل اللغة (EN / AR)</span></div>
       <div class="help-item"><kbd>M</kbd> <span>تقليل الحركة</span></div>
       <div class="help-item"><kbd>Esc</kbd> <span>إغلاق النوافذ</span></div>
       <div class="help-item"><kbd>?</kbd> <span>المساعدة</span></div>`
    : `<div class="help-item"><kbd>→</kbd> / <kbd>Space</kbd> <span>Next Slide</span></div>
       <div class="help-item"><kbd>←</kbd> <span>Previous Slide</span></div>
       <div class="help-item"><kbd>Home</kbd> <span>First Slide</span></div>
       <div class="help-item"><kbd>End</kbd> <span>Last Slide</span></div>
       <div class="help-item"><kbd>F</kbd> <span>Toggle Fullscreen</span></div>
       <div class="help-item"><kbd>O</kbd> <span>Toggle Overview (19 Slides)</span></div>
       <div class="help-item"><kbd>L</kbd> <span>Switch Language</span></div>
       <div class="help-item"><kbd>M</kbd> <span>Reduce Motion</span></div>
       <div class="help-item"><kbd>Esc</kbd> <span>Close Modals</span></div>
       <div class="help-item"><kbd>?</kbd> <span>Help</span></div>`;

  updateStaticUI();
  displaySlide(cur);
}

function displaySlide(index){
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
}

function nextSlide(){ if(cur < S.length - 1) displaySlide(cur + 1); }
function prevSlide(){ if(cur > 0) displaySlide(cur - 1); }

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
   EVENT BINDINGS & MODALS
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

// Objectives Details Modal (Slide 4)
window.openObjSpecModal = () => {
  let m = $('objSpecModal');
  if(!m){
    m = document.createElement('div');
    m.id = 'objSpecModal';
    m.className = 'img-modal';
    m.onclick = window.closeObjSpecModal;
    document.body.appendChild(m);
  }
  const isAr = (L === 'ar');
  m.innerHTML = `
    <div class="img-modal-content" onclick="event.stopPropagation()" style="max-width:920px; padding:22px 26px; background:#0f172a; color:#f8fafc; border:1px solid rgba(45,212,191,0.3); border-radius:14px; direction:${isAr ? 'rtl' : 'ltr'}; text-align:start;">
      <div style="display:flex; justify-content:space-between; align-items:center; width:100%; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:12px; margin-bottom:16px;">
        <h3 style="font-size:19px; color:#ffffff; margin:0;">${isAr ? 'تفاصيل الأهداف وضوابط الأمان (القسم 1.4)' : 'Objectives & Security Controls Details (Section 1.4)'}</h3>
        <button class="img-modal-close" onclick="closeObjSpecModal()" style="position:static;">✕</button>
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; width:100%;">
        <div class="c-card"><h4 style="color:var(--teal); font-size:15.5px; margin-bottom:6px;">${isAr ? 'عزل بيانات المستخدمين (RBAC)' : 'User Data Isolation (RBAC)'}</h4><p style="font-size:13.5px; color:#cbd5e1;">${isAr ? 'يصل كل مستخدم فقط إلى الأهداف والنتائج والتقارير المرتبطة بحسابه.' : 'Each user accesses only the targets, findings, analyses, and reports associated with their account.'}</p></div>
        <div class="c-card"><h4 style="color:var(--blue); font-size:15.5px; margin-bottom:6px;">${isAr ? 'تقييد صلاحيات مدير النظام' : 'System Administrator Restriction'}</h4><p style="font-size:13.5px; color:#cbd5e1;">${isAr ? 'يدير مدير النظام الحسابات وإعدادات المنصة فقط دون صلاحية الوصول لبيانات الفحص على مستوى التطبيق.' : 'The System Administrator manages user accounts and platform settings without application-level access to scan data.'}</p></div>
        <div class="c-card"><h4 style="color:var(--violet); font-size:15.5px; margin-bottom:6px;">${isAr ? 'تشفير المغلف (AES-256-GCM)' : 'AES-256-GCM & Envelope Encryption'}</h4><p style="font-size:13.5px; color:#cbd5e1;">${isAr ? 'حماية المخرجات الخام والتقارير والحقول الحساسة بمفتاح DEK لكل فحص محمي بمفتاح KEK منفصل.' : 'Protects retained raw outputs, reports, and sensitive database fields using per-scan DEK and separate KEK.'}</p></div>
        <div class="c-card"><h4 style="color:var(--amber); font-size:15.5px; margin-bottom:6px;">${isAr ? 'التقارير التنفيذية والفنية' : 'Executive & Technical Reports'}</h4><p style="font-size:13.5px; color:#cbd5e1;">${isAr ? 'ملخص تنفيذي لمؤشرات المخاطر، وتقرير فني مفصل للثغرات والمراجع وتوصيات المعالجة.' : 'Executive summary of risk indicators alongside a detailed Technical Report with references and remediation advice.'}</p></div>
      </div>
    </div>
  `;
  m.classList.add('open');
};
window.closeObjSpecModal = () => {
  const m = $('objSpecModal');
  if(m) m.classList.remove('open');
};

// Scope Notes Modal (Slide 5)
window.openScopeNotesModal = () => {
  let m = $('scopeNotesModal');
  if(!m){
    m = document.createElement('div');
    m.id = 'scopeNotesModal';
    m.className = 'img-modal';
    m.onclick = window.closeScopeNotesModal;
    document.body.appendChild(m);
  }
  const isAr = (L === 'ar');
  m.innerHTML = `
    <div class="img-modal-content" onclick="event.stopPropagation()" style="max-width:920px; padding:22px 26px; background:#0f172a; color:#f8fafc; border:1px solid rgba(45,212,191,0.3); border-radius:14px; direction:${isAr ? 'rtl' : 'ltr'}; text-align:start;">
      <div style="display:flex; justify-content:space-between; align-items:center; width:100%; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:12px; margin-bottom:16px;">
        <h3 style="font-size:19px; color:#ffffff; margin:0;">${isAr ? 'ضوابط التشفير وحدود الخصوصية (القسم 1.5 و 3.4.4)' : 'Cryptographic Controls & Privacy Boundaries (Sections 1.5 & 3.4.4)'}</h3>
        <button class="img-modal-close" onclick="closeScopeNotesModal()" style="position:static;">✕</button>
      </div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; width:100%;">
        <div class="c-card"><h4 style="color:var(--teal); font-size:15.5px; margin-bottom:6px;">${isAr ? 'التحقق من وسم المصادقة (Auth Tag)' : 'Authentication Tag Verification'}</h4><p style="font-size:13.5px; color:#cbd5e1;">${isAr ? 'يتم التحقق من وسم المصادقة في AES-256-GCM قبل قبول أي محتوى مفكوك التشفير لكشف أي تعديل غير مصرح به.' : 'AES-256-GCM authentication tags are verified before decrypted content is accepted for use.'}</p></div>
        <div class="c-card"><h4 style="color:var(--blue); font-size:15.5px; margin-bottom:6px;">${isAr ? 'استمرارية المعالجة بالخلفية' : 'Background Processing Continuity'}</h4><p style="font-size:13.5px; color:#cbd5e1;">${isAr ? 'تُقيد إدارة المفاتيح بالخدمات المصرح لها بشكل مستقل عن جلسة المستخدم النشطة، مما يسمح باستمرار التحليل وإصدار التقارير بعد تسجيل الخروج.' : 'Key access is restricted to authorized backend services independently of the user\'s active session, allowing analysis to continue after logout.'}</p></div>
        <div class="c-card"><h4 style="color:var(--violet); font-size:15.5px; margin-bottom:6px;">${isAr ? 'استقلالية المراجع عن الذكاء الاصطناعي' : 'Reference Independence from AI'}</h4><p style="font-size:13.5px; color:#cbd5e1;">${isAr ? 'لا يُستخدم الذكاء الاصطناعي مصدراً أساسياً لتحديد CVE أو CWE أو OWASP أو CVSS، بل يقتصر على التفسير والتوصيات.' : 'AI is not used as the primary source for CVE, CWE, OWASP Top 10, or CVSS scores.'}</p></div>
        <div class="c-card"><h4 style="color:var(--amber); font-size:15.5px; margin-bottom:6px;">${isAr ? 'حدود الخصوصية (ليس Zero-Knowledge)' : 'Privacy & Cryptographic Boundaries'}</h4><p style="font-size:13.5px; color:#cbd5e1;">${isAr ? 'العزل عن مدير النظام يتم على مستوى صلاحيات التطبيق؛ والمنصة ليست مصممة بمعمارية Zero-Knowledge لأن المعالجة تتطلب فك تشفير مؤقت بالذاكرة.' : 'Admin isolation applies at the application level; the platform is not a zero-knowledge architecture as authorized processing requires temporary plaintext in memory.'}</p></div>
      </div>
    </div>
  `;
  m.classList.add('open');
};
window.closeScopeNotesModal = () => {
  const m = $('scopeNotesModal');
  if(m) m.classList.remove('open');
};

// Stage click navigation
$('stage').addEventListener('click', e => {
  if(e.target.closest('button, input, .ov-card, .help-inner, table, .diag-card, .ill-frame, .img-modal')) return;
  const rect = $('stage').getBoundingClientRect();
  const isRight = (e.clientX - rect.left) > (rect.width / 2);
  const rtl = (L === 'ar');
  (isRight !== rtl) ? nextSlide() : prevSlide();
});

// Keyboard Navigation
window.addEventListener('keydown', e => {
  if(e.target.tagName === 'INPUT') return;
  const k = e.key;
  if(k === 'Escape'){
    $('overview').classList.add('hidden');
    $('helpModal').classList.add('hidden');
    window.closeImgModal();
    window.closeObjSpecModal();
    window.closeScopeNotesModal();
    return;
  }
  if(k === ' ' || k === 'PageDown' || k === 'ArrowDown'){ e.preventDefault(); nextSlide(); }
  else if(k === 'PageUp' || k === 'ArrowUp'){ e.preventDefault(); prevSlide(); }
  else if(k === 'ArrowRight'){ e.preventDefault(); (L === 'ar') ? prevSlide() : nextSlide(); }
  else if(k === 'ArrowLeft'){ e.preventDefault(); (L === 'ar') ? nextSlide() : prevSlide(); }
  else if(k === 'Home'){ e.preventDefault(); displaySlide(0); }
  else if(k === 'End'){ e.preventDefault(); displaySlide(S.length - 1); }
  else if(k === 'f' || k === 'F'){ e.preventDefault(); toggleFullscreen(); }
  else if(k === 'o' || k === 'O'){ e.preventDefault(); $('overview').classList.toggle('hidden'); }
  else if(k === 'l' || k === 'L'){ e.preventDefault(); switchLanguage(); }
  else if(k === 'm' || k === 'M'){ e.preventDefault(); toggleReduceMotion(!document.body.classList.contains('reduce-motion')); }
  else if(k === '?'){ e.preventDefault(); $('helpModal').classList.toggle('hidden'); }
});

window.addEventListener('resize', fitStage);

// Init
if(localStorage.getItem('ys_rm') === '1') toggleReduceMotion(true);
fitStage();
renderAllSlides();

})();
