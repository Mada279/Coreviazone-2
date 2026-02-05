/**
 * COREVIAZONE ENGINE v10.2 - FULL I18N SUPPORT
 * دعم ترجمة كامل لجميع عناصر الموقع
 */

// الإعدادات الأساسية
let currentLang = 'ar';
let adminEnabled = false;
let clicks = 0;
let animationPlayed = false;

// قاعدة بيانات المنتجات مع دعم كامل للترجمة
let products = JSON.parse(localStorage.getItem('corevia_arsenal')) || [
    { 
        id: "CZ-FURY-G10", 
        name: { ar: "HP ZBook Fury G10", en: "HP ZBook Fury G10" }, 
        price: "95000", 
        cpu: { ar: "إنتل كور أي9-13950HX", en: "Intel Core i9-13950HX" }, 
        ram: { ar: "64GB DDR5", en: "64GB DDR5" }, 
        storage: { ar: "1TB NVMe SSD", en: "1TB NVMe SSD" }, 
        screen: { ar: "شاشة 17.3 بوصة UHD", en: "17.3\" UHD Display" }, 
        benchmark: 94 
    },
    { 
        id: "CZ-PREC-7780", 
        name: { ar: "Dell Precision 7780", en: "Dell Precision 7780" }, 
        price: "115000", 
        cpu: { ar: "إنتل كور أي9-13980HX", en: "Intel Core i9-13980HX" }, 
        ram: { ar: "128GB DDR5", en: "128GB DDR5" }, 
        storage: { ar: "2TB NVMe SSD", en: "2TB NVMe SSD" }, 
        screen: { ar: "شاشة 17.3 بوصة PremierColor 4K", en: "17.3\" PremierColor 4K" }, 
        benchmark: 98 
    },
    { 
        id: "CZ-THINKPAD-P16", 
        name: { ar: "Lenovo ThinkPad P16 الجيل الثاني", en: "Lenovo ThinkPad P16 Gen 2" }, 
        price: "87500", 
        cpu: { ar: "إنتل كور أي7-13700H", en: "Intel Core i7-13700H" }, 
        ram: { ar: "32GB DDR5", en: "32GB DDR5" }, 
        storage: { ar: "1TB NVMe SSD", en: "1TB NVMe SSD" }, 
        screen: { ar: "شاشة 16 بوصة WQXGA", en: "16\" WQXGA Display" }, 
        benchmark: 89 
    },
    { 
        id: "CZ-MACBOOK-PRO", 
        name: { ar: "Apple MacBook Pro 16 بوصة", en: "Apple MacBook Pro 16\"" }, 
        price: "105000", 
        cpu: { ar: "Apple M2 Max", en: "Apple M2 Max" }, 
        ram: { ar: "64GB ذاكرة موحدة", en: "64GB Unified Memory" }, 
        storage: { ar: "1TB SSD", en: "1TB SSD" }, 
        screen: { ar: "شاشة 16.2 بوصة Liquid Retina XDR", en: "16.2\" Liquid Retina XDR" }, 
        benchmark: 92 
    }
];

// قاعدة بيانات الوحدات السحابية مع دعم كامل للترجمة
const cloudUnits = [
    { 
        id: "C-PRO-VPS", 
        name: { ar: "سيرفر افتراضي محترف", en: "Pro Managed VPS" }, 
        price: "850", 
        specs: { 
            ar: "4 معالجات افتراضية | 8GB رام | 100GB تخزين سريع | لينكس/ويندوز", 
            en: "4 vCPU | 8GB RAM | 100GB NVMe SSD | Linux/Windows" 
        } 
    },
    { 
        id: "C-LAB-DED", 
        name: { ar: "سيرفر مخصص للمختبر", en: "Dedicated Lab Server" }, 
        price: "2800", 
        specs: { 
            ar: "معالجين زيون جولد | 64GB رام ECC | 1TB تخزين سريع | حماية من هجمات DDoS", 
            en: "Dual Xeon Gold | 64GB ECC RAM | 1TB NVMe SSD | DDoS Protection" 
        } 
    },
    { 
        id: "C-AI-STATION", 
        name: { ar: "وحدة تدريب الذكاء الاصطناعي", en: "AI Training Instance" }, 
        price: "4500", 
        specs: { 
            ar: "8 معالجات افتراضية | 128GB رام | 2TB تخزين سريع | كرتين NVIDIA A100", 
            en: "8 vCPU | 128GB RAM | 2TB NVMe | Dual NVIDIA A100" 
        } 
    }
];

