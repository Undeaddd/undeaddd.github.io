$(document).ready(function(){
  $(".carousel__first").owlCarousel({
  	loop:true, //Зацикливаем слайдер
                margin: 10, //Отступ от элемента справа в 50px
                stagePadding: 0,
                nav: true, //Отключение навигации
               // autoplay: true, //Автозапуск слайдера
                dots: true,
                touchDrag: true,
                loop: true,
                navText: ["<img src='img/prev.png'>", "<img src='img/next.png'>"],
                smartSpeed: 1000, //Время движения слайда
                autoplayTimeout: 25000, //Время смены слайда
                
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:2
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }

                }
            });
  });