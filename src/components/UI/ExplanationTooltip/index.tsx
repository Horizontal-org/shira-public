import { FunctionComponent, useEffect } from "react"

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

  // refactor this
  useEffect( () => {
    const observer = new ResizeObserver(() => {
      const tooltip = document.querySelector(`#explanation-${explanation.position}`) as HTMLElement
      const reference = document.querySelector(`[data-explanation="${explanation.position}"]`)

      const referencePosition = reference.getBoundingClientRect()

      tooltip.style.top = `${referencePosition.y + referencePosition.height}px`
      tooltip.style.left = `${referencePosition.x}px`
    })

    observer.observe(document.documentElement)

    return () => {
      observer.unobserve(document.documentElement)
    }
  }, [explanation.position, explanationNumber])

  useEffect(() => {
    const reference = document.querySelector(`[data-explanation="${explanationNumber}"]`)  as HTMLElement
    const lastReference = document.querySelector(`[data-explanation="${explanationNumber - 1}"]`) as HTMLElement

    if(reference) {
      reference.style.backgroundColor = '#FFCBD4'
      reference.style.zIndex = '4'
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