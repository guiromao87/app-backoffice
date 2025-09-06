import { useEffect } from "react";
import { useState } from "react";
import "./Detalhes.css"
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Detalhes = () => {
    const [details, setDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const detailsStorage = localStorage.getItem('details');

        if (detailsStorage) setDetails(JSON.parse(detailsStorage))
    }, []);

    const formatData = (data) => {
        return data != null ? new Date(data).toLocaleDateString('pt-BR') : "Não foi realizada";

    }
    return (
        <main className="main" id="details">
            <div className="title">
                <button id="add-content" onClick={() => navigate(-1)}>
                    <IoMdArrowRoundBack />
                </button>
                <h1 className="main-title">Detalhes do Psicólogo</h1>
            </div>

            <section className="info-group">
                <p><strong>Nome:</strong> {details.nome || "Vazio"}</p>
                <p><strong>CRP:</strong> {details.crp || "Vazio"}</p>
                <p><strong>Email:</strong> {details.email || "Vazio"}</p>
                <p><strong>CPF:</strong> {details.cpf || "Vazio"}</p>
                <p><strong>Celular:</strong> {details.celular || "Vazio"}</p>
                <p><strong>Modalidade:</strong> {details.modalidade || "Vazio"}</p>
                <p><strong>Status:</strong> {details.ativo ? "Ativo" : "Inativo"}</p>
                <p><strong>Data de criação:</strong> {formatData(details.dataCriacao)}</p>
                <p><strong>Data de atualização:</strong> {formatData(details.dataAtualizacao)}</p>
            </section>

            <section className="list-section">
                <p><strong>Abordagens</strong></p>
                {details.abordagens?.map((approach, index) => (
                    <p className="list-item" key={index}>{approach}</p>
                ))}

                <p><strong>Especialidades</strong></p>
                {details.especialidades?.map((speciality, index) => (
                    <p className="list-item" key={index}>{speciality}</p>
                ))}
            </section>
        </main>
    )
}