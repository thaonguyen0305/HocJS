function convertMoney(){
    let x = document.getElementById("amount").value;
    let y = document.getElementById("from").value;
    let z = document.getElementById("to").value;
    let convert = x/(y/z)
    document.getElementById("result").innerHTML = convert;
}