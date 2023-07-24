import { IEpisode } from "./App";
import episodeCode from "../utils/episodecode";

export function Episode({
    name,
    season,
    number,
    image,
    summary,
}: IEpisode): JSX.Element {
    return (
        <div className="episode-card">
            <p>{`${name} - ${episodeCode(season, number)}`} </p>
            <img
                src={image.medium}
                alt={`Cover of ${episodeCode(season, number)}`}
            />
            <p>{summary}</p>
        </div>
    );
}
