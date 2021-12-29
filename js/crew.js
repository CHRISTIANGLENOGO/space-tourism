window.addEventListener('load', () => {
    const crewImage = document.querySelector(".card__image");
    const menu = document.querySelectorAll(".card_menu__item");
    const role = document.querySelector(".crew__role");
    const crewName = document.querySelector(".crew__name");
    const bio = document.querySelector(".crew__bio");

    menu.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            fetchData(index);
            for(let i=0; i < menu.length; i++){
                menu[i].classList.remove("crew_active");
            }
            btn.classList.add("crew_active");
        })
    })

    async function fetchData(index){
        await fetch("data.json")
          .then(res => res.json())
          .then(data => getData(data.crew[index]))
    }

    function getData(i){
        role.innerText = i.role;
        bio.innerText = i.bio;
        crewName.innerText = i.name;
        //Remove previous image
        crewImage.children[0].remove();

        //Add current image
        let newImage = document.createElement("img");
        newImage.setAttribute("src", i.images.png);
        newImage.setAttribute("alt", i.name);
        crewImage.appendChild(newImage);
    }
});