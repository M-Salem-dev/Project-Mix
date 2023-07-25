// window.alert("Hello")    //Test

let section = document.getElementById("section3");
let spans = document.querySelectorAll(".progress span");
console.log(spans)


window.addEventListener("scroll", function () {

    if (window.scrollY >= section.offsetTop + 100) {
        // console.log('hello');
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })

    }
    // else{
    //     spans.forEach((span) => {
    //         span.style.width = '0px';
    //     })
    // }
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

let title = document.querySelector(".title");
let ulOfflineOnline = document.querySelector(".ulOfflineOnline");
let reloadBtn = document.querySelector(".reload");

function onLine() {		// ده في حاله لم يكون في نت 
    title.innerHTML = 'Online Now';
    title.style.color = 'green';

    ulOfflineOnline.classList.add('hide');
    reload.classList.add('hide');
}

function offLine() {		// ده في حاله لم يكون مفيش نت 
    title.innerHTML = 'Offline Now';
    title.style.color = 'red';

    ulOfflineOnline.classList.remove('hide');
    reload.classList.remove('hide');
}

window.onload = function () {		// offLineلو مفيش نت شغل الonLineال functionانا كده بقول لو في نت شغل ال 
    if (window.navigator.onLine) {
        onLine();
    }
    else {
        offLine();
    }
}
window.addEventListener("online", function () {
    onLine();
});
window.addEventListener("online", function () {
    offLine();
});

// =======================================================================================================
// btn
function functionReload() {
    window.location.reload();
}

reloadBtn.addEventListener("click", functionReload);



/////////////////////////////////////////////////////////////////////////////////////////////////
// window.alert("Hello")    //Test

// let nupr = 50;


// function counterUp() {
//     let nupr2 = $("#NumberCounterUp").text();

//     let counter = 0;

//     let x = setInterval(() => {
//         counter++;
//         $("#NumberCounterUp").html(counter);
//         if (counter == nupr2) {
//             clearInterval(x);
//         }
//     }, 100);
// }

// counterUp();
// =================================================
// ده طريقه تانيه 
function counterUp(element, speed) {
    let nupr2 = $(element).text();

    // let  nupr23 = limit;

    let counter = 0;

    let x = setInterval(() => {
        counter++;
        $(element).html(counter);
        if (counter == nupr2) {
            clearInterval(x);
        }
    }, speed);
}

function starCounter() {
    counterUp("#NumberCounterUp", 40);
    counterUp("#NumberCounterUp2", 40);
    counterUp("#NumberCounterUp3", 40);
    counterUp("#NumberCounterUp4", 40);
}
// starCounter();

let NumberCounterUp = $('#Count').offset().top;


$(window).scroll(function () {
    let wScroll = $(window).scrollTop();

    if (wScroll > NumberCounterUp) {
        starCounter();
    }
})


// let Count = $("#Count").offset().top;




// ====================================================
// Date
let d = new Date();
console.log(d)



function data() {
    let fullData = new Date();

    $('#Hour').text(fullData.getHours());
    $('#minutes').text(fullData.getMinutes());
    $('#seconds').text(fullData.getSeconds());
}

setInterval(data, 1000)

//////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(e){
    $('.thumb a').click(function(e){
        e.preventDefault();
        $('.imgBox img').attr('src', $(this).attr("href"))
    })
})

// الكبيره imgده علشان لم اضغط علي اي صوره يطلع ل فوق في ال 

let aboutOffsetTopLeft = $(".imgs-click").offset().top;

$(window).scroll(function(){
	
	let wScroll = $ (window).scrollTop();
		
		if(wScroll > aboutOffsetTopLeft){
			$('.thumb a').fadeIn(500);
		}
		else{
			$('.thumb a').fadeIn(500);
		}
})

$('.thumb a').click(function () {
	$("html,body").animate({scrollTop:100} , 500);
})

