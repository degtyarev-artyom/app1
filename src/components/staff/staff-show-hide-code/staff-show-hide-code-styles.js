import css from 'styled-jsx/css'
import { lightness } from 'styling/js/styling-ligthness-saturation'

export const getDynamicStyles = (staffColors) => {
  return css`
    @import 'src/styling/scss/styling-mixins.scss';
    
    .StaffShowHideCode {
      &__pre {
        background: ${lightness(staffColors.grey, 70)};
      }
    }
  `
}
