gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// loader js


gsap.to("#black8",{
  y:-25,
  height:0,
  duration:1.2,
  delay:1
})
gsap.to("#black7",{
  y:-25,
  height:0,
  duration:1,
  delay:1.01
})
gsap.to("#black6",{
  y:-25,
  height:0,
  duration:1,
  delay:1.52
})
gsap.to("#black5",{
  y:-25,
  height:0,
  duration:1,
  delay:2.03
})
gsap.to("#black4",{
  y:-25,
  height:0,
  duration:1,
  delay:2.54
})
gsap.to("#black3",{
  y:-25,
  height:0,
  duration:1,
  delay:3.05
})
gsap.to("#black2",{
  y:-25,
  height:0,
  duration:1,
  delay:3.56
})
gsap.to("#black1",{
  y:-25,
  height:0,
  duration:1,
  delay:4.07
})
gsap.to("#black0",{
  y:-25,
  height:0,
  duration:1,
  delay:4.58
})
gsap.to("#loader",{
  y:-25,
  height:0,
  duration:1,
  delay:4.6
})


document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {

      gsap.to("#loader", {
          height: 0,
          y: -20,
          delay: 2,
          duration: 2,
          ease: Expo.easeInOut
      })
  }
})
// 
const cursor = document.querySelector(".sun");
var timeout;

//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
  let x = e.pageX-200;
  let y = e.pageY-200;

  cursor.style.top = y+ "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  //cursor effects when mouse stopped
  function mouseStopped(){
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 8000);
});

//cursor effects when mouseout
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

var main=document.querySelector("#main");
var slide=document.querySelector(".slide");




var t1 = gsap.timeline();


document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
      
      gsap.to("#first #slideUp .slide #carrd1",{

          duration:2,
          opacity:1,
          y : -180,
          delay:2,
          
        })
        
        gsap.to("#first #slideUp .slide #carrd2",{
            duration:2,
            opacity:1,
            y : -200,
            delay:2,
            
        })
  }
})
// t1.to("#first #slideUp .slide #carrd1",{
  
//   duration:1,
//   opacity:1,
//   y : -180,
//   delay:-1,
  
// })

// t1.to("#first #slideUp .slide #carrd2",{
//     duration:1,
//     opacity:1,
//     y : -200,
//     // position: fixed,
    
// })



t1.from("#second h1", {
  
  y:300,
  opacity:0,
  scrollTrigger: {
    trigger: "#second ",
    scroller: "#main",
    scrub: 2,
    start: "30% 50%",
    end: "+=200",
    pin:true,
    // markers:true
  },
  transform : "scaleX(3) scaleY(3)",
  
  color: "#fff"
});


t1.from("#secondPara", {
 opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: "#second",
    scroller: "#main",
    scrub: 2,
    start: "35% 50%",
    end: "+=200",
    // markers:true,
    pin:true,
  },
 
  transform : "scaleX(1.5) scaleY(1.5)",
  ease: "none",
  color:"#fff",
});


gsap.from("#second #caaradp", {
  opacity: 0,
    
   scrollTrigger: {
     trigger: "#second",
     scroller: "#main",
     scrub: 2,
     start: "45% 50%",
     end: "+=200",
     pin:true,
   },
   y: 200,
   
  transform : "scaleX(3) scaleY(3)",
   ease: "none"
 });

 const text = document.querySelector('#caarad>h3');
 text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");

 const gola= document.querySelectorAll('span');
 for(let i=0;i<gola.length;i++)
 {
     gola[i].style.transform = "rotate("+ i*26 +"deg)"
 }

//caards ki bakchodi
document.querySelector("#thirdCards5").addEventListener("click",function(){
  document.querySelector("#thirdCards5").style.display  = "none";
  document.querySelector("#thirdCards5").style.transition   = "all 1s";
  document.querySelector("#thirdCards10").style.opacity  = "1";
  document.querySelector("#thirdCards10").style.transition   = "all 1s";
})

