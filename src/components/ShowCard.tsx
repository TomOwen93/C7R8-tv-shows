// utils
import { ShowInfo } from "../utils/Interfaces";
import removeTags from "../utils/removeTags";

interface ShowCardProps {
    show: ShowInfo;
    handleShowSelection: (id: string) => void;
}

export default function ShowCard({
    show,
    handleShowSelection,
}: ShowCardProps): JSX.Element {
    return (
        <button
            onClick={() => handleShowSelection(show.id.toString())}
            className="show-card"
        >
            <h1>{show.name}</h1>
            <div className="show-card-info">
                <img src={show.image.medium} alt={show.name + "'s cover"} />
                <p>{removeTags(show.summary)}</p>
                <div className="show-metadata">
                    <ul>
                        <li>Rated: {show.rating.average}</li>
                        <li>Genres: {show.genres.join(", ")}</li>
                        <li>Status: {show.status}</li>
                        <li>Runtime: {show.runtime} mins</li>
                    </ul>{" "}
                </div>
            </div>
        </button>
    );
}
