import React from 'react'
import '../Insert/index.css'

function Insert() {
  return (
    <>
    <body>
    <div className="container">
      <div className="title">Registration</div>
      <form action='#'>
        <div className="turtle-details">
          <div className="input-box">
            <span className="details">Jumlah Telur</span>
            <input type="number" placeholder='Ex: 100' required />
          </div>
          </div>

          {/* Type penyu */}

          <div className="penyu-type">
            <span className="type-title">Jenis Penyu</span>
            <div className="category">
              <label htmlFor="">
                <span className="dot one">
                   <span className="gender">Belimbing</span>
                </span>
              </label>

              <label htmlFor="">
                <span className="dot one">
                   <span className="gender">Hijau</span>
                </span>
              </label>

              <label htmlFor="">
                <span className="dot one">
                   <span className="gender">Tempayan</span>
                </span>
              </label>

              <label htmlFor="">
                <span className="dot one">
                   <span className="gender">Pipih</span>
                </span>
              </label>

              <label htmlFor="">
                <span className="dot one">
                   <span className="gender">Sisik</span>
                </span>
              </label>
            </div>
            <div className="button">
              <input type='submit' value="Sheesh!" />
            </div>
          </div>

          {/* End of type penyu */}
          
      </form>
    </div>
    </body>
    </>
  )
}

export default Insert