import {pool} from "../config/db.js";

class ProdutoService {

    
    async create(produto) {
        const { nome, marca, categoria, preco, quantidade_estoque } = produto;

        const result = await pool.query(
            `INSERT INTO produtos
            (nome, marca, categoria, preco, quantidade_estoque)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`,
            [nome, marca, categoria, preco, quantidade_estoque]
        );

        return result.rows[0];
    }

    async getAll() {
    const result = await pool.query(
        "SELECT * FROM produtos ORDER BY nome"
    );

    return result.rows;
}
    }

export default new ProdutoService();