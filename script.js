function orderProduct(productName) {
    window.open(
      "https://wa.me/6285736530544?text=Saya mau order " + productName,
      "_blank"
    );
  }
  
  // SCROLL ANIMATION (FIX)
  const elements = document.querySelectorAll('.fade-slide');
  
  function checkScroll() {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      if (rect.top < windowHeight - 100) {
        const delay = el.dataset.delay || 0;
  
        setTimeout(() => {
          el.classList.add('show');
        }, delay);
      }
    });
  }
  
  // Jalankan saat load
  window.addEventListener('load', checkScroll);
  
  // Jalankan saat scroll
  window.addEventListener('scroll', checkScroll);