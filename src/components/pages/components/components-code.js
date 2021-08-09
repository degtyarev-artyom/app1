/* button */
export const getButtonCode = ({
  buttonExternalClass,
  buttonTheme,
  buttonSize,
  buttonBold,
  buttonFocus,
  buttonActive,
  buttonChildren
}) => `<Button
  externalClass="${buttonExternalClass}"
  theme="${buttonTheme}"
  size="${buttonSize}"${
  buttonBold ? '\r\n  bold' : ''}${
  buttonFocus ? '\r\n  focus' : ''}${
  buttonActive ? '\r\n  active' : ''}
>
  ${buttonChildren}
</Button>`
