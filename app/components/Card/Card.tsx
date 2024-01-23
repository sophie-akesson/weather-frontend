interface Props {
  label: string;
  value: string;
  icon: number;
}

export const Card: React.FC<Props> = ({ label, value, icon }) => {
  return (
    <div>
      {/* To be replaced with actual icon later on */}
      {icon}
      <div>
        <h2>{label}</h2>
        <span>{value}</span>
      </div>
    </div>
  );
};
