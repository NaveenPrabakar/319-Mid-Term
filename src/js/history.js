document.getElementById("vi").addEventListener("click", function () {
    fetch("../assets/history.json").then(response => response.json()).then(myPhones => loadPhones(myPhones))
});

function loadPhones(myPhones){

    var mainContainer = document.getElementById("vi");
    var phone = myPhones.history[0]; //the first phone

    mainContainer.innerHTML = '';

    mainContainer.innerHTML =` 
        <div>
            <h3>${phone.title}</h3>
            <p>${phone.fact}</p>
            <img class= "phone-image" src="${phone.image}" alt="${phone.title}">
            <button class="next-button">Next</button>
        </div>
        `
    ;

    mainContainer.querySelector('.next-button').addEventListener("click", function(){
        loadPhone1(myPhones,1);
    });
}


function loadPhone1(myPhones, pos){
    var mainContainer = document.getElementById("vi");
    var phone = myPhones.history[pos];


    mainContainer.innerHTML = '';

    mainContainer.innerHTML = `
        <div>
            <h3>${phone.title}</h3>
            <p>${phone.fact}</p>
            <img class= "phone-image" src="${phone.image}" alt="${phone.title}">
            <button class="next-button">Next</button>
        </div>
        `
    ;
}
