import ArrowDownIcon from '../../assets/icons/ArrowDownIcon';
import ArrowLeftIcon from '../../assets/icons/ArrowLeftIcon';
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon';
import ArrowUpIcon from '../../assets/icons/ArrowUpIcon';
import IconKey from '../IconKey';
import { ArrowKeysContainer, DoubleKeyContainer } from './styled';

const ArrowKeys = (): JSX.Element => {
  const size = {
    $height: '32px',
    $width: '62px',
  };
  return (
    <ArrowKeysContainer>
      <IconKey icon={ArrowLeftIcon()} {...size} id="ArrowLeft" />
      <DoubleKeyContainer>
        <IconKey icon={ArrowUpIcon()} {...size} id="ArrowUp" />
        <IconKey icon={ArrowDownIcon()} {...size} id="ArrowDown" />
      </DoubleKeyContainer>
      <IconKey icon={ArrowRightIcon()} {...size} id="ArrowRight" />
    </ArrowKeysContainer>
  );
};
export default ArrowKeys;
