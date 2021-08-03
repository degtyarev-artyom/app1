import css from 'styled-jsx/css'

export const getDynamicStyles = (staffColors) => {
  return css`
    @import 'src/styling/scss/styling-mixins.scss';
    
    .StaffTitle {
      &--theme-green {
        border-color: ${staffColors.green};
      }

      &--theme-purple {
        border-color: ${staffColors.purple};
      }

      &--theme-blue {
        border-color: ${staffColors.blue};
      }
      
      &--theme-red {
        border-color: ${staffColors.red};
      }
      
      &--theme-orange {
        border-color: ${staffColors.orange};
      }
      
      &--theme-grey {
        border-color: ${staffColors.grey};
      }
    }
  `
}
