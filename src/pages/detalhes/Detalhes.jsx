import { useEffect } from "react";
import { useState } from "react";
import "./Detalhes.css"

export const Detalhes = () => {
    const [details, setDetails] = useState({});

    useEffect(() => {
        const detailsStorage = localStorage.getItem('details');

        if (detailsStorage) setDetails(JSON.parse(detailsStorage))
    }, []);

    const formatData = (data) => {
        return data != null ? new Date(data).toLocaleDateString('pt-BR') : "Não foi realizada";

    }
    return (
        <main className="main" id="details">
            <h1 className="main-title">Detalhes do Profissional</h1>

            <section className="info-group">
                <p><strong>Nome:</strong> {details.name || "Vazio"}</p>
                <p><strong>CRP:</strong> {details.crp || "Vazio"}</p>
                <p><strong>Email:</strong> {details.email || "Vazio"}</p>
                <p><strong>CPF:</strong> {details.cpf || "Vazio"}</p>
                <p><strong>Celular:</strong> {details.cellphone || "Vazio"}</p>
                <p><strong>Modalidade:</strong> {details.modality || "Vazio"}</p>
                <p><strong>Status:</strong> {details.actived ? "Ativo" : "Inativo"}</p>
                <p><strong>Data de criação:</strong> {formatData(details.createdAt)}</p>
                <p><strong>Data de atualização:</strong> {formatData(details.updatedAt)}</p>
            </section>

            <section className="list-section">
                <p><strong>Abordagens</strong></p>
                {details?.approaches?.map((approach, index) => (
                    <p className="list-item" key={index}>{approach.name}</p>
                ))}

                <p><strong>Especialidades</strong></p>
                {details?.specialities?.map((speciality, index) => (
                    <p className="list-item" key={index}>{speciality.name}</p>
                ))}
            </section>
        </main>
    )
}