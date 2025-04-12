import './index.css';
import { MdEdit, MdDelete } from "react-icons/md";

export const TableData = ({ data, onEdit, onRemove }) => {
    return (
        <tr>
            <td>
                {data.name}
            </td>

            <td>
                <MdEdit onClick={onEdit} className='iconTd'/>
                <MdDelete onClick={onRemove} className='iconTd' />
            </td>
        </tr>
    )
}