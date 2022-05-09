export interface CategoryItem {
  categ_id: number
  name: string
  categ_parent_id: number
  icon: string
}

export interface Category {
  parent_category: CategoryItem[]
  child_categories: CategoryItem[]
}

export interface ResponseResult {
  result: {
    success: boolean
    message: string
    data: Category
  }
}

export interface GetModuleProps {
  module_id: number
  version_id: number
}

export interface ModuleItem {
  module_id: number
  module_name: string
  technical_name: string
  author: {
    author_id: number
    author_name: string
  }
  license: string
  license_description: string
  icon_image: string
  banner_image: string
  image_urls: string[]
  website: string
  video_youtube_url: string
  summary: string
  rating_star: number
  sale_count: number
  download_count: number
  is_free: boolean
  is_support: boolean
  is_paid: boolean
  sale_info: {
    price_unit: number
  }
  main_version: {
    version_id: number
    version_name: string
    odoo_version: string
    module_version: string
    git_branch: string
    file_data_url: string
    is_free: boolean
    is_support: boolean
    is_paid: boolean
    sale_info: {
      product_id: number
      product_name: number
      price_unit: number
    }
    description: string
  }
  supported_version: [
    {
      odoo_version: string
      version_id: number
      version_name: string
    },
    {
      odoo_version: string
      version_id: number
      version_name: string
    },
    {
      odoo_version: string
      version_id: number
      version_name: string
    },
    {
      odoo_version: string
      version_id: number
      version_name: string
    }
  ]
}

interface QueryModule {
  is_free?: boolean
  is_paid?: boolean
  is_support?: boolean
  odoo_version?: string
}

export type FilterType =
  | "top_rating"
  | "new_module"
  | "most_download"
  | "free_download"

export type SortType =
  | "name_increase"
  | "name_decrease"
  | "lowest_price"
  | "highest_price"
  | "rating_star"
  | "download_count"
  | "sale_count"
  | "lasted_update"
  | "best_seller"

export interface FilterModuleParams extends QueryModule {
  limit?: number
  offset?: number
  categ_id?: number
  standard_filters: FilterType[]
}

export interface SortModuleParams extends QueryModule {
  sorted_field?: SortType
}
