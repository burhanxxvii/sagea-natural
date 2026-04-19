function orderProduct(productName) {
    window.open(
      "https://wa.me/6285736530544?text=Saya mau order " + productName,
      "_blank"
    );
  }
  
  // FIX SCROLL ANIMATION
  const elements = document.querySelectorAll('.fade-slide');
  
  function revealOnScroll() {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      if (rect.top < windowHeight - 50) {
        const delay = el.dataset.delay || 0;
  
        setTimeout(() => {
          el.classList.add('show');
        }, delay);
      }
    });
  }
  
  // jalan saat pertama load
  window.addEventListener('load', revealOnScroll);
  
  // jalan saat scroll
  window.addEventListener('scroll', revealOnScroll);