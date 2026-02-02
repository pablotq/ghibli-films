import { Link, useParams } from "react-router-dom";
import { useFilm } from "../../hooks/useFilms";


export const Films = () => {
    const { id } = useParams<{ id: string }>();

    const { data, isLoading, error } = useFilm(id || "");

    if (isLoading) return <p>Carregando...</p>

    if (error) return <p>Ocorreu um erro ao buscar o filme: {error.message}</p>

    return (
        <>
            <main className="max-w-4xl mx-auto px-4 md:px-8 py-6">
                <Link 
                    className="inline-block px-4 py-2 mb-6 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors duration-200 font-semibold text-gray-800" 
                    to="/"
                >
                    ⊲ Voltar
                </Link>

                <div className="flex flex-col gap-6">
                    <div className="flex justify-center">
                        <img 
                            className=" w-full rounded-lg shadow-lg object-cover" 
                            src={data?.movie_banner} 
                            alt={data?.title} 
                        />
                    </div>

                    <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
                        {data?.title}
                    </h2>

                    <div className="bg-blue-50 rounded-lg p-4 md:p-6 shadow-sm border-l-4 border-blue-500">
                        <p className="font-bold text-gray-800 mb-2">Description:</p>
                        <p className="text-gray-700 leading-relaxed">{data?.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                            <p className="font-bold text-gray-800 mb-1">Diretor</p>
                            <p className="text-gray-700">{data?.director}</p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                            <p className="font-bold text-gray-800 mb-1">Produtor</p>
                            <p className="text-gray-700">{data?.producer}</p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                            <p className="font-bold text-gray-800 mb-1">Ano de Lançamento</p>
                            <p className="text-gray-700">{data?.release_date}</p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                            <p className="font-bold text-gray-800 mb-2">Score</p>
                            <span className={`inline-block px-4 py-2 rounded-full font-bold text-white ${
                                Number(data?.rt_score) > 90 
                                    ? 'bg-green-500' 
                                    : 'bg-gray-500'
                            }`}>
                                {data?.rt_score} / 100 ⭐
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}