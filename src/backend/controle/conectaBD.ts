import { Pool } from 'pg'
//Pool é a classe dentro do pacote 'pg' que representa o pool de conexão com o Bd

async function conectaBanco() {
    const config = {
        user: 'postgres',
        password: '2019setembro*',
        host: '127.0.0.1',
        port: 5432,
        database: 'eRifaTecTeste'
    };
    
    const pool = new Pool(config);

    try {
        // Obtém uma conexão do pool
        const conexao = await pool.connect();

        console.log('Conexão estabelecida com sucesso!');
        return conexao

        /*
        // Libera a conexão do pool
        conn.release();

        // Encerra a conexão do pool
        await pool.end();
        */
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
}

/*
        // Insere dados em uma tabela
        const idUsuario1 = 2;
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
        */
