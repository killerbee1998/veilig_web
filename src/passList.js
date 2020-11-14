const ROOT_URL = 'https://mighty-anchorage-78746.herokuapp.com/'

let data = JSON.parse(localStorage.getItem('login_data'))
let token = data.token
let key = data.key

console.log(data)
jQuery( () =>{
  displayPass(ROOT_URL+'store/displayPass', {token:token, authKey:key})
  .then( (response) =>{
    console.log(response)
  })
})


displayPass = async(url, data) => {
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