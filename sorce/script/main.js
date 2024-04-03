window.onload = () => {
  let wrapBaner = document.querySelector('.wrap_banner');
  wrapBaner.style.width = getWidthContainer() + 'px';
  increaseNumberPage();
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

function increaseNumberPage() {
  let paginationElement = document.querySelector('.pagination').children[0].children;
  for (elem of paginationElement) {
    if (/^\d+$/.test(elem.textContent)) {
      elem.textContent = + elem.textContent * 2;
      if (elem === paginationElement[0]) {
        elem.textContent += ' ' + getNextMonday();
      }
    }
  }
}

function getNextMonday() {
  let mondayDay = new Date;
  let nowDay = mondayDay.getDay();
  if (nowDay !== 1 && nowDay !== 0) {
    let nextMondayDay = 7 - nowDay + 1;
    mondayDay.setDate(mondayDay.getDate() + nextMondayDay);
  } else if (nowDay === 0) {
    mondayDay.setDate(mondayDay.getDate() + 1);
  } 
  let mondayStr =   dateConvert(mondayDay.getDate()) + '.' +
                    dateConvert(mondayDay.getMonth() + 1) + '.' +
                    yearConvert(mondayDay.getFullYear());
  return mondayStr;
}

function dateConvert(date) {
  if (date < 10) {
    return '0' + date;
  }
  return '' + date;
}

function yearConvert(year) {
  let strYear = '' + year;
  return strYear.split('').reduce((a, b, ind) => {
    if (ind > 1) {
      return a + b;
    } else {
      return a + '';
    }
  }, '')
}
