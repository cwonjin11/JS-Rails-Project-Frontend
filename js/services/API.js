
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


          // const {id, name, image, mezosoic_era_id, diets, height, length, weight, desc} = dinosaur
          // new Dinosaur(id, name, image, mezosoic_era_id, diets, height, length, weight, desc)
          })
        }) 
    }

  





    /// fetching all eras era
    // static ALL_DINOSAURS_BY_ERA_URL = "http://localhost:3000/mezosoic_eras/${id}/dinosaurs"
    static MESOZOIC_ERA_URL = "http://localhost:3000/mezosoic_eras"

    static createEras() {
      // fetch(this.ALL_DINOSAURS_BY_ERA_URL)
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
      
      // let input = {

      // let submit 
    


      // let name = e.target.name.value
      // let image = e.target.image.value
      // let mezosoic_era_id = e.target.mezosoic_era_id.value
      // let diets = e.target.diets.value
      // let height = e.target.height.value
      // let length = e.target.length.value
      // let weight = e.target.weight.value
      // let desc = e.target.desc.value
 
      // let name 
      // let image 
      // let mezosoic_era_id 
      // let diets 
      // let height 
      // let length 
      // let weight 
      // let desc 

      
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

      // const value = data.value.trim()
      // let data = { //name, image, mezosoic_era_id, diets, height, length, weight, desc
      //   name = e.target.name.value,
      //   image = e.target.image.value,
      //   mezosoic_era_id = e.target.mezosoic_era_id.value,
      //   diets = e.target.diets.value,
      //   height = e.target.height.value,
      //   length = e.target.length.value,
      //   weight = e.target.weight.value,
      //   desc = e.target.desc.value,
      //   submit = e.target.submit
      // }
        

      //       //for nested attributes
      //           // 'piglets_attributes': [{
      //           //   'name': event.target.piglet.value,
      //           //   'color': event.target.color.value,
      //           //   'sex': event.target.sex.value,
      //           //   'cuteness_factor': event.target.cuteness.value
             
      //           // }] 
      // };

      // const getInput = document.getElementsByClassName("input-text") 
      // if (getInput.length.val() == '') console.log("zzzzzz", getInput)
      // if (input.length == 0) alert ("input cannot be empty")
      if ( data.name == 0 || data.image == 0 || data.mezosoic_era_id == 0 || data.diets == 0 ||
         data.height == 0 || data.size == 0 || data.weight == 0 || data.desc == 0) {
        alert("input can not be empty");
        console.log("Hey, if inputs not filled, No post requested!!!", data.name, data.image, data.mezosoic_era_id, data.diets, data.height, 
         data.size, data.weight, data.desc )
      } else {
      // if (image.length.value == 0) 
      // if (mezosoic_era_id.length.value == 0) 
      // if (diets.length.value == 0) 
      // if (height.length.value == 0) 
      // if (length.length.value == 0) 
      // if (weight.length.value == 0) 
      // if (desc.length.value == 0) 
     
      
      
  


      // let name //= e.target.name.value
      // let image //= e.target.image.value
      // let mezosoic_era_id //= e.target.mezosoic_era_id.value
      // let diets //= e.target.diets.value
      // let height //= e.target.height.value
      // let length //= e.target.length.value
      // let weight //= e.target.weight.value
      // let desc //= e.target.desc.value

// if (name.length || image.length || mezosoic_era_id.length || diets.length || height.length || length.length || weight.length || desc.length == 0) {

//   {alert("input cannot be empty");}
//   // console.log (name.length, image.length, mezosoic_era_id.length, diets.length, height.length, length.length, weight.length, desc.length)}
 
// //       // if (name.val().val() == '') alert("Input can not be blank")
  
// else {
  // let data = {//name, image, mezosoic_era_id, diets, height, length, weight, desc
  //   'name': e.target.name.value,
  //   'image': e.target.image.value,
  //   'mezosoic_era_id': e.target.mezosoic_era_id.value,
  //   'diets': e.target.diets.value,
  //   'height': e.target.height.value,
  //   'length': e.target.length.value,
  //   'weight': e.target.weight.value,
  //   'desc': e.target.desc.value,
  //   'submit': e.target.submit}
      
        // || image.length || mezosoic_era_id.value.length || diets.value.length || height.value.length || length.value.length || weight.value.length || desc.value.length 
      // Post fetch and send it to back end
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
          // })
        })

      } //close if conditions. 

          // .catch(error => {
          //   console.error('There has been a problem with your fetch operation:', error);
          //   alert("I am an alert box!");
          // });
    }; // close preventDefault




// ===========================================






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










}; //close all



    // constructor(baseURL){
    //   this.baseURL = baseURL
    // }
  
    // getAllEras = () => fetch(`${this.baseURL}/mezosoic_eras`).then(resp => resp.json())
  
    // getDinosByEra = (id) => fetch(`${this.baseURL}/mezosoic_eras/${id}/dinosaurs`).then(resp => resp.json())
  
    // updateStockQuantity = (id) => fetch(`${this.baseURL}/sunglasses/${id}`, {method: "PATCH"}).then(resp => resp.json())

  
