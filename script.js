// Object Oriented Programming - Tamagotchi

class Tamagotchi {
    constructor(name, hunger, happiness, clean, ill, attentionNeeded, stage) {
        this._name = name;
        this._hunger = hunger;
        this._happines = happiness;
        this._clean = clean;
        this._ill = ill;
        this._attentionNeeded = attentionNeeded;
        this._stage = ["egg", "baby", "child", "teen", "adult", "senior"];
    }

    get name(){
        return this._name;
    }
    get hunger(){
        return this._hunger;
    }
    get happiness(){
        return this._happines;
    }
    get clean(){
        return this._clean;
    }
    get ill(){
        return this._ill;
    }
    get attentionNeeded(){
        return this._attentionNeeded;
    }
    get stage(){
        return this._stage;
    }

    //interactive functions 

    reduceHunger(amount) {
        return this._hunger -= 10;
    }
    reduceHappines(amount) {
        return this._happiness -= 10;
    }
    feed (amount) {
        this.hunger + 10;
        return (
            `${this.name} has been fed!`,
            this.hunger + 10
            );
    };
    play (amount) {
        this.happiness + 10;
        this.attentionNeeded + 10;
        return `${this.name}'s happy you played with them!`;
    };
    cure (bool) {
        if (ill = true) {
            return (
                ill = false,
                `${this.name} has been cured!`
                );
        } else {
            return `${this.name} is not ill!`;
        };
    };
};

class GiantTamagotchi extends Tamagotchi {
    constructor(name, flatten) {
        super(name);
        this._flatten = flatten;
    }
}

//individual pets declaration

const judah = new Tamagotchi("Judah", 100, 100, true, false, false, 'egg');
const bill = new GiantTamagotchi("Bill", true);

console.log(judah);
console.log(bill);

console.log(judah.reduceHunger(10));
console.log(judah.reduceHunger(10));

console.log(judah.feed(90));

// mouseover

function mouseOver() {
    let demo = document.getElementById("feed").style.color = "white";
}
function mouseOut() {
    let demo =  document.getElementById("feed").style.color = "darkBlue";
}

// these have been highlighted out as they break the above code and I am not sure why.
// The above mouseover works for all three words for some reason instead of just feed and again I am not sure why.

// function mouseOver() {
//     let demo = document.getElementById("play").style.color = "white";
// }
// function mouseOut() {
//     let demo =  document.getElementById("play").style.color = "darkBlue";
// }

// function mouseOver() {
//     let demo = document.getElementById("cure").style.color = "white";
// }
// function mouseOut() {
//     let demo =  document.getElementById("cure").style.color = "darkBlue";
// }


