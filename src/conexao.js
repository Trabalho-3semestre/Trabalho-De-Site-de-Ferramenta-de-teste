const { Client } = require('pg');


const client = new Client({
  user: 'ckpfzhar',
  host: 'silly.db.elephantsql.com',
  database: 'ckpfzhar',
  password: 'ftw_reUruiZzL1UW_ck26O-Wf6TuJ0oC',
  port: 5432, 
});


async function conectarEFechare() {
  try {

    await client.connect();
    console.log('Conectado ao banco de dados');

    await client.end();
    console.log('Conexão fechada');
  } catch (err) {
    console.error(err);
  }
}

conectarEFechare();
