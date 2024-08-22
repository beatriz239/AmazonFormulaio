function enviarFormulario() {

    //Obter valores das variaveis
    var contaCliente = new Object();

contaCliente.nome = document.getElementById('nome').value;
contaCliente.numero = document.getElementById('numero').value;
contaCliente.email = document.getElementById('email').value;
contaCliente.senha = document.getElementById('senha').value;
contaCliente.senha2 = document.getElementById('senha2').value;
contaCliente.estado = document.getElementById('estado').value;
contaCliente.cidade = document.getElementById('cidade').value;
contaCliente.cep = document.getElementById('cep').value;


//verificação das senhas
if (contaCliente.senha !== contaCliente.senha2) {
    alert("As senhas não coincidem.");
    return; // Interrompese as senhas não forem as mesmas
}

    //Converter String para JSON
    var json = JSON.stringify(contaCliente);

    //Imprimir no console
    console.log(json)
    console.log(contaCliente.valueOf())
    alert("Cadastro realizado")
}