const Username= document.getElementById('Username')
const Password= document.getElementById('Password')
const LoginPage= document.getElementById('LoginPage')
const errorElement= document.getElementById('error')
LoginPage.addEventListener('submit',(e) =>{
  let message=[]
  if (Username.value===''|| Username.value==null){
    message.push('Name is Required')
  }

  if(Password.value.length <= 6){
    message.push('Password must be longer than 6 characters')
  }

  if(Password.value.length >= 6){
    message.push('Password must be less than 20 characters')
  }

  if (Password.value==='Password'){
    message.push('Password cannot be Password')
  }

  if (message.length > 0){
    e.preventDefault()
    errorElement.innerText = message.join(', ')
  }
})
