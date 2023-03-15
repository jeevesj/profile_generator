const readline = require('readline');

const response = {
  name: "",
  activity: "",
  music: "",
  meal: "",
  food: "",
  sport: "",
  superpower: "",
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer) => {
  response.name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    response.activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      response.music = answer;
      rl.question("Which meal is your favourite? ", (answer) => {
        response.meal = answer;
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          response.food = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            response.sport = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              response.superpower = answer;

              
              let string = `${response.name} loves listening to ${response.music} while ${response.activity}, devouring ${response.food} for ${response.meal}, prefers ${response.sport} over any other sport, and is amazing at ${response.superpower}. `
              console.log(string);
              rl.close();

            });
          });
        });
      });
    });
  });
});

