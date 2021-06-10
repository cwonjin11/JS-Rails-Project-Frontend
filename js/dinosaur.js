
console.log("where is my dinosaurs");



class Dinosaur{


    static all = []
    ////  state😏🗃 of our Actors  -- On the Frontend
    ////  similar to  (@@all)


    constructor(name, imageURL, period, diets, height, length, weight, offense, defense){

            this.name = name,
            this.image = imageURL,
            this.period = period,
            this.diets = diets,
            this.height = height,
            this.length = length,
            this.weight = weight,
            this.offense = offense,
            this.defense = defense
                // this.catchPhrase = knownForSaying

        Dinosaur.all.push(this)
        //  Actor.all[]  <<  this  ~  @actor

    }

    
    //  DON'T need the Function Syntax for
    // sayCatchPhrase(){ 
        
    //     console.log(`${this.catchPhrase}`) 
    
    // }
    //sayCatchPhrase(){ console.log(`${this.catchPhrase}`) }
    // this.catchPhrase = function(){ console.log(`${knownForSaying}`) }




}
const allosaurus = new Dinosaur("Allosaurus", "https://www.google.com/search?sxsrf=ALeKk016aMSvhfNfUlk_i-WtS1yT14DukA:1623333394135&q=allosaurus+dinosaur&tbm=isch&source=iu&ictx=1&tbs=simg:CAESlwIJdQqiEbZqgk8aiwILELCMpwgaOgo4CAQSFPoL9Cu3GtgYkQ3bO7klri_16P68-GhqaxAGnIb3cIhvewM86KqINOZkvp6txaMOAuiAFMAQMCxCOrv4IGgoKCAgBEgRMKiD7DAsQne3BCRqrAQohCg1hbmltYWwgZmlndXJl2qWI9gMMCgovbS8waDhtN2NzCicKEXR5cmFubm9zYXVydXMgcmV42qWI9gMOCgwvZy8xaGZfY245azIKHwoMY2FuaW5lIHRvb3Ro2qWI9gMLCgkvbS8wMWN2ODQKHAoJdGhlcm9wb2Rz2qWI9gMLCgkvbS8wMXJ2bmQKHgoMdmVsb2NpcmFwdG9y2qWI9gMKCggvbS8wN3p5MQw&fir=zkZiGE3GWdS5TM%252C2lQNXIOpCtZfdM%252C_&vet=1&usg=AI4_-kSQu60LE1pveyZ6sBa0OcvpGf-JQQ&sa=X&ved=2ahUKEwidorySnI3xAhUQh-AKHflDCAkQ9QF6BAgWEAE#imgrc=zkZiGE3GWdS5TM", "late Jurassic", "meat eater", "17 ft", "40 ft", "4,000 lbs", 4, 4)


// name: "Allosaurus",
// image: "https://www.google.com/search?sxsrf=ALeKk016aMSvhfNfUlk_i-WtS1yT14DukA:1623333394135&q=allosaurus+dinosaur&tbm=isch&source=iu&ictx=1&tbs=simg:CAESlwIJdQqiEbZqgk8aiwILELCMpwgaOgo4CAQSFPoL9Cu3GtgYkQ3bO7klri_16P68-GhqaxAGnIb3cIhvewM86KqINOZkvp6txaMOAuiAFMAQMCxCOrv4IGgoKCAgBEgRMKiD7DAsQne3BCRqrAQohCg1hbmltYWwgZmlndXJl2qWI9gMMCgovbS8waDhtN2NzCicKEXR5cmFubm9zYXVydXMgcmV42qWI9gMOCgwvZy8xaGZfY245azIKHwoMY2FuaW5lIHRvb3Ro2qWI9gMLCgkvbS8wMWN2ODQKHAoJdGhlcm9wb2Rz2qWI9gMLCgkvbS8wMXJ2bmQKHgoMdmVsb2NpcmFwdG9y2qWI9gMKCggvbS8wN3p5MQw&fir=zkZiGE3GWdS5TM%252C2lQNXIOpCtZfdM%252C_&vet=1&usg=AI4_-kSQu60LE1pveyZ6sBa0OcvpGf-JQQ&sa=X&ved=2ahUKEwidorySnI3xAhUQh-AKHflDCAkQ9QF6BAgWEAE#imgrc=zkZiGE3GWdS5TM",
// period: "late Jurassic",
// diets: "meat eater",
// height: "17 ft",
// length: "40 ft",
// weight: "	4,000 lbs",
// offense: 4,
// defense: 4