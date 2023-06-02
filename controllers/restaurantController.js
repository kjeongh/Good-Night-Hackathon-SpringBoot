const restaurantRepository = require('../repository/restaurantRepository');

const createRestaurant = (req, res) => {
    const { name, category } = req.body;

    restaurantRepository.createRestaurant(name, category)
  .then(results => { //then으로 결과를 받아야지만 promise가 이행?
    res.status(200).json({ message: '레스토랑 생성 성공' });
  })
  .catch(error => {
    res.status(500).json({ error: '레스토랑 생성 실패' });
  });
};


const getRestaurantById = (req, res) => {
    const id = req.params.id;

    restaurantRepository.getRestaurantById(id)
    .then(results => { //then으로 결과를 받아야지만 promise가 이행?
        const restaurant = results[0];
        res.status(200).json(
            { 
                message: '레스토랑 조회 성공',
                name: restaurant.name,
                category: restaurant.category,
                created_at: restaurant.created_at
            });
      })
      .catch(error => {
        res.status(500).json({ error: '레스토랑 조회 실패' });
      });
}

module.exports = {
  createRestaurant,
  getRestaurantById
};