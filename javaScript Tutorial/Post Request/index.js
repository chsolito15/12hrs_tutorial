// POST requests
// able to post data to an api

const data = {
    id: 29,
    name: "Hatch",
    restaurant: "Whatburger",
    web: "www.whataburger.com",
    description: "burger cheese",
    ingredients: [
      "beef",
      "cheese",
      "bacon",
      "hatch green chiles",
      "mayonnaise"
    ],
    addresses: [
      {
        "addressId": 0,
        "number": "984",
        "line1": "388 E Stacy Rd",
        "line2": "Allen, TX",
        "postcode": "75002",
        "country": "USA"
      }
    ]
  }

fetch('http://my-burger-api.herokuapp.com/burgers',{

method: 'POST',
headers: {
    'Content-type': 'application/json',
},
body: JSON.stringify(data),
})
.then(response => response.json())
.then(data =>{
    console.log('Success',data)
})
.catch((error) =>{
    console.error('Error', error)
})