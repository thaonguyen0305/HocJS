function tinhlai() {
    let x = document.getElementById("money").value;
    let m = document.getElementById("month").value;
    let a = (Number(x)*8/100)/12;
    document.getElementById("onemonth").innerHTML= a;
    let b = a*m;
    document.getElementById("nmonth").innerHTML= b;
    let c = Number(x)+b;
    document.getElementById("tong").innerHTML= c;
}