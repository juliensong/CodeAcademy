const animals = ["A giraffe","A monkey","A martian","A cat","A mouse"];
const actions = ["just got naked","begins to sing","starts to dance","has just fallen asleep"];
const places = ["on the moon","in the mountain","in a lake full of Piranha","in a school","in a fishbowl"];

const randomSentence = () => {
    let randomAnimal = Math.floor(Math.random() * animals.length);
    let randomActions = Math.floor(Math.random() * actions.length);
    let randomePlaces = Math.floor(Math.random() * places.length);

    console.log(animals[randomAnimal] + " " + actions[randomActions] + " " + places[randomePlaces])
};

randomSentence()
randomSentence()
randomSentence()
randomSentence()
randomSentence()