export default function stateReducer(state, action) {
  switch (action.type) {
    case "updateCurrentArticle":
      return { ...state, currentArticle: action.data };
    case "updateUserCredentials":
      return { ...state, user: { ...action.data, isLoggedIn: true } };
    case "clearCurrentArticle":
      return {
        ...state,
        currentArticle: {
          articleId: "",
          articleTitle: "",
          articleSlug: "",
          articleSummary: "",
          articleMetaDescription: "",
          articleBrowserTitle: "",
          articleBody: "",
          articlePublished: "",
          articleStatus: "",
          articleOGImage: "",
          articleOGTitle: "",
          articleOGDescription: "",
          articleOGLink: ""
        }
      };
    case "toggleImageModal":
      return { ...state, imageModal: action.data };
    case "setImageAssign":
      return { ...state, imageAssign: action.data };
  }
}
