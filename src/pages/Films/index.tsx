import { Link, useParams } from "react-router-dom";
import { getFilm } from "../../hooks/useFilms";


export const Films = () => {
    const { id } = useParams<{ id: string }>();

    const { data, isLoading, error } = getFilm(id || "");

    if (isLoading) return <p>Carregando...</p>

    if (error) return <p>Ocorreu um erro ao buscar o filme: {error.message}</p>

    return (

        <>
        <Link to="/">Voltar</Link>
            <div className="flex flex-col  m-3">
                <img className="w-2xl self-center" src={data?.movie_banner} alt="" />
                <h2 className="text-center font-medium text-3xl">{data?.title}</h2>
                <p>Descrição: <span>{data?.description}</span></p>
                <p>Diretor: <span>{data?.director}</span></p>
                <p>Produtor: <span>{data?.producer}</span></p>
                <p>Ano de lançamento: <span>{data?.release_date}</span></p>
                <p>Score RottenTomatoes: <span>{data?.rt_score} / 100</span></p>
            </div>
        </>

    )
}