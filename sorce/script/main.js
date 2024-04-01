window.onload = () => {
    //alert("Куку");
}

function toggleTextDescription() {
    let button = document.getElementById('toggle_description');
    let shortText = document.getElementById('short_text_description');
    let fullText = document.getElementById('full_text_description');
    if (button.dataset.toggle === '0') {
        console.log(1111111);
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
