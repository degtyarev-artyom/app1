import css from 'styled-jsx/css'
import { lightness } from 'styling/staff/staff-styling-hsla'
import { staffColors } from 'styling/staff/staff-styling-themes'

export const staticStyles = css`
  @import 'src/styling/scss/styling-mixins.scss';

  .StaffShowHideCode {
    &__pre {
      background: ${lightness(staffColors.grey, 70)};
    }
  }
`
