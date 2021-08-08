import css from 'styled-jsx/css'
import { lightness } from 'styling/js/styling-ligthness-saturation'

export const getDynamicStyles = (staffColors) => {
  return css`
    @import 'src/styling/scss/styling-mixins.scss';

    .StaffButton {
      &--theme-green {
        background: ${staffColors.green};

        &:hover {
          background: ${lightness(staffColors.green, -10)};
        }

        &:focus {
          outline: 2px solid ${lightness(staffColors.green, -30)};
        }
      }

      &--theme-purple {
        background: ${staffColors.purple};

        &:hover {
          background: ${lightness(staffColors.purple, -10)};
        }

        &:focus {
          outline: 2px solid ${lightness(staffColors.purple, -30)};
        }
      }

      &--theme-blue {
        background: ${staffColors.blue};

        &:hover {
          background: ${lightness(staffColors.blue, -10)};
        }

        &:focus {
          outline: 2px solid ${lightness(staffColors.blue, -30)};
        }
      }
      
      &--theme-red {
        background: ${staffColors.red};

        &:hover {
          background: ${lightness(staffColors.red, -10)};
        }

        &:focus {
          outline: 2px solid ${lightness(staffColors.red, -30)};
        }
      }
      
      &--theme-orange {
        background: ${staffColors.orange};

        &:hover {
          background: ${lightness(staffColors.orange, -10)};
        }

        &:focus {
          outline: 2px solid ${lightness(staffColors.orange, -30)};
        }
      }
      
      &--theme-grey {
        background: ${staffColors.grey};

        &:hover {
          background: ${lightness(staffColors.grey, -10)};
        }

        &:focus {
          outline: 2px solid ${lightness(staffColors.grey, -30)};
        }
      }
    }
  `
}



