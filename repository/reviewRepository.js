const conn = require('../maria');

const createReview = (restaurantId, title, content) => {

    return new Promise((resolve, reject) => {
  
        const query = "INSERT INTO reviews (restaurant_id, title, content) VALUES ((SELECT id FROM restaurants WHERE id = ?), ?, ?)";
        conn.query(query, [restaurantId, title, content], (error, results) => {
  
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };

const getReview = (id) => {
    return new Promise((resolve, reject) => {
  
        const query = "SELECT rt.name AS restaurant_name, rv.title, rv.content FROM reviews AS rv INNER JOIN restaurants AS rt ON rt.id = rv.restaurant_id";
        conn.query(query, [id], (error, results) => {
  
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
};

const deleteReview = (id) => {
    return new Promise((resolve, reject) => {
  
        const query = "DELETE FROM reviews WHERE id = ?";
        conn.query(query, [id], (error, results) => {
  
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
};

const updateReview = (id, title, content) => {

    return new Promise((resolve, reject) => {

        const query = "UPDATE reviews SET title = ?, content = ?, updated_at = NOW() WHERE id = ?";
        conn.query(query, [title, content, id], (error, results) => {
  
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          });
    })
};

//전체 리스트 반환 (페이지네이션)
const getReviewList = () => {
    return new Promise((resolve, reject) => {

        const query = "SELECT restaurant_id, title, content FROM reviews";
        conn.query(query, (error, results) => {
  
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          });
    }) 
};
  
  module.exports = {
    createReview,
    getReview,
    deleteReview,
    updateReview,
    getReviewList
  };
  