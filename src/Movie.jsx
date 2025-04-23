function Movie({coverImage, title, summary, genres}){
    return (
        <div>
            <img src={coverImage} alt="cover_image" />
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
            {genres.map((genre,index)=>
                <li key={index}>{genre}</li>
            )}
            </ul>
        </div>  
    )
}

export default Movie