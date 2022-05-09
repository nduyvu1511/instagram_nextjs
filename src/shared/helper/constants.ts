export const DEFAULT_LIMIT_PRODUCT = 24
export const PHONE_SCHEMA = /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/
export const PASSWORD_SCHEMA =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
export const BASE64_REGEX =
  /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/

// Color
export const HEART_COLOR = "#ed4956"

export const BG_DARK_GRAY = "#252525"
export const BG_DARK = "#181818"
export const TEXT_DARK_HEADING = "#FFFFFF"
export const TEXT_DARK_OPACITY = "#808080"
export const TEXT_DARK = "#D2D2D2"
export const GRAY_COLOR = "#D2D2D2"

export const PRIMARY_COLOR = "#24B47E"
export const PRIMARY_COLOR_HOVER = "#00997B"
export const BLACK_10 = "rgba(0, 0, 0, 0.1)"
export const BLACK_20 = "rgba(0, 0, 0, 0.2)"
export const BLACK_30 = "rgba(0, 0, 0, 0.3)"
export const BLACK_40 = "rgba(0, 0, 0, 0.4)"
export const BLACK_50 = "rgba(0, 0, 0, 0.5)"
export const WHITE_10 = "rgba(255, 255, 255, 0.1)"
export const WHITE_20 = "rgba(255, 255, 255, 0.2)"
export const WHITE_30 = "rgba(255, 255, 255, 0.3)"
export const WHITE_40 = "rgba(255, 255, 255, 0.4)"
export const WHITE_50 = "rgba(255, 255, 255, 0.5)"

// Spacing
export const HEADER_HEIGHT = 70
export const CATEGORY_HEIGHT = 70
export const SIDEBAR_WIDTH = 75
export const SIDEBAR_EXPAND_WIDTH = 250

export const ROOT_API = process.env.ROOT_API || "https://demo.satavan.com/"
