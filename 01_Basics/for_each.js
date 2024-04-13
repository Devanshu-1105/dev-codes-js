// const coding = ["ruby","cpp","js","python"];

// coding.forEach ((items)=>{     //call back function
//     console.log(items);

// })

//How to access items inside an array object

const myCoding =[
    {
        languageName :"java",
        languageID: "java"
    },
    {
        languageName :"Python",
        languageID: "py"
    },

    {
        languageName :"javaScript",
        languageID: "js"
    }
]

myCoding.forEach((items)=>{
    console.log(items.languageID)
})
