function bilanganKelipatan() {
    var bil = []


    for (let i = 0; i <50; i++) {
        if (i % 3 === 0) {
            bil.push(i)
        }
        
    }
    return bil;
}

console.log(bilanganKelipatan())