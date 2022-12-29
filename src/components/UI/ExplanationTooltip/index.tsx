import { FunctionComponent, useEffect } from "react"

import { computePosition } from '@floating-ui/react'
import { Explanation } from "../../../domain/explanation"
import Tooltip from "../Tooltip"

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

  useEffect(() => {
    const reference = document.querySelector(`[data-explanation="${explanationNumber}"]`)  as HTMLElement
    const lastReference = document.querySelector(`[data-explanation="${explanationNumber - 1}"]`) as HTMLElement

    if(reference) {
      reference.style.backgroundColor = '#FFCBD4'
      reference.style.zIndex = '2'
    }
    
    if(lastReference) {
      lastReference.style.backgroundColor = 'transparent'
      lastReference.style.zIndex = '0'
    }
  }, [explanationNumber])
  return (
    <Tooltip 
        position={explanation.position}
        text={explanation.text} 
        hide={parseInt(explanation.position) !== explanationNumber}
    />
  )
}

export default ExplanationTooltip