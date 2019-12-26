/**
 * Dec 26, 2019
 * Frederick Lee
 */

const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const methodOverride = require('method-override');

const app = express();
const PORT = 8080;

app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({exteneded: true}));
app.use(cookieSession({
  name: 'session',
  keys: ['battleship', 'player1', 'player2', 'kraken', 'Kobe'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hrs
}));

const userIdCookie = 'user_id';
const saltRounds = 10;

// app.use((req, res, next)) => {
//   const user = getUser(re)

//   next();
// }


//===================
// Endpoints
//===================
app.get('/', (req, res) => {
  res.render('../public/index');
})

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`);
});