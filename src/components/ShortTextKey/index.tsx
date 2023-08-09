import { KeyContainer } from '../../common/styledCommon';
import useKeyTimeout from '../../hooks/useKeyTimeout';
import { ShortContent } from './styled';

const ShortTextKey = (props: KeyboardKeyInterface): JSX.Element => {
  const { children, ...properties } = props;

  const [pressed, released, handleKeyClicked] = useKeyTimeout(children as string);

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
