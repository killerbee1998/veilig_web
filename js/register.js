const ROOT_URL = 'https://mighty-anchorage-78746.herokuapp.com/'

let email= ''
let pass = ''

jQuery(() => {
    $('#btn-submit').on('click', () =>{
        email = $('#exampleInputEmail1').val()
        pass = $('#exampleInputPassword1').val()
        register(ROOT_URL+"account/register", {email: email, pass: pass}).then( data =>{console.log(data)})
    })    
})

async function register(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data) 
    });
    return response.json(); 
    
} 