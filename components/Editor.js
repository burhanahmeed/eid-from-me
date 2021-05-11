export default function Editor ({payload}) {
  return (
    <>
      <div className="wrapper-backdrop wrapper-backdrop-editor position-relative">
        <div 
          className="bg-image"
          style={{
            backgroundImage: `url('${payload.bgImage}')`
          }}
        ></div>
        <div style={{backgroundColor: payload.bgOverlay, opacity: payload.bgOpacity, position: "absolute", width: '100%', height: '100%', top: 0}}></div>
        <div
          className={`text-section container ${payload.fontfamily}`}
          style={{
            padding: '5px 25px',
            color: payload.txtColor,
          }}>
            <div className="text-center">
              <h1>{payload.text}</h1>
              <p className="fs-5">~ {payload.from} ~</p>
            </div>
        </div>
      </div>
    </>
  )
}