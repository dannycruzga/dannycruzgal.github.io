document.getElementById("ex1").onclick = () => {
    document.getElementById("exercise1").classList.remove("hidden");
    document.getElementById("exercise2").classList.add("hidden");
};

document.getElementById("ex2").onclick = () => {
    document.getElementById("exercise2").classList.remove("hidden");
    document.getElementById("exercise1").classList.add("hidden");
};

/* Shows exercise 1 and hides exercise 2 */
ex1.onclick = () => {
    exercise1.classList.remove("hidden");
    exercise2.classList.add("hidden");
};

/* Shows exercise 2 and hides exercise 1*/
ex2.onclick = () => {
    exercise2.classList.remove("hidden");
    exercise1.classList.add("hidden");
};

/* Opens and closes the menu on small screens */
arrow.onclick = () => {
    menu.classList.toggle("show");
    if(menu.classList.contains("show")) {
        arrow.innerHTML = "▲"
    } else {
        arrow.innerHTML = "▼"
    }
};

/* Calculates the percentage lost from missing class */
document.getElementById("days").onclick = () => {
    let days = document.getElementById("days").value;
    let lost = days / 25 * 7;

    document.getElementById("percent").innerHTML = "You will lose " + lost.toFixed(1) + "%" + "for skipping " + days + " days."

    if(days == 0) {
        document.getElementById("message").innerHTML = "Great job!";
    } else if(days <= 2) {
        document.getElementById("message").innerHTML = "Not too bad.";
    } else if(days <= 5) {
        document.getElementById("message").innerHTML = "Try not to miss too much.";
    } else {
        document.getElementById("message").innerHTML = "This is not an online class, you are missing valuable learning opportunities.";
    }
};

/* Calculates how many days are left until December 4 */
let today = new Date();
let end = new Date("December 4, 2026");

let difference = end - today;
let millisecondsInDay = 1000 * 60 * 60 * 24;
let days = parseInt(difference / millisecondsInDay);

document.getElementById("days-left").innerHTML = "You have " + days + " days left in the semester."

if(days > 60) {
    document.getElementById("semesterMes").innerHTML = "Not time to start counting down.";
} else if(days > 30) {
    document.getElementById("semesterMes").innerHTML = "Getting closer!";
} else if(days > 10) {
    document.getElementById("semesterMes").innerHTML = "Almost there!";
} else {
    document.getElementById("semesterMes").innerHTML = "Final stretch!";
};

