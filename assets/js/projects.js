function loadProjects() {
    loadProjectCard("Hospital Database System", "A Java and SQL-based hospital management system with full CRUD functionality.", "#projects/hospital");
    loadProjectCard("BET247", "A full-stack booking platform using Node.js, React, and MariaDB.", "#projects/bet247");
    loadProjectCard("Car Service System", "A Java-powered car service management system.", "#projects/car");
    loadProjectCard("Airline Booking System", "A Java-based airline booking system.", "#projects/airline");
    loadProjectCard("Tic Tac Toe", "A football based Tic Tac Toe game in Java", "#projects/tictactoe");
    loadProjectCard("IC Moves", "A group project to create a prototype for a real estate company", "#projects/ic-moves");
    
}

function loadProjectCard(title, description, link) {
    fetch('components/project-card.html')
        .then(response => response.text())
        .then(template => {
            const card = template
                .replace('{{title}}', title)
                .replace('{{description}}', description)
                .replace('{{link}}', link);

            const container = document.querySelector('.projects-list');
            if (container) {
            container.innerHTML += card;
            } else {
            console.warn("Projects list container not found in DOM.");
            }

        });
}
