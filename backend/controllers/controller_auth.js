const User = require('../models/model_user')
const shortId = require('shortid')

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