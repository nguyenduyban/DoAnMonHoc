function validateForm() {
    var password = document.getElementById("password").value;
    if (password.length < 6) {
        alert("Mật khẩu phải chứa ít nhất 6 ký tự.");
        return false;
    }
    alert("Đăng Nhập thành công!");
    return true;
}