import { IEpisode } from "./App";
import episodeCode from "../utils/episodecode";
import removeTags from "../utils/removeTags";

export function Episode({
    name,
    season,
    number,
    image,
    summary,
}: IEpisode): JSX.Element {
    return (
        <div className="episode-card">
            <h2>{`${name} - ${episodeCode(season, number)}`} </h2>
            {image && (
                <img
                    src={image.medium}
                    alt={`Cover of ${episodeCode(season, number)}`}
                />
            )}
            <p>{typeof summary === "string" ? removeTags(summary) : "TBD"}</p>
        </div>
    );
}
