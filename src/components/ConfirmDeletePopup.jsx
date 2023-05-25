import PopupWithForm from './PopupWithForm';

function ConfirmDeletePopup(props) {
  const {isOpen, onClose, isLoading, onCardDelete, card} = props;

  function handleSubmit(e) {
    e.preventDefault();
    onCardDelete(card)
  } 

  return (
    <PopupWithForm
    isOpen={isOpen}
    onClose={onClose}
    title={'Вы уверены?'}
    name={'confirm'}
    onSubmit={handleSubmit}
    isLoading={isLoading}
    buttonText="Да"
    loadingText={'Удаление...'}
    ></PopupWithForm>
  );
}

export default ConfirmDeletePopup;
