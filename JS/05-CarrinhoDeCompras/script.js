const produtos = [
    {
      id: 1,
      nome: "Mouse",
      preco: 49.9,
      descricao: "Mouse super cheio de grandes e poderosos LEDs",
      imagem: "https://images.unsplash.com/photo-1613141411244-0e4ac259d217?q=80&w=1170",
    },
    {
      id: 2,
      nome: "Teclado",
      preco: 159.9,
      descricao: "Teclado mecânico cheio de botões malucos",
      imagem: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?q=80&w=1170",
    },
    {
      id: 3,
      nome: "Monitor",
      preco: 959.9,
      descricao: "Monitor mega blaster gigantosférico",
      imagem: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1142",
    },
  ];
  
  const produtosSelect = document.getElementById("produto");
  
  function carregarProdutos() {
    produtosSelect.innerHTML = "";
  
    produtos.forEach((produto) => {
      const option = document.createElement("option");
      option.value = produto.id;
      option.textContent = produto.nome;
      produtosSelect.appendChild(option);
    });
  }
  
  carregarProdutos();
  