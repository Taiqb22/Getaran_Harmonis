// Mathjax
window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)'], ['#', '#']]
    },
    svg: {
        fontCache: 'global'
    }
};

(function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
    script.async = true;
    document.head.appendChild(script);
})();

// kontrol 2 halaman 
function satu2() {
    document.getElementById("btnprev").classList.add('disabled');
    document.getElementById("btnnext").classList.remove('disabled');
    document.getElementById("satu").hidden = false;
    document.getElementById("btnsatu").classList.add('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("next").setAttribute("onClick", "javascript: dua2();");
}

function dua2() {
    document.getElementById("btnprev").classList.remove('disabled');
    document.getElementById("btnnext").classList.add('disabled');
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = false;
    document.getElementById("btndua").classList.add('active');
    document.getElementById("prev").setAttribute("onClick", "javascript: satu2();");
    document.getElementById("mlanjut").hidden = false;
}

// kontrol 4 halaman 
function satu3() {
    document.getElementById("btnprev").classList.add('disabled');
    document.getElementById("btnnext").classList.remove('disabled');
    document.getElementById("satu").hidden = false;
    document.getElementById("btnsatu").classList.add('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active');
    document.getElementById("next").setAttribute("onClick", "javascript: dua3();");
}

function dua3() {
    document.getElementById("btnprev").classList.remove('disabled');
    document.getElementById("btnnext").classList.remove('disabled');
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = false;
    document.getElementById("btndua").classList.add('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active');
    document.getElementById("next").setAttribute("onClick", "javascript: tiga3();");
    document.getElementById("prev").setAttribute("onClick", "javascript: satu3();");
}

function tiga3() {
    document.getElementById("btnprev").classList.remove('disabled');
    document.getElementById("btnnext").classList.add('disabled');
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = false;
    document.getElementById("btntiga").classList.add('active');
    document.getElementById("prev").setAttribute("onClick", "javascript: dua3();");
    document.getElementById("mlanjut").hidden = false;
}

// kontrol 4 halaman 
function satu4() {
    document.getElementById("btnprev").classList.add('disabled');
    document.getElementById("btnnext").classList.remove('disabled');
    document.getElementById("satu").hidden = false;
    document.getElementById("btnsatu").classList.add('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active');
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('active');
    document.getElementById("next").setAttribute("onClick", "javascript: dua4();");
}

function dua4() {
    document.getElementById("btnprev").classList.remove('disabled');
    document.getElementById("btnnext").classList.remove('disabled');
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = false;
    document.getElementById("btndua").classList.add('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active');
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('active');
    document.getElementById("next").setAttribute("onClick", "javascript: tiga4();");
    document.getElementById("prev").setAttribute("onClick", "javascript: satu4();");
}

function tiga4() {
    document.getElementById("btnprev").classList.remove('disabled');
    document.getElementById("btnnext").classList.remove('disabled');
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = false;
    document.getElementById("btntiga").classList.add('active');
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('active');
    document.getElementById("next").setAttribute("onClick", "javascript: empat4();");
    document.getElementById("prev").setAttribute("onClick", "javascript: dua4();");
}

function empat4() {
    document.getElementById("btnprev").classList.remove('disabled');
    document.getElementById("btnnext").classList.add('disabled');
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active');
    document.getElementById("empat").hidden = false;
    document.getElementById("btnempat").classList.add('active');
    document.getElementById("prev").setAttribute("onClick", "javascript: tiga4();");
    document.getElementById("mlanjut").hidden = false;
}

// kontrol 5 halaman 
function satu() {
    document.getElementById("btnprev").classList.add('disabled');
    document.getElementById("btnnext").classList.remove('disabled');
    document.getElementById("satu").hidden = false;
    document.getElementById("btnsatu").classList.add('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active');
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('active');
    document.getElementById("lima").hidden = true;
    document.getElementById("btnlima").classList.remove('active');
    document.getElementById("next").setAttribute("onClick", "javascript: dua();");
}

function dua() {
    document.getElementById("btnprev").classList.remove('disabled');
    document.getElementById("btnnext").classList.remove('disabled');
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = false;
    document.getElementById("btndua").classList.add('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active');
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('active');
    document.getElementById("lima").hidden = true;
    document.getElementById("btnlima").classList.remove('active');
    document.getElementById("next").setAttribute("onClick", "javascript: tiga();");
    document.getElementById("prev").setAttribute("onClick", "javascript: satu();");
}

function tiga() {
    document.getElementById("btnprev").classList.remove('disabled');
    document.getElementById("btnnext").classList.remove('disabled');
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = false;
    document.getElementById("btntiga").classList.add('active');
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('active');
    document.getElementById("lima").hidden = true;
    document.getElementById("btnlima").classList.remove('active');
    document.getElementById("next").setAttribute("onClick", "javascript: empat();");
    document.getElementById("prev").setAttribute("onClick", "javascript: dua();");
}

function empat() {
    document.getElementById("btnprev").classList.remove('disabled');
    document.getElementById("btnnext").classList.remove('disabled');
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active');
    document.getElementById("empat").hidden = false;
    document.getElementById("btnempat").classList.add('active');
    document.getElementById("lima").hidden = true;
    document.getElementById("btnlima").classList.remove('active');
    document.getElementById("next").setAttribute("onClick", "javascript: lima();");
    document.getElementById("prev").setAttribute("onClick", "javascript: tiga();");
}

function lima() {
    document.getElementById("btnprev").classList.remove('disabled');
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active');
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('active');
    document.getElementById("lima").hidden = false;
    document.getElementById("btnlima").classList.add('active');
    document.getElementById("btnnext").classList.add('disabled');
    document.getElementById("prev").setAttribute("onClick", "javascript: empat();");
    document.getElementById("mlanjut").hidden = false;
}

var video1 = document.getElementById("video1");

function durasi1(X) {
    if (X == 1) {
        video1.currentTime = 0;
    } else if (X == 2) {
        video1.currentTime = 48;
    } else if (X == 3) {
        video1.currentTime = 69;
    } else if (X == 4) {
        video1.currentTime = 170;
    } else if (X == 5) {
        video1.currentTime = 255;
    }
}

var video2 = document.getElementById("video2");

function durasi2(X) {
    if (X == 1) {
        video2.currentTime = 0;
    } else if (X == 2) {
        video2.currentTime = 46;
    } else if (X == 3) {
        video2.currentTime = 71;
    } else if (X == 4) {
        video2.currentTime = 164;
    } else if (X == 5) {
        video2.currentTime = 251;
    }
}

function cekjawabant1() {
    var lanjut = document.getElementById('lanjut');
    var mlanjut = document.getElementById('mlanjut');
    var detik1 = document.getElementById('detik1');
    var detik2 = document.getElementById('detik2');
    var detik3 = document.getElementById('detik3');
    var k11 = document.getElementById('k11');
    var k12 = document.getElementById('k12');
    var k21 = document.getElementById('k21');
    var k22 = document.getElementById('k22');
    var k31 = document.getElementById('k31');
    var k32 = document.getElementById('k32');
    var total = 0;

    if ((detik1.value == 11.8) || (detik1.value == '11,8')) {
        detik1.style = "border: 3px solid green; font-size:15px; text-align:center;"
        total += 1;
    }
    else {
        detik1.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }
    if ((detik2.value == 9.6) || (detik2.value == '9,6')) {
        detik2.style = "border: 3px solid green; font-size:15px; text-align:center;"
        total += 1;
    }
    else {
        detik2.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }
    if (detik3.value == 7) {
        detik3.style = "border: 3px solid green; font-size:15px; text-align:center;"
        total += 1;
    }
    else {
        detik3.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }
    if ((k11.value == 1.18) || (k11.value == '1,18')) {
        k11.style = "border: 3px solid green; font-size:15px; text-align:center;"
        total += 1;
    }
    else {
        k11.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }
    if ((k12.value == 0.84) || (k12.value == '0,84')) {
        k12.style = "border: 3px solid green; font-size:15px; text-align:center;"
        total += 1;
    }
    else {
        k12.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }
    if ((k21.value == 0.96) || (k21.value == '0,96')) {
        k21.style = "border: 3px solid green; font-size:15px; text-align:center;"
        total += 1;
    }
    else {
        k21.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }
    if ((k22.value == 1.04) || (k22.value == '1,04')) {
        k22.style = "border: 3px solid green; font-size:15px; text-align:center;"
        total += 1;
    }
    else {
        k22.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }
    if ((k31.value == 0.7) || (k31.value == '0,7')) {
        k31.style = "border: 3px solid green; font-size:15px; text-align:center;"
        total += 1;
    }
    else {
        k31.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }
    if ((k32.value == 1.42) || (k32.value == '1,42')) {
        k32.style = "border: 3px solid green; font-size:15px; text-align:center;"
        total += 1;
    }
    else {
        k32.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }

    if (total == 9) {
        lanjut.hidden = false;
        mlanjut.hidden = false;
    }
}

function cekjawabant2() {
    var k2_1 = document.getElementById('k2_1');
    var k2_2 = document.getElementById('k2_2');
    var k2_3 = document.getElementById('k2_3');
    var k2_12 = document.getElementById('k2_12');
    var k2_22 = document.getElementById('k2_22');
    var k2_32 = document.getElementById('k2_32');
    var k2_13 = document.getElementById('k2_13');
    var k2_23 = document.getElementById('k2_23');
    var k2_33 = document.getElementById('k2_33');

    if ((k2_1.value == 6.6) || (k2_1.value == '6,6')) {
        k2_1.style = "border: 3px solid green; font-size:15px; text-align:center;"
    }
    else {
        k2_1.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }
    if ((k2_2.value == 7.8) || (k2_2.value == '7,8')) {
        k2_2.style = "border: 3px solid green; font-size:15px; text-align:center;"
    }
    else {
        k2_2.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }
    if ((k2_3.value == 8.8) || (k2_3.value == '8,8')) {
        k2_3.style = "border: 3px solid green; font-size:15px; text-align:center;"
    }
    else {
        k2_3.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }
    if ((k2_12.value == 0.02) || (k2_12.value == '0,02')) {
        k2_12.style = "border: 3px solid green; font-size:15px; text-align:center;"
    }
    else {
        k2_12.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }
    if ((k2_22.value == 0.02) || (k2_22.value == '0,02')) {
        k2_22.style = "border: 3px solid green; font-size:15px; text-align:center;"
    }
    else {
        k2_22.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }
    if ((k2_32.value == 0.02) || (k2_32.value == '0,02')) {
        k2_32.style = "border: 3px solid green; font-size:15px; text-align:center;"
    }
    else {
        k2_32.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }
    if ((k2_13.value == 2.5) || (k2_13.value == '2,5')) {
        k2_13.style = "border: 3px solid green; font-size:15px; text-align:center;"
    }
    else {
        k2_13.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }
    if (k2_23.value == 4) {
        k2_23.style = "border: 3px solid green; font-size:15px; text-align:center;"
    }
    else {
        k2_23.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }
    if (k2_33.value == 5) {
        k2_33.style = "border: 3px solid green; font-size:15px; text-align:center;"
    }
    else {
        k2_33.style = "border: 3px solid red; font-size:15px; text-align:center;"
    }
}