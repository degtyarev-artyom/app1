import css from 'styled-jsx/css'
import { staffColors } from 'styling/staff/staff-styling-themes'

export const staticStyles = css`
  @import 'src/styling/scss/styling-mixins.scss';

  .StaffContent {
    &--theme-green {
      border-color: ${staffColors.green};
    }

    &--theme-purple {
      border-color: ${staffColors.purple};
    }

    &--theme-blue {
      border-color: ${staffColors.blue};
    }
    
    &--theme-red {
      border-color: ${staffColors.red};
    }
    
    &--theme-orange {
      border-color: ${staffColors.orange};
    }
    
    &--theme-grey {
      border-color: ${staffColors.grey};
    }
  }
`
