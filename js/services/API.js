class API {


  // fetch all dinosaurs without era division
    static ALL_DINOSAURS_URL = "http://localhost:3000/dinosaurs"
    static addDinosaurs() {

        fetch(this.ALL_DINOSAURS_URL)
        .then(response => response.json())
        .then(dinosaurs => {
          // ****
            dinosaurs.forEach(dinosaur => { //console.log(dinosaur)
              const newDinosaur = new Dinosaur(dinosaur)
              newDinosaur.renderDinosaur(dinosaur)     
              Dinosaur.all.push(newDinosaur)

          })
        }) 
    }


    /// fetching all eras era without dinos
    static MESOZOIC_ERA_URL = "http://localhost:3000/mezosoic_eras"
    static createEras() {
      fetch(this.MESOZOIC_ERA_URL)
      .then(resp => resp.json())
      .then(eras => {
          eras.forEach(era => {
            const{id, period} = era
            new MezosoicEra(id, period)
          })
      })
    }



 // adding dinos 
    static newDinoForm(e) { e.preventDefault()

      let data = { //name, image, mezosoic_era_id, diets, height, length, weight, desc
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
        console.log("Hey, if inputs not filled, No post requested!!!", data.name, data.image, data.mezosoic_era_id, data.diets, data.height, 
         data.size, data.weight, data.desc )
      } else {
              fetch(ALL_DINOSAURS_URL, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(data)
                  })
                  // grab our fetch response
              .then(response => response.json())
              .then(dinosaur => {

                    // const {id, name, image, mezosoic_era_id, diets, height, length, weight, desc} = dinosaur
                    // new Dinosaur(id, name, image, mezosoic_era_id, diets, height, length, weight, desc)
                    
                    // dinosaurs.forEach(dinosaur => {
                      // newDinosaur = > dino from frontend
                // dinosaur => dino from the backend
                const newDinosaur = new Dinosaur(dinosaur)
                newDinosaur.renderDinosaur(dinosaur)
                document.querySelector('.add-dino-form').reset()
                });
            }; //close if conditions. 


    }; // close preventDefault

  }; //close all


          // const {id, name, image, mezosoic_era_id, diets, height, length, weight, desc} = dinosaur
          // new Dinosaur(id, name, image, mezosoic_era_id, diets, height, length, weight, desc)
          

// ===========================================



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

  
