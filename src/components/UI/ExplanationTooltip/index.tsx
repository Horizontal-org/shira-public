import { FunctionComponent, useEffect } from "react"

import { Explanation } from "../../../domain/explanation"
import Tooltip from "../Tooltip"

interface Props {
  explanation: Explanation
  explanationNumber: number
  showExplanations: boolean
}

const ExplanationTooltip: FunctionComponent<Props> = ({ 
  explanation,
  explanationNumber,
  showExplanations 
}) => {
  console.log("🚀 ~ file: index.tsx:17 ~ showExplanations", showExplanations)

  // refactor this
  useEffect( () => {
    const observer = new ResizeObserver(() => {
      const tooltip = document.querySelector(`#explanation-${explanation.index}`) as HTMLElement
      const reference = document.querySelector(`[data-explanation="${explanation.index}"]`) as HTMLElement
      const container = reference.closest(".apps-container") as HTMLElement
      let scrollPerformed = false

      const handleScroll = () => {
        scrollPerformed=true
        const referencePosition = reference.getBoundingClientRect()
        tooltip.style.top = `${referencePosition.y + referencePosition.height}px`
        tooltip.style.left = `${referencePosition.x}px`
      }

      if(showExplanations && parseInt(explanation.index) === explanationNumber) {
        reference.scrollIntoView({ behavior: 'smooth' })
        container.addEventListener("scroll", handleScroll)

        if(!scrollPerformed) {
          const referencePosition = reference.getBoundingClientRect()

          tooltip.style.top = `${referencePosition.y + referencePosition.height}px`
          tooltip.style.left = `${referencePosition.x}px`
        }
      } else {
        container.removeEventListener("scroll", handleScroll)
      }
    })

    observer.observe(document.documentElement)

    return () => {
      observer.unobserve(document.documentElement)
    }
  }, [explanation.index, explanationNumber, showExplanations])

  useEffect(() => {
    const reference = document.querySelector(`[data-explanation="${explanationNumber}"]`)  as HTMLElement
    const lastReference = document.querySelector(`[data-explanation="${explanationNumber - 1}"]`) as HTMLElement

    if(reference && showExplanations) {
      reference.style.backgroundColor = '#FFCBD4'
      reference.style.zIndex = '4'
    }
    
    if(lastReference) {
      lastReference.style.backgroundColor = 'transparent'
      lastReference.style.zIndex = '0'
    }
  }, [explanationNumber, showExplanations])
  return (
    <Tooltip 
        explanationIndex={explanation.index}
        text={explanation.text} 
        hide={parseInt(explanation.index) !== explanationNumber || !showExplanations}
    />
  )
}

export default ExplanationTooltip