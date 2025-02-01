
// paymentService.js - Serviço de Pagamentos
// Responsável por processar pagamentos e alterar o status dos pedidos.
class PaymentService {
    // Método para processar pagamento de um pedido
    processPayment(order, paymentMethod) {
        // Simulação de sucesso no pagamento (80% de chance de sucesso)
        if (paymentMethod === "cartao" && Math.random() > 0.2) {
            order.status = "pago";
            console.log(`✅ Pedido ${order.id} pago com sucesso!`);
            return true;
        }
        console.log(`❌ Falha no pagamento do pedido ${order.id}.`);
        return false;
    }
}

module.exports = PaymentService;