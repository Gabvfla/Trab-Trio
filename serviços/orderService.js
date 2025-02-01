
// orderService.js - Serviço de Pedidos
// Responsável por criar e gerenciar pedidos.
class OrderService {
    constructor() {
        this.orders = [];
    }

    // Cria um pedido associado a um usuário e calcula o total da compra
    createOrder(username, items, productService) {
        // Verifica se os produtos possuem estoque suficiente
        for (const item of items) {
            if (!productService.checkStock(item.id, 1)) {
                console.log(`❌ Estoque insuficiente para ${item.name}.`);
                return null;
            }
        }

        // Calcula o total do pedido
        const total = items.reduce((sum, item) => sum + item.price, 0);
        const order = { id: this.orders.length + 1, username, items, total, status: "pendente" };
        this.orders.push(order);
        console.log(`✅ Pedido ${order.id} criado para ${username}. Total: R$${total}`);
        return order;
    }
}

module.exports = OrderService;