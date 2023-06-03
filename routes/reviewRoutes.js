// - 리뷰 목록 조회(pagination)
// - 레스토랑명, 리뷰 리스트 반환
//     - 등록 순 조회
//     - 역순 조회
//     - 리뷰 제목과 내용으로 조회
// - 리뷰 단일 조회
//     - 하나의 레스토랑명, 리뷰 제목 및 내용 반환
// - 리뷰 삭제
//     - 하나의 리뷰 삭제(hard)
// - 리뷰 수정
// - 리뷰 작성
//     - 제목 및 내용

const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router.post('/reviews', reviewController.createReview);
router.get('/reviews/:id', reviewController.getReview);
router.delete('/reviews/:id', reviewController.deleteReview);
router.put('/reviews/:id', reviewController.deleteReview);

module.exports = router;