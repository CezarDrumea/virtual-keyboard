import { KeyContainer } from '../../common/styledCommon';
import { LongContent } from './styled';
import useKeyPressTimeout from '../../hooks/useKeyPressTimeout';
import useKeyClickTiemout from '../../hooks/useKeyClickTimeout';
import { extendedKeysObject, pressedKeysObject } from '../../assets/keyboardData';

const LongTextKey = (props: KeyboardKeyInterface): JSX.Element => {
  const { children, $height, $width, $bgColor, $color, ...contentProps } = props;
  const pressedKeyName = pressedKeysObject[children as string];
  const clickedKeyName = extendedKeysObject[children as string];
  const containerProps = { $height, $width, $bgColor, $color };

  const [pressed, released] = useKeyPressTimeout(pressedKeyName, clickedKeyName);
  const handleKeyClicked = useKeyClickTiemout(clickedKeyName);

  return (
    <KeyContainer
      {...containerProps}
      $pressed={pressed}
      $released={released}
      onClick={handleKeyClicked}
    >
      <LongContent {...contentProps}>{children}</LongContent>
    </KeyContainer>
  );
};
export default LongTextKey;
