let button = document.querySelector(".bttn button");
let container = document.querySelector(".out");
let alert = document.querySelector(".myalert");
let inputs = document.querySelectorAll("input");
let boot = document.querySelector(".mymy");
let link = document.querySelectorAll("link") ;

console.log(inputs);
console.log(boot);


boot.onclick = function() {
    if (link[2].href.endsWith("main.css")) {
        link[2].href = "./css/dark.css";
        boot.innerText="Light Mode"
    } else {
        link[2].href = "./css/main.css";
        boot.innerText="Dark Mode"

    }
}

button.onclick = function () {
    // remove the alert
    alert.style.display = "none";
    // Create the outermost div
    let outerDiv = document.createElement("div");
    outerDiv.className = "allop w-100";

    // Create the alert div
    let alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-primary row justify-content-between ml-0 mr-0";
    alertDiv.setAttribute("role", "alert");

    // Create the paragraph
    let paragraph = document.createElement("p");
    paragraph.className = "row align-items-center col-lg-11 text-align-left";
    paragraph.style.marginBottom = "0px";
    paragraph.textContent = "Name of task :" + inputs[0].value + '\n' + " Date :" + inputs[2].value;
    inputs[0].value = "";
    inputs[2].value = "";
    // Create the close icon div
    let iconDiv = document.createElement("div");

    // Create the icon itself
    let icon = document.createElement("i");
    icon.className = "fa-solid fa-rectangle-xmark reed";

    // Append the icon to the iconDiv
    iconDiv.appendChild(icon);

    // Append the paragraph and iconDiv to the alertDiv
    alertDiv.appendChild(paragraph);
    alertDiv.appendChild(iconDiv);

    // Append the alertDiv to the outerDiv
    outerDiv.appendChild(alertDiv);

    // Finally, append the outerDiv to the alertContainer
    container.appendChild(outerDiv);

    iconDiv.onclick = function () {
        outerDiv.remove();
    }
    if (container.length <= 2 ) {
        alert.style.display = "block";

    } else {
        alert.style.display = "none";

    }

};