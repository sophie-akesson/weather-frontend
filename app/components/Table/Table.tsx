import { Forecast } from '@/utils/transformHoursForecast';
import { Icon } from '@/components/Icon/Icon';

import styles from './Table.module.css';

interface Props {
  forecast?: Forecast[];
  timeLabel: string;
  tempLabel: string;
  ariaPrecipitationLabel: string;
  longPrecipitationLabel: string;
  shortPrecipitationLabel: string;
  windLabel: string;
  humiditylabel: string;
}

export const Table = ({
  forecast,
  timeLabel,
  tempLabel,
  ariaPrecipitationLabel,
  longPrecipitationLabel,
  shortPrecipitationLabel,
  windLabel,
  humiditylabel,
}: Props) => {
  return (
    <div className={styles.tableWrapper}>
      {forecast &&
        forecast.map((date) => {
          return (
            <table key={date.date} className={styles.table}>
              <caption>{date.date}</caption>
              <thead>
                <tr>
                  <th>{timeLabel}</th>
                  <th>{tempLabel}</th>
                  <th>
                    <span className={styles.ariaInvisible}>{ariaPrecipitationLabel}</span>
                    <span className={styles.desktop} aria-hidden="true">
                      {longPrecipitationLabel}
                    </span>
                    <span className={styles.mobile} aria-hidden="true">
                      {shortPrecipitationLabel}
                    </span>
                  </th>
                  <th>{windLabel}</th>
                  <th>{humiditylabel}</th>
                </tr>
              </thead>
              <tbody>
                {date.items.map((item) => {
                  return (
                    <tr key={item.hour}>
                      <td>{item.hour}</td>
                      <td>
                        {item.Wsymb2 ? (
                          <div className={styles.icon}>
                            <Icon number={item.Wsymb2[0].toString()} />
                          </div>
                        ) : null}
                        <span className={styles.weather}>{item.t}°</span>
                      </td>
                      <td>{item.pmin}</td>
                      <td>{item.ws}</td>
                      <td>{item.r}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
        })}
    </div>
  );
};
