const state = {
  enlace: null
};

const filterByDistrict = (stations, query) => {
  const busqueda = stations.filter((elemento) => {

    return (elemento.name.toLowerCase().indexOf(query) != -1);
  });
  return busqueda;
}

$(_ => {
  $.get("/static/categorias/contenidoEstatico/landings/enlace.json", function(data) {
    state.enlace = data;
  });
});

const SearchItem = (data) => {
  const itemListado = $('<li class="item-search"><a href="'+data.link+'"><h3>'+data.name+'</h3><p>'+data.descripcion+'</p></a></li>');
  return itemListado;
}

$("#myInput").on('keyup', (e) => {
  $(".lista-search").empty();
  if($("#myInput").val()!=""){
    const resultado = filterByDistrict(state.enlace, $("#myInput").val().toLowerCase());
    resultado.forEach((e) => {
      console.log(SearchItem(e));
      $(".lista-search").append(SearchItem(e));
    });
  }

});
