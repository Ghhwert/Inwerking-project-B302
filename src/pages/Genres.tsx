import OverviewPage from "../components/OverviewPage";
import { genreConfig } from "../config/Overviews";

export default function Genres(){
    return <OverviewPage config={genreConfig} />;
}