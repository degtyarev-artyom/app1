import styled from 'styled-components'
import { hsla, lightness } from 'styling/js/styling-ligthness-saturation'
import { staffColors, staffThemes } from 'styling/staff/staff-styling-themes'

export const StaffColorText = styled.span(({ color, currentTheme }) => {
  const isDefault = currentTheme === staffThemes.default

  return {
    color,
    "::selection": {
      background: isDefault
        ? lightness(staffColors.codeDark, 20)
        : hsla(staffColors[currentTheme], -30, 0, 70),
      color: isDefault
        ? lightness(color, 25)
        : staffColors.codeDark
    }
  }
})
