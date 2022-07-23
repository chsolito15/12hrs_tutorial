// DELETE request

fetch('https://my-burger-api.herokuapp.com/burgers/28',{
    method: 'DELETE'
})

.then(reponse => reponse.json())
.then(result =>{
    console.log('Success', result);
})
.catch(error =>{
    console.error('Error', error);
});