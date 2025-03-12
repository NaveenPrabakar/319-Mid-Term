fetch('../assets/future.json')
    .then(response => response.json())
    .then(data => loadFuture(data));


function loadFuture(data){

    mainContainer = document.getElementById("futures");
    addData = document.createElement("div");

    title = data[0].title;
    description = data[0].description;

    addData.innerHTML = `
    <h1 style="padding: 20px">${title}</h1>
    <p style="font-size: 23px; height: 280px;">${description}</p>
    `;
    mainContainer.appendChild(addData); 
}