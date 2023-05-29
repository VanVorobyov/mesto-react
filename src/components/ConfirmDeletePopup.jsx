import PopupWithForm from './PopupWithForm';


function ConfirmDeletePopup(props) {
  const {isOpen, onClose, isLoading, onSubmit, card} = props;

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(card)
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
    isDisabled={false}
    isValid={true}
    ></PopupWithForm>
  );
}

export default ConfirmDeletePopup;
