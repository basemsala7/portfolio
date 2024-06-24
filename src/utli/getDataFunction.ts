export const getProjects = async (page: string = "1") => {
  try {
    const res = await fetch(`${process.env.DOMAIN}/api/projects/${page}`);
    if (!res.ok) throw Error("erro ");
    const data = await res.json();
    return data.projects;
  } catch (error) {
    console.log(error);
  }
};
