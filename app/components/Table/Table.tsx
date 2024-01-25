import { Forecast } from '@/utils/transformHoursForecast';
import { Icon } from '@/components/Icon/Icon';

import styles from './Table.module.css';

interface Props {
  forecast?: Forecast[];
}

export const Table = ({ forecast }: Props) => {
  return (
    <div className={styles.tableWrapper}>
      {forecast &&
        forecast.map((date) => {
          return (
            <table key={date.date} className={styles.table}>
              <caption>{date.date}</caption>
              <thead>
                <tr>
                  <th>Tid</th>
                  <th>Väder</th>
                  <th>
                    <span className={styles.ariaInvisible}>Nederbörd</span>
                    <span className={styles.desktop} aria-hidden="true">
                      Nederbörd i mm
                    </span>
                    <span className={styles.mobile} aria-hidden="true">
                      Ndb. mm
                    </span>
                  </th>
                  <th>Vindstyrka m/s</th>
                  <th>Luftfuktighet</th>
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
                        {item.t}°
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
