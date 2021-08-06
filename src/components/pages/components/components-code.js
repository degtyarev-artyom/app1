/* button */
export const getButtonCode = ({ buttonSize, buttonTheme, buttonChildren, buttonNoFocus }) => 
`<Button
  size="${buttonSize}"
  theme="${buttonTheme}"${
  buttonNoFocus ? '\r\n  noFocus' : ''}
>
  ${buttonChildren}
</Button>`
