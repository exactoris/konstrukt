// alert('111')
window.onclick = e => {
    console.log(e);  // to get the element tag name alone
    if (e.target.className == 'about__img') {
      alert('ты тыкнул по картинке');
    }

}
console.log('1')
