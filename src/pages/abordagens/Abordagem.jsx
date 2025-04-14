import { useEffect, useState } from "react";
import { Modal } from "../../components/Modal";
import { TableData } from "../../components/Table/TableData";
import { TableTitle } from "../../components/Table/TableTitle";
import { add, edit, get } from "../../services/apiRequisitionsCommon";
import "./Abordagem.css";

const Abordagem = () => {
    const [openModal, setOpenModal] = useState(false);
    const [abordagens, setAbordagens] = useState([]);
    const [abordagemEditando, setAbordagemEditando] = useState(null);
    const [error, setError] = useState('')

    const fetchAbordagens = async () => {
        try {
            const data = await get({ endpoint: '/approaches' });
            setAbordagens(data);
            setError('');
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        fetchAbordagens();
    }, [])

    const handleEdit = (abordagem) => {
        setOpenModal(true);
        setAbordagemEditando(abordagem);
    }

    const handleSave = async (data) => {
        try {
            if (abordagemEditando) {
                await edit({ endpoint: `/approaches/${abordagemEditando.id}`, data: data });
            } else {
                await add({ endpoint: '/approaches', data: data });
            }

            await fetchAbordagens();
            setError('');
            setOpenModal(false);
            setAbordagemEditando(null);
        } catch (error) {
            setError(error);
        }
    };

    return (
        <main id="abordagem">
            <div className="abordagemTitle">
                <h1>Abordagem</h1>
                <button onClick={() => {
                    setOpenModal(true);
                    setAbordagemEditando(null);
                }}>Adicionar</button>
            </div>

            <table>
                <TableTitle />
                <tbody>
                    {abordagens.map((abordagem) => (
                        <TableData
                            onEdit={() => handleEdit(abordagem)}
                            key={abordagem.id}
                            data={abordagem} />
                    ))}
                </tbody>
            </table>

            {openModal &&
                <Modal
                    error={error}
                    title={abordagemEditando ? "Editar abordagem" : "Adicionar abordagem"}
                    placeholder="Nome da abordagem"
                    defaultData={abordagemEditando}
                    onSubmit={handleSave}
                    onClose={() => setOpenModal(false)} />}
        </main>
    )
}

export default Abordagem;