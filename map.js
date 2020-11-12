function panggilMap() {
    var dataKota =['jakarta','Balikpapan','Medan'];
    console.log(dataKota);
    dataKota.map(function (item, index,array) {
        console.log(item);
        console.log(index);
        console.log(array)
    });
}
function panggilPerintahMap() {
    var dataKota =['jakarta','purworejo','Balikpapan','Bogor'];

    dataKota.map((item, index, array)=>{
        console.log(item)
        console.log(index)
        console.log(array)

    });
}



// panggilMap()
panggilPerintahMap()