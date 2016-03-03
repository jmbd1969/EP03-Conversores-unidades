//<script type="text/javascript">

      var suma=function(numero1,numero2,numero3,numero4){
        numero1=parseInt(document.getElementById("numero1").value);
        numero2=parseInt(document.getElementById("numero2").value);

        numero3=parseInt(document.getElementById("numero3").value);
        numero4=parseInt(document.getElementById("numero4").value);
          console.log(numero1);
          console.log(numero2);
          console.log(numero3);
          console.log(numero4);
        if(numero2==numero4){
          alert("los  denominadores  son  iguales");
          //document.write("El  resultado  de  sumar  las  fracciones  homogeneas  se  visualizara  a  continuación"+"<br>"+"<br>")
         Nume=numero1+numero3;
         Deno=numero2;
        //  document.write(Nume+"<br>");
        //  document.write("-------------"+"<br>");
      //    document.write(Deno+"<br>"+"<br>");
        document.write("<p> el  resultado de  sumar  las  fracciones  homogeneas es:"+Nume+"/"+Deno+ "</p>");

          if(Nume % 2 ==0){
            console.log("el  numero  es  par:"+Nume);
            nn=Nume/2;
          /*  document.write("El  resultado  simplificado  es:"+"<br>"+"<br>");
            document.write(nn+"<br>");
            document.write("-------------"+"<br>");
            document.write(Deno);*/
              document.write("<p> el  resultado simplificado es:"+nn+"/"+Deno+ "</p>");
          }

          op=Nume+"/"+Deno;
          return op;
        }else if (numero2!=numero4) {
          var n1=numero1*numero4;
          var  n2=numero2*numero3;
          var numedor=n1+n2;
          Cdv=numero2*numero4;
          alert("Los  denominadores  son  diferentes")
          console.log(n1);
          console.log(n2);
          console.log(  Cdv);
          document.write("la  suma  de  los  fraccionarios  heterogeneos  es:"+numedor+"/"+Cdv+"<br>");
        }
}
//</script>