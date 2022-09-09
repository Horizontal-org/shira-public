import { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'
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
      <div>
        <Title>{title}</Title>
        { subtitle && (
          <Subtitle>{subtitle}</Subtitle>
        )}
      </div>
      { children }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 100px 0 0 80px;
  max-width: 70vw;
`
