import { useState, useEffect } from "react";
import "./WatchboxTable.css";

export default function WatchboxTable() {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/watchbox.csv")
      .then((res) => res.text())
      .then((csv) => {
        const lines = csv.trim().split("\n");
        const headers = lines[0].split(",");
        const data = lines.slice(1).map((line) => {
          const values = line.split(",");
          return {
            title: values[0],
            rating: values[1],
            type: values[2],
            tags: values[3].split(";").map((tag) => tag.trim()),
          };
        });
        setWatches(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const getTypeIcon = (type) => {
    switch (type) {
      case "series":
        return "📺";
      case "movie":
        return "🎬";
      case "new_song":
        return "🎵";
      default:
        return "📌";
    }
  };

  const getTagColor = (tag) => {
    switch (tag) {
      case "productive":
        return "#4CAF50";
      case "series":
        return "#2196F3";
      case "movie":
        return "#FF9800";
      case "new_song":
        return "#E91E63";
      default:
        return "#9C27B0";
    }
  };

  if (loading) return <div className="loading">Loading your watchbox...</div>;
  if (error)
    return <div className="error">Error loading watchbox: {error}</div>;

  return (
    <div className="watchbox-container">
      <table className="watchbox-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
            <th>Type</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {watches.map((watch, idx) => (
            <tr key={idx}>
              <td className="title-cell">{watch.title}</td>
              <td className="rating-cell">
                <span className="rating-badge">{watch.rating}⭐</span>
              </td>
              <td className="type-cell">
                <span className="type-badge">
                  {getTypeIcon(watch.type)} {watch.type.replace("_", " ")}
                </span>
              </td>
              <td className="tags-cell">
                <div className="tags">
                  {watch.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="tag"
                      style={{ backgroundColor: getTagColor(tag) }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
