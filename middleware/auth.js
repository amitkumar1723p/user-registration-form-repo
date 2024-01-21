import jwt from 'jsonwebtoken'
import Usermodel from "../Model/model.js"
const validuser = async (req, res, next) => {

    try {
        const jwt_token = req.cookies.jwt
        const verifyUser = jwt.verify(jwt_token, process.env.SCERET_KEY)
        const userdata = await Usermodel.findOne({ _id: verifyUser._id })
        req.jwt_token = jwt_token
        req.userdata = userdata

        next()
    }
    catch (error) {
        res.status(401).send('<h1> Login please </h1>')
        console.log(error)
    }
}
export default validuser