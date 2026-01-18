gsap.registerPlugin(ScrollTrigger);
document.addEventListener('DOMContentLoaded',()=>{  
  ScrollTrigger.clearScrollMemory('manual');
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: false,
    lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
    multiplier: 1.4, // Effect Multiplier
    reloadOnContextChange: true,
    touchMultiplier: 2,
    smoothMobile: 0,
    getDirection: true,
    // smartphone: {
    //     smooth: !0,
    //     breakpoint: 767
    // },
    // tablet: {
    //     smooth: !0,
    //     breakpoint: 1024
    // },
    inertia: .6 
  });
  
  var header = $('.header-first-wrapper .header')
  var headerosn = $('.header-osn-wrapper .header')

  locoScroll.on("scroll", (instance) => {
    let scrolled = locoScroll.scroll.instance.scroll.y
    let scrolledDir = instance.direction

    if ( scrolledDir == 'up' | scrolled < 100 ) {
        headerosn.removeClass('out');
    } else {
        headerosn.addClass('out');
    }
    
  });

  locoScroll.on("scroll", (instance) => {
    let scrolled = locoScroll.scroll.instance.scroll.y

    if ( scrolled < 100 ) {
        header.removeClass('out');
        headerosn.addClass('out');
    } else {
        header.addClass('out');
    }
    
  });

  if (innerWidth>1023) {
    ScrollTrigger.create({
      //scroller: ".smooth-scroll" // this is what you're missing
      scroller: "body",
      // your other options
    });
  } else {
    ScrollTrigger.create({
      scroller: "body" // this is what you're missing
      // your other options
    });
  }
  
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  if (innerWidth>1023) {
    //ScrollTrigger.defaults({ scroller: ".smooth-scroll" });
    ScrollTrigger.defaults({ scroller: "body" });
  } else {
    ScrollTrigger.defaults({ scroller: "body" });
  }
  
// анимация стандартная

const videolpm = document.querySelectorAll(".ava-video");
videolpm.forEach((el)=>{
  el.play()
})

document.querySelectorAll('.globalpop-close').forEach(el => {
  el.addEventListener("click", function () {
    document.querySelector('.menu-wrapper').style.transform = 'translateY(-120%)';
    document.querySelector('.regbox-wrapper').style.transform = 'translateY(-120%)';
    document.querySelectorAll('.probox-wrapper').forEach(els => {
      els.style.transform = 'translateY(-120%)';
    })
    Fancybox.close();
  })
})

document.querySelectorAll('.header-burger').forEach(el => {
  el.addEventListener("click", function () {
    let gsapmob = gsap.timeline({

    })
    gsapmob.to(el, {scale:1.2, duration:0.1})
    gsapmob.to(el, {scale:1, duration:0.1})
  })
})

document.querySelectorAll('.menu-close').forEach(el => {
  el.addEventListener("click", function () {
    let gsapmob = gsap.timeline({

    })
    gsapmob.to(el, {scale:1.2, duration:0.1})
    gsapmob.to(el, {scale:1, duration:0.1})
  })
})

// анимация Главной страницы
function servbox() {
  $easy = 0;
  document.querySelectorAll('.header-pad2 .header-link-services').forEach((el)=>{
    el.addEventListener('mouseenter', () => {
      $easy = 0;
      document.querySelector('.servbox-wrap').style.transform = 'translateY(0%)';
      document.querySelector('.header-osn-wrapper .header').classList.remove('out');
      document.querySelector('.smooth-back').style.backdropFilter = 'brightness(0.5)';
    })
  })

  document.querySelectorAll('.header-pad2 .header-link-services').forEach((el)=>{
    el.addEventListener('mouseleave', () => {
      $easy = 1;
      setTimeout(function(){
        if ($easy == 1) {
          document.querySelector('.servbox-wrap').style.transform = 'translateY(-200%)';
          document.querySelector('.header-osn-wrapper .header').classList.add('out');
          document.querySelector('.smooth-back').style.backdropFilter = 'unset';
        }
      }, 600);
    })
  })

  document.querySelector('.servbox-wrap').addEventListener('mouseenter', () => {
    $easy = 0;
  })

  document.querySelector('.servbox-wrap').addEventListener('mouseleave', () => {
    $easy = 1;
    setTimeout(function(){
      if ($easy == 1) {
        document.querySelector('.servbox-wrap').style.transform = 'translateY(-200%)';
        document.querySelector('.header-osn-wrapper .header').classList.add('out');
        document.querySelector('.smooth-back').style.backdropFilter = 'unset';
      }
    }, 600);
  })
}


