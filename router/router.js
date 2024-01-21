import express from 'express'
const router = express.Router()
import Controller from '../Controller/Controller.js'
import validuser from '../middleware/auth.js'


// Define routes 
router.get('/register', Controller.showresiterpage)
router.post('/register', Controller.InsertData)
router.get('/login', Controller.showloginpage)
router.post('/login', Controller.loginuser)


router.get('/', validuser, Controller.homepage)
router.get('/aboutpage', validuser, Controller.aboutpage)

//  Single device logout 
router.get('/logout', validuser, Controller.singlelogout)
router.get('/alldevicelogout', validuser, Controller.alldevicelogout)
//  all device logout 

export default router
