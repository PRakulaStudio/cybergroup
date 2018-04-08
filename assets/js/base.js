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
    document.querySelector('.section_1_btn .btn').addEventListener('click', function (event) {
        animateScrollTo(document.querySelector('.section_7').getBoundingClientRect().top);
    });
}

