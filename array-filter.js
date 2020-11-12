let peoples = [
    {
        name : "andi",
        gender : "male"
    },
    {
        name: "Siti",
        gender: "female"
    },
    {
        name: "Cindy",
        gender : "female"
    }

];

let female = peoples.filter(peoples =>{
    return peoples.gender == "male";
});

console.log(female);