



function fetchPerson(id){

    fetch(`https://swapi.co/api/people/${id}`)
      .then( function(response){
        return response.json()
      })
      .then(function(jsonObject){
        console.log(jsonObject)
  
        if (!jsonObject.name){
          return;
        }
  //returns main json object
        const name = jsonObject.name;
        const birth_year = jsonObject.birth_year;
        const hair_color = jsonObject.hair_color;
        const skin_color = jsonObject.skin_color;
        const gender = jsonObject.gender;
        const homeworld = jsonObject.homeworld;
        const species = jsonObject.species[0]
        const starship = jsonObject.starships[0];
        // console.log(species)


        //then fetches for the homewolrd object
        fetch(homeworld)
        .then( function(response){
          return response.json()
        })
        .then(function(homeworldObject){
          // console.log(homeworldObject)
    
          if (!jsonObject.name){
            return;
          }


          const planetName = homeworldObject.name;
          const population = homeworldObject.population;
          const terrain = homeworldObject.terrain;
          const climate = homeworldObject.climate;

//then the species object
          fetch(species)
          .then( function(response){
            return response.json()
          })
          .then(function(speciesObject){
            // console.log(speciesObject)
      
            if (!jsonObject.name){
              return;
            }
            const species = speciesObject.name;


               //then fetches for starship
        fetch(starship)
        .then( function(response){
          return response.json()
        })
        .then(function(starshipObject){
          // console.log(homeworldObject)
    
          if (!jsonObject.name){
            return;
          }


          const starship = starshipObject.name;
       
 
        const html = `
          <div>
            <div>
              <a href="${jsonObject.url}">${name}</a>
            </div>
            <div class="text">Birthday: ${birth_year}</div>
            <div class="text">Species: ${species}</div>
            <div class="text">Hair Colour: ${hair_color}</div>
            <div class="text">Skin Colour: ${skin_color}</div>
            <div class="text">Gender: ${gender}</div>
            <div class="text">Main Vehicle: ${starship}</div><br>

            <div class="text">Homeplanet: ${planetName}</div>
            <div class="text">Population: ${population}</div>
            <div class="text">Terrain: ${terrain}</div>
            <div class="text">Climate: ${climate}</div>
          </div>
          
          <br>
          <br>`
          
        
        document.querySelector("#characters").insertAdjacentHTML('afterbegin', html)
      })
      })
    })
  });

}
  for (let i = 1; i <= 10; i++) {
    fetchPerson(i)

  }
