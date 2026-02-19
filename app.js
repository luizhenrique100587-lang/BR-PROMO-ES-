const app = {
    password: "123456", // MUDE ISSO
    produtos: JSON.parse(localStorage.getItem("produtos")) || [],
    cart: []
};

function save() {
    localStorage.setItem("produtos", JSON.stringify(app.produtos));
}

function render() {
    const container = document.getElementById("products");
    container.innerHTML = "";

    app.produtos.forEach((p, i) => {
        container.innerHTML += `
        <div class="card">
            <img src="${p.img}">
            <h3>${p.nome}</h3>
            <p>${p.desc}</p>
            <p><b>R$ ${p.preco}</b></p>
            <button onclick="addCart(${i})">Adicionar</button>
        </div>`;
    });
}

function addProduto() {
    const produto = {
        nome: nome.value,
        desc: desc.value,
        preco: preco.value,
        img: img.value,
        link: link.value
    };

    app.produtos.push(produto);
    save();
    render();
    alert("Produto adicionado!");
}

function addCart(i) {
    app.cart.push(app.produtos[i]);
    document.getElementById("cartCount").innerText = app.cart.length;
}

function finalizarCompra() {
    if(app.cart.length === 0) return alert("Carrinho vazio!");

    let msg = "Olá, quero comprar:%0A";
    app.cart.forEach(p=>{
        msg += `- ${p.nome} R$${p.preco}%0A`;
    });

    window.open(`https://wa.me/+55 91 8539-2756?text=${msg}`);
}

function openAdmin() {
    document.getElementById("adminPanel").style.display="flex";
}

function loginAdmin() {
    if(adminPassword.value === app.password){
        document.getElementById("adminContent").style.display="block";
    } else {
        alert("Senha incorreta");
    }
}

render();