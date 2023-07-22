function tinhlai() {
    let x = document.getElementById("money").value;
    let m = document.getElementById("month").value;
    let a = (Number(x)*8/100)/12*1;
    document.getElementById("onemonth").innerHTML= a;
    let b = (Number(x)*8/100)/12*m;
    document.getElementById("nmonth").innerHTML= b;
    let c = Number(x)+b;
    document.getElementById("tong").innerHTML= c;
}