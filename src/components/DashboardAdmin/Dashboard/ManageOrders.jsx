import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ManageOrders = () => {
  const [data, setData] = useState([])
  // const [orderChange, setOrderChanged] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/orderDelete/orders')
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // const handleDelete = (id) => {
  //   axios
  //     .get(`http://localhost:5000/orderDelete/orderDelete/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //       setOrderChanged((prev) => !prev);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <div className='grid xl:grid-cols-3 gap-10 m-auto mt-14 md:grid-cols-2 grid-cols-1 max-w-6xl'>
        {data.map((item) => (
          <div key={item._id} className=' w-92 mx-auto text-center '>
            <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5'>
              <div className='p-5'>
                <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2'>
                  Name : {item.name}
                </h5>
                <h5 className='text-gray-900 font-bold text-xl tracking-tight mb-2'>
                  Address : {item.address}
                </h5>
                <h5 className='text-gray-900 font-bold text-xl tracking-tight mb-2'>
                  Phone Number : {item.phone}
                </h5>

                <p className='font-bold  text-xl text-gray-700 mb-3'>
                  Email : {item.email}
                </p>
                <p className='font-bold text-lg text-gray-700 mb-3'>
                  Car Name : {item.carName}
                </p>
                <p className='font-bold text-gray-700 mb-3'>
                  Model : {item.model}
                </p>
                <button
                  className='text-white ring-2 ring-blue-500 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center'
                  // onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ManageOrders
