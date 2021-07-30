import css from 'styled-jsx/css'

export const getDynamicStyles = (colors) => {
  return css`
    @import 'src/styling/scss/styling-mixins.scss';
    
    .Title {
      &--theme-green {
        border-color: ${colors.green};
      }

      &--theme-purple {
        border-color: ${colors.purple};
      }

      &--theme-blue {
        border-color: ${colors.blue};
      }
      
      &--theme-red {
        border-color: ${colors.red};
      }
      
      &--theme-orange {
        border-color: ${colors.orange};
      }
      
      &--theme-grey {
        border-color: ${colors.grey};
      }
    }
  `
}
