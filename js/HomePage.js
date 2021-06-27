$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 350);
});

function ViewCard(id)
{
    var title = document.getElementById('' + id +'').parentElement.childNodes[3].innerHTML;
    var desc = document.getElementById('' + id +'').parentElement.childNodes[5].innerHTML;
    console.log(document.getElementById('' + id +'').parentElement.childNodes);
    
    document.getElementById('body-view').innerHTML +=
        '<div class="card-header">'
    +   '<img height="250px" width="400px" src="images/decks1.png" />'
    +   '<div class="row justify-content-center">'
    +   '<button class="view-card-title" style="background-color:#ffc947">'+ title +'</button></div></div>'
    +   '<div class="card-body">'
    +   '<div class="row justify-content-center">'
    +   '<p class="disc" style="text-align:center;height:auto">'+ desc + '</p></div></div>';  
}

function ChangeIconColour1()
{
    var col = document.getElementById('icon_clicked1');
      if (col.style.color === "white")
        col.style.color = "#ffc947";
      else
        col.style.color = "white";
}

function ChangeIconColour2()
{
    var col = document.getElementById('icon_clicked2');
      if (col.style.color === "white")
        col.style.color = "#ffc947";
      else
        col.style.color = "white";
}
    
function ChangeIconColour3()
{
    var col = document.getElementById('icon_clicked3');
      if (col.style.color === "white")
        col.style.color = "#ffc947";
      else
        col.style.color = "white";
}