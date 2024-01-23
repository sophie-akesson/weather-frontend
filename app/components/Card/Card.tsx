interface Props {
  label: string;
  value: string;
  icon: number;
}

export const Card = ({ label, value, icon }: Props) => {
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
