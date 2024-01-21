import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const Userschema = mongoose.Schema({
    firstname: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    gender: { type: String, required: true, trim: true },
    contact: { type: Number, required: true, unique: true, trim: true },
    age: { type: Number, required: true, trim: true },
    password: { type: String, required: true, unique: true, trim: true },
    confrimpassword: { type: String, required: true, trim: true },
    tokenkey: [{ jsontoken: { type: String, required: true, trim: true } }]

})


// Create and store for jsonwebToken in mongodb  database 

Userschema.methods.getTokenfun = async function () {
    try {
        const jsonwebToken = jwt.sign({ _id: this._id }, process.env.SCERET_KEY)

        this.tokenkey = this.tokenkey.concat({ jsontoken: jsonwebToken })

        let token = await this.save()


        return jsonwebToken

    }
    catch (err) {
        console.log('This error create for getTokenfun in model.js')
        console.log(err)
    }
}



Userschema.pre('save', async function (next) {
    if (this.isModified("password")) {

        this.password = await bcrypt.hash(this.password, 10)
        this.confrimpassword = await bcrypt.hash(this.confrimpassword, 10)

    }
    next()
})


const Usermodel = mongoose.model('UserData', Userschema)

export default Usermodel










