matchtasic = (name, name2) => {


    let letter = /[a-zA-Z]/
    
let randomnoun = Math.floor(Math.random()*3)
let randomnumber = Math.floor(Math.random()*101)

let prediction = name + ' & ' + name2 + " have a " + randomnumber + "% Match-tastic rating, I suggest you"


if (name.match(letter) === null ) {
 return 'thats not a name u idiot'
}
if (randomnumber === 0){
    prediction +=  " run Away!"
    return prediction
}if (randomnumber >= 1 && randomnumber <= 25 ) {
    let noun = ''
    switch (randomnoun){
    case 0:
    noun = 'friends'
    break
    case 1:
    noun = 'buddies'
    break
    case 2 :
    noun = 'coffee buddies'
    break
    case 3 :
    noun = 'study partners'
    break;
    }
   prediction +=  " just stay " + noun
    return prediction

}if (randomnumber >= 26 && randomnumber <= 50) {
    prediction +=  " steer clear from this possible Nightmare "
    return prediction
}if ( randomnumber >=51 && randomnumber <= 75) {
    prediction +=  " test your fate, this could be great"
    return prediction
}if (randomnumber >= 76 && randomnumber <= 99) {
  prediction +=  " go for it, this could be your fairytale, perhaps!" 
  return prediction 
}if (randomnumber === 100) {
  prediction += " confess how you feel this is a match made in heaven"
  return prediction

}else{






}
    
}
