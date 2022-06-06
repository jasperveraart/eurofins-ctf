const introForm = document.getElementById("introductionForm");
const rulesForm = document.getElementById("rulesForm");
const userForm = document.getElementById("userForm");
const adminForm = document.getElementById("adminForm");
const rootForm = document.getElementById("rootForm");
const bufferForm = document.getElementById("bufferForm");

let points = 0;
const bar = document.getElementById("bar")

introForm.addEventListener("submit", function (event) {

    document.getElementById("intro-submit").classList.add("btn-success");
    document.getElementById("intro-submit").classList.remove("btn-outline-success");
    document.getElementById("intro-submit").innerHTML = "Correct answer";
    document.getElementById("intro-submit").setAttribute("disabled", true);

    document.getElementById("intro-input").classList.add("border-success");
    document.getElementById("intro-input").classList.add("border-3");

    document.getElementById("rules").classList.add("show")

    bar.style.width = "16%";
    bar.setAttribute("aria-valuenow", "16");
    bar.innerHTML = "16%";

    points += 1;
});

rulesForm.addEventListener("submit", function (event) {

    document.getElementById("rules-submit").classList.add("btn-success");
    document.getElementById("rules-submit").classList.remove("btn-outline-success");
    document.getElementById("rules-submit").innerHTML = "Correct answer";
    document.getElementById("rules-submit").setAttribute("disabled", true);


    document.getElementById("rules-input").classList.add("border-success");
    document.getElementById("rules-input").classList.add("border-3");

    document.getElementById("User").classList.add("show")

    bar.style.width = "33%";
    bar.setAttribute("aria-valuenow", "33");
    bar.innerHTML = "33%";

    points += 1;
});

userForm.addEventListener("submit", function (event) {

        if (userForm.elements[0].value === "EURO:Uz3R-Fl4g") {
            document.getElementById("user-submit").classList.add("btn-success");
            document.getElementById("user-submit").classList.remove("btn-outline-success");
            document.getElementById("user-submit").innerHTML = "Correct answer";
            document.getElementById("user-submit").setAttribute("disabled", true);


            document.getElementById("user-input").classList.add("border-success");
            document.getElementById("user-input").classList.add("border-3");
            document.getElementById("user-input").setAttribute("readonly", true);

            document.getElementById("Root").classList.add("show");

            bar.style.width = "50%";
            bar.setAttribute("aria-valuenow", "50");
            bar.innerHTML = "50%";

            points += 1;
        }
});

adminForm.addEventListener("submit", function (event) {

    if (adminForm.elements[0].value === "EURO:Adm1N-Fl4g") {
        document.getElementById("admin-submit").classList.add("btn-success");
        document.getElementById("admin-submit").classList.remove("btn-outline-success");
        document.getElementById("admin-submit").innerHTML = "Correct answer";
        document.getElementById("admin-submit").setAttribute("disabled", true);


        document.getElementById("admin-input").setAttribute("readonly", true);
        document.getElementById("admin-input").classList.add("border-success");
        document.getElementById("admin-input").classList.add("border-3");

        bar.style.width = "67%";
        bar.setAttribute("aria-valuenow", "67");
        bar.innerHTML = "67%";

        points += 1;
    }
});

rootForm.addEventListener("submit", function (event) {

    if (rootForm.elements[0].value === "EURO:ro0T-Fl4g") {
        document.getElementById("root-submit").classList.add("btn-success");
        document.getElementById("root-submit").classList.remove("btn-outline-success");
        document.getElementById("root-submit").innerHTML = "Correct answer";
        document.getElementById("root-submit").setAttribute("disabled", true);


        document.getElementById("root-input").setAttribute("readonly", true);
        document.getElementById("root-input").classList.add("border-success");
        document.getElementById("root-input").classList.add("border-3");

        document.getElementById("Buffer").classList.add("show");

        bar.style.width = "84%";
        bar.setAttribute("aria-valuenow", "84");
        bar.innerHTML = "84%";

        points += 1;
    }
});

bufferForm.addEventListener("submit", function (event) {

    if (bufferForm.elements[0].value === "EURO:Buff3r0v3rf0w-Fl4g") {
        document.getElementById("buffer-submit").classList.add("btn-success");
        document.getElementById("buffer-submit").classList.remove("btn-outline-success");
        document.getElementById("buffer-submit").innerHTML = "Correct answer";
        document.getElementById("buffer-submit").setAttribute("disabled", true);

        document.getElementById("buffer-input").classList.add("border-success");
        document.getElementById("buffer-input").classList.add("border-3");
        document.getElementById("buffer-input").setAttribute("readonly", true);

        points += 1;

        bar.style.width = "100%";
        bar.setAttribute("aria-valuenow", "100");
        bar.innerHTML = "100%";

        if (points === 6) {
            window.alert("Congratz! You did it!")
        }
    }
});