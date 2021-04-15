//pun pentru fiecare luna in parte
function lunaStat(luna,chart)
{
    var xhr=new XMLHttpRequest(),method='GET',overrideMimeType='application',url='https://smart-garbage-monitor.herokuapp.com/rest/rest.php/luna/?luna='+luna;
    xhr.onreadystatechange=function()
    {
    if(this.readyState==4 && this.status==200)
    {
        var gunoaie=JSON.parse(xhr.responseText);
        var labels=[];
        //pun mai intai labelurile
        labels.push("sticla");
        labels.push("hartie");
        labels.push("menajer");
    
        chart.data.labels=labels;
        var data=[];
        //pun datele numerice
        data.push(gunoaie.sticla);
        data.push(gunoaie.hartie);
        data.push(gunoaie.menajer);
        chart.data.datasets[0].data=data;
        chart.update();
    }
};
    xhr.open(method,url,true);
    xhr.send();
}