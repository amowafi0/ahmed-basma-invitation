import {
  EVENT_DATE,
  VENUE,
  AREA,
  MAP_URL,
  COUPLE,
  formatDate,
  formatTime,
} from "@/lib/utils";
import { DaysLine } from "./Countdown";
import styles from "./InvitationCard.module.css";

interface Props {
  guestName?: string;
}

export function InvitationCard({ guestName = "our honoured guest" }: Props) {
  const dateStr = formatDate(EVENT_DATE);
  const timeStr = formatTime(EVENT_DATE);

  return (
    <div className={styles.host}>
      <div className={`${styles.inv} ${styles.invClassic}`}>
        <div className={styles.panel}>
          <div className={styles.border} />

          <img
            src="/crest.svg"
            alt="A & B monogram"
            className={`${styles.crest} ${styles.rise}`}
          />

          <div
            className={`${styles.families} ${styles.label} ${styles.rise}`}
            style={{ animationDelay: "0.06s" }}
          >
            Together with their families
          </div>

          <div
            className={`${styles.greet} ${styles.rise}`}
            style={{ animationDelay: "0.12s" }}
          >
            Dear <span className={styles.gName}>{guestName}</span>,
          </div>

          <div
            className={`${styles.names} ${styles.rise}`}
            style={{ animationDelay: "0.2s" }}
          >
            <span className={styles.n}>{COUPLE.a}</span>
            <span className={styles.amp}>&amp;</span>
            <span className={styles.n}>{COUPLE.b}</span>
          </div>

          <div
            className={`${styles.lede} ${styles.rise}`}
            style={{ animationDelay: "0.28s" }}
          >
            request the pleasure of your company at their engagement
          </div>

          <div
            className={`${styles.rule} ${styles.rise}`}
            style={{ animationDelay: "0.34s" }}
          >
            <span className={styles.ln} />
            <span className={styles.dia} />
            <span className={styles.ln} />
          </div>

          <div
            className={`${styles.when} ${styles.rise}`}
            style={{ animationDelay: "0.4s" }}
          >
            <span className={styles.dline}>{dateStr}</span>
            <span className={styles.tline}>{timeStr}</span>
          </div>

          <div
            className={`${styles.loc} ${styles.rise}`}
            style={{ animationDelay: "0.46s" }}
          >
            <div className={styles.wlab}>Where</div>
            <span className={styles.pin} />
            <div className={styles.venue}>{VENUE}</div>
            <div className={styles.addr}>{AREA} · address to be confirmed</div>
            {/* <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              View on map
            </a> */}
          </div>

          <div
            className={`${styles.cdline} ${styles.rise}`}
            style={{ animationDelay: "0.52s" }}
          >
            <DaysLine target={EVENT_DATE} /> days until we celebrate
          </div>

          <button
            className={`${styles.cta} ${styles.rise}`}
            style={{ animationDelay: "0.56s" }}
          >
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              View on map
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
