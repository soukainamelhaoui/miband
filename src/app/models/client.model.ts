export class Client {
    id: number;
    mac: string;
    nom: string;
    prenom: string;
    tel: string;
    adresse: string;
    mail: string;


    constructor(
        id: number = 0,
        mac: string = '',
        nom: string = '',
        prenom: string = '',
        tel: string = '',
        adresse: string = '',
        mail: string = '',

    ) {
        this.id = id;
        this.mac = mac;
        this.nom = nom;
        this.prenom = prenom;
        this.tel = tel;
        this.adresse = adresse;
        this.mail = mail;

    }
}