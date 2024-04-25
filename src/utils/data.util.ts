import i18n from "../i18n";

export enum ProjectPrefix {
  MAIN = "main",
  OTHER = "other",
  ALL = "all",
}

/**
 * Path string to get an banner image for a project
 */
export const ProjectBannerPath = (id: string, low?: boolean) =>
  `/images/banner_project_${id}${low ? "_low" : ""}.${
    low ? "webp" : "png"
  }?url`;

/**
 * Get a url to fetch a json file from the public folder
 */
export const UrlPath = (url: string) => `/data/${url}.json?url`;

/**
 * Get all the projects from the data public folder
 */
export async function GetProjects(
  /**
   * Prefix of what type of projects to fetch
   */
  prefix: ProjectPrefix,
  /**
   * Signal to abort the fetch request
   */
  signal = new AbortController().signal
) {
  const lang = i18n.resolvedLanguage ?? "en";
  const getUrls = (prefix: ProjectPrefix) => [
    `${prefix}.projects`,
    `${prefix}.projects/${lang}`,
  ];

  const urls =
    prefix === ProjectPrefix.ALL
      ? getUrls(ProjectPrefix.MAIN).concat(getUrls(ProjectPrefix.OTHER))
      : getUrls(prefix);

  /*
   * Projects data is divided by language, but the non translated info is in a separate file.
   */
  let data: any[] = [];

  try {
    const responses = await Promise.all(
      urls.map((url) => fetch(UrlPath(url), { signal }))
    );

    data = await Promise.all(responses.map((response) => response.json()));

    // Merge the non translated info with the translated info
    data[0].forEach((project: any, index: number) => {
      Object.assign(project, data[1][index]);
    });

    if (prefix === ProjectPrefix.ALL) {
      data[2].forEach((project: any, index: number) => {
        Object.assign(project, data[3][index]);
      });

      data = data.slice(0, 2).concat(data.slice(2));
      data[0].push(...data[2]);

      delete data[3];
      delete data[2];
    }
  } catch (error: any) {
    throw new Error(`Error getting proyects: ${error.message}`);
  }

  return data[0];
}
