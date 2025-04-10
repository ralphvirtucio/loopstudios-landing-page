const disclosures = document.querySelectorAll('.js-disclosure')


function toggleDisclosure() {
  console.log('clicked')
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !isExpanded)
}


function init() {
  if(!disclosures.length) {
    return 
  }

  disclosures.forEach(component => {
    component.dataset.state = 'ready';

    const disclosuresButtons = component.querySelectorAll('.js-disclosure_button')

    disclosuresButtons.forEach(btn => {
      btn.removeAttribute('title')
      btn.removeAttribute('disabled')

      btn.addEventListener('click', toggleDisclosure)
    })
  })
}

init()