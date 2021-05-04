/**
 * Fábrica abstrata que possui as famílias base que serão implementadas
 */
/**
 * Declaração das Fábricas concretas que, baseado na variação, irão implementar a
 * criação do produtos concretos juntando a família com a variação
 */
var ConcreteFactoryArtDeco = /** @class */ (function () {
    function ConcreteFactoryArtDeco() {
    }
    ConcreteFactoryArtDeco.prototype.createCadeira = function (nome, preco, numeroDePernas) {
        return new ConcreteCadeiraArtDeco(nome, preco, numeroDePernas);
    };
    ConcreteFactoryArtDeco.prototype.createSofa = function () {
        return new ConcreteSofaArtDeco();
    };
    ConcreteFactoryArtDeco.prototype.createMesa = function () {
        return new ConcreteMesaArtDeco();
    };
    return ConcreteFactoryArtDeco;
}());
var ConcreteFactoryVitoriano = /** @class */ (function () {
    function ConcreteFactoryVitoriano() {
    }
    ConcreteFactoryVitoriano.prototype.createCadeira = function (nome, preco, numeroDePernas) {
        return new ConcreteCadeiraVitoriano(nome, preco, numeroDePernas);
    };
    ConcreteFactoryVitoriano.prototype.createSofa = function () {
        return new ConcreteSofaVitoriano();
    };
    ConcreteFactoryVitoriano.prototype.createMesa = function () {
        return new ConcreteMesaVitoriano();
    };
    return ConcreteFactoryVitoriano;
}());
var ConcreteFactoryModerno = /** @class */ (function () {
    function ConcreteFactoryModerno() {
    }
    ConcreteFactoryModerno.prototype.createCadeira = function (nome, preco, numeroDePernas) {
        return new ConcreteCadeiraModerno(nome, preco, numeroDePernas);
    };
    ConcreteFactoryModerno.prototype.createSofa = function () {
        return new ConcreteSofaModerno();
    };
    ConcreteFactoryModerno.prototype.createMesa = function () {
        return new ConcreteMesaModerno();
    };
    return ConcreteFactoryModerno;
}());
/**
 * Declaração dos objetos concretos que serão criados
 */
var ConcreteCadeiraArtDeco = /** @class */ (function () {
    function ConcreteCadeiraArtDeco(nome, preco, numeroDePernas) {
        this.nome = nome;
        this.preco = preco;
        this.numeroDePernas = numeroDePernas;
    }
    ConcreteCadeiraArtDeco.prototype.temEstoque = function () {
        return true;
    };
    return ConcreteCadeiraArtDeco;
}());
var ConcreteSofaArtDeco = /** @class */ (function () {
    function ConcreteSofaArtDeco() {
    }
    ConcreteSofaArtDeco.prototype.temEstoque = function () {
        return true;
    };
    return ConcreteSofaArtDeco;
}());
var ConcreteMesaArtDeco = /** @class */ (function () {
    function ConcreteMesaArtDeco() {
    }
    ConcreteMesaArtDeco.prototype.temEstoque = function () {
        return true;
    };
    return ConcreteMesaArtDeco;
}());
var ConcreteCadeiraVitoriano = /** @class */ (function () {
    function ConcreteCadeiraVitoriano(nome, preco, numeroDePernas) {
        this.nome = nome;
        this.preco = preco;
        this.numeroDePernas = numeroDePernas;
    }
    ConcreteCadeiraVitoriano.prototype.temEstoque = function () {
        return true;
    };
    return ConcreteCadeiraVitoriano;
}());
var ConcreteSofaVitoriano = /** @class */ (function () {
    function ConcreteSofaVitoriano() {
    }
    ConcreteSofaVitoriano.prototype.temEstoque = function () {
        return true;
    };
    return ConcreteSofaVitoriano;
}());
var ConcreteMesaVitoriano = /** @class */ (function () {
    function ConcreteMesaVitoriano() {
    }
    ConcreteMesaVitoriano.prototype.temEstoque = function () {
        return true;
    };
    return ConcreteMesaVitoriano;
}());
var ConcreteCadeiraModerno = /** @class */ (function () {
    function ConcreteCadeiraModerno(nome, preco, numeroDePernas) {
        this.nome = nome;
        this.preco = preco;
        this.numeroDePernas = numeroDePernas;
    }
    ConcreteCadeiraModerno.prototype.temEstoque = function () {
        return true;
    };
    return ConcreteCadeiraModerno;
}());
var ConcreteSofaModerno = /** @class */ (function () {
    function ConcreteSofaModerno() {
    }
    ConcreteSofaModerno.prototype.temEstoque = function () {
        return true;
    };
    return ConcreteSofaModerno;
}());
var ConcreteMesaModerno = /** @class */ (function () {
    function ConcreteMesaModerno() {
    }
    ConcreteMesaModerno.prototype.temEstoque = function () {
        return true;
    };
    return ConcreteMesaModerno;
}());
function clientCode(factory) {
    var productCadeira = factory.createCadeira('Cadeira', 45, 4);
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
