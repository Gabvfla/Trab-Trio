// authService.js - Serviço de Autenticação
class AuthService {
    constructor() {
        // Lista de usuários cadastrados (simulação de banco de dados)
        this.users = [{ username: "admin", password: "1234" }];
    }

    // Método para autenticar um usuário com username e senha
    login(username, password) {
        if (!username || !password) {
            console.log("❌ Username e senha são obrigatórios.");
            return false;
        }

        const user = this.users.find(u => u.username === username && u.password === password);
        if (user) {
            console.log(`✅ Usuário ${username} autenticado com sucesso.`);
            return true;
        }
        console.log("❌ Falha na autenticação: usuário ou senha incorretos.");
        return false;
    }
}

module.exports = AuthService;