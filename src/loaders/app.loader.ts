import { json, redirect } from "react-router-dom";

/**
 * Loader function, to fetch all info in the "/" route
 * (like projects, user info, etc.)
 */
export async function loader() {
    const urlPath = (url: string) => `/data/${url}.json?url`;
    const urls = ['certifications', 'projects', 'skills'];
    let data = [];

    try {
        const responses = await Promise.all(urls.map(url => 
            fetch(urlPath(url))
        ));
        data = await Promise.all(responses.map(response => response.json()));

    } catch (error) {
        redirect('/error');
    }

    return json({data});
}