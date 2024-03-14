import "../MessageBox/MessageBox.scss";

export default function MessageBox({ onSend }) {
  return (
    <>
      <form className="form" onSubmit={onSend}>
        <div className="form__div">
          <input
            type="text"
            placeholder="Please type here 🎵"
            name="input"
            className="form__input"
          />
          <button className="form__button">SEND MESSAGE</button>
        </div>
      </form>
    </>
  );
}
