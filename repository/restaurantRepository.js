const conn = require('../maria');


const createRestaurant = (name, category) => {

  return new Promise((resolve, reject) => {

    const query = "INSERT INTO restaurants (name, category) VALUES (?, ?)";
    conn.query(query, [name, category], (error, results) => {

      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};


const getRestaurantById = (id) => {

  return new Promise((resolve, reject) => {

    const query = "SELECT * FROM restaurants WHERE id = ?";
    conn.execute(query, [id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};


const updateRestaurant = (id, category) => {

  return new Promise((resolve, reject) => {
    const query = "UPDATE restaurants SET category = ? WHERE id = ?";
    conn.execute(query, [category, id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  createRestaurant,
  getRestaurantById,
  updateRestaurant
};
