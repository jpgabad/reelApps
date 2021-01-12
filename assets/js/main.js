$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, .1);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title',{})
sr.reveal('.home__data',{delay: 200})
sr.reveal('.home__img',{delay: 600})

/*SCROLL HOME*/
sr.reveal('.circle-1',{})
sr.reveal('.circle-2',{origin: 'bottom'})
sr.reveal('.circle-3',{})
sr.reveal('.inner-circle-1',{delay: 200})
sr.reveal('.inner-circle-2',{delay: 200,origin: 'bottom'})
sr.reveal('.inner-circle-3',{delay: 200})
sr.reveal('.numbers',{delay: 600})
sr.reveal('.line',{delay: 600})
sr.reveal('.desc',{delay: 600})


/* BOXES*/
sr.reveal('.box-outer',{origin: 'right',delay: 600})

/* APPS*/
sr.reveal('.app-outer ',{origin: 'left'})



