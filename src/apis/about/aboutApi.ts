import axios from "axios";
import BaseUrl from "@/apis/baseUrl";
import {GetAboutResponse} from "@/apis/about/interfaces/GetAboutResponse";

const AboutApi = {
  getAbout: () => {
    return axios.get<GetAboutResponse>(`${BaseUrl.nguyenDinhTrungService}/about`);
  }
}

export default AboutApi;
