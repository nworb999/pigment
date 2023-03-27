export default function ColorForm({ color, setColor, onSubmit, onClick }) {
  return (
    <>
      <form
        id="colorForm"
        onSubmit={(e) => onSubmit(e)}
        onClick={() => onClick()}
      >
        <label htmlFor="colorInput">choose your color</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="pink"
          id="colorInput"
          required
        />
      </form>
      <button type="submit" form="colorForm">
        Submit
      </button>
    </>
  );
}
