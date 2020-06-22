import { api, setToken } from "@/commons/api";
import { clearToken } from "../../commons/api";

export default {
  state: {
    user: null,
    profile: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    async register({ commit }, { username, email, password }) {
      clearToken();
      let response = await api.post("/users", {
        user: {
          username,
          email,
          password
        }
      });
      commit("setUser", response.data.user);
      setToken(response.data.user.token);
    },
    async login({ commit }, { email, password }) {
      clearToken();
      let response = await api.post("/users/login", {
        user: { email, password }
      });
      commit("setUser", response.data.user);
      setToken(response.data.user.token);
    }
  },
  getters: {}
};
