import ArrowDownSVG from '../../assets/ArrowDownSVG';
import ArrowLeftSVG from '../../assets/ArrowLeftSVG';
import ArrowRightSVG from '../../assets/ArrowRightSVG';
import ArrowUpSvg from '../../assets/ArrowUpSVG';
import { KeyContainer } from '../../common/styledCommon';
import { ArrowKeysContainer, DoubleKeyContainer } from './styled';

const ArrowKeys = () => {
  return (
    <ArrowKeysContainer>
      <KeyContainer $height="30px" $width="62px">
        <ArrowLeftSVG fill="gray" />
      </KeyContainer>
      <DoubleKeyContainer>
        <KeyContainer $height="32px" $width="62px">
          <ArrowUpSvg fill="gray" />
        </KeyContainer>
        <KeyContainer $height="32px" $width="62px">
          <ArrowDownSVG fill="gray" />
        </KeyContainer>
      </DoubleKeyContainer>
      <KeyContainer $height="30px" $width="62px">
        <ArrowRightSVG fill="gray" />
      </KeyContainer>
    </ArrowKeysContainer>
  );
};
export default ArrowKeys;
