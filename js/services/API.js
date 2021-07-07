class API { 

    static ALL_DINOSAURS_URL = "http://localhost:3000/dinosaurs"
    static MESOZOIC_ERA_URL = "http://localhost:3000/mezosoic_eras"


    static addDinosaurs () {
      fetch(this.ALL_DINOSAURS_URL)                               
      .then(response => response.json()) 
      .then(dinosaurArray => { //console.log(">>", dinosaurArray)
        // console.log("a")    // "asynchronous" example
        dinosaurArray
        .sort((a, b) => {                                             //sort by name in alphabetical order
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
            if (nameA < nameB) {
            return -1;
          }                                                          // Uncomment to sort dinosaurs in alphbetical order
          if (nameA > nameB) {
            return 1;
          }//textA.name > textB.name ? 1 : -1)
        })
        .forEach(dinosaur => { //console.log("single dino", dinosaur.name)    //we are iterating over the json data that we get back from our api
            // debugger
            const newDinosaur = new Dinosaur(dinosaur)        //dinosaur(backend) to Dinosaur(frontend)
            newDinosaur.renderDinosaur(dinosaur)              //dinosaur(frontend) to DOM   
            Dinosaur.all.push(newDinosaur)
        })
      })
      //console.log("b")    // "asynchronous" example
    
    }


  // factoring out by using nested json data 

    static addEras() {
      fetch(this.MESOZOIC_ERA_URL)
      .then(resp => resp.json())
      .then(eraArray => { //console.log("all eras in array", eraArray)
          eraArray.forEach(era => { //console.log("era.dinosaurs", era.dinosaurs)          
            const newMezosoicEra = new MezosoicEra(era)              // 'era' from the backend to MezosoicEra, the front end.
            newMezosoicEra.renderMezosoicEra(era)                    //include: :dinosaurs from nested json
 
          era.dinosaurs.forEach( dinosaur => { //console.log("dinosaur", dinosaur)   //using nested json 
            const newDinosaur = new Dinosaur(dinosaur)              //dinosaur(backend) to Dinosaur(frontend)
            newDinosaur.renderDinosaur(dinosaur)                    //dinosaur(frontend) to DOM
            })              
          })
      })
    }
   

 // The form handler ;; Add dinos & Post Fetch   
    static newDinoForm(e) { e.preventDefault();
      // console.log("Submit default is refreshing the page. 'e.PreventDefault();' will prevent refreshing the page and show this message", e)
      // debugger
      let data = {   // this data will send to my api 
        'name': e.target.name.value,
        'image': e.target.image.value,
        'mezosoic_era_id': e.target.mezosoic_era_id.value,
        'diets': e.target.diets.value,
        'height': e.target.height.value,
        'size': e.target.size.value,
        'weight': e.target.weight.value,
        'desc': e.target.desc.value,
        'submit': e.target.submit
      }

      if ( data.name == 0 || data.image == 0 || data.mezosoic_era_id == 0 || data.diets == 0 ||
         data.height == 0 || data.size == 0 || data.weight == 0 || data.desc == 0) {
        alert("input can not be empty");
      } else { 
              // fetch("http://localhost:3000/dinosaurs", {
              fetch(`${API.ALL_DINOSAURS_URL}`, {
                    method: 'POST',                                     //sending a POST request to my API         
                    headers: {'Content-Type': 'application/json'},   
                    body: JSON.stringify(data)                          //how we are going to send data
                  })
              .then(response => response.json())  
              .then(dinosaur => {
                const newDinosaur = new Dinosaur(dinosaur)
                newDinosaur.renderDinosaur(dinosaur)
                document.querySelector('.add-dino-form').reset()   //reset the form against preventDefault
                alert(`Dinosaur : "${data.name}" has been added`)
                document.querySelector('.container').style.display = "none"
                })
            }; //close if conditions. 
    }; // close preventDefault


  // Delete Fetch ### delete a Dinosaur ###
    static  deleteDino(e) {
      const id = e.target.dataset.id
      const byeDino = document.getElementById(id)
          fetch(`${this.ALL_DINOSAURS_URL}/${id}`, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" }
          })
          .then(response => response.json())
          .then(byeDino.remove())
    }

    
  
}; //close all

          

// ===========================================























  //===========================================================================================
    //Original
    // Fetching all eras without dinos 
    // static MESOZOIC_ERA_URL = "http://localhost:3000/mezosoic_eras"
    // static addEras() {
    //   fetch(this.MESOZOIC_ERA_URL)
    //   .then(resp => resp.json())
    //   .then(eraArray => { //console.log("all eras in array", eraArray)
    //       eraArray.forEach(era => { //console.log("single era",era)
    //         const{id, period} = era
    //         new MezosoicEra(id, period)
    //       })
    //   })
    // }
  //=====================================================================================









// .catch(error => {
//   console.error('There has been a problem with your fetch operation:', error);
//   alert("I am an alert box!");
// });


// static fetchAllPeriod() {
//     fetch(this.MESOZOIC_ERA_URL).then(response => response.json())
//     .then(fetchedPeriodArray => { console.log(fetchedPeriodArray);
    
//       // renderAllDinosaurs(fetchedArray)
    
//       // ****
//       // fetchedPeriodArray.forEach(arrayObj => { console.log(arrayObj)

//       //   const {id, name, image, mezosoic_era_id, diets, height, length, weight, desc} = dinosaur
//       //   new Dinosaur(id, name, image, mezosoic_era_id, diets, height, length, weight, desc)
  
//       // })
//     }) 
    
// }





  //   static fetchDinosByEra() {
  //     fetch(this.ALL_DINOSAURS_BY_ERA_URL).then(response => response.json())
  //     .then(fetchedDinoByEraArray => { console.log(fetchedDinoByEraArray);
  //       renderDinosByEra()
  //     }) 
  // }














    // constructor(baseURL){
    //   this.baseURL = baseURL
    // }
  
    // getAllEras = () => fetch(`${this.baseURL}/mezosoic_eras`).then(resp => resp.json())
  
    // getDinosByEra = (id) => fetch(`${this.baseURL}/mezosoic_eras/${id}/dinosaurs`).then(resp => resp.json())
  
    // updateStockQuantity = (id) => fetch(`${this.baseURL}/sunglasses/${id}`, {method: "PATCH"}).then(resp => resp.json())

  
