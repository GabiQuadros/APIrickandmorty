let data = [];
let perPage = 5;
let page = 1;

function card() {
  const retorno = document.getElementById("result");
  const pageCurrent = document.getElementById("page-number");
  retorno.innerHTML = "";
  pageCurrent.innerHTML = "";
  pageCurrent.innerHTML = JSON.stringify(page);

  let pagea = page - 1;
  let start = pagea * perPage;
  let end = start + perPage;

  const paginatedIten = data.slice(start, end);

  for (i in paginatedIten) {
    const col = document.createElement("col");
    col.setAttribute("class", "col  colDefault");

    const img = document.createElement("img");
    img.setAttribute("alt", `${paginatedIten[i].name}`);
    img.setAttribute("class", "imag");
    img.setAttribute("width", "150px");
    img.setAttribute("height", "200px");
    img.setAttribute("src", `${paginatedIten[i].image}`);

    const name = document.createElement("p");
    name.innerHTML += `<button  class="button-card"  type="button"  onclick="search('${paginatedIten[i].name}')">
    ${paginatedIten[i].name}  ${paginatedIten[i].id}
          </button>`;

    const status = document.createElement("p");
    status.setAttribute("class", "staus");
    status.innerHTML += `${paginatedIten[i].status}`;

    col.appendChild(img);
    col.appendChild(name);
    col.appendChild(status);

    retorno.appendChild(col);
  }
}

function allSearch() {
  const retorno = document.getElementById("result");
  try {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      const result = response.data.results;
      data = result;
      card();
    });
  } catch (error) {
    const element = document.createElement("p");
    element.innerText = `Dados não encontrados ${e}`;
    retorno.appendChild(element);
  }
}

allSearch();

function search(params) {
  const title = document.getElementById("heder-title");
  const busca = document.getElementById("buscador");
  const butonnavgate = document.getElementById("toNavegar");
  const retorno = document.getElementById("result");

  if (!params && !busca.value) {
    alert("Digite o nome de um personagem!");
    return;
  }

  page = 1;

  if (params) {
    try {
      axios
        .get(`https://rickandmortyapi.com/api/character/?name=${params}`)
        .then((response) => {
          const result = response.data.results;
          data = result;
          butonnavgate.style.display = "inline";
          title.textContent = `${result[0].name}`;

          card();
        });
    } catch (error) {
      const element = document.createElement("p");
      element.innerText = `Dados não encontrados ${e}`;
      retorno.appendChild(element);
    }
  } else {
    try {
      axios
        .get(`https://rickandmortyapi.com/api/character/?name=${busca.value}`)
        .then((response) => {
          const result = response.data.results;
          data = result;
          butonnavgate.style.display = "inline";
          title.textContent = `${result[0].name}`;

          card();
        });
    } catch (e) {
      const element = document.createElement("p");
      element.innerText = `Dados não encontrados ${e}`;
      retorno.appendChild(element);
    }
  }
}

function next() {
  page++;

  let totalPage = Math.ceil(data.length / perPage);

  if (page > totalPage) {
    page--;
  }
  card();
}

function prev() {
  page--;
  if (page < 1) {
    page++;
  }
  card();
}

function reloader() {
  window.location.reload();
}
