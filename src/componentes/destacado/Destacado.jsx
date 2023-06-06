import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./destacado.scss";

export default function Destacado({type}) {
  return (
    <div className="destacado">
        {type && (
            <div className="categoria">
                <span>{type==="movie"?"Eventos":"Series"}</span>
                <select name="genero" id="genero">
                    <option >Género</option>
                    <option value="ppv">PPV</option>
                    <option value="raw">Raw</option>
                    <option value="smack">Smack Down</option>
                    <option value="rampage">AEW Rampage </option>
                    <option value="documental">Documental</option>

                </select>
            </div>
        )}
      <img
        width="100%"
        src="http://1.bp.blogspot.com/-kMaEHynunOg/UCIjI__73VI/AAAAAAAAAZE/03MO_DhSzzo/s1600/WWE+Events+Wallpaper+4.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88e30824-3c9a-4957-b6ab-394cb783aa20/dawz0m3-ea587699-7e03-42c6-94f4-a146c0f7da40.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4ZTMwODI0LTNjOWEtNDk1Ny1iNmFiLTM5NGNiNzgzYWEyMFwvZGF3ejBtMy1lYTU4NzY5OS03ZTAzLTQyYzYtOTRmNC1hMTQ2YzBmN2RhNDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.McvyGW3AklKobMFlu15tQtG6H2lN26Mnn88wEe2vuzA"
          alt=""
        />
        <span className="descripcion">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </span>
        <div className="botones">
          <button className="play">
            <PlayArrow />
            <span>Reproducir</span>
          </button>
          <button className="mas">
            <InfoOutlined />
            <span>Más Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
