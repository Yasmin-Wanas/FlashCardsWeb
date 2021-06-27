function ViewCard(id)
{
    var title = document.getElementById('' + id +'').parentElement.parentElement.parentElement.childNodes[1].innerHTML;
    var desc = document.getElementById('' + id +'').parentElement.parentElement.parentElement.childNodes[5].innerHTML;
    var src = document.getElementById('' + id +'').parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[1].src;
    
    document.getElementById('body-view').innerHTML +=
        '<div class="card-header">'
    +   '<img height="250px" width="400px" src="'+ src +'" />'
    +   '<div class="row justify-content-center">'
    +   '<button class="view-card-title">'+ title +'</button></div></div>'
    +   '<div class="card-body">'
    +   '<div class="row justify-content-center">'
    +   '<p class="disc" style="text-align:center;height:auto">'+ desc + '</p></div>'
    +   '<div class="row">'
    +   '<div class="col-md-12">'
    +   '<ul class="list-group list-group-horizontal-lg">'
    +   '<button type="button" class="list-group-item list-group-item-action questions">Whats the best</button>'
    +   '<button type="button" class="list-group-item list-group-item-action questions">Friends</button></ul>'
    +   '<ul class="list-group list-group-horizontal-lg">'
    +   '<button type="button" class="list-group-item list-group-item-action questions">Who did that?</button>'
    +   '<button type="button" class="list-group-item list-group-item-action questions">Mathew</button></ul>'    
    +   '<ul class="list-group list-group-horizontal-lg">'
    +   '<button type="button" class="list-group-item list-group-item-action questions">Your question?</button>'
    +   '<button type="button" class="list-group-item list-group-item-action questions">john Doe</button></ul></div></div></div>';                                   
}
function ViewNewCard(id)
{
    var title = document.getElementById('' + id +'').parentElement.parentElement.parentElement.childNodes[0].innerHTML;
    var desc = document.getElementById('' + id +'').parentElement.parentElement.parentElement.childNodes[2].innerHTML;
    var src = document.getElementById('' + id +'').parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[0].src;
    
    document.getElementById('body-view').innerHTML +=
        '<div class="card-header">'
    +   '<img height="250px" width="400px" src="'+ src +'" />'
    +   '<div class="row justify-content-center">'
    +   '<button class="view-card-title">'+ title +'</button></div></div>'
    +   '<div class="card-body">'
    +   '<div class="row justify-content-center">'
    +   '<p class="disc" style="text-align:center;height:auto">'+ desc + '</p></div>'
    +   '<div class="row">'
    +   '<div class="col-md-12">'
    +   '<ul class="list-group list-group-horizontal-lg">'
    +   '<button type="button" class="list-group-item list-group-item-action questions">Whats the best</button>'
    +   '<button type="button" class="list-group-item list-group-item-action questions">Friends</button></ul>'
    +   '<ul class="list-group list-group-horizontal-lg">'
    +   '<button type="button" class="list-group-item list-group-item-action questions">Who did that?</button>'
    +   '<button type="button" class="list-group-item list-group-item-action questions">Mathew</button></ul>'    
    +   '<ul class="list-group list-group-horizontal-lg">'
    +   '<button type="button" class="list-group-item list-group-item-action questions">Your question?</button>'
    +   '<button type="button" class="list-group-item list-group-item-action questions">john Doe</button></ul></div></div></div>';                                   
}
var ID;
function EditCard(id)
{
    var title = document.getElementById('' + id +'').parentElement.parentElement.parentElement.childNodes[1].innerHTML;
    var desc = document.getElementById('' + id +'').parentElement.parentElement.parentElement.childNodes[5].innerHTML;
    var term = document.getElementById('' + id +'').parentElement.parentElement.parentElement.childNodes[3].childNodes[1].innerHTML;
    var def = document.getElementById('' + id +'').parentElement.parentElement.parentElement.childNodes[3].childNodes[5].innerHTML;
    var src_img = document.getElementById('' + id +'').parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[1].src;
    document.getElementById('deck_title').value = title;
    document.getElementById('deck_desc').value = desc;
    document.getElementById('deck_term').value = term;
    document.getElementById('deck_def').value = def;
    document.getElementById('deck_image').parentElement.childNodes[1].src = src_img;    
    
    ID = id;
}
function EditNewCard(id)
{
    var title = document.getElementById('' + id +'').parentElement.parentElement.parentElement.childNodes[0].innerHTML;
    var desc = document.getElementById('' + id +'').parentElement.parentElement.parentElement.childNodes[2].innerHTML;
    var term = document.getElementById('' + id +'').parentElement.parentElement.parentElement.childNodes[1].childNodes[0].innerHTML;
    var def = document.getElementById('' + id +'').parentElement.parentElement.parentElement.childNodes[1].childNodes[2].innerHTML;
    var src_img = document.getElementById('' + id +'').parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[0].src;
    
    document.getElementById('deck_title').value = title;
    document.getElementById('deck_desc').value = desc;
    document.getElementById('deck_term').value = term;
    document.getElementById('deck_def').value = def;
    document.getElementById('deck_image_edit').parentElement.childNodes[1].src = src_img;   
    
    ID = id;
}

