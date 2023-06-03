const reviewRepository = require('../repository/reviewRepository');

//리뷰 생성
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

//리뷰 조회
const getReview = (req, res) => {
    const id = req.params.id;

    reviewRepository.getReview(id)
  .then(results => { 
    const review = results[0];
    console.log(results)
    res.status(200).json(
        {
            message: '리뷰 조회 성공',
            restaurant_name : review.restaurant_name,
            title: review.title,
            content: review.content
        }
 );
  })
  .catch(error => {
    res.status(500).json({ error: '리뷰 조회 실패' });
  });
};


//리뷰 삭제
const deleteReview = (req, res) => {
    const id = req.params.id;

    reviewRepository.deleteReview(id)
  .then(results => { 
    res.status(200).json({ message: '리뷰 삭제 성공'});
  })
  .catch(error => {
    res.status(500).json({ error: '리뷰 삭제 실패' });
  });
};


//리뷰 수정
const updateReview = (req, res) => {
    const id = req.params.id;
    const { title, content } = req.body;

    reviewRepository.updateReview(id, title, content)
  .then(results => { 
    res.status(200).json({ message: '리뷰 수정 성공' });
  })
  .catch(error => {
    res.status(500).json({ error: '리뷰 수정 실패' });
  });
};


//리뷰 목록 조회 (페이지네이션)
const getReviewList = (req, res) => {
    const page = parseInt(req.query.page); // 페이지 번호
    const limit = parseInt(req.query.limit); // 페이지당 항목 수

    reviewRepository.getReviewList()
    .then(results => { 

        //페이지네이션
        const startIndex = (page-1)*limit;
        const endIndex = page*limit;
        const reviewList = results.slice(startIndex, endIndex);

        res.status(200).json(
            { 
                message: '리뷰 목록 조회 성공',
                list: reviewList
            });      
        })
      .catch(error => {
        res.status(500).json({ error: '리뷰 목록 조회 실패' });
        console.log(error);
      });
}

module.exports = {
    createReview,
    getReview,
    deleteReview,
    updateReview,
    getReviewList
  };