import { TrashIcon, PencilIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';


export default function TodoItem({ tarea, toggleCompleted, eliminarTarea, editarTarea }) {
  const [editando, setEditando] = useState(false);
  const [textoEditado, setTextoEditado] = useState(tarea.text);

  const handleGuardarEdicion = () => {
    if (textoEditado.trim()) {
      editarTarea(tarea.id, textoEditado.trim());
      setEditando(false);
    }
  };

  const handleCancelarEdicion = () => {
    setTextoEditado(tarea.text);
    setEditando(false);
  };

  return (
    <div className="flex justify-between items-center bg-gray-800 text-white p-4 mb-2 rounded">
      {editando ? (
        <input
          type="text"
          value={textoEditado}
          onChange={(e) => setTextoEditado(e.target.value)}
          className="flex-1 p-2 bg-gray-700 text-white rounded mr-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
      ) : (
        <span className={tarea.completed ? 'line-through text-gray-500' : 'text-white'}>
          {tarea.text}
        </span>
      )}

      <div className="flex items-center gap-3">
        <input
          className="w-4 h-4 cursor-pointer"
          type="checkbox"
          checked={tarea.completed}
          onChange={() => toggleCompleted(tarea.id)}
        />

        {editando ? (
          <>
            <button
              onClick={handleGuardarEdicion}
              className="text-green-500 hover:text-green-400"
              title="Guardar"
            >
              <CheckIcon className="w-5 h-5" />
            </button>
            <button
              onClick={handleCancelarEdicion}
              className="text-gray-500 hover:text-gray-400"
              title="Cancelar"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setEditando(true)}
              className="text-blue-500 hover:text-blue-400"
              title="Editar"
            >
              <PencilIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => eliminarTarea(tarea.id)}
              className="text-red-500 hover:text-red-400"
              title="Eliminar"
            >
              <TrashIcon className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}