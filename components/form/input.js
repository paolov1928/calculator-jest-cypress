export default function Input({ name, onChange }) {
  return (
    <label htmlFor={name}>
      {name}:
      <input
        type='text'
        name={name}
        id={name}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
