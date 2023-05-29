import Card from "./Card";
import OptionFilter from "./OptionFilter";
import styles from "../../styles/CardEpisodeGrid.module.css";
export default function EpisodesList({
  episodes,
  onFilter,
  filter,
  showModal,
}) {
  return (
    <div>
      <h1>Episode List</h1>
      <OptionFilter onFilter={onFilter} filter={filter} />

      <div className={styles.cards}>
        {episodes.map((episode) => {
          return (
            <Card key={episode.id} episode={episode} showModal={showModal} />
          );
        })}
      </div>
    </div>
  );
}
