document.addEventListener("DOMContentLoaded", function () {
    let pageTitle = document.title;

    let headingText = "Welcome";

    if (pageTitle.includes("About")) {
        headingText = "Hi, I'm Des!";
    } else if (pageTitle.includes("Projects")) {
        headingText = "My Projects";
    } else if (pageTitle.includes("Contact")) {
        headingText = "Let's Connect";
    }

    // Insert the navigation bar separately
    document.getElementById("nav-container").innerHTML = `
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Me</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="contact.html">Contact Me</a></li>
            </ul>
        </nav>
    `;

    // Insert the header title separately
    document.getElementById("header-container").innerHTML = `
        <header>
            <h1>${headingText}</h1>
        </header>
    `;
});


    document.getElementById("footer-container").innerHTML = `
    <footer>
        <p>© 2025 Des | All Rights Reserved</p>
    </footer>
`;
