const User = require('../models/model_user')
const shortId = require('shortid');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

exports.signup = (req, res) => {
  // console.log(req.body)
  // find the signup user based on its email
  User.findOne({ email: req.body.email }).exec((err, user) => {
      
    // if user already exist 
    if (user) {
      return res.status(400).json({
          error: 'Email is taken'
      })
    }

    // if the signing user is not exist
    const { name, email, password } = req.body
    let username = shortId.generate()
    let profile = `${process.env.CLIENT_URL}/profile/${username}`

    let newUser = new User({ name, email, password, profile, username })
    newUser.save((err, success) => {
      if (err) {
        return res.status(400).json({
            error: err
        })
      }
      // RETURN USER DATA AFTER SIGNUP
      // res.json({
      //     user: success
      // })

      // RETURN SUCCESS MESSAGE AFER SIGNUP
      res.json({
        message: 'Signup success! Please signin.'
      })
    })
  })
}

exports.signin = (req, res) => {
  const { email, password } = req.body;
  // check if user exist
  User.findOne({ email }).exec((err, user) => {
      if (err || !user) {
          return res.status(400).json({
              error: 'User with that email does not exist. Please signup.'
          });
      }
      // authenticate
      if (!user.authenticate(password)) {
          return res.status(400).json({
              error: 'Email and password do not match.'
          });
      }
      // generate a token and send to client
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

      res.cookie('token', token, { expiresIn: '1d' });
      const { _id, username, name, email, role } = user;
      return res.json({
          token,
          user: { _id, username, name, email, role }
      });
  });
};