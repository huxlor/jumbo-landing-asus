require('bootstrap-grid');
require('./styles.scss');

window.onload = function() {
  let loader = document.querySelectorAll('.content > .loader')[0];
  let collectionRow = document.getElementsByClassName("n6colunas");

  loader.style.display = "block";

  if (collectionRow[0].children[1].children) {
    let lists = collectionRow[0].children[1].children;

    for (var i = 0; i < lists.length; i++) {
      if (i % 2 == 0) {
        lists[i].className += " col-6 col-sm-6 col-md-4 col-lg-4 box-white";
      }
    }
  }

  setTimeout(() => {
    loader.style.display = "none";
    document.getElementsByClassName("product-shelf-wrapper")[0].style.opacity = 1;
  }, 1000);
};
