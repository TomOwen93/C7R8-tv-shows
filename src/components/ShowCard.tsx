import { ShowInfo } from "./App";
import removeTags from "../utils/removeTags";

export default function ShowCard(show: ShowInfo): JSX.Element {
    return (
        <div className="show-card">
            <h1>{show.name}</h1>
            <div className="show-card-info">
                <img src={show.image.medium} alt="I don't care" />
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
        </div>
    );
}
