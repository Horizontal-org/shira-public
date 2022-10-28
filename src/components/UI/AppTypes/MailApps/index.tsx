import { FunctionComponent, useEffect, useState } from 'react'
import Gmail from '../../../Apps/Gmail';

interface Props {
  content: string;
  name: string;
}

export const MailApps: FunctionComponent<Props> = ({ content, name }) => {

  const html = new DOMParser().parseFromString(content, 'text/html')
  const [attachments, handleAttachments] = useState([])

  useEffect(() => {
    const htmlAttachments = html.querySelectorAll('[id*="component-attachment"]')
    handleAttachments(Array.from(htmlAttachments).map((a) => {
      return {
        name: a.textContent,
        position: a.getAttribute('data-position')
      }
    }))
  }, [])

  return (
    <>
      { name === 'Gmail' && (
        <Gmail 
          senderName={!!(html.getElementById('component-required-sender-name')) ? html.getElementById('component-required-sender-name').textContent : ''}
          senderEmail={!!(html.getElementById('component-required-sender-email')) ? html.getElementById('component-required-sender-email').textContent : ''}
          subject={!!(html.getElementById('component-optional-subject')) ? html.getElementById('component-optional-subject').textContent : ''}
          content={html.querySelector('[id*="component-text"]')}
          attachments={attachments}
        />
      )}
    </>    
  )
}