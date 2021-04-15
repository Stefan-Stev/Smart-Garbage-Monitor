<?php
if (!session_id()) {
    session_start();
}
if (!isset($_SESSION['loggedIn'])) {
    header('Location:https://smart-garbage-monitor.herokuapp.com/login/');
    session_unset();
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../css/navbar.css">
    <link rel="stylesheet" type="text/css" href="../css/salubris/salubrisstyle.css">
    <script src="../js/salubris/salubrisScript.js"></script>
    <title>Salubris</title>
</head>

<body>
<nav>
        <div class="logo">
            <a href="../">
                <img src=../Images/LogoHelp.png alt="Logo unavailable" height="70" width="80"></a>
        </div>
        <div class="title">
            <span>Salubris Account</span>
        </div>
        <div class="back-button">
            <a href="../" class="MPbutton">BACK TO MAIN PAGE</a>
        </div>
    </nav>

    <div class="box1">
        <h3> Introduceti datele:</h3><br>
        <select id="Cartier" required>
            <option value="" selected disabled hidden>Alege cartierul</option>

        </select>

        <input type="number" id="Sticla" placeholder="Cantitate Sticla" required><br>
        <input type="number" id="Hartie" placeholder="Cantitate Hartie" required><br>
        <input type="number" id="Menajer" placeholder="Cantitate Gunoi Menajer" required><br>


        <button type="submit" class="btn" value="Submit" onclick="trimiteDate()">Trimite</button>

    </div>
    <script asynd defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCXFrIlAJ6Qgvu5y23Q7zC7xNMjO-Er4m4&callback=initMap">
    </script>
    <div id="map"></div>
    <h2>

        Rapoartele cetatenilor
    </h2>
    <h3> A se apasa pe una din casetele urmatoare pentru a evidentia congestionarea gunoiului menajer din cartierul respectiv:</h3>
    <!-- <ul id="closable" onclick="functionDelete()">

    </ul>-->
    <table id="probleme" class="dateProbleme" onclick="functionDelete()">

    </table>
    <button type="button" id="cartiere">
        Deschide sectiunea de comentarii
    </button>
    <div id="cartiere1">


    </div>
    <button type="button" id="setGunoaie">S-au gresit datele de la un cartier?Apasa aici!</button>
    <div id="setGunoaie2">
        <select id="Cartier2">
        </select><br>
        <input type="number" id="Sticla2" placeholder="Cantitate Sticla" required><br>
        <input type="number" id="Hartie2" placeholder="Cantitate Hartie" required><br>
        <input type="number" id="Menajer2" placeholder="Cantitate Gunoi Menajer" required><br>
        <button type="submit" class="btn" id="seteazaGunoaie" value="Submit">Trimite</button>

    </div>
    <script src="../js/salubris/adminStat.js"></script>
    <script>
        var coloane = document.getElementById("cartiere")
        coloane.nextElementSibling.style.display = "none";
        coloane.addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else
                content.style.display = "block";

        });

        var item = document.getElementById("setGunoaie");
        item.nextElementSibling.style.display = "none";
        item.addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else
                content.style.display = "block";
        });
    </script>
</body>

</html>