/* add two numbers and get remainder */

//
function getModulo() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    // If x is Not a number
    if (isNaN(x) || isNaN(y) ) {
        text = "Input is not number";
    } else {
        if (x == "" || y == "") {
            text = "Input is not number";
        } else {
            var z = parseInt(x) % parseInt(y);
            text = "Mod Value : " + z;
        }
    }
    document.getElementById("modAnswer").innerHTML = text;
}


