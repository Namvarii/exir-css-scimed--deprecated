import 'foundation-sites/js/foundation.core'
import 'foundation-sites/js/foundation.reveal'
import 'foundation-sites/js/foundation.util.keyboard'
import 'foundation-sites/js/foundation.util.box'
import 'foundation-sites/js/foundation.util.triggers'
import 'foundation-sites/js/foundation.util.mediaQuery'
import 'foundation-sites/js/foundation.util.motion'
import '../../scss/motion.scss'

const reveal_buttons = $( '[data-open]' )
reveal_buttons.each(
   function( i, elem ) {
      const name = $( elem ).data( 'open' )
      const reveal = $( `[data-reveal=${name}]` )
      const reveal_obj = new Foundation.Reveal( reveal )
      const close = $( `[data-close=${name}]` )
      close.on(
         'click', function() {
            reveal_obj.close()
         }
      )
      $( this ).on(
         'click', function() {
            Foundation.Motion.animateIn( reveal, 'show-modal' )
            reveal_obj.open()
         }
      )
   }
)
