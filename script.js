
function punkty(){

    const czas_1 =document.getElementById('punkty_1').value
    const maska =document.getElementById('punkty_2').value
    const pozycjabezp =document.getElementById('punkty_3').value
    const mapa=document.getElementById('punkty_4').value
    const punkty_5=document.getElementById('punkty_5').value
    const punkty_6=document.getElementById('punkty_6').value

    //Konkurencja nr_1 ladowanie magazynka
    let kon1=0
    if(czas_1>90){
        konk1 ==0;
        console.log(`niestety ${kon1} puntkow za ladowanie magazynka`)

    }else{
        konk1=20+((90-czas_1)*2)
        console.log(konk1)
        console.log(`${konk1} punktów za ladowanie magazynka`)
    }
    //Konkurencja 2 Maska
    let konk2=0
    if(maska>9){
        konk2==9
        console.log(`niestety za maske ${konk2} punktow`)
    }else{
        konk2=20+((9-maska)*10)
        console.log(konk2)
        console.log(`wnik za maske ${konk2}`)
    }
    //Pozycja bezpieczna
    let konk3=0
    if(pozycjabezp>120){
        konk3==0
        console.log(konk3)
        console.log(`za Pozycje bezpieczna ${konk3} punktów`)
    }else{
        konk3=20+((120-pozycjabezp)*2)
        console.log(konk3)
        console.log(`Wynik za pozycje bezpieczna ${konk3}`)
    }
    //MAPA
    let konk4=0
    if(mapa>70){

        konk4==0
        console.log(konk4)
        console.log(`Wynik za Mape ${konk4}`)
    }else{
        konk4=20
        tescik=((70-mapa)/5)
        tescik =Math.round(tescik)
        console.log(`wynik za mape ${tescik}`)
        console.log(konk4)
    }

    var data=document.getElementById('demo').innerHTML;
    console.log("the data is="+data)

  
   


}