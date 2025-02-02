// paymentService.js - Serviço de Pagamentos
class PaymentService {
    // Método para processar pagamento de um pedido
    processPayment(order, paymentMethod) {
        if (!order || !paymentMethod) {
            console.log("❌ Dados inválidos para processar o pagamento.");
            return false;
        }

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