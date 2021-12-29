window.addEventListener('load', () => {
    const techImage = document.querySelector(".card__image");
    const techName = document.querySelector(".tech__name");
    const techDescription = document.querySelector(".tech__description");
    const menuItem = document.querySelectorAll(".tech_menu__item");

    menuItem.forEach((element, index) => {
        element.addEventListener('click', () => {
            fetchData(index);
            for(let i=0; i < menuItem.length; i++){
                menuItem[i].classList.remove("tech_active");
            }
            element.classList.add("tech_active");
        });
    });

    async function fetchData(index){
        await fetch("data.json").then(res => res.json()).then(data => getData(data.technology[index]));
    }

    function getData(data){
        techName.innerText = data.name;
        techDescription.innerText = data.description;
        techImage.children[0].remove();

        //Create New Picture Element
        let pictureElement = document.createElement("picture");
        let sourceElement = document.createElement("source");
        sourceElement.setAttribute("media", "(max-width: 1300px)");
        sourceElement.setAttribute("srcset", data.images.landscape);
        pictureElement.appendChild(sourceElement);
        let imgElement = document.createElement("img");
        imgElement.setAttribute("src", data.images.portrait);
        imgElement.setAttribute("alt", data.name);
        pictureElement.appendChild(imgElement);
        techImage.appendChild(pictureElement);
    }
});