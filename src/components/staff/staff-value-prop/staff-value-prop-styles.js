import css from 'styled-jsx/css'

export const getDynamicStyles = (staffColors) => {
  return css`
    @import 'src/styling/scss/styling-mixins.scss';

    .StaffValueProp {
      &--green {
        &:hover {
          background: ${staffColors.green};
        }

        &.StaffValueProp--active {
          background: ${staffColors.green};
        }
      }
      
      &--purple {
        &:hover {
          background: ${staffColors.purple};
        }

        &.StaffValueProp--active {
          background: ${staffColors.purple};
        }
      }

      &--blue {
        &:hover {
          background: ${staffColors.blue};
        }

        &.StaffValueProp--active {
          background: ${staffColors.blue};
        }
      }

      &--red {
        &:hover {
          background: ${staffColors.red};
        }

        &.StaffValueProp--active {
          background: ${staffColors.red};
        }
      }

      &--orange {
        &:hover {
          background: ${staffColors.orange};
        }

        &.StaffValueProp--active {
          background: ${staffColors.orange};
        }
      }

      &--grey {
        &:hover {
          background: ${staffColors.grey};
        }

        &.StaffValueProp--active {
          background: ${staffColors.grey};
        }
      }
    }
  `
}



