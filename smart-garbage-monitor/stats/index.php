<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../css/navbar.css">
    <link rel="stylesheet" type="text/css" href="../css/stats/mystyle.css">
    <title>Database</title>
</head>

<body>

    <nav>
        <div class="logo">
            <a href="../">
                <img src=../Images/LogoHelp.png alt="Logo unavailable" height="70" width="80"></a>
        </div>
        <div class="title">
            <span>Statistici</span>
        </div>
        <div class="back-button">
            <a href="../login/index.html" class="MPbutton">Authorized login</a>
        </div>
    </nav>

    <div id="background">
        <div class="ListaButoane">
            <button class="button" name="sticla" id="sticla" value="sticla"><span> Sticla</span></button>
            <button class="button" name="hartie" value="hartie"> <span> Hartie</span> </button>
            <button class="button" name="gunoi" value="gunoimenajer"><span> Menajer</span></button>

            <div class="dropbtn"> Cartiere
                <div class="dropdown-content">
                    <button class="dropbtn1" name="cartier" value="Dacia"> Dacia </button>
                    <button class="dropbtn1" name="cartier" value="Pacurari"> Pacurari </button>
                    <button class="dropbtn1" name="cartier" value="Copou"> Copou </button>
                    <button class="dropbtn1" name="cartier" value="Gara"> Gara </button>
                    <button class="dropbtn1" name="cartier" value="Tatarasi"> Tatarasi </button>
                    <button class="dropbtn1" name="cartier" value="Frumoasa"> Frumoasa </button>
                    <button class="dropbtn1" name="cartier" value="Centru"> Centru </button>
                    <button class="dropbtn1" name="cartier" value="Targu Cucu"> Tg Cucu </button>
                    <button class="dropbtn1" name="cartier" value="CUG"> Cug </button>
                    <button class="dropbtn1" name="cartier" value="Nicolina"> Nicolina </button>
                    <button class="dropbtn1" name="cartier" value="Tudor Vladimirescu"> Tudor Vladimirescu </button>
                    <button class="dropbtn1" name="cartier" value="Podu Ros"> Podu Ros </button>
                    <button class="dropbtn1" name="cartier" value="Galata"> Galata </button>
                    <button class="dropbtn1" name="cartier" value="Alexandru cel Bun"> Alexandru cel Bun </button>
                    <button class="dropbtn1" name="cartier" value="Mircea Cel Batran"> Mircea Cel Batran </button>
                    <button class="dropbtn1" name="cartier" value="Nicolina"> Nicolina </button>
                    <button class="dropbtn1" name="cartier" value="Canta"> Canta </button>
                </div>
            </div>

            <div class="dropbtn">Luna
                <div class="dropdown-content">
                    <button class="dropbtn1" name="luna" value="Jun">Jun</button>
                    <button class="dropbtn1" name="luna" value="May">May</button>
                    <button class="dropbtn1" name="luna" value="April"> April </button>
                    <button class="dropbtn1" name="luna" value="March">March </button>
                    <button class="dropbtn1" name="luna" value="Feb">February</button>
                    <button class="dropbtn1" name="luna" value="Jan">January</button>
                    <button class="dropbtn1" name="luna" value="Dec">December</button>
                    <button class="dropbtn1" name="luna" value="Nov">November</button>
                    <button class="dropbtn1" name="luna" value="Oct">October </button>
                    <button class="dropbtn1" name="luna" value="Sep">September</button>
                    <button class="dropbtn1" name="luna" value="Aug">August</button>
                    <button class="dropbtn1" name="luna" value="Jul">Julie</button>
                </div>
            </div>

            <div class="dropbtn">EXPORT
                <div class="dropdown-content">
                    <button class="dropbtn1" name="EXPORT" value="PDF" onclick="javascript:genPDF()">PDF</button>
                    <button class="dropbtn1" name="EXPORT" value="XML" onclick="javascript:exportxml()"> XML </button>
                    <button class="dropbtn1" name="EXPORT" value="CSV" onclick="javascript:exportcsv()">CSV </button>
                </div>
            </div>

        </div>
        <div id="ChartPDF">
            <canvas id="myChart" height="120"></canvas>
        </div>

        <h2> Clasamentul cartierelor dupa curatenie(ordine descrescatoare):</h2>
        <ol id="clasament">
        </ol>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</body>
<script src="../js/stats/chart.js" type="text/javascript" defer="defer"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<script src="../js/stats/clasament.js"></script>
<script src="../js/stats/xmlexp.js"></script>
<script src="../js/stats/csvexp.js"></script>
<script src="../js/stats/stats.js"></script>
<script src="../js/stats/cartiereStat.js"></script>
<script src="../js/stats/lunaStat.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js" integrity="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/" crossorigin="anonymous"></script>

</html>