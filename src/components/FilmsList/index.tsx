import { useFilms } from "../../hooks/useFilms";


export const FilmsList = () => {

    const { data, isLoading, error } = useFilms(10);

    if (isLoading) return <p>Carregando...</p>

    if (error) return <p>Ocorreu um erro ao buscar os filmes: {error.message}</p>

    return (
        <div>
            {data?.map((film) => (
                <>
                    <h3>{film.title}</h3>
                    <img src={film.image} alt="" />
                    <p>Diretor: {film.director}</p>
                </>
            ))}
        </div>
    )
}