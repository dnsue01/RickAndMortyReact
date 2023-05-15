import Card from "./Card";
import OptionFilter from "./OptionFilter";

export default function EpisodesList({ episodes, onFilter, filter }) {
  return (
    <div>
      <OptionFilter onFilter={onFilter} filter={filter} />
      {episodes.map((episode) => {
        return (
          <div key={episode.id}>
            <Card episode={episode} />
          </div>
        );
      })}
    </div>
  );
}
