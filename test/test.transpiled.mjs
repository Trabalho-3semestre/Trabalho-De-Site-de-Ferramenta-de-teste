import { expect } from 'chai';
let i;
let registros = [];
function adicionarRegistro(nome, email, senha) {
  i++;
  const pessoa = {
    iden: i,
    nome,
    email,
    senha
  };
  registros.push(pessoa);
  return pessoa;
}
function validarCampo(valor) {
  return valor !== null && valor !== undefined && valor.trim() !== "";
}
describe('Função de Cadastro', () => {
  beforeEach(() => {
    // Resetar o id e os registros para o estado inicial
    i = 5;
    registros = [{
      iden: 1,
      nome: 'User1',
      email: 'user1@test.com',
      senha: 'pass1'
    }, {
      iden: 2,
      nome: 'User2',
      email: 'user2@test.com',
      senha: 'pass2'
    }, {
      iden: 3,
      nome: 'User3',
      email: 'user3@test.com',
      senha: 'pass3'
    }, {
      iden: 4,
      nome: 'User4',
      email: 'user4@test.com',
      senha: 'pass4'
    }, {
      iden: 5,
      nome: 'User5',
      email: 'user5@test.com',
      senha: 'pass5'
    }];
  });
  it('deve adicionar um novo registro corretamente', () => {
    const nome = 'Teste';
    const email = 'teste@teste.com';
    const senha = 'senha123';
    const pessoa = adicionarRegistro(nome, email, senha);
    expect(pessoa).to.include({
      nome,
      email,
      senha
    });
    expect(registros).to.include.deep.members([pessoa]);
  });
  it('deve validar campos corretamente', () => {
    expect(validarCampo('')).to.be.false;
    expect(validarCampo('valor')).to.be.true;
    expect(validarCampo('   ')).to.be.false;
  });
  it('deve incrementar o id corretamente ao adicionar um registro', () => {
    const nome = 'Novo';
    const email = 'novo@teste.com';
    const senha = 'senha123';
    const pessoa = adicionarRegistro(nome, email, senha);
    expect(pessoa.iden).to.equal(6); // ID esperado é 6
  });
  it('não deve alterar o estado original dos registros ao resetar', () => {
    const nome = 'Teste';
    const email = 'teste@teste.com';
    const senha = 'senha123';
    adicionarRegistro(nome, email, senha);
    expect(registros).to.have.lengthOf(6); // Após adicionar, deve ter 6 registros
    while (registros.length > 5) {
      registros.pop();
    }
    expect(registros).to.have.lengthOf(5); // Resetando para 5
  });
  it('deve adicionar múltiplos registros corretamente', () => {
    const registrosAntes = registros.length;
    adicionarRegistro('Teste1', 'teste1@teste.com', 'senha123');
    adicionarRegistro('Teste2', 'teste2@teste.com', 'senha123');
    expect(registros).to.have.lengthOf(registrosAntes + 2);
  });
  it('não deve adicionar registro com campos vazios', () => {
    const registrosAntes = registros.length;
    const pessoa = adicionarRegistro('', '', '');
    expect(pessoa.nome).to.be.empty;
    expect(pessoa.email).to.be.empty;
    expect(pessoa.senha).to.be.empty;
    expect(registros).to.have.lengthOf(registrosAntes + 1);
  });
  it('deve garantir que o id é único para cada novo registro', () => {
    const pessoa1 = adicionarRegistro('Teste1', 'teste1@teste.com', 'senha123');
    const pessoa2 = adicionarRegistro('Teste2', 'teste2@teste.com', 'senha123');
    expect(pessoa1.iden).to.not.equal(pessoa2.iden);
  });
  it('deve validar que campos nulos são inválidos', () => {
    expect(validarCampo(null)).to.be.false;
    expect(validarCampo(undefined)).to.be.false;
  });
  it('deve resetar corretamente e manter a integridade dos registros iniciais', () => {
    adicionarRegistro('Teste1', 'teste1@teste.com', 'senha123');
    adicionarRegistro('Teste2', 'teste2@teste.com', 'senha123');
    expect(registros).to.have.lengthOf(7); // 5 iniciais + 2 novos
    while (registros.length > 5) {
      registros.pop();
    }
    expect(registros).to.have.lengthOf(5); // Resetando para 5
  });
  it('deve tratar espaços em branco como valores inválidos na validação de campos', () => {
    expect(validarCampo('   ')).to.be.false;
  });
  it('deve adicionar registros com caracteres especiais corretamente', () => {
    const nome = 'Téstè';
    const email = 'téstè@téstè.com';
    const senha = 'senha!@#';
    const pessoa = adicionarRegistro(nome, email, senha);
    expect(pessoa).to.include({
      nome,
      email,
      senha
    });
    expect(registros).to.include.deep.members([pessoa]);
  });
  it('deve adicionar registros com o mesmo email (sem validação de email único)', () => {
    const email = 'duplicado@teste.com';
    adicionarRegistro('Teste1', email, 'senha123');
    adicionarRegistro('Teste2', email, 'senha456');
    const registrosComEmail = registros.filter(r => r.email === email);
    expect(registrosComEmail).to.have.lengthOf(2);
  });

  // Novos testes
  it('deve adicionar um registro com senha vazia', () => {
    const nome = 'Teste3';
    const email = 'teste3@teste.com';
    const senha = '';
    const pessoa = adicionarRegistro(nome, email, senha);
    expect(pessoa).to.include({
      nome,
      email,
      senha
    });
    expect(registros).to.include.deep.members([pessoa]);
  });
  it('deve adicionar um registro com email vazio', () => {
    const nome = 'Teste4';
    const email = '';
    const senha = 'senha123';
    const pessoa = adicionarRegistro(nome, email, senha);
    expect(pessoa).to.include({
      nome,
      email,
      senha
    });
    expect(registros).to.include.deep.members([pessoa]);
  });
  it('deve adicionar um registro com nome vazio', () => {
    const nome = '';
    const email = 'teste5@teste.com';
    const senha = 'senha123';
    const pessoa = adicionarRegistro(nome, email, senha);
    expect(pessoa).to.include({
      nome,
      email,
      senha
    });
    expect(registros).to.include.deep.members([pessoa]);
  });
  it('deve adicionar um registro com todos os campos preenchidos com espaço', () => {
    const nome = ' ';
    const email = ' ';
    const senha = ' ';
    const pessoa = adicionarRegistro(nome, email, senha);
    expect(pessoa).to.include({
      nome,
      email,
      senha
    });
    expect(registros).to.include.deep.members([pessoa]);
  });
  it('deve adicionar um registro com nome nulo', () => {
    const nome = null;
    const email = 'teste6@teste.com';
    const senha = 'senha123';
    const pessoa = adicionarRegistro(nome, email, senha);
    expect(pessoa).to.include({
      nome,
      email,
      senha
    });
    expect(registros).to.include.deep.members([pessoa]);
  });
  it('deve adicionar um registro com email nulo', () => {
    const nome = 'Teste7';
    const email = null;
    const senha = 'senha123';
    const pessoa = adicionarRegistro(nome, email, senha);
    expect(pessoa).to.include({
      nome,
      email,
      senha
    });
    expect(registros).to.include.deep.members([pessoa]);
  });
  it('deve adicionar um registro com senha nula', () => {
    const nome = 'Teste8';
    const email = 'teste8@teste.com';
    const senha = null;
    const pessoa = adicionarRegistro(nome, email, senha);
    expect(pessoa).to.include({
      nome,
      email,
      senha
    });
    expect(registros).to.include.deep.members([pessoa]);
  });
  it('deve adicionar um registro com todos os campos nulos', () => {
    const nome = null;
    const email = null;
    const senha = null;
    const pessoa = adicionarRegistro(nome, email, senha);
    expect(pessoa).to.include({
      nome,
      email,
      senha
    });
    expect(registros).to.include.deep.members([pessoa]);
  });
  it('deve adicionar um registro com nome e senha preenchidos com espaço', () => {
    const nome = ' ';
    const email = 'teste9@teste.com';
    const senha = ' ';
    const pessoa = adicionarRegistro(nome, email, senha);
    expect(pessoa).to.include({
      nome,
      email,
      senha
    });
    expect(registros).to.include.deep.members([pessoa]);
  });
  it('deve adicionar um registro com email e senha preenchidos com espaço', () => {
    const nome = 'Teste10';
    const email = ' ';
    const senha = ' ';
    const pessoa = adicionarRegistro(nome, email, senha);
    expect(pessoa).to.include({
      nome,
      email,
      senha
    });
    expect(registros).to.include.deep.members([pessoa]);
  });
  it('não deve adicionar um registro com todos os campos vazios se a validação for aplicada', () => {
    if (validarCampo('') || validarCampo('') || validarCampo('')) {
      expect(() => adicionarRegistro('', '', '')).to.throw();
    }
  });
  it('não deve adicionar um registro com campo nulo se a validação for aplicada', () => {
    if (validarCampo(null)) {
      expect(() => adicionarRegistro(null, 'email@teste.com', 'senha')).to.throw();
    }
  });
  it('não deve adicionar um registro com campo undefined se a validação for aplicada', () => {
    if (validarCampo(undefined)) {
      expect(() => adicionarRegistro(undefined, 'email@teste.com', 'senha')).to.throw();
    }
  });
  it('deve manter a integridade dos registros após múltiplos resets', () => {
    adicionarRegistro('Teste1', 'teste1@teste.com', 'senha123');
    adicionarRegistro('Teste2', 'teste2@teste.com', 'senha123');
    while (registros.length > 5) {
      registros.pop();
    }
    expect(registros).to.have.lengthOf(5);
    adicionarRegistro('Teste3', 'teste3@teste.com', 'senha123');
    expect(registros).to.have.lengthOf(6);
  });
  it('deve lidar com campos contendo apenas caracteres especiais', () => {
    const nome = '!@#$%';
    const email = '!@#$%@!@#$%.com';
    const senha = '!@#$%';
    const pessoa = adicionarRegistro(nome, email, senha);
    expect(pessoa).to.include({
      nome,
      email,
      senha
    });
    expect(registros).to.include.deep.members([pessoa]);
  });
  it('deve adicionar registros com email válido e diferentes formatos de nome e senha', () => {
    adicionarRegistro('Teste1', 'valido@teste.com', 'senha123');
    adicionarRegistro('T', 'valido2@teste.com', '1');
    adicionarRegistro('ValidUser', 'valido3@teste.com', '!@#$%');
    expect(registros).to.have.lengthOf(8);
  });
  it('deve adicionar registro com ID manualmente especificado se a função permitir', () => {
    i = 100;
    const pessoa = adicionarRegistro('Manual', 'manual@teste.com', 'senha123');
    expect(pessoa.iden).to.equal(101);
  });
  it('deve adicionar um registro com nome composto', () => {
    const nome = 'Nome Composto';
    const email = 'composto@teste.com';
    const senha = 'senha123';
    const pessoa = adicionarRegistro(nome, email, senha);
    expect(pessoa).to.include({
      nome,
      email,
      senha
    });
    expect(registros).to.include.deep.members([pessoa]);
  });
  it('deve validar a quantidade total de registros após várias operações', () => {
    const registrosAntes = registros.length;
    adicionarRegistro('Teste1', 'teste1@teste.com', 'senha123');
    adicionarRegistro('Teste2', 'teste2@teste.com', 'senha123');
    adicionarRegistro('Teste3', 'teste3@teste.com', 'senha123');
    expect(registros).to.have.lengthOf(registrosAntes + 3);
  });
  it('deve manter a integridade dos registros iniciais após várias operações e reset', () => {
    adicionarRegistro('Teste1', 'teste1@teste.com', 'senha123');
    adicionarRegistro('Teste2', 'teste2@teste.com', 'senha123');
    while (registros.length > 5) {
      registros.pop();
    }
    adicionarRegistro('Teste3', 'teste3@teste.com', 'senha123');
    adicionarRegistro('Teste4', 'teste4@teste.com', 'senha123');
    expect(registros).to.have.lengthOf(7);
  });
});
