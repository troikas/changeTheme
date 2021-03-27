function _(e){
  return document.getElementById(e);
}

function toggleClass(el, cl){
    return el.classList.toggle(cl);
}

const btnChangeTheme = _('changeTheme');
const mya = document.querySelector('a');
const copyText = new Date().getFullYear();

btnChangeTheme.addEventListener('click', () => {
  toggleClass(document.body, 'dark');
  toggleClass(mya, 'alt');
  toggleClass(btnChangeTheme, 'switch');
  if(btnChangeTheme.classList.contains('switch')){
    btnChangeTheme.innerText = 'Light Mode';
  } else {
    btnChangeTheme.innerText = 'Dark Mode';
  }
});

_('copy').innerText = `${copyText - 2}-${copyText + 2}`;