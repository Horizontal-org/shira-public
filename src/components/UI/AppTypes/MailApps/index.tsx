import { FunctionComponent } from 'react'
import Gmail from '../../../Apps/Gmail';
import { Explanation } from '../../../../domain/explanation';

interface Props {
  content: string;
  name: string;
  explanations?: Explanation[]
  explanationNumber: number
}

export const MailApps: FunctionComponent<Props> = ({ content, name, explanations, explanationNumber }) => {

  const html = new DOMParser().parseFromString(content, 'text/html')

  const parseAttachments = () => {
    const htmlAttachments = html.querySelectorAll('[id*="component-attachment"]')
    const attachments = Array.from(htmlAttachments).map((a) => {
      return {
        name: a.textContent,
        position: a.getAttribute('data-position'),
        explanationPosition: a.getAttribute('data-explanation')
      }
    })

    return attachments
  }

  const parseCustomElement = (name) => {
    const element = html.getElementById(name)

    const object = {
      textContent: element?.textContent || '',
      explanationPosition: element?.getAttribute('data-explanation') || null
    }

    return object
  }

  return (
    <>
      { name === 'Gmail' && (
        <Gmail 
          senderName={parseCustomElement('component-required-sender-name')}
          senderEmail={parseCustomElement('component-required-sender-email')}
          subject={parseCustomElement('component-optional-subject')}
          content={html.querySelector('[id*="component-text"]')}
          attachments={parseAttachments()}
          explanations={explanations}
          explanationNumber={explanationNumber}
        />
      )}
    </>    
  )
}