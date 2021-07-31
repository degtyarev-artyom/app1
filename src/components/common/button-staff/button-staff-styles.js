import css from 'styled-jsx/css'
import { lightness } from 'styling/js/styling-functions'

export const getDynamicStyles = (colors) => {
  return css`
    @import 'src/styling/scss/styling-mixins.scss';

    .ButtonStaff {
      &--theme-green {
        background: ${colors.green};

        &:hover {
          background: ${lightness(colors.green, -10)};
        }

        &:focus {
          outline: 2px solid ${lightness(colors.green, -30)};
        }
      }

      &--theme-purple {
        background: ${colors.purple};

        &:hover {
          background: ${lightness(colors.purple, -10)};
        }

        &:focus {
          outline: 2px solid ${lightness(colors.purple, -30)};
        }
      }

      &--theme-blue {
        background: ${colors.blue};

        &:hover {
          background: ${lightness(colors.blue, -10)};
        }

        &:focus {
          outline: 2px solid ${lightness(colors.blue, -30)};
        }
      }
      
      &--theme-red {
        background: ${colors.red};

        &:hover {
          background: ${lightness(colors.red, -10)};
        }

        &:focus {
          outline: 2px solid ${lightness(colors.red, -30)};
        }
      }
      
      &--theme-orange {
        background: ${colors.orange};

        &:hover {
          background: ${lightness(colors.orange, -10)};
        }

        &:focus {
          outline: 2px solid ${lightness(colors.orange, -30)};
        }
      }
      
      &--theme-grey {
        background: ${colors.grey};

        &:hover {
          background: ${lightness(colors.grey, -10)};
        }

        &:focus {
          outline: 2px solid ${lightness(colors.grey, -30)};
        }
      }
    }
  `
}



