export default function Editor ({payload, editor}) {
  return (
    <>
      <div className={`wrapper-backdrop ${editor ? 'wrapper-backdrop-editor' : 'wrapper-backdrop-live'} position-relative`}>
        <div 
          className={`bg-image ${editor ? 'bg-image-editor': 'bg-image-live'}`}
          style={{
            backgroundImage: `url('${payload.bgImage}')`
          }}
        ></div>
        <div style={{backgroundColor: payload.bgOverlay, opacity: payload.bgOpacity, position: "absolute", width: '100%', height: '100%', top: 0}}></div>
        <div className={`text-section ${payload.fontfamily}`}>
          <div
            className="container"
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
      </div>
    </>
  )
}