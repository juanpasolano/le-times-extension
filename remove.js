(function (document) {
  if(document.querySelector(".paywallv2-container")){
    document.querySelector(".paywallv2-container").remove();
    document.body.style.overflow = "initial";
  }
})(document);