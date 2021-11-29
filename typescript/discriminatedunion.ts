interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Snake {
  type: "snake";
  crawlingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse | Snake;

function checkSpeedOfAnimal(animal: Animal) {
  let speed = 0;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "snake":
      speed = animal.crawlingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Speed is " + speed);
}

const snake: Snake = {
  crawlingSpeed: 30,
  type: "snake",
};
const bird: Bird = {
  flyingSpeed: 40,
  type: "bird",
};
checkSpeedOfAnimal(snake);
checkSpeedOfAnimal(bird);

//Index type properties
interface ErrorContainer {
  id: string;
  [prop: string]: string;
}

let errorBag: ErrorContainer = {
  id: "1",
  email: "Email is valid",
  username: "username is valid",
};
