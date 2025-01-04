import React from 'react'
import Receive from '../../public/assets/receive.svg'
function dump() {
  return (
    <div>
        <div className='bg-slate-600 flex justify-center h-[800px] font-lato'>
            <div className='bg-red-500 w-[60%]'>
                <div>
                    <div className="title flex justify-between items-center w-[35%] ">
                        <div> <Receive width={32} height={32} className='text-primary bg-lightbg w-10 h-10 p-1 rounded-lg border-lightstrip border-[0.5px] shadow-custshadow2'/></div>
                        <div className='font-bold text-xxxl'>Receive</div>
                        </div>
                    <div className="row1"></div>
                    <div className="row2"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default dump