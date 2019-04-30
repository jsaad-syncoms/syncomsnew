var formSpan = document.getElementsByClassName('formSpan');
var fields = document.getElementsByClassName('formArea');

formSpan[0].addEventListener('click', expandForm, false);
formSpan[1].addEventListener('click', expandForm, false);
formSpan[2].addEventListener('click', expandForm, false);

function expandForm() {
    setTimeout(function() {
        for (i=0; i<formSpan.length; i++) {
            formSpan[i].classList.add('noDisplay');
        }
    }, 100);
    
    fields[0].classList.add('expandedInput');
    fields[0].focus();
    
    setTimeout(function() {
        fields[1].classList.add('expandedInput');
    }, 100);
    
    setTimeout(function() {
        fields[2].classList.add('expandedInput');
    }, 200);
}

