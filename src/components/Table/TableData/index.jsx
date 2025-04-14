import { MdEdit } from "react-icons/md";
import './index.css';

export const TableData = ({ data, onEdit }) => {
    return (
        <tr>
            <td>
                {data.name}
            </td>

            <td className='statusTd'>
                {data.active === true ? "Ativo" : "Inativo"}
            </td>

            <td>
                <MdEdit onClick={onEdit} className='iconTd'/>
            </td>
        </tr>
    )
}