// main.js - Simulação do sistema
const AuthService = require("./services/authService");
const ProductService = require("./services/productService");
const OrderService = require("./services/orderService");
const PaymentService = require("./services/paymentService");

// Instancia os serviços
const authService = new AuthService();
const productService = new ProductService();
const orderService = new OrderService();
const paymentService = new PaymentService();

// Simulação de um usuário realizando login e comprando produtos
const username = "admin";
const password = "1234";

if (authService.login(username, password)) {
    console.log("📦 Produtos disponíveis:", productService.getProducts());
    
    // Seleção de produtos para o pedido
    const selectedItems = [productService.getProducts()[0]];
    
    // Criação do pedido verificando estoque
    const order = orderService.createOrder(username, selectedItems, productService);
    
    // Se o pedido foi criado com sucesso, processa o pagamento
    if (order) {
        paymentService.processPayment(order, "cartao");
    }
}

/*
grupo do projeto:
- Celso Lopes
- Gabriel Victor Tavares
- Leila Minello Silva
*/