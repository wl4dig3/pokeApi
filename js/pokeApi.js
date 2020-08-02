let pokemones = [];
function buscarPokemon() {
  let id = $("#id").val();
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  $.ajax({
    url,
    success: (result) => {
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
    //   console.log(pokemones);
    //   limpia el html ***
      $("#contenedor").html("");
      // funcion iteradora ***
      pokemones.forEach((p, i) => {
        $("#contenedor").append(`
        <div class="col-3 bordes">
            <p><img src="${p.img}" width="150" class="d-block m-auto"/></p>
            <p class='text-center m-0'>numero:${i + 1}</p>
            <p class='text-center m-0'>nombre: ${p.nombre}</p>
            <p class='text-center m-0'>pokedex: ${p.pokedex}</p>
            <p class='text-center m-0'>puntos de vida: ${p.hp}</p>
            <p class='text-center m-0'>puntos de ataque: ${p.ataque}</p>
            <p class='text-center m-0'>velocidad: ${p.velocidad}</p>
            <p class='text-center m-0'>puntos de defensa: ${p.defensa}</p> 
          
          <button onclick= "statistics(${p.ataque}, ${p.hp}, ${p.defensa}, ${p.velocidad})" 
            type="button" class="btn btn-primary btn-sm btn-block mb-1" data-toggle="modal" data-target="#modalPoke">
            Ver Estadisticas
          </button>
          </div>
            `
            );
          
          
        });
            
           
    }
  });
}

// function  canvas.js ***

function statistics(ataque, hp, defensa, velocidad) {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "dark1", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Pokemones at 2020 consult"
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: ataque, label: "Ataque" },
                { y: hp, label: "Puntos de Vida" },
                { y: defensa, label: "Defensa" },
                { y: velocidad, label: "Velocidad" }

            ]
        }]
    });
    chart.render();
    
    }
    
    let nuevaCons = axios.get('https://pokeapi.co/api/v2/pokemon').then( data => {
        console.log('data')
    })
    const saludo = () => {
        console.log('hola')
    }
    