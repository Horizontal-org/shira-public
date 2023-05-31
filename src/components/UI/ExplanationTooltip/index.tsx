import { FunctionComponent, useEffect } from "react"

import { Explanation } from "../../../domain/explanation"
import Tooltip from "../Tooltip"

interface Props {
  explanation: Explanation
  explanationNumber: number
  showExplanations: boolean
  app?: string
}

const ExplanationTooltip: FunctionComponent<Props> = ({ 
  explanation,
  explanationNumber,
  showExplanations,
  app
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
    const explanations = document.querySelectorAll(`[data-explanation]`) as NodeListOf<HTMLElement>
    let parentDiv: HTMLElement | null = null

    // here we should remove the background color from all the explanations
    explanations.forEach( e => {
      e.style.zIndex = '0'
      e.style.background = 'transparent';
      parentDiv = e.parentElement as HTMLElement;
      if (parentDiv) {
        parentDiv.style.zIndex = '0';
      }
      if(parentDiv.tagName.toLocaleLowerCase() === 'p') {
        const div = parentDiv.parentElement as HTMLElement
        const highlited = div?.parentElement as HTMLElement
        highlited.style.zIndex = '0'
      }
    })
    
    // here we should highlight the current explanation
    if(reference && showExplanations) {
      parentDiv = reference.parentElement as HTMLElement;
      console.log(parentDiv)
      reference.style.zIndex = '4';
      reference.style.background = 'white';
      if(app === 'datingapp' && reference.className === 'userInfo') {
        reference.style.background = 'transparent'
      }
      if (parentDiv) {
        parentDiv.style.zIndex = '4';
      }

      if(parentDiv.tagName.toLocaleLowerCase() === 'p') {
        const div = parentDiv.parentElement as HTMLElement
        const highlited = div?.parentElement as HTMLElement
        highlited.style.zIndex = '4'
      }
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