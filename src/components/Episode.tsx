import { IEpisode } from "./App";

export function Episode({
    id,
    name,
    season,
    number,
    image,
    summary,
}: IEpisode): JSX.Element {
    return (
        <div>
            My Component{" "}
            {`${id} ${name} ${season} ${number} ${image} ${summary}`}
        </div>
    );
}
