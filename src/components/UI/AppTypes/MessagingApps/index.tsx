import { FunctionComponent, useState } from 'react'
import { SMS } from '../../../Apps/SMS';
import Whatsapp from '../../../Apps/Whatsapp';
import FBMessenger from '../../../Apps/FBMessenger';


interface Props {
  content: string;
  name: string;
}

export const MessagingApps: FunctionComponent<Props> = ({ content, name }) => {

  const html = new DOMParser().parseFromString(content, 'text/html')

  return (
    <>
      { name === 'SMS' && (
        <SMS
          phone={!!(html.getElementById('component-required-phone')) ? html.getElementById('component-required-phone').textContent : ''}
          content={html.getElementById('dynamic-content')}
        />
      )}

      { name === 'Whatsapp' && (
        <Whatsapp
          phone={!!(html.getElementById('component-required-phone')) ? html.getElementById('component-required-phone').textContent : ''}
          content={html.getElementById('dynamic-content')}
        />
      )}

      { name === 'Messenger' && (
        <FBMessenger 
          phone={!!(html.getElementById('component-required-phone')) ? html.getElementById('component-required-phone').textContent : ''}
          content={html.getElementById('dynamic-content')}
        />
      )}
    </>    
  )
}