import { FunctionComponent } from 'react'
import { SMS } from '../../../Apps/SMS';
import Whatsapp from '../../../Apps/Whatsapp';
import FBMessenger from '../../../Apps/FBMessenger';
import { Explanation } from '../../../../domain/explanation';
import useParseHTML from '../../../../hooks/useParseHTML';


interface Props {
  content: string;
  name: string;
  explanations?: Explanation[];
  explanationNumber: number;
}

export const MessagingApps: FunctionComponent<Props> = ({ content, name, explanations, explanationNumber }) => {

  const html = new DOMParser().parseFromString(content, 'text/html')

  const { parseCustomElement } = useParseHTML(content)

  return (
    <>
      { name === 'SMS' && (
        <SMS
          phone={parseCustomElement('component-required-phone')}
          content={html.getElementById('dynamic-content')}
          explanations={explanations}
          explanationNumber={explanationNumber}
        />
      )}

      { name === 'Whatsapp' && (
        <Whatsapp
          phone={parseCustomElement('component-required-phone')}
          content={html.getElementById('dynamic-content')}
          explanations={explanations}
          explanationNumber={explanationNumber}
        />
      )}

      { name === 'Messenger' && (
        <FBMessenger 
          fullname={parseCustomElement('component-required-phone')}
          content={html.getElementById('dynamic-content')}
          explanations={explanations}
          explanationNumber={explanationNumber}
        />
      )}
    </>    
  )
}