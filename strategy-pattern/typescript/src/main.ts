class Character {
    public weapon: Weapon;

    public fight(): void {
        console.log('Character is fighting');
    }
}

class Weapon {
    
}

const c = new Character();
console.log('---------------- -------------- --------------');
console.log('---------------- Starting Game! --------------');
console.log('---------------- -------------- --------------');

c.fight();