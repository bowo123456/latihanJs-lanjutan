function panggilIsfinite() {
    var a = isFinite([1,2,3,4,5]);
    var b = isFinite(["jakarta","lampung","purworejo"]);
    var c = isFinite([1,2,3,"Hello","niomic"]);
    var d = isFinite(-99924.23);

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

panggilIsfinite()