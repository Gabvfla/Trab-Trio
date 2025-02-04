// authService.js - classe para serviço de autenticação
class AuthService {

    constructor() {
        //lista dos usuários cadastrados (simulação de banco de dados)
        this.users = [{ username: "admin", password: "1234" }];
    }

    //método para autenticar um usuário com seu username e senha
    login(username, password) {
        if (!username || !password) {
            console.log("❌ Username e senha são obrigatórios.");
            return false; //falso para caso haja dados faltantes
        }

        //verificando os dados para o login do usuário
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