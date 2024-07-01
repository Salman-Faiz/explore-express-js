const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const users = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "janesmith@example.com"
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "email": "alicejohnson@example.com"
    },
    {
      "id": 4,
      "name": "Bob Brown",
      "email": "bobbrown@example.com"
    },
    {
      "id": 5,
      "name": "Charlie Davis",
      "email": "charliedavis@example.com"
    }
  ]
  

app.get('/',(req,res)=>{
    res.send('User management Server is running');
})

app.get('/users',(req,res)=>{
    res.send(users);
})
app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
})