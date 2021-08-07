import css from 'styled-jsx/css'
import { lightness, saturation } from 'styling/js/styling-functions'

export const getDynamicStyles = (colors) => {
  return css`
    @import 'src/styling/scss/styling-mixins.scss';

    .Button {
      &--theme-green {
        border: 1px solid ${colors.green};
        color: ${lightness(colors.green, -25)};

        &:hover {
          box-shadow: inset 0 0 0 1px ${colors.green};
          color: ${lightness(colors.purple, -25)};
        }

        &.Button--focus:focus {
          box-shadow: inset 0 0 0 1px ${colors.green};
          color: ${lightness(colors.purple, -25)};
        }

        &.Button--active:active {
          color: ${colors.purple};
        }
      }
      
      &--theme-blue {
        border: 1px solid ${colors.blue};
        color: ${lightness(colors.blue, -25)};

        &:hover {
          box-shadow: inset 0 0 0 1px ${colors.blue};
          color: ${lightness(colors.orange, -25)};
        }

        &.Button--focus:focus {
          box-shadow: inset 0 0 0 1px ${colors.blue};
          color: ${lightness(colors.orange, -25)};
        }

        &.Button--active:active {
          color: ${colors.orange};
        }
      }

      &--theme-purple {
        border: 1px solid ${colors.purple};
        color: ${lightness(colors.purple, -25)};

        &:hover {
          box-shadow: inset 0 0 0 1px ${colors.purple};
          color: ${lightness(colors.orange, -25)};
        }

        &.Button--focus:focus {
          box-shadow: inset 0 0 0 1px ${colors.purple};
          color: ${lightness(colors.orange, -25)};
        }

        &.Button--active:active {
          color: ${colors.orange};
        }
      }

      &--theme-red {
        border: 1px solid ${colors.red};
        color: ${lightness(colors.red, -25)};

        &:hover {
          box-shadow: inset 0 0 0 1px ${colors.red};
          color: ${lightness(colors.blue, -25)};
        }

        &.Button--focus:focus {
          box-shadow: inset 0 0 0 1px ${colors.red};
          color: ${lightness(colors.blue, -25)};
        }

        &.Button--active:active {
          color: ${lightness(colors.blue, 15)};
        }
      }

      &--theme-orange {
        border: 1px solid ${colors.orange};
        color: ${lightness(colors.orange, -25)};

        &:hover {
          box-shadow: inset 0 0 0 1px ${colors.orange};
          color: ${lightness(colors.blue, -25)};
        }

        &.Button--focus:focus {
          box-shadow: inset 0 0 0 1px ${colors.orange};
          color: ${lightness(colors.blue, -25)};
        }

        &.Button--active:active {
          color: ${lightness(colors.blue, 15)};
        }
      }
    }
  `
}



