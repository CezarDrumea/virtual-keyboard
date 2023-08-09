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
      <IconKey {...size} id="ArrowLeft">
        <ArrowLeftIcon />
      </IconKey>
      <DoubleKeyContainer>
        <IconKey {...size} id="ArrowUp">
          <ArrowUpIcon />
        </IconKey>
        <IconKey {...size} id="ArrowDown">
          <ArrowDownIcon />
        </IconKey>
      </DoubleKeyContainer>
      <IconKey {...size} id="ArrowRight">
        <ArrowRightIcon />
      </IconKey>
    </ArrowKeysContainer>
  );
};
export default ArrowKeys;
