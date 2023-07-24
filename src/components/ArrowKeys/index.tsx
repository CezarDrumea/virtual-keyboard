import ArrowDownSVG from '../../assets/ArrowDownSVG';
import ArrowLeftSVG from '../../assets/ArrowLeftSVG';
import ArrowRightSVG from '../../assets/ArrowRightSVG';
import ArrowUpSvg from '../../assets/ArrowUpSVG';
import { KeyContainer } from '../../common/styledCommon';
import { ArrowKeysContainer, DoubleKeyContainer } from './styled';

const ArrowKeys = (): JSX.Element => (
  <ArrowKeysContainer>
    <KeyContainer $height="30px" $width="62px">
      <ArrowLeftSVG />
    </KeyContainer>
    <DoubleKeyContainer>
      <KeyContainer $height="32px" $width="62px">
        <ArrowUpSvg />
      </KeyContainer>
      <KeyContainer $height="32px" $width="62px">
        <ArrowDownSVG />
      </KeyContainer>
    </DoubleKeyContainer>
    <KeyContainer $height="30px" $width="62px">
      <ArrowRightSVG />
    </KeyContainer>
  </ArrowKeysContainer>
);
export default ArrowKeys;
