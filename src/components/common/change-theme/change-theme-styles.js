import css from 'styled-jsx/css'

export const getDynamicStyles = (colors) => {
  return css`
    @import 'src/styling/scss/mixins.scss';
    
    .ChangeTheme {
      &__item {
        &--default {
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
      }
    }
  `
}
