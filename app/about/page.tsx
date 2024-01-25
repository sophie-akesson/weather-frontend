import styles from './page.module.css';

export default function About() {
  return (
    <main>
      <div className={styles.about}>
        <p>Denna sida är byggd med data från SMHI.</p>
        <p>För dagens prognos visas högsta temperaturen under dygnets gång.</p>
        <p>För regn visas det minsta möjliga värdet.</p>
      </div>
    </main>
  );
}
