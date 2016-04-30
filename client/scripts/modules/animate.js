// ------------------------------------
//    #EVENTS
// ------------------------------------

export function Transition (query) {
  this.el = document.querySelector(query)
}

Transition.prototype.fadeIn = () => {
  this.el.style.display = 'flex'
  this.el.style.transform = 'translate(-3rem, -3rem)'
  this.el.style.transition = 'all 2s cubic-bezier'
}
