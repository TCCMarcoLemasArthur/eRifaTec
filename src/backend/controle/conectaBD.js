const { Pool } = require('pg');
//Pool é a classe dentro do pacote 'pg' que representa o pool de conexão com o Bd


const config = {
    user: 'postgres',
    password: '2019setembro*',
    host: '127.0.0.1',
    port: 5432,
    database: 'eRifaTecTeste'
};



const pool = new Pool(config);

async function validarConexao() {
    try {
        // Obtém uma conexão do pool
        const client = await pool.connect();

        console.log('Conexão estabelecida com sucesso!');

        // Realize qualquer operação adicional aqui, se necessário

        // Insere dados em uma tabela
        const idUsuario1 = 1;
        const nomeUsuario1 = "Marco Antônio";
        const cpfUsuario1 = "10020030040";
        const emailUsuario1 = "maarcoantoniomasson@gmail.com";
        const senhaUsuario1 = "239*";
        const dataNascUsuario1 = "23/01/2006";
        const cep1 = "15706402";
        const cidade1 = "Jales";
        const rua1 = "11";
        const estado1 = "São Paulo";
        const bairro1 = "Jardim Paulo XI"
        const numero1 = "3401"

        const Usuario1 = 'insert into Usuario values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';
        const values1 = [idUsuario1, nomeUsuario1, cpfUsuario1, emailUsuario1, senhaUsuario1, dataNascUsuario1,
            cep1, cidade1, rua1, estado1, bairro1, numero1];
        await client.query(Usuario1, values1);

        console.log('Dados inseridos com sucesso!');

        // Libera a conexão do pool
        client.release();

        // Encerra a conexão do pool
        await pool.end();
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
}

validarConexao();

/*var connection = new ActiveXObject("ADODB.Connection");

const server = "127.0.0.1";
const catalog = "eRifaTecTeste";
const user = "postgres";
const password = "2012janeiro";

var connectionstring="Data Source=<server>;Initial Catalog=<catalog>;User ID=<user>;Password=<password>;Provider=SQLOLEDB";

connection.Open(connectionstring);
var rs = new ActiveXObject("ADODB.Recordset");

rs.Open("SELECT * FROM table", connection);
rs.MoveFirst
while(!rs.eof)
{
   document.write(rs.fields(1));
   rs.movenext;
}

rs.close;
connection.close;
*/

/*const pool = new Pool(config);
 
 pool.query('SELECT * FROM Venda', (err, result) => {
   if (err) {
     console.error('Erro ao executar a consulta:', err);
   } else {
     console.log('Resultado: Deu Certo', result.rows);
   }
 
   // Encerra a conexão
   pool.end();
 });
*/




/*pool.connect((erro, client, release) => {
    if (erro) {
        console.error('Erro ao conectar ao banco de dados:', erro);
        return;
    }

    console.log('Conexão estabelecida com sucesso!');

    release(); // Libera o cliente do pool

    // Encerra a conexão
    pool.end();
});*/

/* Atributos da tabela Usuário:
idUsuario
nomeUsuario
cpfUsuario
emailUsuario
senhaUsuario    
dataNascUsuario
cep
cidade
rua
estado
bairro
numero
*/

//Insert na tabela usuário

/*pool.query(Usuario1, values1, (err, result) => {
    if (err) {
        console.error('Erro ao inserir dados:', err);
    } else {
        console.log('Dados inseridos com sucesso!');
    }

    // Encerra a conexão do pool
    pool.end();
});*/

