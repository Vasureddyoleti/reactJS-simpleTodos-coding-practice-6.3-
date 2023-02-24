// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodo, deleteTodo} = props
  const {title, id} = eachTodo

  const onClickDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-item">
      <p className="title">{title}</p>
      <button type="button" onClick={onClickDelete} className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
