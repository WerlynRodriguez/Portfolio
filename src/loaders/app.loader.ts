import { json, redirect } from "react-router-dom";
import { UrlPath, GetProjects, ProjectPrefix } from "../utils/data.util";

/**
 * Loader function, to fetch all info in the "/" route
 * (like projects, user info, etc.)
 */
export async function loader() {
    const urls = ['certifications', 'skills'];

    let data: any[] = [];

    try {
        const responses = await Promise.all(urls.map(url => 
            fetch(UrlPath(url))
        ));

        data = await Promise.all(responses.map(response => response.json()));

        data.push(await GetProjects(ProjectPrefix.MAIN));

    } catch (error) {
        console.error(error);
        return redirect('/error', { status: 500 });
    }

    return json({data});
}