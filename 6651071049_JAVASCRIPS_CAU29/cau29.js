function getFormvalue() {
    event.preventDefault(); //chặn trang load lại
    var f = document.getElementById("form1");
    var fname = f.elements["fname"].value;
    var lname = f.elements["lname"].value;
    alert("Họ và tên: " + fname + " " + lname);
    return false;
}