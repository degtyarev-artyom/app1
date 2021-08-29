import { lightness } from 'functions/staff-styling-hsla-func'
import css from 'styled-jsx/css'
import { staffColors } from 'styling/staff/staff-styling-themes'

export const staticStyles = css`
  @import 'src/styling/scss/styling-mixins.scss';

  .StaffShowHideCode {
    &__pre {
      background: ${lightness(staffColors.grey, 70)};
    }
  }
`
