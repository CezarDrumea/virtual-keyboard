import { KeyContainer } from '../../common/styledCommon';
import { LongContent } from './styled';
import useKeyTimeout from '../../hooks/useKeyTimeout';
import { extendedKeysObject, pressedKeysObject } from '../../assets/keyboardData';

const LongTextKey = (props: KeyboardKeyInterface): JSX.Element => {
  const { children, $height, $width, $bgGray, $color, ...contentProps } = props;
  const pressedKeyName = pressedKeysObject[children as string];
  const clickedKeyName = extendedKeysObject[children as string];
  const containerProps = { $height, $width, $bgGray, $color };

  const [pressed, released, handleKeyClicked] = useKeyTimeout(pressedKeyName, clickedKeyName);

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
