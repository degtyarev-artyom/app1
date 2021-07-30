import css from 'styled-jsx/css'

export const getDynamicStyles = (colors) => {
  return css`
    @import 'src/styling/scss/styling-mixins.scss';
    
    .NotFound {
      &__content-404 {
        &--theme-green {
          color: ${colors.green};
        }

        &--theme-purple {
          color: ${colors.purple};
        }

        &--theme-blue {
          color: ${colors.blue};
        }
        
        &--theme-red {
          color: ${colors.red};
        }
        
        &--theme-orange {
          color: ${colors.orange};
        }
        
        &--theme-grey {
          color: ${colors.grey};
        }
      }
    }
  `
}