/////////////////////////////////////////////////////////////////////////
// 11 
// var imgs =  document.querySelectorAll(".item img"); //1
var imgs = Array.from( document.querySelectorAll(".item img"));//8 //يجبلي رقم الصوره indexOf علشان لم اعمل Arrayتحول ل imgsعلشان ال Array.fromال

var lightBoxContainer = document.getElementById("lightBoxContainer");//3
var lightBoxItem = document.getElementById("lightBoxItem");	// 6

var currentIndex = 0;	// ده علشان سهم يمين و شمال 
var nextBtn = document.getElementById("next");	//اللي هو السهم اليمين nextاللي اسم idانا كده بقول هات ال
var prevBtn = document.getElementById("prev");	//اللي هو السهم الشمال prevاللي اسم idانا كده بقول هات ال
var closeBtn =  document.getElementById("close"); // اللي هي علامه الاكس close اللي اسم idانا كده بقول هات ال

//2	//ده علشان لم اضغط ع اي صوره تظهر 
for (var i=0 ; i < imgs.length ; i++) {
	
	imgs[i].addEventListener("click" , function(eventInfo) {
		
		lightBoxContainer.style.display = "flex";//4	// display = "flex" واقول styleوادخل جوه ال lightBoxContainer لم اضغط ع الصوره امسك 
		
		var imgSrc = eventInfo.target.getAttribute("src");	//5	// يعني اسم الصوره المسار src ده بيجيب target
		
		lightBoxItem.style.backgroundImage ="url("+imgSrc+")";	//7	// بتاع كل صوره src واحط backgroundImage وادخل style ادخل جوه lightBoxItem اجيب 
		
		// ده علشان سهم يمين و شمال 
		currentIndex = imgs.indexOf(eventInfo.target);//10	// currentIndex انا كده بقول هات رقم الصوره اللي ضغط عليها وحط في 
	})
}

//===================================
function nextSlide() {	//14	//ده علشان لم اضغط علي السهم اليمين ب الماوس 
	currentIndex++;// ده بيجيب الصوره زياده برقم 
	
	if(currentIndex == imgs.length) { 	// و يوصل ل اخر صوره برجع من الاول next لم اضغط ع 
		currentIndex = 0;
	}

	var imgSrc = imgs[currentIndex].getAttribute("src");	// imgSrc انا كده بقول هات مسار الصوره اللي عليها الدور واحط في 
	lightBoxItem.style.backgroundImage ="url("+imgSrc+")";	// القديمه ب الجديده backgroundImageكده بحول ال 
}
nextBtn.addEventListener("click" ,nextSlide);	//nextSlide اللي اسمها functionاعمل ال nextBtnانا كده بقول لم حد يدوس علي ال


function prevSlide() { //15	// ده علشان لم بضغط علي السهم الشمال ب الماوس 
	currentIndex--; // انا كده بجيب الصوره وبعمل وبنقص ب 1

	if(currentIndex < 0) {//18	//ويوصل ل اول صوره يرجع تاني ل اخر صوره prev لم اضغط ع 
		currentIndex =  imgs.length -1;
	}
	
	var imgSrc = imgs[currentIndex].getAttribute("src");	// imgSrc انا كده بقول هات مسار الصوره اللي عليها الدور واحط في 
	lightBoxItem.style.backgroundImage =`url(${imgSrc})`;	// القديمه ب الجديده backgroundImageكده بحول ال 
}
prevBtn.addEventListener("click" ,prevSlide);	//prevSlide اللي اسمها functionاعمل ال prevBtnانا كده بقول لم حد يدوس علي ال

//=============================
function closeSlide() {//15	//ده علشان العلامه الاكس اللي لم بضغط عليها يقفل الصوره 
	lightBoxContainer.style.display ="none";// يعني اخفي none بقول خلي lightBoxContainer اللي اسم idانا كده بقول خالي ال	
}
closeBtn.addEventListener("click" ,closeSlide);//23	// closeSlide() اللي اسم function اعمل closeBtn انا كده بقول لم اضغط علي 

