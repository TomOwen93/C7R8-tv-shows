// utils
import { ShowInfo } from "../utils/Interfaces";
import removeTags from "../utils/removeTags";

interface ShowCardProps {
    show: ShowInfo;
    setSelectedShow: React.Dispatch<React.SetStateAction<string>>;
}

export default function ShowCard({
    show,
    setSelectedShow,
}: ShowCardProps): JSX.Element {
    return (
        <button
            onClick={() => setSelectedShow(show.id.toString())}
            className="show-card"
        >
            <img src={show.image.original} alt={show.name + "'s cover"} />
            <div className="show-card-info">
                <h1>{show.name}</h1>
                <hr />
                <p>{removeTags(show.summary)}</p>
            </div>
            <div className="show-metadata">
                <ul>
                    <li>Rated: {show.rating.average}</li>
                    <li>Genres: {show.genres.join(", ")}</li>
                    <li>Status: {show.status}</li>
                    <li>Runtime: {show.runtime} mins</li>
                </ul>{" "}
            </div>
        </button>
    );
}
