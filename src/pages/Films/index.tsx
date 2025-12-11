import { Link, useParams } from "react-router-dom";
import { getFilm } from "../../hooks/useFilms";


export const Films = () => {
    const { id } = useParams<{ id: string }>();

    const { data, isLoading, error } = getFilm(id || "");

    if (isLoading) return <p>Carregando...</p>

    if (error) return <p>Ocorreu um erro ao buscar o filme: {error.message}</p>

    return (

        <>
            <main className="m-2">
                <Link className="font-bold hover:underline" to="/">⊲ Voltar</Link>
                <div className="flex flex-col  m-3 gap-3">
                    <img className="w-2xl self-center" src={data?.movie_banner} alt="" />
                    <h2 className="text-center font-medium text-3xl">{data?.title}</h2>
                    <p className="font-bold">Descrição: <span className="font-normal">{data?.description}</span></p>

                    <p className="font-bold">Diretor: <span className="font-medium">{data?.director}</span></p>

                    <p className="font-bold">Produtor: <span className="font-medium">{data?.producer}</span></p>

                    <p className="font-bold">Ano de lançamento: <span className="font-normal">{data?.release_date}</span></p>

                    <p className="font-bold">Score: <span className={Number(data?.rt_score) > 90 ? 'text-green-700 font-medium' : 'text-gray-700 font-medium'}>{data?.rt_score} / 100 ⭐</span></p>
                </div>
            </main>
        </>

    )
}