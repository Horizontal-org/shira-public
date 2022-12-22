import { FunctionComponent, useState, useEffect } from "react"
import styled from 'styled-components'

import { computePosition } from '@floating-ui/react'
import { Explanation } from "../../../domain/explanation"

interface Props {
  explanation: Explanation
  explanationNumber: number
}

const ExplanationTooltip: FunctionComponent<Props> = ({ 
  explanation,
  explanationNumber
}) => {

  useEffect( () => {
    const tooltip = document.querySelector(`#explanation-${explanation.position}`) as HTMLElement
    const reference = document.querySelector(`[data-explanation="${explanation.position}"]`)

    computePosition(reference, tooltip).then(({x, y}) => {
      Object.assign(tooltip.style, {
        left: `${x}px`,
        top: `${y}px`
      })
    })
  }, [])
  return (
    <Wrapper id={`explanation-${explanation.position}`} display={explanationNumber !== parseInt(explanation.position)}>
        {explanation.text}
    </Wrapper>
  )
    
}

interface WrapperProps {
  display: boolean
}

const Wrapper = styled('div')<WrapperProps>`
  ${props => props.display && 'display: none;'}
  position: absolute;

  width: max-content;
  top: 0;
  bottom: 0;
`


export default ExplanationTooltip