//============================
//16	//انا كده بقول لم اضغط ب الكيبورد سهم يمين او شمال يحرك الصور 
document.addEventListener("keydown" , function(eventInfo) {
	//console.log(eventInfo)
	if(eventInfo.code == "ArrowRight") { //سهم يمين في الكيبورد ArrowRightال
		nextSlide();
	}
	
	else if(eventInfo.code == "ArrowLeft") { //سهم شمال في الكيبورد ArrowLeftال
		 prevSlide();
	}
	
	else if(eventInfo.code == "Escape") { //اللي بيعمل خروج للعنصر Escده الEscapeال
		closeSlide();
	}
})

//============================
// ده علشان لم اضغط في اي مكان بره الصوره ب الماوس يلاغي الصوره 
document.addEventListener("click", test)
function test(e){
	//console.log(e.target)
	if(e.target == lightBoxContainer) {
		lightBoxContainer.style.display ="none";
	}
}


///////////////////////////////////////////////////////////////////////////////////////////////


// ==========================================================================================================================
// 12
// start Gallery-Hover
(function ( $ ) {
    $.fn.snakeify = function( options ) {
        var settings = $.extend({
            inaccuracy: 30,
            speed: 200
        }, options );
        this.find('.overlay').css({top: -9999999});

        this.mouseenter(function(e){
			const container = $(this);
			const overlay = container.find('.overlay');
			const parentOffset = container.offset(); 
			const relX = e.pageX - parentOffset.left;
			const relY = e.pageY - parentOffset.top;
			overlay.css({
				top: 0,
				left: 0,
				width: container.width(),
				height: container.height()
			});
			if(relX > container.width()-settings.inaccuracy){
				overlay.css({
					top: 0,
					left: container.width(),
				});
			}else if(relX < settings.inaccuracy){
				overlay.css({
					top: 0,
					left: -container.width(),
				});
			}else if(relY > container.width()-settings.inaccuracy){
				overlay.css({
					top: container.width(),
					left: 0,
				});
			}else if(relY < settings.inaccuracy){
				overlay.css({
					top: -container.width(),
					left: 0,
				});
			}
			overlay.animate({
					top: 0,
					left: 0
			},settings.speed);
		});

		this.mouseleave(function(e){
			const container = $(this);
			const overlay = container.find('.overlay');
			const parentOffset = container.offset(); 
			const relX = e.pageX - parentOffset.left;
			const relY = e.pageY - parentOffset.top;
			if(relX <= 0){
				overlay.animate({
					top: 0,
					left: -container.width()
				},settings.speed);
			} 
			if(relX >= container.width()) {
				overlay.animate({
					top: 0,
					left: container.width()
				},settings.speed);
			}
			if(relY <= 0){
				overlay.animate({
					left: 0,
					top: -container.height()
				},settings.speed);
			}
			if(relY >= container.height()){
				overlay.animate({
					left: 0,
					top: container.height()
				},settings.speed);
			}
		});
	};
}( jQuery ));

$(".snake").snakeify({
  speed: 300    // Speed hover 
});
// end Gallery-Hover
// ==========================================================================================================================

/////////////////////////////////////////////////////////////////////////////////////////////////
// 14

$(document).ready(function(){
    $('.list').click(function(){
      const value = $(this).attr('data-filter');
      if (value == 'all'){
        $('.itemBox').show('1000');
      }
      else{
        $('.itemBox').not('.'+value).hide('1000');
        $('.itemBox').filter('.'+value).show('1000');
      }
    })
  
    // add active
  $('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
  })
  })


/* //////////////////////////////////////////////////////////////////////////////////////////// */
/* 15 */

$(document).ready(function(){
    $('.buttons').click(function(){
  
    // add active
      $(this).addClass('active').siblings().removeClass('active')
  
  
      const filter = $(this).attr('data-filter');
  
      if (filter == 'all'){
        $('.image').show('400');
      }
      else{
        $('.image').not('.'+filter).hide('1000');
        $('.image').filter('.'+filter).show('1000');
      }
    });
  
    $('.gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{
        enabled: true
      },
    })
  
  
  });


