function mainanimf() {
  let mainanim = gsap.timeline({
  })

  mainanim.to('.header', {
    opacity:1,
    duration: 0.6,
  }, 0)

  var mainhcounter = 0;
  document.querySelectorAll('.main-sone-h span').forEach((el)=>{
    mainhcounter = mainhcounter + 0.1;
    mainanim.to(el, {
      y: 0,
      opacity:1,
      duration: 0.6,
      delay:0,
    }, mainhcounter)
  })


  mainanim.to('.main-sone-vinoska-border', {
    width:'100%',
    duration: 0.6,
  }, 0)

  mainanim.to('.main-sone-vinoska-text', {
    yPercent: -20,
    opacity:1,
    duration: 0.6,
  }, 0)

  mainanim.fromTo('.main-sone .main-sone-border', {
    height:'0%',
  }, {
    height:'100%',
    duration: 1.2,
  }, 0)
} 


function animatelogo() {

  let animlogoHeight = document.querySelector('.main-sone').clientHeight;
  let animlogo = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-sone",
      start: "top top",
      end: 'top top-='+animlogoHeight,
      pin: true,
      pinSpacing: true,
      scrub: 2,
    }
  })
  
  animlogo.to('.galka2', {
    y: '0%',
  }, 0);
  animlogo.to('.galka4', {
    y: '0%',
  }, 0);
  animlogo.to('.galka3', {
    opacity:1,
    duration:0.3
  });

}

function videomain() {

  let animvideoPre = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-about-header",
      start: "top bottom-=20%",
    }
  })

  var mainhcounter = 0;
  document.querySelectorAll('.main-about-header-h').forEach((el)=>{
    mainhcounter = mainhcounter + 0.1;
    animvideoPre.fromTo(el, {
      yPercent: 20,
      opacity:0,
    }, {
      yPercent: 0,
      opacity:1,
      duration: 0.6,
      delay:0,
    }, mainhcounter)
  })

  animvideoPre.fromTo('.main-about .main-sone-border', {
    height:'0%',
  }, {
    height:'100vh',
    duration: 1.2,
  }, 0)

  animvideoPre.to('.main-about .main-sone-border', {
    height:'100%',
    duration: 1.2,
  })

  const videoPlaceholderPre = document.querySelector('.main-about-bottom .main-video-placeholder');
  if (videoPlaceholderPre) {
    animvideoPre.fromTo('.main-about-bottom .main-video-placeholder', {
      opacity: 0,
      scale: 0.9,
    }, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
    }, 0.5)
  }

  if (innerWidth>991) {
    const videoPlaceholder = document.querySelector('.main-about-bottom .main-video-placeholder');
    if (videoPlaceholder) {
      let animvideo = gsap.timeline({
        scrollTrigger: {
          trigger: ".main-about-bottom",
          start: "top bottom-=30%",
          end: 'top top+=20%',
          scrub: 2,
        }
      })
    
      animvideo.to('.main-about-bottom .main-video-placeholder', {
        scale: 2.1,
        opacity: 1
      }, 0)
    
      animvideo.to('.main-about-bottom .main-video-placeholder', {
        paddingRight: '0px',
      }, 0)
    
      animvideo.to('.main-about .main-sone-border', {
        borderRight: '1px solid rgba(238, 238, 238, 0.4)',
      }, 0)
    }
  }
  
}

function advs() {
  let advsHeight = document.querySelector('.main-about-adv').clientHeight;
  let advsHeight2 = document.querySelector('.main-about-adv-alter').clientHeight;
  if (innerWidth>991) {

    let advsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-about-bottom",
        start: "top top",
        end: 'top top-='+advsHeight,
        pin: true,
        pinSpacing: true,
        scrub: 2,
      }
    })

    let advsTimeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-about-bottom",
        start: "top top",
        end: 'top top-='+advsHeight,
        scrub: 3,
      }
    })

    let advsTimeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-about-bottom",
        start: "top top",
        end: 'top top-='+advsHeight,
        scrub: 4,
      }
    })

    advsTimeline.to('.main-about-advl', {
      yPercent: -100,
      y: '-100vh'
    }, 0)

    advsTimeline2.to('.main-about-advc', {
      yPercent: -100,
      y: '-100vh'
    }, 0)

    advsTimeline3.to('.main-about-advr', {
      yPercent: -100,
      y: '-100vh'
    }, 0)

  } else {
    let advsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-about-bottom",
        start: "top top",
        end: 'top top-='+advsHeight2,
        pin: true,
        pinSpacing: true,
        scrub: 2,
      }
    })

    advsTimeline.to('.main-about-adv-alter', {
      yPercent: -100,
    }, 0)
  }

}

