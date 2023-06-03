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

    const query = "SELECT * FROM restaurants WHERE id = ? AND deleted_at IS NULL";
    conn.execute(query, [id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const getRestaurantList = (category) => {
  return new Promise((resolve, reject) => {
    if(category == 'ALL') { //전체 조회
      const query = "SELECT * FROM restaurants WHERE deleted_at IS NULL";
      conn.execute(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    }
    else { //카테고리별 조회
      const query = "SELECT * FROM restaurants WHERE category = ? AND deleted_at IS NULL";
      conn.execute(query, [category], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    }



  });
}

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

const deleteRestaurant = (id) => {

  return new Promise((resolve, reject) => {
    const query = "UPDATE restaurants SET deleted_at = NOW() WHERE id = ?";
    conn.execute(query, [id], (error, results) => {
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
  updateRestaurant,
  deleteRestaurant,
  getRestaurantList
};
