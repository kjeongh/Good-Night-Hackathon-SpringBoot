const maria = require('mysql2');
const config = require('./config/dbconfig');
const dotenv = require('dotenv');

dotenv.config();


const conn = maria.createConnection(
    config[process.env.NODE_ENV || 'development']
)


function createTables() {
    const createRestaurantTableQuery = `
        CREATE TABLE IF NOT EXISTS restaurants (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            category ENUM('일식', '중식', '양식'),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted_at TIMESTAMP NULL
        )
    `

    const createReviewTableQuery = `
        CREATE TABLE IF NOT EXISTS reviews (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT,
        restaurant_id INT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (restaurant_id) REFERENCES restaurants (id)
        )
    `
    // on delete cascade하면 안됨

    //레스토랑 생성 쿼리
    conn.query(createRestaurantTableQuery, (err, results) => {
        if (err) {
          console.error('Error creating restaurant table:', err);
        } else {
          console.log('Restaurant table created successfully');
        }
      });
    

      //리뷰 생성 쿼리
      conn.query(createReviewTableQuery, (err, results) => {
        if (err) {
          console.error('Error creating review table:', err);
        } else {
          console.log('Review table created successfully');
        }
      });
}


conn.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
    } else {
      console.log('Connected to database');
      createTables(); // 테이블 생성 함수 호출
    }
  });

module.exports = conn;
