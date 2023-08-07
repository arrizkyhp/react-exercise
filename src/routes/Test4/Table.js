// import DATA from "./_data";

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
        {data.map((item, index) => (
          <tr key={`${item}-${index}`}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </thead>
    </table>
  );
};

export default Table;
