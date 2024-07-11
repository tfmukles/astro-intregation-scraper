import { Token } from "./constant";

export const getContribute = async ({
  userName,
  repoName,
  perPage = 1,
}: {
  userName: string;
  repoName: string;
  perPage?: number;
}) => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${userName}/${repoName}/contributors?per_page=${perPage}
      `,
      {
        headers: {
          Authorization: `token ${Token}`,
        },
      }
    );

    const linkHeader = response.headers.get("link");
    const lastPageMatch = linkHeader?.match(
      /<[^>]*[?&]page=(\d+)&[^>]*>; rel="last"/
    );
    const lastPageNumber = lastPageMatch ? lastPageMatch[1] : null;

    console.log({ lastPageNumber });

    return {
      totalContributors: lastPageNumber ?? 1,
      data: await response.json(),
    };
  } catch (error) {
    console.log({ error });
  }
};

export const getRepoDetails = async ({
  userName,
  repoName,
}: {
  userName: string;
  repoName: string;
}) => {
  const response = await fetch(
    `https://api.github.com/repos/${userName}/${repoName}`,
    {
      headers: {
        Authorization: `token ${Token}`,
      },
    }
  );
  return response.json();
};
