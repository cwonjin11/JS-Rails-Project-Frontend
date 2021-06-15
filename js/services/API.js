
class API {


  static ALL_DINOSAURS_URL = "http://localhost:3000/dinosaurs"
  static addDinosaurs() {

        fetch("http://localhost:3000/dinosaurs")
          .then(response => response.json())
          .then(dinosaurs => {
          // ****
            dinosaurs.forEach(dinosaur => { //console.log(dinosaur)
        
              const newDinosaur = new Dinosaur(dinosaur)
              newDinosaur.renderDinosaur(dinosaur)
              
          // const {id, name, image, mezosoic_era_id, diets, height, length, weight, desc} = dinosaur
          // new Dinosaur(id, name, image, mezosoic_era_id, diets, height, length, weight, desc)
          })
        }) 
    }


 // move adding dinos form here

 static newDinoForm(event){
  event.preventDefault()

  let data = {
    'name': event.target.name.value,
    'image': event.target.image.value,
    'mezosoic_era_id': event.target.mezosoic_era_id.value,
    'diets': event.target.diets.value,
    'height': event.target.height.value,
    'length': event.target.length.value,
    'weight': event.target.weight.value,
    'desc': event.target.desc.value,
    'submit': event.target.submit


    // 'piglets_attributes': [{
    //   'name': event.target.piglet.value,
    //   'color': event.target.color.value,
    //   'sex': event.target.sex.value,
    //   'cuteness_factor': event.target.cuteness.value
    // }] 
};


// write post fetch and send it to back end
fetch('http://localhost:3000/dinosaurs', {
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
        const newDinosaur = new Dinosaur(dinosaur)
        newDinosaur.renderDinosaur(dinosaur)

        document.querySelector('.add-dino-form').reset()
    // })
  })
}




// ===========================================






static fetchAllPeriod() {
    fetch(this.MESOZOIC_ERA_URL).then(response => response.json())
    .then(fetchedPeriodArray => { console.log(fetchedPeriodArray);
    
      // renderAllDinosaurs(fetchedArray)
    
      // ****
      // fetchedPeriodArray.forEach(arrayObj => { console.log(arrayObj)

      //   const {id, name, image, mezosoic_era_id, diets, height, length, weight, desc} = dinosaur
      //   new Dinosaur(id, name, image, mezosoic_era_id, diets, height, length, weight, desc)
  
      // })
    }) 
    
}





    static fetchDinosByEra() {
      fetch(this.ALL_DINOSAURS_BY_ERA_URL).then(response => response.json())
      .then(fetchedDinoByEraArray => { console.log(fetchedDinoByEraArray);
        renderDinosByEra()
      }) 
  }


}
    // constructor(baseURL){
    //   this.baseURL = baseURL
    // }
  
    // getAllEras = () => fetch(`${this.baseURL}/mezosoic_eras`).then(resp => resp.json())
  
    // getDinosByEra = (id) => fetch(`${this.baseURL}/mezosoic_eras/${id}/dinosaurs`).then(resp => resp.json())
  
    // updateStockQuantity = (id) => fetch(`${this.baseURL}/sunglasses/${id}`, {method: "PATCH"}).then(resp => resp.json())

  
