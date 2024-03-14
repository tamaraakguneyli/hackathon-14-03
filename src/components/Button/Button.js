export default function Button({ onSubmit }) {
  return (
    <form className="button-form" onSubmit={onSubmit}>
      <button className="button"> Next Suggestion</button>;
    </form>
  );
}
