let pokemones = [];
function buscarPokemon() {
  let id = $("#id").val();
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  $.ajax({
    url,
    success: function(result) {
      let pokemon = {
        pokedex: result.id,
        nombre: result.name,
        ataque: result.stats[1].base_stat,
        hp: result.stats[0].base_stat,
        defensa: result.stats[2].base_stat,
        velocidad: result.stats[5].base_stat,
        img: result.sprites.front_default
      };
      pokemones.push(pokemon);
      console.log(pokemones);
    //   limpiar el html 
      $("#cuerpo").html("");
      // funcion iteradora 
      pokemones.forEach((p, i) => {
        $("#cuerpo").append(`
        <div class="col-4 bordes">
            <p><img src="${p.img}" width="150" class="d-block m-auto"/></p>
          <p class='text-center m-0'>numero:${i + 1}</p>
          <p class='text-center m-0'>pokedex: ${p.pokedex}</p>
          <p class='text-center m-0'>nombre: ${p.nombre}</p>
          <p class='text-center m-0'>puntos de ataque: ${p.ataque}</p>
          <p class='text-center m-0'>puntos de vida: ${p.hp}</p>
          <p class='text-center m-0'>puntos de defensa: ${p.defensa}</p> 
          <p class='text-center m-0'>velocidad: ${p.velocidad}</p>
          </div>
          `);
          
            
           
      });
    }
  });
}