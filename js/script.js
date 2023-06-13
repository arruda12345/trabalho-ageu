let menuMobile = document.getElementById("menuMobile");
let navMenu = document.getElementById("navMenu")
menuMobile.addEventListener("click", () => {
        if (menuMobile.classList.contains("fa-bars")) {
            menuMobile.classList.remove("fa-bars")
            menuMobile.classList.add("fa-x")
            navMenu.style.left = "0px"
        }
        else {
            menuMobile.classList.remove("fa-x")
            menuMobile.classList.add("fa-bars")
            navMenu.style.left = "-700px"
        }
    })

