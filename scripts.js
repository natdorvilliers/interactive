console.log("king nat is here")



//invert button 
var invertButton = document.querySelector('.bg-color')
var bodyClass = document.body.classList


invertButton.addEventListener("click", changeColor)

function changeColor() {
	bodyClass.add('invert')

}



// greeting 
var wavingHand = document.querySelector('.waving-hand')
var greeting = document.querySelector('.greeting')

wavingHand.addEventListener("click", sayHello)

function sayHello(){
	greeting.textContent = "deal with it, pEasant (*ಠ_ಠ)つ"
}

