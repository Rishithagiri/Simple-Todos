// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="ti">
      <p className="tit">{title}</p>
      <button type="button" className="db" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
