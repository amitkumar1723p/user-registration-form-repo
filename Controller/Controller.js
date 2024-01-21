import Usermodel from "../Model/model.js";
import "../Model/model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class Controller {
  static showresiterpage = (req, res) => {
    res.render("register");
  };

  static InsertData = async (req, res) => {
    try {
      const { password, confrimpassword } = req.body;
      if (password === confrimpassword) {
        const UserData = new Usermodel(req.body);

        //  Create json web token and save database

        const registertoken = await UserData.getTokenfun();
        res.cookie("jwt", registertoken, { httpOnly: true });

        let result = await UserData.save();

        return res.render("login");
      } else {
        return res.send("<h1> Password cannot match</h1>");
      }
    } catch (error) {
      res.send(error);
      console.log("This error crete insert document field");
      console.log(error);
    }
  };

  static showloginpage = (req, res) => {
    res.render("login");
  };

  static loginuser = async (req, res) => {
    try {
      const { email, password } = req.body;

      let result = await Usermodel.findOne({ email: email });

      if (result == null) {
        res.status(404).send(`<h1> This Email is not Match  </h1> <br> 
                   <h2> Please Check Your Email Id</h2>`);
      } else {
        const MatchHashPassword = await bcrypt.compare(
          password,
          result.password
        );

        if (MatchHashPassword) {
          //  Create token for login user
          const loginuser_createtoken = await result.getTokenfun();
          res.cookie("jwt", loginuser_createtoken, { httpOnly: true });

          res.render("homepage", { firstname: result.firstname });
        } else {
          res.status(404).send("<h1> Your password does not match </h1>");
        }
      }
    } catch (err) {
      console.log("This error genrate for login user controller ");
      console.log(err);
      return res.status(404).send(err);
    }
  };
  static homepage = (req, res) => {
    res.render("homepage");
  };
  static aboutpage = (req, res) => {
    res.render("about");
  };

  //  Single device logout

  static singlelogout = async (req, res) => {
    try {
      req.userdata.tokenkey = req.userdata.tokenkey.filter((element) => {
        return element.jsontoken !== req.jwt_token;
      });
      console.log(req.userdata.tokenkey);
      res.clearCookie("jwt");
      res.render("login");
      const result = await req.userdata.save();
      console.log(result);
    } catch (error) {
      console.log("This error is crete for singlelogout Controler");
      console.log(error);
      res.send(error);
    }
  };
  static alldevicelogout = async (req, res) => {
    try {
      req.userdata.tokenkey = [];
      res.clearCookie("jwt");
      res.render("login");
      const result = await req.userdata.save();
      console.log(result);
    } catch (error) {
      console.log("This error is crete for alldevicelogout Controller ");
      console.log(error);
      res.send(error);
    }
  };

  //   all device logout
}

export default Controller;
