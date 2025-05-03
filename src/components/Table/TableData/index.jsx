import './index.css';

export const TableData = ({ data, columns, actions = [] }) => {
    const formatValue = (col) => {
        if (col === "status") {
            return data[col] ? "Ativo" : "Inativo";
        }
        else if (col === "admin") {
            return data[col] ? "Sim" : "Não";
        }
        else if (col === "createdAt") {
            return new Date(data[col]).toLocaleDateString('pt-BR');
        }
        return data[col]
    }

    return (
        <tr>
            {columns.map((col, i) => (
                <td key={i} className="td-content">
                    {formatValue(col)}
                </td>
            ))}

            <td>
                {actions.map(({ icon: Icon, onClick }, i) => (
                    <Icon key={i} className="iconTd" onClick={onClick} />
                ))}
            </td>
        </tr>
    )
}