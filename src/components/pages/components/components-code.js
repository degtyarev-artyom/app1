/* button */
export const getButtonCode = ({
  buttonExternalClass,
  buttonSize,
  buttonTheme,
  buttonChildren,
  buttonFocus,
  buttonActive
}) => `<Button
  externalClass="${buttonExternalClass}"
  size="${buttonSize}"
  theme="${buttonTheme}"${
  buttonFocus ? '\r\n  focus' : ''}${
  buttonActive ? '\r\n  active' : ''}
>
  ${buttonChildren}
</Button>`
