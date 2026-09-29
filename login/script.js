const tema = document.querySelector('#tema');

const iconeUsuario = document.querySelector('#icone_usuario');
const iconeSenha = document.querySelector('#icone_senha');
const logo = document.querySelector('#logo');
const bannerLogin = document.querySelector('#banner_login');


// TEMA

tema.addEventListener('click', () => {

    document.body.classList.toggle('claro');

    if (document.body.classList.contains('claro')) {

        // MODO CLARO
        tema.textContent = '☀️';

        iconeUsuario.src = './assetslogin/usuario_light.png';
        iconeSenha.src = './assetslogin/senha_light.png';
        logo.src = './assetslogin/logo preta.png';
        bannerLogin.src = './assetslogin/banner_login off.png';

    } else {

        // MODO ESCURO
        tema.textContent = '🌙';

        iconeUsuario.src = './assetslogin/usuario_dark.png';
        iconeSenha.src = './assetslogin/senha_dark.png';
        logo.src = './assetslogin/logo branca.png';
        bannerLogin.src = './assetslogin/banner_login on.png';

    }

});


// MOSTRAR / OCULTAR SENHA

const senha = document.querySelector('#senha');

iconeSenha.addEventListener('click', () => {

    if (senha.type === 'password') {
        senha.type = 'text';
    } else {
        senha.type = 'password';
    }

});


// LEMBRAR USUÁRIO

const usuario = document.querySelector('#usuario');
const lembrar = document.querySelector('#lembrar');

const usuarioSalvo = localStorage.getItem('usuario');

if (usuarioSalvo) {
    usuario.value = usuarioSalvo;
    lembrar.checked = true;
}


// BOTÃO ENTRAR

const botao = document.querySelector('.entrar');

botao.addEventListener('click', () => {

    const usuarioDigitado = usuario.value.trim();
    const senhaDigitada = senha.value.trim();

    // Verifica se os campos estão preenchidos
    if (usuarioDigitado === '' || senhaDigitada === '') {
        alert('Preencha o usuário e a senha.');
        return;
    }

    // Login de teste
    if (usuarioDigitado === 'admin' && senhaDigitada === '1234') {

        // Lembrar usuário
        if (lembrar.checked) {
            localStorage.setItem('usuario', usuarioDigitado);
        } else {
            localStorage.removeItem('usuario');
        }

        window.location.href = 'você é feio';

    } else {

        alert('Usuário ou senha incorretos.');

    }

});


// ANIMAÇÃO DO BOTÃO

botao.addEventListener('mouseenter', () => {
    botao.classList.add('active');
});

botao.addEventListener('mouseleave', () => {
    botao.classList.remove('active');
});