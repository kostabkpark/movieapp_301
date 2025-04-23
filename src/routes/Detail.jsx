import { useParams } from "react-router-dom";

function Detail({id}) {
    const param = useParams();
    console.log(param.id);
    return (
        <>
        <h2>Detail</h2>
        <div>{id}</div>
        {/* Movie 의 detail 정보 - cast , image , titiel, 좋아요, 평점, genres ... */}
        </>
    )
}

export default Detail