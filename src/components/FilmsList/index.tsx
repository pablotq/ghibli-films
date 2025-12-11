import { Link } from "react-router-dom";
import { useFilms } from "../../hooks/useFilms";


export const FilmsList = () => {

    const { data, isLoading, error } = useFilms(10);

    data?.sort((a, b) => a.title.localeCompare(b.title));

    if (isLoading) return <p>Carregando...</p>

    if (error) return <p>Ocorreu um erro ao buscar os filmes: {error.message}</p>

    return (
        <div className="grid grid-cols-1
         md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {data?.map((film) => (
                <>
                    <div className="m-3">
                        <Link to={`/ghibli-films/films/${film.id}`}>
                            <img className="" src={film.image} alt="" />
                            <h2 className="text-center font-medium text-3xl">{film.title}</h2>
                        </Link>
                    </div>
                </>
            ))}
        </div>
    )
}