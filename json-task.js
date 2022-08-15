//Create your own resume data in JSON format

var myResume ={
    "basicdetails":{
        "name" :"JAGADEESWARAN G",
        "degree":"BE",
        "mobile":6380647261,
        "email":"jagadees.vg@gmail.com",
        "address":{
            "street":"3/134,Malaiyandipattanam",
            "village":"kuralkuttai",
            "town" :"Udumalpet",
            "District":"Tiruppur",
            "nationality":"Indian"
        }
    },
    "education":{
        "UG":{
            "degree":"BE",
        "department":"Mechanical Engg",
        "Yearofpassing":2015,
        "CGPA":8.2
        },
        "HSC":{
            "Board":"State Board",
            "YOP":2011,
            "percentage":84
        },
        "SSLC":{
            "Board":"State Board",
            "YOP":2009,
            "percentage":92
        }
    },
    "Skillsets":{
        "Tools":"HTML5,CSS3,JS,React.JS,Node.JS,express.JS,MongoDB",
        "Level":"Absolute Beginer"
    },
    "Other Details":{
    "Languages known":"Tamil,English,Kannada",
    "Hobbies":"Listening Music,Traveling to Temples"
    }
}
console.log(myResume);