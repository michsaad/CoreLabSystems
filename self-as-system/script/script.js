window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');


        let titlehover = document.querySelector('#phototitle');

        console.log(titlehover)
        phototitle.addEventListener("mouseover",respondMouseOver);
        phototitle.addEventListener("mouseout",respondMouseOut);

        function respondMouseOver(event) {

            tooltip.style.top = event.clientY + 10 + 'px' ;
            tooltip.style.left = event.clientX + 10 + 'px';

            console.log("WORK?")
            tooltip.classList.add('show');
            const tooltipPara = tooltip.querySelector('p');
            tooltipPara.innerHTML = '🌸💗🏋🏽‍♀️🌈🌝✌🏽😡🥀💎🍻🤰🏽😇🌞💩🧟‍♀️👻🦋🥳🤯👿💚👺👅😭💓 😢💖💛🎉❤️💀😉😔🔫😱😊👍🏽💋🦄🤩🤠😍🥸👹'
            console.log(event.clientX, event.ClientY);
        }
        
        function respondMouseOut() {

            tooltip.classList.remove('show')
    }
    
});

