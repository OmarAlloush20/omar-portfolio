export type Language = 'en' | 'ar' | 'tr'

const en = {
  meta: {
    title: 'Omar Alloush | Full-Stack Developer',
    description: 'Omar Alloush is a Computer Engineering graduate and full-stack developer building reliable web, mobile, and backend applications.',
  },
  common: {
    skip: 'Skip to content', menu: 'Toggle navigation', navLabel: 'Primary navigation', homeLabel: 'Omar Alloush, home',
    nav: ['About', 'Skills', 'Work', 'Contact'], status: 'Available for opportunities', language: 'Language', backToTop: 'Back to top ↑', built: 'Designed and built with care.',
  },
  hero: {
    eyebrow: 'Computer Engineering Graduate', role: 'Computer Engineering Graduate / Full-Stack Developer',
    summary: 'I build reliable web, mobile, and backend applications with TypeScript, Node.js, React, and React Native.',
    view: 'View Voltiva', viewChessReview: 'View Chess Review', live: 'Live demo', focusLabel: 'Current focus', focusAria: 'Development focus',
    focus: ['Backend engineering', 'Product interfaces', 'Mobile applications', 'End-to-end delivery'], scroll: 'Scroll to explore',
  },
  about: {
    index: '01 / ABOUT', title: 'An engineer who likes the whole system.', imageAlt: 'Omar Alloush at his university graduation', location: 'Düzce, Türkiye · 2026',
    lead: 'I’m a Computer Engineering graduate from Düzce University, drawn to programming by genuine curiosity about how software works and how good systems fit together.',
    body: [
      'My strongest practical ecosystem is TypeScript and JavaScript across Node.js, React, and React Native. I also bring programming foundations in C++, C#, and Python.',
      'I especially enjoy the concerns behind the interface: APIs, data ownership, authentication, payments, integrations, reliability, and deployment. I’m always ready to learn a new technology when the problem calls for it.',
    ],
    principlesLabel: 'Engineering principles', principles: ['Clear boundaries', 'Reliable behavior', 'Thoughtful delivery'],
  },
  skills: {
    index: '02 / CAPABILITIES', title: 'A practical toolkit for complete applications.', description: 'Technologies I use across product interfaces, mobile clients, backend systems, and delivery.',
    groups: ['01 / Core development', '02 / Backend & integrations', '03 / Tools & deployment', '04 / Additional programming'],
  },
  voltiva: {
    index: '03 / FEATURED WORK', heading: 'One platform. Four connected surfaces.', label: 'Flagship project / 2026',
    subtitle: 'Full-stack commerce platform — Web, Admin, Android & Backend',
    intro: 'A portfolio-scale ecommerce system with one backend authority serving two React applications and a React Native / Expo Android client.',
    tabsLabel: 'Voltiva surfaces', tabs: ['customer', 'admin', 'android', 'backend'],
    surfaces: [
      { label: '01 / Customer Web', title: 'A product-led storefront.', description: 'The React storefront handles discovery, guest-cart merging, favorites, verified-purchase reviews, checkout, orders, returns, and a persisted customer inbox.', alt: 'Voltiva customer storefront showing the technology retail homepage' },
      { label: '02 / Admin', title: 'Operations in one view.', description: 'The admin application brings product, offer, inventory, order, return, inbox, and AI-assisted operations together without exposing administrative authority to public clients.', alt: 'Voltiva admin dashboard showing commerce operations and summary metrics' },
      { label: '03 / Android', title: 'The same commerce system, mobile.', description: 'The React Native and Expo application carries the customer experience to Android, including its own payment handoff and push delivery through Expo and FCM V1.', alt: 'Voltiva Android application showing the mobile storefront' },
      { label: '04 / Backend', title: 'One authority behind every surface.', description: 'A shared TypeScript and Express API owns commerce rules, MongoDB data, authentication, inventory reservations, payment reconciliation, refunds, returns, and external integrations.', alt: '' },
    ],
    architectureLabel: 'Web, Admin, and Android clients connected through the shared Voltiva backend to its data and service providers',
    authority: 'Commerce authority', responsibilities: 'Auth · Orders · Payments · Inventory', providersLabel: 'Connected data and service providers',
    live: 'Live store', source: 'Source', admin: 'Admin', apk: 'Download Android APK', adminNote: 'Admin credentials are intentionally not public.',
    demoLabel: 'Demo note', demo: 'Voltiva runs on Render’s free-tier infrastructure. After inactivity, the backend may need a short moment to wake up. If the store does not load immediately, wait briefly and refresh.',
    demoMeta: 'Portfolio/demo deployment · Stripe TEST mode only',
  },
  chessReview: {
    index: 'PROJECT 02 / FEATURED WORK', heading: 'Local analysis. No server required.', label: 'Featured project / 2026',
    subtitle: 'Local-first chess review — Web, Stockfish & Android',
    intro: 'A React and TypeScript application for importing or playing games and analyzing them locally with Stockfish WebAssembly—without a backend.',
    tabsLabel: 'Chess Review views', tabs: ['game review', 'explore', 'android'],
    surfaces: [
      { label: '01 / Game Review', title: 'Engine feedback made readable.', description: 'Imported games are analyzed with opening-book detection, evaluations, mate-in-N feedback, and move classifications from Book and Best through Mistake and Blunder.', alt: 'Chess Review desktop Game Review showing the board, move classifications, and Stockfish evaluation' },
      { label: '02 / Explore', title: 'Manual analysis without blocking the interface.', description: 'Interactive exploration runs Stockfish in a Web Worker, with background analysis, caching, cancellation, and stale-result protection keeping the interface responsive and consistent.', alt: 'Chess Review desktop Explore mode showing manual analysis and engine variations' },
      { label: '03 / Android', title: 'The same local engine on Android.', description: 'Capacitor packages the local-first React application for Android, preserving board interaction and on-device Stockfish analysis without introducing a backend dependency.', alt: 'Chess Review Android application showing local game analysis on a phone' },
    ],
    live: 'Live Demo', source: 'Source', apk: 'Android APK',
    stackLabel: 'Built with', stack: 'React · TypeScript · Vite · Stockfish WebAssembly · Web Workers · chess.js · react-chessboard · Capacitor',
  },
  highlights: {
    index: '04 / UNDER THE HOOD', title: 'The interesting parts live between the screens.', description: 'Selected problems that shaped how Voltiva was designed and built.',
    items: [
      { title: 'Commerce consistency', text: 'Coordinates inventory reservations, order state, cancellations, returns, and compensation so customer actions stay aligned with stock.' },
      { title: 'Provider reconciliation', text: 'Treats signed Stripe webhooks as the source for payment outcomes, reconciling asynchronous events with internal order state.' },
      { title: 'Mobile push delivery', text: 'Connects Expo and FCM V1 to deliver Android notifications while keeping platform credentials and delivery concerns server-side.' },
      { title: 'Controlled AI authority', text: 'Uses AI to assist admin workflows and product drafting without granting the model direct authority over commerce data or operations.' },
      { title: 'Security boundaries', text: 'Separates public clients, admin capabilities, secrets, and third-party integrations across clear API and deployment boundaries.' },
    ],
  },
  education: {
    index: '05 / BACKGROUND', title: 'Education & languages.', education: 'Education', university: 'Düzce University', degree: 'B.Sc. in Computer Engineering', country: 'Türkiye', years: '2021—2026', languages: 'Languages',
    rows: [{ name: 'Arabic', level: 'Native' }, { name: 'English', level: 'Strong working proficiency' }, { name: 'Turkish', level: 'Intermediate' }],
  },
  contact: {
    index: '06 / GET IN TOUCH', titleLine1: 'Let’s build something', titleLine2: 'that works',
    text: 'I’m open to junior software engineering, full-stack, backend, and related development opportunities—including remote and relocation roles.',
  },
}

