matchtasic = (name,name2) => {

let randomnumber = Math.floor(Math.random()*101)

let prediction = name + ' & ' + name2 + " have a " + randomnumber + "% Match-tastic rating"
if (randomnumber === 0){
  return "Run Away!"
}if (randomnumber >= 1 && randomnumber <= 25 ) {
  return "Just stay friends"
}if (randomnumber >= 26 && randomnumber <= 50) {
  return "Possible Nightmare "
}if ( randomnumber >=51 && randomnumber <= 75) {
  return "Test your fate, this could be great"
}if (randomnumber >= 76 && randomnumber <= 99) {
  return "A fairytale, perhaps!"  
}if (randomnumber === 100) {
  prediction += "A match made in heaven"

}else{
    
}




    











}