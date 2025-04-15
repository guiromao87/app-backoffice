import api from "../services/config"

export const remove = async ({ endpoint }) => {
    try {
        await api.delete(endpoint);
    } catch (erro) {
        throw erro.response?.data;
    }
}

export const edit = async ({ endpoint, data }) => {
    try {
        await api.put(endpoint, data);
    } catch (erro) {
        throw erro.response?.data;
    }
}

export const get = async ({ endpoint }) => {
    try {
        const resposta = await api.get(endpoint);
        return resposta.data;
    } catch (erro) {
        throw erro.response?.data;
    }
}


export const add = async ({ endpoint, data }) => {
    try {
        await api.post(endpoint, data);
    } catch (erro) {
        throw erro.response?.data;
    }
}