function dirs() {

  let dirsPre = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-dir-wrap",
      start: "top bottom-=40%",
    }
  })

  dirsPre.fromTo('.main-dir-wrap .main-sone-border', {
    height:'0%',
  }, {
    height:'100vh',
    duration: 1.2,
  }, 0)

  dirsPre.to('.main-dir-wrap .main-sone-border', {
    height:'140%',
    duration: 1.2,
  })

  let dirsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-dir-start",
      start: "top center",
      end: 'top top',
      scrub: 2,
    }
  })

  dirsTimeline.fromTo('.main-dir-h p:nth-child(1)', {
    xPercent: 100,
  }, {
    xPercent: 0,
  }, 0)

  dirsTimeline.fromTo('.main-dir-h p:nth-child(2)', {
    xPercent: -100,
  }, {
    xPercent: 0,
  }, 0)

  dirsTimeline.fromTo('.main-dir-start svg', {
    yPercent: -100,
  }, {
    yPercent: 0,
  }, 0)


  if (innerWidth>575) {

    let allheight = document.querySelector('.main-dir-ulRight').clientHeight;

    let per = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-dir-ulRight",
        start: "top top",
        end: 'top top-='+allheight,
        scrub: 2,
        pin: true,
        pinSpacing: true,
      }
    });

    let per2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-dir-ulLeft",
        start: "top top",
        end: 'top top-='+allheight,
        scrub: 2,
        pin: true,
        pinSpacing: true,
      }
    });



    //let ptop = parseFloat(window.getComputedStyle(document.querySelector('.main-dir-ulRight-inner'), null).getPropertyValue("gap"));
    let ptop = (innerHeight - document.querySelector('.main-dir-ulRight-sin:first-child').clientHeight)/2;
    let pbot = (innerHeight - document.querySelector('.main-dir-ulRight-sin:last-child').clientHeight)/2 + document.querySelector('.main-dir-ulRight-sin:last-child').clientHeight;

    per.fromTo('.main-dir-ulRight-inner', {
      y: `${ptop}px`,
    }, {
      yPercent: -100,
      y: `${pbot}px`,
      ease: 'none'
    })

    let points = 0;
    let pointsDef = -1;

    document.querySelectorAll('.main-dir-ulLeft img').forEach(el => {
      points++; 
      if (points>1) {
        per2.fromTo(el, {
          opacity:0,
          rotate: 360,
        }, {
          opacity:1,
          rotate: 0,
        }, pointsDef)
        per2.fromTo(el.previousElementSibling, {
          opacity:1,
        }, {
          opacity:0,
          rotate: -360,
        }, pointsDef)
        per2.fromTo(document.querySelectorAll('.main-dir-ulRight-sin')[pointsDef + 1].querySelector('.omega-btn'), {
          opacity:0,
        }, {
          opacity:1,
        }, pointsDef)
        per2.fromTo(document.querySelectorAll('.main-dir-ulRight-sin')[pointsDef + 1], {
          opacity:0.2,
        }, {
          opacity:1,
        }, pointsDef)
        per2.to(document.querySelectorAll('.main-dir-ulRight-sin')[pointsDef + 1].previousElementSibling.querySelector('.omega-btn'), {
          opacity:0,
        }, pointsDef)
        per2.to(document.querySelectorAll('.main-dir-ulRight-sin')[pointsDef + 1].previousElementSibling, {
          opacity:0.2,
        }, pointsDef)
      }
      pointsDef++;
    });
  
    let dirsTimeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-dir-start",
        start: "top top",
        endTrigger: '.main-about-system',
        end: 'top bottom',
        scrub: 2,
        pin: '.main-dir-start',
        pinSpacing: false,
      }
    })

    let dirsTimeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-dir-start",
        start: "top top",
        end: 'bottom top',
        scrub: 2,
      }
    })

    dirsTimeline2.to('.main-dir-h', {
      y: `-${innerHeight}px`
    })
  } else {
    
  }
  
  
}

