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
  detail.textContent = d[ty];
  detail.style.display = 'block';
}


learn.addEventListener('click', function() {
  tParagraph.style.display = 'block'; 
  typeText.innerHTML = ''; 
  typeText(); 

  imageContainer.classList.add('show');
});

