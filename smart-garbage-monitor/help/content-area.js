function showplastic() {

    removeChildren()
    var elem = document.createElement('div')

    var heading = document.createElement('h4')
    var heading1 = document.createElement('h4')
    var heading2 = document.createElement('h4')
    var heading3 = document.createElement('h4')

    var p = document.createElement('p')
    var p1 = document.createElement('p')
    var p2 = document.createElement('p')
    var p3 = document.createElement('p')
    var p4 = document.createElement('p')
    var p5 = document.createElement('p')
    var p6 = document.createElement('p')
    var p7 = document.createElement('p')
    var p8 = document.createElement('p')
    var p9 = document.createElement('p')
    var p10 = document.createElement('p')

    var subtitlu = document.createTextNode('Reciclare PLASTICE')
    var subtitlu1 = document.createTextNode('Reciclare Fibra PET:')
    var subtitlu2 = document.createTextNode('Reciclare BANDA PET:')
    var subtitlu3 = document.createTextNode('Reciclare rPET:')

    var nod = document.createTextNode('Unul din cele mai intrebuintate materiale din lume este plasticul. Prin colectarea si reciclarea plasticului, putem sa evitam consumul de resurse naturale si sa protejam mediul inconjurator.')
    var nod1 = document.createTextNode('Cum sa facem acest lucru cat mai eficient? Esential in reciclarea plasticul este ca produsul sa fie curat. Un produs murdar, sau unul cu deseuri alimentare poate contamina un intreg cos de colectare selectiva sau un balot de sticle.')
    var nod2 = document.createTextNode('Suntem obisnuiti cu simbolul reciclarii format dintr-un triunghi de sageti, insa pentru plastic putem diferentia si tipul acestuia, prin codul inserat in interiorul semnului reciclarii.')
    var nod3 = document.createTextNode('lasticele de tip #1 si tip #2 sunt cel mai frecvent utilizate sub forma de sticla de bauturi, pentru ca sunt plastice nu foarte scumpe, usoare, incasabile si usor de reciclat.')
    var nod4 = document.createTextNode('n fabrica de reciclare, sticlele sunt sortate balistic pentru o prima indepartare a impuritatilor, apoi sortate optic pentru indepartarea metalelor. Ulterior, se face si o separare pe culori, dupa care sticlele de PET sunt maruntite in bucati mici, numiti ???fulgi???, care sunt spalati pentru a ajunge materie prima secundara. Este important ca sticlele PET sa fie curate, pentru ca din fulgi se obtin materii prime folosite in nenumarate industrii, inclusv industria igienica sau alimentara.')
    var nod5 = document.createTextNode('Dupa ce a fost procesat de instalatii, fulgii pot deveni fibre sintetice poliesterice, banda PET sau Rpet (recycled PET).')

    var nod6 = document.createTextNode('fibra din poliester sintetic inlocuieste cu succes materialul virgin, fiind folosita ca umplutura pentru haine de iara, sacii de dormit si vestele de salvare. Aceasta este folosita si in industria automotive, ca umplutura pentru scaune, tapiserie sau pentru sistemul antifonic. Fulgii proveniti din materiale curate sunt transformati in fibra folosita in industria igienica, pentru servetele, masti medicale sau plasturi. De asemenea, fibra este folosita si in industria constructoare, la panourile de izolatie acustica sau la acoperisuri (pasla).')

    var nod7 = document.createTextNode('Este rezistenta si flexibila, se poate folosi la produse si marfuri cu grad inalt de solicitare. In acelasi timp, garanteaza o tensiune de strangere constanta in toate etapele manipularii pachetului, comportandu-se excelent la schimbari dese de temperatura. Poate fi folosita atat in regim de ambalare manual, cat si automat. Banda PET asigura securitate excelenta si are aplicabilitate in multe domenii: la ambalarea cartonului ondulat, la ambalarea caramizilor si prefabricatelor sau in industria lemnului.')

    var nod8 = document.createTextNode('PET (polietilen tereftalat reciclat) provine din fulgii de plastic folositi in special doar pentru ambalarea sticlelor de plastic, fulgi transformati in granule utilizabile in industria alimentara. Granulele de RPET sunt procesate in pre-forme, din care sticle noi prind o noua viata.')
    var nod9 = document.createTextNode('Pungile de plastic si ambalajele sunt, in general tip #2 HDPE si #4 LDPE, ambele reciclabile. Majoritatea pungilor de plastic sunt reciclabile, iar din acestea se pot fabrica mai departe o varietate de produse. Plasticul rezultat din reciclarea tipului #2 si #4 se regaseste intrebuintat in jucarii, coarde elastice sau franghii. Plasticul tip# 3, policlorula de vinil, ultilizata in mod obisnuit in conductele de material plastic, perdele de dus, tuburi medicale etc. Odata reciclate, aceste plastice pot fi regasite la ramele feestrelor sau in conductele de material plastic.')
    var nod10 = document.createTextNode('Plastic #6, regasit in tacamuri de unica folosinta, tavi de depozitat carne sau in indistria de ambalare se poate transforma in mai multe elemente, in mod frecvent ca material izolant.')

    heading.appendChild(subtitlu)
    heading1.appendChild(subtitlu1)
    heading2.appendChild(subtitlu2)
    heading3.appendChild(subtitlu3)

    p.appendChild(nod)
    p1.appendChild(nod1)
    p2.appendChild(nod2)
    p3.appendChild(nod3)
    p4.appendChild(nod4)
    p5.appendChild(nod5)

    p6.appendChild(nod6)

    p7.appendChild(nod7)

    p8.appendChild(nod8)
    p9.appendChild(nod9)
    p10.appendChild(nod10)


    elem.appendChild(heading)
    elem.appendChild(p)
    elem.appendChild(p1)
    elem.appendChild(p2)
    elem.appendChild(p3)
    elem.appendChild(p4)
    elem.appendChild(p5)

    elem.appendChild(heading1)
    elem.appendChild(p6)

    elem.appendChild(heading2)
    elem.appendChild(p7)

    elem.appendChild(heading3)
    elem.appendChild(p8)
    elem.appendChild(p9)
    elem.appendChild(p10)

    var original = document.getElementById('content-area')
    original.append(elem)
}
function showmetal() {

    removeChildren()
    var elem = document.createElement('div')

    var heading = document.createElement('h4')
    var heading1 = document.createElement('h4')
    var heading2 = document.createElement('h4')

    var p = document.createElement('p')
    var p1 = document.createElement('p')
    var p2 = document.createElement('p')
    var p3 = document.createElement('p')

    var pr = document.createElement('p')
    var pr1 = document.createElement('p')

    var par = document.createElement('p')
    var par1 = document.createElement('p')
    var par2 = document.createElement('p')
    var par3 = document.createElement('p')
    var par4 = document.createElement('p')
    var par5 = document.createElement('p')
    var par6 = document.createElement('p')

    var subtitlu = document.createTextNode('Reciclare METALE')
    var subtitlu1 = document.createTextNode('Reciclare BATERII SI BECURI')
    var subtitlu2 = document.createTextNode('Reciclare ELECTRONICELE')

    var nod = document.createTextNode('Dupa ce ai folosit cutia de suc, pune-o intr-un container de colectare selectiva. Cutia, impreuna cu celelalte metale, e transportata la o statie de prelucrare. Aici, un magnet urias separa cutiile de conserve (care sunt fabricate din otel), de cutiile de aluminiu (cum spuneam aici, link catre CUTII DE CONSERVE -cutii de supa, cutii de cafea, cutii de conserve ) care nu sunt magnetice. Ulterior, sunt preluate de o banda transportoare si separate, pentru a fi introduse in alt proces de productie.')
    var nod1 = document.createTextNode('In fabrica de reciclare, cutiile de aluminiu sunt pregatite pentru reprocesare: spalate, maruntite si apoi transformate in bucati de aluminiu numite ???chipsuri???. Chipsurile la randul lor sunt topite intr-un cuptor gigant, apoi aluminiul rezultat este turnat in forme, numite ???lingouri???. Acest proces de topire elimina cernelurile si alte impuritati care pot fi prezente pe aluminiu.')
    var nod2 = document.createTextNode('Stiati ca intr-un lingou de acest fel se regasec 1.6 milioane de doze de aluminiu? Lingourile sunt preluate de alt proces tehnologic, ce le transforma in role de foi subtiri, plate si laminate. Acest proces ofera o mai mare rezistenta si flexibilitate aluminiului.')
    var nod3 = document.createTextNode('Din foi, producatorii fac produse noi, cum ar fi cutii de bauturi, folie de ambalat ciocolata, placute de inmatriculare sau folie de aluminiu. In mai putin de 6 saptamani, produsele din aluminiu reciclat ajung inapoi la raft.')

    var node = document.createTextNode('Exista baterii primare: sunt bateriile ce pot fi utilizate doar o singura data, neavand functia reincarcabila. Aceasta categorie include bateriile tip: carbon-zinc, Li-MnO2, argint-zinc, zinc-MnO2, Zinc-Air, alcalinele si baterii secundare: sunt bateriile ce pot fi reincarcabile. Aceasta categorie incude bateriile tip: Ni-Cd, Ni-MH, Li-ion, Pb-Acid.')
    var node1 = document.createTextNode('Intregul proces tehnologic include sortarea manuala, care se realizeaza pe o banda transportoare asigurand eliminarea corpurilor straine, fiind apoi urmata de sitarea mecanica pentru recuperarea bateriilor tip pastila. Tratarea mecanica a bateriilor consta in maruntirea bateriilor (macinare), separarea magnetica, separarea prin sitare si separarea calitativa a particulelor. Din reciclarea bateriilor rezulta fractie feroasa si fractie neferoasa, masa neagra-???black mass???- (un amestec de carbon, zinc si mangan). Fractiile feroase si neferoase reintra in circuitul economic in industria otelului si in furnale de zinc, iar hartia si plasticul sunt valorificate ca si combustibil alternativ in industria cimentului.')

    var nodes = document.createTextNode('In functie de tipul de aparat electric sau electronic, acestea intra in diferite procese de productie pentru a fi tratate si reciclate. Ceea ce rezulta prin reciclare, asa-numitele ???fractii???, pot ajunge sa fie folosite pentru fabricarea de produse noi sau pot fi reutilizate ca atare.')
    var nodes1 = document.createTextNode('Aparatele de uz casnic de mari dimensiuni prelucreaza aparate frigorifice mari, frigidere sau aparate de aer conditionat. Pentru ca au un continut de substante periculoase, in vederea decontaminarii acestora, aparatele sunt intai supuse operatiunii de extragere a uleiurilor minerale si agentului frigorific, apoi intra intr-o camera cu atmosfera controlata, complet izolata de mediul inconjurator, unde sunt maruntite. Fractiie separate, rezultate sunt transportate cu ajutorul benzilor transportoare in containere de depozitare a produselor finite: aluminiu, fier, plastic si spuma poliuretanica.')
    var nodes2 = document.createTextNode('Fierul obtinut din reciclarea frigiderelor este folosit la fabricarea blocului motor al masinilor, aluminiul si cuprul este folosit in fabricarea caloriferelor iar plasticul pentru a fabrica alte produse cu componeta de plastic (frigidere, aparate de aer conditionat).')
    var nodes3 = document.createTextNode('Filtre de cafea, prajitoare de paine, aspiratoare sau masini de spalat sunt transformate in fractii de plastic, metale feroase si neferoase, sticla, cabluri si placi de circuit integrat. Filtre de cafea, prajitoare de paine, aspiratoare sau masini de spalat sunt transformate in fractii de plastic, metale feroase si neferoase, sticla, cabluri si placi de circuit integrat.')
    var nodes4 = document.createTextNode('Plasticul de la cafetiere sau de la fiarele de calcat este folosit la fabricarea instrumentelor musicale (de ex, o chitara)')
    var nodes5 = document.createTextNode('Televizoarele si monitoarele care contin tuburi cinescopice sunt dezasamblate manual, in conditii de securitate, in vederea izolarii acestor tuburi. Panoul frontal se separa de partea conica a tubului (care are continut de plumb si pudra fluorecenta) printr-o operatiune speciala, astfel incat sticla sa nu fie afectata. Ulterior se aspira pudra fluorescenta, care contine substante periculoase. In urma tratarii rezulta fractii de sticla (contaminata si necontaminata), metale feroase, neferoase si pudra fluorescenta.')
    var nodes6 = document.createTextNode('Plasticul, aluminiu si fierul din echipamentele IT&C sunt folosite pentru a fabrica alte echipamente de acelasi fel. Din telefoanele mobile se extrag placi de circuit imprimat, cu aur, argint, cupru, nikel, cadmiu, metale pretioase folosite in fabricarea de bijuterii de aur, sau la constructia de nave/vapoare, mobiliere de gradina, placute de inmatriculare sau piese de schimb auto.')

    heading.appendChild(subtitlu)
    heading1.appendChild(subtitlu1)
    heading2.appendChild(subtitlu2)

    p.appendChild(nod)
    p1.appendChild(nod1)
    p2.appendChild(nod2)
    p3.appendChild(nod3)

    pr.appendChild(node)
    pr1.appendChild(node1)

    par.appendChild(nodes)
    par1.appendChild(nodes1)
    par2.appendChild(nodes2)
    par3.appendChild(nodes3)
    par4.appendChild(nodes4)
    par5.appendChild(nodes5)
    par6.appendChild(nodes6)

    elem.appendChild(heading)
    elem.appendChild(p)
    elem.appendChild(p1)
    elem.appendChild(p2)
    elem.appendChild(p3)

    elem.appendChild(heading1)
    elem.appendChild(pr)
    elem.appendChild(pr1)

    elem.appendChild(heading2)
    elem.appendChild(par)
    elem.appendChild(par1)
    elem.appendChild(par2)
    elem.appendChild(par3)
    elem.appendChild(par4)
    elem.appendChild(par5)
    elem.appendChild(par6)

    var original = document.getElementById('content-area')
    original.append(elem)
}
function showsticla() {

    removeChildren()
    var elem = document.createElement('div')

    var heading = document.createElement('h4')
    var heading1 = document.createElement('h4')
    var heading2 = document.createElement('h4')
    var heading3 = document.createElement('h4')
    var heading4 = document.createElement('h4')
    var heading5 = document.createElement('h4')

    var p = document.createElement('p')
    var p1 = document.createElement('p')
    var p2 = document.createElement('p')
    var p3 = document.createElement('p')
    var p4 = document.createElement('p')
    var p5 = document.createElement('p')
    var p6 = document.createElement('p')
    var p7 = document.createElement('p')
    var pr = document.createElement('p')
    var pr1 = document.createElement('p')
    var pr2 = document.createElement('p')
    var pr3 = document.createElement('p')
    var pr4 = document.createElement('p')
    var pr5 = document.createElement('p')
    var pr6 = document.createElement('p')

    var subtitlu = document.createTextNode('RECICLAREA STICLEI')
    var subtitlu1 = document.createTextNode('CUM SE RECICLEAZA?')
    var subtitlu2 = document.createTextNode('CE AVANTAJE ARE RECICLAREA?')
    var subtitlu3 = document.createTextNode('CE POT SA PREDAU PENTRU RECICLARE?')
    var subtitlu4 = document.createTextNode('VOM PRIMI O BONIFICATIE?')
    var subtitlu5 = document.createTextNode('NU SE POT RECICLA:')

    var nod = document.createTextNode('Ca ??i aluminiul, sticla poate fi reciclat?? prin topire la infinit, f??r?? a-??i pierde propriet????ile; tot ca ??i aluminiul, costurile de reciclare sunt mai mici dec??t cele de produc??ie a sticlei din materii prime, economisind astfel energie. Sticla are ??ns??, din punctul nostru de vedere, o mare problem??: e practic indestructibil?? la coroziune, deoarece se descompune ??n aproximativ??? un milion de ani! Este, de departe, cel mai rezistent de??eu produs de umanitate (PET, cu o durat?? de via???? de cel mult 1.000 de ani, e al doilea ??n acest clasament).')
    var nod1 = document.createTextNode('Altfel spus, sticla de bere din frigider, dac?? nu este reciclat??, va continua probabil s?? existe, ??n aceea??i form??, mult timp dup?? ce specia noastr?? va fi disp??rut. Nu e o perspectiv?? prea ??ncurajatoare s?? te g??nde??ti c?? tot ce va r??m??ne din civiliza??ie vor fi ni??te sticle goale.')

    var nod2 = document.createTextNode('Procesul este relativ lung, dar ??n esen???? simplu: sticlele sunt sp??late, apoi sortate dup?? culoare (pigmen??ii care dau culoarea sticlei nu ???ies???), sparte, m??cinate, apoi se elimin?? impurit????ile (etichete, h??rtie, metal etc.) iar m??cin??tura este topit?? ??i transformat?? ??n granule ??? materia prim?? pentru diversele utiliz??ri ale sticlei reciclate.')
    var nod3 = document.createTextNode('Din sticl?? colorat?? nu se poate produce dec??t sticl?? de aceea??i culoare, cea incolor?? fiind astfel mai valoroas??, c??ci poate fi refolosit?? ??n mai multe scopuri. Aten??ie la sticla termorezistent??, cum sunt vasele de Jena! Aceasta nu trebuie reciclat?? cu cea obi??nuit??, pentru c?? afecteaz?? procesul de topire.')
    var nod4 = document.createTextNode('??n principiu, din sticl?? se face tot sticl?? pentru uz casnic, de??i exist?? ??i anumite utiliz??ri ceva mai ???exotice??? ??? de pild?? faimoasa vat?? termoizolant?? cu care se acoper?? conductele de ap?? cald??, unele amestecuri de betoane sau produse sanitare de genul chiuvetelor.')

    var nod5 = document.createTextNode('Sticla este cel mai rezistent factor poluant, iar reciclarea sa economise??te energie ??i bani. Al??turi de h??rtie, sticla reprezint?? cea mai mare a de??eurilor depozitate ??n gropile de gunoi, ??n func??ie de greutatea acestora.')

    var nod6 = document.createTextNode('Sticle de orice fel, colorate sau nu, de preferin???? sp??late.')

    var nod7 = document.createTextNode('Da, automatele SIGUREC acord?? bonuri de cump??r??turi ??i pentru sticlele predate!')

    var node = document.createTextNode('Por??elan, cristal, ceramic??')
    var node1 = document.createTextNode('Pahare de b??ut ??i farfurii')
    var node2 = document.createTextNode('Vase rezistente la c??ldur?? ??? ex. vasele de tip Jena (au temperatura de topire diferit?? de cea a sticlei folosite la ambalaje)')
    var node3 = document.createTextNode('Farfuriile-suport de la cuptoarele cu microunde')
    var node4 = document.createTextNode('Oglinzi, geamuri, chiuvete din ceramic?? (pentru acest tip de de??euri va fi necesar?? g??sirea unui colector de de??euri din construc??ii ??i demol??ri, care ar urma s?? le preia cu programare prealabil??)')
    var node5 = document.createTextNode('Ambalaje medicamente ??i produse cosmetice cu con??inut periculos (ex. vopseluri, lacuri de unghii)')
    var node6 = document.createTextNode('Becuri ??i neoane (de??i au ??n componen???? sticl??, aceasta este tratat?? ??i nu poate fi reciclat?? ??mpreuna cu ambalajele de sticl??; aceste produse se recicleaz?? separat.')

    heading.appendChild(subtitlu)
    heading1.appendChild(subtitlu1)
    heading2.appendChild(subtitlu2)
    heading3.appendChild(subtitlu3)
    heading4.appendChild(subtitlu4)
    heading5.appendChild(subtitlu5)

    p.appendChild(nod)
    p1.appendChild(nod1)

    p2.appendChild(nod2)
    p3.appendChild(nod3)
    p4.appendChild(nod4)

    p5.appendChild(nod5)

    p6.appendChild(nod6)

    p7.appendChild(nod7)

    pr.appendChild(node)
    pr1.appendChild(node1)
    pr2.appendChild(node2)
    pr3.appendChild(node3)
    pr4.appendChild(node4)
    pr5.appendChild(node5)
    pr6.appendChild(node6)

    elem.appendChild(heading)
    elem.appendChild(p)
    elem.appendChild(p1)

    elem.appendChild(heading1)
    elem.appendChild(p2)
    elem.appendChild(p3)
    elem.appendChild(p4)

    elem.appendChild(heading2)
    elem.appendChild(p5)

    elem.appendChild(heading3)
    elem.appendChild(p6)

    elem.appendChild(heading4)
    elem.appendChild(p7)

    elem.appendChild(heading5)
    elem.appendChild(pr)
    elem.appendChild(pr1)
    elem.appendChild(pr2)
    elem.appendChild(pr3)
    elem.appendChild(pr4)
    elem.appendChild(pr5)
    elem.appendChild(pr6)

    var original = document.getElementById('content-area')
    original.append(elem)
}

