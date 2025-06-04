document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("hashchange", updateBreadcrumb);
    updateBreadcrumb();
});

function updateBreadcrumb() {
    const breadcrumbContainer = document.getElementById("breadcrumb-path");
    if (!breadcrumbContainer) return;

    const hash = window.location.hash.substring(1) || "home";
    const parts = hash.split("/");

    let pathHtml = `<a href="#home">Home</a>`;

    // Loop through parts to build breadcrumb
    let fullPath = "";
    for (let i = 0; i < parts.length; i++) {
        fullPath += (i === 0 ? "" : "/") + parts[i];
        pathHtml += ` &raquo; <a href="#${fullPath}">${formatBreadcrumbLabel(parts[i])}</a>`;
    }

    breadcrumbContainer.innerHTML = pathHtml;
}

// Format breadcrumb labels (optional nicer labels)
function formatBreadcrumbLabel(label) {
    const map = {
        "home": "Home",
        "about": "About",
        "projects": "Projects",
        "blog": "Blog",
        "metaskills": "Meta Skills",
        "units": "Units",
        "sd": "Software Development",
        "dd": "Database Design",
        "hci": "HCI",
        "sem": "Software Engineering Methods",
        "pp": "Professional Practice"
    };
    return map[label] || label.charAt(0).toUpperCase() + label.slice(1);
}
