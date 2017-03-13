/**
 * Created by huanglibing on 2017/2/7.
 */

export const displayArticle = ({commit}, type) => {
  commit('DISPLAY_ARTICLE', type)
}

export const changeLoginway = ({commit}, loginway) => {
  commit('CHANGE_LOGINWAY', loginway)
}

export const changeArticleFlag = ({commit}, flag) => {
  commit('CHANGE_ARTICLEFLAG', flag)
}

export const displayTopic = ({commit}, type) => {
  commit('DISPLAY_TOPIC', type)
}
