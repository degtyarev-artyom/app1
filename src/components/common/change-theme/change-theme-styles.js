import css from 'styled-jsx/css'
import { themes } from 'styling/js/styling-themes'

const colorsCount = Object.entries(themes).length - 1

export const getDynamicStyles = (colors) => {
  return css`
    @import 'src/styling/scss/styling-mixins.scss';
    
    .ChangeTheme {
      &__item {
        &--default {

          & > * {
            height: calc(100% / ${colorsCount});
          }

          &--green {
            background: ${colors.green};
          }
          
          &--purple {
            background: ${colors.purple};
          }
      
          &--blue {
            background: ${colors.blue};
          }
      
          &--red {
            background: ${colors.red};
          }
      
          &--orange {
            background: ${colors.orange};
          }
      
          &--grey {
            background: ${colors.grey};
          }
        }

        &--green {
          background: ${colors.green};
        }
      
        &--purple {
          background: ${colors.purple};
        }
      
        &--blue {
          background: ${colors.blue};
        }
      
        &--red {
          background: ${colors.red};
        }
      
        &--orange {
          background: ${colors.orange};
        }
      
        &--grey {
          background: ${colors.grey};
        }
      }
    }
  `
}
