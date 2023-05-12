// the routes will manage the routes, containing the base url and calling the controllers with the methods

const { Router } = require('express')
const NotesController = require('../controllers/NotesController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const notesRoutes = Router()


const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated)

notesRoutes.get('/', notesController.index)
notesRoutes.post('/', notesController.create)
notesRoutes.get('/:id', notesController.show)
notesRoutes.delete("/:id", notesController.delete)

//export this file for each one which might use
module.exports = notesRoutes

// function myMiddleware(request, response, next){
//   console.log('You just passed through Middleware!')
//   console.log(request.body)

//   // if(!request.body.isAdmin){
//   //   return response.json({message: "User unauthorized"})

//   // }

//   // Function that allows the next step
//   next()

// }


// routes get params

// usersRoutes.get('/message/:id/:user', (request, response) => {
  //   //destructuring
  //   const {id, user} = request.params
  //   response.send(`
  //     message ID: ${id}
  //     for user: ${user}
  //   `)
  // })
  
  // routes get query
  // usersRoutes.get('/users', (request, response) =>{
    //   const {page, user} = request.query
  //   response.send(`Page ID: ${page}. User: ${user}`)
  // })


  // routes post body
  //myMiddleware, ...