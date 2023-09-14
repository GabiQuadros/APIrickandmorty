function allSearch() {
  const retorno = document.getElementById("allResult");
  try {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      const result = response.data.results;
      console.log("souche");
      console.log(result);

      for (i in result) {
        const col = document.createElement("col");
        col.setAttribute("class", "col  colDefault");

        const img = document.createElement("img");
        img.setAttribute("alt", `${result[i].name}`);
        img.setAttribute("class", "imag");
        img.setAttribute("width", "150px");
        img.setAttribute("height", "200px");
        img.setAttribute("src", `${result[i].image}`);

        const name = document.createElement("p");
        name.innerHTML += `<button  class="button-card"  type="button"  onclick="searchToButtonCard('${result[i].name}')">
        ${result[i].name}  ${result[i].id}
              </button>`;

        const status = document.createElement("p");
        status.setAttribute("class", "staus");
        status.innerHTML += `${result[i].status}`;

        col.appendChild(img);
        col.appendChild(name);
        col.appendChild(status);

        retorno.appendChild(col);
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
  const title = document.getElementById("heder-title");
  const all = document.getElementById("allResult");
  const busca = document.getElementById("buscador");
  const retorno = document.getElementById("result");

  try {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${busca.value}`)
      .then((response) => {
        const result = response.data.results;
        all.style.display = "none";
        title.textContent = `${result[0].name}`;
        console.log("souche");
        console.log(result);

        for (i in result) {
          const col = document.createElement("col");
          col.setAttribute("class", "colDefault");

          const img = document.createElement("img");
          img.setAttribute("alt", `${result[i].name}`);
          img.setAttribute("class", "imag");
          img.setAttribute("width", "150px");
          img.setAttribute("height", "200px");
          img.setAttribute("src", `${result[i].image}`);

          const name = document.createElement("p");
          name.setAttribute("class", "staus");
          name.innerHTML += `${result[i].name}  ${result[i].id}`;

          const status = document.createElement("p");
          status.setAttribute("class", "staus");
          status.innerHTML += `${result[i].status}`;

          col.appendChild(img);
          col.appendChild(name);
          col.appendChild(status);

          retorno.appendChild(col);
        }
      });
  } catch (e) {
    const element = document.createElement("p");
    element.innerText = `Dados não encontrados ${e}`;
    retorno.appendChild(element);
  }
}

function searchToButtonCard(params) {
  const title = document.getElementById("heder-title");
  const all = document.getElementById("allResult");
  const retorno = document.getElementById("result");
  try {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${params}`)
      .then((response) => {
        const result = response.data.results;
        all.style.display = "none";
        title.textContent = `${result[0].name}`;
        console.log("souche");
        console.log(result);

        for (i in result) {
          const col = document.createElement("col");
          col.setAttribute("class", "colDefault");

          const img = document.createElement("img");
          img.setAttribute("alt", `${result[i].name}`);
          img.setAttribute("class", "imag");
          img.setAttribute("width", "150px");
          img.setAttribute("height", "200px");
          img.setAttribute("src", `${result[i].image}`);

          const name = document.createElement("p");
          name.setAttribute("class", "staus");
          name.innerHTML += `${result[i].name}  ${result[i].id}`;

          const status = document.createElement("p");
          status.setAttribute("class", "staus");
          status.innerHTML += `${result[i].status}`;

          col.appendChild(img);
          col.appendChild(name);
          col.appendChild(status);

          retorno.appendChild(col);
        }
      });
  } catch (error) {
    const element = document.createElement("p");
    element.innerText = `Dados não encontrados ${e}`;
    retorno.appendChild(element);
  }
}
