function buscar(texto)
{
    var nombre = new Array();
    nombre[0] = "iPod 5th Gen ipod gen";
    nombre[1] = "iPod 4th Gen ipod gen";
    nombre[2] = "iPod nano 7th Gen ipod gen";
    nombre[3] = "iPod nano 6th Gen ipod gen";
    nombre[4] = "iPod shuffle 5th Gen ipod gen";
    nombre[5] = "Laptop VAIO - Pro 13 laptop vaio pro";
    nombre[6] = "Laptop VAIO - Duo 13 laptop vaio duo";
    nombre[7] = "Laptop Alienware 14 - Gaming laptop alienware gaming";
    nombre[8] = "Laptop Alienware 18 - Gaming laptop alienware gaming";
    nombre[9] = "Laptop Samsumg - ATIV Book 6 laptop samsung ativ book";
    nombre[10] = "Phone Apple iPhone 5 phone apple iphone";
    nombre[11] = "Phone Samsung Galaxy S4 phone samsung galaxy s4";
    nombre[12] = "Phone Sony Xperia Z phone sony xperia z";
    nombre[13] = "Phone Nokia Lumia 920 phone nokia lumia";
    nombre[14] = "Phone Blackberry Z10 phone blackberry z10";
    nombre[15] = "Tablet SM-T211 tablet sm-t211";
    nombre[16] = "Tablet Note 8.0 tablet note";
    nombre[17] = "Tablet GALAXY Tab 3 tablet galaxy Galaxy tab";
    nombre[18] = "Tablet Nexus 7 tablet nexus";
    nombre[19] = "Tablet ASUS Fonepad tablet asus fonepad";
    nombre[20] = "PC Desktop HP Pavilion pc desktop hp pavilion";
    nombre[21] = "PC Desktop HP ENVY Phoenix pc desktop hp phoenix";
    nombre[22] = "PC Desktop Dell Inspiron pc desktop dell inspiron";
    nombre[23] = "PC Desktop Acer Predator pc desktop acer predator";
    nombre[24] = "PC Desktop Gateway pc desktop gateway";
    var direccion = new Array();
    direccion[0] = "Ipod1.html";
    direccion[1] = "Ipod2.html";
    direccion[2] = "Ipod3.html";
    direccion[3] = "Ipod4.html";
    direccion[4] = "Ipod5.html";
    direccion[5] = "laptop1.html";
    direccion[6] = "laptop2.html";
    direccion[7] = "laptop3.html";
    direccion[8] = "laptop4.html";
    direccion[9] = "laptop5.html";
    direccion[10] = "phone1.html";
    direccion[11] = "phone2.html";
    direccion[12] = "phone3.html";
    direccion[13] = "phone4.html";
    direccion[14] = "phone5.html";
    direccion[15] = "Tablet1.html";
    direccion[16] = "Tablet2.html";
    direccion[17] = "Tablet3.html";
    direccion[18] = "Tablet4.html";
    direccion[19] = "Tablet5.html";
    direccion[20] = "PC1.html";
    direccion[21] = "PC2.html";
    direccion[22] = "PC3.html";
    direccion[23] = "PC4.html";
    direccion[24] = "PC5.html";
    var texto = document.getElementById('texto').value;
    

    document.body.innerHTML=""; 
            document.write("<!DOCTYPE html><html lang=es><head><title>Catálogo de ventas</TITLE><meta charset=utf-8/><meta name=Inicio content=Catálogo de ventas sobre productos informáticos/><link rel=stylesheet href=estilo/estilo-index.css /><script src=js/funcion.js></script></head>");
            document.write("<body>");
            document.write("<script type=text/javascript src=js/encabezado.js></script>");
    document.write("<section id=cont-general>");
    document.write("<nav>RESULTADOS DE SU BUSQUEDA: </nav>");
    for (i=0; i<=24; i++)
    {
        if(nombre[i].indexOf(texto) != -1)
        {

            document.write("<section id=resultado>");
            document.write("<a href= "+ direccion[i] +">"+ nombre[i] +"</a><br><br>");
            document.write("</section>");
        }
    }
    document.write("</section>");
    document.write("<script type=text/javascript src=js/pie.js></script>");
    document.write("</body></html>");
}

