import "./index.css";

export const TableData = ({ data, columns, actions = [] }) => {
  const formatValue = (col) => {
    if (col === "ativo") {
      return data[col] ? "Ativo" : "Inativo";
    } else if (col === "admin") {
      return data[col] ? "Sim" : "Não";
    } else if (col === "dataCriacao") {
      return new Date(data[col]).toLocaleDateString("pt-BR");
    } else if (col === "role") {
      const roleMap = {
        ROLE_ADMIN: "Administrador",
        ROLE_PSICOLOGO: "Psicólogo",
        ROLE_PACIENTE: "Paciente",
        ROLE_ASSISTENTE: "Assistente"
      };
      return roleMap[data[col]];
    }
    return data[col];
  };

  return (
    <tr>
      {columns.map((col, i) => (
        <td
          key={i}
          className={`td-content ${col === "comentario" ? "td-comment" : ""}`}
        >
          {formatValue(col)}
        </td>
      ))}

      <td>
        {actions.map(({ icon: Icon, onClick }, i) => (
          <Icon key={i} className="iconTd" onClick={onClick} />
        ))}
      </td>
    </tr>
  );
};