export type PortfolioCopy = typeof en

const ar: PortfolioCopy = {
  meta: {
    title: 'Omar Alloush | مطوّر Full-Stack',
    description: 'Omar Alloush، خريج هندسة الحاسوب ومطوّر Full-Stack يبني تطبيقات Web وMobile وأنظمة Backend موثوقة.',
  },
  common: {
    skip: 'تجاوز إلى المحتوى', menu: 'فتح قائمة التنقل', navLabel: 'التنقل الرئيسي', homeLabel: 'Omar Alloush، الصفحة الرئيسية',
    nav: ['نبذة', 'المهارات', 'المشروع', 'تواصل'], status: 'متاح لفرص جديدة', language: 'اللغة', backToTop: 'العودة إلى الأعلى ↑', built: 'صُمّم وطُوّر بعناية.',
  },
  hero: {
    eyebrow: 'خريج هندسة الحاسوب', role: 'خريج هندسة الحاسوب / مطوّر Full-Stack',
    summary: 'أبني تطبيقات Web وMobile وأنظمة Backend موثوقة باستخدام TypeScript وNode.js وReact وReact Native.',
    view: 'استعرض Voltiva', viewChessReview: 'استعرض Chess Review', live: 'النسخة التجريبية', focusLabel: 'مجالات التركيز', focusAria: 'مجالات التطوير التي أركّز عليها',
    focus: ['هندسة الـBackend', 'واجهات المنتجات', 'تطبيقات Mobile', 'التطوير من الفكرة إلى الإطلاق'], scroll: 'تابع لاستكشاف المزيد',
  },
  about: {
    index: '01 / نبذة', title: 'أهتم بالتفاصيل وبالصورة الكاملة للنظام.', imageAlt: 'Omar Alloush في حفل تخرجه الجامعي', location: 'Düzce، Türkiye · 2026',
    lead: 'أنا خريج هندسة الحاسوب من Düzce University. بدأت البرمجة بدافع فضول حقيقي لفهم طريقة عمل البرمجيات وكيف تتكامل أجزاء النظام بصورة سليمة.',
    body: [
      'أعمل عملياً ضمن منظومة TypeScript وJavaScript باستخدام Node.js وReact وReact Native، ولدي أيضاً أساس برمجي في C++ وC# وPython.',
      'أستمتع خصوصاً بالعمل على ما وراء الواجهة: تصميم APIs، وملكية البيانات، وAuthentication، والمدفوعات، والتكاملات الخارجية، والموثوقية، وDeployment. وأتعلّم التقنية التي يحتاجها الحل دون التقيّد بأداة واحدة.',
    ],
    principlesLabel: 'مبادئ هندسية', principles: ['حدود واضحة', 'سلوك موثوق', 'تنفيذ مدروس'],
  },
  skills: {
    index: '02 / المهارات', title: 'أدوات عملية لبناء تطبيقات متكاملة.', description: 'تقنيات أستخدمها في واجهات المنتجات، وتطبيقات Mobile، وأنظمة Backend، وعمليات الإطلاق.',
    groups: ['01 / التقنيات الأساسية', '02 / Backend والتكاملات', '03 / الأدوات وDeployment', '04 / لغات إضافية'],
  },
  voltiva: {
    index: '03 / المشروع الأبرز', heading: 'منصة واحدة، وأربع واجهات مترابطة.', label: 'المشروع الرئيسي / 2026',
    subtitle: 'منصة تجارة إلكترونية متكاملة — Web وAdmin وAndroid وBackend',
    intro: 'نظام تجارة إلكترونية بُني كمشروع Portfolio، يعتمد على Backend واحد بوصفه مصدر الصلاحية الرئيسي، ويخدم تطبيقي React وتطبيق Android مبنياً باستخدام React Native وExpo.',
    tabsLabel: 'واجهات Voltiva', tabs: ['المتجر', 'الإدارة', 'Android', 'Backend'],
    surfaces: [
      { label: '01 / Customer Web', title: 'متجر يضع تجربة المنتج أولاً.', description: 'تتولى واجهة React استكشاف المنتجات، ودمج سلة الزائر، والمفضلة، ومراجعات المشترين الموثّقة، والدفع، والطلبات، والإرجاع، وصندوق رسائل محفوظاً للمستخدم.', alt: 'واجهة متجر Voltiva للعملاء تعرض الصفحة الرئيسية لمتجر التقنية' },
      { label: '02 / Admin', title: 'العمليات اليومية في واجهة واحدة.', description: 'يجمع تطبيق Admin إدارة المنتجات والعروض والمخزون والطلبات والإرجاعات والرسائل والعمليات المدعومة بالـAI، مع إبقاء الصلاحيات الإدارية بعيداً عن تطبيقات العملاء.', alt: 'لوحة Admin في Voltiva تعرض العمليات التجارية والبيانات الملخصة' },
      { label: '03 / Android', title: 'نظام التجارة نفسه على Android.', description: 'ينقل تطبيق React Native وExpo تجربة العملاء إلى Android، مع Payment flow مناسب للموبايل وإشعارات Push عبر Expo وFCM V1.', alt: 'تطبيق Voltiva على Android يعرض واجهة المتجر' },
      { label: '04 / Backend', title: 'مصدر صلاحية واحد لكل الواجهات.', description: 'يتولى Backend مشترك مبني باستخدام TypeScript وExpress قواعد التجارة وبيانات MongoDB وAuthentication وحجز المخزون ومزامنة الدفع والاسترداد والإرجاع والتكاملات الخارجية.', alt: '' },
    ],
    architectureLabel: 'واجهات Web وAdmin وAndroid متصلة عبر Backend مشترك بمصادر البيانات والخدمات الخارجية',
    authority: 'مصدر صلاحية العمليات', responsibilities: 'Auth · Orders · Payments · Inventory', providersLabel: 'مصادر البيانات والخدمات المتصلة',
    live: 'فتح المتجر', source: 'الكود المصدري', admin: 'لوحة Admin', apk: 'تنزيل تطبيق Android', adminNote: 'بيانات الدخول إلى Admin غير متاحة للعامة عمداً.',
    demoLabel: 'ملاحظة التجربة', demo: 'تعمل Voltiva على خدمات Render المجانية. بعد فترة من عدم الاستخدام، قد يحتاج الـBackend إلى وقت قصير ليعمل من جديد. إذا لم يفتح المتجر مباشرة، انتظر قليلاً ثم أعد تحميل الصفحة.',
    demoMeta: 'نسخة Portfolio تجريبية · Stripe في وضع TEST فقط',
  },
  chessReview: {
    index: 'المشروع 02 / مشروع مميز', heading: 'تحليل محلي من دون الحاجة إلى خادم.', label: 'مشروع مميز / 2026',
    subtitle: 'مراجعة شطرنج محلية — Web وStockfish وAndroid',
    intro: 'تطبيق مبني باستخدام React وTypeScript لاستيراد المباريات أو لعبها وتحليلها محلياً عبر Stockfish WebAssembly من دون Backend.',
    tabsLabel: 'واجهات Chess Review', tabs: ['مراجعة المباراة', 'الاستكشاف', 'Android'],
    surfaces: [
      { label: '01 / Game Review', title: 'ملاحظات واضحة من محرك التحليل.', description: 'يحلل التطبيق المباريات المستوردة مع اكتشاف الافتتاحيات والتقييمات وحالات Mate-in-N وتصنيف النقلات من Book وBest وصولاً إلى Mistake وBlunder.', alt: 'واجهة Game Review في Chess Review تعرض الرقعة وتصنيفات النقلات وتقييم Stockfish' },
      { label: '02 / Explore', title: 'تحليل يدوي من دون تعطيل الواجهة.', description: 'يعمل Stockfish داخل Web Worker للاستكشاف التفاعلي، مع التحليل في الخلفية وCaching والإلغاء والحماية من النتائج القديمة للحفاظ على استجابة الواجهة واتساقها.', alt: 'وضع Explore في Chess Review يعرض التحليل اليدوي وتفرعات المحرك' },
      { label: '03 / Android', title: 'المحرك المحلي نفسه على Android.', description: 'يتيح Capacitor تقديم تطبيق React المحلي على Android مع الحفاظ على تفاعل الرقعة وتحليل Stockfish على الجهاز، من دون الاعتماد على Backend.', alt: 'تطبيق Chess Review على Android يعرض تحليل مباراة محلياً على الهاتف' },
    ],
    live: 'النسخة التجريبية', source: 'الكود المصدري', apk: 'تطبيق Android',
    stackLabel: 'بُني باستخدام', stack: 'React · TypeScript · Vite · Stockfish WebAssembly · Web Workers · chess.js · react-chessboard · Capacitor',
  },
  highlights: {
    index: '04 / خلف الواجهات', title: 'أهم التحديات تظهر بين أجزاء النظام.', description: 'مسائل هندسية ساهمت في تشكيل طريقة تصميم Voltiva وتنفيذها.',
    items: [
      { title: 'اتساق عمليات التجارة', text: 'ينسّق النظام بين حجز المخزون وحالة الطلبات والإلغاء والإرجاع والإجراءات التعويضية، حتى تبقى إجراءات العميل متوافقة مع المخزون الفعلي.' },
      { title: 'مزامنة حالة الدفع', text: 'يعتمد الـBackend على Stripe Webhooks الموقّعة لتحديث نتائج الدفع ومزامنتها مع حالة الطلب الداخلية، بدلاً من الاعتماد على الـFrontend.' },
      { title: 'إشعارات Push على Mobile', text: 'يربط النظام Expo مع FCM V1 لإرسال إشعارات Android، مع إبقاء بيانات الاعتماد ومنطق الإرسال داخل الـBackend.' },
      { title: 'صلاحيات AI مضبوطة', text: 'يساعد AI في عمليات Admin وصياغة بيانات المنتجات، من دون منحه صلاحية مباشرة لتغيير بيانات التجارة أو تنفيذ العمليات الحساسة.' },
      { title: 'حدود الأمان وDeployment', text: 'يفصل النظام بوضوح بين تطبيقات العملاء وصلاحيات Admin والأسرار والتكاملات الخارجية ضمن حدود API وDeployment محددة.' },
    ],
  },
  education: {
    index: '05 / الخلفية', title: 'التعليم واللغات.', education: 'التعليم', university: 'Düzce University', degree: 'بكالوريوس هندسة الحاسوب', country: 'Türkiye', years: '2021—2026', languages: 'اللغات',
    rows: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'كفاءة مهنية قوية' }, { name: 'التركية', level: 'مستوى متوسط' }],
  },
  contact: {
    index: '06 / تواصل', titleLine1: 'لنبنِ برمجيات', titleLine2: 'تعمل بوضوح وموثوقية',
    text: 'أنا متاح لفرص Junior Software Engineer وFull-Stack وBackend والمجالات البرمجية ذات الصلة، سواء عن بُعد أو مع إمكانية الانتقال.',
  },
}

