const button_slider = $( '.button-slider' )
const items = button_slider.find( '.button-slider__item' )

window.onload = function() {

}

items.on(
   'click', function() {
      items.not( this ).addClass( 'selected' )
      $( this ).removeClass( 'selected' )
   }
)