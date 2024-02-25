var doggo0 = {
    age: 6,
    breed: "sheperd",
    children: ["doggo1", "doggo2"]
}

console.log(doggo0.age)
console.log(doggo0.breed)
console.log(doggo0.children)

function Dogg (age, breed, children){ // constructor function, factory
    this.age = age;
    this.breed = breed;
    this.children = children;
}

var doggo3 = new Dogg(5, "forest hunter", ["doggo4", "doggo5"]);
console.log(doggo3.age)
console.log(doggo3.breed)
console.log(doggo3.children)