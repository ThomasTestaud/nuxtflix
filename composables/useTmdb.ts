export const useTmdb = () => {

    const config = useRuntimeConfig();
    const key = config.public.tmdbKey;
    const baseUrl = 'https://api.themoviedb.org/3'
    const queryParams = `?language=fr-FR`
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + key
        }
    };

    const getMovies = async (route, page) => {
        try {
            const res = await $fetch(baseUrl + '/movie/' + route + queryParams + '&page=' + page, options);
            return res.results;
        } catch (err) {
            console.error('error:' + err);
        }
    }

    const getMovieById = async (id, append) => {
        try {
            const res = await $fetch(baseUrl + '/movie/' + id + queryParams + '&append_to_response=' + append, options);
            return res;
        } catch (err) {
            console.error('error:' + err);
        }
    }

    return { getMovies, getMovieById };
}
