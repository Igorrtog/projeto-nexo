let pergunta_inicio;
let pergunta_cadastro_nome;
let pergunta_cadastro_senha;
let pergunta_cadastro_email;

let pergunta_login_email;
let pergunta_login_senha;

do {
    console.log('Estamos em fase de teste.');
    pergunta_inicio = prompt(`1- Cadastrar
2- Entrar
3- Sair`);
    
    if (pergunta_inicio == 1) {
        console.log('Iniciando cadastro...');
        pergunta_cadastro_nome = prompt(`Digite seu nome: `);
        pergunta_cadastro_senha = prompt(`Crie uma senha: `);
        pergunta_cadastro_email = prompt(`Digite seu email: `);
    }

    else if (pergunta_inicio == 2) {
        console.log('Iniciando login...');
        pergunta_login_email = prompt(`Digite seu email: `);
        pergunta_login_senha = prompt(`Digite sua senha: `);
    }

} while (pergunta_inicio != 3);