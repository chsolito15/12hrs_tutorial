//PUT REQUEST
// Allows you to edit a object

const data = {
    id: 3,
    name: "The Good Burger",
    restaurant: "Good Burger",
    web: "https://en.wikipedia.org/wiki/Good_Burger",
    description: "Welcome to Good Burger, home of the Good Burger, can I take your order?",
    ingredients: [
      "bun",
      "tomato",
      "Ed's secret sauce",
      "lettuce",
      "onions",
      "cheese"
    ],
    addresses: [
      {
        addressId: 0,
        number: "123",
        line1: "Good Burger",
        line2: "437 Glendora Ave.",
        postcode: "CA",
        country: "United States"
      }
    ]
  }

function editData() {

    fetch('http://my-burger-api.herokuapp.com/burgers/3',{
        method:'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success', data)
    })
    .catch((error) =>{
        console.log('Error', error)
    })
}

editData()