function systemSlider() {

  let systemPre = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-about-system",
      start: "top bottom-=40%",
    }
  })

  systemPre.fromTo('.main-about-system .main-sone-border', {
    height:'0%',
  }, {
    height:'100vh',
    duration: 1.2,
  }, 0)

  systemPre.to('.main-about-system .main-sone-border', {
    height:'140%',
    duration: 1.2,
  })

  let systemPre2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-about-system",
      start: "top bottom",
      scrub: true,
      end: 'top top'
    }
  })

  systemPre2.fromTo('.main-about-system-back', {
    yPercent: -20
  }, {
    yPercent: 0,
  })

  let systemPre3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-about-system",
      start: "top top",
      scrub: true,
      end: 'bottom top'
    }
  })

  systemPre3.to('.main-about-system-back', {
    yPercent: 20,
  })

  let xPos = 0;
  let countSlides = -1;
  document.querySelectorAll('.main-system-slide').forEach(el => {
    countSlides++;
  });
  if ((countSlides+1) < 10) {
    var nol = '0';
  } else {
    var nol = '';
  }
  document.querySelector('.main-system-nums span:nth-child(3)').innerHTML = nol + (countSlides + 1);
  let minPos = -countSlides;
  let maxPos = 0;
  let currentPos = 0;
  if ((countSlides + 1)>1) {
    document.querySelector('.main-system-btns svg:first-child').classList.add('active')
    document.querySelector('.main-system-btns svg:last-child').classList.remove('active')
  } else {
    document.querySelector('.main-system-btns svg:first-child').classList.add('active')
    document.querySelector('.main-system-btns svg:last-child').classList.add('active')
  }
  document.querySelector('.main-system-btns svg:last-child').addEventListener("click", function () {
    if ((currentPos > minPos) || (currentPos == maxPos)) {
      currentPos--;
      if (innerWidth>991) {
        xPos = xPos - 25;
      } else if (innerWidth>575 && innerWidth<=991) {
        xPos = xPos - 50;
      } else {
        xPos = xPos - 100;
      }
      
      if ((-(currentPos - 1)) < 10) {
        var curnol = '0';
      } else {
        var curnol = '';
      }
      document.querySelector('.main-system-nums span:nth-child(1)').innerHTML = curnol + (-(currentPos - 1));
      document.querySelectorAll('.main-system-slide').forEach(el => {
        el.classList.remove('active')
      });
      document.querySelectorAll('.main-system-slide')[(-currentPos)].classList.add('active');
      document.querySelector('.main-system-btns svg:first-child').classList.remove('active')
      document.querySelector('.main-system-btns svg:last-child').classList.remove('active')
    } 
    if ((-currentPos) == countSlides) {
      document.querySelector('.main-system-btns svg:first-child').classList.remove('active')
      document.querySelector('.main-system-btns svg:last-child').classList.add('active')
    }
    gsap.to('.main-system-slide', {
      x:  `${xPos}vw`,
      duration: 0.6,
    })
  })
  document.querySelector('.main-system-btns svg:first-child').addEventListener("click", function () {
    if (currentPos < maxPos) {
      currentPos++;
      if (innerWidth>991) {
        xPos = xPos + 25;
      } else if (innerWidth>575 && innerWidth<=991) {
        xPos = xPos + 50;
      } else {
        xPos = xPos + 100;
      }
      if ((-(currentPos - 1)) < 10) {
        var curnol = '0';
      } else {
        var curnol = '';
      }
      document.querySelector('.main-system-nums span:nth-child(1)').innerHTML = curnol + (-(currentPos - 1));
      document.querySelectorAll('.main-system-slide').forEach(el => {
        el.classList.remove('active')
      });
      document.querySelectorAll('.main-system-slide')[(-currentPos)].classList.add('active');
      document.querySelector('.main-system-btns svg:first-child').classList.remove('active')
      document.querySelector('.main-system-btns svg:last-child').classList.remove('active')
    } 
    if ((-currentPos) == 0) {
      document.querySelector('.main-system-btns svg:first-child').classList.add('active')
      document.querySelector('.main-system-btns svg:last-child').classList.remove('active')
    }
    gsap.to('.main-system-slide', {
      x:  `${xPos}vw`,
      duration: 0.6,
    })
  })
}


