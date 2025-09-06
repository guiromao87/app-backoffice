import { useEffect, useState } from 'react';
import { add, edit, get } from '../../services/apiRequisitionsCommon';

export const useCrud = (endpoint) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  const fetchItems = async () => {
    try {
      const data = await get({ endpoint });
      setItems(data);
      setError('');
    } catch (err) {
      alert(err.message);
    }
  };

  const saveItem = async (item, id) => {
    try {
      if (id) {
        await edit({ endpoint: `${endpoint}/${id}`, data: item });
      } else {
        await add({ endpoint, data: item });
      }
      setError('');
      await fetchItems();
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return { items, error, fetchItems, saveItem, setError };
};
