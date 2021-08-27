import css from 'styled-jsx/css'
import { staffThemesMain } from 'styling/staff/staff-styling-themes'

const themesCount = Object.entries(staffThemesMain).length - 1

export const getDynamicStyles = (staffColors) => {
  return css`
    @import 'src/styling/scss/styling-mixins.scss';
    
    .StaffChangeTheme {
      &__item {
        &--default {
          & > * {
            height: calc(100% / ${themesCount});
          }

          &--green {
            background: ${staffColors.green};
          }
          
          &--purple {
            background: ${staffColors.purple};
          }
      
          &--blue {
            background: ${staffColors.blue};
          }
      
          &--red {
            background: ${staffColors.red};
          }
      
          &--orange {
            background: ${staffColors.orange};
          }
      
          &--grey {
            background: ${staffColors.grey};
          }
        }

        &--green {
          background: ${staffColors.green};
        }
      
        &--purple {
          background: ${staffColors.purple};
        }
      
        &--blue {
          background: ${staffColors.blue};
        }
      
        &--red {
          background: ${staffColors.red};
        }
      
        &--orange {
          background: ${staffColors.orange};
        }
      
        &--grey {
          background: ${staffColors.grey};
        }
      }
    }
  `
}
