import { useState } from 'react';
import { useCrud } from './useCrud';
import { TableTitle } from '../Table/TableTitle';
import { TableData } from '../Table/TableData';
import { Modal } from '../Modal';
import { MdEdit } from 'react-icons/md';

export const CrudPage = ({ titlePage, endpoint, columns, placeholder }) => {
  const { items, error, saveItem, setError } = useCrud(endpoint);
  const [openModal, setOpenModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const handleEdit = (item) => {
    setEditingItem(item);
    setOpenModal(true);
  };

  const handleAdd = () => {
    setEditingItem(null);
    setOpenModal(true);
  };

  const handleSubmit = async (data) => {
    await saveItem(data, editingItem?.id);
    setOpenModal(false);
    setEditingItem(null);
  };

  return (
    <main className="main">
      <div className="main-title">
        <h1>{titlePage}</h1>
        <button id="add-content" onClick={handleAdd}>
          Adicionar
        </button>
      </div>

      <table>
        <TableTitle columns={[...columns.map((c) => c.label), 'Ações']} />
        <tbody>
          {items.map((item) => (
            <TableData
              columns={columns.map((col) => col.key)}
              actions={[{ icon: MdEdit, onClick: () => handleEdit(item) }]}
              key={item.id}
              data={item}
            />
          ))}
        </tbody>
      </table>

      {openModal && (
        <Modal
          error={error}
          title={editingItem ? `Editar ${titlePage}` : `Adicionar ${titlePage}`}
          placeholder={placeholder}
          defaultData={editingItem}
          onSubmit={handleSubmit}
          onClose={() => {
            setOpenModal(false);
            setError('');
          }}
        />
      )}
    </main>
  );
};