function SaveNewDeck()
{
    console.log(ID);
    document.getElementById('' + ID +'').parentElement.parentElement.parentElement.childNodes[0].innerHTML = document.getElementById('deck_title_edit').value; 
    
    document.getElementById('' + ID +'').parentElement.parentElement.parentElement.childNodes[2].innerHTML = document.getElementById('deck_desc_edit').value;
    
    document.getElementById('' + ID +'').parentElement.parentElement.parentElement.childNodes[1].childNodes[0].innerHTML =
    document.getElementById('deck_term_edit').value;
    
    document.getElementById('' + ID +'').parentElement.parentElement.parentElement.childNodes[1].childNodes[2].innerHTML =
    document.getElementById('deck_def_edit').value;
}

function SaveEditedText()
{
    console.log(ID);
    document.getElementById('' + ID +'').parentElement.parentElement.parentElement.childNodes[1].innerHTML = document.getElementById('deck_title').value; 
    
    document.getElementById('' + ID +'').parentElement.parentElement.parentElement.childNodes[5].innerHTML = document.getElementById('deck_desc').value;
    
    document.getElementById('' + ID +'').parentElement.parentElement.parentElement.childNodes[3].childNodes[1].innerHTML =
    document.getElementById('deck_term').value;
    
    document.getElementById('' + ID +'').parentElement.parentElement.parentElement.childNodes[3].childNodes[5].innerHTML =
    document.getElementById('deck_def').value;
}

function AddCard()
{
    document.getElementById('add_form').innerHTML +=
        '<div class="row">'
    +   '<div class="col">'
    +   '<input type="text" class="form-control" placeholder="Term"></div>'
    +   '<div class="col">'
    +   '<input type="text" class="form-control" placeholder="Definition"></div></div>';
}

function CreateDeck()
{
    var title = document.getElementById('deck_new_title').value;
    var desc = document.getElementById('deck_new_desc').value;
    var term = document.getElementById('deck_new_term').value;
    var def = document.getElementById('deck_new_def').value;

    document.getElementById('newDecks').innerHTML +=
        '<div class="row">'
    +   '<div class="card deck-card col-md-5">'
    +   '<div class="card-body">'
    +   '<div class="row">'
    +   '<div class="col-md-6">'
    +   '<h1>'+ title +'</h1>'
    +   '<div class="card_cat">'
    +   '<p class="PG">'+ term +'</p>'
    +   '<p class="year">C++</p>'
    +   '<p class="genre">'+ def +'</p></div>'
    +   '<p class="disc">'+ desc + '</p>'
    +   '<div class="row">'
    +   '<div class="justify content-start">'
    +   '<button class="inside_buttons" data-toggle="modal" data-target="#viewCards" id="5" onclick="ViewNewCard(this.id)"><i class="far fa-eye"></i> View</button><a href="Learn.html"><button class="inside_buttons"><i class="fas fa-chalkboard-teacher"></i> Learn</button></a></div></div></div>'
    +   '<div class="col-md-6">'
    +   '<img class="img-deck" src="images/createDeck.png" />'
    +   '<div class="row justify-content-end">'
    +   '<button class="inside_buttons" data-toggle="modal" data-target="#editNewCard" id="5" onclick="EditNewCard(this.id)"><i class="far fa-edit"></i></button>'
    +   '<button class="inside_buttons" data-toggle="modal" data-target="#deleteCard"><i class="fas fa-trash"></i></button></div></div></div></div></div>';
}