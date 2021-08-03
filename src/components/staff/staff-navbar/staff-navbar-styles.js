import css from 'styled-jsx/css'
import { lightness } from 'styling/js/styling-functions';

export const getDynamicStyles = (staffColors) => {
  return css`
    @import 'src/styling/scss/styling-mixins.scss';
    
    .StaffNavbar {
      &__item {
        &--green {
          :global(&:hover) {
            background: ${staffColors.green};
          }

          :global(&--active) {
            background: ${staffColors.green};
          }
        }
      
        &--purple {
          :global(&:hover) {
            background: ${staffColors.purple};
          }

          :global(&--active) {
            background: ${staffColors.purple};
          }
        }
      
        &--blue {
          :global(&:hover) {
            background: ${staffColors.blue};
          }

          :global(&--active) {
            background: ${staffColors.blue};
          }
        }
      
        &--red {
          :global(&:hover) {
            background: ${staffColors.red};
          }

          :global(&--active) {
            background: ${staffColors.red};
          }
        }
      
        &--orange {
          :global(&:hover) {
            background: ${staffColors.orange};
          }

          :global(&--active) {
            background: ${staffColors.orange};
          }
        }
      
        &--grey {
          :global(&:hover) {
            background: ${lightness(staffColors.grey, -20)};
          }

          :global(&--active) {
            background: ${lightness(staffColors.grey, -20)};
          }
        }
      }
    }
  `
}
