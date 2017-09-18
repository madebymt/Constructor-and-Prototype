//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/


// set up Dog Constructor & Prototype, model to set up then pass
// the value in have : status, color, hungry and owner
// Two thing change is Dogs and Human(owner)
function Dog (status, color,hungry, owner) {
    this.status = status;
    this.color = color;
    this.hungry = hungry;
    this.owner = owner;
}
const sadie = new Dog("normal","black",false,"sadie");
const moonshine = new Dog("normal","black",true,undefined);
// moonshine.owner = "julia"

// attricus no owner
const atticus = new Dog();


// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype

const mason = new Human(false);
const julia = new Human(true);

function Human (cool) {
    this.cool = cool
}
Human.prototype.pet = function (pet) {
    pet.status = "happy"
}
Human.prototype.feed = function (pet) {
    pet.hungry = false
}

// Instances of Human
// Needed: mason, julia
