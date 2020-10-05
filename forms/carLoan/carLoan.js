  
btnCalculate.onclick=function(){
  let carPrinciple = Number(inptPrinciple.value)
  let begInterest = Number(inptInterest.value)
  let carInterest = begInterest/12/100
  let totalMonths = Number(inptMonths.value)
  
  function carLoanPayment(principle, interest, months) {
  return (principle * (interest*((1+interest)**months)) / (((1 + interest)**months)-1))
}

let payment = carLoanPayment(carPrinciple, carInterest, totalMonths)
let roundedPayment = payment.toPrecision(5)

lblPayment.value = `A car loan for $${carPrinciple} over ${totalMonths} months at ${begInterest}% interest would have a monthly payment of $${roundedPayment}.`

}
btnTryAgain.onclick=function(){
  inptPrinciple.value = ""
  inptInterest.value = ""
  inptMonths.value = ""
  lblPayment.value = ""


}

btnGoHome.onclick=function(){
  ChangeForm(homePage)
}
