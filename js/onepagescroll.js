$( document ).ready(function() {
const sections = $(".section");
const display = $(".maincontent");
let inscroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const countPositionPercent = sectionEq => {
  return `${sectionEq * -100}%`;
};

const switchActiveClass = (elems, elemNdx) => {
  elems
    .eq(elemNdx)
    .addClass("active")
    .siblings()
    .removeClass("active");
};

const unBlockScroll = () => {
  setTimeout(() => {
    inscroll = false;
  }, 1300); // подождать пока завершится инерция на тачпадах
};

const performTransition = sectionEq => {
  if (inscroll) return;
  inscroll = true;

  const position = countPositionPercent(sectionEq);
  const switchFixedMenuClass = () =>
    switchActiveClass($(".fixed-menu__item"), sectionEq);

  switchActiveClass(sections, sectionEq);
  switchFixedMenuClass();

  display.css({
    transform: `translateY(${position})`
  });

  unBlockScroll();
};

const scrollViewport = direction => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === "next" && nextSection.length) {
    performTransition(nextSection.index());
  }

  if (direction === "prev" && prevSection.length) {
    performTransition(prevSection.index());
  }
};

$(document).on({
  wheel: e => {
    const deltaY = e.originalEvent.deltaY;
    const direction = deltaY > 0 ? "next" : "prev";
    scrollViewport(direction);
  },
  keydown: e => {
    const tagName = e.target.tagName.toLowerCase();
    const userTypingInInputs = tagName === "input" || tagName === "textarea";

    if (userTypingInInputs) return;

    switch (e.keyCode) {
      case 40:
        scrollViewport("next");
        break;

      case 38:
        scrollViewport("prev");
        break;
    }
  }
});

$("[data-scroll-to]").on("click", e => {
  e.preventDefault();
  performTransition(parseInt($(e.currentTarget).attr("data-scroll-to")));
});

// разрешаем свайп на мобильниках
if (isMobile) {
  window.addEventListener(
    "touchmove",
    e => {
      e.preventDefault();
    },
    { passive: false }
  );

  $("body").swipe({
    swipe: (event, direction) => {
      let scrollDirecrion;
      if (direction === "up") scrollDirecrion = "next";
      if (direction === "down") scrollDirecrion = "prev";
      scrollViewport(scrollDirecrion);
    }
  });
}
 });


 /*let onePageScroll = () => {
  const content = document.querySelector('.maincontent');
  const pages = content.querySelectorAll('.section');
  const points = document.querySelectorAll('.fixed-menu__item');
  const dataScrollto = document.querySelectorAll('[data-scroll-to]');
  
  let inScroll = false;
  
  addNavigation();
  wheel();
  keyPush();

  if(isMobileDevice()) swipe();
  
  function doTransition(pageNumber) {
    const position  = `${pageNumber * (-100)}%`;
    
    if(inScroll) return;
    
    inScroll = true;
    
    addClass(pages);
    
    content.style.transform = `translateY(${position})`;
    
    setTimeout(() => {
      inScroll = false;
      addClass(points);
    }, 1000); //transition + 300(инерция скролла)
    
    function addClass(arr) {
      arr[pageNumber].classList.add('active');
      
      for(const item of arr) {
        if(item != arr[pageNumber]) {
          item.classList.remove('active');
        };
      };
    };
  };
 
  function addNavigation() {
    for(const point of dataScrollto) {
      point.addEventListener('click' , e => {
        e.preventDefault();
        doTransition(point.dataset.scrollTo);
      });
    };
  };
  
  function wheel() {
    document.addEventListener('wheel', e => {
      const direct = e.deltaY > 0 ? 'up' : 'down';
      
      scrollToPage(direct);
    });
  };
  
  function keyPush() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 40:
        scrollToPage('up');
          break;
        case 38:
        scrollToPage('down');
          break;
        default:
          break;
      };
    });
  };
  
  function definePage(arr) {
    for (let i = 0; i < arr.length; i++) {
      let iter = arr[i];
      if (iter.classList.contains('active')) {
        return {
          iterIndex: i,
          iterActive: iter,
          iterNext: iter.nextElementSibling,
          iterPrev: iter.previousElementSibling
        };
      };
    };
  };
  
  function scrollToPage(direct) {
    let page = definePage(pages);
    
    if (direct === 'up' && page.iterNext) {
      let numPage = page.iterIndex + 1;
      
      doTransition(numPage);
    };

    if (direct === 'down' && page.iterPrev) {
      let numPage = page.iterIndex - 1;
      doTransition(numPage);
    };
  };

    function swipe() {
    let touchStartY = 0;
    let touchEndY = 0;
    const wrapper = document.querySelector('.wrapper');
    
    document.addEventListener('touchstart', e => {
      touchStartY = e.changedTouches[0].screenY;
    }, false);
    
    wrapper.addEventListener('touchmove', e => e.preventDefault());
    
    document.addEventListener('touchend', e => {
      touchEndY = e.changedTouches[0].screenY;
      let direct = swipeDirect();
      scrollToPage(direct);
    }, false);
    
    function swipeDirect() {
      let dif = touchStartY - touchEndY;
      if (dif > 100) {
        return 'up';
      } else if (dif < - 100) {
        return  'down';
      }
    }
  }

  function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }
};

onePageScroll();*/

