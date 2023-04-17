let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

const logCalc = () => { 
    const isString = typeof calculated // 'numerical-string' 
    // console.log(isString)
    const calculatedAsNumber = typeof isString === "number" ? calculated : parseInt(calculated) 
    calculated = calculatedAsNumber + 1 
    console.log(calculated)
}

const calcUser = () => {
  logCalc()
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

console.log(checkUser())
console.log(calcUser())

console.log(checkUser())
console.log(calcUser())

console.log(checkUser())
console.log(calcUser())

console.log(checkUser())
console.log(calcUser())

console.log(checkUser())
console.log(calcUser())