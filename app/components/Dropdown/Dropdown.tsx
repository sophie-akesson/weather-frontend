interface Props {
  options: DropdownOption[];
  handleDropdownChange: (value: string) => void;
}

export interface DropdownOption {
  name: string;
  value: string;
}

export const Dropdown = ({ options, handleDropdownChange }: Props) => {
  return (
    <select
      name="city"
      defaultValue="default"
      onChange={(e) => handleDropdownChange(e.target.value)}
    >
      <option value="default" disabled>
        Välj önskad stad
      </option>
      {options.map((option) => (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
