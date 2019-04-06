export const api = {
	// application pages
	homePage: "/",
	moviePage: id => `films/${id}`,

	// third party / util urls
	films: "https://swapi.co/api/films/",
	film: id => `https://swapi.co/api/films/${id}/`,
	poster: title => `/poster?title=${title}`,
	character: title => `/character_thumbnail?name=${title}`,
};