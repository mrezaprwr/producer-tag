function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const drum = document.querySelector(`.drum[data-key="${e.keyCode}"]`);
    if(!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    drum.classList.add('playing');
}
function removeTransition(e) {
    if(e.propertyName != 'transform') {
        return;
    }
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.drum');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);