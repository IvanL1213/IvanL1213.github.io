function injFooter(){
    const footer = document.getElementById("footer")
    footer.innerHTML = "<p>This site is under construction. Not all pages exist!</p>"
}

try{
    injFooter();
} catch (error){
    console.log("Oops! Could not inject footer!");
    
}
document.querySelectorAll('.exam-board').forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        document.querySelectorAll('.exam-board').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Get the selected exam board
        let selectedBoard = button.getAttribute('data-board');

        // Hide all cards first
        document.querySelectorAll('.card').forEach(card => {
            card.style.display = "none";
        });

        // Show only the cards that match the selected exam board
        document.querySelectorAll(`.card[data-board="${selectedBoard}"]`).forEach(card => {
            card.style.display = "block";
        });
    });
});
