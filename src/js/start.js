
function changeGreeting() {
    let greeting = "Hello again";

    let elementsByTagName = document.getElementsByTagName("H1");

    elementsByTagName[0].textContent = greeting;
};

// document.getElementById("greetButton")
//     .addEventListener("click", changeGreeting);