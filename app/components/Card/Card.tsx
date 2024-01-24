import { Icon } from '@/components/Icon/Icon';

import styles from './Card.module.css';

interface Props {
  label: Label;
  value?: string;
  icon?: string;
}

export type Label = 'Temperatur' | 'Vindstyrka' | 'Nederbörd' | 'Luftfuktighet';

export const Card = ({ label, value, icon }: Props) => {
  return (
    <div>
      {label === 'Temperatur' && icon ? (
        <div className={styles.icon}>
          <Icon number={icon} />
        </div>
      ) : null}
      {label === 'Temperatur' && !icon ? '--' : null}
      <div>
        <h2>{label}</h2>
        {value ? <span>{value}</span> : '--'}
      </div>
    </div>
  );
};
