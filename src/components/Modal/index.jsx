import { useEffect, useState } from 'react';
import './index.css';
import { Toggle } from './Toggle';

export const Modal = ({
  placeholder,
  title,
  defaultData,
  onSubmit,
  onClose,
  error,
  showInput = true,
  showToggle = false,
}) => {
  const [input, setInput] = useState('');
  const [ativo, setAtivo] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ nome: input, ativo: ativo, admin: isAdmin });
  };

  useEffect(() => {
    if (defaultData) {
      setInput(defaultData.nome);
      setAtivo(defaultData.ativo);
      setIsAdmin(defaultData.admin);
    } else {
      setAtivo(true);
      setIsAdmin(false);
    }
  }, [defaultData]);

  return (
    <form onSubmit={handleSubmit} id="modal">
      <h3>{title}</h3>

      {showInput && (
        <input
          required
          value={input}
          type="text"
          placeholder={placeholder}
          onChange={(e) => setInput(e.target.value)}
        />
      )}

      {(defaultData || showToggle) && (
        <>
          <Toggle text="Ativar:" setToggle={setAtivo} toggle={ativo} />
          <Toggle text="Admin:" setToggle={setIsAdmin} toggle={isAdmin} />
        </>
      )}

      {error && <p className="error-message">{error}</p>}

      <div className="button-group">
        <button type="submit">{defaultData ? 'Salvar' : 'Adicionar'}</button>
        <button type="button" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </form>
  );
};