document.querySelector("#thirdCards4").addEventListener("click",function(){
  document.querySelector("#thirdCards4").style.display  = "none";
  document.querySelector("#thirdCards4").style.transition   = "all 1s";
  document.querySelector("#thirdCards9").style.opacity  = "1";
  document.querySelector("#thirdCards9").style.transition   = "all 1s";
})

document.querySelector("#thirdCards3").addEventListener("click",function(){
  document.querySelector("#thirdCards3").style.display  = "none";
  document.querySelector("#thirdCards3").style.transition   = "all 1s";
  document.querySelector("#thirdCards8").style.opacity  = "1";
  document.querySelector("#thirdCards8").style.transition   = "all 1s";
})

document.querySelector("#thirdCards2").addEventListener("click",function(){
  document.querySelector("#thirdCards2").style.display  = "none";
  document.querySelector("#thirdCards2").style.transition   = "all 1s";
  document.querySelector("#thirdCards7").style.opacity  = "1";
  document.querySelector("#thirdCards7").style.transition   = "all 1s";
})

document.querySelector("#thirdCards1").addEventListener("click",function(){
  document.querySelector("#thirdCards1").style.display  = "none";
  document.querySelector("#thirdCards1").style.transition   = "all 1s";
  document.querySelector("#thirdCards6").style.opacity  = "1";
  document.querySelector("#thirdCards6").style.transition   = "all 1s";
})

gsap.from(".thirdCaards",{
  opacity: 0,
    
   scrollTrigger: {
     trigger: "#third",
     scroller: "#main",
     scrub: 1,
     start: "top 50%",
     end: "+=200",
     pin:true,
   },
   y: 200,
   
  transform : "scaleX(3) scaleY(3)",
   ease: "none"
})
gsap.from(".thirdCaards1",{
  opacity: 0,
    
   scrollTrigger: {
     trigger: "#third",
     scroller: "#main",
     scrub: 1,
     start: "top 50%",
     end: "+=200",
     pin:true,
   },
   y: 200,
   
  transform : "scaleX(3) scaleY(3)",
   ease: "none"
})

gsap.from("#third>h3",{
  y:200,
  opacity:0,
  scrollTrigger:{
    trigger: "#third",
     scroller: "#main",
     scrub: 4,
     start: "top 50%",
     end: "+=400",
     pin:true,
  },
  transform : "scaleY(3)",
})


