var s = 'abcD123 efg456 !@#$%^_';
var b = 'Para tetua adat mendiskusikan masalah kejahatan yang terjadi di rumah adat';


//angka
console.log(b.match(/\d/g));

//setela angka
console.log(b.match(/\D/g));


//angka huruf
console.log(b.match(/\w/g));

//selain angka,huruf dan undescore
console.log(b.match(/\w/g));

// whitespace
console.log(b.match(/\s/g));