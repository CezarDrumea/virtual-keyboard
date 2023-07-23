import { KeyContainer } from '../../common/styledCommon';
import { ShortContent } from './styled';

const ShortTextKey = (props: KeyboardKeyInterface): JSX.Element => {
  const { children, ...properties } = props;
  return (
    <KeyContainer {...properties}>
      <ShortContent>{children}</ShortContent>
    </KeyContainer>
  );
};
export default ShortTextKey;
