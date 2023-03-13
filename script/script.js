const bth = document.querySelectorAll('.bth');
const css = document.querySelectorAll('link[rel="stylesheet"]');
const stylesheet = document.querySelector('link[rel="stylesheet"]');
for (let i = 0; i < bth.length; i++) {
  bth[i].addEventListener('click', function () {
    for (let j = 0; j < css.length; j++) {

      if (document.contains(css[j])) {
        console.log('css is in the document');
        css[j].remove();

      } else {
        console.log('css is not in the document');
        const head = document.getElementsByTagName('head')[0];
        head.appendChild(css[j]);
      }
    }
  });
}
