let email= ''
let pass = ''
jQuery(() => {
    $('#btn-submit').on('click', () =>{
        email = $('#exampleInputEmail1').val()
        pass = $('#exampleInputPassword1').val()
        console.log(email, pass)
    })    
})
