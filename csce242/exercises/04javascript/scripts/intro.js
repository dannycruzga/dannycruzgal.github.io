/* Shows a mesage when button is clicked */
document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello World!";
    e.target.innerHTML = "Done";
};

//Styles the link when it's clicked//
document.getElementById("link").onclick = (e) => {
    e.preventDefault(); //don't go to links destination
    e.target.classList.add("cool-link");
};

//when button clicked make ball bounce//
document.getElementById("btn-bounce").oneclick = (e) => {
    document.getElementById("ball").classList.add("boucning-ball");
};