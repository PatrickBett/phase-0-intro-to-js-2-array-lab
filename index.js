// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    //push Ralph to variable cats
    cats.push("Ralph")
    return cats;
}
function destructivelyPrependCat(name){
    //insert Bob to the first position
    cats.unshift("Bob")
    return cats;
}

function destructivelyRemoveLastCat(){
    //removes the last cat from the cats array
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat(){
    //removes the first cat from the cats array
    return cats.shift()

}
function appendCat(name){
    //appends a cat to the cats array and returns a new array, leaving the cats array unchanged
    return [...cats,"Broom"];
}
function prependCat(name){
    //prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
    //["Arnold", "Milo", "Otis", "Garfield"]
    return ["Arnold",...cats];
    
    
}
function removeLastCat(){
    //removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
    return cats.slice(0, cats.length - 1)
    
}
function removeFirstCat(){
    //removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
    return cats.slice(1);
    
}