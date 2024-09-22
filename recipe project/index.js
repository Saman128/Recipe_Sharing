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

const statusButtons = document.querySelectorAll(".status-btn");

statusButtons.forEach(button => {
    button.addEventListener("click", function () {
        const icon = this.querySelector("i");
        const name = this.parentElement.previousElementSibling;

        if (icon.classList.contains("fa-toggle-on")) {
            icon.classList.remove("fa-toggle-on");
            icon.classList.add("fa-toggle-off");
            this.classList.remove("one");
            this.classList.add("two");
            name.classList.add("text-of");

        } else {
            icon.classList.remove("fa-toggle-off");
            icon.classList.add("fa-toggle-on");
            this.classList.remove("two");
            this.classList.add("one");
            name.classList.remove("text-of");
        }
    });
});
