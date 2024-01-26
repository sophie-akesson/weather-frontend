import { Icon } from '@/components/Icon/Icon';

import styles from './Card.module.css';

interface Props {
  label: string;
  value?: string;
  icon?: string;
  type: 'temp' | 'wind' | 'precipitation' | 'humidity';
}

export const Card = ({ label, value, icon, type }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.values}>
        <h2>{label}:</h2>
        {value ? (
          <span>
            {value}
            {type === 'temp' ? '°' : null}
            {type === 'wind' ? ' m/s' : null}
            {type === 'precipitation' ? ' mm' : null}
            {type === 'humidity' ? '%' : null}
          </span>
        ) : (
          '--'
        )}
        {type === 'temp' && icon ? (
          <div className={styles.icon}>
            <Icon number={icon} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
