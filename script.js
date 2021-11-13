
alert("Istagan soningizni istagan darajaga kopaytirmoqchimisiz, unda 'ok' tugmasini bosing. P.S. xizmatlar mutlaqo bepul. Chala kalkulyator-Xalq tanlovi ")




let numb = +prompt("Istagan soningizni kliriting")
while(numb === 0 || isNaN(numb) ) {
    numb = +prompt("Kalkulyator chala bo'lsa ham, son qandayligini biladi. Faqat son kiriting!") 
}


let daraja = +prompt("Istagan soningizni darajasioni kiriting")
while(daraja === 0 || isNaN(daraja) ) {
    numb = +prompt("Kalkulyator chala bo'lsa ham, son qandayligini biladi. Faqat son kiriting!") 
 }


 let result=1
 for(let f=1; f<=daraja; f++   ) {
     result = result*numb
    
 } alert(result)
 
 