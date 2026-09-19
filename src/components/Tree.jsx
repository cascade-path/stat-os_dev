function Tree({ task }) {
  return (
    <div style={{ marginLeft: 20 }}>
      <div id={task.id}>{task.title}</div>

      {task.children.map((child) => (
          <Tree key={child.id} task={child} />
      ))}
    </div>
  );
}

export default Tree