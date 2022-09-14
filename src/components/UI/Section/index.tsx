import { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'
import { SectionWrapper } from '../SectionWrapper';
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
    <SectionWrapper>
      <div>
        <Title>{title}</Title>
        { subtitle && (
          <Subtitle>{subtitle}</Subtitle>
        )}
      </div>
      { children }
    </SectionWrapper>
  )
}

