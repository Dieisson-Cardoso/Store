function cadastrarProduto(){
    var nomes = document.getElementById("nomes");
    var tamanhos = document.getElementById("tamanhos");
    var precos = document.getElementById("precos");
    var clubes = document.getElementById("clubes");
    var estoques = document.getElementById("estoques");
    var pagamentos = document.getElementById("pagamentos");
    var codigos = document.getElementById("codigos");
    
    var dados = JSON.parse (localStorage.getItem("dadosproduto"));

    if(dados == null){
        localStorage.setItem("dadosproduto", "[]");
        dados = [];
    }
    var auxRegistro = {
        nome: nomes.value,
        tamanh: tamanhos.value,
        valor: precos.value,
        time: clubes.value,
        est: estoques.value,
        pag: pagamentos.value,
        id: codigos.value,
    }
    dados.push(auxRegistro);
    localStorage.setItem("dadosproduto", JSON.stringify(dados));
    alert("Cadastro salvo com sucesso")
    nomes.value = "";
    tamanhos.value = "";
    precos.value = "";
    clubes.value = "";
    estoques.value = "";
    pagamentos.value = "";
    codigos.value = "";
}

function mostraValores() {
    var valores = localStorage.getItem(chaveProdutos); // pega os valores como string no localstorage
    valores = JSON.parse(valores); // converte a string em array
  
    valores.forEach((valor) => { // para cara registro no array executa o processo abaixo
      const divCard = document.createElement('div'); // cria uma div
      divCard.className = 'card col'; // insere a classe do bootstrap
      divCard.setAttribute('style', 'width: 18rem');
  
      const divCardBody = document.createElement('div');
      divCardBody.className = 'card-body';
  
      const img = document.createElement('img');
      img.setAttribute('src', valor.url);
      img.setAttribute('style', 'max-height: 190px; width: fit-content; align-self: center;'); // seta alguns estilos direto na tag
  
      const h5 = document.createElement('h5');
      h5.className = 'card-title';
      h5.innerHTML = valor.titulo; // adiciona o conteudo entre a abertura e fechamento da tag
  
      const p = document.createElement('p');
      p.className = 'card-text';
      p.innerHTML = valor.descricao;
  
      divCard.appendChild(img); // insere a img dentro da divCard
      divCard.appendChild(divCardBody);
      divCardBody.appendChild(h5);
      divCardBody.appendChild(p);
  
      const grid = document.getElementById('grid');
      grid.appendChild(divCard); // adiciona a divCard dentro do grid
    });
  }
  
  cargaInicial() // carrega valores iniciais no localstorage
  mostraValores() // renderiza os produtos no documento