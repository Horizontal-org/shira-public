import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Message } from './Message'
import { Attachment } from './Attachment'
interface Props {
    data: HTMLElement
  }

export const Chat: FunctionComponent<Props> = ({ data}) => {
  return (
    <Wrapper>
      { Array.from(data.querySelectorAll('[id*="component-"]')).sort((a, b) => parseInt(b.getAttribute('data-position')) - parseInt(a.getAttribute('data-position'))).map((e) => (
        <>
          { e.getAttribute('id').includes('component-text') && (
            <Message data={e}/>
          )}

          { e.getAttribute('id').includes('component-attachment') && (
            <Attachment 
              explanationPosition={e.getAttribute('data-explanation') || null} 
              name={e.textContent}
            />
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

  mark {
    background: transparent;
    position: relative;
  }
  
`