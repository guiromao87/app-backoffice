import './index.css';

export const TableTitle = ({ columns }) => {
    return (
        <tr>
            {columns.map((col, i) => <th key={i} className='titleTh'>{col}</th>)}
        </tr>
    )
}