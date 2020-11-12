function Akar() {
    //nilai dari akar
    console.log(Math.sqrt(25));
    console.log(Math.sqrt(81));

}
function  logaritma() {
    console.log(Math.log(10));
}
function NilaiMax() {
    var main = Math.min(45,100,3,19,29);

    //console.log(max)
    var max = Math.max(19,29,30,120);
    console.log(max)
}

function KodeAt() {
    var kode = "Saya Belajar di pasar";
    //menampilkan kode ASCII
    console.log(kode.charCodeAt(3));
}

function CodePoint() {
    //
    console.log(String.fromCodePoint(0x2615, 0x2744, 0x2f40));
}

function  ubah() {
    var huruf = "Belajar Di Niomic";
    console.log(huruf.toLowerCase());
    console.log(huruf.toUpperCase());
}

function ChartAtu() {
    var kata = "Saya Ingin Makan";

    console.log(kata.charAt(11));
}

function subString() {
    var aku = "Aku Pintar Masak";
    console.log(aku.substr(3));
}

function Slice() {
    var aku = "Saya ingin Pintar";
    console.log(aku.slice(3));
}
function Sinlcude() {
    var inc = "Saya pintar Memasak ";

    //untuk membandingkan kata
    console.log(inc.includes('pintar'));
    console.log(inc.includes("ya"));
}

function Started() {
    var starte = "saya Pintar Memasak Nasi Goreng";
    console.log(starte.startsWith("saya"));
    console.log(starte.endsWith("Goreng"));
    console.log(starte.startsWith("saya",2));
}
function repeat() {
    var isi  = "Ayo belajar ...";

    console.log(isi.repeat(3));
    console.log("ini Buku .." .repeat(2));
}
function konversi() {
    var kon = new String("Belajar Kuy ..");
    console.log(typeof kon)
    console.log(kon)
    var konf = kon.toString();
    console.log(typeof konf);
    var konf2 = kon.valueOf();

    console.log(typeof konf2);
    console.log(konf2);
}
function indexof2() {
    var isi = "saya belajar di rumah";
    // menghitung jumlah huruf
    console.log(isi.indexOf("belajar"));
    console.log(isi.indexOf("saya"));
}
function last() {
    var isi = "Belajar bahasa di Niomic dan mempelajari bahasa java";
    console.log(isi.lastIndexOf("bahasa"));
    console.log(isi.lastIndexOf("bahasa",40))
}

function cari() {
    var isi = "Belajar di Niomic dengan fasih ";
    console.log(isi.search("di"));
    console.log(isi.search(/di/));
}

function mat() {
    var isi = "saya pintar masak nasi goreng";
    console.log(isi.match("pintar"));
    console.log(isi.match(/goreng/));
}

function  isi() {
    var cari = "Ini isi dari data program";
    console.log(cari);
    console.log(cari.replace("program","Penjualan"));    
}

isi()
// mat();
// cari()
// last()
// indexof2();
// konversi()
// repeat()
// Started()
// Sinlcude()
// Slice()
// NilaiMax()
//logaritma()
// Akar()

// KodeAt()
// CodePoint()

// ubah()
// ChartAtu()
// subString()
