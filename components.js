function injFooter(){
    const footer = document.getElementById("footer")
    footer.innerHTML = "<p>This site is under construction. Not all pages exist!</p>"
}

try{
    injFooter();
} catch (error){
    console.log("Oops! Could not inject footer!");
    
}

function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close the menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const isClickInside = menu.contains(event.target) || hamburger.contains(event.target);
    
    if (!isClickInside && menu.classList.contains('active')) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Close dropdown when clicking a link
document.querySelectorAll('.nav-links .nav-item').forEach(item => {
    if (!item.querySelector('.dropdown')) {
        item.addEventListener('click', function() {
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.hamburger').classList.remove('active');
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // COLLAPSE LOGIC
    document.querySelectorAll(".subject-container").forEach(container => {
        const toggleBtn = container.querySelector(".toggle-arrow");

        toggleBtn.addEventListener("click", () => {
            // Collapse others
            document.querySelectorAll(".subject-container").forEach(subject => {
                if (subject !== container) {
                    subject.classList.remove("active");
                }
            });

            // Toggle current
            container.classList.toggle("active");
        });
    });

    // EXAM BOARD LOGIC
    document.querySelectorAll(".exam-board").forEach(button => {
        button.addEventListener("click", function () {
            const selectedBoard = this.dataset.board;
            const subjectContainer = this.closest(".subject-container");

            // Deactivate all buttons in this subject
            subjectContainer.querySelectorAll(".exam-board").forEach(btn => {
                btn.classList.remove("active");
            });

            // Activate clicked one
            this.classList.add("active");

            // Hide all tool cards
            subjectContainer.querySelectorAll(".tool-card").forEach(card => {
                card.style.display = "none";
            });

            // Show only matching board tool cards
            subjectContainer.querySelectorAll(`.tool-card[data-board="${selectedBoard}"]`).forEach(card => {
                card.style.display = "inline-block";
            });
        });
    });

    // INIT: Show active board’s resources
    document.querySelectorAll(".subject-container").forEach(subject => {
        const activeBtn = subject.querySelector(".exam-board.active");
        if (activeBtn) {
            const board = activeBtn.dataset.board;
            subject.querySelectorAll(`.tool-card[data-board="${board}"]`).forEach(card => {
                card.style.display = "inline-block";
            });
        }
    });
});

