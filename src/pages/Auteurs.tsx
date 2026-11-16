import OverviewPage from "../components/OverviewPage";
import { authorsConfig } from "../config/Overviews";

export default function Auteurs(){
    return <OverviewPage config={authorsConfig} />;
}