// قاموس الترجمة الموحد - يشمل جميع النصوص في الموقع
const translations = {
    ar: {
        // التنقل
        home: "الرئيسية", 
        build: "ابنِ مختبرك", 
        cloud: "الوحدات السحابية", 
        arsenal: "الترسانة", 
        about: "عن المختبر",
        contactNav: "تواصل معنا",
        
        // القسم الرئيسي
        badge: "نظام الأداء المتكامل - COREVIAZONE",
        heroTitlePart1: "هندسة", 
        heroTitlePart2: "الأداء المتكامل",
        heroDesc: "مختبرنا يدمج بين قوة العتاد الفيزيائي واستقرار البنية التحتية السحابية لتوفير بيئة عمل احترافية لا تتوقف.",
        btnArsenal: "استعراض الترسانة", 
        btnCustom: "تخصيص بيئة عمل",
        floatingCard1: "السحابة نشطة",
        floatingCard2: "العتاد موثّق",
        brandSlogan: "هندسة الأداء المتقدم",
        heroImgAlt: "بنية تحتية متطورة من كورفيازون",
        
        // أداة البناء
        configTitle: "ابنِ مختبرك", 
        configSub: "صمم مختبرك المتكامل (جهاز + سيرفر + برمجيات) في خطوة واحدة",
        step1: "1. العتاد (Hardware)", 
        step2: "2. السحاب (Cloud VPS)",
        step3: "3. حزم البرمجة",
        mobileWorkstation: "محطة عمل متنقلة (ZBook/Precision)",
        aiTower: "برج تدريب ذكاء اصطناعي (RTX مزدوج)",
        noHardware: "لا أحتاج أجهزة (سحاب فقط)",
        starterUnit: "وحدة بداية (ويب/تطبيقات)",
        proVPS: "سيرفر افتراضي محترف (Docker/تطوير)",
        dedicatedServer: "سيرفر مخصص للمختبر",
        aiStack: "حزمة جاهزة للذكاء الاصطناعي",
        devStack: "بيئة تطوير كاملة",
        priceBtn: "طلب عرض سعر للمختبر", 
        
        // الترسانة
        arsenalTitle: "ترسانة العتاد الفيزيائي",
        searchHold: "ابحث عن وحدة...",
        benchScore: "تقييم أداء المختبر", 
        passBtn: "تقرير المختبر", 
        buyBtn: "حجز الوحدة",
        cpu: "المعالج", 
        ram: "الرامات", 
        storage: "التخزين", 
        screen: "الشاشة",
        
        // الوحدات السحابية
        cloudTitle: "الوحدات السحابية",
        cloudSub: "سيرفرات مدارة بمعايير هندسية صارمة",
        cloudBadge: "وحدة سحابية", 
        cloudActivate: "تفعيل الخدمة",
        priceSuffix: "/شهر",
        
        // الاتصال
        contactTitle: "تواصل مع المهندسين", 
        nameHold: "الاسم الكامل", 
        trackHold: "رقم تتبع الوحدة أو نوع الخدمة", 
        msgHold: "المواصفات المطلوبة...", 
        sendBtn: "إرسال الطلب",
        
        // الإدارة
        adminTitle: "إضافة وحدة جديدة للترسانة", 
        saveBtn: "إضافة للجرد النهائي",
        adminName: "اسم الجهاز (Model)",
        adminPrice: "السعر (EGP)",
        adminCpu: "المعالج (CPU)",
        adminRam: "الرامات (RAM)",
        adminStorage: "التخزين (Storage)",
        adminScreen: "الشاشة (Display)",
        adminBench: "نسبة الأداء % (0-100)",
        deleteConfirm: "هل تريد حذف هذه الوحدة نهائياً؟",
        adminAlertOn: "وضع المسؤول: نشط", 
        adminAlertOff: "وضع المسؤول: معطل",
        
        // النماذج
        formSuccess: "تم إرسال طلبك بنجاح! سيتواصل معك أحد المهندسين قريباً.",
        formError: "حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.",
        configSuccess: "تم إعداد طلبك بنجاح! يرجى ملء النموذج أدناه لإكمال الطلب.",
        
        // شريط الأخبار
        ticker1: "حالة السحابة: <span style='color:#4ade80'>متصل (99.9%)</span>",
        ticker2: "وصول جديد: HP ZBook Fury G11 (جاهز للذكاء الاصطناعي)",
        ticker3: "برنامج التبادل: استبدل جهازك القديم واحصل على خصم 20%",
        ticker4: "بنية تحتية سحابية جديدة في منطقة الشرق الأوسط",
        
        // الذيل
        footerDesc: "هندسة الأداء المتكامل للحلول التقنية المتطورة",
        quickLinks: "الروابط السريعة",
        homeFooter: "الرئيسية",
        buildFooter: "ابنِ مختبرك",
        arsenalFooter: "الترسانة",
        cloudFooter: "الوحدات السحابية",
        contactFooter: "اتصل بنا",
        contactInfo: "معلومات الاتصال",
        footerLocation: "القاهرة، مصر",
        footerPhone: "+201015230445",
        footerEmail: "info@coreviazone.com",
        newsletterTitle: "النشرة البريدية",
        newsletterDesc: "اشترك للحصول على أحدث التحديثات والعروض",
        newsletterPlaceholder: "بريدك الإلكتروني",
        newsletterBtn: "اشتراك",
        copyright: "&copy; 2026 Coreviazone. جميع الحقوق محفوظة.",
        developerCredit: "تطوير: محمد حنفي فرج",
        
        // جواز المرور
        passportHeader: "تقرير جودة المختبر",
        passportModel: "الموديل:",
        passportSpecs: "المواصفات:",
        passportCpu: "المعالج:",
        passportRam: "الرامات:",
        passportStorage: "التخزين:",
        passportDisplay: "الشاشة:",
        passportStatus: "الحالة:",
        passportCertified: "معتمد",
        passportScore: "نسبة الأداء:",
        passportVerify: "امسح لفحص الأصالة والضمان",
        passportId: "معرف الوحدة:"
    },
    en: {
        // التنقل
        home: "Home", 
        build: "Build Your Lab", 
        cloud: "Cloud Units", 
        arsenal: "Arsenal", 
        about: "About Lab",
        contactNav: "Contact Us",
        
        // القسم الرئيسي
        badge: "COREVIAZONE INTEGRATED PERFORMANCE ECOSYSTEM",
        heroTitlePart1: "Engineering", 
        heroTitlePart2: "Integrated Performance",
        heroDesc: "Our lab merges physical hardware power with cloud infrastructure stability to provide a non-stop professional work environment.",
        btnArsenal: "View Arsenal", 
        btnCustom: "Customize Lab",
        floatingCard1: "Cloud Active",
        floatingCard2: "Hardware Verified",
        brandSlogan: "Advanced Performance Engineering",
        heroImgAlt: "Coreviazone Advanced Infrastructure",
        
        // أداة البناء
        configTitle: "Build Your Lab", 
        configSub: "Design your integrated lab (device + server + software) in one step",
        step1: "1. Hardware", 
        step2: "2. Cloud VPS",
        step3: "3. Software Stacks",
        mobileWorkstation: "Mobile Workstation (ZBook/Precision)",
        aiTower: "AI Training Tower (Dual RTX)",
        noHardware: "Cloud Only (No Hardware)",
        starterUnit: "Starter Unit (Web/App)",
        proVPS: "Pro Managed VPS (Docker/Dev)",
        dedicatedServer: "Dedicated Lab Server",
        aiStack: "AI-Ready Stack",
        devStack: "Full-Stack Dev Environment",
        priceBtn: "Request Lab Quote", 
        
        // الترسانة
        arsenalTitle: "Physical Hardware Arsenal",
        searchHold: "Search units...",
        benchScore: "Lab Performance Score", 
        passBtn: "Lab Report", 
        buyBtn: "Book Unit",
        cpu: "CPU", 
        ram: "RAM", 
        storage: "Storage", 
        screen: "Display",
        
        // الوحدات السحابية
        cloudTitle: "Cloud Units",
        cloudSub: "Managed servers with strict engineering standards",
        cloudBadge: "Cloud Unit", 
        cloudActivate: "Activate Service",
        priceSuffix: "/mo",
        
        // الاتصال
        contactTitle: "Contact Engineers", 
        nameHold: "Full Name", 
        trackHold: "Unit ID or Service Type", 
        msgHold: "Required Specifications...", 
        sendBtn: "Send Request",
        
        // الإدارة
        adminTitle: "Add New Arsenal Unit", 
        saveBtn: "Add to Final Inventory",
        adminName: "Device Name (Model)",
        adminPrice: "Price (EGP)",
        adminCpu: "Processor (CPU)",
        adminRam: "Memory (RAM)",
        adminStorage: "Storage",
        adminScreen: "Display (Screen)",
        adminBench: "Benchmark % (0-100)",
        deleteConfirm: "Delete this unit permanently?",
        adminAlertOn: "Admin Mode: ACTIVE", 
        adminAlertOff: "Admin Mode: DISABLED",
        
        // النماذج
        formSuccess: "Your request has been sent successfully! One of our engineers will contact you soon.",
        formError: "An error occurred while sending the form. Please try again.",
        configSuccess: "Your configuration has been set up successfully! Please fill out the form below to complete your request.",
        
        // شريط الأخبار
        ticker1: "Cloud Status: <span style='color:#4ade80'>ONLINE (99.9%)</span>",
        ticker2: "New Arrival: HP ZBook Fury G11 (AI-Ready)",
        ticker3: "Trade-in Program: Exchange your old device for 20% discount",
        ticker4: "New cloud infrastructure in Middle East region",
        
        // الذيل
        footerDesc: "Integrated performance engineering for advanced technical solutions",
        quickLinks: "Quick Links",
        homeFooter: "Home",
        buildFooter: "Build Your Lab",
        arsenalFooter: "Arsenal",
        cloudFooter: "Cloud Units",
        contactFooter: "Contact Us",
        contactInfo: "Contact Information",
        footerLocation: "Cairo, Egypt",
        footerPhone: "+201015230445",
        footerEmail: "info@coreviazone.com",
        newsletterTitle: "Newsletter",
        newsletterDesc: "Subscribe to get the latest updates and offers",
        newsletterPlaceholder: "Your email address",
        newsletterBtn: "Subscribe",
        copyright: "&copy; 2026 Coreviazone. All rights reserved.",
        developerCredit: "Developed by: Mohamed Hanafi Faraj",
        
        // جواز المرور
        passportHeader: "LAB QUALITY CERTIFICATE",
        passportModel: "Model:",
        passportSpecs: "Specifications:",
        passportCpu: "CPU:",
        passportRam: "RAM:",
        passportStorage: "Storage:",
        passportDisplay: "Display:",
        passportStatus: "Status:",
        passportCertified: "CERTIFIED",
        passportScore: "Performance Score:",
        passportVerify: "Scan to Verify Authenticity & Warranty",
        passportId: "Unit ID:"
    }
};

