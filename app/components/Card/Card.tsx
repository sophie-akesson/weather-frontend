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
    <div className={styles.card}>
      <div className={styles.values}>
        <h2>{label}:</h2>
        {value ? (
          <span>
            {value}
            {label === 'Temperatur' ? '°' : null}
            {label === 'Vindstyrka' ? ' m/s' : null}
            {label === 'Nederbörd' ? ' mm' : null}
            {label === 'Luftfuktighet' ? '%' : null}
          </span>
        ) : (
          '--'
        )}
        {label === 'Temperatur' && icon ? (
          <div className={styles.icon}>
            <Icon number={icon} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