function docs() {

  var prodpodcat = document.querySelectorAll('.docs-filtr-a');
  prodpodcat.forEach((el)=>{
    el.addEventListener("click", function () {
      prodpodcat.forEach((els)=>{
        els.classList.remove('active')
      })
      el.classList.add('active')
      ScrollTrigger.refresh();
    })
  })

  let docsPre = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-docs-wrap",
      start: "top bottom-=40%",
    }
  })

  var mainhcounter = 0;
  document.querySelectorAll('.main-docs-h').forEach((el)=>{
    mainhcounter = mainhcounter + 0.1;
    docsPre.fromTo(el, {
      yPercent: 20,
      opacity:0,
    }, {
      yPercent: 0,
      opacity:1,
      duration: 0.6,
      delay:0,
    }, mainhcounter)
  })

  docsPre.fromTo('.main-docs-wrap .main-sone-border', {
    height:'0%',
  }, {
    height:'100vh',
    duration: 1.2,
  }, 0)

  docsPre.to('.main-docs-wrap .main-sone-border', {
    height:'100%',
    duration: 1.2,
  })

  document.querySelectorAll('.main-doc').forEach(el => {
    el.addEventListener("mouseenter", function () {
      if (el == document.querySelectorAll(".main-doc")[0]) {
        el.style.borderTop = '1px solid transparent';
        el.style.borderBottom = '1px solid transparent';
      } else {
        el.previousElementSibling.style.borderBottom = '1px solid transparent';
        el.style.borderBottom = '1px solid transparent';
      }
    })
    el.addEventListener("mouseleave", function () {
      if (el == document.querySelectorAll(".main-doc")[0]) {
        el.style.borderTop = '1px solid rgba(27, 27, 27, 0.4)';
        el.style.borderBottom = '1px solid rgba(27, 27, 27, 0.4)';
      } else {
        el.previousElementSibling.style.borderBottom = '1px solid rgba(27, 27, 27, 0.4)';
        el.style.borderBottom = '1px solid rgba(27, 27, 27, 0.4)';
      }
    })
  });

}

