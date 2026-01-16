// src/config/theme.js

export const theme = {
  background: {
    // 60% purple-300, then transition to 40% white
    section: "bg-gradient-to-b from-purple-300 60% to-white 100%",
    bookCoverSide: "bg-gradient-to-br from-purple-100 to-white",
    navigationDots: "bg-white"
  },
  textColors: {
    primary: "text-purple-900",
    secondary: "text-purple-700",
    highlight: "text-purple-600",
    badge: "text-purple-800",
    wishlistSaved: "text-lime-600",
    wishlistDefault: "text-purple-600"
  },
  buttonColors: {
    primaryButton: {
      background: "bg-gradient-to-r from-purple-500 to-purple-400",
      hoverBackground: "hover:from-purple-600 hover:to-purple-500",
      textColor: "text-white"
    },
    secondaryButton: {
      background: "border-2 border-purple-400",
      hoverBackground: "hover:bg-purple-50",
      textColor: "text-purple-600"
    },
    wishlistButton: {
      savedBackground: "bg-lime-50 border-lime-400",
      defaultBackground: "border-purple-300 hover:bg-purple-50"
    }
  },
  iconColors: {
    starFilled: "text-lime-400",
    starEmpty: "text-purple-200",
    navigationArrow: "text-purple-600 hover:text-purple-800"
  },
  border: {
    default: "rounded-xl",
    button: "rounded-lg",
    navigationDot: "rounded-full"
  },
  shadow: {
    book: "shadow-2xl",
    container: "shadow-xl",
    button: "shadow-md hover:shadow-lg",
    navigationDotContainer: "shadow-sm"
  },
  layout: {
    sectionPadding: "py-12 px-4 sm:px-6 lg:px-8",
    containerWidth: "max-w-7xl"
  },
  ringEffect: "ring-1 ring-inset ring-purple-200",
  opacityOverlay: "opacity-10"
};

// Footer-specific theme configuration
export const footerTheme = {
  root: `${theme.background.section} ${theme.layout.sectionPadding} font-serif`,
  container: `${theme.layout.containerWidth} mx-auto`,
  heading: `text-3xl font-bold ${theme.textColors.primary} mb-4`,
  text: theme.textColors.secondary,
  socialIcon: `${theme.textColors.highlight} hover:text-purple-900 transition-colors`,
  link: `hover:text-purple-700 transition-colors`,
  divider: `border-t rounded-xl border-purple-700 opacity-30 mb-8`,
  copyright: theme.textColors.secondary,
  legalLink: `${theme.textColors.secondary} hover:text-purple-700 transition-colors`
};
