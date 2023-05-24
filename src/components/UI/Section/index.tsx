import { FunctionComponent, ReactNode } from 'react'
import { SectionWrapper, Wrapper } from '../SectionWrapper';
import { Subtitle } from '../Subtitle';
import { Title } from '../Title';

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
  size?: string;
}

export const Section: FunctionComponent<Props> = ({
  title,
  subtitle,
  children,
  size,
}) => {
  return (
    <Wrapper>
      <SectionWrapper size={size}>
        <div>
          <Title>{title}</Title>
          { subtitle && (
            <Subtitle>{subtitle}</Subtitle>
          )}
        </div>
        { children }
      </SectionWrapper>
    </Wrapper>
  )
}

