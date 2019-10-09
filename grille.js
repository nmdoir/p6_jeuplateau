//Objet case

function Case(id, etat, arme, joueur, clic) {
    this.id = id;
    this.etat = etat;
    this.arme = arme;
    this.joueur = joueur;
    this.clic = clic;
}

//Générer no access cases

function noAccessCases() {
    var nb_cases = 0;
    var random_id = "";
    var no_access_id = [];
    for (nb_cases; nb_cases < 16; nb_cases++) {
        random_id = Math.floor(Math.random() * 99);
        no_access_id.push(random_id);
    }
    return no_access_id;
}

//Générer position joueurs

function posJoueurs() {
    var nb_joueurs = 0;
    var pos_joueurs = [];
    var random_pos = "";
    for (nb_joueurs; nb_joueurs < 2; nb_joueurs++) {
        random_pos = Math.floor(Math.random() * 99);
        pos_joueurs.push(random_pos);
    }
    return pos_joueurs;

    //comment checker que la case est vide ?