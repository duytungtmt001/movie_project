import { useParams } from "react-router-dom"
import DetailMovie from "../../components/DetailMovie";

function Detail() {
    const param = useParams();

    const [category, nameMovie] = param.info.split("-");

    return <DetailMovie category={category} nameMovie={nameMovie} />;
}

export default Detail