function CS() {
    let d = document.getElementById("length").value;
    let r = document.getElementById("width").value;
    let c = (Number(d)+Number(r))*2;
    document.getElementById("chuvihcn").innerHTML= c;
    let s = Number(d)*Number(r);
    document.getElementById("dientichhcn").innerHTML= s;
}