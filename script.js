// creation of the three arrays
const personArr = 
  [
    "Father Burgundy",
    "Constable Grey",
    "Sir Orange",
    "Master Purple",
    "Duke Indigo",
    "Principal Red",
    "Grandfather Smith",
    "Commissioner Gordon"
  ];

const locationArr = 
  [
    "the sauna",
    "the larder",
    "the study",
    "the laundry room",
    "the garden",
    "the bar",
    "the gallery",
    "the pool",
    "the cellar"
  ];
  
const toolArr = 
  [
    "bowling ball",
    "revolver",
    "rope",
    "knife",
    "pudgel",
    "bazooka",
    "lightsaber",
    "shard of glass",
    "stapler"
  ]

// give a random position of the array selected  
const selectArr = (array) => {
  return(array[Math.floor(Math.random()*array.length)]);
}

// creation of the message
const createMessage = () => {
  const message = "It was " + selectArr(personArr) + " in " + selectArr(locationArr) + " with the " + selectArr(toolArr) + "!";
  return message;
};

// running the program
const init = () => {
  const message = createMessage();
  console.log(message);
  return message;

};

function demo() {
  document.getElementById("output").innerHTML = init();
  document.getElementById("feelings").innerHTML = "Search your feelings, you know it to be true...";
 }