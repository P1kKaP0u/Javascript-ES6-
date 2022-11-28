class Personel{

    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    
    save_personel(){
        console.log(`Personel saved : ${this.name}`);
    }
}


const personel = new Personel("Mustafa Kemal", "Aktaş");

personel.save_personel();

console.log(personel.surname);