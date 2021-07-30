import css from 'styled-jsx/css'
import { lightness } from 'styling/js/styling-functions';

export const getDynamicStyles = (colors) => {
  return css`
    @import 'src/styling/scss/styling-mixins.scss';
    
    .Navbar {
      &__item {
        &--green {
          :global(&:hover) {
            background: ${colors.green};
          }

          :global(&--active) {
            background: ${colors.green};
          }
        }
      
        &--purple {
          :global(&:hover) {
            background: ${colors.purple};
          }

          :global(&--active) {
            background: ${colors.purple};
          }
        }
      
        &--blue {
          :global(&:hover) {
            background: ${colors.blue};
          }

          :global(&--active) {
            background: ${colors.blue};
          }
        }
      
        &--red {
          :global(&:hover) {
            background: ${colors.red};
          }

          :global(&--active) {
            background: ${colors.red};
          }
        }
      
        &--orange {
          :global(&:hover) {
            background: ${colors.orange};
          }

          :global(&--active) {
            background: ${colors.orange};
          }
        }
      
        &--grey {
          :global(&:hover) {
            background: ${lightness(colors.grey, -20)};
          }

          :global(&--active) {
            background: ${lightness(colors.grey, -20)};
          }
        }
      }
    }
  `
}
