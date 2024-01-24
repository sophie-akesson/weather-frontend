interface Props {
  label: Label;
  value?: string;
  icon?: string;
}

export type Label = 'Temperatur' | 'Vindstyrka' | 'Nederbörd' | 'Luftfuktighet';

export const Card = ({ label, value, icon }: Props) => {
  return (
    <div>
      {/* To be replaced with actual icon later on */}
      {label === 'Temperatur' && icon ? icon : null}
      {label === 'Temperatur' && !icon ? '--' : null}
      <div>
        <h2>{label}</h2>
        {value ? <span>{value}</span> : '--'}
      </div>
    </div>
  );
};
