const db = firebase.database();
const dbkkm = db.ref('db_admin/').on('value', kkmSuccess, handleError)

let username;
let password;

function kkmSuccess(items1) {
    username = items1.val()[0]['username'];
    password = items1.val()[0]['password'];
}

function handleError(error) {
    console.log(error);
}

function login() {
    let userName = document.getElementById('inputUsername').value;
    let passWord = document.getElementById('inputPassword').value;

    if ((userName == "") && (passWord == "")) {
        errUsername.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Username harus diisi terlebih dahulu!
                            </div>`;
        errPassword.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Password pilih kelas terlebih dahulu!
                            </div>`;
    } else if ((userName == "")) {
        errUsername.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Username harus diisi terlebih dahulu!
                            </div>`;
        errPassword.innerHTML = ``;
    } else if ((passWord == "")) {
        errPassword.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Password harus diisi terlebih dahulu!
                            </div>`;
        errUsername.innerHTML = ``;
    } else if ((userName != username) && (passWord != password)) {
        errUsername.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Username salah!
                            </div>`;
        errPassword.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Password salah!
                            </div>`;
    } else if ((userName != username)) {
        errUsername.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Username salah!
                            </div>`;
        errPassword.innerHTML = ``;
    } else if ((passWord != password)) {
        errUsername.innerHTML = ``;
        errPassword.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
                                Password salah!
                            </div>`;
    } else {
        localStorage.setItem("userName", userName);
        localStorage.setItem("passWord", passWord);

        window.open("home.html");
    }
}