class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Thiago";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 112223331

cliente2.nome = "Thais";
cliente2.cpf = 11122244409;
cliente2.agencia = 1001;
cliente2.saldo = 0;
cliente2.rg = 112224442;

console.log(cliente1, cliente2);