var arr = [
  [
      { img: "/imgss/c1.webp" },
      { img: "/imgss/c11.webp" },
      { img: "/imgss/c12.webp" },
      { img: "/imgss/c13.webp" },
      { img: "/imgss/c14.webp" },

      { img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515930.png?crop=0.667xw:1.00xh;0.167xw,0&resize=480:*", sn: "Terracotta", pn: "Tribal Pot-Faces", price: "Rs 799", weight: "478 grams", disc: "It is a set of two beautiful pots that doubles up as an ethnic table top accessory. ", },

  ],
  [
      { img: "/imgss/c2.webp" },
      { img: "/imgss/c21.webp" },
      { img: "/imgss/c22.webp" },
      { img: "/imgss/c23.webp" },
      { img: "/imgss/c24.webp" },

      { img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515930.png?crop=0.667xw:1.00xh;0.167xw,0&resize=480:*", sn: "Mughal Gardens", pn: "Flowy Flora", price: "Rs 888", weight: "350 grams", disc: "Double fired at 1200 degrees and handcrafted in ceramic with Ink Blue floral prints, 'Flowy Flora' Oil Dispenser is perfect to add elegance to your kitchen.", },

  ],
  [
      { img: "/imgss/c3.webp" },
      { img: "/imgss/c31.webp" },
      { img: "/imgss/c32.webp" },
      { img: "/imgss/c33.webp" },
      { img: "/imgss/c34.webp" },

      { img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515930.png?crop=0.667xw:1.00xh;0.167xw,0&resize=480:*", sn: "Forest Fables", pn: "Eternal Sunshine", price: "Rs. 584", weight: "783 grams", disc: "It comes in a cylindrical, pot-like shape. The special Terracotta blend used in making it gives it strength. It also comes with a drainage hole at the bottom.", },

  ],
  [
      { img: "/imgss/c4.webp" },
      { img: "/imgss/c41.webp" },
      { img: "/imgss/c43.webp" },
      { img: "/imgss/c42.webp" },
      { img: "/imgss/c44.webp" },

      { img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515930.png?crop=0.667xw:1.00xh;0.167xw,0&resize=480:*", sn: "Terracotta", pn: "The Thirsty Crow", price: "Rs. 599", weight: "277 grams", disc: " Embellished with a floral painting on the base and a crow on top of the pot, this decorative vase in terracotta is perfect to bring warm, ", },

  ],
  [
      { img: "/imgss/c5.webp" },
      { img: "/imgss/c51.webp" },
      { img: "/imgss/c53.webp" },
      { img: "/imgss/c52.webp" },
      { img: "/imgss/c54.webp" },

      { img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515930.png?crop=0.667xw:1.00xh;0.167xw,0&resize=480:*", sn: "Forest Fables", pn: "Leaf Sips", price: "Rs. 699", weight: "714 grams", disc: "The 'Leaf Sips' is a set of tableware comprising of 2 mugs made in ceramic with a volume of 400 ML each.", },

  ],




  
]


var clutter = "";
arr.forEach(function (elem,index) {
  clutter +=
      `<div class="card">
      <small>click here <br> to view</small>
  <img id="${index}" src="${elem[0].img}" alt="">
          </div>`
})
document.querySelector("#card-container").innerHTML = clutter;






// array of elem  container 1
var arr1 = [
  [
      { img: "/imgss/d1.webp" },
      { img: "/imgss/d11.webp" },
      { img: "/imgss/d13.webp" },
      { img: "/imgss/d12.webp" },
      { img: "/imgss/d14.webp" },

      { img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515930.png?crop=0.667xw:1.00xh;0.167xw,0&resize=480:*", sn: "Handcrafted", pn: "Pyramid Lamp", price: "Rs. 1,249", weight: "573 grams", disc: "This unique pyramid shaped square tappered lamp has been artistically handcrafted in sheesham wood.", },

  ],
  [
      { img: "/imgss/d2.webp" },
      { img: "/imgss/d21.webp" },
      { img: "/imgss/d23.webp" },
      { img: "/imgss/d22.webp" },
      { img: "/imgss/d24.webp" },

      { img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515930.png?crop=0.667xw:1.00xh;0.167xw,0&resize=480:*", sn: "Dhokra Art", pn: "Dhokra Name Plate", price: "Rs. 1,946", weight: "577 grams", disc: "This classic customizable name plate with Dhokra figurine and miniature warli handpainting at the border will definitely accentuate the beauty of your home entrance. ", },

  ],
  [
      { img: "/imgss/d3.webp" },
      { img: "/imgss/d31.webp" },
      { img: "/imgss/d33.webp" },
      { img: "/imgss/d32.webp" },
      { img: "/imgss/d34.webp" },

      { img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515930.png?crop=0.667xw:1.00xh;0.167xw,0&resize=480:*", sn: "Hand-Etched", pn: "Morrocan Flame", price: "Rs. 1,999", weight: "374 grams", disc: "A breathtaking symbol for the flame of a candle ablaze with the fire of life, this magnificent pendant has been hand crafted by Indian artisans.", },

  ],
  [
      { img: "/imgss/d4.webp" },
      { img: "/imgss/d41.webp" },
      { img: "/imgss/d43.webp" },
      { img: "/imgss/d42.webp" },
      { img: "/imgss/d44.webp" },

      { img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515930.png?crop=0.667xw:1.00xh;0.167xw,0&resize=480:*", sn: "Warli Art", pn: "Matki Lamp", price: "Rs 1,999", weight: "653 grams", disc: "This unique terracotta round matki lamp has been beautifully handpainted to add the requried mood to the room. ", },

  ],
  [
      { img: "/imgss/d5.webp" },
      { img: "/imgss/d51.webp" },
      { img: "/imgss/d53.webp" },
      { img: "/imgss/d52.webp" },
      { img: "/imgss/d54.webp" },

      { img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515930.png?crop=0.667xw:1.00xh;0.167xw,0&resize=480:*", sn: "Warli Art", pn: "Sheesham Frame", price: "Rs.3,052", weight: "1503 grams", disc: "The multicolured handpainted warli assorted set of 9 pots have been uniquely placed on a sheesham wooden frame to add color and life to your wall.", },

  ],




  
]


var clutterx = "";
arr1.forEach(function (elem,index) {
  clutterx +=
      `<div class="card">
      <small>click here <br> to view</small>
  <img id="${index}" src="${elem[0].img}" alt="">
          </div>`
})
document.querySelector("#card-container1").innerHTML = clutterx;






// array of elem  container 2
var arr2 = [
  [
      { img: "/imgss/e1.webp" },
      { img: "/imgss/e11.webp" },
      { img: "/imgss/e13.webp" },
      { img: "/imgss/e12.webp" },
      { img: "/imgss/e14.webp" },

      { img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515930.png?crop=0.667xw:1.00xh;0.167xw,0&resize=480:*", sn: "Meenakari Art", pn: "Meenakari Elephant", price: "Rs. 1,525", weight: "645 grams", disc: "These ethnic Set of 3 Elephant masterpiece from our MeenaKari Collection has been deligently designed with excellent details.", },

  ],
  [
      { img: "/imgss/e2.webp" },
      { img: "/imgss/e21.webp" },
      { img: "/imgss/e23.webp" },
      { img: "/imgss/e22.webp" },
      { img: "/imgss/e24.webp" },

      { img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515930.png?crop=0.667xw:1.00xh;0.167xw,0&resize=480:*", sn: " Meenakari Art", pn: "Meenakari Tortoise", price: "Rs.799", weight: "80 grams", disc: "These oranmented Tranditional Tortorise from our Meenakari Collection has been embellished with finely polished Jewellery clothing. ", },

  ],
  [
      { img: "/imgss/e3.webp" },
      { img: "/imgss/e31.webp" },
      { img: "/imgss/e33.webp" },
      { img: "/imgss/e32.webp" },
      { img: "/imgss/e34.webp" },

      { img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515930.png?crop=0.667xw:1.00xh;0.167xw,0&resize=480:*", sn: " Hand-Painted", pn: "Folk Music Mahotsav", price: "Rs.2,349", weight: "237 grams", disc: "The Sangeet Mahotsav' set of 3 figurines from the 'Songs of the Homeland' collection is inspired by the marvellous folk musicians of Rajasthan and their awe-inspiring folk music.", },

  ],
  [
      { img: "/imgss/e4.webp" },
      { img: "/imgss/e41.webp" },
      { img: "/imgss/e43.webp" },
      { img: "/imgss/e42.webp" },
      { img: "/imgss/e44.webp" },

      { img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515930.png?crop=0.667xw:1.00xh;0.167xw,0&resize=480:*", sn: "Handcrafted", pn: "Birds On Branch", price: "Rs  1,049", weight: "494 grams", disc: "The 'Birds On Branch' is a wall tea-light holder set comprising of 1 tea-light wall frame handcrafted in iron which comes with 2 bucket-shaped glass holders. ", },

  ],
  [
      { img: "/imgss/e5.webp" },
      { img: "/imgss/e51.webp" },
      { img: "/imgss/e53.webp" },
      { img: "/imgss/e52.webp" },
      { img: "/imgss/e54.webp" },

      { img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/legacy-fre-image-placeholder-1642515930.png?crop=0.667xw:1.00xh;0.167xw,0&resize=480:*", sn: " Handcrafted", pn: "Spice Box", price: "Rs.1,299", weight: "790 grams", disc: "This is a household utility cum decor spice box comprising of seven non-detachable triangular compartments that comes as a set of a box with a non-detachable glass.", },

  ],

]


var cluttery = "";
arr2.forEach(function (elem,index) {
  cluttery +=
      `<div class="card">
      <small>click here <br> to view</small>
  <img id="${index}" src="${elem[0].img}" alt="">
          </div>`
})
document.querySelector("#card-container2").innerHTML = cluttery;







// page 2 container 0
// var size = 0;
document.querySelector("#card-container").addEventListener("click", function (dets) {
  //    var show = dets.target.id;
  console.log(dets.target);
      if(dets.target.id!="card-container")
      {

      document.querySelector(".showoff").style.display = "block";

      var clutter1 = "";
      var clutter2 = "";
      var clutter3 = "";
      arr[dets.target.id].forEach(function (elem) {
          // size -= 100;
          clutter1 +=
              `<div class="card">
  <img src="${elem.img}" alt="">
  </div>`
      })
      document.querySelector(".card1>.p2card1").innerHTML = clutter1;

      arr[dets.target.id].forEach(function (elem) {
          clutter2 +=
              `<div class="card">
  <img src="${elem.img}" alt="">
  </div>`
      })
      document.querySelector(".card2>.p2card2").innerHTML = clutter2;
     
      arr[dets.target.id].forEach(function (elem) {
          clutter3 =
              `<div class="pn">
      <p>${elem.sn}</p>
      <h3>${elem.pn}</h3>
  </div>
  <div class="pd">
      <p>price</p>
      <hr>
      <h4>${elem.price}</h4>
      <hr>
      <br>
      <p>weight</p>
      <hr>
      <h4>${elem.weight}</h4>
      <hr>
      <br>
      <p>disc</p>
      <hr>
      <h5>${elem.disc}</h5>
      <hr>
      <br>
      <div class="buy">
          <button>
              <p>add to cart </p>  
          </button>
          <button>
              <p>buy now</p>
          </button>
      </div>
  </div>`

          document.querySelector(".product-d").innerHTML = clutter3;
      });}
  });



// page 2 container 1
// var size1 = 0;
document.querySelector("#card-container1").addEventListener("click", function (dets) {
  //    var show = dets.target.id;
  console.log(dets.target);
      if(dets.target.id!="card-container1")
      {

      document.querySelector(".showoff").style.display = "block";

      var clutter11 = "";
      var clutter21 = "";
      var clutter31 = "";
      arr1[dets.target.id].forEach(function (elem) {
          // size1 -= 100;
          clutter11 +=
              `<div class="card">
  <img src="${elem.img}" alt="">
  </div>`
      })
      document.querySelector(".card1>.p2card1").innerHTML = clutter11;

      arr1[dets.target.id].forEach(function (elem) {
          clutter21 +=
              `<div class="card">
  <img src="${elem.img}" alt="">
  </div>`
      })
      document.querySelector(".card2>.p2card2").innerHTML = clutter21;
     
      arr1[dets.target.id].forEach(function (elem) {
          clutter31 =
              `<div class="pn">
      <p>${elem.sn}</p>
      <h3>${elem.pn}</h3>
  </div>
  <div class="pd">
      <p>price</p>
      <hr>
      <h4>${elem.price}</h4>
      <hr>
      <br>
      <p>weight</p>
      <hr>
      <h4>${elem.weight}</h4>
      <hr>
      <br>
      <p>disc</p>
      <hr>
      <h5>${elem.disc}</h5>
      <hr>
      <br>
      <div class="buy">
          <button>
              <p>add to cart </p>  
          </button>
          <button>
              <p>buy now</p>
          </button>
      </div>
  </div>`

          document.querySelector(".product-d").innerHTML = clutter31;
      });}
  });



// page 2 container 2
// var size2 = 0;
document.querySelector("#card-container2").addEventListener("click", function (dets) {
  //    var show = dets.target.id;
  console.log(dets.target);
      if(dets.target.id!="card-container2")
      {
          move=0;
           move1=-100;

      document.querySelector(".showoff").style.display = "block";

      var clutter12 = "";
      var clutter22 = "";
      var clutter32 = "";
      arr2[dets.target.id].forEach(function (elem) {
         
          clutter12 +=
              `<div class="card">
  <img src="${elem.img}" alt="">
  </div>`
      })
      document.querySelector(".card1>.p2card1").innerHTML = clutter12;

      arr2[dets.target.id].forEach(function (elem) {
          clutter22 +=
              `<div class="card">
  <img src="${elem.img}" alt="">
  </div>`
      })
      document.querySelector(".card2>.p2card2").innerHTML = clutter22;
     
      arr2[dets.target.id].forEach(function (elem) {
          clutter32 =
              `<div class="pn">
      <p>${elem.sn}</p>
      <h3>${elem.pn}</h3>
  </div>
  <div class="pd">
      <p>price</p>
      <hr>
      <h4>${elem.price}</h4>
      <hr>
      <br>
      <p>weight</p>
      <hr>
      <h4>${elem.weight}</h4>
      <hr>
      <br>
      <p>disc</p>
      <hr>
      <h5>${elem.disc}</h5>
      <hr>
      <br>
      <div class="buy">
          <button>
              <p>add to cart </p>  
          </button>
          <button>
              <p>buy now</p>
          </button>
      </div>
  </div>`

          document.querySelector(".product-d").innerHTML = clutter32;
      });}
  });

  
// animation of p2
var move = 0;
var move1 = -100;
document.querySelector(".card2").addEventListener("click", function () {
    move -= 100;
    if (move <= -500) {
        move = 0;
    }

    document.querySelector(".p2card1").style.left = `${move}%`;
    setTimeout(scaleup, 1000);
    document.querySelector(".p2card1").style.transform = `scaleY(1.1)`;
})
function scaleup() {
    document.querySelector(".p2card1").style.transform = `scaleY(1.0)`;
};
document.querySelector(".card2").addEventListener("click", function () {
    move1 -= 100;
    if (move1 <= -600) {
        move1 = -100;
    }

    document.querySelector(".p2card2").style.left = `${move1}%`;
    setTimeout(scaleup1, 1000);
    document.querySelector(".p2card2").style.transform = `scaleY(1.1)`;
})
function scaleup1() {
    document.querySelector(".p2card2").style.transform = `scaleY(1.0)`;
};



var clutter111 = "";
var clutter222 = "";
var clutter333 = "";
document.querySelector("#close").addEventListener("click",function(){
    move=0;
    move1=-100;
    document.querySelector(".p2card1").style.left = `${move}%`;
    document.querySelector(".p2card2").style.left = `${move1}%`;
    document.querySelector(".card1>.p2card1").innerHTML = clutter111;
    document.querySelector(".card2>.p2card2").innerHTML = clutter222;
    document.querySelector(".product-d").innerHTML = clutter333;
    document.querySelector(".showoff").style.display = "none";
})


gsap.from(".page4 #caaaradp", {
  opacity: 0,
    
   scrollTrigger: {
     trigger: ".page4",
     scroller: "#main",
     scrub: 2,
     start: "60% 50%",
     end: "+=500",
     pin:true,
   },
   y: 200,
   
   ease: "none"
 });

 gsap.from(".page4 #written #para1", {
  opacity: 0,
    
   scrollTrigger: {
     trigger: "#written",
     scroller: "#main",
     scrub: 1,
     start: "75% 30%",
     end: "+=100",
     pin:true,
    //  markers:true
   },
  //  y: 100,
   
   ease: "none"
 });
 gsap.from(".page4 #written #para2", {
  opacity: 0,
    
   scrollTrigger: {
     trigger: "#written",
     scroller: "#main",
     scrub: 1,
     start: "75% 20%",
     end: "+=100",
     pin:true,
    //  markers:true
   },
  //  y: 100,
   
   ease: "none"
 });
 gsap.from(".page4 #written #para3", {
  opacity: 0,
    
   scrollTrigger: {
     trigger: "#written",
     scroller: "#main",
     scrub: 1,
     start: "75% 10%",
     end: "+=50",
     pin:true,
    //  markers:true
   },
  //  y: 100,
   
   ease: "none"
 });



