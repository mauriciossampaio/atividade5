const express = require('express');
const app = express();

let estoque = [];

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    const produto = { id, nome, quantidade: parseInt(qtd) };
    estoque.push(produto);
    res.send(`Produto ${nome} adicionado ao estoque.`);
});

app.get('/listar', (req, res) => {
    res.json(estoque);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    estoque = estoque.filter(produto => produto.id !== id);
    res.send(`Produto com ID ${id} removido do estoque.`);
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    estoque.forEach(produto => {
        if (produto.id === id) {
            produto.quantidade = parseInt(qtd);
        }
    });
    res.send(`Quantidade do produto com ID ${id} atualizada.`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