// دالة مساعدة للحصول على الترجمة المناسبة
function getTranslation(key, lang = currentLang) {
    return translations[lang][key] || translations['en'][key] || key;
}

// دالة مساعدة للحصول على ترجمة الحقول المتعددة اللغات
function getFieldTranslation(field, lang = currentLang) {
    if (typeof field === 'object' && field !== null) {
        return field[lang] || field['en'] || field['ar'] || JSON.stringify(field);
    }
    return field;
}

// تهيئة التطبيق عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    // تهيئة AOS
    AOS.init({ 
        duration: 1000, 
        once: true,
        offset: 100
    });
    
    // تحميل تفضيلات المستخدم
    loadUserPreferences();
    
    // تحديث الواجهة
    updateUI();
    
    // تشغيل الرسوم المتحركة لأشرطة الأداء
    document.addEventListener('scroll', animateBenchmarks);
    
    // التحقق من وضع المسؤول
    checkAdminStatus();
    
    // إعداد أحداث النقر على الشعار
    document.querySelector('.logo-area').addEventListener('click', handleLogoClick);
});

// تحميل تفضيلات المستخدم المحفوظة
function loadUserPreferences() {
    // تحميل اللغة المحفوظة
    const savedLang = localStorage.getItem('corevia_lang');
    if (savedLang && ['ar', 'en'].includes(savedLang)) {
        currentLang = savedLang;
    }
    
    // تحميل الوضع المحفوظ
    const savedTheme = localStorage.getItem('corevia_theme');
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
}

