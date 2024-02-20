const express = require('express')
const FrontController = require('../controllers/FrontController')
const CourseController = require('../controllers/CousreController')
const { countDocuments } = require('../models/course')
const router = express.Router()
const ChechUserAuth = require('../middleware/auth')
const AdminController = require('../controllers/Admin/AdminController')

//routes
//FrontController
router.get('/',FrontController.login)
router.get('/register',FrontController.register)
router.post('/createUser',FrontController.createUser)
router.get('/dashboard', ChechUserAuth, FrontController.dashboard)
router.get('/contact',ChechUserAuth,FrontController.contact)
router.get('/about',ChechUserAuth,FrontController.about)
router.post('/verifylogin',FrontController.verifylogin)
router.get('/logout',FrontController.logout)
router.get('/profile',ChechUserAuth,FrontController.profile)
router.post('/changepassword',ChechUserAuth,FrontController.changepassword)
router.post('/updateprofile',ChechUserAuth,FrontController.updateprofile)


//CourseController
router.post('/createCourse',ChechUserAuth,CourseController.createCourse)
router.get('/couseDisplay',ChechUserAuth,CourseController.display)
router.get('/view/:id',ChechUserAuth,CourseController.view)
router.get('/edit/:id',ChechUserAuth,CourseController.edit)
router.post('/courseupdate/:id',ChechUserAuth,CourseController.update)
router.get('/delete/:id',ChechUserAuth,CourseController.delete)



//admincontrollerii9
router.get('/admin/display',ChechUserAuth,AdminController.display)
router.get('/admin/course/view/:id',ChechUserAuth,AdminController.courseview)
// route.get('/admin/course/delete',ChechUserAuth,AdminController.coursedelete)
router.post('/updatestatus/:id',ChechUserAuth,AdminController.updatestatus)




module.exports = router