export const getButtonCode = ({
  buttonChildren,
  buttonExternalClass,
  buttonTheme,
  buttonSize,
  buttonType,
  buttonFocus,
  buttonActive,
  buttonDisabled,
  buttonBlock,
  buttonPending
}) => `<Button
  externalClass="${buttonExternalClass}"
  theme="${buttonTheme}"
  size="${buttonSize}"
  type="${buttonType}"${
  buttonFocus ? '\r\n  focus' : ''}${
  buttonActive ? '\r\n  active' : ''}${
  buttonDisabled ? '\r\n  disabled' : ''}${
  buttonBlock ? '\r\n  block' : ''}${
  buttonPending ? '\r\n  pending' : ''}
>
  ${buttonChildren}
</Button>`
