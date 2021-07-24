import css from 'styled-jsx/css'

export const getDynamicStyles = (colors) => {
  return css`
    @import 'src/styling/scss/mixins.scss';

    .Button {
      &--theme-green {
        background: ${colors.green};
      }

      &--theme-purple {
        background: ${colors.purple};
      }

      &--theme-blue {
        background: ${colors.blue};
      }
      
      &--theme-red {
        background: ${colors.red};
      }
    }
  `
}



