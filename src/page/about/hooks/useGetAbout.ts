import {useQuery} from "@tanstack/react-query";
import AboutApi from "@/apis/about/aboutApi";

export const useGetAbout = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['about'],
    queryFn: AboutApi.getAbout,
  });
  return { about: data?.data, isLoading };
}