// تحديث واجهة المستخدم بالكامل
function updateUI() {
    const t = translations[currentLang];
    
    // 1. تحديث اتجاه اللغة والسمات
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    
    // 2. تحديث زر تبديل اللغة
    document.getElementById('langBtn').innerText = currentLang === 'ar' ? 'EN' : 'AR';
    
    // 3. تحديث العناصر التي تحتوي على وسم data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerText = t[key];
        }
    });
    
    // 4. تحديث خيارات الـ select التي تحتوي على data-i18n-option
    document.querySelectorAll('[data-i18n-option]').forEach(option => {
        const key = option.getAttribute('data-i18n-option');
        if (t[key]) {
            option.text = t[key];
        }
    });
    
    // 5. تحديث الـ Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
    
    // 6. تحديث العناصر المحددة في القسم الرئيسي
    document.getElementById('heroBadge').innerHTML = t.badge;
    document.getElementById('heroTitlePart1').innerText = t.heroTitlePart1;
    document.getElementById('heroTitlePart2').innerText = t.heroTitlePart2;
    document.getElementById('heroDesc').innerText = t.heroDesc;
    document.getElementById('brandSlogan').innerText = t.brandSlogan;
    document.getElementById('heroImgAlt').alt = t.heroImgAlt;
    document.getElementById('cardText1').innerText = t.floatingCard1;
    document.getElementById('cardText2').innerText = t.floatingCard2;
    
    // 7. تحديث شريط الأخبار
    updateTicker();
    
    // 8. تحديث الذيل
    updateFooter();
    
    // 9. إعادة عرض المنتجات والوحدات السحابية
    renderArsenal();
    renderCloud();
    
    // 10. تحديث أيقونة الوضع الليلي
    updateThemeIcon();
}

