let login_btn = document.getElementById('login')
let Register_btn = document.getElementById('register')
 
 
//  Login btn  
login_btn.addEventListener('mousedown', (e) => {


    Register_btn.style.backgroundColor = 'blue'
    Register_btn.style.color = 'white'
    console.log('mouse down')


})
login_btn.addEventListener('mouseup', (e) => {
    Register_btn.style.backgroundColor = 'white'
    Register_btn.style.color = 'blue'
    console.log('mouse up ')

})

 


 








//  Regex  in form field us
let firstname = document.getElementById('firstname')
let last_name = document.getElementById('lastname')
let email = document.getElementById('email')
let contact = document.getElementById('contact')
let age = document.getElementById('age')
let password = document.getElementById('password')
let confrimpassword = document.getElementById('confrimpassword')
let submit = document.getElementById('submit')
let male = document.getElementById('male')
let female = document.getElementById('female')



let error_box = document.getElementById('errorbox')
let error_message = document.querySelector('.errormessage')
let cancel_btn = document.querySelector('.cancel_btn')

//  vidate first and last name field 

//  define global variable 
let validatefirstname;
let validatelastname;
let validateContact;
let validateage;
let validateemail;
let validatepassword;
let confrimpasswordvalidate

//  First name is validation 
const namevalidate = () => {
    let regex = /^([a-zA-Z]{2})([a-zA-Z ]+)$/
    let test = regex.test(firstname.value)
    if (test == true) {

        console.log(regex.exec(firstname.value))
        validatefirstname = true

        error_box.style.top = '-310px'

    }
    else if (firstname.value == "") {

        error_box.style.top = '-310px'
        console.log(' empty field ')
    }



    else {

        validatefirstname = false
        validatelastname




        error_box.style.top = '0px'
        error_message.innerHTML = `<p>First Name must be alphabetic only Name must be more than two characters Space is not allowed at the beginning </p>`

    }


}
const lastnamenamevalidate = () => {
    let regex = /^([a-zA-Z]{1})([a-zA-Z ]+)$/
    let test = regex.test(last_name.value)
    if (test == true) {

        console.log(regex.exec(last_name.value))
        validatelastname = true

        error_box.style.top = '-310px'

    }
    else if (last_name.value == "") {

        error_box.style.top = '-310px'
        console.log(' empty field ')
    }



    else {

        validatelastname = false

        console.log(regex.exec(last_name.value))



        error_box.style.top = '0px'
        error_message.innerHTML = `<p> Last Name must be alphabetic only Name must be more than one characters Space is not allowed at the beginning </p>`

    }
}



//   Cobtact validate  function 
const contactvalidatefun = () => {
    let regex = /^\d+$/

    let test = regex.test(contact.value)
    if (test == true) {

        console.log(regex.exec(contact.value))
        validateContact = true

        error_box.style.top = '-310px'

    }
    else if (contact.value == "") {
        error_box.style.top = '-310px'
    }
    else {
        validateContact = false
        console.log('contact validate is fail')
        error_box.style.top = '0px'
        error_message.innerHTML = `<p> contact must be Nuber only  Space is not allowed </p> `
    }
}



//  Age validate  function 

const agevalidatefun = () => {


    if (age.value >= 18 && age.value <= 50) {

        validateage = true

        error_box.style.top = '-310px'
        console.log('if conditions')

    }
    else if (age.value == "") {
        error_box.style.top = '-310px'
    }
    else {
        validateage = false
        error_box.style.top = '0px'
        console.log('first else')
        error_message.innerHTML = `<p> People in the age group of 18 to 50 can register this form </p>`
    }

}


//  Email validate function 



const emailvalidatefun = () => {
    let regex = /^([\w\.\-]+)@([\w\.\-]+)\.([a-zA-Z]{2,7})$/
    console.log(email.value)
    let test = regex.test(email.value)
    if (test == true) {
        validateemail = true
        console.log(regex.exec(email.value))
        validateemail = true

        error_box.style.top = '-310px'

    }
    else if (email.value == "") {
        error_box.style.top = '-310px'
    }
    else {
        validateemail = false
        error_box.style.top = '0px'
        error_message.innerHTML = `<p> Email validation fail </p>
        <p>Email id Syntax  amitkumar@gmail.com</p>
         <br>
        <p> use underscore ,hyphen, Number ,Alphabet ,point</p>
         <p> Space is not allowed </p>`

    }
}



//    Password validate function 
const passwordvalidatefun = () => {
    let regex = /([a-zA-Z0-9]+)([\W+])([a-zA-Z0-9]+)$/

    console.log(password.value)
    let test = regex.test(password.value)
    if (test == true) {
        validatepassword = true
        console.log(regex.exec(password.value))


        error_box.style.top = '-310px'

    }
    else if (password.value == "") {
        error_box.style.top = '-310px'
    }
    else {
        validatepassword = false
        error_box.style.top = '0px'

        error_message.innerHTML = `<p> password validation fail </p>
        <p>password id Syntax </p>
        <p> alphabet-number , nonwordCharacter , alphabet-numbe r</p>
        <p> Space is not allowed</p>`

    }
}

//  Confrim vaidate function 
const confrimpasswordvalidatefuns = () => {
    console.log(password.value)
    console.log(confrimpassword.value)
    if (password.value == confrimpassword.value) {
        confrimpasswordvalidate = true
        console.log('match password ')
        error_box.style.top = '-310px'

    }

    else if (confrimpassword.value == "") {
        error_box.style.top = '-310px'
    }
    else {
        error_message.innerHTML = 'can not match password'
        confrimpasswordvalidate = false
        error_box.style.top = '0px'
    }

}

const setmalevalue = (e) => {
    e.target.value = 'Male'

}
const setfemalevalue = (e) => {
    e.target.value = "Female"
}


firstname.addEventListener('input', namevalidate)
last_name.addEventListener('input', lastnamenamevalidate)
contact.addEventListener('input', contactvalidatefun)
age.addEventListener('input', agevalidatefun)
email.addEventListener('input', emailvalidatefun)
password.addEventListener('input', passwordvalidatefun)
male.addEventListener('click', setmalevalue)
female.addEventListener('click', setfemalevalue)
confrimpassword.addEventListener('input', confrimpasswordvalidatefuns)


cancel_btn.addEventListener('click', function () {

    error_box.style.top = '-310px'
})

submit.addEventListener('click', (e) => {

    console.log(male.value)
    console.log(female.value)

    if (firstname.value == "" || last_name.value == "" || email.value == "" || contact.value == "" || age.value == "" || password.value == "" || confrimpassword.value == "") {

        e.preventDefault()
        error_box.style.top = '0px'
        error_message.innerHTML = ` may be some fields are empty`
    }




    else if (validatefirstname == false || validatelastname == false || validateContact == false || validateage == false || validateemail == false || validatepassword == false) {

        e.preventDefault()
        error_message.innerHTML = '<p>There is some error in any field of the form, please check the field of the form again.</p>'
        console.log('if')
        error_box.style.top = '0px'
    }
    else if (male.value == 'on' && female.value == "on") {

        e.preventDefault()
        error_message.innerHTML = '<p> Set the gender</p>'
        console.log('gender')
        error_box.style.top = '0px'
    }
    else if (confrimpasswordvalidate == false) {

        error_message.innerHTML = '<p> your password can not match write the confrim password again</p>'
        e.preventDefault()
        error_box.style.top = '0px'
        console.log('else if')
    } else {
        let conf = confirm('Are your sure submit your data')
        if (conf == false) {
            e.preventDefault()
        }




    }

})
















