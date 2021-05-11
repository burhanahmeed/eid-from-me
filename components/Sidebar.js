import Fonts from '../staticApi/Fontfamily';

export default function Sidebar({payload, changePayload}) {
  const onChange = (val) => {
    changePayload(val);
  }
  return (
    <>
      <div className="mb-3">
        <label className="form-label">From</label>
        <input onChange={(e) => onChange(e)} name="from" value={payload.from} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ahmed & Fams" />
      </div>
      <div className="mb-3">
        <label className="form-label">Your Eid greetings</label>
        <textarea onChange={(e) => onChange(e)} name="text" value={payload.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <hr className="dropdown-divider my-5"></hr>
      <select onChange={(e) => onChange(e)} name="fontfamily" value={payload.fontfamily} className="form-select mb-3" aria-label="Default select example">
        {
          Fonts.map((font, i) => {
            return (
              <option key={i} value={font.id}>{font.text}</option>
            )
          })
        }
      </select>
      <div className="mb-3">
        <label className="form-label">Background URL</label>
        <input onChange={(e) => onChange(e)} name="bgImage" value={payload.bgImage} type="text" className="form-control" id="exampleFormControlInput1" placeholder="image url" />
      </div>
      <div className="mb-3">
        <label className="form-label">Overlay color</label>
        <input onChange={(e) => onChange(e)} name="bgOverlay" value={payload.bgOverlay} type="color" className="form-control" id="exampleFormControlInput1" />
      </div>
      <div className="mb-3">
        <label className="form-label">Overlay opacity</label>
        <input onChange={(e) => onChange(e)} name="bgOpacity" value={payload.bgOpacity} step="0.1" type="number" className="form-control" id="exampleFormControlInput1" placeholder="0" />
      </div>
      <div className="mb-3">
        <label className="form-label">Text color</label>
        <input onChange={(e) => onChange(e)} name="txtColor" value={payload.txtColor} type="color" className="form-control" id="exampleFormControlInput1" />
      </div>
    </>
  )
}