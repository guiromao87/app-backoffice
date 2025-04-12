import api from "../services/config"

export const remove = async ({ endpoint }) => {
    try {
        const resposta = await api.delete(endpoint);
        return resposta.data;
    } catch (erro) {
        alert("Erro ao remover:", erro);
    }
}

export const edit = async ({ endpoint, data }) => {
    try {
        await api.put(endpoint, data);
    } catch (erro) {
        alert("Erro ao editar:", erro);
    }
}

export const get = async ({ endpoint }) => {
    try {
        const resposta = await api.get(endpoint);
        return resposta.data;
    } catch (erro) {
        alert("Erro ao retornar abordagens:", erro);
    }
}