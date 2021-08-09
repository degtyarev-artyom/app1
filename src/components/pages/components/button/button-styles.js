import css from 'styled-jsx/css'
import { lightness } from 'styling/js/styling-ligthness-saturation'

export const getDynamicStyles = (colors) => {
  return css`
    @import 'src/styling/scss/styling-mixins.scss';

    .Button {
      &--theme-green {
        border-color: ${colors.green};
        color: ${lightness(colors.green, -25)};

        &:hover {
          color: ${lightness(colors.purple, -25)};
        }

        &.Button--focus {
          &:focus {
            box-shadow: 0 0 0 1px ${colors.green};
            color: ${lightness(colors.purple, -25)};
          }
        }

        &.Button--active{
          &:active {
            color: ${colors.purple};
          }
        }
      }
      
      &--theme-blue {
        border-color: ${colors.blue};
        color: ${lightness(colors.blue, -25)};

        &:hover {
          color: ${lightness(colors.orange, -25)};
        }

        &.Button--focus {
          &:focus {
            box-shadow: 0 0 0 1px ${colors.blue};
            color: ${lightness(colors.orange, -25)};
          }
        }

        &.Button--active{
          &:active {
            color: ${colors.orange};
          }
        }
      }

      &--theme-purple {
        border-color: ${colors.purple};
        color: ${lightness(colors.purple, -25)};

        &:hover {
          color: ${lightness(colors.orange, -25)};
        }

        &.Button--focus {
          &:focus {
            box-shadow: 0 0 0 1px ${colors.purple};
            color: ${lightness(colors.orange, -25)};
          }
        }

        &.Button--active{
          &:active {
            color: ${colors.orange};
          }
        }
      }

      &--theme-red {
        border-color: ${colors.red};
        color: ${lightness(colors.red, -25)};

        &:hover {
          color: ${lightness(colors.blue, -25)};
        }

        &.Button--focus {
          &:focus {
            box-shadow: 0 0 0 1px ${colors.red};
            color: ${lightness(colors.blue, -25)};
          }
        }

        &.Button--active{
          &:active {
            color: ${lightness(colors.blue, 15)};
          }
        }
      }

      &--theme-orange {
        border-color: ${colors.orange};
        color: ${lightness(colors.orange, -25)};

        &:hover {
          color: ${lightness(colors.blue, -25)};
        }

        &.Button--focus {
          &:focus {
            box-shadow: 0 0 0 1px ${colors.orange};
            color: ${lightness(colors.blue, -25)};
          }
        }

        &.Button--active {
          &:active {
            color: ${lightness(colors.blue, 15)};
          }
        }
      }

      &--theme-steelblue {
        border-color: ${colors.steelblue};
        color: ${lightness(colors.steelblue, -25)};

        &:hover {
          color: ${lightness(colors.blue, -25)};
        }

        &.Button--focus {
          &:focus {
            box-shadow: 0 0 0 1px ${colors.steelblue};
            color: ${lightness(colors.blue, -25)};
          }
        }

        &.Button--active{
          &:active {
            color: ${lightness(colors.blue, 15)};
          }
        }
      }
    }
  `
}



