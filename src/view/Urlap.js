import { useState } from "react";
export default function Urlap(props) {
    const [obj, setObj] = useState({ author: "", title: "" });
    function kuld(event) {
        event.preventDefault();
        console.log(obj);
        props.kuld(obj)
      }
      function adatValt(event) {
        const masolat = { ...obj };
        masolat[event.target.id] = event.target.value;
        setObj(masolat);
      }
    return (
        <>
          <h2>Új adat rögzítése</h2>
          <form onSubmit={kuld}>
            <div>
              <label htmlFor="author">Szerző: </label>
              <input
                type="text"
                onChange={adatValt}
                id="author"
                value={obj.author}
                placeholder="Vezetéknév Keresztnév"
                name="author"
              ></input>
              <label htmlFor="title">Cím: </label>
              <input
                type="text"
                onChange={adatValt}
                id="title"
                value={obj.title}
                name="title"
              ></input>
            </div>
            <input variant="success" type="submit" id="submit" value="OK" />
          </form>
        </>
      );

}