var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.emprestar = function () {
        var product = this.factoryMethod();
        return product.emprestar();
    };
    return Creator;
}());
var EmprestarLivroCreator = /** @class */ (function (_super) {
    __extends(EmprestarLivroCreator, _super);
    function EmprestarLivroCreator(nome, genero, ano) {
        var _this = _super.call(this) || this;
        _this.nome = nome;
        _this.genero = genero;
        _this.ano = ano;
        return _this;
    }
    EmprestarLivroCreator.prototype.factoryMethod = function () {
        return new EmprestimoLivro(this.nome, this.genero, this.ano);
    };
    return EmprestarLivroCreator;
}(Creator));
var EmprestarDvdCreator = /** @class */ (function (_super) {
    __extends(EmprestarDvdCreator, _super);
    function EmprestarDvdCreator(nome, genero, ano) {
        var _this = _super.call(this) || this;
        _this.nome = nome;
        _this.genero = genero;
        _this.ano = ano;
        return _this;
    }
    EmprestarDvdCreator.prototype.factoryMethod = function () {
        return new EmprestimoDvd(this.nome, this.genero, this.ano);
    };
    return EmprestarDvdCreator;
}(Creator));
var EmprestimoLivro = /** @class */ (function () {
    function EmprestimoLivro(nome, genero, ano) {
        this.nome = nome;
        this.genero = genero;
        this.ano = ano;
    }
    EmprestimoLivro.prototype.emprestar = function () {
        return "Livro emprestado\n\n                Detalhes:\n\n                Nome: " + this.nome + "\n                G\u00EAnero: " + this.genero + "\n                Ano: " + this.ano;
    };
    return EmprestimoLivro;
}());
var EmprestimoDvd = /** @class */ (function () {
    function EmprestimoDvd(nome, genero, ano) {
        this.nome = nome;
        this.genero = genero;
        this.ano = ano;
    }
    EmprestimoDvd.prototype.emprestar = function () {
        return "DVD emprestado\n\n                Detalhes:\n\n                Nome: " + this.nome + "\n                G\u00EAnero: " + this.genero + "\n                Ano: " + this.ano;
    };
    return EmprestimoDvd;
}());
function clientCode(creator) {
    console.log(creator.emprestar());
}
clientCode(new EmprestarLivroCreator('Nas Montanhas da Loucura', 'Horror', 1931));
clientCode(new EmprestarDvdCreator('Cosmos', 'Científico', 1980));
