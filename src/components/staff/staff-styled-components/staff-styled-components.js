import styled from 'styled-components'
import { lightness, opacity, saturation } from 'styling/js/styling-ligthness-saturation'
import { staffColors, staffThemes } from 'styling/staff/staff-styling-themes'

export const StaffColorText = styled.span(({ color, currentTheme }) => ({
  color,
  "::selection": {
    background: currentTheme === staffThemes.default
      ? lightness(staffColors.codeDark, 20)
      : opacity(saturation(staffColors[currentTheme], -30), 70),
    color: currentTheme === staffThemes.default
      ? lightness(color, 0)
      : staffColors.codeDark
  }
}))
