import { GetModuleProps } from "@/models"
import axiosClient from "."

const moduleApi = {
  getCategories: (id?: number) => {
    return axiosClient.post("/module_data_controller/get_category", {
      params: {
        categ_parent_id: id || false,
      },
    })
  },

  getModules: (id?: number) => {
    return axiosClient.post(
      "/module_data_controller/get_all_module_by_category",
      {
        params: {
          categ_id: id || false,
        },
      }
    )
  },

  getDetailModule: (params: GetModuleProps) => {
    return axiosClient.post(
      "/module_data_controller/get_detail_module_by_version",
      {
        params,
      }
    )
  },
}

export default moduleApi
