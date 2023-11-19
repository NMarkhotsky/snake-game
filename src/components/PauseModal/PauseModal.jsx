import {
  ClickDir,
  PausedModal,
  PausedModalContainer,
} from './PauseModal.styled';

export const PauseModal = () => {
  return (
    <PausedModalContainer>
      <PausedModal>
        <h2>Paused</h2>
        <ClickDir>
          Press <strong>space</strong> to continue
        </ClickDir>
      </PausedModal>
    </PausedModalContainer>
  );
};
