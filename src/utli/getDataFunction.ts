export const getProjects = async (page: string) => {
  try {
    const res = await fetch(
      `https://basem-portfolio.netlify.app/api/projects/${page}`
    );
    if (!res.ok) throw Error("erro ");
    const data = await res.json();
    return data.projects;
  } catch (error) {
    console.log(error);
  }
};
