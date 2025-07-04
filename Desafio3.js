class infoHeroi{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
        this.nomeHeroi = nomeHeroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoHeroi = tipoHeroi;
    }
atacar(){
    let ataque;

    switch(this.tipoHeroi){
        case 'Mago':
            ataque = 'magia'
            break;
        case 'Guerreiro':
            ataque = "espada";
            break;
        case 'Monge':
            ataque = "artes marciais";
            break;
        case 'ninja':
            ataque = "shuriken";
            break;
        default:
            ataque = "usou um ataque desconhecido ";

        }
    console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`)
    }
}

const dadosHeroi = new infoHeroi ('Hide', 26, 'Mago')
dadosHeroi.atacar()