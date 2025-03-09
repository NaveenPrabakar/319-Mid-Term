document.getElementById("vi").addEventListener("click", function () {
    fetch("../assets/history.json").then(response => response.json()).then(myPhones => loadPhones(myPhones))
});

function loadPhones(myPhones){
    var mainContainer = document.getElementById("vi");

    mainContainer.innerHTML = '';

    var temptml = '';


    for(let i = 0; i < myPhones.history.length; i++){
        temptml += ` 
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm" style="max-width: 300px; margin: auto;">
              <img src="${myPhones.history[i].image}" class="card-img-top" alt="${myPhones.history[i].title} poster">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">${myPhones.history[i].title}</h4>
                <p class="my-0 text-muted">${myPhones.history[i].fact}>
              </div>
            </div>
          </div>

        `;
    }
 
    mainContainer.innerHTML = temptml;
}
