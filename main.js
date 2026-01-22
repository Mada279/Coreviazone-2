AOS.init();

let products = JSON.parse(localStorage.getItem('cz_pro_store')) || [
    { id: "CZ-9001", name: "Dell Precision 7780", price: 92000, cpu: "i9-13th | RTX 4090", img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/precision-notebooks/7780/media-gallery/gray/notebook-precision-7780-gray-gallery-1.psd?fmt=png-alpha&wid=606", temp: "64°C", battery: "100%" },
    { id: "CZ-8055", name: "HP ZBook Fury G10", price: 75500, cpu: "i7-13th | RTX 3500 Ada", img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08480521.png", temp: "68°C", battery: "98%" }
];

function renderArsenal(data = products) {
    const grid = document.getElementById('arsenalGrid');
    if(!grid) return;
    grid.innerHTML = data.map(p => `
        <div class="product-card" data-aos="fade-up">
            <span class="gold-text" style="font-size:10px; font-weight:bold;">ID: ${p.id}</span>
            <img src="${p.img}" style="width:100%; height:180px; object-fit:contain; margin:15px 0;">
            <h3>${p.name}</h3>
            <p style="color:var(--text-mute); font-size:12px;">${p.cpu}</p>
            <h2 class="gold-text">${Number(p.price).toLocaleString()} EGP</h2>
            <div style="display:flex; gap:10px; margin-top:20px;">
                <button onclick="viewPassport('${p.id}')" style="flex:1; background:none; border:1px solid var(--primary); color:var(--primary); padding:10px; border-radius:8px; cursor:pointer;">تقرير المختبر</button>
                <button onclick="window.open('https://wa.me/2015230445')" class="main-btn" style="flex:1;">شراء</button>
            </div>
        </div>
    `).join('');
}

function viewPassport(id) {
    const p = products.find(x => x.id === id);
    const content = document.getElementById('passportContent');
    content.innerHTML = `
        <div style="position:relative; text-align:right;">
            <img src="1769076258479.jpg" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:180px; opacity:0.1; pointer-events:none;">
            <h2 style="color:var(--primary); border-bottom:1px solid var(--border); padding-bottom:10px;">شهادة الفحص الفني</h2>
            <div style="display:grid; grid-template-columns:1fr 100px; gap:20px; margin-top:20px;">
                <div>
                    <p>كود الوحدة: <b class="gold-text">${p.id}</b></p>
                    <p>الموديل: <b>${p.name}</b></p>
                    <p>الحرارة: <b>${p.temp}</b> | البطارية: <b>${p.battery}</b></p>
                    <p>الفحص المجهري: <b style="color:#22c55e">PASSED ✅</b></p>
                    <div id="qrPlace" style="background:#fff; padding:8px; margin-top:15px; border-radius:10px; display:inline-block;"></div>
                </div>
                <div style="text-align:center;">
                    <img src="1769076258479.jpg" style="width:80px; filter:drop-shadow(0 0 5px var(--gold));">
                    <p style="font-size:10px; margin-top:5px;">ختم الاعتماد</p>
                </div>
            </div>
        </div>
    `;
    document.getElementById('passportModal').style.display = 'flex';
    setTimeout(() => { 
        new QRCode(document.getElementById('qrPlace'), { 
            text: `https://mada279.github.io/coreviazone/warranty.html?id=${p.id}`, 
            width: 80, height: 80 
        }); 
    }, 50);
}

function searchArsenal() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term) || p.id.toLowerCase().includes(term));
    renderArsenal(filtered);
}

function saveProduct() {
    const p = {
        id: document.getElementById('pId').value,
        name: document.getElementById('pName').value,
        price: document.getElementById('pPrice').value,
        cpu: document.getElementById('pCpu').value,
        img: document.getElementById('pImg').value,
        temp: "64°C", battery: "100%"
    };
    if(!p.id || !p.name) return alert("أكمل البيانات!");
    products.push(p);
    localStorage.setItem('cz_pro_store', JSON.stringify(products));
    renderArsenal();
    closeAdmin();
}

function toggleTheme() {
    document.getElementById('bodyTag').classList.toggle('light-mode');
}
function openAdmin() { if(prompt("كود المهندس:") === "123") document.getElementById('adminModal').style.display = 'flex'; }
function closeAdmin() { document.getElementById('adminModal').style.display = 'none'; }
function closePassport() { document.getElementById('passportModal').style.display = 'none'; }

window.onload = () => renderArsenal();
