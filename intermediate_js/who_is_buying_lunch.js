function whosPaying(names) {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    return randomName + " is going to buy lunch today!";
}

console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));