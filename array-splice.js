function panggilSplice() {
    var kota = ['jakarta','medan','padang','malang'];
    console.log(kota)

    kota.splice(1,2,'purworejo')
    kota.splice(3,0,'Bekasi')
    return kota
}

console.log(panggilSplice())