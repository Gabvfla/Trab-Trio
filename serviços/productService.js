// productService.js - classe para serviço de catálogo de produtos
class ProductService {
    constructor() {

        //liista dos produtos disponíveis
        this.products = [
            { id: 1, name: "Produto A", price: 100, stock: 5 }, // id do produto | nome | preço | qt. no estoque
            { id: 2, name: "Produto B", price: 200, stock: 2 }
        ];
    }

    //retorna a lista de produtos disponíveis
    getProducts() {
        return this.products;
    }

    //verifica se há estoque suficiente para um determinado produto
    checkStock(productId, quantity) {
        const product = this.products.find(p => p.id === productId);
        if (!product) {
            console.log(`❌ Produto com ID ${productId} não encontrado.`);
            return false; //falso para caso não houver estoque
        }
        return product.stock >= quantity;
    }
}

module.exports = ProductService;