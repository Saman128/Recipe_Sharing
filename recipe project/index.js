const signout = document.querySelector(".signout");
const btn = document.querySelector(".btnn");
const btn2 = document.querySelector(".cancle");
function logout() {
    if (signout.classList.contains("signout")) {
        signout.classList.remove("signout");
        signout.classList.add("signout1");
    }
}
btn.addEventListener("click", logout);
function cancle() {
    if (signout.classList.contains("signout1")) {
        signout.classList.remove("signout1");
        signout.classList.add("signout");
    }
}
btn2.addEventListener("click", cancle);


function showpreview(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("file-ip-1-preview");
        preview.src = src;
        preview.style.display = "block";
    }
}


const bt1 = document.querySelector(".one");
const bt2 = document.querySelector(".two2");
const name = document.querySelector(".name");
function stus() {
    if (bt1.classList.contains("one") || bt2.classList.contains("two2")) {
        bt1.classList.remove("one");
        bt1.classList.add("one1");
        bt2.classList.remove("two2");
        bt2.classList.add("two");
        if (bt2.classList.contains("two")) { name.style.textDecoration = " line-through"; }


    } else {
        bt1.classList.remove("one1");
        bt1.classList.add("one");
        bt2.classList.remove("two");
        bt2.classList.add("two2");
        if (bt2.classList.contains("two2")) { name.style.textDecoration = "none "; }

    }
}
bt1.addEventListener("click", stus);
bt2.addEventListener("click", stus);