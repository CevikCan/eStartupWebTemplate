let sideBar = document.querySelector(".sideBar");
// Show Menu
function showSide(){
       
    sideBar.style.width = `50%`
}
// Hide Menu
function hideSide(){
    sideBar.style.width = 0;
}

// Fixed Navbar
window.addEventListener("scroll",()=>{
    const scrolled = window.scrollY;
    if(scrolled > 50) {
        document.querySelector("header").style.boxShadow = `0 3px 7px rgba(0,0,0,0.1)`;
    } else {
        document.querySelector("header").style.boxShadow = "none";
    }
})