function showhartie() {
    removeChildren()
    var elem = document.createElement('div')

    var heading = document.createElement('h4')
    var heading1 = document.createElement('h4')
    var heading2 = document.createElement('h4')
    var heading3 = document.createElement('h4')
    var heading4 = document.createElement('h4')

    var p = document.createElement('p')
    var p1 = document.createElement('p')

    var pr = document.createElement('p')
    var pr1 = document.createElement('p')
    var pr2 = document.createElement('p')
    var pr3 = document.createElement('p')
    var pr4 = document.createElement('p')
    var pr5 = document.createElement('p')
    var pr6 = document.createElement('p')
    var pr7 = document.createElement('p')

    var par = document.createElement('p')
    var par1 = document.createElement('p')
    var par2 = document.createElement('p')
    var par3 = document.createElement('p')
    var par4 = document.createElement('p')

    var par5 = document.createElement('p')
    var par6 = document.createElement('p')
    var par7 = document.createElement('p')
    var par8 = document.createElement('p')
    var par9 = document.createElement('p')
    var par10 = document.createElement('p')

    var para = document.createElement('p')
    var para1 = document.createElement('p')
    var para2 = document.createElement('p')
    var para3 = document.createElement('p')

    var subtitlu = document.createTextNode('Cum se recicleaz?? h??rtia?')
    var subtitlu1 = document.createTextNode('Cum reducem consumul de h??rtie')
    var subtitlu2 = document.createTextNode('Cum colect??m h??rtia')
    var subtitlu3 = document.createTextNode(' Nu se pot recicla:')
    var subtitlu4 = document.createTextNode('??tia??i c?????')    

    var nod = document.createTextNode('H??rtia are o durat?? de via???? redus??, cea de ??nalt?? calitate, cum este h??rtia pentru imprimante, poate fi reciclat?? de maximum 5-7 ori, dup?? care fibrele de celuloz?? se scurteaz?? prea mult. ??n acest stadiu, produsul reciclat este de obicei folosit la cofrajele de ou??.')
    var nod1 = document.createTextNode('La fabrica de reciclare, h??rtia este ??mp??r??it?? pe diferite categorii, ??n func??ie de calitate ??? de la h??rtia de imprimant?? p??n?? la cofraje de ou??. Reciclarea propriu-zis?? presupune m??run??irea h??rtiei ??i topirea ??ntr-un amestec de ap?? ??i diverse substan??e chimice, pentru a separa fibrele de celuloz??. Amestecul este cur????at de diferite resturi cum sunt, de exemplu, capsele metalice. Mixtura de pulp?? rezultat??, format?? din 1% fibr?? ??i 99% ap?? este apoi ??ntins?? pentru a forma o pelicul??, urmeaz?? a fi presat?? pentru a ??ndep??rta mare parte din ap??. Pelicula de h??rtie trece prin role de uscare ??i de sub??iere p??n?? se ajunge la consisten??a dorit??. Aceasta este apoi rulat?? ??n suluri ??i transportat?? la tipografii, produc??tori de ambalaje, etc.')

    var node = document.createTextNode('Solicit?? factura electronic??, ??n locul celei tip??rite.')
    var node1 = document.createTextNode('Pl??te??te facturile online pentru a p??stra dovezi electronice, nu tip??rite.')
    var node2 = document.createTextNode('Nu accepta flyere ??i pliante. O sugestie poate fi ca pe cutia po??tal?? s?? pui un anun?? de tipul ???Nu doresc materiale promo??ionale???.')
    var node3 = document.createTextNode('Tip??re??te documentele doar dac?? este neap??rat nevoie, folose??te h??rtie reciclat?? ??i printeaz?? pe ambele fe??e ale colii.')
    var node4 = document.createTextNode('Refolose??te foile de h??rtie pentru noti??e sau ciorne.')
    var node5 = document.createTextNode('Folose??te ambalaje reutilizabile de ??mpachetat din textile ??? iut??, in, cutii metalice etc.')
    var node6 = document.createTextNode('Cite??te c??r??i ??n format electronic.')
    var node7 = document.createTextNode('??nlocuie??te prosoapele de h??rtie cu lavete din bumbac.')

    var nodes = document.createTextNode('H??rtia colectat?? trebuie s?? fie curat??, necontaminat?? de resturi de m??ncare, b??uturi, ulei, vopseluri ??.a.')
    var nodes1 = document.createTextNode('Se colecteaz?? h??rtia c??t mai compact, f??r?? a o face ghem.')
    var nodes2 = document.createTextNode('Se ??ndep??rteaz?? orice p??r??i metalice sau de plastic, cum ar fi: capse, cleme, scotch, folia de plastic de la plicuri.')
    var nodes3 = document.createTextNode('Se colecteaz?? pentru reciclare: c??r??i, caiete, h??rtie de birou, h??rtie de birou tocat??, reviste, ziare, cataloage ??i bro??uri, plicuri (f??r?? inser??ii de plastic), pungile de h??rtie neplastifiate, h??rtia maro (kraft).')
    var nodes4 = document.createTextNode('Cutiile de lapte ??i sucuri se recicleaz?? separat, ??n co??ul pentru plastic (recipiente tetrapak).')

    var nodes5 = document.createTextNode('??erve??elele ??i prosoapele de h??rtie;')
    var nodes6 = document.createTextNode('bonul fiscal, h??rtia de ambalat lucioas??;')
    var nodes7 = document.createTextNode('h??rtia cerat?? (ex: recipiente pt m??ncare cum sunt cutiile de la salate sau m??ncarea chinezeasc??, h??rtia pentru ambalarea unor alimente vrac, cum ar fi mezelurile);')
    var nodes8 = document.createTextNode('h??rtia plastifiat?? (ex: afi??e, coperta revistelor glossy ??? la rupere se observ?? o pelicul?? sub??ire de plastic lipit?? de h??rtie);')
    var nodes9 = document.createTextNode('paharele din carton pentru cafea (sunt cerate ??i plastifiate);')
    var nodes10 = document.createTextNode('h??rtia cu lipici (ex: post-it).')

    var nodu = document.createTextNode('Omenirea folose??te din ce ??n ce mai mult?? h??rtie? Consumul de h??rtie a crescut cu 400% ??n ultimii 40 de ani, iar acest lucru a dus la exploatarea intensiv?? a p??durilor, ??n unele ????ri ap??r??nd fenomenul de desp??durire. Se apreciaz?? c?? aproximativ 35% din copacii t??ia??i pe ??ntreaga planet?? sunt folosi??i pentru producerea de h??rtie.')
    var nodu1 = document.createTextNode('Reciclarea de??eurilor de h??rtie este o activitate menit?? s?? produc?? economii? Producerea h??rtiei din lemn consum?? mai multe resurse dec??t producerea h??rtiei din de??euri. Spre exemplu, o ton?? de h??rtie reciclat?? poate economisi 17 arbori maturi, 350 de kilograme de calcar, 125 kilograme de sulf, 227.000 litri de ap??, 25 m3 spa??iu ??n groapa de gunoi ??i 225 kilowa??i-or??.')
    var nodu2 = document.createTextNode('Pentru ob??inerea h??rtiei din fibre reciclate se folose??te cu 70% mai pu??in?? energie dec??t pentru cea din fibre naturale?')
    var nodu3 = document.createTextNode('Reciclarea h??rtiei ar duce la sc??derea volumului de de??euri (aproximativ 40% din de??eurile menajere generate ??n Statele Unite ??l constituie de??eurile de h??rtie ??i carton)?')

    heading.appendChild(subtitlu)
    heading1.appendChild(subtitlu1)
    heading2.appendChild(subtitlu2)
    heading3.appendChild(subtitlu3)
    heading4.appendChild(subtitlu4)

    p.appendChild(nod)
    p1.appendChild(nod1)
 
    pr.appendChild(node)
    pr1.appendChild(node1)
    pr2.appendChild(node2)
    pr3.appendChild(node3)
    pr4.appendChild(node4)
    pr5.appendChild(node5)
    pr6.appendChild(node6)
    pr7.appendChild(node7)

    par.appendChild(nodes)
    par1.appendChild(nodes1)
    par2.appendChild(nodes2)
    par3.appendChild(nodes3)
    par4.appendChild(nodes4)

    par5.appendChild(nodes5)
    par6.appendChild(nodes6)
    par7.appendChild(nodes7)
    par8.appendChild(nodes8)
    par9.appendChild(nodes9)
    par10.appendChild(nodes10)

    para.appendChild(nodu)
    para1.appendChild(nodu1)
    para2.appendChild(nodu2)
    para3.appendChild(nodu3)

    elem.appendChild(heading)
    elem.appendChild(p)
    elem.appendChild(p1)

    elem.appendChild(heading1)
    elem.appendChild(pr)
    elem.appendChild(pr1)
    elem.appendChild(pr2)
    elem.appendChild(pr3)
    elem.appendChild(pr4)
    elem.appendChild(pr5)
    elem.appendChild(pr6)
    elem.appendChild(pr7)

    elem.appendChild(heading2)
    elem.appendChild(par)
    elem.appendChild(par1)
    elem.appendChild(par2)
    elem.appendChild(par3)
    elem.appendChild(par4)

    elem.appendChild(heading3)
    elem.appendChild(par5)
    elem.appendChild(par6)
    elem.appendChild(par7)
    elem.appendChild(par8)
    elem.appendChild(par9)
    elem.appendChild(par10)

    elem.appendChild(heading4)
    elem.appendChild(para)
    elem.appendChild(para1)
    elem.appendChild(para2)
    elem.appendChild(para3)

    var original = document.getElementById('content-area')
    original.append(elem)
}

