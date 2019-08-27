
document.addEventListener("DOMContentLoaded", () => {
   /*
    // the way you spell caps and all matters else it wouldnt work 
    // we check that JavaScript is working in the browser Console.
    console.log("Hello World")

//  function and how there work

    function helloWorld(str1, str2) {
        return `${str1} ${str2}`
         
     }
    console.log(helloWorld("Check Str 1", "Charlie"))
    
 */


/* If we want to turn the above code into a FUNCTION. 

  let helloWorld = (str1, str2) => {
     return `${str1} ${str2}`
  
  */

/*
// Hositing
   const banana = "banana"
console.log("banana", `${banana}`)
               //  we get an error here becasue the banana was already declared.
               // => banana undefined
               //  1st pass over the code. JavaScipt remebers declarition that has let, var, const. 
               // But does not assign them.  Then on the second pass it assign it. 

               // BUT Function. it remebers the whole function and it code, thus assigns it on the 1st pass
*/
               /*
// Callbacks

      //let callbackCode = function (number) {
         //return number + 2
      //}
      // As an arrow function. 
let callbackCode = number => number + 2

      // Note that  .map and .fliter take in function and all backs. 
      
      // this is callback in use. 

      //   This is all the same

      //console.log([1, 2, 3, 4, 5].map(callbackCode))
      // you can even add a whole function in here. 
      // I.E 
      console.log([1, 2, 3, 4, 5].map(function (callbackCode) {
         return callbackCode + 2
      }))

            // . map  return a new array

 */

 /*

 // Filter . 
      let array = [2, 3, 4, 5, 6, 6, 7, 8, 9, 12]
         // keep all even 

       let result = array.filter(function (element) {
            //element is the elements in the array.
         return element % 2 === 0
      })
      
      // Line 61 as a arrow function. 
      let result = array.filter((element) => element % 2 === 0)
   

// console.log(result)

/*
// Note:  variables can store functions inside of them 
// I.E.
         let filterArray = function(arr){
            return arr.filter(el => el % 2 === 0)
            //  or 
            // return arr.filter(result)

         }
         console.log(filterArray([0, 2, 21, 0, 85, 86]))
   
// Function are 1st class citizens becasue we there can be used 
// in another function.  used in objectives, call other functions.

*/
   
   // Printing to the DOM. 


//  const zooAnimals = ["jerb the Bird", "jerold the squirrel", "simon the squid", "Tara the elephant", "jeff the Wizard"]
 // we need to inject this into the Dom.  In this case we have an ID of Zoo-animmals
   // zooAnimal was refactor to represent real life data.
  /*
   const zooAnimals = [
      {
      name: "Jerb",
      species: "Bird",
      legs: 2,
      hobby: "flying",
      image: "data:image/jpeg;base64,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"

   },
      {
         name: "Jerold", 
         species: "squirrel",
         legs: 4,
         hobby: "Nuts",
         image: "data:image/jpeg;base64,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"
   },
      {
         name: "Simon",
      species: "squid",
      legs: 2,
      hobby: "squidding around",
      image: "data:image/jpeg;base64,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"           
   },
      
      {
         name: "Tara",
         species: "elephant",
         legs: 4,
         hobby: "stomping around",
         image: "https://i.ytimg.com/vi/SPS7Ai_tpcc/maxresdefault.jpg"
      },

      {
         name:  "Jeff",
         species: "Wizard",
         legs: 2,
         hobby: "minister of Magic",
         image: "https://i.somethingawful.com/u/russ/goldmine44/clocksucker.gif"
      },
   
   ]

   */

   const cage = document.querySelector("#zoo-animals");
    
 // calling the created function

      // >>>>>>>>>> Set up to use POST <<<<<<<<
   const form = document.querySelector("#create-animal");
//  Event Listern on form
   form.addEventListener("submit", (event) => {
            // when we click that submit button. Couple things need to happen. 

      event.preventDefault()   //event.preventDefault
      //console.log(event)
       console.log("event target", event.target[0].value)
    
      //save the data base 
      //show the new thing on the DOM
      // Fetch in the case takes 2 arguments.
      
      let name = event.target[0].value
      let species = event.target[1].value
      let legs = event.target[2].value
      let hobby = event.target[3].value
      let image = event.target[4].value

      fetch("http://localhost:3000/animals", {
         method: "POST",
         headers: {
            "content-Type":"application/json"
         },
         body: JSON.stringify({
            // note when you have matching Key and Varible. (I.E   name: name,  as better way it to just type =>  name,)
            // name,
            // species,
            // legs,
            // hobby,
            // image

         })
      })
         .then(Response => Response.json())
      .then(animal => console.log(animal))
   })

   // >>>>> Fetch<<<<<<<   Using Fetch to get data.

   //  // We modify right here so we can use the FETCH method
   function fetchAnimals() {
      fetch("http://localhost:3000/animals")
         // Most Load the Json Server for this to work
         //fetch return a PROMISE. if the fetch resolve or not
        
         // .then(function (Response) {
         //       // we want it to return as json
         //    return Response.json()
         // })
         // Or as arrow functions
         .then(Response => Response.json())
         // .then(console.log) .SAME AS .then(animals => console.log(animals))
         .then(animals => {
            animals.forEach(putAnimalOnDom)
         })
     }
     fetchAnimals()
      
      // NOW WE PUT EACH ANIMAL ON A DOM.
      function putAnimalOnDom(object) {
         const li = document.createElement('li')
          li.innerText = `${object.name} the ${object.species}`
        
          li.addEventListener("click", () => {
             const infoDiv = document.querySelector("#info-div")
             infoDiv.innerHTML += ` <h1> ${object.name} the ${object.species}</h1>
      
             <h2>legs: ${object.legs}</h2>
             <h2>species: ${object.species}</h2>
             <h2>hobby: ${object.hobby}</h2>
          
             <h2>Image:<h2> <img src="${object.image}">`
    
          })
          cage.append(li)
      }
   
   // <<<<<<<<<<<< Fetch<<<<<<<<<<  The End of FETCH


//    zooAnimals.forEach(function (object) {
//       //console.log("object", object);  


//       const li = document.createElement('li')
      
//      /* 1st option on how to present it in the DOM. 
       
//          li.innerText = object.name
      
//       =>
//                Bird
//                squirrel
//                squid
//                elephant
//                Wizard
//                */
//       //console.log("li", li) // We only put this here.. to show in the console.log

// // Option 2  > with concatination
//       li.innerText = `${object.name}  the  ${object.species}`
//          //  Attach an event Listner 
//       li.addEventListener("click", () => {
//          const infoDiv = document.querySelector("#info-div")
//          infoDiv.innerHTML += ` <h1> ${object.name} the ${object.species}</h1>
  
//          <h2>legs: ${object.legs}</h2>
//          <h2>species: ${object.species}</h2>
//          <h2>hobby: ${object.hobby}</h2>
      
//          <h2>Image:<h2> <img src="${object.image}">`
//           /*//  NOTE... Using just "=".. REASSIGN what is on the page IN THE DOM. 
//    Using just "+=".. ADD TO what is on the page, WHILE KEEPING WHAT IS ALREADY ON THE PAGE.
//      */
//          // Note: the way, the way you present the image your code in important
//       })
//       cage.append(li)
//    })

// // >>>>>>>>>>>>>>>> Using Fetch<<<<<<<<<<<<<<<<<<<<<
//     /* we currently have an array where we get our data. What fetch help us do is get the information from the server. ANCE the word FETCH */

}) // finish the document line