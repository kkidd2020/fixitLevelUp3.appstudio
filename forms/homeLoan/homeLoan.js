btnCalculateHL.onclick=function(){
  let homePrinciple = Number(inptPrincipleHL.value)
  let begInterest = Number(inptInterestHL.value)
  let homeInterest = begInterest/12/100
  let totalMonthsHL = Number(slctHomeTerm.value)*12
  
  function homeLoanPayment(principle, interest, months) {
  return (principle * (interest*((1+interest)**months)) / (((1 + interest)**months)-1))
}

let monthlyPayment = homeLoanPayment(homePrinciple, homeInterest, totalMonthsHL)
let roundedMonthlyPayment = monthlyPayment.toPrecision(6)

lblPaymentHL.value = `A home loan for $${homePrinciple} over ${totalMonthsHL} months at ${begInterest}% interest would have a monthly payment of $${roundedMonthlyPayment}.`

}
btnTryAgainHL.onclick=function(){
  inptPrincipleHL.value = ""
  inptInterest.value = ""
  slctHomeTerm.value = ""
  lblPaymentHL.value = ""


}

btnHome.onclick=function(){
  ChangeForm(homePage)
}