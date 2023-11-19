import { PauseText } from '../SnakeGame.styled';
import { PausedModal, PausedModalContainer } from './PauseModal.styled';

export const PauseModal = () => {
  return (
    <PausedModalContainer>
      <PausedModal>
        <h2>Paused</h2>
        <PauseText>
          Press <kbd>esc</kbd> to continue
        </PauseText>
      </PausedModal>
    </PausedModalContainer>
  );
};
