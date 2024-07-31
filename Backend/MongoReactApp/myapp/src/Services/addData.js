let user = {
    email:'email',
    password:'password'
}
async function fun(){
    const response = await fetch('http://localhost:4000/SIGNUP',{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
        'Content-Type':'application/json'
        }
    })
    console.log(await response.json()) ;
}
fun() ;