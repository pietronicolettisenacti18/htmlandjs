function Salvar() {

    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let csenha = document.getElementById('csenha').value
    let data = document.getElementById('data').value
    let endereco = document.getElementById('endereco').value
    let numero = document.getElementById('numero').value
    let cidade = document.getElementById('cidade').value
    let estado = document.getElementById('estado').value

    let linha = "<tr><td>" + nome + "</tr><td>" + sobrenome + "</tr><td>" + email + "</tr><td>" + senha + "</tr><td>" +
    csenha + "</tr><td>"  + data + "</tr><td>" + endereco + "</tr><td>"  + numero + "</tr><td>" + cidade + "</tr><td>"  + 
    estado + "</tr><td>" ;

    document.getAnimations("table").innerHTML += linha
}