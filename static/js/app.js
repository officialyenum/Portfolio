/* add two numbers and get remainder */

function getModulo() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    // If x is Not a number
    if (isNaN(x) || isNaN(y) ) {
        text = "One or more Input is not a number";
    } else {
        if (x == "" || y == "") {
            text = "One or more Input is empty";
        } else {
            var z = parseInt(x) % parseInt(y);
            text = "Mod Value : " + z;
        }
    }
    document.getElementById("modAnswer").innerHTML = text;
}