function showorganic() {
    removeChildren()
    var elem = document.createElement('div')

    var heading = document.createElement('h4')
    var heading1 = document.createElement('h4')
    var heading2 = document.createElement('h4')
    var heading3 = document.createElement('h4')

    var p = document.createElement('p')
    var p1 = document.createElement('p')

    var pr = document.createElement('p')
    var pr1 = document.createElement('p')
    var pr2 = document.createElement('p')
    var pr3 = document.createElement('p')
    var pr4 = document.createElement('p')

    var par = document.createElement('p')
    var par1 = document.createElement('p')
    var par2 = document.createElement('p')
    var par3 = document.createElement('p')
    var par4 = document.createElement('p')

    var par5 = document.createElement('p')
    var par6 = document.createElement('p')

    var subtitlu = document.createTextNode('Cum se recicleaz?? de??eurile organice?')
    var subtitlu1 = document.createTextNode('CUM COLECT??M DE??EURILE ORGANICE')
    var subtitlu2 = document.createTextNode(' Nu se pot recicla:')
    var subtitlu3 = document.createTextNode('??tia??i c?????')    

    var nod = document.createTextNode('Digestia aerob?? ??? cu sprijinul oxigenului (compostarea): de??eurile vegetale provenite din gospod??rii sunt amestecate cu de??eurile vegetale provenite de la spa??iile verzi, tocate ??i l??sate la compostat ??ntr-un ???tunel??? timp de 2-4 s??pt??m??ni. ??n acest interval, temperatura din interiorul tunelului ajunge p??n?? la 70 grade Celsius, distrug??nd microorganismele d??un??toare. Dup?? alte 1-3 luni (procesul de compostarea poate dura ??i p??n?? la 6-7 luni ??n func??ie de timpul de descompunere al anumitor de??euri, nivelul de ventila??ie, umiditate ??i al??i factori care influen??eaz?? procesul), timp ??n care compostul este aerisit ??i v??nturat, poate fi utilizat ca fertilizator ??n parcuri, planta??ii sau gr??dini.')
    var nod1 = document.createTextNode('Digestia anaerob?? ??? f??r?? sprijinul oxigenului: procesul folose??te microorganismele ap??rute ??n mod natural pentru a descompune materia organic?? ??n ??ngr??????m??nt, produc??nd de asemenea ??i biogaz. Biogazul este transformat ??n electricitate ??i c??ldur??. Din  materia organic?? descompus?? se ob??ine un fertilizator utilizat ??n agricultur??.')

    var node = document.createTextNode('De??eurile organice generate ??n gospod??rii se vor colecta separat de de??eurile reciclabile (h??rtie-carton, plastic, sticl??, metale, etc.), precum ??i de de??eurile menajere reziduale.')
    var node1 = document.createTextNode('Produsele alimentare excedentare ??i neexpirate se vor dona, pe c??t posibil, unor centre de copii, c??mine de b??tr??ni, persoane aflate ??n dificultate sau  vor fi direc??ionate c??tre ad??posturi de animale. De asemenea, pot fi direc??ionate c??tre organiza??ii de caritate pentru a fi distribuite c??tre loca??iile men??ionate anterior.')
    var node2 = document.createTextNode('Resturile organice vegetale se pot composta ??n curtea casei, ??ntr-un col?? amenajat special, sau la gr??dini urbane comunitare. Dac?? nu este posibil?? niciuna din aceste variante, se vor preda salubristului ca ???frac??ie umed?????.')
    var node3 = document.createTextNode('??n cazul ??n care de??eurile vegetale se composteaz?? ??n curtea casei, se va ??ncerca amestecarea resturilor ???verzi??? (coji de legume, pulp?? fructe) cu cele ???uscate??? (frunze ??i flori ve??tejite), asigur??ndu-se astfel un echilibru al nutrien??ilor compostului (azot, fosfor, potasiu).')
    var node4 = document.createTextNode('Compostul ob??inut dup?? c??teva luni de la colectare se poate folosi ca ??ngr??????m??nt ??n gr??dina proprie sau cea comunitar??.')

    var nodes = document.createTextNode('??erve??elele umede')
    var nodes1 = document.createTextNode('Batistele din h??rtie')
    var nodes2 = document.createTextNode('Alimente lichide (ex. lapte)')
    var nodes3 = document.createTextNode('Resturi vegetale afectate de d??un??tori (pot afecta calitatea compostului)')
  
    var nodes4 = document.createTextNode('Un camion de de??euri organice poate genera energie care s?? alimenteze 20.000 TV timp de 1 or??')
    var nodes5 = document.createTextNode('Risipa de alimente din Rom??nia reprezint?? o problem?? social?? major??: arunc??m anual cca 250 kg de alimente/locuitor (peste media european??), ??n timp ce 4,74 milioane de persoane (un sfert din popula??ia Rom??niei) tr??iesc la limita s??r??ciei ??i au dificult????i ??n asigurarea hranei')
    var nodes6 = document.createTextNode('Compostul este o alternativ?? ecologic?? ??i sustenabil?? la ??ngr??????mintele chimice folosite ??n agricultur??.')

    heading.appendChild(subtitlu)
    heading1.appendChild(subtitlu1)
    heading2.appendChild(subtitlu2)
    heading3.appendChild(subtitlu3)

    p.appendChild(nod)
    p1.appendChild(nod1)
 
    pr.appendChild(node)
    pr1.appendChild(node1)
    pr2.appendChild(node2)
    pr3.appendChild(node3)
    pr4.appendChild(node4)

    par.appendChild(nodes)
    par1.appendChild(nodes1)
    par2.appendChild(nodes2)
    par3.appendChild(nodes3)
   
    par4.appendChild(nodes4)
    par5.appendChild(nodes5)
    par6.appendChild(nodes6)

    elem.appendChild(heading)
    elem.appendChild(p)
    elem.appendChild(p1)

    elem.appendChild(heading1)
    elem.appendChild(pr)
    elem.appendChild(pr1)
    elem.appendChild(pr2)
    elem.appendChild(pr3)
    elem.appendChild(pr4)

    elem.appendChild(heading2)
    elem.appendChild(par)
    elem.appendChild(par1)
    elem.appendChild(par2)
    elem.appendChild(par3)

    elem.appendChild(heading3)
    elem.appendChild(par4)
    elem.appendChild(par5)
    elem.appendChild(par6)


    var original = document.getElementById('content-area')
    original.append(elem)
}

function removeChildren() {
    const myNode = document.getElementById('content-area')
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild)
    }
}