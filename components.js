function injFooter(){
    const footer = document.getElementById("footer")
    footer.innerHTML = "<p>This site is under construction. Not all pages exist!</p>"
}

try{
    injFooter();
} catch (error){
    console.log("Oops! Could not inject footer!");
    
}