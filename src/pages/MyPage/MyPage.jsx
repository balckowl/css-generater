import React, { useState } from 'react'
import './MyPage.scss'

const MyPage = () => {

  const [judge, setJudge] = useState(1);

  return (
    <main>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="box-head p-2 ps-3">
              <h2 className='text-white'>My Page</h2>
            </div>
            <div className="row g-0">
              <div className="col-lg-3 bg-white">
                <div className="text-center">
                  <div className="my-ac my-4">
                    <img src="https://picsum.photos/150/150" alt="" />
                    <h3 className='mt-2'>Go Morishita</h3>
                  </div>
                  <div className='row g-0 justify-content-center'>
                    <div className="col-11">
                      <div className="select-box mb-3" onClick={() => setJudge(1)}>
                        <p className='p-2'>liner-gradient</p>
                      </div>
                      <div className="select-box my-3" onClick={() => setJudge(2)}>
                        <p className='p-2'>box-shadow</p>
                      </div>
                      <div className="select-box my-3" onClick={() => setJudge(3)}>
                        <p className='p-2'>text-shadow</p>
                      </div>
                      <div className="select-box my-3" onClick={() => setJudge(4)}>
                        <p className='p-2'>img-filter-generater</p>
                      </div>
                      <div className="select-box my-3" onClick={() => setJudge(5)}>
                        <p className='p-2'>QRcode-generater</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 code-box">
                {judge == 1 ? (<>
                  <h2 className='heading'>liner-gradient</h2>
                  <div className="row justify-content-center">
                    <div className="col-11">
                      <div className="save-box p-2 my-3">
                        code
                      </div>
                    </div>
                  </div>
                </>
                ) : (<></>)}
                {judge == 2 ? (<>
                  <h2 className='heading'>box-shadow</h2>
                  <div className="row justify-content-center">
                    <div className="col-11">
                      <div className="save-box p-2 my-3">
                        code
                      </div>
                      <div className="save-box p-2 my-3">
                        code
                      </div>
                    </div>
                  </div>
                </>
                ) : (<></>)}
                {judge == 3 ? (<>
                  <h2 className='heading'>text-shadow</h2>
                  <div className="row justify-content-center">
                    <div className="col-11">
                      <div className="save-box p-2 my-3">
                        code
                      </div>
                      <div className="save-box p-2 my-3">
                        code
                      </div>
                      <div className="save-box p-2 my-3">
                        code
                      </div>
                    </div>
                  </div>
                </>
                ) : (<></>)}
                {judge == 4 ? (<>
                  <h2 className='heading'>img-filter-generater</h2>
                  <div className="row justify-content-center">
                    <div className="col-11">
                      <div className="save-box p-2 my-3">
                        code
                      </div>
                      <div className="save-box p-2 my-3">
                        code
                      </div>
                      <div className="save-box p-2 my-3">
                        code
                      </div>
                      <div className="save-box p-2 my-3">
                        code
                      </div>
                    </div>
                  </div>
                </>
                ) : (<></>)}
                {judge == 5 ? (<>
                  <h2 className='heading'>QRcode-generater</h2>
                  <div className="row justify-content-center">
                    <div className="col-11">
                      <div className="save-box p-2 my-3">
                        code
                      </div>
                      <div className="save-box p-2 my-3">
                        code
                      </div>
                      <div className="save-box p-2 my-3">
                        code
                      </div>
                      <div className="save-box p-2 my-3">
                        code
                      </div>
                      <div className="save-box p-2 my-3">
                        code
                      </div>
                    </div>
                  </div>
                </>
                ) : (<></>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}

export default MyPage