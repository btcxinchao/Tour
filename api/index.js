const express = require('express');
const app = express();
const path = require('path');

const port = 3000;


//thiết lập pug làm view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// thiết lập thư mục public để chứa các file tĩnh (CSS, JS, hình ảnh)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('client/pages/home');
});

app.get('/tour', (req, res) => {
  console.log('GET /tour đã chạy');
  res.render('client/pages/tourlist',{pageTitle: 'Tour List'});
});

app.listen(port, () => {
  console.log(`Server đang chạy: http://localhost:${port}`);
});