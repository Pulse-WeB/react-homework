function ListsComponent() {
  return (
    <div>
      <ul>
        <li>Lorem, ipsum dolor.</li>
        <li>
          Lorem, ipsum dolor.
          <ul>
            <li>Вложенный элемент</li>
          </ul>
        </li>
        <li>Lorem, ipsum dolor.</li>
      </ul>
      <ol>
        <li>Lorem, ipsum dolor.</li>
        <li>
          Lorem, ipsum dolor.
          <ul>
            <li>Вложенный элемент</li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
export default ListsComponent;
