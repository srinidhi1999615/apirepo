
const express = require("express");


const app = express();
const port = 8000; // env can be used

app.get("/", (req,res) => {
 return res.send("Welcome to the Indian states api")
});

  app.get("/getStates",(req,res)=>{
    let statesObj =
    {
        "AN":"Andaman and Nicobar Islands",
        "AP":"Andhra Pradesh",
        "AR":"Arunachal Pradesh",
        "AS":"Assam",
        "BR":"Bihar",
        "CG":"Chandigarh",
        "CH":"Chhattisgarh",
        "DN":"Dadra and Nagar Haveli",
        "DD":"Daman and Diu",
        "DL":"Delhi",
        "GA":"Goa",
        "GJ":"Gujarat",
        "HR":"Haryana",
        "HP":"Himachal Pradesh",
        "JK":"Jammu and Kashmir",
        "JH":"Jharkhand",
        "KA":"Karnataka",
        "KL":"Kerala",
        "LA":"Ladakh",
        "LD":"Lakshadweep",
        "MP":"Madhya Pradesh",
        "MH":"Maharashtra",
        "MN":"Manipur",
        "ML":"Meghalaya",
        "MZ":"Mizoram",
        "NL":"Nagaland",
        "OR":"Odisha",
        "PY":"Puducherry",
        "PB":"Punjab",
        "RJ":"Rajasthan",
        "SK":"Sikkim",
        "TN":"Tamil Nadu",
        "TS":"Telangana",
        "TR":"Tripura",
        "UP":"Uttar Pradesh",
        "UK":"Uttarakhand",
        "WB":"West Bengal"
    }
return res.send(statesObj)
})


app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server running on ${port}`);
  }
});
