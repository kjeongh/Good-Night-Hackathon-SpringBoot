const conn = require('../maria');


const createRestaurant = (name, category) => {
  console.log('restaurant 레포지토리 실행');

  return new Promise((resolve, reject) => {
    console.log('promise문');

    const query = "INSERT INTO restaurants (name, category) VALUES (?, ?)";
    conn.query(query, [name, category], (error, results) => {
      console.log('query문');

      if (error) {
        reject(error);
      } else {
        console.log('resolve');

        resolve(results);
        console.log(results)
      }
    });
  });
};

module.exports = {
  createRestaurant
};
