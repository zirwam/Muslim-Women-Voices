var x;
var imageFilea;
var imageFile;
var imageFile2;
var quotes;
var accom;
var bio;
var currentQuote;
var boxShowing = null;
var showfeed = false
var maph=620,
    mapw=400;

function preload (){
  //imageFilea = loadImage('assets/scrool.jpg')
  imageFile = loadImage('assets/background.jpg')
  imageFile2 = loadImage('assets/arrow.png')
  
  /* Web editor currently fetches sources over http.
  * This makes embedding a problem.
  * I have commented out these lines and replaced them
  * with array literals in setup(), but hopefully
  * we can return to the student's code soon.
  * --- Paul Peng, TA
  */
  //quotes = loadStrings('quotes.txt');
  //bio = loadStrings('bio.txt')
  //accom = loadStrings('accom.txt')
}
function setup() { 
  createCanvas(windowWidth,windowHeight);
  quotes = [
    '"I maintain that nothing useful and lasting can emerge from violence." - Shirin Ebadi.',
    '"As long as you are responsible for building a healthy community, then that’s what gives you motivation and hope, and prevents you from losing hope."- Daisy Khan',
    '"If people can see Earth from up here, they see it without those borders, see it without any differences in race or religion, they would have a completely different perspective. Because when you see it from that angle, you cannot think of your home or your country. All you can see is one Earth ..." - Anousheh Ansari',
    '"Women are intersectional human beings who live multi-issued lives... when we are respected, when we are able to thrive and given the same opportunities as our male counterparts, when we are given space to lead and rise — our nation will rise."- Linda Sarsour',
    '"Its not my responsibility to be beautiful,I\'m not alive for that purpose.My existence is not about how desirable you find me." -Warshan Shire',
    '"As a Muslim woman, I’ve been liberated from a silent kind of bondage. I don’t answer to the slaves of God on earth. I answer to their King."-Yasmin Mogahed',
    '"If one man can destroy everything, why can\'t one girl change it?" — Malala Yousafzai',
    '"I have a calling and purpose in this world. We must stand and speak up against injustices, my family gets that, it’s not easy but this is who I am. If loving my land means I will die, so be it.”— Fadumo Dayib',
    '“Whatever title or office we may be privileged to hold, it is what we do that defines who we are … Each of us must decide what kind of person we want to be—what kind of legacy that we want to pass on.”—Queen Rania Al Abdullah of Jordan',
    '"I believe in rebellion as a form of honesty, to be our most authentic self is to rebellious"- Noor Tagouri',
    '“By working to increase self esteem and self confidence in addition to basic self defense knowledge, we are strengthening women in body, mind and spirit.” - Zainab Abdulla',
    '"Yes, there are oppressed women in the Muslim world. Women are oppressed the world over. These are our mutual struggles" - Amirah Sackett',
    '"Not seeing women that look like you in media in general and especially in beauty competitions sends the message that you’re not beautiful or you have to change the way you look to be considered beautiful, and that’s not true." -Halima Aden',
    '"If there’s someone that can speak to a lived experience that you cannot, do not take up that space, do not speak on their behalf, let them speak for themselves." -Amani Al-Khatahtbeh',
    '“It’s important we women show we are not afraid.” - Linda Sarsour',
    '"Set lofty goals for yourself and believe that with really hard work you can achieve them" -Ibtihaj Muhammad'
  ];
  bio = [
    '"Muslim Women Voices" is an interactive website that showcases the opinions and accomplishments of Muslim women. A large portion of the media, in today\'s day and time, portrays Muslim women as weak and oppressed. This project was created to tell an opposing narrative, showing the opinions and strengths of them, instead.'
  ];
  accom = [
    'Nusayba bint Ka\'b Al-Ansariyah was one of the first advocates of women rights. She once asked Prophet Muhammed (PBUH) why only men where mentioned  in the quran. Soon after, a revelation from the was recieved which stated that women can attain every quality to which men have access.',
    'Fatima al-Fihri was the the founder of the oldest degree granting university in the world. The Guinness Book of World Record and UNESCO recognizes the university to be the "oldest continously operating institution of higher education".',
    'Sultan Raziya was the Suktan of Dehli from 1236 to 1240. she estaiblishes schools, academies, centers of research and public libraries.',
    'Laleh Baktiar was the first american woman to translate the Quran into English.',
    'Shirin Ebadi was the first Muslim woman to recieve the first Nobel Peace Prize.',
    'Shirin Ebadi was the first woman to achieve Cheif Justice status.',
    'Amina Wadud was the first female imam to lead a mixed- congregation prayer.',
    'Daisy Khan founded the Women\'s Islamic Intiative in Spiritualityand Equalit, the only global movement that works to reclaim women\'s rights in slam using human rights and social justice.',
    'Anousheh Ansari was the first muslim women taht traveled to space.',
    'Dalia Mogahed was the US\' first muslim woman in the White House. She was one of Barack Obama\'s closest advisors\' advocating the views and opinions of Muslims across the country.',
    'Ibtihaj Muhammad was the first Muslim American fencer in the world.',
    'Malala Yousafzai, a Pakistani activist for female education, is the youngest holder of the Nobel Peace Prize.',
    'Sayeeda Warsi was the first Muslim minister to sit in the British cabinet.',
    'Ibtihaj Muhammad was the first Muslim American female to win a Olympic medal.'
  ];
	getNewWords();
}
//function keyPressed() {
  //saveFrames("out", "png", 1, 25);
