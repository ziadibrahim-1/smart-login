
//signUp page

const userName = document.querySelector('#name')
const signUpEmail= document.querySelector('#signup_email')
const signUpPassword = document.querySelector('#signup_password')
const signUpBtn = document.querySelector('#signupbtn')
const errorMsg = document.querySelector('#errormsg')
let users=[];
if (JSON.parse(localStorage.getItem('usersInfo')) != null){
    users = JSON.parse(localStorage.getItem('usersInfo'))
}



function signUp(){
    if (userName.value == '' || signUpEmail.value == '' || signUpPassword.value == '' ){
        errorMsg.innerHTML = `<span class="text-danger my-3 ">All inputs are required</span>`
    }else {
        for (let i = 0; i < users.length; i++) {
            if(users[i].email == signUpEmail.value){
                errorMsg.innerHTML = `<span class="text-danger my-3 ">Email already exist</span>`
                return false
            }
        }
        
        getUsersData()
        errorMsg.innerHTML = `<span class="text-success my-3 ">success</span>`
    }
}
function getUsersData() {
    let user ={
        name:userName.value,
        email:signUpEmail.value,
        password:signUpPassword.value
    }
    users.push(user)
    localStorage.setItem('usersInfo',JSON.stringify(users))
    location.href ='./index.html'
}




signUpBtn?.addEventListener('click',function(){
    signUp();
})
//signIN page
const signInEmail=document.querySelector('#signInEmail')
const signInPassword =document.querySelector('#signInPassword')
const loginBtn =document.querySelector('#loginBtn')
const checkedUser =document.querySelector('#checkedUser')


function signIn(){
    
    if (signInEmail.value == '' || signInPassword.value == '' ){
        checkedUser.innerHTML = `<span class="text-danger my-3 ">All inputs are required</span>`
    }else{
        for (let i = 0; i < users.length; i++) {
            if(users[i].email == signInEmail.value && users[i].password == signInPassword.value){
                localStorage.setItem('currentUser',JSON.stringify(users[i].name))
                checkedUser.innerHTML = `<span class="text-success my-3 ">success</span>`
                location.href ='./home.html'
                return
            }else{
                checkedUser.innerHTML = `<span class="text-danger my-3 ">Email or password is not correct</span>`
                
            }
        }
    }
}
loginBtn?.addEventListener('click',function(){
    signIn();
})
//home page
const homeuser =document.querySelector('#homeuser')

let loggedUser = JSON.parse(localStorage.getItem("currentUser"))
homeuser.innerHTML = `<h2 class="text-info">Welcome ${loggedUser}</h2>`


