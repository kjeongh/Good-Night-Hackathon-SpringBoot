// - 레스토랑 등록
//     - 카테고리(한중일식) 및 등록 날짜 기록
// - 레스토랑 수정
//     - 카테고리만 변경
// - 레스토랑 목록 조회
//     - 레스토랑 전체 목록 조회
//     - 카테고리에 따른 목록 조회
// - 레스토랑 단일 조회
//     - 레스토랑명, 카테고리, 음식점 생성일자 반환
// - 레스토랑 삭제
//     - 레스토랑 삭제로 인해 리뷰들까지 삭제되면 안됨(soft)


const express = require('express');
const restaurantController = require('../controllers/restaurantController');

const router = express.Router();

// 레스토랑 라우터
router.post('/restaurants', restaurantController.createRestaurant);
router.get('/restaurants/:id', restaurantController.getRestaurantById);

module.exports = router;