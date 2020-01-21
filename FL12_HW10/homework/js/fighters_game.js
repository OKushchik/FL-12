class Fighter {
    constructor (name,damage,hp,agility) {
        this.wins = 0;
        this.losses = 0;
        this.name = name;
        this.damage = damage;
        this.hp = hp;
        this.agility = agility;
    }
    getName(){
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getAgility() {
        return this.agility;
    }
    getHealth() {
        this.hp -= this.getAgility();
        return this.hp;
    }
    addWin (){
        this.wins += 1;
        return this.wins;
    }
    addLoss() {
        this.losses += 1;
        return this.losses;
    }
    logCombatHistory(){
        return 'Name:' + this.name +', Wins:' + this.wins +', Losses:' + this.losses ;
    }
    attach(defender){
        let random = Math.floor(Math.random() * hundred) + 1;
        if (random > defender.getDamage()) {
            defender.getHealth();
            console.log(this.getName() + ' make ' + this.getDamage() + ' damage to ' + defender.getName());
        } else {
            console.log(m);
        }
    }
}
function battle (Fighter1,Fighter2) {
    while (Fighter1.hp > 0 && Fighter2.hp > 0) {
        Fighter1.attach(Fighter2);
        Fighter2.attach(Fighter1);
    }
    if (Fighter1.hp <= 0) {
        Fighter2.addWin();
        Fighter1.addLoss();
        console.log(Fighter1.name +' is dead and can\'t fight');
    } else if (Fighter2.hp <= 0) {
        Fighter1.addWin();
        Fighter2.addLoss();
        console.log(Fighter2.name +' is dead and can\'t fight');
    }
    console.log(Fighter1.logCombatHistory());
    console.log(Fighter2.logCombatHistory());
}
let hundred = 100;
let m = 'missed';
const Fighter1 = new Fighter();
const Fighter2 = new Fighter();
let r = battle(Fighter1,Fighter2);
console.log(r);
console.log(Fighter1.hp);
console.log(Fighter2.hp);