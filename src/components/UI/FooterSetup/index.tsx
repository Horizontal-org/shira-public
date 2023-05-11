import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Button } from '../Button'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface Props {
  onBack: () => void;
  onNext: () => void;
  backText: string;
  nextText: string;
  disabled: boolean;
}

export const FooterButtonsSetup: FunctionComponent<Props> = ({
    onBack,
    onNext,
    backText,
    nextText,
    disabled,
}) => {
    return (
      <Wrapper>
        <Button
          text={backText}
          onClick={onBack}
          type='outline'
          leftIcon={<FiChevronLeft size={18} />}
        />
        <Button
          text={nextText}
          onClick={onNext}
          type='primary'
          rightIcon={<FiChevronRight size={18} />}
          disabled={disabled}
        />
      </Wrapper>
    )
  }

const Wrapper = styled.div`
  display: flex;
  > button {
    margin-left: 10px;
  }
`

