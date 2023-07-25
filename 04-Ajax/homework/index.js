const urlBase = `http://localhost:5000/amigos`;

// Lista de Amigos

$(`#boton`).click(() =>{
    let listaAmigos = $(`#lista`);
    listaAmigos.empty();
    $.get(urlBase, (data) => {
        data.forEach(amigo => {
            listaAmigos.append(`<li>${amigo.name}</li>`)
        });
    })
}) 

// Busqueda de Amigos

$('#search').click(() => {
    let id = $('#input').val();
    if(id){
        $.get(`${urlBase}/${id}`, (data) => {
        $('#amigo').text(data.name); 
        id = $('#input').val("");
        })
    }else {
        alert("Por favor ingrese un input valido"); 
    }
})

// Borrar Amigo


$('#delete').click(() => {
    let id = $('#inputDelete').val();
    $.ajax({
        url: `${urlBase}/${id}`,
        type: `DELETE`,
        success: ()=>{
            $(`#success`).text(`El Amigo con el id ${id} fue borrado con éxito`);
            id = $('#inputDelete').val("");
            $(`#boton`).click();
        }
    })
})