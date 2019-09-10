/**
NOTE: Do not use synchronous methods like readFileSync, writeFileSync for any of the tasks
      Do not use callbacks to implement, create your own promise based functions
 *
*/
/*
Task 1: Read the zomato.json file, choose a restaurant you like, and write it to
another file named my-fav-restaurant.json in output directory.
read zomato.json -> write task-1.json -> print 'Task 1 done'
*/

const fs = require("fs");
getFavoriteRestaurant();
function getFavoriteRestaurant() {
  new Promise((resolve, reject) =>
    fs.readFile("./data/zomato.json", "utf-8", (err, jsonString) => {
      if (err) {
        console.log("File read failed:", err);
      }
      try {
        const data = JSON.parse(jsonString);
        const myFavRestuarant = data.restaurants[0].restaurant;
        resolve(myFavRestuarant);
      } catch {
        console.log("error in Reading file");
      }
    })
  ).then(myFavRestuarant => {
    jsonString = JSON.stringify(myFavRestuarant);

    fs.writeFile("./output/Task-1.json", jsonString, err => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Task 1 done");
      }
    });
  });
}

/*
Task 2: Read the movies.json file, choose a movie you like, and write it to
file named task-2-1.json in output directory, now read the zomato.json,
and write it to a file named task-2-2.json.
NOTE: You have to read the file twice, and it sequence should be
read movies.json -> write task-2-1.json -> read movies.json -> write task-2-2.json -> print 'Task 2 done'
*/
getFavoriteMovies(() =>
  new Promise((resolve, reject) =>
    fs.readFile("./data/zomato.json", "utf-8", (err, newjsonString) => {
      if (err) {
        console.log("File read failed:", err);
      }
      try {
        const new_data = JSON.parse(newjsonString);
        const myFavRestuarant = new_data.restaurants[0].restaurant;
        resolve(myFavRestuarant);
      } catch (err) {
        console.log("error in Reading file", err);
      }
    })
  ).then(myFavRestuarant => {
    jsonString = JSON.stringify(myFavRestuarant);

    fs.writeFile("./output/Task-2-2.json", jsonString, err => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Task 2 done");
      }
    });
  })
);

function getFavoriteMovies(callback) {
  new Promise((resolve, reject) =>
    fs.readFile("./data/movies.json", "utf-8", (err, jsonString) => {
      if (err) {
        console.log("error Ocurred");
      }
      try {
        const movieData = JSON.parse(jsonString);
        resolve(movieData);
      } catch (err) {
        console.log("Error in Reading File", err);
      }
    })
  ).then(movieData => {
    jsonString = JSON.stringify(movieData[0]);
    fs.writeFile("./output/task-2-1.json", jsonString, err => {
      if (err) {
        console.log("Error in writting File");
      } else {
        console.log("Successfully Wrote");
      }
    });
  });
  callback();
}

/*
Task 3: Read the movies.json file, choose 2 movies you like, and write it to
files named task-3-1.json and task-3-2.json.
NOTE: You have to read the file once, and simultaneously write to the two files
read movies.json -> task-3-1.json, write task-3-2.json -> print 'Task 3 done'
*/

getFavoriteRestaurantAndMovies();

function getFavoriteRestaurantAndMovies() {
  new Promise((resolve, reject) =>
    fs.readFile("./data/movies.json", "utf-8", (err, jsonString) => {
      if (err) {
        console.log("error Ocurred");
      }
      try {
        const movieData = JSON.parse(jsonString);
        resolve(movieData);
      } catch (err) {
        console.log("Error in Reading File", err);
      }
    })
  ).then(movieData => {
    jsonString = JSON.stringify(movieData[0]);
    fs.writeFile("./output/task-3-1.json", jsonString, err => {
      if (err) {
        console.log("Error in writting File");
      } else {
        console.log("File Wrote Successfully");
      }
    });
    jsonString = JSON.stringify(movieData[1]);
    fs.writeFile("./output/task-3-2.json", jsonString, err => {
      if (err) {
        console.log("Error in writting File");
      } else {
        console.log("Task 3 Complete");
      }
    });
  });
}
