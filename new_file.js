const fs = require("fs");
new Promise((resolve, reject) =>
fs.readFile("./data/movies.json", "utf-8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
    }
    try {
      const data = JSON.parse(jsonString);
      console.log(data)
    //   const myFavRestuarant = data.restaurants[0].restaurant;
    //   resolve(myFavRestuarant);
    } catch(err){
      console.log("error in Reading file",err);
    }
  })
)