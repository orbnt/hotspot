// CountDown Menuju Ramadhan
function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
	var clock = document.getElementById(id);
	
	// get spans where our clock numbers are held
	var days_span = clock.querySelector('.days');
	var hours_span = clock.querySelector('.hours');
	var minutes_span = clock.querySelector('.minutes');
	var seconds_span = clock.querySelector('.seconds');

	function update_clock(){
		var t = time_remaining(endtime);
		
		// update the numbers in each part of the clock
		days_span.innerHTML = t.days;
		hours_span.innerHTML = ('0' + t.hours).slice(-2);
		minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
		seconds_span.innerHTML = ('0' + t.seconds).slice(-2);
		
		if(t.total<=0){ clearInterval(timeinterval); }
	}
	update_clock();
	var timeinterval = setInterval(update_clock,1000);
}

// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika  hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
