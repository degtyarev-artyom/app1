import css from 'styled-jsx/css'

export const getDynamicStyles = (colors) => {
  return css`
    @import 'src/styling/scss/mixins.scss';
    
    .Navbar {
      &__item {
        :global(&--active) {
          background: ${colors.darkgrey};
        }

        &--green {
          :global(&--active) {
            background: ${colors.green};
          }
        }
      
        &--purple {
          :global(&--active) {
            background: ${colors.purple};
          }
        }
      
        &--blue {
          :global(&--active) {
            background: ${colors.blue};
          }
        }
      
        &--red {
          :global(&--active) {
            background: ${colors.red};
          }
        }
      
        &--orange {
          :global(&--active) {
            background: ${colors.orange};
          }
        }
      }
    }
  `
}
