class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch(this.tipo) {
            case 'mago':
                ataque = 'usando magia';
                break;
            case 'guerreira':
                ataque = 'usando espada';
                break;
            case 'monge':
                ataque = 'usando artes marciais';
                break;
            case 'ninja':
                ataque = 'usando shuriken';
                break;
            default:
                ataque = 'não tem um ataque definido';
        }
        console.log(`A ${this.tipo} ${this.nome} atacou a sua mãe ${ataque}`);
    }
}

let guerreiro = new hero("Esther", 22, "guerreira");
let mago = new hero("Gandalf", 150, "mago");

guerreiro.atacar();
mago.atacar();
