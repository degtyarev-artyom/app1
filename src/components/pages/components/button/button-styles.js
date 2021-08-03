import css from 'styled-jsx/css'
import { lightness, saturation } from 'styling/js/styling-functions'
// import { lightness } from 'styling/js/styling-functions'

export const getDynamicStyles = (colors) => {
  return css`
    @import 'src/styling/scss/styling-mixins.scss';

    .Button {
      &--theme-greenBlue {
        border: 1px solid ${colors.green};

        &:hover {
          box-shadow: inset 0 0 0 1px ${colors.blue};
        }

        &:focus {
          box-shadow: inset 0 0 0 1px ${colors.blue};
        }
      }
      
      &--theme-blueGreen {
        border: 1px solid ${colors.blue};

        &:hover {
          box-shadow: inset 0 0 0 1px ${colors.green};
        }

        &:focus {
          box-shadow: inset 0 0 0 1px ${colors.green};
        }
      }
      
      &--theme-green {
        border: 1px solid ${colors.green};

        &:hover {
          box-shadow: inset 0 0 0 1px ${colors.green};
        }

        &:focus {
          box-shadow: inset 0 0 0 1px ${colors.green};
        }
      }
      
      &--theme-blue {
        border: 1px solid ${colors.blue};

        &:hover {
          box-shadow: inset 0 0 0 1px ${colors.blue};
        }

        &:focus {
          box-shadow: inset 0 0 0 1px ${colors.blue};
        }
      }

      &--theme-red {
        border: 1px solid ${colors.red};

        &:hover {
          box-shadow: inset 0 0 0 1px ${colors.red};
        }

        &:focus {
          box-shadow: inset 0 0 0 1px ${colors.red};
        }
      }

      &--theme-orange {
        border: 1px solid ${colors.orange};

        &:hover {
          box-shadow: inset 0 0 0 1px ${colors.orange};
        }

        &:focus {
          box-shadow: inset 0 0 0 1px ${colors.orange};
        }
      }

      &--theme-purple {
        border: 1px solid ${colors.purple};

        &:hover {
          box-shadow: inset 0 0 0 1px ${colors.purple};
        }

        &:focus {
          box-shadow: inset 0 0 0 1px ${colors.purple};
        }
      }
    }
  `
}



