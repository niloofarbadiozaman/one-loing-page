let userNameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')
let modal = document.querySelector('.modal')

function dataValidation() {
    let userNameValue = userNameInput.value
    let passwordValue = passwordInput.value

    if (userNameValue.length < 12 || passwordValue.length < 8) {
        // alert('Error')
        modal.style.background = 'rgb(223, 28, 28)'
        modal.innerHTML = 'لطفا اطلاعات را به درستی وارد نمایید'
        modal.style.display = 'inline'
    } else {
        modal.style.background = 'green'
        modal.innerHTML = 'لاگین با موفقیت انجام شد'
        modal.style.display = 'inline'
    }

    setTimeout(function () {
        modal.style.display = 'none'
    }, 3000)

    console.log(userNameValue,passwordValue)
}










// function datavalidation(){
//     let userNameValue = userNameInput.value
//     let PasswordValue = PasswordInput.value
    
//     if(userNameValue.length<12 || PasswordValue.length<8)
//     {
//         modal.style.display='inline'
       
//     } else {
//         modal.style.background='rgb(2, 146, 0)'
//         modal.innerHTML='لاگین با موفقیت انجام شد'
//         modal.style.display='inline'
//     } 
//     setTimeout(function(){
//         modal.style.display='none'
//     },3000)
//     console.log(userNameValue,PasswordValue)
// }

