//configurando um XMLHttpRequest para permitir conexão com o servidor de API
//do GitHub

function requestUserRepo(userName) {
  //criando novo objeto XMLHttpRequest
  const request = new XMLHttpRequest();

  const url = `https://api.github.com/users/${userName}`;

  //abrindo nova conexão, usando requisição GET via URL
  //fornecendo 3 argumentos: (GET/POST, The URL, Async True/False)
  request.open("GET", url, true);

  //quando a requisição for aceita
  request.onload = function () {
    //analisa dados em JSON
    const data = JSON.parse(this.response);

    console.log(data);

    const name = document.querySelector("#userName");
    const image = document.querySelector("#picture");
    const followers = document.querySelector("#numberFollow");
    const following = document.querySelector("#numberFollowing");
    const repository = document.querySelector("#numberRepository");
    const company = document.querySelector("#company");
    const city = document.querySelector("#location");

    name.textContent = data.name;
    image.setAttribute("src", data.avatar_url);
    followers.innerText = data.followers;
    following.innerText = data.following;
    repository.innerText = data.public_repos;
    company.innerText = data.company;
    city.innerText = data.location;
  };

  //mandando requisição para o servidor
  request.send();
}

requestUserRepo("Artspessoto");

function changeColor() {
  const border = document.querySelector('#borderCard');
  document.addEventListener("click", ()=>{
    border.style.border = `15px solid ${randomColor()}`;

  });
}

function randomColor(){
  //cor em hexadecimal
  return `#` + Math.floor(Math.random() * 1000).toString(16);
}


// Exemplo com array de cores pré-definidas
// setInterval(function(){
//   //definindo array de cores
//   let colors = ['blue', 'green', 'red'];

//   const border = document.querySelector('#borderCard');

//   let random = Math.floor(Math.random() * colors.length);

//   border.style.border = `15px solid ${colors[random]}`; 
// })
