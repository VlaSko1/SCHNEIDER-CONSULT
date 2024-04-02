window.onload = () => {
  let wrapBaner = document.querySelector('.wrap_banner');
  wrapBaner.style.width = getWidthContainer() + 'px';
   
}

function toggleTextDescription() {
    let button = document.getElementById('toggle_description');
    let shortText = document.getElementById('short_text_description');
    let fullText = document.getElementById('full_text_description');
    if (button.dataset.toggle === '0') {
        shortText.style.display = 'none';
        fullText.style.display = 'inline';
        button.textContent = ' скрыть'
        button.dataset.toggle = '1';
    } else {
        shortText.style.display = 'inline';
        fullText.style.display = 'none';
        button.textContent = ' раскрыть'
        button.dataset.toggle = '0';
    }
}

function getWidthContainer() {
    let container = document.querySelector('#main_container');

    const compStyle = getComputedStyle(container);

    return container.offsetWidth - parseInt(compStyle.paddingRight) - parseInt(compStyle.paddingLeft);
}
