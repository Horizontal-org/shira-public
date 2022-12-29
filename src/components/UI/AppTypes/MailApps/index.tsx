import { FunctionComponent } from 'react'
import Gmail from '../../../Apps/Gmail';
import { Explanation } from '../../../../domain/explanation';
import useParseHTML from '../../../../hooks/useParseHTML';

interface Props {
  content: string;
  name: string;
  explanations?: Explanation[]
  explanationNumber: number
}

export const MailApps: FunctionComponent<Props> = ({ content, name, explanations, explanationNumber }) => {

  const {
    parseAttachments,
    parseCustomElement,
    parseContent, 
  } = useParseHTML(content)

  return (
    <>
      { name === 'Gmail' && (
        <Gmail 
          senderName={parseCustomElement('component-required-sender-name')}
          senderEmail={parseCustomElement('component-required-sender-email')}
          subject={parseCustomElement('component-optional-subject')}
          content={parseContent()}
          attachments={parseAttachments()}
          explanations={explanations}
          explanationNumber={explanationNumber}
        />
      )}
    </>    
  )
}