// تحديث شريط الأخبار
function updateTicker() {
    const t = translations[currentLang];
    const tickerContent = document.getElementById('tickerContent');
    if (!tickerContent) return;
    
    tickerContent.innerHTML = `
        <div class="ticker-item"><i class="fas fa-circle" style="color:#4ade80; font-size:8px;"></i> ${t.ticker1}</div>
        <div class="ticker-item"><i class="fas fa-microchip"></i> ${t.ticker2}</div>
        <div class="ticker-item"><i class="fas fa-recycle"></i> ${t.ticker3}</div>
        <div class="ticker-item"><i class="fas fa-server"></i> ${t.ticker4}</div>
    `;
}

// تحديث الذيل
function updateFooter() {
    const t = translations[currentLang];
    
    document.getElementById('footerDesc').innerText = t.footerDesc;
    document.getElementById('footerLocation').innerText = t.footerLocation;
    document.getElementById('footerPhone').innerText = t.footerPhone;
    document.getElementById('footerEmail').innerText = t.footerEmail;
    document.getElementById('newsletterDesc').innerText = t.newsletterDesc;
    document.getElementById('newsletterEmail').placeholder = t.newsletterPlaceholder;
    document.getElementById('newsletterBtn').title = t.newsletterBtn;
    document.getElementById('copyrightText').innerHTML = `${t.copyright} <span class="developer-credit">${t.developerCredit}</span>`;
}

