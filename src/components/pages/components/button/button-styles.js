import { lightness } from 'functions/staff-styling-hsla-func'
import css from 'styled-jsx/css'
import { colors } from 'styling/js/styling-themes'

export const staticStyles = css`
  @import 'src/styling/scss/styling-mixins.scss';

  .Button {
    /* default theme="green" */
    border-color: ${colors.green};
    color: ${lightness(colors.green, -25)};

    &:hover {
      color: ${lightness(colors.purple, -25)};
    }

    &.Button--block {
      &:hover {
        color: ${lightness(colors.green, -25)};
      }
    }

    &.Button--focus {
      &:focus {
        box-shadow: 0 0 0 1px ${colors.green};
        color: ${lightness(colors.purple, -25)};
      }

      &.Button--block {
        &:focus {
          box-shadow: none;
          color: ${lightness(colors.green, -25)};
        }
      }
    }

    &.Button--active{
      &:active {
        color: ${colors.purple};
      }

      &.Button--block {
        &:active {
          color: ${lightness(colors.green, -25)};
        }
      }
    }

    /* theme="green" */
    &--theme-green {
      border-color: ${colors.green};
      color: ${lightness(colors.green, -25)};

      &:hover {
        color: ${lightness(colors.purple, -25)};
      }

      &.Button--block {
        &:hover {
          color: ${lightness(colors.green, -25)};
        }
      }

      &.Button--focus {
        &:focus {
          box-shadow: 0 0 0 1px ${colors.green};
          color: ${lightness(colors.purple, -25)};
        }

        &.Button--block {
          &:focus {
            box-shadow: none;
            color: ${lightness(colors.green, -25)};
          }
        }
      }

      &.Button--active{
        &:active {
          color: ${colors.purple};
        }

        &.Button--block {
          &:active {
            color: ${lightness(colors.green, -25)};
          }
        }
      }
    }
    
    /* theme="blue" */
    &--theme-blue {
      border-color: ${colors.blue};
      color: ${lightness(colors.blue, -25)};

      &:hover {
        color: ${lightness(colors.orange, -25)};
      }

      &.Button--block {
        &:hover {
          color: ${lightness(colors.blue, -25)};
        }
      }

      &.Button--focus {
        &:focus {
          box-shadow: 0 0 0 1px ${colors.blue};
          color: ${lightness(colors.orange, -25)};
        }

        &.Button--block {
          &:focus {
            box-shadow: none;
            color: ${lightness(colors.blue, -25)};
          }
        }
      }

      &.Button--active{
        &:active {
          color: ${colors.orange};
        }

        &.Button--block {
          &:active {
            color: ${lightness(colors.blue, -25)};
          }
        }
      }
    }

    /* theme="purple" */
    &--theme-purple {
      border-color: ${colors.purple};
      color: ${lightness(colors.purple, -25)};

      &:hover {
        color: ${lightness(colors.orange, -25)};
      }

      &.Button--block {
        &:hover {
          color: ${lightness(colors.purple, -25)};
        }
      }

      &.Button--focus {
        &:focus {
          box-shadow: 0 0 0 1px ${colors.purple};
          color: ${lightness(colors.orange, -25)};
        }

        &.Button--block {
          &:focus {
            box-shadow: none;
            color: ${lightness(colors.purple, -25)};
          }
        }
      }

      &.Button--active{
        &:active {
          color: ${colors.orange};
        }

        &.Button--block {
          &:active {
            color: ${lightness(colors.purple, -25)};
          }
        }
      }
    }

    /* theme="red" */
    &--theme-red {
      border-color: ${colors.red};
      color: ${lightness(colors.red, -25)};

      &:hover {
        color: ${lightness(colors.blue, -25)};
      }

      &.Button--block {
        &:hover {
          color: ${lightness(colors.red, -25)};
        }
      }

      &.Button--focus {
        &:focus {
          box-shadow: 0 0 0 1px ${colors.red};
          color: ${lightness(colors.blue, -25)};
        }

        &.Button--block {
          &:focus {
            box-shadow: none;
            color: ${lightness(colors.red, -25)};
          }
        }
      }

      &.Button--active{
        &:active {
          color: ${lightness(colors.blue, 15)};
        }

        &.Button--block {
          &:active {
            color: ${lightness(colors.red, -25)};
          }
        }
      }
    }

    /* theme="orange" */
    &--theme-orange {
      border-color: ${colors.orange};
      color: ${lightness(colors.orange, -25)};

      &:hover {
        color: ${lightness(colors.purple, -25)};
      }

      &.Button--block {
        &:hover {
          color: ${lightness(colors.orange, -25)};
        }
      }

      &.Button--focus {
        &:focus {
          box-shadow: 0 0 0 1px ${colors.orange};
          color: ${lightness(colors.purple, -25)};
        }

        &.Button--block {
          &:focus {
            box-shadow: none;
            color: ${lightness(colors.orange, -25)};
          }
        }
      }

      &.Button--active {
        &:active {
          color: ${colors.purple};
        }

        &.Button--block {
          &:active {
            color: ${lightness(colors.orange, -25)};
          }
        }
      }
    }

    /* theme="steelblue" */
    &--theme-steelblue {
      border-color: ${colors.steelblue};
      color: ${lightness(colors.steelblue, -25)};

      &:hover {
        color: ${lightness(colors.blue, -25)};
      }

      &.Button--block {
        &:hover {
          color: ${lightness(colors.steelblue, -25)};
        }
      }

      &.Button--focus {
        &:focus {
          box-shadow: 0 0 0 1px ${colors.steelblue};
          color: ${lightness(colors.blue, -25)};
        }

        &.Button--block {
          &:focus {
            box-shadow: none;
            color: ${lightness(colors.steelblue, -25)};
          }
        }
      }

      &.Button--active{
        &:active {
          color: ${lightness(colors.blue, 15)};
        }

        &.Button--block {
          &:active {
            color: ${lightness(colors.steelblue, -25)};
          }
        }
      }
    }

    /* theme="greyOlive" */
    &--theme-greyOlive {
      border-color: ${colors.grey};
      color: ${lightness(colors.grey, -55)};

      &:hover {
        color: ${colors.olive};
      }

      &.Button--block {
        &:hover {
          color: ${lightness(colors.grey, -55)};
        }
      }

      &.Button--focus {
        &:focus {
          box-shadow: 0 0 0 1px ${colors.grey};
          color: ${colors.olive};
        }

        &.Button--block {
          &:focus {
            box-shadow: none;
            color: ${lightness(colors.grey, -55)};
          }
        }
      }

      &.Button--active{
        &:active {
          color: ${lightness(colors.olive, 35)};
        }

        &.Button--block {
          &:active {
            color: ${lightness(colors.grey, -55)};
          }
        }
      }
    }

    /* theme="greyBlue" */
    &--theme-greyBlue {
      border-color: ${colors.grey};
      color: ${lightness(colors.grey, -55)};

      &:hover {
        color: ${lightness(colors.blue, -15)};
      }

      &.Button--block {
        &:hover {
          color: ${lightness(colors.grey, -55)};
        }
      }

      &.Button--focus {
        &:focus {
          box-shadow: 0 0 0 1px ${colors.grey};
          color: ${lightness(colors.blue, -15)};
        }

        &.Button--block {
          &:focus {
            box-shadow: none;
            color: ${lightness(colors.grey, -55)};
          }
        }
      }

      &.Button--active{
        &:active {
          color: ${lightness(colors.blue, 15)};
        }

        &.Button--block {
          &:active {
            color: ${lightness(colors.grey, -55)};
          }
        }
      }
    }

    /* theme="greyPurple" */
    &--theme-greyPurple {
      border-color: ${colors.grey};
      color: ${lightness(colors.grey, -55)};

      &:hover {
        color: ${lightness(colors.purple, -25)};
      }

      &.Button--block {
        &:hover {
          color: ${lightness(colors.grey, -55)};
        }
      }

      &.Button--focus {
        &:focus {
          box-shadow: 0 0 0 1px ${colors.grey};
          color: ${lightness(colors.purple, -25)};
        }

        &.Button--block {
          &:focus {
            box-shadow: none;
            color: ${lightness(colors.grey, -55)};
          }
        }
      }

      &.Button--active{
        &:active {
          color: ${colors.purple};
        }
        
        &.Button--block {
          &:active {
            color: ${lightness(colors.grey, -55)};
          }
        }
      }
    }

    /* theme="greyRed" */
    &--theme-greyRed {
      border-color: ${colors.grey};
      color: ${lightness(colors.grey, -55)};

      &:hover {
        color: ${lightness(colors.red, -10)};
      }

      &.Button--block {
        &:hover {
          color: ${lightness(colors.grey, -55)};
        }
      }

      &.Button--focus {
        &:focus {
          box-shadow: 0 0 0 1px ${colors.grey};
          color: ${lightness(colors.red, -10)};
        }

        &.Button--block {
          &:focus {
            box-shadow: none;
            color: ${lightness(colors.grey, -55)};
          }
        }
      }

      &.Button--active{
        &:active {
          color: ${lightness(colors.red, 20)};
        }

        &.Button--block {
          &:active {
            color: ${lightness(colors.grey, -55)};
          }
        }
      }
    }

    /* theme="greyOrange" */
    &--theme-greyOrange {
      border-color: ${colors.grey};
      color: ${lightness(colors.grey, -55)};

      &:hover {
        color: ${lightness(colors.orange, -20)};
      }

      &.Button--block {
        &:hover {
          color: ${lightness(colors.grey, -55)};
        }
      }

      &.Button--focus {
        &:focus {
          box-shadow: 0 0 0 1px ${colors.grey};
          color: ${lightness(colors.orange, -20)};
        }

        &.Button--block {
          &:focus {
            box-shadow: none;
            color: ${lightness(colors.grey, -55)};
          }
        }
      }

      &.Button--active{
        &:active {
          color: ${lightness(colors.orange, 10)};
        }

        &.Button--block {
          &:active {
            color: ${lightness(colors.grey, -55)};
          }
        }
      }
    }

    /* disabled */
    &--disabled {
      border-color: ${lightness(colors.grey, 50)};
      color: ${colors.grey};

      &:hover {
        color: ${colors.grey};
      }

      &.Button--block {
        &:hover {
          color: ${colors.grey};
        }
      }

      &.Button--focus {
        &:focus {
          box-shadow: none;
          color: ${colors.grey};
        }

        &.Button--block {
          &:focus {
            box-shadow: none;
            color: ${colors.grey};
          }
        }
      }

      &.Button--active {
        &:active {
          color: ${colors.grey};
        }

        &.Button--block {
          &:active {
            color: ${colors.grey};
          }
        }
      }
    }
  }
`
