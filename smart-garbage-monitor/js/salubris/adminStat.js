

window.onload=populateCartiere();
window.onload=deleteComplaint();
window.onload=setGunoaie();

//vom seta gunoaiele pentru cartierul respectiv
function setGunoaie()
{
    var item=document.getElementById("seteazaGunoaie");
    item.addEventListener("click",function(){
        
        var cartier=document.getElementById("Cartier2").value;
        var sticla=document.getElementById("Sticla2").value;
        var hartie=document.getElementById("Hartie2").value;
        var menajer=document.getElementById("Menajer2").value;
        var xhr=new XMLHttpRequest(),method='POST',overrideMimeType='application/json',url="https://smart-garbage-monitor.herokuapp.com/rest/rest.php/updateGunoaie";
        var txt={cartier:cartier,sticla:sticla,hartie:hartie,menajer:menajer};
        var obj=JSON.stringify(txt);
        
        xhr.onreadystatechange=function()
        {
            if(this.readyState==4 && this.status==200)
            {
                alert("S-au actualizat datele");
            }
        };
        xhr.open(method,url,true);
        xhr.send(obj);
    })
}


//stergem comentariul
function deleteComplaint(mesaj)
{
    var xhr=new XMLHttpRequest(),method='POST',overrideMimeType='application/json',url="https://smart-garbage-monitor.herokuapp.com/rest/rest.php/deleteComplaint";
    var txt={mesaj:mesaj}
    var obj=JSON.stringify(txt);
    console.log(obj);
    xhr.onreadystatechange=function()
    {

        if(this.readyState==4 && this.status==200)
        {
            console.log("Campania a fost stearsa " + mesaj);
            
        }
    };
    xhr.open(method,url,true);
    xhr.send(obj);
}

function showComments(id)
{

    
            


    var xhr=new XMLHttpRequest(),method='GET',overrideMimeType='application/json',url="https://smart-garbage-monitor.herokuapp.com/rest/rest.php/comments/"+id;
    var elementCartier=document.getElementById(id);
    //daca cumva sectiunea de comenatarii este deschisa, o vom inchide
    if(elementCartier.nextElementSibling!=null && elementCartier.nextElementSibling.style.display==="block")
            {
               
                
                elementCartier.nextElementSibling.style.display="none";
                return;
            }
            //vom crea sectiunea de comenatarii
    var sectiuneaDeComentarii=document.createElement('div');
    elementCartier.parentNode.insertBefore(sectiuneaDeComentarii,elementCartier.nextSibling);
    
    xhr.onreadystatechange=function()
    {

        if(this.readyState==4 && this.status==200)
        {
            var comentarii=JSON.parse(xhr.responseText);
            
            for(var i=0;i<comentarii.length;i++)
            {
                //ele.innerHTML=ele.innerHTML+'<div>'+comentarii[i].complaint+'</div>'+'<br>';
                //fiecare comenatariu este de fapt un buton care odata apasat, va sterge comentariul
                var comentariu=document.createElement('button');
                comentariu.className="complaint";
                
                
                comentariu.innerText=comentarii[i].complaint;
               
                sectiuneaDeComentarii.appendChild(comentariu);
               
            }
            var items=document.getElementsByClassName('complaint');
     
            for(var i=0;i<items.length;i++)
            {
                items[i].onclick=function()
                {
                 deleteComplaint(this.innerText);
                 this.style.display="none";
                }
                items[i].onmouseover=function()
                {
                    //cand se da hover, comentariul se va face rosu
                    this.style.backgroundColor="red";
                }
                items[i].onmouseout=function()
                {
                    //cand se ia cursorul, comentariul se va face verde
                    this.style.backgroundColor="#33CC66";
                }
                
            }


            elementCartier.classList.toggle("active");
            sectiuneaDeComentarii.style.display="block";
           
            
        }
    }
     xhr.open(method,url,true);
     xhr.send();
    
}

//aici vom popula sectiunea de comentarii {cand se apasa 'Deschide sectiunea de comentarii',vom popula cu cartierele luate in vedere }
function populateCartiere()
{

    var xhr=new XMLHttpRequest(),method='GET',overrideMimeType='application/json',url="https://smart-garbage-monitor.herokuapp.com/rest/rest.php/cartiereSimplu"; 
xhr.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200) {
  var cartiere=JSON.parse(xhr.responseText);
  var ele=document.getElementById("cartiere1");

  for(var i=0;i<cartiere.length;i++)
  {
      ele.innerHTML=ele.innerHTML+'<button  class="cartierDupaHover" id="'+cartiere[i].cartiere+'" onclick="showComments(this.id)">'+cartiere[i].cartiere+'</button>';
      //daca se apasa pe vreun cartier ,vom face trigger la un eveniment javascript ce va afisa comenatrile de la respectivul cartier
  }

}
};
xhr.open(method,url,true);
xhr.send();
}
