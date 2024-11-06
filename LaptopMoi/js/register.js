function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Vui lòng nhập một địa chỉ email hợp lệ.");
        return false;
    }
    if (password.length < 6) {
        alert("Mật khẩu phải chứa ít nhất 6 ký tự.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Mật khẩu và xác nhận mật khẩu không trùng khớp.");
        return false;
    }

    alert("Đăng ký thành công!");
    return true;
}