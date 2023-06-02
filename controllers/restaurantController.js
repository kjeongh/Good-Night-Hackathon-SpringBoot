const restaurantRepository = require('../repository/restaurantRepository');

const createRestaurant = (req, res) => {
    const { name, category } = req.body;
    
    restaurantRepository.createRestaurant(name, category)
  .then(results => {
    console.log('프로미스가 이행되었습니다.', results);
    // 여기서 결과를 처리할 코드를 작성합니다.
    res.status(200).json({ message: '레스토랑 생성 성공' });
  })
  .catch(error => {
    console.error('프로미스가 거부되었습니다.', error);
    // 여기서 에러를 처리할 코드를 작성합니다.
    res.status(500).json({ error: '레스토랑 생성 실패' });
  });
};

module.exports = {
  createRestaurant
};