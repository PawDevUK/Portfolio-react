import React from 'react';
import { Link } from 'react-router-dom';

export default function TableRow({ index, exercise, delete: deleteExercise }) {
  console.log('That is Row:', exercise);

  return (
    <tr>
      <th scope='row'>{index}</th>
      <td>{exercise.username}</td>
      <td>{exercise.description}</td>
      <td>{exercise.duration + ' min'}</td>
      <td>{exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={'/edit/' + exercise._id}>edit</Link> |
        <a href='/#' onClick={() => deleteExercise(exercise._id)}>
          delete
        </a>
      </td>
    </tr>
  );
}
