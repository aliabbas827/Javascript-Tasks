let passwords =["rizz123","awesome.12","roman.123"];

function login(x){
   return passwords.includes(x)
  }

function passwordCheck(x){
  return new Promise((resolve,reject) =>{
    if(login(x)== true){  
    resolve()
}
    else{
      reject()
    }
  })

  .then(value =>{
    value = "Correct Password"
    console.log(value);   
  })
  .catch(error =>{
    error = "Incorrect password"
    console.log(error);
  });
} 

passwordCheck("rizz123")
passwordCheck("riz123")
passwordCheck("a123")

