function panggilConcat() {
    var data = ["Jakarta","Bekasi","Purworejo","Yogyakarta","Bogor"];
    var kabupaten = ["lampung timur","jawa tengah","Jawa Barat"];
    
    var cop = data.slice()
    console.log(cop)
    //gabungkan data
    var hasil = data.concat(kabupaten)
    return hasil

    
}

console.log(panggilConcat())