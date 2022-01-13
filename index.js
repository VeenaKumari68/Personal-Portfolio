const hamburger = document.querySelector('.nav .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.nav .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.nav .nav-bar .nav-list ul li a');
const nav = document.querySelector('.nav.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		nav.style.backgroundColor = '#C8C8C8';
	} else {
		nav.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});



function makesvg(percentage, inner_text=""){

var abs_percentage = Math.abs(percentage).toString();
var percentage_str = percentage.toString();
var classes = ""

if(percentage < 0){
  classes = "danger-stroke circle-chart__circle--negative";
} else if(percentage > 0 && percentage <= 30){
  classes = "warning-stroke";
} else{
  classes = "success-stroke";
}

var svg = '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">'
   + '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />'
   + '<circle class="circle-chart__circle '+classes+'"'
   + 'stroke-dasharray="'+ abs_percentage+',100"    cx="16.9" cy="16.9" r="15.9" />'
   + '<g class="circle-chart__info">'
   + '   <text class="circle-chart__percent" x="17.9" y="15.5">'+percentage_str+'%</text>';

if(inner_text){
  svg += '<text class="circle-chart__subline" x="16.91549431" y="22">'+inner_text+'</text>'
}

svg += ' </g></svg>';

return svg
}

(function( $ ) {

  $.fn.circlechart = function() {
      this.each(function() {
          var percentage = $(this).data("percentage");
          var inner_text = $(this).text();
          $(this).html(makesvg(percentage, inner_text));
      });
      return this;
  };

}( jQuery ));

$(function () {
   $('.circlechart').circlechart();
});