// عرض المنتجات في "الترسانة"
function renderArsenal(data = products) {
    const t = translations[currentLang];
    const grid = document.getElementById('arsenalGrid');
    if (!grid) return;
    
    grid.innerHTML = data.map((p, idx) => `
        <div class="product-card" data-aos="fade-up" data-aos-delay="${idx * 100}">
            <small class="accent">UNIT ID: ${p.id}</small>
            <h3>${getFieldTranslation(p.name)}</h3>
            
            <div class="specs-mini">
                <span><i class="fas fa-microchip"></i> <b>${t.cpu}:</b> ${getFieldTranslation(p.cpu)}</span>
                <span><i class="fas fa-memory"></i> <b>${t.ram}:</b> ${getFieldTranslation(p.ram)}</span>
                <span><i class="fas fa-hdd"></i> <b>${t.storage}:</b> ${getFieldTranslation(p.storage)}</span>
                <span><i class="fas fa-desktop"></i> <b>${t.screen}:</b> ${getFieldTranslation(p.screen)}</span>
            </div>

            <div class="bench-container">
                <div>
                    <span>${t.benchScore}</span>
                    <span>${p.benchmark}%</span>
                </div>
                <div class="bench-bar"><div class="bench-fill" style="width:${p.benchmark}%"></div></div>
            </div>

            <h2 class="accent">${Number(p.price).toLocaleString()} EGP</h2>
            
            <div class="card-btns">
                <button onclick="viewPassport('${p.id}')" class="main-btn">${t.passBtn}</button>
                <button onclick="prepareInquiry('${p.id}')" class="sec-btn">${t.buyBtn}</button>
            </div>
            ${adminEnabled ? `<button onclick="deleteProduct(${idx})" class="del-btn"><i class="fas fa-trash"></i> DELETE</button>` : ''}
        </div>
    `).join('');
    
    // إعادة تشغيل الرسوم المتحركة لأشرطة الأداء
    if (animationPlayed) {
        document.querySelectorAll('.bench-fill').forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
}

// عرض الوحدات السحابية
function renderCloud() {
    const t = translations[currentLang];
    const grid = document.getElementById('cloudGrid');
    if (!grid) return;
    
    grid.innerHTML = cloudUnits.map((c, idx) => `
        <div class="product-card cloud-style" data-aos="fade-up" data-aos-delay="${idx * 100}">
            <span class="badge">${t.cloudBadge}</span>
            <h3>${getFieldTranslation(c.name)}</h3>
            <p>${getFieldTranslation(c.specs)}</p>
            <h2 class="accent">${Number(c.price).toLocaleString()} EGP<small>${t.priceSuffix}</small></h2>
            <button onclick="prepareInquiry('${c.id}')" class="main-btn w-100">${t.cloudActivate}</button>
        </div>
    `).join('');
}

// تشغيل الرسوم المتحركة لأشرطة الأداء عند التمرير
function animateBenchmarks() {
    const benchFills = document.querySelectorAll('.bench-fill');
    const windowHeight = window.innerHeight;
    
    benchFills.forEach(fill => {
        const elementTop = fill.getBoundingClientRect().top;
        if (elementTop < windowHeight * 0.9 && !animationPlayed) {
            const width = fill.style.width;
            fill.style.width = '0';
            setTimeout(() => {
                fill.style.width = width;
            }, 100);
        }
    });
    
    if (benchFills.length > 0 && !animationPlayed) {
        animationPlayed = true;
    }
}

// نظام الإدارة السري (لوحة التحكم)
function handleLogoClick() {
    clicks++;
    if (clicks >= 5) {
        adminEnabled = !adminEnabled;
        const t = translations[currentLang];
        
        // حفظ حالة المسؤول
        localStorage.setItem('corevia_admin_enabled', adminEnabled.toString());
        
        document.getElementById('adminBtn').style.display = adminEnabled ? 'flex' : 'none';
        alert(adminEnabled ? t.adminAlertOn : t.adminAlertOff);
        
        clicks = 0;
        renderArsenal();
    }
}

// حفظ منتج جديد
function saveProduct() {
    const t = translations[currentLang];
    const nameValue = document.getElementById('pName').value.trim();
    const cpuValue = document.getElementById('pCpu').value.trim();
    const ramValue = document.getElementById('pRam').value.trim();
    const storageValue = document.getElementById('pStorage').value.trim();
    const screenValue = document.getElementById('pScreen').value.trim();
    
    // التحقق من المدخلات المطلوبة
    if (!nameValue || !document.getElementById('pPrice').value.trim() || !cpuValue) {
        alert(t.formError || "Please fill all required fields (Name, Price, CPU)");
        return;
    }
    
    // إنشاء كائن المنتج مع دعم الترجمة
    const newP = {
        id: "CZ-" + Math.random().toString(36).substr(2, 6).toUpperCase(),
        name: { ar: nameValue, en: nameValue },
        price: document.getElementById('pPrice').value.trim(),
        cpu: { ar: cpuValue, en: cpuValue },
        ram: { ar: ramValue, en: ramValue },
        storage: { ar: storageValue, en: storageValue },
        screen: { 
            ar: screenValue || "غير محدد", 
            en: screenValue || "Not specified" 
        },
        benchmark: Math.min(100, Math.max(0, parseInt(document.getElementById('pBench').value) || 85))
    };
    
    // إضافة المنتج إلى المصفوفة
    products.unshift(newP);
    
    // حفظ في LocalStorage
    localStorage.setItem('corevia_arsenal', JSON.stringify(products));
    
    // إغلاق النافذة وإظهار رسالة نجاح
    closeAdmin();
    renderArsenal();
    
    // إعادة تعيين الحقول
    document.getElementById('pName').value = '';
    document.getElementById('pPrice').value = '';
    document.getElementById('pCpu').value = '';
    document.getElementById('pRam').value = '';
    document.getElementById('pStorage').value = '';
    document.getElementById('pScreen').value = '';
    document.getElementById('pBench').value = '85';
    
    alert(currentLang === 'ar' ? "تمت إضافة الوحدة بنجاح إلى الجرد!" : "Unit added successfully to inventory!");
}

// حذف منتج
function deleteProduct(idx) {
    const t = translations[currentLang];
    if (confirm(t.deleteConfirm)) {
        products.splice(idx, 1);
        localStorage.setItem('corevia_arsenal', JSON.stringify(products));
        renderArsenal();
    }
}

// عرض جواز المرور (الضمان)
function viewPassport(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    
    const t = translations[currentLang];
    
    // تصميم تقرير المختبر المصغر
    const content = `
        <div class="passport-box">
            <div class="passport-header">
                <h3>COREVIA<span class="accent">ZONE</span></h3>
                <small>${t.passportHeader}</small>
            </div>
            <div class="passport-body">
                <p><strong>${t.passportModel}</strong> ${getFieldTranslation(p.name)}</p>
                <p><strong>${t.passportSpecs}</strong></p>
                <p>• ${t.passportCpu} ${getFieldTranslation(p.cpu)}</p>
                <p>• ${t.passportRam} ${getFieldTranslation(p.ram)}</p>
                <p>• ${t.passportStorage} ${getFieldTranslation(p.storage)}</p>
                <p>• ${t.passportDisplay} ${getFieldTranslation(p.screen)}</p>
                <p><strong>${t.passportStatus}</strong> <span style="color:#10b981; font-weight:700;">${t.passportCertified}</span></p>
                <p><strong>${t.passportScore}</strong> ${p.benchmark}%</p>
                <div id="qrPlace"></div>
                <p class="qr-label">${t.passportVerify}</p>
                <p class="qr-label" style="font-size:18px; font-weight:900; margin-top:5px; color:var(--primary);">${t.passportId} ${p.id}</p>
            </div>
        </div>`;
    
    document.getElementById('passportContent').innerHTML = content;
    document.getElementById('passportModal').style.display = 'flex';
    
    // إنشاء رمز الاستجابة السريعة
    setTimeout(() => {
        const qrPlace = document.getElementById('qrPlace');
        qrPlace.innerHTML = '';
        
        new QRCode(qrPlace, { 
            text: "https://coreviazone.com/verify?id=" + p.id, 
            width: 150, 
            height: 150,
            correctLevel: QRCode.CorrectLevel.H
        });
    }, 100);
}

// أداة بناء المختبر
function submitConfig() {
    const t = translations[currentLang];
    const hIndex = document.getElementById('confHard').selectedIndex;
    const cIndex = document.getElementById('confCloud').selectedIndex;
    const aiStack = document.getElementById('stackAI').checked;
    const devStack = document.getElementById('stackDev').checked;
    
    // الحصول على النصوص المترجمة للاختيارات
    const hText = document.getElementById('confHard').options[hIndex].text;
    const cText = document.getElementById('confCloud').options[cIndex].text;
    
    let configDetails = currentLang === 'ar' 
        ? `طلب مختبر هندسي مخصص:\n\n- العتاد المطلوب: ${hText}\n- الوحدة السحابية: ${cText}\n- الحزم البرمجية: `
        : `Custom Engineering Lab Request:\n\n- Hardware: ${hText}\n- Cloud Unit: ${cText}\n- Software Stacks: `;
    
    if (aiStack && devStack) {
        configDetails += currentLang === 'ar' ? "حزمة الذكاء الاصطناعي + بيئة التطوير الكاملة" : "AI-Ready Stack + Full-Stack Dev Environment";
    } else if (aiStack) {
        configDetails += currentLang === 'ar' ? "حزمة الذكاء الاصطناعي" : "AI-Ready Stack";
    } else if (devStack) {
        configDetails += currentLang === 'ar' ? "بيئة التطوير الكاملة" : "Full-Stack Dev Environment";
    } else {
        configDetails += currentLang === 'ar' ? "بدون حزم برمجية" : "No software stacks";
    }
    
    // ملء نموذج الاتصال
    document.getElementById('msgArea').value = configDetails;
    document.getElementById('targetUnit').value = "CUSTOM-LAB-CONFIG";
    
    // التمرير إلى قسم الاتصال
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    
    // إظهار رسالة نجاح
    alert(t.configSuccess);
}

// البحث في الترسانة
function searchArsenal() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(p => {
        const name = getFieldTranslation(p.name).toLowerCase();
        const cpu = getFieldTranslation(p.cpu).toLowerCase();
        const ram = getFieldTranslation(p.ram).toLowerCase();
        return name.includes(query) || 
               p.id.toLowerCase().includes(query) ||
               cpu.includes(query) ||
               ram.includes(query);
    });
    
    renderArsenal(filteredProducts);
}

