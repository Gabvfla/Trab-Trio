# 📂 Simulação de Arquitetura de Microsserviços

Nesse projeto, fizemos um pequeno sistema que simula um sistema que gerencia pedidos, contando com serviços de login e de pagamento e criando os pedidos para o usuário!

## Estrutura do sistema

### 👤 Autenticação (authService.js)

No arquivo de autenticação temos: 
- Uma lista para simular um banco de dados com cada usuário com cadastro no serviço
- Um método para realizar o login dos usuários

### 📦 Catálogo de Produtos (productService.js)

No arquivo de catálogo de produtos temos:
- Uma lista dos produtos em estoque, com seu nome, ID, preço e quantidade disponível
- Um método para checar o estoque de um produto pelo seu ID

### 📥 Pedidos (orderService.js)

No arquivo para os pedidos temos:
- Uma lista dos pedidos já registrados
- Um método para criar um pedido para o usuário, verificando seus dados e se o produto está em estoque, e enfim calculando o total da compra

### 💳 Pagamento (paymentService.js)

No arquivo para o pagamento temos:
- Um método para processar o pagamento de um pedido que simula uma chance de 80% de sucesso da compra, considerando que em casos reais podem haver problemas com o tipo de pagamento ou cartão de quem compra

## 🤔 Exemplificando um fluxo do usuário...

- Usuário faz login com seu username e senha
- O usuário verifica a lista de itens disponíveis e seleciona os que deseja comprar
- O sistema checa se os itens estão disponíveis
- Após verificação, o sistema cria o pedido do usuário e calcula o seu total a ser pago
- O usuário realiza o pagamento, e o sistema processa a compra! ✅

<hr>

Esse projeto foi feito para a matéria de Arquitetura de Software pelos alunos:
- Celso Lopes
- Gabriel Victor Tavares
- Leila Minello

Obrigada por visitar nosso projeto !! 😄👨‍💻
