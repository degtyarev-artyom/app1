import { lightness } from 'functions/staff-styling-hsla-func';
import css from 'styled-jsx/css'
import { staffColors } from 'styling/staff/staff-styling-themes';

export const staticStyles = css`
  @import 'src/styling/scss/styling-mixins.scss';

  .StaffValueProp {
    &--green {
      &:hover {
        background: ${staffColors.green};
      }

      &.StaffValueProp--active {
        background: ${staffColors.green};

        &:hover {
          background: ${lightness(staffColors.green, -20)};
        }
      }
    }
    
    &--purple {
      &:hover {
        background: ${staffColors.purple};
      }

      &.StaffValueProp--active {
        background: ${staffColors.purple};

        &:hover {
          background: ${lightness(staffColors.purple, -20)};
        }
      }
    }

    &--blue {
      &:hover {
        background: ${staffColors.blue};
      }

      &.StaffValueProp--active {
        background: ${staffColors.blue};

        &:hover {
          background: ${lightness(staffColors.blue, -20)};
        }
      }
    }

    &--red {
      &:hover {
        background: ${staffColors.red};
      }

      &.StaffValueProp--active {
        background: ${staffColors.red};

        &:hover {
          background: ${lightness(staffColors.red, -15)};
        }
      }
    }

    &--orange {
      &:hover {
        background: ${staffColors.orange};
      }

      &.StaffValueProp--active {
        background: ${staffColors.orange};

        &:hover {
          background: ${lightness(staffColors.orange, -20)};
        }
      }
    }

    &--grey {
      &:hover {
        background: ${staffColors.grey};
      }

      &.StaffValueProp--active {
        background: ${staffColors.grey};

        &:hover {
          background: ${lightness(staffColors.grey, -20)};
        }
      }
    }
  }
`