// إعداد نموذج الاستعلام
function prepareInquiry(id) {
    document.getElementById('targetUnit').value = id;
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    
    setTimeout(() => {
        document.getElementById('custName').focus();
    }, 500);
}

// معالجة نموذج الاتصال
function handleForm(event) {
    event.preventDefault();
    const t = translations[currentLang];
    
    const name = document.getElementById('custName').value.trim();
    const message = document.getElementById('msgArea').value.trim();
    
    if (!name || !message) {
        alert(t.formError);
        return;
    }
    
    console.log("Form submitted:", { name, unit: document.getElementById('targetUnit').value, message });
    
    document.getElementById('coreviaForm').reset();
    alert(t.formSuccess);
}

// تبديل اللغة
function toggleLanguage() { 
    currentLang = currentLang === 'ar' ? 'en' : 'ar'; 
    updateUI(); 
    localStorage.setItem('corevia_lang', currentLang);
}

// تبديل الوضع الليلي/النهاري
function toggleTheme() { 
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('corevia_theme', newTheme);
    updateThemeIcon();
}

// تحديث أيقونة الوضع الليلي
function updateThemeIcon() {
    const theme = document.documentElement.getAttribute('data-theme');
    const icon = document.querySelector('[onclick="toggleTheme()"] i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// التحقق من وضع المسؤول
function checkAdminStatus() {
    const savedAdminStatus = localStorage.getItem('corevia_admin_enabled');
    if (savedAdminStatus === 'true') {
        adminEnabled = true;
        document.getElementById('adminBtn').style.display = 'flex';
    }
}

// وظائف التنقل
function scrollToArsenal() { 
    document.getElementById('arsenal').scrollIntoView({ behavior: 'smooth' }); 
}

function openAdmin() { 
    document.getElementById('adminModal').style.display = 'flex';
    // إعادة تعيين الحقول
    ['pName', 'pPrice', 'pCpu', 'pRam', 'pStorage', 'pScreen', 'pBench'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = id === 'pBench' ? '85' : '';
    });
}

function closeAdmin() { 
    document.getElementById('adminModal').style.display = 'none'; 
}

function closePassport() { 
    document.getElementById('passportModal').style.display = 'none'; 
}