//}
function getNewWords() {
	currentQuote= quotes[floor(random(quotes.length))];
  currentAccom= accom[floor(random(accom.length))];
  } 
function draw() { 
  background(220);
  image(imageFile, 0, 0, windowWidth, windowHeight);
  fill(255,202,193, 240)
  noStroke()
  rect((200/400)*windowWidth, (150/620)*windowHeight, 300, 150)
	fill(255)
  textAlign(CENTER,CENTER)
  textSize(40);
  text("muslim women", (200/400)*windowWidth, (140/620)*windowHeight);
	textSize(69);
    text("VOICES", (200/400)*windowWidth, (185/620)*windowHeight);
  textFont("TimesNewRoman");
	fill(255,202,193, 240)
  noStroke()
	rectMode(CENTER)
	rect((200/400)*windowWidth, (352/620)*windowHeight, 200, 50)
  rect((200/400)*windowWidth, (435/620)*windowHeight, 200, 50)
  rect((200/400)*windowWidth, (515/620)*windowHeight, 200, 50)
  fill(255)
  textAlign(CENTER)
  textSize(34);
  text("quotes", (200/400)*windowWidth, (330/620)*windowHeight);
  text("about us", (200/400)*windowWidth, (490/620)*windowHeight);
  textSize(34);
  text("women", (200/400)*windowWidth, (410/620)*windowHeight);
 
  if(boxShowing === "quotes"){
  rect((200/400)*windowWidth, (310/620)*windowHeight, windowWidth*(3/4), 480);
    fill(255,202,193)
    ellipse( windowWidth*(3.75/4), windowHeight /2, 30 ,30);
    image(imageFile2, windowWidth*(3.65/4), windowHeight /2.074, 20, 20)
  //rectMode(CENTER);
  textSize(20)
  textAlign(CENTER,CENTER)
  text(currentQuote,(200/400)*windowWidth, (310/620)*windowHeight, windowWidth/2, windowHeight/1.5);
}
   if(boxShowing === "accom"){
  //textAlign(CENTER)
    // rectMode(CORNER);
     rect((200/400)*windowWidth, (310/620)*windowHeight, windowWidth*(3/4), 480);
  //   text("hi", 0,h/2, width, height);
   
   
      fill(255,202,193)
      ellipse( windowWidth*(3.75/4), windowHeight /2, 30, 30);
    image(imageFile2, windowWidth*(3.65/4), windowHeight /2.074, 20, 20)
     textSize(20)
  textAlign(CENTER,CENTER)
     text(currentAccom,(200/400)*windowWidth, (310/620)*windowHeight, windowWidth/2, windowHeight/1.5);

  }
     if(boxShowing === "about"){
  rect((200/400)*windowWidth, (310/620)*windowHeight, windowWidth*(3/4), 480);
       fill(255,202,193)
       //ellipse( width*(3.75/4), height /2, 25, 25);
       textAlign(CENTER)
       textSize(18)
  fill(255,202,193)
       text("contact us at:", (200/400)*windowWidth, (420/620)*windowHeight, windowWidth, windowHeight);
       text("instagram : @mwvoices", (200/400)*windowWidth, (460/620)*windowHeight, windowWidth, windowHeight);
			 text("muslimwomenvoices@gmail.com", (200/400)*windowWidth, (495/620)*windowHeight, windowWidth, windowHeight);
       textAlign(CENTER,CENTER)
       text(bio, (200/400)*windowWidth, (270/620)*windowHeight, windowWidth/2, windowHeight);
  }

}
function mousePressed() {
  if(mouseX>(100/400)*windowWidth&&
     mouseX<(300/400)*windowWidth&&
     mouseY>(410/620)*windowHeight&&
     mouseY<(460/620)*windowHeight){
  			boxShowing= "accom"
}
  else if(mouseX>(100/400)*windowWidth&&
     mouseX<300/400*windowWidth&&
     mouseY>330/620*windowHeight&&
     mouseY<380/620*windowHeight){
  			boxShowing= "quotes"
}
  else if(mouseX>(100/400)*windowWidth&&
     mouseX<300/400*windowWidth&&
     mouseY>490/620*windowHeight&&
     mouseY<540/620*windowHeight){
  			boxShowing= "about"
     }
  else if(mouseX>(windowWidth*(3.75/4))-12.5&&
     mouseX<(windowWidth*(3.75/4))+12.5&&
     mouseY>windowHeight /2 -12.5&&
     mouseY<windowHeight /2+12.5){
  			getNewWords();
  }
  else {
   	boxShowing = null
}
}
