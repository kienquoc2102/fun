function calcAge() {
    var Age = document.getElementById("iform").value;
    var currentYear = new Date().getFullYear();
    if (Age == "")
    {
        alert("Nhập tuổi đi bro!!!");
        return;
    }
    var BirthYear = Number(currentYear) - Number(Age);
    document.getElementById("age").innerHTML = Age;
    document.getElementById("year").innerHTML = BirthYear;
    document.getElementById("result").style.display = "block";
}

document.getElementById("result").style.display = "none";

document.getElementById("btn_calc").onclick = function () {
    calcAge();
}