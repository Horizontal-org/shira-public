import { FunctionComponent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Attachment } from '../Attachment'
import { Message } from '../Message'

interface Props {
  data: HTMLElement
}

export const Content: FunctionComponent<Props> = ({ data }) => {
  const [elements, handleElements] = useState(Array.from(data.querySelectorAll('[id*="component-"]')))


  return (
    <Wrapper>
      { elements.sort((a, b) => parseInt(b.getAttribute('data-position')) - parseInt(a.getAttribute('data-position'))).map((e) => (
        <>
          { e.getAttribute('id').includes('component-text') && (
            <Message data={e}/>
          )}

          { e.getAttribute('id').includes('component-attachment') && (
            <Attachment name={e.textContent}/>
          )}
        </>
      ))}
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;  
  height: 100%;
  overflow-y: scroll;
  
`