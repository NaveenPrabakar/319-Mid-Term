document.getElementById("vi").addEventListener("click", function () {
  fetch("../assets/history.json")
    .then((response) => response.json())
    .then((myPhones) => loadPhones(myPhones));
});

let currentIndex = 0;

function loadPhones(myPhones) {
  var mainContainer = document.getElementById("vi");

  

  function displayPhone(index) {
    
    var temptml = `
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm" style="max-width: 600px; margin: auto; display: flex; align-items: center;">
          <img src="${myPhones.history[index].image}" class="card-img-top" alt="${myPhones.history[index].title} poster" style="max-width: 200px; height: auto; margin-right: 20px;">
          <div class="card-body">
            <h4 class="my-0 fw-normal">${myPhones.history[index].title}</h4>
            <p class="my-0 text-muted">${myPhones.history[index].fact}</p>
            <p class="my-0 text-muted"><strong>Year:</strong> ${myPhones.history[index].year}</p>
          </div>
        </div>
      </div>
    `;
    mainContainer.innerHTML = temptml;

    
    var nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("btn", "btn-primary", "mt-3");

    nextButton.onclick = function () {
      if (currentIndex < myPhones.history.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      displayPhone(currentIndex);
    };

    var backButton = document.createElement("button");
    backButton.textContent = "Back";
    backButton.classList.add("btn", "btn-secondary", "mt-3", "mr-2");

    backButton.onclick = function () {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = myPhones.history.length - 1;
      }
      displayPhone(currentIndex);
    };

    mainContainer.appendChild(backButton);
    mainContainer.appendChild(nextButton);
  }

  
  displayPhone(currentIndex);
}
