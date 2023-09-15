const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
var storyText="It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared straight ahead for a few moments, then :insertz:. Star, a :insertp:, saw the whole thing, but wasn't surprised — they looked away and then jumped straight into a :inserts: as it was a hot day.";
var insertS=["pool of tomatoes","river of iceballs","turquoise ocean full of marbles","giant seashell","dormant volcano","time travel machine","puddle","ice cream tub","bottle of sparkling water"];
var insertX=["Prilly the Goblin","Fizzy Fuzzle","Wacky Waffle","Jazzy Puff","Goober Bump","Nelly Tumble","Wonky Linder","Snooty Snuffle","Bumpy Toot","Goober Bump","Snappy Snip","Wizzy Wink","Squeezy Muff","Binky Noodle","Rolly Rumble","Wally Wumble","Jazzy Puff"];
var insertP = ["purple unicorn with a rainbow mane","talking pineapple that loves to dance","giant spider that knits sweaters for its friends","snowman that wants to go to the beach","giant cake that is alive","flying carpet that can travel through time","sneaky ninja who is afraid of the dark","friendly dragon who likes to bake cookies","pirate captain who is allergic to parrots","clumsy astronaut who always drops things in space","magical teapot that has a mind of its own","superhero who can turn invisible but only when no one is looking","vampire who is vegan and drinks tomato juice","mermaid who dreams of becoming a rock star","zombie who is a grandmaster of chess","fairy who is afraid of heights and hates flying","robot who wants to be a comedian","dinosaur who loves to play soccer","witch who is allergic to cats and has a pet frog","vegan werewolf who loves gardening","king who is secretly a spy","princess who is a ninja in disguise"];
var insertY = ["the soup kitchen","a haunted house with a friendly ghost","a medieval castle with a dragon","a supermarket where everything is pineapple","a time machine that malfunctions","a haunted forest with a witch","a volcano that is about to erupt in giggles","a roller coaster that never stops","a jungle where the plants can sing","a submarine that is running out of popcorns","a circus where the clowns are scared of the audience","a school where the teachers are robots","a chocolate factory with a charcoal ticket", "a zoo where the animals can talk","a secret underground laboratory where experiments must go wrong","a museum where the exhibits come to life at night","a desert island with a coconut radio","a pirate ship that is sinking","a spaceship full of aliens who love Bollywood movies","Disneyland","the White House"];
var insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","splattered paint all over a young dinosaur","started bouncing on a trampoline","started jugging 10 bowls at once","doodled something on a sleeping policeman and galloped away","started sqeaking in a hummingbird's voice","drank a soda and started to breathe bubbles","took a candy out of a pocket, ate it and started to change colours","started shouting about a snowman who came alive","went to a barber to look like a grapefruit","ate a pizza and started to levitate","glued a sparkly hat to one hand","floated away in a giant plastic duck","took a nap on a toffee","went to a tattoo shop to tattoo bubbles all over themselves","sent a random text to the college principal in alien code","ate a candy and turned into a giant cockroach", "turned into a slug and crawled away"];
randomize.addEventListener('click', result);

function result() {
   var newStory = storyText;

var xItem, yItem, zItem, pItem,sItem;

xItem = randomValueFromArray(insertX);
yItem = randomValueFromArray(insertY);
zItem = randomValueFromArray(insertZ);
pItem = randomValueFromArray(insertP);
sItem = randomValueFromArray(insertS);

newStory = newStory.replace(":insertx:",xItem);
newStory = newStory.replace(":inserty:",yItem);
newStory = newStory.replace(":insertz:",zItem);
newStory = newStory.replace(":insertp:",pItem);
newStory = newStory.replace(":inserts:",sItem);
  
  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Star', name);
  }

  if(document.getElementById("uk").checked) {    
    var temperature =  Math.round(6.89*5)+' centigrade';
    newStory = newStory.replace("94 fahrenheit", temperature);       
  }
  if(document.getElementById("india").checked) {    
    var temperature =  Math.round(6.89*5)+' celcius';
    newStory = newStory.replace("94 fahrenheit", temperature);       
  }
  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