const tr: PortfolioCopy = {
  meta: {
    title: 'Omar Alloush | Full-Stack Geliştirici',
    description: 'Omar Alloush; güvenilir web, mobil ve backend uygulamaları geliştiren Bilgisayar Mühendisliği mezunu bir full-stack geliştiricidir.',
  },
  common: {
    skip: 'İçeriğe geç', menu: 'Gezinme menüsünü aç', navLabel: 'Ana gezinme', homeLabel: 'Omar Alloush, ana sayfa',
    nav: ['Hakkımda', 'Yetenekler', 'Proje', 'İletişim'], status: 'Yeni fırsatlara açık', language: 'Dil', backToTop: 'Başa dön ↑', built: 'Özenle tasarlandı ve geliştirildi.',
  },
  hero: {
    eyebrow: 'Bilgisayar Mühendisliği Mezunu', role: 'Bilgisayar Mühendisliği Mezunu / Full-Stack Geliştirici',
    summary: 'TypeScript, Node.js, React ve React Native ile güvenilir web, mobil ve backend uygulamaları geliştiriyorum.',
    view: 'Voltiva’yı incele', viewChessReview: 'Chess Review’u incele', live: 'Canlı demo', focusLabel: 'Odak alanlarım', focusAria: 'Yazılım geliştirme odak alanları',
    focus: ['Backend mühendisliği', 'Ürün arayüzleri', 'Mobil uygulamalar', 'Uçtan uca teslimat'], scroll: 'Keşfetmek için kaydır',
  },
  about: {
    index: '01 / HAKKIMDA', title: 'Yalnızca ekranı değil, sistemin tamamını düşünürüm.', imageAlt: 'Omar Alloush üniversite mezuniyetinde', location: 'Düzce, Türkiye · 2026',
    lead: 'Düzce Üniversitesi Bilgisayar Mühendisliği mezunuyum. Programlamaya, yazılımın nasıl çalıştığını ve iyi bir sistemin parçalarının nasıl birlikte hareket ettiğini anlama merakıyla başladım.',
    body: [
      'Pratikte en güçlü olduğum ekosistem; Node.js, React ve React Native ile birlikte TypeScript ve JavaScript. Ayrıca C++, C# ve Python temellerine sahibim.',
      'Arayüzün arkasındaki konular özellikle ilgimi çekiyor: API tasarımı, veri sahipliği, authentication, ödeme süreçleri, entegrasyonlar, güvenilirlik ve deployment. Problem ne gerektiriyorsa o teknolojiyi öğrenmeye açığım.',
    ],
    principlesLabel: 'Mühendislik ilkeleri', principles: ['Net sınırlar', 'Güvenilir davranış', 'Özenli teslimat'],
  },
  skills: {
    index: '02 / YETENEKLER', title: 'Eksiksiz uygulamalar için pratik bir araç seti.', description: 'Ürün arayüzleri, mobil istemciler, backend sistemleri ve deployment süreçlerinde kullandığım teknolojiler.',
    groups: ['01 / Temel geliştirme', '02 / Backend ve entegrasyonlar', '03 / Araçlar ve deployment', '04 / Diğer programlama dilleri'],
  },
  voltiva: {
    index: '03 / ÖNE ÇIKAN PROJE', heading: 'Tek platform. Birbiriyle bağlantılı dört arayüz.', label: 'Ana proje / 2026',
    subtitle: 'Full-stack e-ticaret platformu — Web, Admin, Android ve Backend',
    intro: 'Portfolio ölçeğinde geliştirilen bu e-ticaret sistemi, iki React uygulamasına ve React Native / Expo Android istemcisine hizmet veren tek bir yetkili Backend üzerine kurulu.',
    tabsLabel: 'Voltiva yüzleri', tabs: ['müşteri', 'admin', 'android', 'backend'],
    surfaces: [
      { label: '01 / Customer Web', title: 'Ürünü merkeze alan bir mağaza.', description: 'React mağazası; ürün keşfi, misafir sepeti birleştirme, favoriler, doğrulanmış satın alma yorumları, ödeme, sipariş, iade ve kalıcı müşteri gelen kutusunu yönetir.', alt: 'Teknoloji mağazasının ana sayfasını gösteren Voltiva müşteri arayüzü' },
      { label: '02 / Admin', title: 'Tüm operasyonlar tek görünümde.', description: 'Admin uygulaması; ürün, kampanya, stok, sipariş, iade, gelen kutusu ve AI destekli operasyonları bir araya getirirken yönetim yetkisini genel istemcilerden uzak tutar.', alt: 'Ticaret operasyonlarını ve özet verileri gösteren Voltiva Admin paneli' },
      { label: '03 / Android', title: 'Aynı ticaret sistemi, mobilde de.', description: 'React Native ve Expo uygulaması; mobil ödeme akışı ve Expo / FCM V1 üzerinden Push bildirimleriyle müşteri deneyimini Android’e taşır.', alt: 'Mobil mağaza arayüzünü gösteren Voltiva Android uygulaması' },
      { label: '04 / Backend', title: 'Her arayüzün arkasında tek bir otorite.', description: 'Ortak TypeScript ve Express API; ticaret kurallarını, MongoDB verilerini, authentication, stok rezervasyonu, ödeme uzlaştırma, geri ödeme, iade ve harici entegrasyonları yönetir.', alt: '' },
    ],
    architectureLabel: 'Web, Admin ve Android istemcileri ortak Voltiva Backend üzerinden veri ve servis sağlayıcılarına bağlanır',
    authority: 'Ticaret yetki kaynağı', responsibilities: 'Auth · Orders · Payments · Inventory', providersLabel: 'Bağlı veri ve servis sağlayıcıları',
    live: 'Canlı mağaza', source: 'Kaynak kod', admin: 'Admin', apk: 'Android APK’yı indir', adminNote: 'Admin giriş bilgileri bilinçli olarak herkese açık tutulmamaktadır.',
    demoLabel: 'Demo notu', demo: 'Voltiva, Render’ın ücretsiz altyapısında çalışır. Bir süre kullanılmadığında Backend’in yeniden başlaması kısa sürebilir. Mağaza hemen açılmazsa kısa bir süre bekleyip sayfayı yenileyin.',
    demoMeta: 'Portfolio/demo yayını · Stripe yalnızca TEST modunda',
  },
  chessReview: {
    index: 'PROJE 02 / ÖNE ÇIKAN PROJE', heading: 'Yerel analiz. Sunucu gerektirmez.', label: 'Öne çıkan proje / 2026',
    subtitle: 'Yerel öncelikli satranç inceleme — Web, Stockfish ve Android',
    intro: 'Oyunları içe aktarmaya veya doğrudan oynamaya ve Stockfish WebAssembly ile tamamen yerel olarak analiz etmeye yönelik React ve TypeScript uygulaması.',
    tabsLabel: 'Chess Review görünümleri', tabs: ['oyun inceleme', 'keşif', 'android'],
    surfaces: [
      { label: '01 / Game Review', title: 'Anlaşılır motor geri bildirimi.', description: 'İçe aktarılan oyunlar; açılış kitabı algılama, değerlendirmeler, mate-in-N geri bildirimi ve Book ile Best’ten Mistake ve Blunder’a uzanan hamle sınıflarıyla analiz edilir.', alt: 'Tahtayı, hamle sınıflarını ve Stockfish değerlendirmesini gösteren Chess Review masaüstü Game Review ekranı' },
      { label: '02 / Explore', title: 'Arayüzü engellemeden manuel analiz.', description: 'Etkileşimli keşifte Stockfish bir Web Worker içinde çalışır; arka plan analizi, önbellekleme, iptal ve eski sonuç koruması arayüzü hızlı ve tutarlı tutar.', alt: 'Manuel analizi ve motor varyantlarını gösteren Chess Review masaüstü Explore modu' },
      { label: '03 / Android', title: 'Aynı yerel motor Android’de.', description: 'Capacitor, yerel öncelikli React uygulamasını Android’e taşırken tahta etkileşimini ve cihaz üzerindeki Stockfish analizini Backend bağımlılığı olmadan korur.', alt: 'Telefonda yerel oyun analizi gösteren Chess Review Android uygulaması' },
    ],
    live: 'Canlı demo', source: 'Kaynak kod', apk: 'Android APK',
    stackLabel: 'Teknolojiler', stack: 'React · TypeScript · Vite · Stockfish WebAssembly · Web Workers · chess.js · react-chessboard · Capacitor',
  },
  highlights: {
    index: '04 / PERDE ARKASI', title: 'Asıl mühendislik ekranların arasında başlar.', description: 'Voltiva’nın tasarım ve geliştirme kararlarını şekillendiren bazı problemler.',
    items: [
      { title: 'Ticaret tutarlılığı', text: 'Stok rezervasyonu, sipariş durumu, iptal, iade ve telafi adımlarını koordine ederek müşteri işlemlerinin gerçek stokla uyumlu kalmasını sağlar.' },
      { title: 'Ödeme sağlayıcısı uzlaştırması', text: 'Ödeme sonuçları için imzalı Stripe Webhooks esas alınır ve asenkron olaylar sistemdeki sipariş durumuyla uzlaştırılır.' },
      { title: 'Mobil Push teslimatı', text: 'Android bildirimleri Expo ve FCM V1 üzerinden gönderilir; platform kimlik bilgileri ve teslimat mantığı Backend tarafında tutulur.' },
      { title: 'Kontrollü AI yetkisi', text: 'AI, Admin operasyonlarını ve ürün taslaklarını destekler; ancak ticaret verileri veya kritik işlemler üzerinde doğrudan yetki sahibi değildir.' },
      { title: 'Güvenlik ve deployment sınırları', text: 'Genel istemciler, Admin yetkileri, gizli bilgiler ve üçüncü taraf entegrasyonları net API ve deployment sınırlarıyla ayrılır.' },
    ],
  },
  education: {
    index: '05 / GEÇMİŞ', title: 'Eğitim ve diller.', education: 'Eğitim', university: 'Düzce Üniversitesi', degree: 'Bilgisayar Mühendisliği Lisans Programı', country: 'Türkiye', years: '2021—2026', languages: 'Diller',
    rows: [{ name: 'Arapça', level: 'Ana dil' }, { name: 'İngilizce', level: 'Güçlü çalışma yetkinliği' }, { name: 'Türkçe', level: 'Orta seviye' }],
  },
  contact: {
    index: '06 / İLETİŞİM', titleLine1: 'Birlikte gerçekten işe yarayan', titleLine2: 'yazılımlar geliştirelim',
    text: 'Junior software engineering, full-stack, backend ve ilgili geliştirme fırsatlarına; uzaktan çalışma veya taşınma seçenekleriyle açığım.',
  },
}

export const translations: Record<Language, PortfolioCopy> = { en, ar, tr }
