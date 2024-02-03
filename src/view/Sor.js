export default function Sor(props) {
    //console.log(props)
    function kattintas(){
        console.log(props.obj.book_id)
       
          props.kattintas(props.obj.book_id)
      
    }
  return (
    <tr>
      <td>{props.obj.author}</td>
      <td>{props.obj.title}</td>
      <td><button className='torol' id='kattintas' onClick={kattintas}>törlés</button></td>

    </tr>
  );
}
