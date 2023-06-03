const express = require('express'); //express모듈 불러오기
const app = express(); //express애플리케이션 객체 생성
const maria = require('./maria');
const restaurantRoutes = require('./routes/restaurantRoutes');

app.use(express.json()); // JSON 형식의 요청 body 파싱



const hostname = '127.0.0.1'

app.set('port', process.env.PORT || 3000); 

app.get('/', (req, res) => {
    res.send('Hello, Express')
})

app.listen(app.get('port'), hostname, () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})

app.post('/restaurants', restaurantRoutes);
app.get('/restaurants/:id', restaurantRoutes);
app.get('/restaurants', restaurantRoutes);
app.put('/restaurants/:id', restaurantRoutes);
app.delete('/restaurants/:id', restaurantRoutes);

//테이블 생성
maria.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
    } else {
      console.log('Connected to database');
    }
  });


//
  

