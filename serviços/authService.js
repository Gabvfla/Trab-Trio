// authService.js - Serviço de Autenticação
// Responsável por gerenciar login e autenticação dos usuários.
class AuthService {
    constructor() {
        // Lista de usuários cadastrados (simulação de banco de dados)
        this.users = [{ username: "admin", password: "1234" }];
    }

    // Método para autenticar um usuário com username e senha
    login(username, password) {
        const user = this.users.find(u => u.username === username && u.password === password);
        if (user) {
            console.log(`✅ Usuário ${username} autenticado com sucesso.`);
            return true;
        }
        console.log("❌ Falha na autenticação.");
        return false;
    }
}

module.exports = AuthService;
