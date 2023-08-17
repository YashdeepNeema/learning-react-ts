import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slud: string;
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
