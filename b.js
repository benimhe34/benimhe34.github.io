 
    function oyna(){
       
        alert("SAYİ TAHMİN OYUNUNA HOŞ GELDİNİZ")
        alert("TUTUĞUM SAYİ 0 İLE 5 ARASINDA . 2 ŞANSIN VAR BOL ŞANSLAR")
        let tah=(Math.floor((Math.random()*5)));
        console.log(tah);
        let cvp =prompt("SAYI GİRİN");
        
        
        
            
            if (tah == cvp) {
                alert(`TEBRİKLER DOĞRU CEVAP TUTUGUMM SAYİ = ${tah}`)
                
            } else {
               alert(`YANLIŞ TEKRAR DENEYİNİZ`);
               let tah=(Math.floor((Math.random()*5)));
               console.log(tah);
               let cvp =window.prompt("SAYI GİRİN");
        
              
               tah == cvp ? alert(`TEBRİKLER DOĞRU CEVAP = ${tah}`):alert(`MALESEF TUTUGUM SAYİYİ BİLEMEDİN CEVAP = ${tah} `);
            }
            
        }
        function reset(){
            location.reload()
         
        }