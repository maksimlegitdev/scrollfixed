const block = document.querySelector('.block');
const blockScrollPosition = block.getBoundingClientRect().top + pageYOffset;

let scroll = pageYOffset;
block.style.transition = 'height 0.3s ease 0s';

window.onscroll = function() {
  if ((pageYOffset >= blockScrollPosition && block.clientHeight > 200) || (pageYOffset <= blockScrollPosition && block.clientHeight < 500)) {
    if (pageYOffset > scroll) {
      block.style.height = block.clientHeight - (block.clientHeight < 60 ? block.clientHeight : 60) + 'px';
    } else if (pageYOffset < scroll) {
      block.style.height = block.clientHeight + ((500 - block.clientHeight) < 60 ? (500 - block.clientHeight) : 60) + 'px';
    }
    scrollTo(0, blockScrollPosition);
    scroll = pageYOffset;
  }
}