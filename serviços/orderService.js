// orderService.js - classe de serviço de pedidos
class OrderService {

    constructor() {
        this.orders = []; //cria uma lista de pedidos
    }

    //cria um pedido associado a um usuário e calcula o total da compra
    createOrder(username, items, productService) {
        if (!username || !items || items.length === 0) {
            console.log("❌ Dados inválidos para criar o pedido.");
            return null; //falso para caso os dados do username ou dos itens estejam faltando ou incorretos
        }

        //verifica se os produtos possuem estoque suficiente
        for (const item of items) {
            if (!productService.checkStock(item.id, 1)) {
                console.log(`❌ Estoque insuficiente para ${item.name}.`);
                return null; //falso para caso não haja estoque do item
            }
        }

        //calculando o total do pedido
        const total = items.reduce((sum, item) => sum + item.price, 0);
        const order = { id: this.orders.length + 1, username, items, total, status: "pendente" };
        this.orders.push(order);

        //retorna o pedido para o usuário
        console.log(`✅ Pedido ${order.id} criado para ${username}. Total: R$${total}`);
        return order;
    }
}

module.exports = OrderService;