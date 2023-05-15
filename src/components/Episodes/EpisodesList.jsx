import Card from "./Card";

export default function EpisodesList({ episodes }) {
  return (
    <div>
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
