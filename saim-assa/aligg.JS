let numss = document.querySelectorAll(".numss .nums");
let section = document.querySelector(".three");

numss.forEach((nums) => startCount(nums));

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal){
            clearInterval(count);
        }
    }, 100);
}


const navberone = document.querySelector('.navber-one');
const navberMenu = document.querySelector('.navber-menu');

navberone.addEventListener('click', () => {
    navberone.classList.toggle('active');
    navberMenu.classList.toggle('active');

});


        document.addEventListener("DOMContentLoaded",function(event){
            let cirtirt = document.querySelectorAll('.cirtirt');
            cirtirt.forEach(function(progress){
                let degree = 0;
                var targetDegree = parseInt(progress.getAttribute
                ('data-degree'));
                let color = progress.getAttribute('data-color');
                let nampre = progress.querySelector('.nampre')

                var interval = setInterval(function(){
                    degree += 1;
                    if (degree > targetDegree){
                        clearInterval(interval);
                        return;
                    }
                    progress.style.background = `conic-gradient($
                    {color} ${degree}%; #222 0%)`;
                    nampre.innerHTML = degree + '<span>%</span>';
                    nampre.style.color = color;
                },50)
            })
});

     let prevt = document.querySelector('.prevt');
     let next = document.querySelector('.next');

    next.addEventListener('click', function(){
        let items = document.querySelectorAll('.item');
        document.querySelector('.box').appendChild(items[0]);

    })
    prevt.addEventListener('click', function(){
        let items = document.querySelectorAll('.item');
        document.querySelector('.box').prepend(items[items.length - 1]);
    })
    