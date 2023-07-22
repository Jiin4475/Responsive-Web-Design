const fs = require('fs');
const path = require('path');

const express = require('express');
const uuid = require('uuid');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/restaurants', function (req, res) {
  const filePath = path.join(__dirname, 'data', 'restaurants.json');

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  res.render('restaurants', {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
});

app.get ('/restaurants/:id', function (req, res){
  const restaurantId = req.params.id;
  const filePath = path.join(__dirname, 'data', 'restaurants.json');

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  for (const restaurant of storedRestaurants){
    if(restaurant.id === restaurantId){
      return res.render ('restaurant-detail', { restaurant:restaurant });
    }
  }
  //404경고 페이지 레스토랑을 찾을 수 없을 때
res.render('404');
});


app.get('/recommend', function (req, res) {
  res.render('recommend');
});

app.post('/recommend', function (req, res) {
  const restaurant = req.body;
  restaurant.id = uuid.v4();//v4무작위로 생성되지만 고유함을 보장하는 고한 ID=> 무작위 id를 레스트랑 이름으로 바꿈
  const filePath = path.join(__dirname, 'data', 'restaurants.json');

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  storedRestaurants.push(restaurant);

  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));

  res.redirect('/confirm');
});

app.get('/confirm', function (req, res) {
  res.render('confirm');
});

app.get('/about', function (req, res) {
  res.render('about');
});

//유효하지 않은 페이지
//다른 경로에서 처리되지 않은 요청이 있으면 404 에러 페이지 뜸
app.use(function(req,res) {
  res.render('404');
});

//좋은 사용자경험을 제공하기 위해 문제가 발생하면 최소한 사용자정의 메세지로 처리함
//페이지 에러가 있을 때
app.use(function(error, req, res, next){ res.render('500')});

app.listen(3000);