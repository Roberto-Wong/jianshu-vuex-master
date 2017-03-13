/**
 * Created by huanglibing on 2017/2/7.
 */

export default {
  DISPLAY_ARTICLE (state, type) {
    state.show = type
    state.articles = state[type + 'Articles']
  },
  CHANGE_LOGINWAY (state, loginway) {
    state.loginway = loginway
  },
  CHANGE_ARTICLEFLAG (state, type) {
    state.articleFlag = type
  },
  DISPLAY_TOPIC (state, type) {
    state.show = type
    state.topicArticles = state[type + 'TopicArticles']
  }
}
