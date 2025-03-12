// script.js, this is just to navigate between the pages

document.getElementById("home").addEventListener("click", function () {
    window.location.href = "../html/index.html";  
});

document.getElementById("history").addEventListener("click", function () {
    window.location.href = "../html/history.html";  
});

document.getElementById("price").addEventListener("click", function () {
    window.location.href = "../html/prices.html";  
});

document.getElementById("create").addEventListener("click", function () {
  window.location.href = "../html/creation.html";  
});

document.getElementById("contact").addEventListener("click", function () {
  window.location.href = "../html/about.html";  
});

document.getElementById("future").addEventListener("click", function () {
  window.location.href = "../html/future.html";  
});


fetch('../assets/data.json')
    .then(response => response.json())
    .then(de => loadimage(de));

function loadimage(de){
  document.getElementById("image1").src = de["1"].url;
  document.getElementById("image2").src = de["2"].url;
  document.getElementById("image3").src = de["3"].url;
  document.getElementById("image4").src = de["4"].url;
  document.getElementById("image5").src = de["5"].url;
  document.getElementById("image6").src = de["6"].url;
}



const learn = document.getElementById('learn');
const tParagraph = document.getElementById('tParagraph');
const imageContainer = document.querySelector('.image-container');

const text = "Welcome to Phone Store! We present the latest phone prices, details about the history of phones, and the process of phone creation. Our website provides you with all the information you need to make the best decision when purchasing a phone. Stay tuned as we continue to provide the most up-to-date phone models at the best prices. Learn about how phones have evolved from early models to the smartphones we use today. Explore how phones are created and the technology behind them!";

let index = 0;

function typeText() {
  if (index < text.length) {
    tParagraph.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 50); 
  }
}

function displayDetails(ty){

  fetch('../assets/data.json')
    .then(response => response.json())
    .then(d => loads(ty, d));
}

function loads(ty, d){
  const detail = document.getElementById('detail-text');

  const company = d[ty];

  detail.innerHTML = `
    <h2>${company["Company name"]}</h2>
    <p><strong>Description:</strong> ${company["Description"]}</p>
    <p><strong>Founding Year:</strong> ${company["Founding year"]}</p>
    <p><strong>Models:</strong> ${company["Models"]}</p>
  `;

  detail.style.display = 'block';
}


learn.addEventListener('click', function() {
  tParagraph.style.display = 'block'; 
  typeText.innerHTML = ''; 
  typeText(); 

  imageContainer.classList.add('show');
});

