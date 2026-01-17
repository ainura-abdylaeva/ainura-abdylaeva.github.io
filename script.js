const toggles = document.querySelectorAll('[data-accordion-toggle]');

const closeItem = (item) => {
  const toggle = item.querySelector('[data-accordion-toggle]');
  const panel = item.querySelector('.accordion-panel');
  if (!toggle || !panel) {
    return;
  }

  item.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  panel.hidden = true;
};

const openItem = (item) => {
  const toggle = item.querySelector('[data-accordion-toggle]');
  const panel = item.querySelector('.accordion-panel');
  if (!toggle || !panel) {
    return;
  }

  item.classList.add('is-open');
  toggle.setAttribute('aria-expanded', 'true');
  panel.hidden = false;
};

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const item = toggle.closest('.accordion-item');
    if (!item) {
      return;
    }

    const isOpen = item.classList.contains('is-open');

    document.querySelectorAll('.accordion-item.is-open').forEach((openItemNode) => {
      if (openItemNode !== item) {
        closeItem(openItemNode);
      }
    });

    if (isOpen) {
      closeItem(item);
    } else {
      openItem(item);
    }
  });
});
