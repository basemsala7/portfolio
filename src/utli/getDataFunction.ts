export const getProjects = async (page: string) => {
  try {
    const res = await fetch(
      `https://vercel-test-256hr9u65-basemsala7s-projects.vercel.app/api/projects/${page}`
    );
    if (!res.ok) throw Error("erro ");
    const data = await res.json();
    return data.projects;
  } catch (error) {
    console.log(error);
  }
};
