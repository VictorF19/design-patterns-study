abstract class Creator {

    nome: string;
    genero: string;
    ano: number;

    public abstract factoryMethod(): Product;

    public emprestar(): string {
        const product = this.factoryMethod();
        return product.emprestar();
    }
}

interface Product {
    nome: string;
    genero: string;
    ano: number;
    emprestar(): string;
}

class EmprestarLivroCreator extends Creator {

    nome: string;
    genero: string;
    ano: number;

    constructor (nome, genero, ano) {
        super();
        this.nome = nome;
        this.genero = genero;
        this.ano = ano;
    }


    public factoryMethod(): Product {
        return new EmprestimoLivro(this.nome, this.genero, this.ano);
    }
}

class EmprestarDvdCreator extends Creator {

    nome: string;
    genero: string;
    ano: number;

    constructor (nome, genero, ano) {
        super();
        this.nome = nome;
        this.genero = genero;
        this.ano = ano;
    }


    public factoryMethod(): Product {
        return new EmprestimoDvd(this.nome, this.genero, this.ano);
    }
}

class EmprestimoLivro implements Product {

    nome: string;
    genero: string;
    ano: number;

    constructor (nome, genero, ano) {
        this.nome = nome;
        this.genero = genero;
        this.ano = ano;
    }

    public emprestar(): string {
        return `Livro emprestado\n
                Detalhes:\n
                Nome: ${this.nome}
                Gênero: ${this.genero}
                Ano: ${this.ano}`;
    }
}

class EmprestimoDvd implements Product {
    nome: string;
    genero: string;
    ano: number;

    constructor (nome, genero, ano) {
        this.nome = nome;
        this.genero = genero;
        this.ano = ano;
    }

    public emprestar(): string {
        return `DVD emprestado\n
                Detalhes:\n
                Nome: ${this.nome}
                Gênero: ${this.genero}
                Ano: ${this.ano}`;
    }
}

function clientCode(creator: Creator) {
    console.log(creator.emprestar());
}

clientCode(new EmprestarLivroCreator('Nas Montanhas da Loucura', 'Horror', 1931));
clientCode(new EmprestarDvdCreator('Cosmos', 'Científico', 1980));