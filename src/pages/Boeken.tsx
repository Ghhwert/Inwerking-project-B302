import OverviewPage from "../components/OverviewPage";
import {booksConfig} from "../config/Overviews"

export default function Boeken() {
  return <OverviewPage config={booksConfig} />;
}