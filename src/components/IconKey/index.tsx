import { KeyContainer } from '../../common/styledCommon';
import useKeyTimeout from '../../hooks/useKeyTimeout';

const IconKey = ({
  children,
  $whiteIcon,
  $bgGray,
  id,
  $height,
  $width,
}: {
  children: JSX.Element;
  id: string;
  $whiteIcon?: boolean;
  $bgGray?: boolean;
  $height: string;
  $width: string;
}): JSX.Element => {
  const [pressed, released, handleIconKeyClick] = useKeyTimeout(id);
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
      {children}
    </KeyContainer>
  );
};

IconKey.defaultProps = {
  $whiteIcon: false,
  $bgGray: false,
};

export default IconKey;
