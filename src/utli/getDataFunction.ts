export const getProjects = async (page: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/projects/${page}`);
    if (!res.ok) throw Error("erro ");
    const data = await res.json();
    return data.projects;
  } catch (error) {
    console.log(error);
  }
};
