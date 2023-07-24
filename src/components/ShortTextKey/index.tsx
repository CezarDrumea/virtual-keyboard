import { KeyContainer } from '../../common/styledCommon';
import useKeyClickTimeout from '../../hooks/useKeyClickTimeout';
import useKeyPressTimeout from '../../hooks/useKeyPressTimeout';
import { ShortContent } from './styled';

const ShortTextKey = (props: KeyboardKeyInterface): JSX.Element => {
  const { children, ...properties } = props;

  const [pressed, released] = useKeyPressTimeout(children as string);
  const handleKeyClicked = useKeyClickTimeout(children as string);

  return (
    <KeyContainer
      {...properties}
      $pressed={pressed}
      $released={released}
      onClick={handleKeyClicked}
    >
      <ShortContent>{children}</ShortContent>
    </KeyContainer>
  );
};
export default ShortTextKey;
