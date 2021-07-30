import css from 'styled-jsx/css'
import { lightness } from 'styling/js/styling-functions'

export const getDynamicStyles = (colors) => {
  return css`
    @import 'src/styling/scss/styling-mixins.scss';

    .Button {
      &--theme-green {
        background: ${colors.green};

        &:hover {
          background: ${lightness(colors.green, -10)};
        }
      }

      &--theme-purple {
        background: ${colors.purple};

        &:hover {
          background: ${lightness(colors.purple, -10)};
        }
      }

      &--theme-blue {
        background: ${colors.blue};

        &:hover {
          background: ${lightness(colors.blue, -10)};
        }
      }
      
      &--theme-red {
        background: ${colors.red};

        &:hover {
          background: ${lightness(colors.red, -10)};
        }
      }
      
      &--theme-orange {
        background: ${colors.orange};

        &:hover {
          background: ${lightness(colors.orange, -10)};
        }
      }
      
      &--theme-grey {
        background: ${colors.grey};

        &:hover {
          background: ${lightness(colors.grey, -10)};
        }
      }
    }
  `
}



