$('#go').click(function(){
    var cssSelector = anime({
        targets: '.line',
        translateX: 450,
        borderRadius: ['0em', '2em'],
        scale: 4,
        rotate: {
            value: 9000,
            duration: 1800,
            easing: 'easeInOutSine',
            delay: 800,
          },
        duration: 3000,
        direction: 'alternate',
        backgroundColor: [
            {value: '#FFF'}, // Or #FFFFFF
            {value: 'rgb(255, 0, 0)'},        
          ],
          width:[
            {value:'300px'},
            { delay:3000}
          ],
         
      });
})

$('#reset').click(function(){
    var cssSelector = anime({
        targets: '.line',
        translateX: 0,
        borderRadius: ['0em', '0em'],
        scale: 1,
        rotate: {
            value: 00,
            duration: 1800,
            easing: 'easeInOutSine'
          },
        duration: 3000
      });
})



var JSarray = anime({
  targets: ['.a','.b','.c'],
  translateX: 250,
  duration: function(el,i,l){
   return 1500*i+1100;
  }
});


var brojevi={vrednost:1}
var jsObject = anime({
    targets: brojevi,
    vrednost:1000,
    round: 1,
    easing: 'easeInOutExpo',
    duration:5000,
    update:function(){
        var el = document.querySelector('#JSobject');
        el.innerHTML = JSON.stringify(brojevi.vrednost);
    }
  });

  var promise =jsObject.finished.then(logFinished);
  function logFinished() {
    jsObject=anime({
     targets:brojevi,
     scale:2,
     loop:true,
     easing:'linear',
     duration:3000
   })
   console.log('PROMISE')
  }

var letters = anime({
  targets: '.letter ',
  translateY: -350,
  duration: function(el, i, l) {
    return 1000 + (i * 1100);
  }
});

var letters = anime.timeline({
    direction:'alternate',
    loop: true
   
  });

   letters.add({
    targets: '.letter ',
    translateY: -350,
    duration: function(el, i, l) {
      return 1000 + (i * 100);
    },
  });
  letters.add({
    targets: '.letter ',
    translateY: -200,
    rotate: 720,
    duration: function(el, i, l) {
      return 1000 + (i * 600);
    }
  });


