/**
 * Fábrica abstrata que possui as famílias base que serão implementadas
 */

interface AbstractFactory {
    createCadeira(nome, preco, numeroDePernas): AbstractProductCadeira;
    createSofa(): AbstractProductSofa;
    createMesa(): AbstractProductMesa;
}

/**
 * Declaração das Fábricas concretas que, baseado na variação, irão implementar a
 * criação do produtos concretos juntando a família com a variação
 */

class ConcreteFactoryArtDeco implements AbstractFactory {
    public createCadeira(nome, preco, numeroDePernas): AbstractProductCadeira {
        return new ConcreteCadeiraArtDeco(nome, preco, numeroDePernas);
    }

    public createSofa(): AbstractProductSofa {
        return new ConcreteSofaArtDeco();
    }

    public createMesa(): AbstractProductMesa {
        return new ConcreteMesaArtDeco();
    }
}

class ConcreteFactoryVitoriano implements AbstractFactory {
    public createCadeira(nome, preco, numeroDePernas): AbstractProductCadeira {
        return new ConcreteCadeiraVitoriano(nome, preco, numeroDePernas);
    }

    public createSofa(): AbstractProductSofa {
        return new ConcreteSofaVitoriano();
    }

    public createMesa(): AbstractProductMesa {
        return new ConcreteMesaVitoriano();
    }
}

class ConcreteFactoryModerno implements AbstractFactory {
    public createCadeira(nome, preco, numeroDePernas): AbstractProductCadeira {
        return new ConcreteCadeiraModerno(nome, preco, numeroDePernas);
    }

    public createSofa(): AbstractProductSofa {
        return new ConcreteSofaModerno();
    }

    public createMesa(): AbstractProductMesa {
        return new ConcreteMesaModerno();
    }
}

/**
 * Declaração das interfaces dos produtos abstratos que são as famílias
 */

interface AbstractProductCadeira {
    nome: string;
    preco: number;
    numeroDePernas: number;
    temEstoque(): boolean;
}

interface AbstractProductSofa {
    nome: string;
    preco: number;
    tecido: string;
    temEstoque(): boolean 
}

interface AbstractProductMesa {
    nome: string;
    preco: number;
    altura: number;
    temEstoque(): boolean;
}

/**
 * Declaração dos objetos concretos que serão criados
 */

class ConcreteCadeiraArtDeco implements AbstractProductCadeira {
    nome: string;
    preco: number;
    numeroDePernas: number;

    constructor(nome, preco, numeroDePernas) {
        this.nome = nome;
        this.preco = preco;
        this.numeroDePernas = numeroDePernas;
    }

    public temEstoque(): boolean {
        return true;
    }
}

class ConcreteSofaArtDeco implements AbstractProductSofa {
    nome: string;
    preco: number;
    tecido: string;

    public temEstoque(): boolean {
        return true;
    }
}

class ConcreteMesaArtDeco implements AbstractProductMesa {
    nome: string;
    preco: number;
    altura: number;
    
    public temEstoque(): boolean {
        return true;
    }
}

class ConcreteCadeiraVitoriano implements AbstractProductCadeira {
    nome: string;
    preco: number;
    numeroDePernas: number;

    constructor(nome, preco, numeroDePernas) {
        this.nome = nome;
        this.preco = preco;
        this.numeroDePernas = numeroDePernas;
    }

    public temEstoque(): boolean {
        return true;
    }
}

class ConcreteSofaVitoriano implements AbstractProductSofa {
    nome: string;
    preco: number;
    tecido: string;

    public temEstoque(): boolean {
        return true;
    }
}

class ConcreteMesaVitoriano implements AbstractProductMesa {
    nome: string;
    preco: number;
    altura: number;

    public temEstoque(): boolean {
        return true;
    }
}

class ConcreteCadeiraModerno implements AbstractProductCadeira {
    nome: string;
    preco: number;
    numeroDePernas: number;

    constructor(nome, preco, numeroDePernas) {
        this.nome = nome;
        this.preco = preco;
        this.numeroDePernas = numeroDePernas;
    }

    public temEstoque(): boolean {
        return true;
    }
}

class ConcreteSofaModerno implements AbstractProductSofa {
    nome: string;
    preco: number;
    tecido: string;

    public temEstoque(): boolean {
        return true;
    }
}

class ConcreteMesaModerno implements AbstractProductMesa {
    nome: string;
    preco: number;
    altura: number;

    public temEstoque(): boolean {
        return true;
    }
}

function clientCode(factory: AbstractFactory) {
    const productCadeira = factory.createCadeira('Cadeira', 45, 4);
    // const productSofa = factory.createSofa();
    // const productMesa = factory.createMesa();

    console.log('ProductCadeira', productCadeira);
    // console.log('ProductSofa', productSofa);
    // console.log('ProductMesa', productMesa);
}

console.log('Criando produtos do tipo ArtDeco');
clientCode(new ConcreteFactoryArtDeco());

console.log('Criando produtos do tipo Vitoriano');
clientCode(new ConcreteFactoryVitoriano());

console.log('Criando produtos do tipo Moderno');
clientCode(new ConcreteFactoryModerno());