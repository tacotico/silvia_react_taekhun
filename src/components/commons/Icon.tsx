import styled from 'styled-components';

interface Props {
  src: string;
  width?: string;
  alt?: string;
  style?: React.CSSProperties;
}

type ImageProps = Pick<Props, 'width' | 'style'>;

const Icon = ({ src, width, alt, style }: Props) => {
  return <Image alt={alt} width={width} src={src} style={style} />;
};

const Image = styled.img<ImageProps>`
  width: ${({ width }) => width};
  {...style}
`;

export default Icon;
