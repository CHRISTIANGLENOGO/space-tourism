window.addEventListener('load', () => {
    const desName = document.querySelector("#name");
    const desImage = document.querySelector("#image");
    const desDescriptions = document.querySelector("#description");
    const desDistance = document.querySelector("#distance");
    const desTravel = document.querySelector("#travel");
    const menu = document.querySelectorAll(".destination_menu");

    menu.forEach((e, index) => {
         e.addEventListener('click', () => {
             fetchData(index);
             for(let i = 0; i < menu.length; i++){
                 menu[i].classList.remove("destination_active");
             }
             e.classList.add('destination_active');
         });
    });


    async function fetchData(i){
        await fetch("data.json")
         .then(res => res.json())
         .then(data => getData(data.destinations[i]));
    }

    function getData(data){
        desName.innerText = data.name;
        desDescriptions.innerText = data.description;
        desDistance.innerText = data.distance;
        desTravel.innerText = data.travel;
        desImage.children[0].remove();

        //create new image element
        let newImg = document.createElement("img");
        newImg.setAttribute("src", data.images.png);
        newImg.setAttribute("alt", data.name);
        desImage.appendChild(newImg);
    }
});