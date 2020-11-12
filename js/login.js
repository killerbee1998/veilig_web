const ROOT_URL = 'https://mighty-anchorage-78746.herokuapp.com/'

let email= ''
let pass = ''

jQuery(() => {
    $('#btn-submit').on('click', () =>{
        email = $('#exampleInputEmail1').val()
        pass = $('#exampleInputPassword1').val()
        login(ROOT_URL+"account/login", {email: email, pass: pass})
        .then( data =>{localStorage.setItem('login_data', JSON.stringify(data))})
        .then(data => console.log(JSON.parse(localStorage.getItem('login_data'))))
    })    
})

async function login(url, data) {
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