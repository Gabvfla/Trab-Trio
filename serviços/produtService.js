
// productService.js - Serviço de Catálogo de Produtos
// Responsável por gerenciar os produtos disponíveis no sistema.
class ProductService {
    constructor() {
        // Lista de produtos disponíveis
        this.products = [
            { id: 1, name: "Produto A", price: 100, stock: 5 },
            { id: 2, name: "Produto B", price: 200, stock: 2 }
        ];
    }

    // Retorna a lista de produtos disponíveis
    getProducts() {
        return this.products;
    }

    // Verifica se há estoque suficiente para um determinado produto
    checkStock(productId, quantity) {
        const product = this.products.find(p => p.id === productId);
        return product && product.stock >= quantity;
    }
}

module.exports = ProductService;