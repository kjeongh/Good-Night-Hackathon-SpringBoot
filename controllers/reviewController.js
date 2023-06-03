const reviewRepository = require('../repository/reviewRepository');

//레스토랑 생성
const createReview = (req, res) => {
    const { restaurantId, title, content } = req.body;

    reviewRepository.createReview(restaurantId, title, content)
  .then(results => { //then으로 결과를 받아야지만 promise가 이행?
    res.status(200).json({ message: '리뷰 생성 성공' });
  })
  .catch(error => {
    res.status(500).json({ error: '리뷰 생성 실패' });
  });
};


module.exports = {
    createReview
  };