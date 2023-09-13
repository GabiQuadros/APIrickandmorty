function allSearch() {
  const retorno = document.getElementById("allResult");
  try {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      const result = response.data.results;
      console.log("souche");
      console.log(result);

      for (i in result) {
        const div = document.createElement("div");

        const element = document.createElement("img");
        element.setAttribute("alt", `${result[i].name}`);
        element.setAttribute("class", "imag");
        element.setAttribute("width", "150px");
        element.setAttribute("height", "200px");
        element.setAttribute("src", `${result[i].image}`);

        const name = document.createElement("p");
        name.innerHTML += `${result[i].name}`;

        div.appendChild(element);
        div.appendChild(name);

        retorno.appendChild(div);
      }
    });
  } catch (error) {
    const element = document.createElement("p");
    element.innerText = `Dados não encontrados ${e}`;
    retorno.appendChild(element);
  }
}

allSearch();

function search() {
  const all = document.getElementById("allResult");
  const busca = document.getElementById("search");
  const retorno = document.getElementById("result");
  try {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${busca.value}`)
      .then((response) => {
        const result = response.data.results;
        all.style.display = "none";
        console.log("souche");
        console.log(result);

        for (i in result) {
          const div = document.createElement("div");

          const element = document.createElement("img");
          element.setAttribute("alt", `${result[i].name}`);
          element.setAttribute("class", "imag");
          element.setAttribute("width", "150px");
          element.setAttribute("height", "200px");
          element.setAttribute("src", `${result[i].image}`);

          const name = document.createElement("p");
          name.innerHTML += `${result[i].name}  ${result[i].id}`;

          const status = document.createElement("p");
          status.innerHTML += `${result[i].status}`;

          div.appendChild(element);
          div.appendChild(name);
          div.appendChild(status);

          retorno.appendChild(div);
        }
      });
  } catch (e) {
    const element = document.createElement("p");
    element.innerText = `Dados não encontrados ${e}`;
    retorno.appendChild(element);
  }
}

// a desenvolver procurar  clicando no nome da foro
function searchToButton(params) {
  const retorno = document.getElementById("result");
  try {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${params.value}`)
      .then((response) => {
        const result = response.data.results;
        console.log("souche");
        console.log(result);

        for (i in result) {
          const element = document.createElement("p");
          element.innerHTML = JSON.stringify(result[i].status);
          console.log(element);
          retorno.appendChild(element);
        }
      });
  } catch (e) {
    const element = document.createElement("p");
    element.innerText = `Dados não encontrados ${e}`;
    retorno.appendChild(element);
  }
}

// apenas função teste
// function teste(params) {
//   const retorno = document.getElementById("allResult");
//   const element = document.createElement("img");
//   element.setAttribute("alt", `${params}`);
//   element.setAttribute("class", "imag");
//   element.setAttribute("width", "150px");
//   element.setAttribute("height", "200px");
//   element.setAttribute(
//     "src",
//     `https://rickandmortyapi.com/api/character/avatar/1.jpeg`
//   );
//   retorno.appendChild(element);
// }
// teste("oiiii");

//https://rickandmortyapi.com/api/character/?name=rick&status=alive
//  ALL  https://rickandmortyapi.com/api/character
