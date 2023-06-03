const conn = require('../maria');

const createReview = (restaurantId, title, content) => {

    return new Promise((resolve, reject) => {
  
        const query = "INSERT INTO reviews (restaurant_id, title, content) VALUES ((SELECT id FROM restaurants WHERE restaurant_id = ?), ?, ?)";
        conn.query(query, [restaurantId, title, content], (error, results) => {
  
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };
  
  module.exports = {
    createReview
  };
  