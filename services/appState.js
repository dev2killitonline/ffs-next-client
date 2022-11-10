let AppState = {
  user: {
    userId: "",
    userName: "",
    Authorization: "",
    isLoggedIn: false
  },
  posts: {},
  currentArticle: {
    articleId: "",
    articleTitle: "",
    articleSlug: "",
    articleSummary: "",
    articleImage: "",
    articleMetaDescription: "",
    articleBrowserTitle: "",
    articleBody: "",
    articlePublished: "",
    articleStatus: "",
    articleOGImage: "",
    articleOGTitle: "",
    articleOGDescription: "",
    articleOGLink: ""
  },
  imageModal: false,
  imageAssign: () => {}
};

export default AppState;
