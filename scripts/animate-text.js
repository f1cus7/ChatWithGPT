document.addEventListener('DOMContentLoaded', () => {
    const elem = document.querySelector('.style-text');

    if (!elem) return;

    function runLetterize() {
      function processNode(node, targetParent) {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent;
          text.split('').forEach(char => {
            if (char === ' ') {
              targetParent.appendChild(document.createTextNode(' '));
            } else {
              const span = document.createElement('span');
              span.textContent = char;
              targetParent.appendChild(span);
            }
          });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const cloned = node.cloneNode(false);
          targetParent.appendChild(cloned);
          Array.from(node.childNodes).forEach(child => {
            processNode(child, cloned);
          });
        }
      }

      const originalNodes = Array.from(elem.childNodes);
      elem.textContent = '';
      originalNodes.forEach(node => processNode(node, elem));

      anime.timeline()
        .add({
          targets: '.style-text span',
          opacity: [0, 1],
          translateX: [-20, 0],
          delay: anime.stagger(30),
          easing: 'easeOutExpo'
        });
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runLetterize();
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0
    });

    observer.observe(elem);
  });



