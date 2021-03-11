const tip = document.querySelector('.tip'),
      waitImg = document.querySelector('.waiting_img'),

      english = document.querySelector('.english'),
      deutsch = document.querySelector('.deutsch'),
      
      englishCourses = document.querySelector('.engcourses'),
      germanCourses = document.querySelector('.gercourses'),
    
      section = document.querySelector('.project'),
      hamburger = document.querySelector('.hamburger'),
      lines = document.querySelectorAll('.line'),
      
      prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot'),
      infos = document.querySelectorAll('.about'),

      childrenCourse = document.querySelector('.children'),
      examsCourse = document.querySelector('.exams'),
      businessCourse = document.querySelector('.businesseng'),
      accentCourse = document.querySelector('.pronunciation'),
      testdafCourse = document.querySelector('.testdaf');


//при выборе английского

english.addEventListener('click', event => {
    englishClick();
    deutsch.classList.remove('clicked');
    english.classList.add('clicked');
    

})

function englishClick() {
    tip.style.display = 'none';
    // waitImg.style.display = 'none';
    englishCourses.style.display = 'block';
    germanCourses.style.display = 'none';     
}

//при выборе немецкого

deutsch.addEventListener('click', event => {
    germanClick();
    english.classList.remove('clicked');
    deutsch.classList.add('clicked');
})

function germanClick() {
    tip.style.display = 'none';
    // waitImg.style.display = 'none';
    englishCourses.style.display = 'none';
    germanCourses.style.display = 'block';
}

//открытие section при нажатии на кнопку меню

hamburger.onclick = function() {
    section.classList.toggle('project_none');
    hamburger.classList.toggle('hamburger__bg');
    lines.forEach(line => {
        line.classList.toggle('line__colored')
    });
}
    
//слайдер

let index = 0;

//ссылки внутри страницы на выбранные курсы

// childrenCourse.onclick = function() {
//     console.log('dnjnjnjn');
// }

// if (childrenCourse.onclick) {
//     index = 1;
//     prepareCurrentSlide(index);
//     console.log('fjfj');
// }



console.log(slides);
console.log(index);

const prepareCurrentSlide = index => {
    console.log(index);
    for (slide of slides) {
        slide.classList.remove('active')
    }
    slides[index].classList.add('active')
    for(dot of dots) {
        dot.classList.remove('active-dot');
    }
    dots[index].classList.add('active-dot');
    for(info of infos) {
        info.classList.remove('active');
    }
    infos[index].classList.add('active');
}

childrenCourse.onclick = function() {
    index = 1;
    prepareCurrentSlide(index);
}

examsCourse.onclick = function() {
    index = 3;
    prepareCurrentSlide(index);
}

businessCourse.onclick = function() {
    index = 0;
    prepareCurrentSlide(index);
}

accentCourse.onclick = function() {
    index = 4;
    prepareCurrentSlide(index);
}

testdafCourse.onclick = function() {
    index = 2;
    prepareCurrentSlide(index);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    }else {
    index++;
    prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length -1;
        prepareCurrentSlide(index);
    }
    else{
    index--;
    prepareCurrentSlide(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

dots.forEach((item, index) => {
    item.addEventListener('click', () => {
        prepareCurrentSlide(index);
    })
})


