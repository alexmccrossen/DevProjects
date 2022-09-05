//api

const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.q.value;
    config = {
        params: {
            q: searchTerm
        }
    }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    displayShows(res.data)
})

const displayShows = (shows) => {
    try {
        for (let result of shows) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium
            document.body.append(img)
        }
    } catch (e) {
        console.log(e)
    }

}