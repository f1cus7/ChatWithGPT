function letterizeElement(element) {
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
  const originalNodes = Array.from(element.childNodes);
  element.textContent = '';
  originalNodes.forEach(node => processNode(node, element));
}

const elem = document.querySelector('.letterize');
letterizeElement(elem);
anime.timeline()
  .add({
    targets: '.letterize span',
    opacity: [0, 1],
    translateX: [-20, 0],
    delay: anime.stagger(3),
    easing: 'easeOutExpo'
  });