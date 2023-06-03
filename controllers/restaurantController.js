const restaurantRepository = require('../repository/restaurantRepository');

//레스토랑 생성
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

//레스토랑 조회
const getRestaurantById = (req, res) => {
    const id = req.params.id;

    restaurantRepository.getRestaurantById(id)
    .then(results => { 
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

//레스토랑 수정
const updateRestaurant = (req, res) => {
    const id = req.params.id;
    const { category } = req.body;

    restaurantRepository.updateRestaurant(id, category)
    .then(results => {
        res.status(200).json({ message: '레스토랑 수정 성공' });
      })
      .catch(error => {
        res.status(500).json({ error: '레스토랑 수정 실패' });
      });
}

//레스토랑 삭제
const deleteRestaurant = (req, res) => {
    const id = req.params.id;

    restaurantRepository.deleteRestaurant(id)
    .then(results => { 
        res.status(200).json({ message: '레스토랑 삭제 성공' });
      })
      .catch(error => {
        res.status(500).json({ error: '레스토랑 삭제 실패' });
      });
}

//레스토랑 목록 조회
const getRestaurantList = (req, res) => {
    const category = req.query.category;

    restaurantRepository.getRestaurantList(category)
    .then(results => { 

        //레스토랑 목록 jsonArray생성
        const restaurantList = [];
        results.forEach((restaurant) => {
            restaurantList.push(
                {
                    name: restaurant.name,
                    category: restaurant.category,
                    created_at: restaurant.created_at
                })
        })

        res.status(200).json(
            { 
                message: '레스토랑 목록 조회 성공',
                list: restaurantList
            });      
        })
      .catch(error => {
        res.status(500).json({ error: '레스토랑 목록 조회 실패' });
        console.log(error);
      });
}


module.exports = {
  createRestaurant,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
  getRestaurantList
};