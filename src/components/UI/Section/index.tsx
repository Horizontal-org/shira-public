import { FunctionComponent, ReactNode } from 'react'
import { SectionWrapper, Wrapper } from '../SectionWrapper';
import { Subtitle } from '../Subtitle';
import { Title } from '../Title';

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export const Section: FunctionComponent<Props> = ({
  title,
  subtitle,
  children
}) => {
  return (
    <Wrapper>
      <SectionWrapper>
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

