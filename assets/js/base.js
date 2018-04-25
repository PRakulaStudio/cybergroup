window.onload = function () {
  document.querySelectorAll('.cities').forEach(city => {
    city.addEventListener('click', event => {
      let flag = false;
      let list = city.querySelector('.list');

      if (event.target === city.querySelector('input')) {
        flag = true;
      }
      else {
        list.querySelectorAll('li a').forEach(li => {
          if (li === event.target) {
            city.querySelector('span').innerText = li.innerText;
          }
        })
      }
      if (!flag) {
        if (!list.classList.contains('d-block'))
          list.classList.add('d-block')
        else
          list.classList.remove('d-block')
      }
    })
  })
  document.querySelectorAll('.menu_btn').forEach(btn => {
    btn.addEventListener('click', event => {
      let wrapper = btn.parentElement.querySelector('.menu_list_wrapper');
      wrapper.classList.add('d-block')
      wrapper.querySelector('.close').addEventListener('click', event => {
        wrapper.classList.remove('d-block')
      })
    })
  })
  document.querySelectorAll('.section_1_btn .btn, .product .btn-to-bid').forEach(btn => {
    btn.addEventListener('click', event => {
      $('html, body').animate({
        scrollTop: $(".section_7").offset().top
      }, 1000);
      //animateScrollTo(document.querySelector('.section_7').getBoundingClientRect().top + btn.getBoundingClientRect().top);
    })
  })
  document.querySelectorAll('.contacts__cities .cities__item').forEach(city => {
    city.addEventListener('click', event => {
      document.querySelectorAll('.map--active, .cities__item--active').forEach(active => {
        active.classList.remove('map--active', 'cities__item--active');
      })
      city.classList.add('cities__item--active')
      document.querySelector('#' + city.attributes.getNamedItem('data-href').value).classList.add('map--active')
    })
  })

  document.querySelectorAll('.modificators button').forEach(button => {
    button.addEventListener('click', event => {
      button.classList.toggle('active')
    })
  })
  document.querySelectorAll('.characteristics .buttons .btn').forEach(btn => {
    btn.addEventListener('click', event => {
      document.querySelectorAll('.characteristics .active').forEach(el => {
        el.classList.remove('active');
      })
      btn.classList.add('active');
      let c = btn.attributes.getNamedItem('data-href').value;
      document.querySelector('.characteristics .' + c).classList.add('active');
    })
  });
}

