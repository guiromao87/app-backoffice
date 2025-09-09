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

  const formatRole = (role) => {
    switch (role) {
      case "ROLE_PSICOLOGO":
        return "Psicológo";
      case "ROLE_ADMIN":
        return "Admin";
      case "ROLE_PACIENTE":
        return "Paciente";
      case "ROLE_ASSISTENTE":
        return "Assistente";
    }
  }

  const items = [
    { label: "Id", value: details.id || "Vazio" },
    { label: "Nome", value: details.nome || "Vazio" },
    { label: "CRP", value: details.crp || "Vazio" },
    { label: "Email", value: details.email || "Vazio" },
    { label: "CPF", value: details.cpf || "Vazio" },
    { label: "Celular", value: details.celular || "Vazio" },
    { label: "Modalidade", value: details.modalidade || "Vazio" },
    { label: "Status", value: details.ativo ? "Ativo" : "Inativo" },
    { label: "Data de criação", value: formatData(details.dataCriacao) },
    {
      label: "Data de atualização",
      value: formatData(details.dataAtualizacao),
    },
  ];

  return (
    <main className="main" id="details">
      <div className="title">
        <button id="add-content" onClick={() => navigate(-1)}>
          <IoMdArrowRoundBack />
        </button>
        <h1 className="main-title">Detalhes do Psicólogo</h1>
      </div>

      <section className="info-group">
        {items.map((item) => (
          <p key={item.label}>
            <strong>{item.label}:</strong> {item.value}
          </p>
        ))}
      </section>

      <section className="list-section">
        <p>
          <strong>Roles</strong>
        </p>
        {details.roles?.map((role) => (
          <p className="list-item" key={role}>
            {formatRole(role)}
          </p>
        ))}
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