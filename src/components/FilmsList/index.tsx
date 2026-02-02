import { Link } from "react-router-dom";
import { useFilms } from "../../hooks/useFilms";


export const FilmsList = () => {

    const { data, isLoading, error } = useFilms(10);

    data?.sort((a, b) => a.title.localeCompare(b.title));

    if (isLoading) return (
        <div className="flex justify-center items-center min-h-screen">
            <p className="text-xl text-gray-600 font-medium">Carregando filmes...</p>
        </div>
    )

    if (error) return (
        <div className="flex justify-center items-center min-h-screen">
            <p className="text-lg text-red-600 font-semibold">Ocorreu um erro ao buscar os filmes: {error.message}</p>
        </div>
    )

    return (
        <div className="bg-gray-50 min-h-screen px-4 md:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
                {data?.map((film) => (
                    <Link 
                        key={film.id}
                        to={`/films/${film.id}`}
                        className="group block h-full no-underline"
                    >
                        <div className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                            
                            <div className="relative overflow-hidden  flex items-center justify-center">
                                <img 
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
                                    src={film.image} 
                                    alt={film.title}
                                />
                            </div>

                            <div className="px-4 py-4 grow flex items-center justify-center">
                                <h2 className="text-lg md:text-xl font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                                    {film.title}
                                </h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}