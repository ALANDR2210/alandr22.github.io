 // Añadir un objeto de atributos a un elemento
var addAttributes = function addAttributes(element, attrObj) {
  for (var attr in attrObj) {
    if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr]);
  }
};

// Crear elementos con atributos e hijo
var createCustomElement = function createCustomElement(element, attributes, children) {
  var customElement = document.createElement(element);
  if (children !== undefined) children.forEach(function (el) {
    if (el.nodeType) {
      if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
    } else {
      customElement.innerHTML += el;
    }
  });
  addAttributes(customElement, attributes);
  return customElement;
};

// Imprimir modal
var printModal = function printModal(content) {
  // crear contenedor interno
  var modalContentEl = createCustomElement('div', {
    id: 'ed-modal-content',
    class: 'ed-modal-content' },
  [content]),

  // crear contenedor principal
  modalContainerEl = createCustomElement('div', {
    id: 'ed-modal-container',
    class: 'ed-modal-container' },
  [modalContentEl]);

  // Imprimir el modal
  document.body.appendChild(modalContainerEl);

  // Remover el modal
  var removeModal = function removeModal() {return document.body.removeChild(modalContainerEl);};

  modalContainerEl.addEventListener('click', function (e) {
    if (e.target === modalContainerEl) removeModal();
  });
};

var diego = '<iframe id="LayoutDiv1" src="https://clips.twitch.tv/embed?clip=CulturedWealthyChimpanzeeHassanChop" frameborder="0" allowfullscreen="true" height="450" width="800"></iframe>';
document.getElementById('show-diego').addEventListener('click', function () {
  printModal(diego);
});

var mau = '<iframe id="LayoutDiv1" src="https://clips.twitch.tv/embed?clip=NurturingAggressiveMarjoramThunBeast" frameborder="0" allowfullscreen="true" height="450" width="800"></iframe>';
document.getElementById('show-mau').addEventListener('click', function () {
  printModal(mau);
});

var luca = '<iframe id="LayoutDiv1" src="https://clips.twitch.tv/embed?clip=NaiveInspiringCormorantPanicBasket" frameborder="0" allowfullscreen="true" height="450" width="800"></iframe>';
document.getElementById('show-luca').addEventListener('click', function () {
  printModal(luca);
});

var alan = '<iframe id="LayoutDiv1" src="https://clips.twitch.tv/embed?clip=VibrantBlazingOrangeOSfrog" frameborder="0" allowfullscreen="true" height="450" width="800"></iframe>';
document.getElementById('show-alan').addEventListener('click', function () {
  printModal(alan);
});
