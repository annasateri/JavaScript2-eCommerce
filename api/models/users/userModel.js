const mongodb = require('mongoose');
const User = require('../users/userSchema');
const bcrypt = require('bcrypt');
const auth = require('../../authentication/auth');


exports.registerUser = (req, res) => {

  User.exists({ email: req.body.email }, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    } else {

      if(result) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'Email address is already taken'
        })
      }
      else {

        const salt = bcrypt.genSaltSync(10);
        bcrypt.hash(req.body.password, salt, (err, hash) => {

          if(err) {
            return res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Failed when encrypting user password'
            })
          }


          const newUser = new User({
            firstName:    req.body.firstName,
            lastName:     req.body.lastName,
            email:        req.body.email,
            passwordHash: hash
          })

          newUser.save()
            .then(() => {
              res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'User was created successfully'
              })
            })
            .catch(() => {
              res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to create user'
              })
            })
        })
      }
    }
  })
}


exports.loginUser = (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(user === null) {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: 'Incorrect email or password'
        })
      }

      try {
        bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
          if(err) {
            return res.status(400).json(err)
          }
          else {
  
            if(result) {
              return res.status(200).json({
                statusCode: 200,
                status: true,
                message: 'Authentication was successful',
                token: auth.generateToken(user)
              })
            }
            return res.status(401).json({
              statusCode: 401,
              status: false,
              message: 'Incorrect email or password'
            })
  
          }
        })
      }
      catch {
        return res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Unable to authenticate user. Please contact the system administrator'
        })
      }
    })
}







exports.getUsers = (req, res) => {
  User.find()
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json(err))
}

exports.getOneUser = (req, res) => {
  User.findById(req.params.id)
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json(err))
}


// exports.saveUser = (req, res) => {
//   const user = new User({
//     // _id: new mongodb.Types.ObjectId,
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     email: req.body.email,
//     password: req.body.password
    
//   })
//   user.save()
//   .then(() => {
//     res.status(201).json({
//       statusCode: 201,
//       status: true,
//       message: 'User created successfully'
//     })
//   })
//   .catch(() => {
//     res.status(500).json({
//       statusCode: 500,
//       status: false,
//       message: 'Failed to create user'
//     })
//   })
// }

// exports.updateUser = (req, res) => {
//   User.updateOne({ _id: req.params.id }, req.body)
//   .then(() => {
//     res.status(200).json({
//       statusCode: 200,
//       status: true,
//       message: 'User updated successfully'
//     })
//   })
//   .catch(() => {
//     res.status(500).json({
//       statusCode: 500,
//       status: false,
//       message: 'Failed to update user'
//     })
//   })
// }