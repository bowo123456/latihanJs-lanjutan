function panggilBilanganGenap() {
    var bilanganGenap = []
    for (let i = 0; i < 10; i++) {
        if (i % 2 ===0) {
            bilanganGenap.push(i)
        }
         
    }
    return bilanganGenap  
        
}

console.log(panggilBilanganGenap())