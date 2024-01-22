function navigateToHomepage() {
    const dropdown = document.getElementById("dropdown");
    const selectedOption = dropdown.options[dropdown.selectedIndex].value;

    switch (selectedOption) {
        case "option1":
            loadPage("homepage1.html", "homepage1.css")
            break;
        case "option2":
            loadPage("homepage2.html", "homepage2.css")
            break;
        case "quiz":
            loadPage("../pages/index.html", "../css/style.css")
            break;
        default:
        // Handle the default case or add additional cases as needed
    }
}

function buttonHover() {
    const button = document.getElementById("clickMeButton");
    button.style.backgroundColor = "#2980b9";
    button.style.boxShadow = "0 0 20px rgba(52, 152, 219, 0.8)";
}

function buttonHoverOut() {
    const button = document.getElementById("clickMeButton");
    button.style.backgroundColor = "#3498db";
    button.style.boxShadow = "none";
}

function loadPage(htmlFile, cssFile) {
    // Load HTML file
    window.location.href = htmlFile;
    const head = document.head || document.getElementsByTagName("head")[0];
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = cssFile;
    head.appendChild(link);
}

function toggleProfileEnlargement(element) {
    // Toggle the "enlarged" class on the profile box
    element.classList.toggle("enlarged");
}

function revertEnlargement(element) {
    // Remove the "enlarged" class to revert the enlargement
    element.classList.remove("enlarged");
}

function enlargeProfile(element) {
    // Enlarge the profile only if it is not already enlarged
    if (!element.classList.contains("enlarged")) {
        toggleProfileEnlargement(element);
    } else {
        // Revert the enlargement if the profile is already enlarged
        revertEnlargement(element);
    }
}
