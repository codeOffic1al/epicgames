function clickMe(){
    const button = document.getElementById("box_menu");
    // button.classList.toggle("worked");
    if(button.style.display == "none"){
        button.style.display = "flex";
    }
    else button.style.display = "none";
}