function mapa() {

  $easyxy = 0;

  document.querySelectorAll('.mapomega-bullit').forEach((el)=>{
      el.addEventListener('mouseenter', () => {
          $easyxy = el;
          el.querySelector('div').style.pointerEvents = 'all';
          el.style.zIndex = '9999';
      })
  })

  document.querySelectorAll('.mapomega-bullit').forEach((el)=>{
      el.addEventListener('mouseleave', () => {
          $easyxy = 0;
          setTimeout(function(){
              if ($easyxy != el) {
                  el.querySelector('div').style.pointerEvents = 'none';
                  el.style.zIndex = '3244';
              }
          }, 600);
      })
  })

  let mapaPre = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-map-wrapper",
      start: "top bottom-=30%",
    }
  })

  var mainhcounter = 0;
  document.querySelectorAll('.main-map-doph').forEach((el)=>{
    mainhcounter = mainhcounter + 0.1;
    mapaPre.fromTo(el, {
      yPercent: 20,
      opacity:0,
    }, {
      yPercent: 0,
      opacity:1,
      duration: 0.6,
      delay:0,
    }, mainhcounter)
  })

  mapaPre.fromTo('.main-map-wrapper .main-sone-border', {
    height:'0%',
  }, {
    height:'100%',
    duration: 1.2,
  }, 0)

  let mapaPre2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-map-inner",
      start: "top bottom-=30%",
    }
  })

  var mainhcounter = 0;
  document.querySelectorAll('.main-map-fixed-hs p').forEach((el)=>{
    mainhcounter = mainhcounter + 0.1;
    mapaPre2.fromTo(el, {
      yPercent: 20,
      opacity:0,
    }, {
      yPercent: 0,
      opacity:1,
      duration: 0.6,
      delay:0,
    }, mainhcounter)
  })

  var mainhcounter = 0;
  document.querySelectorAll('.main-map-fixed-num').forEach((el)=>{
    mainhcounter = mainhcounter + 0.1;
    mapaPre2.fromTo(el, {
      yPercent: 20,
      opacity:0,
    }, {
      yPercent: 0,
      opacity:0.1,
      duration: 0.6,
      delay:0,
    }, mainhcounter)
  })

 

  mapaPre2.fromTo('.mapomega', {
    yPercent: 20,
  }, {
    yPercent: 0,
    duration: 0.6,
  }, 0.2)

  let mapaPre3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-map-fixed",
      start: "top top+=20%",
    }
  })

  var mainhcounter2 = 0;
  document.querySelectorAll('.mapomega-bullit').forEach(element => {
    mainhcounter2 = mainhcounter2 + 0.025;
    mapaPre3.fromTo(element, {
      opacity:0,
      scale: 4,
    }, {
      opacity:1,
      scale: 1,
      duration: 0.6,
    }, mainhcounter2)
  });


  document.querySelector('.main-map-fixed-btns span:first-child').addEventListener("click", function () {
    document.querySelector('.main-map-fixed-btns span:first-child').classList.add('active');
    document.querySelector('.main-map-fixed-btns span:last-child').classList.remove('active');
    document.querySelector('.mapomega').style.display = 'block';
    document.querySelector('.main-map-spisok').style.opacity = '0';
    setTimeout(() => {
      document.querySelector('.main-map-spisok').style.display = 'none';
      if (innerWidth<=991) {
        document.querySelector('.main-map-fixed-num').style.display = 'block';
        document.querySelector('.main-map-fixed').style.height = '100vh';
      }
      document.querySelector('.mapomega').style.opacity = '1';
    }, 600);
  });

  document.querySelector('.main-map-fixed-btns span:last-child').addEventListener("click", function () {
    document.querySelector('.main-map-fixed-btns span:first-child').classList.remove('active');
    document.querySelector('.main-map-fixed-btns span:last-child').classList.add('active');
    document.querySelector('.mapomega').style.opacity = '0';
    setTimeout(() => {
      document.querySelector('.mapomega').style.display = 'none';
      document.querySelector('.main-map-spisok').style.display = 'block';
      if (innerWidth<=991) {
        document.querySelector('.main-map-fixed-num').style.display = 'none';
        document.querySelector('.main-map-fixed').style.height = 'auto';
      }
    }, 600);
    setTimeout(() => {
      document.querySelector('.main-map-spisok').style.opacity = '1';
    }, 800);
  })

  document.querySelectorAll('.main-map-spisok-sin').forEach(el => {
    el.addEventListener("mouseenter", function () {
      if (el == document.querySelectorAll(".main-map-spisok-sin")[0]) {
        el.style.borderTop = '1px solid transparent';
        el.style.borderBottom = '1px solid transparent';
      } else {
        el.previousElementSibling.style.borderBottom = '1px solid transparent';
        el.style.borderBottom = '1px solid transparent';
      }
    })
    el.addEventListener("mouseleave", function () {
      if (el == document.querySelectorAll(".main-map-spisok-sin")[0]) {
        el.style.borderTop = '1px solid rgba(27, 27, 27, 0.4)';
        el.style.borderBottom = '1px solid rgba(27, 27, 27, 0.4)';
      } else {
        el.previousElementSibling.style.borderBottom = '1px solid rgba(27, 27, 27, 0.4)';
        el.style.borderBottom = '1px solid rgba(27, 27, 27, 0.4)';
      }
    })
  });

  let mapZenit = document.querySelector('.mapomega').clientWidth / 2;

  document.querySelectorAll('.mapomega-bullit').forEach(el => {
    let lefting = parseFloat(window.getComputedStyle(el, null).getPropertyValue("left"));
    if (lefting >= mapZenit) {
      el.querySelector('div').style.left = 'auto';
      el.querySelector('div').style.right = '10px';
    } else {
      el.querySelector('div').style.right = 'auto';
      el.querySelector('div').style.left = '10px';
    }
  })
}

