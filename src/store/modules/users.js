import { api, setToken, getToken } from "@/commons/api";
import { clearToken } from "../../commons/api";

export default {
  state: {
    user: {},
    token: getToken()
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    async register({ commit }, { username, email, password }) {
      clearToken();
      commit("setUser", {});
      commit("setToken", null);
      let response = await api.post("/users", {
        user: {
          username,
          email,
          password
        }
      });
      commit("setUser", response.data.user);
      commit("setToken", response.data.user.token);
      setToken(response.data.user.token);
    },
    async login({ commit }, { email, password }) {
      clearToken();
      commit("setUser", {});
      commit("setToken", null);
      let response = await api.post("/users/login", {
        user: { email, password }
      });
      commit("setUser", response.data.user);
      commit("setToken", response.data.user.token);
      setToken(response.data.user.token);
    }
  },
  getters: {
    isAuthenticated: state => state.token != null
  }
};
