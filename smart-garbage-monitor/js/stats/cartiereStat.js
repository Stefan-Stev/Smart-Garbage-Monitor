
//aici afisez sticla,hartia si menajerul pentru fiecare cartier in pagina de stat
function cartierStat(cartier,chart)
{
    var xhr=new XMLHttpRequest(),method='GET',overrideMimeType='application',url='https://smart-garbage-monitor.herokuapp.com/rest/rest.php/DateCartier/?cartier='+cartier;
    xhr.onreadystatechange=function()
    {
        if(this.readyState==4 && this.status==200)
        {
            var gunoaie=JSON.parse(xhr.responseText);
            var labels=[];
            //pun labelurile
            labels.push("sticla");
            labels.push("harte");
            labels.push("menajer");
            chart.data.labels=labels;
            var data=[];
            //pun datele numerice
            data.push(gunoaie.sticla);
            data.push(gunoaie.hartie);
            data.push(gunoaie.menajer);
            chart.data.datasets[0].data=data;
            chart.update();  //update la chart
        }
    };
    xhr.open(method,url,true);
    xhr.send();
}