function production() {

  let productionTimeline2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-production-wrapper",
      start: "top center",
      end: 'top top-='+(innerHeight*2),
      scrub: 2,
    }
  })

  productionTimeline2.fromTo('.main-production-h', {
    xPercent: 120,
  }, {
    xPercent: 20,
  }, 0)

  productionTimeline2.fromTo('.main-production-h', {
    opacity: 1,
  }, {
    opacity: 1,
  }, 0.5)

  productionTimeline2.to('.main-production-h',{
    xPercent: -120,
  }, 0.6)

  let productionTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-production-wrapper",
      start: "top top",
      end: 'top top-='+(innerHeight*3),
      scrub: 2,
      pin: true,
      pinSpacing: true,
    }
  })

  productionTimeline.fromTo('.production-video', {
    opacity: 1,
  }, {
    opacity: 1,
  }, 0)

  if (innerWidth>991) {
    productionTimeline.fromTo('.production-video', {
      clipPath: 'polygon(50% 0%, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%)',
    }, {
      clipPath: 'polygon(50% 50%, 100% 0%, 100% 50%, 50% 100%, 50% 100%, 50% 100%, 0% 50%, 0% 0%)',
    }, 2)
  } else {
    productionTimeline.fromTo('.production-video', {
      clipPath: 'polygon(50% 0%, 100% 0%, 100% 50%, 100% 100%, 50% 100%, 0% 100%, 0% 50%, 0% 0%)',
      height: '100vh',
      marginTop: '0vh',
    }, {
      clipPath: 'polygon(50% 50%, 100% 0%, 100% 50%, 50% 100%, 50% 100%, 50% 100%, 0% 50%, 0% 0%)',
      height: '40vh',
      marginTop: '20vh',
    }, 2)
  }
  

  let productionTimeline3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-postpro-wrapper",
      start: "top bottom",
      end: 'top top',
      scrub: true,
    }
  })

  productionTimeline3.fromTo('.main-postpro-logo svg', {
    opacity:0,
  }, {
    opacity:1,
    duration: 0.01,
  }, 0)

  productionTimeline3.fromTo('.main-postpro-logo svg', {
    yPercent: -100,
  }, {
    yPercent: 0,
    duration: 0.9,
  }, 0.01)

  productionTimeline3.to('.main-postpro-logo svg', {
    opacity:1,
  }, 1)

  let productionTimeline4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-postpro-logo",
      start: "top top",
      endTrigger: '.main-postpro-wrapper',
      end: 'bottom bottom',
      scrub: 2,
      pin: true,
      pinSpacing: false,
    }
  })

}

function postpro() {

  let propostTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-postpro-wrapper",
      start: "top bottom-=30%",
    }
  })

  propostTimeline.fromTo('.main-postrpo-real-l-h', {
    yPercent:50,
    opacity:0,
  }, {
    yPercent:0,
    opacity:0.6,
  }, 0)

  propostTimeline.fromTo('.main-postrpo-real-r-h', {
    yPercent:50,
    opacity:0,
  }, {
    yPercent:0,
    opacity:1,
  }, 0)

  propostTimeline.fromTo('.main-postrpo-real-r-minih', {
    yPercent:50,
    opacity:0,
  }, {
    yPercent:0,
    opacity:0.6,
  }, 0)

  let propostPar = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-postrpo-real-l-photo",
      start: "top bottom",
      end: 'bottom top',
      scrub: 2,
    }
  })

  propostPar.fromTo('.main-postrpo-real-l-photo img', {
    yPercent: -10,
  }, {
    yPercent: 10,
  })

  let propostPar2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-postrpo-real-r-img",
      start: "top bottom",
      end: 'bottom top',
      scrub: 2,
    }
  })

  propostPar2.fromTo('.main-postrpo-real-r-img img', {
    yPercent: -10,
  }, {
    yPercent: 10,
  })
}

