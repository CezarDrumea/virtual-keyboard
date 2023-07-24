import { arrowDownSvg, arrowLeftSvg, arrowRightSvg, arrowUpSvg } from '../../assets/svgStringCode';
import IconKey from '../IconKey';
import { ArrowKeysContainer, DoubleKeyContainer } from './styled';

const ArrowKeys = (): JSX.Element => {
  const size = {
    $height: '32px',
    $width: '62px',
  };
  return (
    <ArrowKeysContainer>
      <IconKey svg={arrowLeftSvg} {...size} id="ArrowLeft" />
      <DoubleKeyContainer>
        <IconKey svg={arrowUpSvg} {...size} id="ArrowUp" />
        <IconKey svg={arrowDownSvg} {...size} id="ArrowDown" />
      </DoubleKeyContainer>
      <IconKey svg={arrowRightSvg} {...size} id="ArrowRight" />
    </ArrowKeysContainer>
  );
};
export default ArrowKeys;
