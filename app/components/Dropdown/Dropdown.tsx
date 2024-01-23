interface Props {
  options: DropdownOption[];
  handleDropdownChange: (value: string) => void;
}

export interface DropdownOption {
  name: string;
  value: string;
}

export const Dropdown: React.FC<Props> = ({ options, handleDropdownChange }) => {
  return (
    <select onChange={(e) => handleDropdownChange(e.target.value)}>
      {options.map((option) => (
        <option key={option.name} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
