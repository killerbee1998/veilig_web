try{
    let data = localStorage.getItem('login_data')
    console.log(data)
    window.location.replace('./public/passList.html')
}catch(err){
    console.log(err)
    window.open('../public/login.html')
}