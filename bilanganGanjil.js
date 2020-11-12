function panggilbilanganGanjil() {
    var bilanganGanjil = [];
    for (let i = 0; i < 29; i++) {
        if (i %2 !== 0) {
            bilanganGanjil.push(i)
            console.log("bilangan ganjil")
        }
        
    }
    return bilanganGanjil
}

console.log(panggilbilanganGanjil())