function reviewsFunc() {

  let reviewsTimeline0 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-reviews-wrapper",
      start: "top bottom",
      end: "bottom top",
      scrub: 2,
    }
  })

  reviewsTimeline0.fromTo('.main-reviews-back', {
    yPercent: 0,
  }, {
    yPercent: -20,
  })

  let reviewsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-reviews-wrapper",
      start: "top bottom-=30%",
    }
  })

  reviewsTimeline.fromTo('.main-reviews-h', {
    yPercent:50,
    opacity:0,
  }, {
    yPercent:0,
    opacity:1,
  }, 0)

  let xPos = 0;
  let countSlides = -1;
  document.querySelectorAll('.main-reviews-slide').forEach(el => {
    countSlides++;
  });
  let minPos = -countSlides;
  let maxPos = 0;
  let currentPos = 0;
  if ((countSlides + 1)>1) {
    document.querySelectorAll('.main-reviews-slide-btns svg:first-child').forEach(el => {
      el.classList.add('active')
    })
    document.querySelectorAll('.main-reviews-slide-btns svg:last-child').forEach(el => {
      el.classList.remove('active')
    })
  } else {
    document.querySelectorAll('.main-reviews-slide-btns svg:first-child').forEach(el => {
      el.classList.add('active')
    })
    document.querySelectorAll('.main-reviews-slide-btns svg:last-child').forEach(el => {
      el.classList.add('active')
    })
  }
  document.querySelectorAll('.main-reviews-slide-btns svg:last-child').forEach(el => {
    el.addEventListener("click", function () {
      if ((currentPos > minPos) || (currentPos == maxPos)) {
        currentPos--;
        xPos = xPos - 100;
        document.querySelectorAll('.main-reviews-slide').forEach(el => {
          el.classList.remove('active')
        });
        document.querySelectorAll('.main-reviews-slide')[(-currentPos)].classList.add('active');
        document.querySelectorAll('.main-reviews-slide-btns svg:first-child').forEach(els => {
          els.classList.remove('active')
        })
        document.querySelectorAll('.main-reviews-slide-btns svg:last-child').forEach(els => {
          els.classList.remove('active')
        })
      } 
      if ((-currentPos) == countSlides) {
        document.querySelectorAll('.main-reviews-slide-btns svg:first-child').forEach(els => {
          els.classList.remove('active')
        })
        document.querySelectorAll('.main-reviews-slide-btns svg:last-child').forEach(els => {
          els.classList.add('active')
        })
      }
      gsap.to('.main-reviews-slide', {
        x:  `${xPos}%`,
        duration: 1.2,
      })
    })
  })
  document.querySelectorAll('.main-reviews-slide-btns svg:first-child').forEach(el => {
    el.addEventListener("click", function () {
      if (currentPos < maxPos) {
        currentPos++;
        xPos = xPos + 100;
        document.querySelectorAll('.main-reviews-slide').forEach(el => {
          el.classList.remove('active')
        });
        document.querySelectorAll('.main-reviews-slide')[(-currentPos)].classList.add('active');
        document.querySelectorAll('.main-reviews-slide-btns svg:first-child').forEach(els => {
          els.classList.remove('active')
        });
        document.querySelectorAll('.main-reviews-slide-btns svg:last-child').forEach(els => {
          els.classList.remove('active')
        });
      } 
      if ((-currentPos) == 0) {
        document.querySelectorAll('.main-reviews-slide-btns svg:first-child').forEach(els => {
          els.classList.add('active')
        });
        document.querySelectorAll('.main-reviews-slide-btns svg:last-child').forEach(els => {
          els.classList.remove('active')
        });
      }
      gsap.to('.main-reviews-slide', {
        x:  `${xPos}%`,
        duration: 1.2,
      })
    })
  })
}

function newsFunc() {

  let newsTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-news-wrapper",
      start: "top bottom-=30%",
    }
  })

  newsTimeline.fromTo('.main-news-wrapper .main-sone-border', {
    height:'0%',
  }, {
    height:'100%',
    duration: 1.2,
  }, 0)

  newsTimeline.fromTo('.main-news-h', {
    yPercent:50,
    opacity:0,
  }, {
    yPercent:0,
    opacity:1,
  }, 0)

}

function footerDrawSvg() {

  let footerPin = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-news-wrapper",
      start: "bottom bottom",
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
    }
  })

  gsap.registerPlugin(DrawSVGPlugin);

  let svgf = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer-bottom",
      start: "top bottom-=30%",
    }
  })

  svgf.from(".footer-svg path", {duration:3,drawSVG: 0}); 
}

servbox()
mainanimf()
animatelogo()
videomain()
advs()
dirs()
systemSlider()
docs()
mapa()
production()
postpro()
reviewsFunc()
newsFunc()
footerDrawSvg()

// фэнсибоксы

Fancybox.bind('[data-fancybox]', {
  on: {
    done: (fancybox) => {
      document.querySelector('.menu-wrapper').style.transform = 'translateY(0%)';
      document.querySelector('.regbox-wrapper').style.transform = 'translateY(0%)';
      document.querySelectorAll('.probox-wrapper').forEach(els => {
        els.style.transform = 'translateY(0%)';
      })
    },
    close: (fancybox) => {
      //document.querySelector('.menu-wrapper').style.transform = 'translateY(-120%)';
    },
  },
}
)
Fancybox.defaults.dragToClose = false;
Fancybox.defaults.autoFocus = false;

});

ScrollTrigger.refresh();
ScrollTrigger.config({ ignoreMobileResize: true })
        
