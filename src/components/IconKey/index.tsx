import { KeyContainer } from '../../common/styledCommon';
import useKeyClickTimeout from '../../hooks/useKeyClickTimeout';
import useKeyPressTimeout from '../../hooks/useKeyPressTimeout';

const IconKey = ({
  icon,
  $whiteIcon,
  $bgGray,
  id,
  $height,
  $width,
}: {
  icon: JSX.Element;
  id: string;
  $whiteIcon?: boolean;
  $bgGray?: boolean;
  $height: string;
  $width: string;
}): JSX.Element => {
  const [pressed, released] = useKeyPressTimeout(id);
  const handleIconKeyClick = useKeyClickTimeout(id);
  return (
    <KeyContainer
      $height={$height}
      $width={$width}
      $bgGray={$bgGray}
      $whiteIcon={$whiteIcon}
      id={id}
      $pressed={pressed}
      $released={released}
      onClick={handleIconKeyClick}
    >
      {icon}
    </KeyContainer>
  );
};

IconKey.defaultProps = {
  $whiteIcon: false,
  $bgGray: false,
};

export default IconKey;
